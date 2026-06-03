// integration.js – Connects Elevate Shop "Buy Now" buttons to Cloudflare Worker checkout

const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

// Helper to get or prompt for email
async function getCustomerEmail() {
  let email = localStorage.getItem('elevate_shop_email');
  if (!email) {
    email = prompt('Please enter your email address to continue:');
    if (email && email.includes('@')) {
      localStorage.setItem('elevate_shop_email', email);
    } else {
      return null;
    }
  }
  return email;
}

// Create checkout session and redirect to PayMongo
async function initiateCheckout(productId, productName) {
  const email = await getCustomerEmail();
  if (!email) {
    alert('A valid email is required to purchase.');
    return;
  }

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
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Network error. Please check your connection and try again.');
  }
}

// Find all "Buy Now" buttons and attach event listeners
function attachBuyButtons() {
  const buyButtons = document.querySelectorAll('.add-to-cart-btn, .btn-buy');
  buyButtons.forEach(btn => {
    // Remove existing listener to avoid duplicates
    btn.removeEventListener('click', handleBuyClick);
    btn.addEventListener('click', handleBuyClick);
  });
}

function handleBuyClick(event) {
  event.preventDefault();
  const btn = event.currentTarget;
  const productId = btn.getAttribute('data-id');
  const productName = btn.closest('.carousel-item, .product-card')?.querySelector('h3')?.innerText || 'Product';
  if (!productId) {
    alert('Product ID missing. Please contact support.');
    return;
  }
  initiateCheckout(productId, productName);
}

// Re-run when products are dynamically loaded (e.g., filtering)
const observer = new MutationObserver(() => {
  attachBuyButtons();
});
observer.observe(document.body, { childList: true, subtree: true });

// Initial attachment
document.addEventListener('DOMContentLoaded', attachBuyButtons);
