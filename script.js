// ElevateShop – Complete JavaScript
// Colors: masthead red-brown #942222 | hero brown #895129

// ========== PRODUCT DATA (extended descriptions) ==========
const allProductsData = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 47, description: "A comprehensive digital course and workbook designed to transform your relationship with money. From budgeting basics to advanced investing strategies.", fullDescription: "The Financial Freedom Blueprint is a complete system for building lasting wealth. This comprehensive digital guide walks you through every step of the financial journey: from understanding your current financial situation, creating a budget that actually works, eliminating high-interest debt, building an emergency fund, investing in stocks and index funds, real estate investing basics, creating multiple income streams, and finally achieving complete financial independence. Each section includes worksheets, calculators, and real-world examples. The course draws on behavioral economics research and interviews with self-made millionaires. You'll gain lifetime access to updates and bonus materials.\n\nThousands of students have used this blueprint to pay off debt, save for retirement, and build passive income streams that continue to grow over time. Whether you're a complete beginner or already have some financial knowledge, this course meets you where you are and takes you to where you want to be." },
    { id: 2, name: "Mindset Reset Program", category: "personal", price: 37, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your peak performance potential.", fullDescription: "The Mindset Reset Program is a transformative 30-day journey that rewires the neural pathways holding you back from success. Each morning you'll receive a guided meditation and affirmation session. Throughout the day, you'll complete journaling exercises that uncover and challenge limiting beliefs. The program covers: identifying your core beliefs, understanding their origins, challenging their validity, installing empowering beliefs, maintaining momentum, and building permanent mindset shifts. Includes daily video lessons, PDF workbooks, audio recordings, and a private community forum for support and accountability.\n\nThousands have reported life-changing results within 30 days. Participants have overcome imposter syndrome, developed unshakable confidence, and achieved goals they once thought impossible. This is not just a course – it's a complete mental transformation system backed by neuroscience and proven psychological techniques." },
    { id: 3, name: "Wealth Mindset Masterclass", category: "financial", price: 47, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes.", fullDescription: "The Wealth Mindset Masterclass is an intensive deep-dive into the psychology of money and wealth creation. Drawing from behavioral economics, neuroscience, and interviews with 50+ self-made millionaires, this course reveals the hidden mental models that separate wealthy people from those who struggle financially. You'll discover: the psychology of scarcity vs. abundance, how to recognize and seize opportunities others miss, the role of risk tolerance in wealth building, delayed gratification and compounding, money scripts and belief systems, investment psychology, and the habits of the wealthy.\n\nIncludes 20+ video lessons, downloadable worksheets, case studies, and lifetime access to monthly bonus content. Students have reported doubling their income within six months, overcoming deep-seated fears around money, and developing a healthy, empowered relationship with wealth that benefits not only themselves but their families and communities." },
    { id: 4, name: "The Daily Motivation Handbook", category: "motivational", price: 19, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation.", fullDescription: "The Daily Motivation Handbook is a curated collection of 500+ quotes organized by 12 life themes: resilience, leadership, success, happiness, relationships, health, creativity, entrepreneurship, perseverance, self-improvement, purpose, and wisdom. Each quote includes context about the author and how to apply it to your life. This digital book is designed to be read one page per day, giving you daily inspiration and motivation.\n\nBeautiful PDF format with motivational artwork, perfect for digital devices or printing. Bonus: includes a 90-day daily challenge tracker and monthly planning template. Join thousands who start their day with these powerful reminders of human potential. Readers have used this handbook to build resilience during tough times, maintain focus on long-term goals, and find daily inspiration from history's greatest thinkers." },
    { id: 5, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs.", fullDescription: "The Entrepreneur's Success Toolkit is a complete business launch and scaling system in digital format. Includes 50+ ready-to-use templates covering: business plan templates, financial forecasting spreadsheets, marketing strategy frameworks, sales funnel diagrams, customer journey maps, email marketing sequences, social media content calendars, hiring and onboarding checklists, legal business structure guides, trademark and copyright basics, customer service protocols, and growth hacking strategies. All templates are editable and customizable for your specific business.\n\nThe toolkit draws from 20+ years of entrepreneurial experience and has helped 10,000+ businesses launch successfully. Includes video tutorials on how to use each template and lifetime updates. Whether you're starting your first side hustle or scaling an existing company, this toolkit provides the systems and frameworks you need to succeed without reinventing the wheel." }
];

const extraProductsData = [
    { id: 6, name: "Social Media Marketing Masterclass", category: "business", price: 49, description: "Master Instagram, TikTok, LinkedIn, and Facebook marketing.", fullDescription: "Social Media Marketing Masterclass teaches you everything you need to dominate social media in 2025 and beyond. You'll learn algorithm secrets, content strategies, engagement tactics, paid advertising fundamentals, analytics interpretation, and conversion optimization across all major platforms. This course is updated monthly to reflect the latest platform changes.\n\nYou'll discover how to grow an engaged following without spending money on ads, create viral content consistently, and turn followers into paying customers. Includes case studies from successful brands, downloadable content calendars, and a private community for feedback and support." },
    { id: 7, name: "Advanced Negotiation Tactics", category: "business", price: 39, description: "Learn the psychological principles behind effective negotiation.", fullDescription: "Advanced Negotiation Tactics reveals the psychological frameworks used by world-class negotiators. Topics include: anchoring, framing, mirroring, labeling, calibrated questions, handling difficult people, and closing the deal. Includes real-world case studies and role-playing exercises. This course is used by Fortune 500 companies and top lawyers to win deals and increase profits.\n\nYou'll learn how to prepare for any negotiation, read the other party's motivations, and achieve outcomes that satisfy both sides while maximizing your own value. The techniques taught here have been refined over decades of research and practice." },
    { id: 8, name: "Health & Wellness Blueprint", category: "personal", price: 29, description: "Complete system for optimal health including nutrition, exercise, sleep, and stress management.", fullDescription: "The Health & Wellness Blueprint is a comprehensive 90-day system covering: nutrition fundamentals, meal planning, exercise routines for all fitness levels, sleep optimization, stress reduction techniques, and habit formation. Includes meal plans, workout videos, and progress tracking tools. This blueprint is designed for busy professionals who want to transform their health without spending hours in the gym.\n\nYou'll learn how to fuel your body for energy and longevity, build sustainable exercise habits, improve sleep quality, and manage stress effectively. The program is backed by the latest research in health psychology and physiology. Thousands of users have reported losing weight, gaining energy, and feeling better than ever after completing the 90-day plan." }
];

const testimonials = [
    { text: "These products completely changed how I think about money and my potential. The Financial Freedom Blueprint alone helped me pay off $18,000 in debt.", author: "Marcus T., Customer" },
    { text: "The Mindset Reset Program rewired my thinking. I've never felt more confident and capable. Highly recommended!", author: "Sarah J., Entrepreneur" },
    { text: "Wealth Mindset Masterclass is a game-changer. I've doubled my freelance income in three months.", author: "David L., Freelancer" },
    { text: "The Daily Motivation Handbook keeps me focused every morning. A small investment with massive returns.", author: "Elena R., Executive" }
];

let cart = [];
let currentFilter = "all";

// Helper functions
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

// ========== FILTERING (no alerts, scroll to products) ==========
function filterProducts(category) {
    currentFilter = category;
    // Update active class on filter buttons
    document.querySelectorAll('.filter-btn, .filter-link').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    // Re-render carousel and extra grid with filtered data
    renderFilteredCarousel();
    renderFilteredExtraGrid();
    // Scroll to products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function renderFilteredCarousel() {
    const track = document.getElementById('product-carousel-track');
    if (!track) return;
    let filteredProducts = allProductsData;
    if (currentFilter !== 'all') {
        filteredProducts = allProductsData.filter(p => p.category === currentFilter);
    }
    track.innerHTML = '';
    filteredProducts.forEach(p => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 100)}...</p>
            <div class="price">$${p.price}</div>
            <div class="product-actions">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        track.appendChild(item);
    });
    attachCarouselItemEvents();
    // Reset carousel position if desktop
    if (window.productCarousel && window.innerWidth >= 768) {
        window.productCarousel.currentIndex = 0;
        window.productCarousel.update();
    }
}

