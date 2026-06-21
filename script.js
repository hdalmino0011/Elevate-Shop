// ElevateShop – Complete JavaScript
// Fix: removed client-side capture from success.html (handled server-side only)
// Fix: removed premature savePurchaseToHistory before payment confirmation
// FIX: Product list reordered to match GitHub filenames (1–21)

// ========== MERGED PRODUCT DATA (21 products, ordered by file number) ==========
const allProductsData = [
  // ID 1: 01-financial-freedom-blueprint.html
  { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 29.99, description: "A comprehensive digital course and workbook to transform your relationship with money.", fullDescription: "The Financial Freedom Blueprint is a complete system for building lasting wealth...", bestSeller: true },
  // ID 2: 02-wealth-mindset-masterclass.html
  { id: 2, name: "Wealth Mindset Masterclass", category: "financial", price: 27.99, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes.", fullDescription: "The Wealth Mindset Masterclass is an intensive deep-dive into the psychology of money...", bestSeller: false },
  // ID 3: 03-real-estate-investing-basics.html
  { id: 3, name: "Real Estate Investing Basics", category: "financial", price: 24.99, description: "A beginner's guide to real estate investing. Learn property analysis, financing options, rental income calculations.", fullDescription: "Real Estate Investing Basics demystifies one of the most powerful wealth-building tools...", bestSeller: true },
  // ID 4: 04-mindset-reset-program.html
  { id: 4, name: "Mindset Reset Program", category: "personal", price: 31.99, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your potential.", fullDescription: "The Mindset Reset Program is a transformative 30-day journey...", bestSeller: true },
  // ID 5: 05-productivity-mastery-system.html
  { id: 5, name: "Productivity Mastery System", category: "personal", price: 22.99, description: "Time management systems used by top CEOs. Daily planning templates, habit tracking tools, and procrastination elimination.", fullDescription: "The Productivity Mastery System is based on decades of research...", bestSeller: false },
  // ID 6: 06-health-and-wellness-blueprint.html
  { id: 6, name: "Health & Wellness Blueprint", category: "personal", price: 19.99, description: "Complete 90-day system for optimal health: nutrition, exercise, sleep, and stress management.", fullDescription: "The Health & Wellness Blueprint is a comprehensive 90-day system...", bestSeller: true },
  // ID 7: 07-daily-motivation-handbook.html
  { id: 7, name: "The Daily Motivation Handbook", category: "motivational", price: 19.99, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation.", fullDescription: "The Daily Motivation Handbook is a curated collection of 500+ quotes...", bestSeller: true },
  // ID 8: 08-resilience-toolkit.html
  { id: 8, name: "The Resilience Toolkit", category: "motivational", price: 24.99, description: "Practical guide to bouncing back from setbacks, building mental toughness, and thriving under pressure.", fullDescription: "The Resilience Toolkit is a collection of exercises, stories, and actionable strategies...", bestSeller: false },
  // ID 9: 09-morning-mastery.html
  { id: 9, name: "Morning Mastery Course", category: "motivational", price: 29.99, description: "Design the perfect morning routine to start each day with energy, focus, and purpose.", fullDescription: "Morning Mastery Course teaches you how to create a personalized morning routine...", bestSeller: true },
  // ID 10: 10-entrepreneur-toolkit.html
  { id: 10, name: "Entrepreneur's Success Toolkit", category: "business", price: 32.99, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs.", fullDescription: "The Entrepreneur's Success Toolkit is a complete business launch and scaling system...", bestSeller: true },
  // ID 11: 11-negotiation-skills-course.html (NEW product)
  { id: 11, name: "Negotiation Skills Course", category: "business", price: 29.99, description: "Learn the psychological principles behind effective negotiation in any situation.", fullDescription: "This course covers anchoring, framing, BATNA, and real-world tactics used by top dealmakers. Includes role‑play scripts and case studies.", bestSeller: false },
  // ID 12: 12-stock-market-investing-101.html
  { id: 12, name: "Stock Market Investing 101", category: "financial", price: 19.99, description: "Understand stocks, ETFs, and building a diversified portfolio.", fullDescription: "A beginner-friendly guide to stock market investing...", bestSeller: true },
  // ID 13: 13-budgeting-that-works.html
  { id: 13, name: "Budgeting That Works", category: "financial", price: 19.99, description: "Practical budgeting system to save money and reduce stress.", fullDescription: "A downloadable workbook and video course...", bestSeller: false },
  // ID 14: 14-emotional-intelligence-mastery.html
  { id: 14, name: "Emotional Intelligence Mastery", category: "personal", price: 27.99, description: "Develop self-awareness, empathy, and relationship skills.", fullDescription: "Learn to recognize and manage your emotions...", bestSeller: true },
  // ID 15: 15-public-speaking-and-presentation.html
  { id: 15, name: "Public Speaking and Presentation", category: "motivational", price: 32.99, description: "Overcome fear and deliver powerful presentations with confidence.", fullDescription: "Video course with practical exercises to conquer stage fright...", bestSeller: false },
  // ID 16: 16-sleep-optimization-guide.html
  { id: 16, name: "Sleep Optimization Guide", category: "personal", price: 15.99, description: "Science-based techniques for deeper, more restorative sleep.", fullDescription: "Discover how to improve sleep quality...", bestSeller: false },
  // ID 17: 17-daily-gratitude-journal.html
  { id: 17, name: "Daily Gratitude Journal", category: "motivational", price: 12.99, description: "A 90-day guided journal to cultivate gratitude and positivity.", fullDescription: "Daily prompts and reflections to rewire your brain for happiness...", bestSeller: true },
  // ID 18: 18-daily-motivation-mastery.html
  { id: 18, name: "Daily Motivation Mastery", category: "motivational", price: 24.99, description: "365 powerful quotes and affirmations to ignite your inner drive.", fullDescription: "A curated collection of daily inspiration drawn from history's greatest thinkers...", bestSeller: true },
  // ID 19: 19-social-media-marketing-masterclass.html
  { id: 19, name: "Social Media Marketing Masterclass", category: "business", price: 27.99, description: "Master Instagram, TikTok, LinkedIn, and Facebook marketing.", fullDescription: "Social Media Marketing Masterclass teaches you everything you need to dominate social media...", bestSeller: false },
  // ID 20: 20-influencer-growth-blueprint.html
  { id: 20, name: "Influencer Growth Blueprint", category: "business", price: 22.99, description: "Turn your personal brand into a profitable business.", fullDescription: "Step-by-step guide to building a loyal audience...", bestSeller: false },
  // ID 21: 21-startup-financial-modeling.html
  { id: 21, name: "Startup Financial Modeling", category: "business", price: 29.99, description: "Master financial projections for startups.", fullDescription: "Learn to build realistic financial models...", bestSeller: true }
];

const extraProductsData = [];
const testimonials = [
  { text: "These products completely changed how I think about money and my potential. The Financial Freedom Blueprint alone helped me pay off $18,000 in debt.", author: "Marcus T., Customer" },
  { text: "The Mindset Reset Program rewired my thinking. I've never felt more confident and capable. Highly recommended!", author: "Sarah J., Entrepreneur" },
  { text: "Wealth Mindset Masterclass is a game-changer. I've doubled my freelance income in three months.", author: "David L., Freelancer" },
  { text: "The Daily Motivation Handbook keeps me focused every morning. A small investment with massive returns.", author: "Elena R., Executive" }
];

const WORKER_URL = 'https://elevate-shop-worker.dalminohanz14.workers.dev';

let cart = [];
let currentFilter = "all";
let currentSearchTerm = "";
let loggedInUser = null;

// ========== HELPER FUNCTIONS ==========
function getCategoryName(cat) {
  const map = { financial: "Financial Literacy", personal: "Personal Development", motivational: "Motivational", business: "Business & Success" };
  return map[cat] || cat;
}

function updateCurrentDate() {
  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    const now = new Date();
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();
    dateEl.textContent = `${weekday}, ${month} ${day}, ${year}`;
  }
}

// ========== SEARCH & FILTER ==========
function filterBySearch(products, term) {
  if (!term.trim()) return products;
  const lowerTerm = term.toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(lowerTerm));
}

// Render Top Selections Carousel
function renderFilteredCarousel() {
  const track = document.getElementById('product-carousel-track');
  if (!track) return;
  let filtered = [...allProductsData];
  if (currentFilter !== 'all') filtered = filtered.filter(p => p.category === currentFilter);
  filtered = filterBySearch(filtered, currentSearchTerm);
  track.innerHTML = '';
  filtered.forEach(p => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    const bestSellerHtml = p.bestSeller ? '<div class="best-seller-badge" style="position: relative; top: auto; right: auto; display: inline-block; margin-bottom: 8px; font-size: 9px; padding: 2px 8px;">BEST SELLER</div>' : '';
    item.innerHTML = `
      ${bestSellerHtml}
      <div class="category">${getCategoryName(p.category)}</div>
      <h3>${p.name}</h3>
      <p class="description">${p.description.substring(0, 100)}...</p>
      <div class="price">$${p.price.toFixed(2)}</div>
      <div class="product-actions">
        <button class="btn-small details-btn" data-id="${p.id}">Details</button>
        <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
      </div>
    `;
    track.appendChild(item);
  });
  attachCarouselItemEvents();
  if (window.productCarousel && window.innerWidth >= 768) {
    window.productCarousel.items = Array.from(track.children);
    window.productCarousel.itemCount = window.productCarousel.items.length;
    window.productCarousel.currentIndex = 0;
    window.productCarousel.update();
  }
}

// Render Grid Carousel
function renderGridCarousel() {
  const track = document.getElementById('grid-carousel-track');
  if (!track) return;
  let filtered = [...allProductsData];
  if (currentFilter !== 'all') filtered = filtered.filter(p => p.category === currentFilter);
  filtered = filterBySearch(filtered, currentSearchTerm);
  track.innerHTML = '';
  filtered.forEach(p => {
    const item = document.createElement('div');
    item.className = 'grid-carousel-item';
    const bestSellerHtml = p.bestSeller ? '<div class="best-seller-badge" style="position: relative; top: auto; right: auto; display: inline-block; margin-bottom: 8px; font-size: 9px; padding: 2px 8px;">BEST SELLER</div>' : '';
    item.innerHTML = `
      ${bestSellerHtml}
      <div class="category">${getCategoryName(p.category)}</div>
      <h3>${p.name}</h3>
      <p class="description">${p.description.substring(0, 100)}...</p>
      <div class="price">$${p.price.toFixed(2)}</div>
      <div class="product-actions">
        <button class="btn-small details-btn" data-id="${p.id}">Details</button>
        <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
      </div>
    `;
    track.appendChild(item);
  });
  attachGridCarouselEvents();
  if (window.gridCarousel && window.innerWidth >= 768) {
    window.gridCarousel.items = Array.from(track.children);
    window.gridCarousel.itemCount = window.gridCarousel.items.length;
    window.gridCarousel.currentIndex = 0;
    window.gridCarousel.update();
  }
}

function attachGridCarouselEvents() {
  document.querySelectorAll('#grid-carousel-track .add-to-cart-btn').forEach(btn => {
    btn.removeEventListener('click', handleAddToCart);
    btn.addEventListener('click', handleAddToCart);
  });
  document.querySelectorAll('#grid-carousel-track .details-btn').forEach(btn => {
    btn.removeEventListener('click', showProductDetail);
    btn.addEventListener('click', showProductDetail);
  });
}

function updateSearch(term) {
  currentSearchTerm = term;
  renderFilteredCarousel();
  renderGridCarousel();
  if (window.productCarousel && window.innerWidth >= 768) {
    window.productCarousel.currentIndex = 0;
    window.productCarousel.update();
  }
  if (window.gridCarousel && window.innerWidth >= 768) {
    window.gridCarousel.currentIndex = 0;
    window.gridCarousel.update();
  }
  const productsSection = document.getElementById('products-section');
  if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== ACCOUNT SYSTEM ==========
function getUsers() {
  const stored = localStorage.getItem('elevateShop_users');
  return stored ? JSON.parse(stored) : [];
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('elevateShop_users', JSON.stringify(users));
}

function findUserByEmail(email) {
  const users = getUsers();
  return users.find(u => u.email === email);
}

function isValidPassword(password) {
  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasMinLength && hasLetter && hasNumber;
}

function updateLoginUI() {
  const loginLink = document.getElementById('login-link');
  const logoutLink = document.getElementById('logout-link');
  const orderHistoryLink = document.getElementById('order-history-link');
  const welcomeSpan = document.getElementById('logged-in-welcome');
  if (loggedInUser) {
    loginLink.style.display = 'none';
    logoutLink.style.display = 'inline';
    if (orderHistoryLink) orderHistoryLink.style.display = 'inline';
    welcomeSpan.style.display = 'inline';
    welcomeSpan.textContent = `Welcome, ${loggedInUser.name}`;
  } else {
    loginLink.style.display = 'inline';
    logoutLink.style.display = 'none';
    if (orderHistoryLink) orderHistoryLink.style.display = 'none';
    welcomeSpan.style.display = 'none';
  }
}

// ========== ORDER HISTORY ==========
function getPurchaseHistory() {
  const stored = localStorage.getItem('elevateShop_purchases');
  return stored ? JSON.parse(stored) : [];
}

// NOTE: savePurchaseToHistory is now only called AFTER payment is confirmed
// (i.e. from success.html or a post-payment callback), NOT during checkout initiation.
function savePurchaseToHistory(products, total) {
  if (!loggedInUser) return false;
  const purchases = getPurchaseHistory();
  const newOrder = {
    id: Date.now(),
    email: loggedInUser.email,
    date: new Date().toISOString(),
    products: products.map(p => ({ id: p.id, name: p.name, price: p.price })),
    total: total
  };
  purchases.push(newOrder);
  localStorage.setItem('elevateShop_purchases', JSON.stringify(purchases));
  return true;
}

function hasUserPurchasedProduct(productId) {
  if (!loggedInUser) return false;
  const purchases = getPurchaseHistory();
  const userPurchases = purchases.filter(p => p.email === loggedInUser.email);
  return userPurchases.some(order => order.products.some(p => p.id === productId));
}

function renderOrderHistory() {
  const container = document.getElementById('order-history-list');
  if (!container) return;
  const purchases = getPurchaseHistory();
  const userPurchases = purchases.filter(p => p.email === loggedInUser?.email);
  if (userPurchases.length === 0) {
    container.innerHTML = '<p class="empty-message">No orders yet.</p>';
    return;
  }
  container.innerHTML = '';
  userPurchases.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-history-item';
    const dateStr = new Date(order.date).toLocaleDateString();
    const productNames = order.products.map(p => p.name).join(', ');
    orderDiv.innerHTML = `
      <div class="order-date">${dateStr}</div>
      <div class="order-products">${productNames}</div>
      <div class="order-total">Total: $${order.total.toFixed(2)}</div>
      <button class="order-details-btn" data-order-id="${order.id}">Details</button>
    `;
    container.appendChild(orderDiv);
  });
  document.querySelectorAll('.order-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const orderId = parseInt(e.target.dataset.orderId);
      const order = userPurchases.find(o => o.id === orderId);
      if (order) showOrderDetail(order);
    });
  });
}

