// integration.js – Complete override of the "Pay" button (no fake alert)
const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

function getCart() {
  if (typeof window.cart !== 'undefined' && window.cart.length) {
    return window.cart;
  }
  return [];
}

// Capture-phase listener – runs BEFORE any other submit handlers
document.body.addEventListener('submit', async (e) => {
  const form = e.target.closest('#payment-form');
  if (!form) return;

  // Stop the event immediately – the old handler will never see it
  e.preventDefault();
  e.stopPropagation();

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
      window.location.href = data.checkout_url;
    } else {
      alert('Error creating checkout session. Please try again.');
      console.error(data);
    }
  } catch (err) {
    console.error(err);
    alert('Network error. Please check your connection.');
  }
}, true); // true = capture phase
