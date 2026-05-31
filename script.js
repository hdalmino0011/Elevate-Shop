// ==================== PRODUCTS DATA ====================
const products = [
    {
        id: 1,
        title: "30-Day Motivation Bootcamp",
        price: 29.99,
        icon: "🚀",
        shortDescription: "Transform your mindset in 30 days",
        description: "A comprehensive 30-day program designed to build a powerful, unstoppable mindset. This bootcamp includes daily motivational modules, actionable exercises, and success strategies from top performers.",
        features: [
            "30 days of daily motivational content",
            "Interactive workbooks and journals",
            "Video tutorials with expert insights",
            "Access to exclusive community forum",
            "Lifetime access to updates"
        ]
    },
    {
        id: 2,
        title: "Financial Literacy Masterclass",
        price: 49.99,
        icon: "💰",
        shortDescription: "Master personal finance essentials",
        description: "Learn the fundamentals of personal finance, investing, budgeting, and wealth building. This masterclass covers everything from basic money management to advanced investment strategies used by financial experts.",
        features: [
            "10 comprehensive modules",
            "Real-world case studies",
            "Investment portfolio templates",
            "Tax optimization strategies",
            "Lifetime email support"
        ]
    },
    {
        id: 3,
        title: "Productivity Secrets Blueprint",
        price: 39.99,
        icon: "⚡",
        shortDescription: "Optimize your daily productivity",
        description: "Discover the proven productivity systems used by top entrepreneurs and CEOs. This blueprint reveals the secrets to managing time effectively, eliminating procrastination, and achieving your goals faster than ever.",
        features: [
            "7 productivity frameworks",
            "Time management tools",
            "Habit tracking templates",
            "Goal-setting worksheets",
            "Implementation guides"
        ]
    },
    {
        id: 4,
        title: "Wealth Mindset Program",
        price: 44.99,
        icon: "🎯",
        shortDescription: "Reprogram your beliefs about money",
        description: "Transform your relationship with money by reprogramming limiting beliefs and adopting a wealthy mindset. This program combines psychology, neuroscience, and practical strategies to help you attract abundance.",
        features: [
            "12 mindset shift modules",
            "Affirmations and meditations",
            "Money psychology deep dive",
            "Abundance manifesting guide",
            "Progress tracking dashboard"
        ]
    },
    {
        id: 5,
        title: "Success Stories: 50 Life Lessons",
        price: 34.99,
        icon: "📚",
        shortDescription: "Learn from 50 successful entrepreneurs",
        description: "Discover the proven principles and habits that led 50 successful entrepreneurs to achieve extraordinary results. These real-world case studies provide actionable insights you can apply immediately.",
        features: [
            "50 detailed case studies",
            "Key takeaways from each story",
            "Actionable implementation steps",
            "Success framework templates",
            "PDF downloadable guide"
        ]
    },
    {
        id: 6,
        title: "Digital Skills Accelerator",
        price: 54.99,
        icon: "💻",
        shortDescription: "Master essential digital skills",
        description: "Gain practical digital skills that will boost your career in the modern economy. Learn tools, platforms, and strategies that are in high demand in today's digital marketplace.",
        features: [
            "8 digital skill modules",
            "Hands-on projects",
            "Certificate of completion",
            "Career advancement guide",
            "Bonus tools and resources"
        ]
    }
];

// ==================== CART MANAGEMENT ====================
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        updateCart();
        showSuccessMessage(`${product.title} added to cart!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
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
                    <h4>${item.title}</h4>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = '$' + total.toFixed(2);
}

// ==================== MODAL FUNCTIONS ====================
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');
}

function openPolicy() {
    const policyModal = document.getElementById('policy-modal');
    policyModal.classList.toggle('active');
}

function closePolicy() {
    const policyModal = document.getElementById('policy-modal');
    policyModal.classList.remove('active');
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-product-icon').textContent = product.icon;
    document.getElementById('modal-product-title').textContent = product.title;
    document.getElementById('modal-product-price').textContent = '$' + product.price.toFixed(2);
    document.getElementById('modal-product-description').textContent = product.description;
    
    let featuresHtml = '<h5>Key Features:</h5><ul>';
    product.features.forEach(feature => {
        featuresHtml += `<li>${feature}</li>`;
    });
    featuresHtml += '</ul>';
    
    document.getElementById('modal-product-details').innerHTML = featuresHtml;
    document.getElementById('modal-add-to-cart').onclick = () => {
        addToCart(productId);
        closeProductModal();
    };
    
    modal.classList.add('active');
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
}

function addToCartFromModal() {
    const title = document.getElementById('modal-product-title').textContent;
    const product = products.find(p => p.title === title);
    if (product) {
        addToCart(product.id);
        closeProductModal();
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add products before checkout.');
        return;
    }
    
    toggleCart();
    openCheckout();
}

function openCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    updateCheckoutSummary();
    checkoutModal.classList.add('active');
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.classList.remove('active');
}

function updateCheckoutSummary() {
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="summary-item">
                <span class="summary-item-name">${item.title} x ${item.quantity}</span>
                <span class="summary-item-price">$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });
    
    html += `
        <div class="summary-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
    
    document.getElementById('checkout-summary').innerHTML = html;
}

// ==================== PAYMENT FORM ====================
function processPayment(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const country = document.getElementById('country').value;
    
    // Validate card number (basic validation)
    if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }
    
    // Validate expiry format (MM/YY)
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        alert('Please enter expiry in MM/YY format.');
        return;
    }
    
    // Validate CVV
    if (!/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }
    
    // Process payment (demo)
    console.log('Processing payment for:', name, email);
    console.log('Card ending in:', cardNumber.slice(-4));
    
    // Simulate payment processing
    closeCheckout();
    cart = [];
    updateCart();
    
    // Show success message
    showSuccessMessage('Payment successful! Check your email for order confirmation and product access links.');
    
    // Clear form
    document.getElementById('payment-form').reset();
}

// ==================== UTILITY FUNCTIONS ====================
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== FORMAT CARD INPUT ====================
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
            e.target.value = formattedValue;
        });
    }
    
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    renderProducts();
});

// ==================== RENDER PRODUCTS ====================
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    let html = '';
    products.forEach(product => {
        html += `
            <div class="product-card">
                <div class="product-icon">${product.icon}</div>
                <h3>${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p>${product.shortDescription}</p>
                <button class="view-details-btn" onclick="openProductModal(${product.id})">View Details</button>
            </div>
        `;
    });
    
    productsGrid.innerHTML = html;
}

// ==================== CLOSE MODALS ON BACKGROUND CLICK ====================
document.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const productModal = document.getElementById('product-modal');
    const policyModal = document.getElementById('policy-modal');
    
    if (event.target === cartModal) {
        cartModal.classList.remove('active');
    }
    if (event.target === checkoutModal) {
        // Don't close checkout on background click - prevents accidental closure
    }
    if (event.target === productModal) {
        productModal.classList.remove('active');
    }
    if (event.target === policyModal) {
        policyModal.classList.remove('active');
    }
});
