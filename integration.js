// integration.js – Redirects "Proceed to Checkout" buttons to PayMongo

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
    return false;
  }

  // Get products from cart (your cart array is in global `cart` from script.js)
  if (typeof window.cart === 'undefined' || window.cart.length === 0) {
    alert('Your cart is empty.');
    return false;
  }
  // For simplicity, we only support one product per checkout (since PayMongo checkout session expects line items)
  // But you could loop and create multiple line items. For now, take the first product.
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
      return true;
    } else {
      alert('Error creating checkout session. Please try again.');
      console.error(data);
      return false;
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Network error. Please check your connection and try again.');
    return false;
  }
}

// Override the "Proceed to Checkout" buttons
function overrideProceedButtons() {
  const buttons = document.querySelectorAll('#confirm-checkout, .checkout-btn, .btn-primary.checkout-btn');
  buttons.forEach(btn => {
    // Remove existing listeners by cloning
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Also close any open modals
      const cartModal = document.getElementById('cart-confirm-modal');
      if (cartModal) cartModal.style.display = 'none';
      await initiateCheckout();
    });
  });
}

// Run on load and after any DOM changes
overrideProceedButtons();
const observer = new MutationObserver(() => overrideProceedButtons());
observer.observe(document.body, { childList: true, subtree: true });
