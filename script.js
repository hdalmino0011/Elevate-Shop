// ElevateShop – Complete JavaScript
// Brown color: #895129
// Includes drop cap styling for detail modal

// Product data (main carousel and static grid)
const allProductsData = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 47, description: "A comprehensive digital course and workbook designed to transform your relationship with money. From budgeting basics to advanced investing strategies.", fullDescription: "Complete system for building lasting wealth. Includes worksheets, calculators, and real-world examples. Perfect for beginners and intermediate learners." },
    { id: 2, name: "Mindset Reset Program", category: "personal", price: 37, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your peak performance potential.", fullDescription: "Daily meditations, journaling prompts, and audio exercises. Transform your mindset from scarcity to abundance." },
    { id: 3, name: "Wealth Mindset Masterclass", category: "financial", price: 47, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes.", fullDescription: "Video lessons, worksheets, and case studies from self-made millionaires." },
    { id: 4, name: "The Daily Motivation Handbook", category: "motivational", price: 19, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation.", fullDescription: "Organized by 12 life themes: resilience, leadership, success, happiness, and more." },
    { id: 5, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs.", fullDescription: "50+ editable templates covering business plans, marketing, legal basics, and growth strategies." }
];

const extraProductsData = [
    { id: 6, name: "Social Media Marketing Masterclass", category: "business", price: 49, description: "Master Instagram, TikTok, LinkedIn, and Facebook marketing.", fullDescription: "Algorithm secrets, content strategies, and conversion tactics." },
    { id: 7, name: "Advanced Negotiation Tactics", category: "business", price: 39, description: "Learn the psychological principles behind effective negotiation.", fullDescription: "Used by Fortune 500 companies to win deals and increase profits." },
    { id: 8, name: "Health & Wellness Blueprint", category: "personal", price: 29, description: "Complete system for optimal health including nutrition, exercise, sleep, and stress management.", fullDescription: "90-day transformation plan with meal guides and workout routines." }
];

// Testimonials for carousel
const testimonials = [
    { text: "These products completely changed how I think about money and my potential. The Financial Freedom Blueprint alone helped me pay off $18,000 in debt.", author: "Marcus T., Customer" },
    { text: "The Mindset Reset Program rewired my thinking. I've never felt more confident and capable. Highly recommended!", author: "Sarah J., Entrepreneur" },
    { text: "Wealth Mindset Masterclass is a game-changer. I've doubled my freelance income in three months.", author: "David L., Freelancer" },
    { text: "The Daily Motivation Handbook keeps me focused every morning. A small investment with massive returns.", author: "Elena R., Executive" }
];

let cart = [];

// Helper functions
function getCategoryName(cat) {
    const map = { financial: "Financial Literacy", personal: "Personal Development", motivational: "Motivational", business: "Business & Success" };
    return map[cat] || cat;
}

function updateCurrentDate() {
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

// ========== FOOTER PAGE SWITCHING ==========
const mainContentArea = document.getElementById('main-content-area');
const allPageDivs = document.querySelectorAll('.page-content');

function showMainContent() {
    if (mainContentArea) mainContentArea.style.display = 'block';
    allPageDivs.forEach(div => div.style.display = 'none');
}

function showPage(pageId) {
    const targetPage = document.getElementById(`page-${pageId}`);
    if (mainContentArea) mainContentArea.style.display = 'none';
    allPageDivs.forEach(div => div.style.display = 'none');
    if (targetPage) targetPage.style.display = 'block';
}

// Attach footer link events
document.querySelectorAll('.footer-page-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) showPage(pageId);
    });
});

// "ALL" link in top navigation returns to main content
const allFilterLink = document.querySelector('.filter-link[data-filter="all"]');
if (allFilterLink) {
    allFilterLink.addEventListener('click', (e) => {
        e.preventDefault();
        showMainContent();
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        allFilterLink.classList.add('active');
    });
}

// Clicking on logo also resets to main content
const siteTitle = document.querySelector('.site-title');
if (siteTitle) {
    siteTitle.addEventListener('click', () => {
        showMainContent();
    });
}

// ========== BUILD PRODUCT CAROUSEL ==========
function buildProductCarousel() {
    const track = document.getElementById('product-carousel-track');
    if (!track) return;
    track.innerHTML = '';
    allProductsData.forEach(p => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 100)}...</p>
            <div class="price">$${p.price}</div>
            <div style="display: flex; gap: 6px; margin-top: 12px;">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        track.appendChild(item);
    });
    attachCarouselEvents();
}

function attachCarouselEvents() {
    document.querySelectorAll('#product-carousel-track .add-to-cart-btn').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    document.querySelectorAll('#product-carousel-track .details-btn').forEach(btn => {
        btn.removeEventListener('click', showProductDetail);
        btn.addEventListener('click', showProductDetail);
    });
}

