// integration.js – Final, with DOM fallback and console logging
const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

// Read cart items directly from the cart sidebar DOM
function getCartFromDOM() {
  const cartItems = [];
  const container = document.getElementById('cart-items');
  if (!container) return cartItems;
  const items = container.querySelectorAll('.cart-item');
  items.forEach(item => {
    const titleEl = item.querySelector('.cart-item-title');
    const priceEl = item.querySelector('.cart-item-price');
    if (!titleEl || !priceEl) return;
    const name = titleEl.innerText;
    const priceMatch = priceEl.innerText.match(/\$([\d.]+)/);
    const price = priceMatch ? parseFloat(priceMatch[1]) : 0;
    const quantityMatch = priceEl.innerText.match(/x\s*(\d+)/);
    const quantity = quantityMatch ? parseInt(quantityMatch[1]) : 1;
    // Try to get product ID from name (you may have a mapping)
    const product = window.allProductsData ? window.allProductsData.find(p => p.name === name) : null;
    const id = product ? product.id : 0;
    cartItems.push({ name, price, quantity, id });
  });
  return cartItems;
}

async function initiateCheckout(email, cart) {
  if (!cart.length) {
    alert('Your cart is empty. Please add products before checking out.');
    return false;
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
      return true;
    } else {
      alert('Error creating checkout session. Please try again.');
      console.error(data);
      return false;
    }
  } catch (err) {
    console.error(err);
    alert('Network error. Please check your connection.');
    return false;
  }
}

// Capture-phase submit listener (runs before any other)
document.body.addEventListener('submit', async (e) => {
  const form = e.target.closest('#payment-form');
  if (!form) return;

  e.preventDefault();
  e.stopPropagation();

  const emailInput = document.getElementById('email');
  const email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  // Try to get cart from window.cart (if exposed)
  let cart = (typeof window.cart !== 'undefined' && window.cart && window.cart.length) ? window.cart : null;
  if (!cart || !cart.length) {
    // Fallback: read from DOM
    cart = getCartFromDOM();
    console.log('Cart from DOM:', cart);
  } else {
    console.log('Cart from window.cart:', cart);
  }

  await initiateCheckout(email, cart);
}, true);
