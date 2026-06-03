// integration.js – Redirects "Proceed to Checkout" to PayMongo without freezing
const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

async function getCustomerEmail() {
  let email = localStorage.getItem('elevate_shop_email');
  if (!email) {
    email = prompt('Please enter your email address to proceed to checkout:');
    if (email && email.includes('@')) {
      localStorage.setItem('elevate_shop_email', email);
    } else {
      return null;
    }
  }
  return email;
}

async function initiateCheckout() {
  const email = await getCustomerEmail();
  if (!email) {
    alert('A valid email is required to purchase.');
    return;
  }

  // Access the global cart from your existing script.js
  if (typeof window.cart === 'undefined' || window.cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  // For this version, use the first product in the cart
  const product = window.cart[0];
  const productId = product.id;

  try {
    const response = await fetch(`${WORKER_URL}/create-checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, productId })
    });
    const data = await response.json();
    if (data.checkout_url) {
      window.location.href = data.checkout_url;
    } else {
      alert('Error creating checkout session. Please try again.');
      console.error(data);
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Network error. Please check your connection and try again.');
  }
}

// One global click listener – no button replacement, no mutation observer
document.body.addEventListener('click', (e) => {
  // Find the actual button clicked
  const button = e.target.closest('#confirm-checkout, .checkout-btn, .btn-primary.checkout-btn');
  if (button) {
    e.preventDefault();
    e.stopPropagation();
    // Also close the cart confirmation modal if it's open
    const confirmModal = document.getElementById('cart-confirm-modal');
    if (confirmModal) confirmModal.style.display = 'none';
    initiateCheckout();
  }
});