function showOrderDetail(order) {
  const modal = document.getElementById('order-detail-modal');
  const content = document.getElementById('order-detail-content');
  if (!modal || !content) return;
  let html = `<p><strong>Order Date:</strong> ${new Date(order.date).toLocaleString()}</p>`;
  html += `<p><strong>Products purchased:</strong></p><ul>`;
  order.products.forEach(p => {
    const fullProduct = allProductsData.find(prod => prod.id === p.id);
    html += `<li><strong>${p.name}</strong> – $${p.price.toFixed(2)}<br>`;
    if (fullProduct && fullProduct.fullDescription) {
      html += `<span style="font-size:13px; color:#666;">${fullProduct.fullDescription.substring(0, 200)}...</span>`;
    } else {
      html += `<span style="font-size:13px; color:#666;">${p.description || ''}</span>`;
    }
    html += `</li>`;
  });
  html += `</ul><p><strong>Total:</strong> $${order.total.toFixed(2)}</p>`;
  content.innerHTML = html;
  modal.style.display = 'flex';
}

function openOrderHistorySidebar() {
  renderOrderHistory();
  const sidebar = document.getElementById('order-history-sidebar');
  if (sidebar) sidebar.classList.add('open');
}

function closeOrderHistorySidebar() {
  const sidebar = document.getElementById('order-history-sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

// ========== CART LOGIC ==========
function addToCart(product) {
  if (hasUserPurchasedProduct(product.id)) {
    showAlreadyPurchasedModal();
    return false;
  }
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    alert("This product is already in your cart.");
    return false;
  }
  cart.push({ ...product, quantity: 1 });
  updateCartUI();
  return true;
}

// ========== ALREADY PURCHASED MODALS ==========

function showAlreadyPurchasedModal() {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal';
  modalOverlay.style.display = 'flex';
  modalOverlay.style.position = 'fixed';
  modalOverlay.style.top = '0';
  modalOverlay.style.left = '0';
  modalOverlay.style.width = '100%';
  modalOverlay.style.height = '100%';
  modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
  modalOverlay.style.zIndex = '3000';
  modalOverlay.style.alignItems = 'center';
  modalOverlay.style.justifyContent = 'center';

  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = 'white';
  modalContent.style.maxWidth = '400px';
  modalContent.style.width = '90%';
  modalContent.style.padding = '28px';
  modalContent.style.borderRadius = '4px';
  modalContent.style.textAlign = 'center';
  modalContent.style.position = 'relative';
  modalContent.style.borderTop = '3px solid var(--masthead-red-brown)';

  modalContent.innerHTML = `
    <h3 style="color: var(--masthead-red-brown, #942222); margin-bottom: 16px;">Already Purchased</h3>
    <p style="margin-bottom: 20px;">You have already purchased this product. Would you like to view your order history?</p>
    <div style="display: flex; gap: 12px; justify-content: center;">
      <button id="already-purchased-view-history" class="btn-primary">View Order History</button>
      <button id="already-purchased-go-back" class="btn-secondary">Go Back</button>
    </div>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  const closeModal = () => modalOverlay.remove();

  document.getElementById('already-purchased-view-history').addEventListener('click', () => {
    closeModal();
    openOrderHistorySidebar();
  });
  document.getElementById('already-purchased-go-back').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
}

function showAlreadyPurchasedByEmailModal(email) {
  const modalOverlay = document.createElement('div');
  modalOverlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:3000;display:flex;align-items:center;justify-content:center;padding:16px;';

  const modalContent = document.createElement('div');
  modalContent.style.cssText = 'background:white;max-width:420px;width:100%;padding:32px;border-radius:4px;text-align:center;position:relative;border-top:3px solid var(--masthead-red-brown, #942222);box-shadow:0 4px 20px rgba(0,0,0,0.15);';

  modalContent.innerHTML = `
    <h3 style="color:var(--masthead-red-brown, #942222);margin-bottom:12px;font-size:18px;">Already Purchased</h3>
    <p style="margin-bottom:8px;font-size:15px;">The email <strong>${email}</strong> has already completed a purchase on Elevate Shop.</p>
    <p style="margin-bottom:24px;font-size:13px;color:#666;line-height:1.6;">If you need to re-access your product, check your inbox for the original access email, or visit the access page to enter your credentials.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <a href="access.html" style="display:inline-block;background:var(--masthead-red-brown,#942222);color:white;padding:10px 22px;border-radius:2px;font-weight:700;font-size:13px;text-decoration:none;font-family:Georgia,serif;">Access My Product</a>
      <button id="already-email-go-back" style="display:inline-block;background:transparent;border:1.5px solid #c8baa8;color:#3d3022;padding:10px 22px;border-radius:2px;font-weight:700;font-size:13px;cursor:pointer;font-family:Georgia,serif;">Go Back</button>
    </div>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  const closeModal = () => modalOverlay.remove();
  document.getElementById('already-email-go-back').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  document.getElementById('cart-count').innerText = totalItems;
  const container = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-message">Your cart is empty</p>';
    totalSpan.innerText = '0.00';
    return;
  }
  let html = '', total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">Remove</button>
      </div>
    `;
  });
  container.innerHTML = html;
  totalSpan.innerText = total.toFixed(2);
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      removeFromCart(id);
    });
  });
}

// ========== CART CONFIRMATION MODAL ==========
function showCartConfirmModal(product, onConfirm) {
  const confirmModal = document.getElementById('cart-confirm-modal');
  if (!confirmModal) return;
  confirmModal.style.display = 'flex';

  const checkoutBtn = document.getElementById('confirm-checkout');
  const continueBtn = document.getElementById('confirm-continue');
  const closeBtn = document.getElementById('close-confirm');

  const handlerCheckout = () => {
    confirmModal.style.display = 'none';
    if (onConfirm) onConfirm(true);
    openPaymentRedirectModal();
    cleanup();
  };
  const handlerContinue = () => {
    confirmModal.style.display = 'none';
    if (onConfirm) onConfirm(false);
    cleanup();
  };
  const handlerClose = () => {
    confirmModal.style.display = 'none';
    if (onConfirm) onConfirm(false);
    cleanup();
  };

  function cleanup() {
    checkoutBtn.removeEventListener('click', handlerCheckout);
    continueBtn.removeEventListener('click', handlerContinue);
    closeBtn.removeEventListener('click', handlerClose);
  }

  checkoutBtn.addEventListener('click', handlerCheckout);
  continueBtn.addEventListener('click', handlerContinue);
  closeBtn.addEventListener('click', handlerClose);
}

// ========== PAYMENT REDIRECT MODAL ==========
function openPaymentRedirectModal() {
  const modal = document.getElementById('payment-redirect-modal');
  if (!modal) return;
  const emailInput = document.getElementById('redirect-email');
  if (emailInput && loggedInUser && loggedInUser.email) {
    emailInput.value = loggedInUser.email;
  }
  modal.style.display = 'flex';
}

function closePaymentRedirectModal() {
  const modal = document.getElementById('payment-redirect-modal');
  if (modal) modal.style.display = 'none';
  const loadingDiv = document.getElementById('redirect-loading');
  if (loadingDiv) loadingDiv.style.display = 'none';
  const payBtn = document.getElementById('confirm-redirect-btn');
  if (payBtn) payBtn.disabled = false;
}

// ========== PAYPAL CHECKOUT ==========
// KEY FIX: We no longer call savePurchaseToHistory() here.
// Order history is only saved AFTER confirmed payment (server-side).
// We also no longer do any capture on the client — the worker webhook
// and the success.html polling handle everything server-side.
async function initiatePayPalCheckout() {
  const emailInput = document.getElementById('redirect-email');
  const email = emailInput ? emailInput.value.trim() : '';

  if (!email) {
    alert('Please enter your email address.');
    return;
  }
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  const loadingDiv = document.getElementById('redirect-loading');
  const payBtn = document.getElementById('confirm-redirect-btn');

  if (loadingDiv) loadingDiv.style.display = 'block';
  if (payBtn) payBtn.disabled = true;

  // ── Server-side duplicate purchase check ──
  try {
    const checkResp = await fetch(`${WORKER_URL}/check-purchase`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const checkData = await checkResp.json();

    if (checkData.purchased) {
      if (loadingDiv) loadingDiv.style.display = 'none';
      if (payBtn) payBtn.disabled = false;
      closePaymentRedirectModal();
      showAlreadyPurchasedByEmailModal(email);
      return;
    }
  } catch (err) {
    console.warn('Purchase duplicate check failed (non-fatal), proceeding:', err);
    if (loadingDiv) loadingDiv.style.display = 'none';
    if (payBtn) payBtn.disabled = false;
  }

  // Store purchase info in sessionStorage so success.html can use the email
  // for polling. Cart is included so success.html has product context.
  // ⚠️  We do NOT save to order history here — only after confirmed payment.
  try {
    sessionStorage.setItem('pendingPurchase', JSON.stringify({ email, cart }));
  } catch (e) {
    console.warn('sessionStorage unavailable:', e);
  }

  if (loadingDiv) loadingDiv.style.display = 'block';
  if (payBtn) payBtn.disabled = true;

  try {
    const response = await fetch(`${WORKER_URL}/create-paypal-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, cart })
    });
    const data = await response.json();

    if (data.approval_url) {
      cart = [];
      updateCartUI();
      closePaymentRedirectModal();
      const cartSidebar = document.getElementById('cart-sidebar');
      if (cartSidebar) cartSidebar.classList.remove('open');
      window.location.href = data.approval_url;
    } else {
      alert('Error creating PayPal order: ' + (data.error || 'Unknown error'));
      console.error('PayPal order error:', data);
      if (loadingDiv) loadingDiv.style.display = 'none';
      if (payBtn) payBtn.disabled = false;
    }
  } catch (err) {
    console.error('Network error during checkout:', err);
    alert('Network error. Please try again.');
    if (loadingDiv) loadingDiv.style.display = 'none';
    if (payBtn) payBtn.disabled = false;
  }
}

