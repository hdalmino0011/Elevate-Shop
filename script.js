// ElevateShop – Complete JavaScript
// Includes: 20 products, cart, carousel, search, filter, account, PayPal redirect

// ========== PRODUCT DATA (20 products) ==========
const allProductsData = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 29.99, description: "A comprehensive digital course and workbook to transform your relationship with money.", fullDescription: "The Financial Freedom Blueprint is a complete system for building lasting wealth. This comprehensive digital guide walks you through every step of the financial journey...\n\nThousands of students have used this blueprint to pay off debt, save for retirement, and build passive income streams." },
    { id: 2, name: "Wealth Mindset Masterclass", category: "financial", price: 27.99, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes.", fullDescription: "The Wealth Mindset Masterclass is an intensive deep-dive into the psychology of money and wealth creation... Includes 20+ video lessons, worksheets, and lifetime access." },
    { id: 3, name: "Real Estate Investing Basics", category: "financial", price: 24.99, description: "A beginner's guide to real estate investing.", fullDescription: "Real Estate Investing Basics demystifies one of the most powerful wealth-building tools available. Covers property analysis, financing, rental income, and more." },
    { id: 4, name: "Mindset Reset Program", category: "personal", price: 31.99, description: "A 30-day guided program to rewire your thinking patterns.", fullDescription: "The Mindset Reset Program is a transformative 30-day journey that rewires neural pathways... Includes daily video lessons, workbooks, and audio recordings." },
    { id: 5, name: "Productivity Mastery System", category: "personal", price: 22.99, description: "Time management systems used by top CEOs.", fullDescription: "The Productivity Mastery System covers deep work, energy management, habit building, and automation strategies. Includes daily planning templates and habit trackers." },
    { id: 6, name: "Health and Wellness Blueprint", category: "personal", price: 19.99, description: "Complete 90-day system for optimal health.", fullDescription: "The Health & Wellness Blueprint is a comprehensive 90-day system covering nutrition, exercise, sleep, and stress management. Includes meal plans and workout videos." },
    { id: 7, name: "The Daily Motivation Handbook", category: "motivational", price: 19.99, description: "500+ powerful quotes from history's greatest minds.", fullDescription: "A curated collection of 500+ quotes organized by 12 life themes. Includes a 90-day daily challenge tracker." },
    { id: 8, name: "The Resilience Toolkit", category: "motivational", price: 24.99, description: "Practical guide to bouncing back from setbacks.", fullDescription: "Exercises, stories, and actionable strategies to develop unshakeable resilience. Includes a 30-day resilience challenge." },
    { id: 9, name: "Morning Mastery Course", category: "motivational", price: 29.99, description: "Design the perfect morning routine.", fullDescription: "Video course on sleep optimization, morning rituals, goal setting, and habit stacking." },
    { id: 10, name: "Entrepreneur Success Toolkit", category: "business", price: 32.99, description: "Complete bundle of templates, checklists, and guides.", fullDescription: "50+ editable templates covering business plans, financial forecasts, marketing, legal basics, and growth strategies." },
    { id: 11, name: "Social Media Marketing Masterclass", category: "business", price: 27.99, description: "Master Instagram, TikTok, LinkedIn, and Facebook.", fullDescription: "Learn algorithm secrets, content strategies, engagement tactics, and paid advertising. Updated monthly." },
    { id: 12, name: "Advanced Negotiation Tactics", category: "business", price: 24.99, description: "Psychological principles behind effective negotiation.", fullDescription: "Anchoring, framing, mirroring, calibrated questions, and closing deals. Used by Fortune 500 companies." },
    { id: 13, name: "Influencer Growth Blueprint", category: "business", price: 22.99, description: "Turn your personal brand into a profitable business.", fullDescription: "Step-by-step guide to building a loyal audience, negotiating brand deals, and monetizing influence." },
    { id: 14, name: "Startup Financial Modeling", category: "business", price: 29.99, description: "Master financial projections for startups.", fullDescription: "Learn to build realistic financial models, forecast revenue, and manage cash flow." },
    { id: 15, name: "Stock Market Investing 101", category: "financial", price: 19.99, description: "Understand stocks, ETFs, and building a diversified portfolio.", fullDescription: "A beginner-friendly guide to stock market investing, risk management, and long-term wealth." },
    { id: 16, name: "Budgeting That Works", category: "financial", price: 19.99, description: "Practical budgeting system to save money and reduce stress.", fullDescription: "A downloadable workbook and video course to create a personalized budget and track expenses." },
    { id: 17, name: "Emotional Intelligence Mastery", category: "personal", price: 27.99, description: "Develop self-awareness, empathy, and relationship skills.", fullDescription: "Learn to recognize and manage emotions, communicate effectively, and build stronger relationships." },
    { id: 18, name: "Sleep Optimization Guide", category: "personal", price: 15.99, description: "Science-based techniques for deeper, more restorative sleep.", fullDescription: "Evidence-based changes to your nightly routine to improve sleep quality and energy." },
    { id: 19, name: "Daily Gratitude Journal", category: "motivational", price: 12.99, description: "A 90-day guided journal to cultivate gratitude.", fullDescription: "Daily prompts and reflections to rewire your brain for happiness and reduce stress." },
    { id: 20, name: "Public Speaking Confidence", category: "motivational", price: 32.99, description: "Overcome fear and deliver powerful presentations.", fullDescription: "Video course with practical exercises to conquer stage fright, structure your message, and speak with impact." }
];

