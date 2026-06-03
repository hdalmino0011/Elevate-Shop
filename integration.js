// integration.js – Complete override of the "Pay" button
const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

// Helper to get the current cart from the global variable (script.js)
function getCart() {
  if (typeof window.cart !== 'undefined' && window.cart.length) {
    return window.cart;
  }
  return [];
}

// This will run before any other submit handler (thanks to `true` for capture)
document.body.addEventListener('submit', async (e) => {
  // Only care about the payment form
  const form = e.target.closest('#payment-form');
  if (!form) return;

  // Stop the event immediately – the old handler will never see it
  e.preventDefault();
  e.stopPropagation();

  // Get email from the checkout modal
  const emailInput = document.getElementById('email');
  const email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  const cart = getCart();
  if (!cart.length) {
    alert('Your cart is empty. Please add products before checking out.');
    return;
  }

  try {
    const response = await fetch(`${WORKER_URL}/create-checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, cart })
    });
    const data = await response.json();
    if (data.checkout_url) {
      // Redirect to the real PayMongo checkout page
      window.location.href = data.checkout_url;
    } else {
      alert('Error creating checkout session. Please try again.');
      console.error('Worker error:', data);
    }
  } catch (err) {
    console.error('Network error:', err);
    alert('Network error. Please check your connection.');
  }
}, true); // `true` = capture phase – runs before bubbling handlers
