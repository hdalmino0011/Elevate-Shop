// ElevateShop – NYT-Style Implementation
// No emojis, column-based layout, non-refundable policy

// Product data
const allProductsData = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 47, description: "A comprehensive digital course and workbook designed to transform your relationship with money. From budgeting basics to advanced investing strategies, this product takes you from financial confusion to confident wealth building. You'll learn how to eliminate debt, build an emergency fund, understand stocks and index funds, and create multiple streams of passive income. Written in plain language without jargon, this guide is perfect for beginners and intermediate learners alike. Thousands of students have used it to achieve financial independence.", popular: true },
    { id: 2, name: "Mindset Reset Program", category: "personal", price: 37, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your peak performance potential. Each day includes audio exercises, journaling prompts, and actionable challenges designed to transform your mindset from scarcity to abundance.", popular: false },
    { id: 3, name: "Wealth Mindset Masterclass", category: "financial", price: 47, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes. Includes video lessons, worksheets, and case studies from self-made millionaires and financial experts who explain the mental models behind wealth creation.", isNew: true },
    { id: 4, name: "Power Quotes Collection", category: "motivational", price: 19, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation. Categorized by theme: leadership, resilience, success, and happiness. Perfect for daily inspiration and personal growth.", isNew: true },
    { id: 5, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs. Covers business planning, marketing, sales funnels, and legal basics. Everything you need to launch and scale your business.", isBundle: true }
];

const extraProductsData = [
    { id: 6, name: "Wealth Mindset Masterclass", category: "financial", price: 47, isNew: true },
    { id: 7, name: "Power Quotes Collection", category: "motivational", price: 19, isNew: true },
    { id: 8, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, isBundle: true }
];

let cart = [];

// Get category display name
function getCategoryName(cat) {
    if (cat === 'financial') return 'Financial Literacy';
    if (cat === 'personal') return 'Personal Development';
    if (cat === 'motivational') return 'Motivational';
    if (cat === 'business') return 'Business & Success';
    return cat;
}

// Update current date in nav
function updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    if (dateElement) dateElement.textContent = today;
}

// Render top picks products
function renderMainProducts() {
    const container = document.getElementById('product-list');
    if (!container) return;
    container.innerHTML = '';
    const topProducts = allProductsData.slice(0, 2);
    topProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 120)}...</p>
            <div class="price">$${p.price}</div>
            <div style="display: flex; gap: 8px;">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        container.appendChild(card);
    });
    attachProductEvents();
}

// Render extra products
function renderExtraProducts() {
    const container = document.getElementById('extra-list');
    if (!container) return;
    container.innerHTML = '';
    extraProductsData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        let badgeHtml = '';
        if (p.isNew) badgeHtml = '<div class="badge new">New</div>';
        if (p.isBundle) badgeHtml = '<div class="badge bundle">Bundle Deal</div>';
        card.innerHTML = `
            ${badgeHtml}
            <h3>${p.name}</h3>
            <div class="price">$${p.price}</div>
            <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
        `;
        container.appendChild(card);
    });
    attachProductEvents();
}

// Attach event listeners
function attachProductEvents() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.removeEventListener('click', showProductDetail);
        btn.addEventListener('click', showProductDetail);
    });
}

// Add to cart handler
function handleAddToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id);
    if (!product) product = extraProductsData.find(p => p.id === id);
    if (product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
    }
}

// Show product detail modal
function showProductDetail(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const product = allProductsData.find(p => p.id === id);
    if (!product) return;
    const modal = document.getElementById('detail-modal');
    document.getElementById('detail-title').innerText = product.name;
    document.getElementById('detail-subtitle').innerText = getCategoryName(product.category);
    document.getElementById('detail-description').innerText = product.description;
    document.getElementById('detail-price').innerHTML = `$${product.price}`;
    const addBtn = document.getElementById('detail-add-to-cart');
    addBtn.onclick = () => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
        modal.style.display = 'none';
    };
    modal.style.display = 'flex';
}

// Featured product add to cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const featuredProduct = { id: 999, name: name, price: price, quantity: 1 };
        const existing = cart.find(item => item.id === 999);
        if (existing) existing.quantity += 1;
        else cart.push(featuredProduct);
        updateCartUI();
    });
});

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalItems;
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    if (!cartItemsDiv) return;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-message">Your cart is empty</p>';
        cartTotalSpan.innerText = '0.00';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
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
    cartItemsDiv.innerHTML = html;
    cartTotalSpan.innerText = total.toFixed(2);
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        });
    });
}

// Cart sidebar
const cartSidebar = document.getElementById('cart-sidebar');
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('open');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Payment modal
const paymentModal = document.getElementById('payment-modal');
const checkoutBtn = document.getElementById('checkout-btn');
const closePayment = document.getElementById('close-payment');
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) { alert('Your cart is empty.'); return; }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('modal-total').innerText = total.toFixed(2);
    paymentModal.style.display = 'flex';
});
closePayment.addEventListener('click', () => { paymentModal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === paymentModal) paymentModal.style.display = 'none'; });

// Payment form
const payForm = document.getElementById('payment-form');
payForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    if (cardNumber.length < 15) { alert('Enter a valid test card number (4242 4242 4242 4242)'); return; }
    alert('Demo purchase successful! No real charge. Integrate Stripe for live payments.');
    cart = [];
    updateCartUI();
    paymentModal.style.display = 'none';
    cartSidebar.classList.remove('open');
    payForm.reset();
});

// Format card number
const cardNumInput = document.getElementById('card-number');
cardNumInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\s/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    e.target.value = formatted;
});

// Policy modal
const policyModal = document.getElementById('policy-modal');
const policyLink = document.getElementById('policy-link');
const closePolicy = document.getElementById('close-policy');
policyLink.addEventListener('click', (e) => {
    e.preventDefault();
    policyModal.style.display = 'flex';
});
closePolicy.addEventListener('click', () => { policyModal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === policyModal) policyModal.style.display = 'none'; });

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const filterLinks = document.querySelectorAll('.filter-link');
function handleFilter(filter) {
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) btn.classList.add('active');
    });
    if (filter === 'all') {
        renderMainProducts();
        renderExtraProducts();
    } else {
        alert(`Filtering by ${filter}. In full implementation, products would be filtered dynamically.`);
    }
}
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
});
filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        handleFilter(link.dataset.filter);
    });
});

// Close detail modal
document.getElementById('close-detail-modal').addEventListener('click', () => {
    document.getElementById('detail-modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    const detailModal = document.getElementById('detail-modal');
    if (e.target === detailModal) detailModal.style.display = 'none';
});

// Initialize
updateCurrentDate();
renderMainProducts();
renderExtraProducts();
updateCartUI();