// ========== BUILD EXTRA PRODUCTS STATIC GRID ==========
function renderExtraProducts() {
    const container = document.getElementById('extra-list');
    if (!container) return;
    container.innerHTML = '';
    extraProductsData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 100)}...</p>
            <div class="price">$${p.price}</div>
            <div style="display: flex; gap: 6px; margin-top: 12px;">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        container.appendChild(card);
    });
    attachExtraEvents();
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

// ========== BUILD TESTIMONIAL CAROUSEL ==========
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

// ========== CART LOGIC ==========
function handleAddToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
    if (product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
    }
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
            cart = cart.filter(i => i.id !== parseInt(btn.dataset.id));
            updateCartUI();
        });
    });
}

// ========== PRODUCT DETAIL MODAL WITH DROP CAP ==========
function showProductDetail(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
    if (!product) return;
    
    document.getElementById('detail-label').innerText = getCategoryName(product.category);
    document.getElementById('detail-title').innerText = product.name;
    document.getElementById('detail-subtitle').innerText = product.description;
    
    // Wrap description in <p> tags so first-letter drop cap works
    const fullText = product.fullDescription || product.description;
    const detailBody = document.getElementById('detail-body');
    detailBody.innerHTML = `<p>${fullText}</p>`;
    
    document.getElementById('detail-price').innerHTML = `$${product.price}`;
    
    const addBtn = document.getElementById('detail-add-to-cart');
    addBtn.onclick = () => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
        document.getElementById('detail-modal').style.display = 'none';
    };
    document.getElementById('detail-modal').style.display = 'flex';
}

// ========== FEATURED PRODUCT ADD TO CART ==========
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const featured = { id: 999, name, price, quantity: 1 };
        const existing = cart.find(i => i.id === 999);
        if (existing) existing.quantity++;
        else cart.push(featured);
        updateCartUI();
    });
});

// ========== CART SIDEBAR ==========
const cartSidebar = document.getElementById('cart-sidebar');
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('open');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// ========== PAYMENT MODAL ==========
const paymentModal = document.getElementById('payment-modal');
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) { alert('Your cart is empty.'); return; }
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    document.getElementById('modal-total').innerText = total.toFixed(2);
    paymentModal.style.display = 'flex';
});
document.getElementById('close-payment').addEventListener('click', () => paymentModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === paymentModal) paymentModal.style.display = 'none'; });
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Demo purchase successful! No real charge. Integrate Stripe for live payments.');
    cart = [];
    updateCartUI();
    paymentModal.style.display = 'none';
    cartSidebar.classList.remove('open');
    e.target.reset();
});

// Format card number
const cardNumInput = document.getElementById('card-number');
if (cardNumInput) {
    cardNumInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\s/g, '');
        if (val.length > 16) val = val.slice(0, 16);
        const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = formatted;
    });
}

// ========== POLICY MODAL ==========
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

// ========== FILTER BUTTONS (DEMO) ==========
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        alert(`Filtering by "${filter}". In full implementation, products would be filtered dynamically.`);
    });
});

// ========== CLOSE DETAIL MODAL ==========
document.getElementById('close-detail-modal').addEventListener('click', () => {
    document.getElementById('detail-modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detail-modal')) {
        document.getElementById('detail-modal').style.display = 'none';
    }
});

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
        this.init();
    }
    init() {
        this.update();
        this.startAuto();
        this.setupButtons();
    }
    update() {
        const shift = -this.currentIndex * (100 / this.itemsPerView);
        this.track.style.transform = `translateX(${shift}%)`;
    }
    next() {
        if (this.currentIndex < this.itemCount - this.itemsPerView) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.update();
        this.resetAuto();
    }
    prev() {
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
        this.autoInterval = setInterval(() => this.next(), this.autoIntervalTime);
    }
    resetAuto() {
        this.startAuto();
    }
    setupButtons() {
        const prevBtn = document.getElementById('product-prev');
        const nextBtn = document.getElementById('product-next');
        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
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
        this.init();
    }
    init() {
        this.update();
        this.startAuto();
        this.setupButtons();
    }
    update() {
        const shift = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${shift}%)`;
    }
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.itemCount;
        this.update();
        this.resetAuto();
    }
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.itemCount) % this.itemCount;
        this.update();
        this.resetAuto();
    }
    startAuto() {
        if (this.autoInterval) clearInterval(this.autoInterval);
        this.autoInterval = setInterval(() => this.next(), this.autoIntervalTime);
    }
    resetAuto() {
        this.startAuto();
    }
    setupButtons() {
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    }
}

// ========== INITIALIZE ALL ==========
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    buildProductCarousel();
    buildTestimonialCarousel();
    renderExtraProducts();
    updateCartUI();

    // Ensure main content is visible by default
    showMainContent();

    // Start carousels
    window.productCarousel = new ProductCarousel('product-carousel-track', 3, 4000);
    window.testimonialCarousel = new TestimonialCarousel('testimonial-track', 5000);
});