// ========== ADD TO CART HANDLER ==========
function handleAddToCart(e) {
  const id = parseInt(e.currentTarget.dataset.id);
  let product = allProductsData.find(p => p.id === id);
  if (!product) return;
  if (addToCart(product)) {
    showCartConfirmModal(product, (proceedToCheckout) => {
      if (!proceedToCheckout) {
        const btn = e.currentTarget;
        const originalText = btn.textContent;
        btn.textContent = "Added!";
        setTimeout(() => { btn.textContent = originalText; }, 800);
      }
    });
  }
}

// ========== FILTERING ==========
function filterProducts(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn, .filter-link').forEach(btn => {
    if (btn.dataset.filter === category) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  renderFilteredCarousel();
  renderGridCarousel();
  const productsSection = document.getElementById('products-section');
  if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== PRODUCT DETAIL MODAL ==========
function showProductDetail(e) {
  const id = parseInt(e.currentTarget.dataset.id);
  let product = allProductsData.find(p => p.id === id);
  if (!product) return;
  document.getElementById('detail-label').innerText = getCategoryName(product.category);
  document.getElementById('detail-title').innerText = product.name;
  document.getElementById('detail-subtitle').innerText = product.description;
  const fullText = product.fullDescription || product.description;
  const paragraphs = fullText.split('\n\n').filter(p => p.trim().length > 0);
  const detailBody = document.getElementById('detail-body');
  detailBody.innerHTML = paragraphs.map(para => `<p>${para.trim()}</p>`).join('');
  document.getElementById('detail-price').innerHTML = `$${product.price.toFixed(2)}`;
  const addBtn = document.getElementById('detail-add-to-cart');
  addBtn.onclick = () => {
    const fakeEvent = { currentTarget: { dataset: { id: product.id } } };
    handleAddToCart(fakeEvent);
    document.getElementById('detail-modal').style.display = 'none';
  };
  document.getElementById('detail-modal').style.display = 'flex';
}

// ========== CAROUSEL CLASSES ==========
class ProductCarousel {
  constructor(trackId, itemsPerView, autoInterval = 4000) {
    this.track = document.getElementById(trackId);
    if (!this.track) return;
    this.items = Array.from(this.track.children);
    this.itemCount = this.items.length;
    this.itemsPerView = itemsPerView;
    this.currentIndex = 0;
    this.autoInterval = null;
    this.autoIntervalTime = autoInterval;
    this.isDesktop = window.innerWidth >= 768;
    this.init();
  }
  init() {
    this.update();
    if (this.isDesktop) {
      this.startAuto();
      this.setupButtons();
    }
    window.addEventListener('resize', () => this.handleResize());
  }
  handleResize() {
    const wasDesktop = this.isDesktop;
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop && !wasDesktop) {
      this.startAuto();
      this.setupButtons();
    } else if (!this.isDesktop && wasDesktop) {
      this.stopAuto();
    }
    this.update();
  }
  update() {
    if (this.isDesktop && this.itemCount > 0) {
      const shift = -this.currentIndex * (100 / this.itemsPerView);
      this.track.style.transform = `translateX(${shift}%)`;
    } else {
      this.track.style.transform = 'none';
    }
  }
  next() {
    if (!this.isDesktop || this.itemCount === 0) return;
    if (this.currentIndex < this.itemCount - this.itemsPerView) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.update();
    this.resetAuto();
  }
  prev() {
    if (!this.isDesktop || this.itemCount === 0) return;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.itemCount - this.itemsPerView;
    }
    this.update();
    this.resetAuto();
  }
  startAuto() {
    if (this.autoInterval) clearInterval(this.autoInterval);
    if (this.isDesktop && this.itemCount > this.itemsPerView) {
      this.autoInterval = setInterval(() => this.next(), this.autoIntervalTime);
    }
  }
  stopAuto() {
    if (this.autoInterval) {
      clearInterval(this.autoInterval);
      this.autoInterval = null;
    }
  }
  resetAuto() {
    this.startAuto();
  }
  setupButtons() {
    const prevBtn = document.getElementById('product-prev');
    const nextBtn = document.getElementById('product-next');
    if (prevBtn) {
      prevBtn.removeEventListener('click', this.boundPrev);
      this.boundPrev = () => this.prev();
      prevBtn.addEventListener('click', this.boundPrev);
    }
    if (nextBtn) {
      nextBtn.removeEventListener('click', this.boundNext);
      this.boundNext = () => this.next();
      nextBtn.addEventListener('click', this.boundNext);
    }
  }
}

