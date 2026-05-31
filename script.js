// Product Data (matches screenshots)
const allProducts = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 47, description: "Master the fundamentals of personal finance, investing, and wealth building with this comprehensive step-by-step digital guide.", popular: true },
    { id: 2, name: "Mindset Reset Program", category: "personal", price: 37, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your peak performance potential.", popular: false },
    { id: 3, name: "Wealth Mindset Masterclass", category: "financial", price: 47, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes.", isNew: true },
    { id: 4, name: "Power Quotes Collection", category: "motivational", price: 19, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation.", isNew: true },
    { id: 5, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs.", isBundle: true }
];

// Extra products for "More Products" section
const extraProducts = [
    { id: 6, name: "Wealth Mindset Masterclass", category: "financial", price: 47, isNew: true },
    { id: 7, name: "Power Quotes Collection", category: "motivational", price: 19, isNew: true },
    { id: 8, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, isBundle: true }
];

let cart = [];

// DOM elements
const productListEl = document.getElementById('product-list');
const extraListEl = document.getElementById('extra-list');
const cartCountEl = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const modal = document.getElementById('checkout-modal');
const modalTotalSpan = document.getElementById('modal-total');

// Render main product grid (Top Picks)
function renderMainProducts() {
    if (!productListEl) return;
    productListEl.innerHTML = '';
    allProducts.slice(0,2).forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        let categoryText = '';
        if (product.category === 'financial') categoryText = 'Financial Literacy';
        else if (product.category === 'personal') categoryText = 'Personal Development';
        else categoryText = product.category;
        card.innerHTML = `
            <div class="category">${categoryText}</div>
            <h3>${product.name}</h3>
            <p class="description">${product.description.substring(0, 100)}...</p>
            <div class="price">$${product.price}</div>
            <button class="btn-small details-btn" data-id="${product.id}">Details</button>
            <button class="btn-buy add-to-cart-btn" data-id="${product.id}">Buy Now</button>
        `;
        productListEl.appendChild(card);
    });
    attachProductEvents();
}

// Render extra products (More Products to Elevate Your Life)
function renderExtraProducts() {
    if (!extraListEl) return;
    extraListEl.innerHTML = '';
    extraProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'extra-card';
        let badgeHtml = '';
        if (product.isNew) badgeHtml = '<div class="badge new">New</div>';
        if (product.isBundle) badgeHtml = '<div class="badge bundle">Bundle Deal</div>';
        card.innerHTML = `
            ${badgeHtml}
            <h3>${product.name}</h3>
            <div class="price">$${product.price}</div>
            <button class="btn-buy add-to-cart-btn" data-id="${product.id}">Buy Now</button>
        `;
        extraListEl.appendChild(card);
    });
    attachProductEvents();
}

function attachProductEvents() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            alert(`Details for product ID ${id} would open here. In full version, you'd see a modal or new page.`);
        });
    });
}

function handleAddToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProducts.find(p => p.id === id);
    if (!product) product = extraProducts.find(p => p.id === id);
    if (product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
    }
}

// Featured product "Add to Cart" button
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

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
    if (!cartItemsEl) return;
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        cartTotalEl.textContent = '0.00';
        return;
    }
    let cartHtml = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartHtml += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">Remove</button>
            </div>
        `;
    });
    cartItemsEl.innerHTML = cartHtml;
    cartTotalEl.textContent = total.toFixed(2);
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        });
    });
}

// Cart sidebar open/close
const cartIcon = document.getElementById('cart-icon');
const closeCartBtn = document.getElementById('close-cart');
if (cartIcon) cartIcon.addEventListener('click', (e) => { e.preventDefault(); cartSidebar.classList.add('open'); });
if (closeCartBtn) closeCartBtn.addEventListener('click', () => { cartSidebar.classList.remove('open'); });

// Checkout modal
const checkoutBtn = document.getElementById('checkout-btn');
const modalClose = document.querySelector('.close-modal');
const payForm = document.getElementById('payment-form');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) { alert('Your cart is empty.'); return; }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        modalTotalSpan.textContent = total.toFixed(2);
        modal.style.display = 'flex';
    });
}
if (modalClose) modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Payment demo
if (payForm) {
    payForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardName = document.getElementById('card-name').value.trim();
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('card-expiry').value.trim();
        const cardCvc = document.getElementById('card-cvc').value.trim();
        if (!cardName || !cardNumber || !cardExpiry || !cardCvc) { alert('Please fill all fields.'); return; }
        if (cardNumber.length < 15 || cardNumber.length > 16) { alert('Enter a valid card number (15-16 digits).'); return; }
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) { alert('Expiry format MM/YY'); return; }
        if (!/^\d{3,4}$/.test(cardCvc)) { alert('CVC must be 3-4 digits'); return; }
        alert('Demo purchase successful! No real charge. Integrate Stripe for live payments.');
        cart = [];
        updateCartUI();
        modal.style.display = 'none';
        cartSidebar.classList.remove('open');
        payForm.reset();
    });
}

// Format card number
const cardNumberInput = document.getElementById('card-number');
if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formatted;
    });
}

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        if (filter === 'all') {
            renderMainProducts(); // simple: show all main products
            renderExtraProducts();
        } else {
            // For demo, just show a message. In full version you'd filter.
            alert(`Filter by ${filter} would show only those products. Implement full filtering if needed.`);
        }
    });
});

// Initialize
renderMainProducts();
renderExtraProducts();
updateCartUI();