function renderFilteredExtraGrid() {
    const container = document.getElementById('extra-list');
    if (!container) return;
    let filteredExtras = extraProductsData;
    if (currentFilter !== 'all') {
        filteredExtras = extraProductsData.filter(p => p.category === currentFilter);
    }
    container.innerHTML = '';
    filteredExtras.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 100)}...</p>
            <div class="price">$${p.price}</div>
            <div class="product-actions">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        container.appendChild(card);
    });
    attachExtraEvents();
}

// ========== CAROUSEL (desktop: auto-slide + buttons, mobile: swipe only) ==========
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
            // remove button listeners if needed
        }
        this.update();
    }
    update() {
        if (this.isDesktop) {
            const shift = -this.currentIndex * (100 / this.itemsPerView);
            this.track.style.transform = `translateX(${shift}%)`;
        } else {
            this.track.style.transform = 'none';
        }
    }
    next() {
        if (!this.isDesktop) return;
        if (this.currentIndex < this.itemCount - this.itemsPerView) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.update();
        this.resetAuto();
    }
    prev() {
        if (!this.isDesktop) return;
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

// Testimonial carousel (no buttons, swipe only on mobile, auto-slide on desktop)
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
        if (this.isDesktop) {
            this.startAuto();
        }
        window.addEventListener('resize', () => this.handleResize());
    }
    handleResize() {
        const wasDesktop = this.isDesktop;
        this.isDesktop = window.innerWidth >= 768;
        if (this.isDesktop && !wasDesktop) {
            this.startAuto();
        } else if (!this.isDesktop && wasDesktop) {
            this.stopAuto();
        }
        this.update();
    }
    update() {
        if (this.isDesktop) {
            const shift = -this.currentIndex * 100;
            this.track.style.transform = `translateX(${shift}%)`;
        } else {
            this.track.style.transform = 'none';
        }
    }
    next() {
        if (!this.isDesktop) return;
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
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(i => i.id !== id);
            updateCartUI();
        });
    });
}