const extraProductsData = [
    { id: 13, name: "Influencer Growth Blueprint", category: "business", price: 22.99, description: "Turn your personal brand into a profitable business.", fullDescription: "Step-by-step guide to building a loyal audience, negotiating brand deals, and monetizing influence." },
    { id: 14, name: "Startup Financial Modeling", category: "business", price: 29.99, description: "Master financial projections for startups.", fullDescription: "Learn to build realistic financial models, forecast revenue, and manage cash flow." },
    { id: 15, name: "Stock Market Investing 101", category: "financial", price: 19.99, description: "Understand stocks, ETFs, and building a diversified portfolio.", fullDescription: "A beginner-friendly guide to stock market investing, risk management, and long-term wealth." },
    { id: 16, name: "Budgeting That Works", category: "financial", price: 19.99, description: "Practical budgeting system to save money and reduce stress.", fullDescription: "A downloadable workbook and video course to create a personalized budget and track expenses." },
    { id: 17, name: "Emotional Intelligence Mastery", category: "personal", price: 27.99, description: "Develop self-awareness, empathy, and relationship skills.", fullDescription: "Learn to recognize and manage your emotions, communicate effectively, and build stronger personal and professional relationships." },
    { id: 18, name: "Sleep Optimization Guide", category: "personal", price: 15.99, description: "Science-based techniques for deeper, more restorative sleep.", fullDescription: "Discover how to improve sleep quality, boost energy, and enhance mental clarity with simple, evidence-based changes to your nightly routine." },
    { id: 19, name: "Daily Gratitude Journal", category: "motivational", price: 12.99, description: "A 90-day guided journal to cultivate gratitude and positivity.", fullDescription: "Daily prompts and reflections to rewire your brain for happiness, reduce stress, and improve mental well-being." },
    { id: 20, name: "Public Speaking Confidence", category: "motivational", price: 32.99, description: "Overcome fear and deliver powerful presentations.", fullDescription: "Video course with practical exercises to conquer stage fright, structure your message, and speak with authority and impact." }
];