class GridCarousel {
  constructor(trackId, itemsPerView, autoInterval = 0) {
    this.track = document.getElementById(trackId);
    if (!this.track) return;
    this.items = Array.from(this.track.children);
    this.itemCount = this.items.length;
    this.itemsPerView = itemsPerView;
    this.currentIndex = 0;
    this.autoInterval = null;
    this.autoIntervalTime = autoInterval;
    this.isDesktop = window.innerWidth >= 768;
    this.init();
  }
  init() {
    this.update();
    this.setupButtons();
    window.addEventListener('resize', () => this.handleResize());
  }
  handleResize() {
    this.isDesktop = window.innerWidth >= 768;
    this.update();
    this.setupButtons();
  }
  update() {
    if (this.itemCount === 0) return;
    let itemsPerView = this.itemsPerView;
    if (window.innerWidth <= 480) itemsPerView = 1;
    else if (window.innerWidth <= 768) itemsPerView = 2;
    else itemsPerView = 3;
    const shift = -this.currentIndex * (100 / itemsPerView);
    this.track.style.transform = `translateX(${shift}%)`;
  }
  next() {
    if (this.itemCount === 0) return;
    let itemsPerView = 3;
    if (window.innerWidth <= 480) itemsPerView = 1;
    else if (window.innerWidth <= 768) itemsPerView = 2;
    if (this.currentIndex < this.itemCount - itemsPerView) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.update();
  }
  prev() {
    if (this.itemCount === 0) return;
    let itemsPerView = 3;
    if (window.innerWidth <= 480) itemsPerView = 1;
    else if (window.innerWidth <= 768) itemsPerView = 2;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.itemCount - itemsPerView;
    }
    this.update();
  }
  setupButtons() {
    const prevBtn = document.getElementById('grid-prev');
    const nextBtn = document.getElementById('grid-next');
    if (prevBtn) {
      prevBtn.removeEventListener('click', this.boundPrev);
      this.boundPrev = () => this.prev();
      prevBtn.addEventListener('click', this.boundPrev);
    }
    if (nextBtn) {
      nextBtn.removeEventListener('click', this.boundNext);
      this.boundNext = () => this.next();
      nextBtn.addEventListener('click', this.boundNext);
    }
  }
}

