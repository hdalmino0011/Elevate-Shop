// Product data
const products = [
    {
        id: 1,
        name: "Morning Routine Blueprint",
        category: "Productivity",
        price: 19.99,
        description: "A step-by-step guide to design your perfect morning for peak performance."
    },
    {
        id: 2,
        name: "Resilience Journal",
        category: "Mental Fitness",
        price: 24.99,
        description: "90-day digital journal with prompts to build mental strength."
    },
    {
        id: 3,
        name: "Focus Framework",
        category: "Work",
        price: 34.99,
        description: "Eliminate distractions and deep work system for professionals."
    }
];

// Cart array
let cart = [];

// DOM elements
const productListEl = document.getElementById('product-list');
const cartCountEl = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const modal = document.getElementById('checkout-modal');
const modalTotalSpan = document.getElementById('modal-total');

// Render product grid
function renderProducts() {
    if (!productListEl) return;
    productListEl.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <div class="product-category" style="margin-bottom:8px;">${product.category}</div>
            <p class="description">${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button class="btn-primary add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productListEl.appendChild(card);
    });

    // Attach event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) addToCart(product);
        });
    });
}

// Add to cart
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

// Update cart sidebar and count
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

    // Attach remove events
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Open/close cart
const cartIcon = document.getElementById('cart-icon');
const closeCartBtn = document.getElementById('close-cart');

if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('open');
    });
}
if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });
}

// Checkout modal
const checkoutBtn = document.getElementById('checkout-btn');
const modalClose = document.querySelector('.close-modal');
const payForm = document.getElementById('payment-form');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Add some products first.');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        modalTotalSpan.textContent = total.toFixed(2);
        modal.style.display = 'flex';
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Payment form demo (fake validation)
if (payForm) {
    payForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardName = document.getElementById('card-name').value.trim();
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('card-expiry').value.trim();
        const cardCvc = document.getElementById('card-cvc').value.trim();

        if (!cardName || !cardNumber || !cardExpiry || !cardCvc) {
            alert('Please fill in all payment details.');
            return;
        }

        if (cardNumber.length < 15 || cardNumber.length > 16) {
            alert('Please enter a valid card number (15-16 digits).');
            return;
        }

        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            alert('Expiry must be in MM/YY format.');
            return;
        }

        if (!/^\d{3,4}$/.test(cardCvc)) {
            alert('CVC must be 3 or 4 digits.');
            return;
        }

        // Demo success
        alert('Demo purchase successful! No real charge. In production, integrate Stripe.');
        // Reset cart and close
        cart = [];
        updateCartUI();
        modal.style.display = 'none';
        cartSidebar.classList.remove('open');
        // Optionally reset form
        payForm.reset();
    });
}

// Format card number with spaces
const cardNumberInput = document.getElementById('card-number');
if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formatted;
    });
}

// Featured product add to cart (from the featured section)
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const featuredProduct = { id: 999, name: name, price: price, category: "Motivational" };
        addToCart(featuredProduct);
    });
});

// Browse all products button scroll
const browseBtn = document.getElementById('browse-all-btn');
if (browseBtn) {
    browseBtn.addEventListener('click', () => {
        document.querySelector('.products-grid').scrollIntoView({ behavior: 'smooth' });
    });
}

// Initialize
renderProducts();
updateCartUI();
