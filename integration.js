// integration.js – Overrides the "Pay" button in the Secure Checkout modal
const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

// Helper to get the current cart from the global variable (script.js)
function getCart() {
  if (typeof window.cart !== 'undefined' && window.cart.length) {
    return window.cart;
  }
  return [];
}

// Create PayMongo checkout session for all items in cart
async function createPayMongoCheckout(email) {
  const cart = getCart();
  if (!cart.length) {
    alert('Your cart is empty.');
    return null;
  }

  // Build line items for PayMongo
  const line_items = cart.map(item => ({
    name: item.name,
    amount: Math.round(item.price * 100), // convert to cents
    currency: 'PHP',
    quantity: item.quantity
  }));

  try {
    const response = await fetch(`${WORKER_URL}/create-checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, cart: cart })
    });
    const data = await response.json();
    if (data.checkout_url) {
      return data.checkout_url;
    } else {
      console.error('Worker error:', data);
      alert('Could not start checkout. Please try again.');
      return null;
    }
  } catch (err) {
    console.error('Network error:', err);
    alert('Network error. Please check your connection.');
    return null;
  }
}

// Intercept the payment form submission
function setupPaymentFormOverride() {
  const paymentForm = document.getElementById('payment-form');
  if (!paymentForm) return;

  // Remove any existing submit listener (to avoid double execution)
  paymentForm.removeEventListener('submit', paymentFormHandler);
  paymentForm.addEventListener('submit', paymentFormHandler);
}

async function paymentFormHandler(e) {
  e.preventDefault();

  // Get email from the checkout modal
  const emailInput = document.getElementById('email');
  const email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  const checkoutUrl = await createPayMongoCheckout(email);
  if (checkoutUrl) {
    // Clear the cart before redirect? Not necessary, but can be done later.
    // Redirect to PayMongo hosted page
    window.location.href = checkoutUrl;
  }
}

// Run after DOM is ready and also after any dynamic content changes
document.addEventListener('DOMContentLoaded', () => {
  setupPaymentFormOverride();
});

// Also watch for the modal to open (in case the form is added dynamically)
const observer = new MutationObserver(() => setupPaymentFormOverride());
observer.observe(document.body, { childList: true, subtree: true });