const testimonials = [
    { text: "These products completely changed how I think about money and my potential. The Financial Freedom Blueprint alone helped me pay off $18,000 in debt.", author: "Marcus T., Customer" },
    { text: "The Mindset Reset Program rewired my thinking. I've never felt more confident and capable. Highly recommended!", author: "Sarah J., Entrepreneur" },
    { text: "Wealth Mindset Masterclass is a game-changer. I've doubled my freelance income in three months.", author: "David L., Freelancer" },
    { text: "The Daily Motivation Handbook keeps me focused every morning. A small investment with massive returns.", author: "Elena R., Executive" }
];

let cart = [];
let currentFilter = "all";
let currentSearchTerm = "";
let loggedInUser = null;

// Helper functions
function getCategoryName(cat) {
    const map = { financial: "Financial Literacy", personal: "Personal Development", motivational: "Motivational", business: "Business & Success" };
    return map[cat] || cat;
}

function updateCurrentDate() {
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const now = new Date();
        const formatted = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        dateEl.textContent = formatted;
    }
}

// ========== SEARCH & FILTER ==========
function filterBySearch(products, term) {
    if (!term.trim()) return products;
    const lowerTerm = term.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(lowerTerm));
}

function renderFilteredCarousel() {
    const track = document.getElementById('product-carousel-track');
    if (!track) return;
    let filtered = [...allProductsData];
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    filtered = filterBySearch(filtered, currentSearchTerm);
    track.innerHTML = '';
    filtered.forEach(p => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
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

function renderFilteredExtraGrid() {
    const container = document.getElementById('extra-list');
    if (!container) return;
    let filtered = [...extraProductsData];
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    filtered = filterBySearch(filtered, currentSearchTerm);
    container.innerHTML = '';
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 100)}...</p>
            <div class="price">$${p.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        container.appendChild(card);
    });
    attachExtraEvents();
}

function updateSearch(term) {
    currentSearchTerm = term;
    renderFilteredCarousel();
    renderFilteredExtraGrid();
    if (window.productCarousel && window.innerWidth >= 768) {
        window.productCarousel.currentIndex = 0;
        window.productCarousel.update();
    }
    const productsSection = document.getElementById('products-section');
    if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== ACCOUNT SYSTEM (localStorage) ==========
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
    const welcomeSpan = document.getElementById('logged-in-welcome');
    if (loggedInUser) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline';
        welcomeSpan.style.display = 'inline';
        welcomeSpan.textContent = `Welcome, ${loggedInUser.name}`;
    } else {
        loginLink.style.display = 'inline';
        logoutLink.style.display = 'none';
        welcomeSpan.style.display = 'none';
    }
}

// ========== CART LOGIC ==========
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        alert("This product is already in your cart.");
        return false;
    }
    cart.push({ ...product, quantity: 1 });
    updateCartUI();
    return true;
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
    if (modal) modal.style.display = 'flex';
}

function closePaymentRedirectModal() {
    const modal = document.getElementById('payment-redirect-modal');
    if (modal) modal.style.display = 'none';
}

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

    try {
        const response = await fetch('https://elevate-shop-worker.dalminohanz14.workers.dev/create-paypal-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, cart })
        });
        const data = await response.json();
        if (data.approval_url) {
            window.location.href = data.approval_url;
        } else {
            alert('Error creating PayPal order. Please try again.');
            console.error(data);
            if (loadingDiv) loadingDiv.style.display = 'none';
            if (payBtn) payBtn.disabled = false;
        }
    } catch (err) {
        console.error(err);
        alert('Network error. Please try again.');
        if (loadingDiv) loadingDiv.style.display = 'none';
        if (payBtn) payBtn.disabled = false;
    }
}

// ========== ADD TO CART HANDLER ==========
function handleAddToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
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