class TestimonialCarousel {
  constructor(trackId, autoInterval = 5000) {
    this.track = document.getElementById(trackId);
    if (!this.track) return;
    this.items = Array.from(this.track.children);
    this.itemCount = this.items.length;
    this.currentIndex = 0;
    this.autoInterval = null;
    this.autoIntervalTime = autoInterval;
    this.isDesktop = window.innerWidth >= 768;
    this.init();
  }
  init() {
    this.update();
    if (this.isDesktop) this.startAuto();
    window.addEventListener('resize', () => this.handleResize());
  }
  handleResize() {
    const wasDesktop = this.isDesktop;
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop && !wasDesktop) this.startAuto();
    else if (!this.isDesktop && wasDesktop) this.stopAuto();
    this.update();
  }
  update() {
    if (this.isDesktop && this.itemCount > 0) {
      const shift = -this.currentIndex * 100;
      this.track.style.transform = `translateX(${shift}%)`;
    } else {
      this.track.style.transform = 'none';
    }
  }
  next() {
    if (!this.isDesktop || this.itemCount === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.itemCount;
    this.update();
    this.resetAuto();
  }
  startAuto() {
    if (this.autoInterval) clearInterval(this.autoInterval);
    if (this.isDesktop) {
      this.autoInterval = setInterval(() => this.next(), this.autoIntervalTime);
    }
  }
  stopAuto() {
    if (this.autoInterval) {
      clearInterval(this.autoInterval);
      this.autoInterval = null;
    }
  }
  resetAuto() {
    this.startAuto();
  }
}