// ========== PRODUCT DETAIL MODAL (drop cap black) ==========
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

// ========== FOOTER PAGE SWITCHING ==========
const mainContentArea = document.getElementById('main-content-area');
const allPageDivs = document.querySelectorAll('.page-content');
function showMainContent() {
    if (mainContentArea) mainContentArea.style.display = 'block';
    allPageDivs.forEach(div => div.style.display = 'none');
}
window.showMainContent = showMainContent;

function showPage(pageId) {
    const targetPage = document.getElementById(`page-${pageId}`);
    if (mainContentArea) mainContentArea.style.display = 'none';
    allPageDivs.forEach(div => div.style.display = 'none');
    if (targetPage) targetPage.style.display = 'block';
}

// ========== INITIAL RENDERING ==========
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

// ========== EVENT LISTENERS ==========
// Featured product add to cart
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

// Cart sidebar
const cartSidebar = document.getElementById('cart-sidebar');
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('open');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Checkout modal (no demo notices)
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
    alert('Payment processed successfully! (Demo) In production, integrate Stripe.');
    cart = [];
    updateCartUI();
    paymentModal.style.display = 'none';
    cartSidebar.classList.remove('open');
    e.target.reset();
});

// Format card number with spaces
const cardNumInput = document.getElementById('card-number');
if (cardNumInput) {
    cardNumInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\s/g, '');
        if (val.length > 16) val = val.slice(0, 16);
        const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = formatted;
    });
}

// Policy modal (footer link)
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

// Filter links (no alerts)
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

// Footer page links (including Our Commitment items)
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

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    renderFilteredCarousel();   // initial render (all products)
    renderFilteredExtraGrid();
    buildTestimonialCarousel();
    updateCartUI();
    showMainContent();

    // Carousels (auto-slide on desktop only)
    window.productCarousel = new ProductCarousel('product-carousel-track', 3, 4000);
    window.testimonialCarousel = new TestimonialCarousel('testimonial-track', 5000);
});