// ========== FILTERING (only affects extra grid, but carousel also filtered) ==========
function filterProducts(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn, .filter-link').forEach(btn => {
        if (btn.dataset.filter === category) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderFilteredCarousel();
    renderFilteredExtraGrid();
    const productsSection = document.getElementById('products-section');
    if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== PRODUCT DETAIL MODAL ==========
function showProductDetail(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
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

function attachExtraEvents() {
    document.querySelectorAll('#extra-list .add-to-cart-btn').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    document.querySelectorAll('#extra-list .details-btn').forEach(btn => {
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
    renderFilteredExtraGrid();
    buildTestimonialCarousel();
    updateCartUI();
    showMainContent();

    window.productCarousel = new ProductCarousel('product-carousel-track', 3, 4000);
    window.testimonialCarousel = new TestimonialCarousel('testimonial-track', 5000);

    const storedUser = localStorage.getItem('elevateShop_currentUser');
    if (storedUser) {
        loggedInUser = JSON.parse(storedUser);
        updateLoginUI();
    }
});

// ========== SEARCH UI ==========
const searchToggle = document.getElementById('search-toggle-btn');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');

searchToggle.addEventListener('click', () => {
    if (searchContainer.style.display === 'none' || getComputedStyle(searchContainer).display === 'none') {
        searchContainer.style.display = 'flex';
        searchInput.focus();
    } else {
        searchContainer.style.display = 'none';
        searchInput.value = '';
        updateSearch('');
    }
});

searchInput.addEventListener('input', (e) => {
    updateSearch(e.target.value);
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    updateSearch('');
    searchContainer.style.display = 'none';
});

// ========== OTHER EVENT LISTENERS ==========
// BUY NOW! scroll to products section
document.getElementById('buyNowBtn').addEventListener('click', () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Featured product add to cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const featured = { id: 999, name, price, quantity: 1 };
        if (addToCart(featured)) {
            showCartConfirmModal(featured, (proceed) => {
                if (proceed) {
                    openPaymentRedirectModal();
                }
            });
        }
    });
});

// Cart sidebar
const cartSidebar = document.getElementById('cart-sidebar');
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('open');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Override the "Proceed to Checkout" button in cart sidebar
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    const newBtn = checkoutBtn.cloneNode(true);
    checkoutBtn.parentNode.replaceChild(newBtn, checkoutBtn);
    newBtn.addEventListener('click', () => {
        if (cart.length === 0) { alert('Your cart is empty.'); return; }
        openPaymentRedirectModal();
    });
}

// Payment redirect modal listeners
const confirmRedirectBtn = document.getElementById('confirm-redirect-btn');
if (confirmRedirectBtn) {
    confirmRedirectBtn.addEventListener('click', initiatePayPalCheckout);
}
const closeRedirectBtn = document.getElementById('close-redirect-modal');
if (closeRedirectBtn) {
    closeRedirectBtn.addEventListener('click', closePaymentRedirectModal);
}
const redirectModal = document.getElementById('payment-redirect-modal');
if (redirectModal) {
    redirectModal.addEventListener('click', (e) => {
        if (e.target === redirectModal) closePaymentRedirectModal();
    });
}

// Policy modal
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

// Filter links
document.querySelectorAll('.filter-btn, .filter-link').forEach(btn => {
    if (btn.dataset.filter && btn.dataset.filter !== 'policy') {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.dataset.filter;
            if (filter) filterProducts(filter);
        });
    }
});

// Close detail modal
document.getElementById('close-detail-modal').addEventListener('click', () => {
    document.getElementById('detail-modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detail-modal')) {
        document.getElementById('detail-modal').style.display = 'none';
    }
});

// Footer page links
document.querySelectorAll('.footer-page-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) showPage(pageId);
    });
});

// "ALL" link and logo return to main content
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
});
window.addEventListener('click', (e) => {
    if (e.target === accountModal) accountModal.style.display = 'none';
});

// Static signup link
const staticSignupLink = document.getElementById('switch-to-signup-static');
if (staticSignupLink) {
    staticSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupTab.click();
    });
}

// Login
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

// Sign Up
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

// Reset forms when modal closes
accountModal.addEventListener('close', () => {
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
});