// ========== EVENT ATTACHMENT ==========
function attachCarouselItemEvents() {
  document.querySelectorAll('#product-carousel-track .add-to-cart-btn').forEach(btn => {
    btn.removeEventListener('click', handleAddToCart);
    btn.addEventListener('click', handleAddToCart);
  });
  document.querySelectorAll('#product-carousel-track .details-btn').forEach(btn => {
    btn.removeEventListener('click', showProductDetail);
    btn.addEventListener('click', showProductDetail);
  });
}

function buildTestimonialCarousel() {
  const track = document.getElementById('testimonial-track');
  if (!track) return;
  track.innerHTML = '';
  testimonials.forEach(t => {
    const item = document.createElement('div');
    item.className = 'testimonial-item';
    item.innerHTML = `<p>"${t.text}"</p><div class="testimonial-author">— ${t.author}</div>`;
    track.appendChild(item);
  });
}

// ========== FOOTER PAGE SWITCHING ==========
const mainContentArea = document.getElementById('main-content-area');
const allPageDivs = document.querySelectorAll('.page-content');

function showMainContent() {
  if (mainContentArea) mainContentArea.style.display = 'block';
  allPageDivs.forEach(div => div.style.display = 'none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.showMainContent = showMainContent;

function showPage(pageId) {
  const targetPage = document.getElementById(`page-${pageId}`);
  if (mainContentArea) mainContentArea.style.display = 'none';
  allPageDivs.forEach(div => div.style.display = 'none');
  if (targetPage) {
    targetPage.style.display = 'block';
    targetPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ========== INITIAL RENDERING ==========
document.addEventListener('DOMContentLoaded', () => {
  updateCurrentDate();
  renderFilteredCarousel();
  renderGridCarousel();
  buildTestimonialCarousel();
  updateCartUI();
  showMainContent();

  window.productCarousel = new ProductCarousel('product-carousel-track', 3, 4000);
  window.gridCarousel = new GridCarousel('grid-carousel-track', 3, 0);
  window.testimonialCarousel = new TestimonialCarousel('testimonial-track', 5000);

  const storedUser = localStorage.getItem('elevateShop_currentUser');
  if (storedUser) {
    loggedInUser = JSON.parse(storedUser);
    updateLoginUI();
  }
});

// ========== INTEGRATED SEARCH (Enter key only) ==========
const integratedSearchInput = document.getElementById('integrated-search-input');
if (integratedSearchInput) {
  integratedSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateSearch(integratedSearchInput.value);
    }
  });
}

const integratedSearchClear = document.getElementById('integrated-search-clear');
if (integratedSearchClear) {
  integratedSearchClear.addEventListener('click', () => {
    if (integratedSearchInput) {
      integratedSearchInput.value = '';
      updateSearch('');
      integratedSearchInput.focus();
    }
  });
}

const integratedSearchIcon = document.getElementById('integrated-search-icon');
if (integratedSearchIcon) {
  integratedSearchIcon.addEventListener('click', () => {
    if (integratedSearchInput) integratedSearchInput.focus();
  });
}

// ========== OTHER EVENT LISTENERS ==========
document.getElementById('buyNowBtn').addEventListener('click', () => {
  const section = document.getElementById('products-section');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ═══════════════════════════════════════════════════════════
// FIXED: Featured product now uses correct product ID
// ═══════════════════════════════════════════════════════════
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    // Look up the product by name to get its real ID
    const product = allProductsData.find(p => p.name === name);
    const featured = { 
      id: product ? product.id : 999,   // fallback to 999 only if not found
      name, 
      price, 
      quantity: 1 
    };
    if (addToCart(featured)) {
      showCartConfirmModal(featured, (proceed) => {
        if (proceed) openPaymentRedirectModal();
      });
    }
  });
});

