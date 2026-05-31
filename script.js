// ElevateShop – with automatic carousels for products and testimonials

// Product data (same as before)
const allProductsData = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 47, description: "A comprehensive digital course and workbook designed to transform your relationship with money. From budgeting basics to advanced investing strategies.", fullDescription: "Complete system for building lasting wealth. Includes worksheets, calculators, and real-world examples." },
    { id: 2, name: "Mindset Reset Program", category: "personal", price: 37, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your peak performance potential.", fullDescription: "Daily meditations, journaling prompts, and audio exercises." },
    { id: 3, name: "Wealth Mindset Masterclass", category: "financial", price: 47, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes.", fullDescription: "Video lessons, worksheets, and case studies." },
    { id: 4, name: "The Daily Motivation Handbook", category: "motivational", price: 19, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation.", fullDescription: "Organized by 12 life themes." },
    { id: 5, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs.", fullDescription: "50+ editable templates." }
];
const extraProductsData = [
    { id: 6, name: "Social Media Marketing Masterclass", category: "business", price: 49, description: "Master Instagram, TikTok, LinkedIn, and Facebook marketing.", fullDescription: "Algorithm secrets and conversion tactics." },
    { id: 7, name: "Advanced Negotiation Tactics", category: "business", price: 39, description: "Learn the psychological principles behind effective negotiation.", fullDescription: "Used by Fortune 500 companies." },
    { id: 8, name: "Health & Wellness Blueprint", category: "personal", price: 29, description: "Complete system for optimal health.", fullDescription: "90-day transformation plan." }
];

// Testimonials data for carousel
const testimonials = [
    { text: "These products completely changed how I think about money and my potential. The Financial Freedom Blueprint alone helped me pay off $18,000 in debt.", author: "Marcus T., Customer" },
    { text: "The Mindset Reset Program rewired my thinking. I've never felt more confident and capable. Highly recommended!", author: "Sarah J., Entrepreneur" },
    { text: "Wealth Mindset Masterclass is a game-changer. I've doubled my freelance income in three months.", author: "David L., Freelancer" },
    { text: "The Daily Motivation Handbook keeps me focused every morning. A small investment with massive returns.", author: "Elena R., Executive" }
];

let cart = [];

function getCategoryName(cat) {
    const map = { financial: "Financial Literacy", personal: "Personal Development", motivational: "Motivational", business: "Business & Success" };
    return map[cat] || cat;
}

function updateCurrentDate() {
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Build product carousel items
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
            <button class="btn-small details-btn" data-id="${p.id}">Details</button>
            <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
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

function showProductDetail(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
    if (!product) return;
    document.getElementById('detail-label').innerText = getCategoryName(product.category);
    document.getElementById('detail-title').innerText = product.name;
    document.getElementById('detail-subtitle').innerText = product.description;
    document.getElementById('detail-description').innerText = product.fullDescription || product.description;
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

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
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
        html += `<div class="cart-item"><div><div class="cart-item-title">${item.name}</div><div>$${item.price.toFixed(2)} x ${item.quantity}</div></div><button class="cart-item-remove" data-id="${item.id}">Remove</button></div>`;
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

// Render static extra products
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
            <button class="btn-small details-btn" data-id="${p.id}">Details</button>
            <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
        `;
        container.appendChild(card);
    });
    attachProductEventsStatic();
}

function attachProductEventsStatic() {
    document.querySelectorAll('#extra-list .add-to-cart-btn').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    document.querySelectorAll('#extra-list .details-btn').forEach(btn => {
        btn.removeEventListener('click', showProductDetail);
        btn.addEventListener('click', showProductDetail);
    });
}

// Carousel logic
class Carousel {
    constructor(trackId, itemsPerView, autoSlideInterval = 4000) {
        this.track = document.getElementById(trackId);
        if (!this.track) return;
        this.items = Array.from(this.track.children);
        this.itemCount = this.items.length;
        this.itemsPerView = itemsPerView;
        this.currentIndex = 0;
        this.autoInterval = null;
        this.autoSlideIntervalTime = autoSlideInterval;
        this.init();
    }
    init() {
        this.updateCarousel();
        this.startAutoSlide();
    }
    updateCarousel() {
        const shift = -this.currentIndex * (100 / this.itemsPerView);
        this.track.style.transform = `translateX(${shift}%)`;
        this.updateIndicators();
    }
    next() {
        if (this.currentIndex < this.itemCount - this.itemsPerView) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.updateCarousel();
        this.resetAutoSlide();
    }
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.itemCount - this.itemsPerView;
        }
        this.updateCarousel();
        this.resetAutoSlide();
    }
    startAutoSlide() {
        if (this.autoInterval) clearInterval(this.autoInterval);
        this.autoInterval = setInterval(() => this.next(), this.autoSlideIntervalTime);
    }
    resetAutoSlide() {
        this.startAutoSlide();
    }
    updateIndicators() {
        // create indicators dynamically if needed
    }
}

// Testimonial carousel
class TestimonialCarousel {
    constructor(trackId, autoSlideInterval = 5000) {
        this.track = document.getElementById(trackId);
        if (!this.track) return;
        this.items = Array.from(this.track.children);
        this.itemCount = this.items.length;
        this.currentIndex = 0;
        this.autoInterval = null;
        this.autoSlideIntervalTime = autoSlideInterval;
        this.init();
    }
    init() {
        this.update();
        this.startAutoSlide();
    }
    update() {
        const shift = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${shift}%)`;
    }
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.itemCount;
        this.update();
        this.resetAutoSlide();
    }
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.itemCount) % this.itemCount;
        this.update();
        this.resetAutoSlide();
    }
    startAutoSlide() {
        if (this.autoInterval) clearInterval(this.autoInterval);
        this.autoInterval = setInterval(() => this.next(), this.autoSlideIntervalTime);
    }
    resetAutoSlide() {
        this.startAutoSlide();
    }
}

