const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

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
    cartItems.push({ name, price, quantity });
  });
  return cartItems;
}

document.body.addEventListener('submit', async (e) => {
  const form = e.target.closest('#payment-form');
  if (!form) return;
  e.preventDefault();
  e.stopPropagation();

  const email = document.getElementById('email')?.value.trim();
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  const cart = getCartFromDOM();
  if (!cart.length) {
    alert('Your cart is empty.');
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
      let errorMsg = data.error || 'Unknown error';
      if (data.details) {
        errorMsg += '\n\nPayMongo says: ' + JSON.stringify(data.details);
      }
      alert('Error: ' + errorMsg);
      console.error(data);
    }
  } catch (err) {
    alert('Network error. Please check your connection.');
    console.error(err);
  }
}, true);