const cartSidebar = document.getElementById('cart-sidebar');
document.getElementById('cart-icon').addEventListener('click', (e) => {
  e.preventDefault();
  cartSidebar.classList.add('open');
});
document.getElementById('close-cart').addEventListener('click', () => {
  cartSidebar.classList.remove('open');
});

const cartCheckoutBtn = document.getElementById('checkout-btn');
if (cartCheckoutBtn) {
  const newBtn = cartCheckoutBtn.cloneNode(true);
  cartCheckoutBtn.parentNode.replaceChild(newBtn, cartCheckoutBtn);
  newBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    openPaymentRedirectModal();
  });
}

const confirmRedirectBtn = document.getElementById('confirm-redirect-btn');
if (confirmRedirectBtn) confirmRedirectBtn.addEventListener('click', initiatePayPalCheckout);
const closeRedirectBtn = document.getElementById('close-redirect-modal');
if (closeRedirectBtn) closeRedirectBtn.addEventListener('click', closePaymentRedirectModal);
const redirectModal = document.getElementById('payment-redirect-modal');
if (redirectModal) redirectModal.addEventListener('click', (e) => {
  if (e.target === redirectModal) closePaymentRedirectModal();
});

const policyModal = document.getElementById('policy-modal');
const policyFooterLink = document.getElementById('policy-link-footer');
if (policyFooterLink) {
  policyFooterLink.addEventListener('click', (e) => {
    e.preventDefault();
    policyModal.style.display = 'flex';
  });
}
document.getElementById('close-policy').addEventListener('click', () => policyModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === policyModal) policyModal.style.display = 'none'; });