// Build testimonial track
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

// Event listeners for carousel buttons
function setupCarouselControls() {
    const productPrev = document.getElementById('product-prev');
    const productNext = document.getElementById('product-next');
    const testimonialPrev = document.getElementById('testimonial-prev');
    const testimonialNext = document.getElementById('testimonial-next');
    if (productPrev && productNext && window.productCarousel) {
        productPrev.addEventListener('click', () => window.productCarousel.prev());
        productNext.addEventListener('click', () => window.productCarousel.next());
    }
    if (testimonialPrev && testimonialNext && window.testimonialCarousel) {
        testimonialPrev.addEventListener('click', () => window.testimonialCarousel.prev());
        testimonialNext.addEventListener('click', () => window.testimonialCarousel.next());
    }
}

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
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cart-sidebar').classList.add('open');
});
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('open');
});

// Payment modal
const paymentModal = document.getElementById('payment-modal');
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) { alert('Your cart is empty.'); return; }
    const total = cart.reduce((s,i) => s + i.price * i.quantity, 0);
    document.getElementById('modal-total').innerText = total.toFixed(2);
    paymentModal.style.display = 'flex';
});
document.getElementById('close-payment').addEventListener('click', () => paymentModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === paymentModal) paymentModal.style.display = 'none'; });
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Demo purchase successful! No real charge.');
    cart = [];
    updateCartUI();
    paymentModal.style.display = 'none';
    document.getElementById('cart-sidebar').classList.remove('open');
    e.target.reset();
});

// Policy modal (footer link)
const policyModal = document.getElementById('policy-modal');
document.getElementById('policy-link-footer').addEventListener('click', (e) => {
    e.preventDefault();
    policyModal.style.display = 'flex';
});
document.getElementById('close-policy').addEventListener('click', () => policyModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === policyModal) policyModal.style.display = 'none'; });

// Initialize everything
updateCurrentDate();
buildProductCarousel();
buildTestimonialCarousel();
renderExtraProducts();
updateCartUI();

// Create carousels after DOM is ready
window.productCarousel = new Carousel('product-carousel-track', 3, 4000);
window.testimonialCarousel = new TestimonialCarousel('testimonial-track', 5000);
setupCarouselControls();

// Filter buttons (basic)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        alert(`Filtering by ${filter}. Full filtering would show only ${filter} products.`);
    });
});

// Close detail modal
document.getElementById('close-detail-modal').addEventListener('click', () => {
    document.getElementById('detail-modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detail-modal')) document.getElementById('detail-modal').style.display = 'none';
});