document.querySelectorAll('.filter-btn, .filter-link').forEach(btn => {
  if (btn.dataset.filter && btn.dataset.filter !== 'policy') {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter;
      if (filter) filterProducts(filter);
    });
  }
});

document.getElementById('close-detail-modal').addEventListener('click', () => {
  document.getElementById('detail-modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('detail-modal')) {
    document.getElementById('detail-modal').style.display = 'none';
  }
});

document.querySelectorAll('.footer-page-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('data-page');
    if (pageId) showPage(pageId);
  });
});

const allFilterLink = document.querySelector('.filter-link[data-filter="all"]');
if (allFilterLink) {
  allFilterLink.addEventListener('click', (e) => {
    e.preventDefault();
    filterProducts('all');
    showMainContent();
  });
}
const siteTitle = document.querySelector('.site-title');
if (siteTitle) {
  siteTitle.addEventListener('click', () => {
    filterProducts('all');
    showMainContent();
  });
}

// ========== ACCOUNT MODAL LOGIC ==========
const accountModal = document.getElementById('account-modal');
const loginLink = document.getElementById('login-link');
const logoutLink = document.getElementById('logout-link');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginFormDiv = document.getElementById('login-form');
const signupFormDiv = document.getElementById('signup-form');
const closeAccountModal = document.getElementById('close-account-modal');

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  accountModal.style.display = 'flex';
});
logoutLink.addEventListener('click', (e) => {
  e.preventDefault();
  loggedInUser = null;
  localStorage.removeItem('elevateShop_currentUser');
  updateLoginUI();
  alert('You have been logged out.');
});

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginFormDiv.style.display = 'block';
  signupFormDiv.style.display = 'none';
});
signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  loginFormDiv.style.display = 'none';
  signupFormDiv.style.display = 'block';
});

closeAccountModal.addEventListener('click', () => {
  accountModal.style.display = 'none';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
});
window.addEventListener('click', (e) => {
  if (e.target === accountModal) {
    accountModal.style.display = 'none';
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
  }
});

const staticSignupLink = document.getElementById('switch-to-signup-static');
if (staticSignupLink) {
  staticSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupTab.click();
  });
}

document.getElementById('do-login').addEventListener('click', () => {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
  const user = findUserByEmail(email);
  if (!user || user.password !== password) {
    alert('Invalid email or password.');
    return;
  }
  loggedInUser = { name: user.name, email: user.email };
  localStorage.setItem('elevateShop_currentUser', JSON.stringify(loggedInUser));
  updateLoginUI();
  accountModal.style.display = 'none';
  alert(`Welcome back, ${user.name}!`);
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
});

document.getElementById('do-signup').addEventListener('click', () => {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  if (!name || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }
  if (findUserByEmail(email)) {
    alert('An account with this email already exists. Please log in.');
    return;
  }
  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long and contain both letters and numbers.');
    return;
  }
  const newUser = { name, email, password };
  saveUser(newUser);
  loggedInUser = { name, email };
  localStorage.setItem('elevateShop_currentUser', JSON.stringify(loggedInUser));
  updateLoginUI();
  accountModal.style.display = 'none';
  alert(`Account created successfully! Welcome, ${name}.`);
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
});

// ========== ORDER HISTORY BUTTON & SIDEBAR ==========
const orderHistoryBtn = document.getElementById('order-history-link');
if (orderHistoryBtn) {
  orderHistoryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!loggedInUser) {
      alert('Please log in to view your order history.');
      return;
    }
    openOrderHistorySidebar();
  });
}

const closeOrderHistoryBtn = document.getElementById('close-order-history');
if (closeOrderHistoryBtn) {
  closeOrderHistoryBtn.addEventListener('click', closeOrderHistorySidebar);
}

const closeOrderDetailModal = document.getElementById('close-order-detail-modal');
if (closeOrderDetailModal) {
  closeOrderDetailModal.addEventListener('click', () => {
    document.getElementById('order-detail-modal').style.display = 'none';
  });
}
const orderDetailBackBtn = document.getElementById('order-detail-back');
if (orderDetailBackBtn) {
  orderDetailBackBtn.addEventListener('click', () => {
    document.getElementById('order-detail-modal').style.display = 'none';
  });
}
window.addEventListener('click', (e) => {
  const modal = document.getElementById('order-detail-modal');
  if (e.target === modal) modal.style.display = 'none';
});
