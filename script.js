// ElevateShop – NYT-Style Implementation
// No emojis, column-based layout, non-refundable policy

// Product data - Extended with 5+ digital products
const allProductsData = [
    { id: 1, name: "Financial Freedom Blueprint", category: "financial", price: 47, description: "A comprehensive digital course and workbook designed to transform your relationship with money. From budgeting basics to advanced investing strategies, this product takes you from financial confusion to confident wealth building. You'll learn how to eliminate debt, build an emergency fund, understand stocks and index funds, and create multiple streams of passive income. Written in plain language without jargon, this guide is perfect for beginners and intermediate learners alike. Thousands of students have used it to achieve financial independence.", fullDescription: "The Financial Freedom Blueprint is a complete system for building lasting wealth. This comprehensive digital guide walks you through every step of the financial journey: from understanding your current financial situation, creating a budget that actually works, eliminating high-interest debt, building an emergency fund, investing in stocks and index funds, real estate investing basics, creating multiple income streams, and finally achieving complete financial independence. Each section includes worksheets, calculators, and real-world examples. The course draws on behavioral economics research and interviews with self-made millionaires. You'll gain lifetime access to updates and bonus materials.", popular: true },
    
    { id: 2, name: "Mindset Reset Program", category: "personal", price: 37, description: "A 30-day guided program to rewire your thinking patterns, eliminate limiting beliefs, and unlock your peak performance potential. Each day includes audio exercises, journaling prompts, and actionable challenges designed to transform your mindset from scarcity to abundance.", fullDescription: "The Mindset Reset Program is a transformative 30-day journey that rewires the neural pathways holding you back from success. Each morning you'll receive a guided meditation and affirmation session. Throughout the day, you'll complete journaling exercises that uncover and challenge limiting beliefs. The program covers: identifying your core beliefs, understanding their origins, challenging their validity, installing empowering beliefs, maintaining momentum, and building permanent mindset shifts. Includes daily video lessons, PDF workbooks, audio recordings, and a private community forum for support and accountability. Thousands have reported life-changing results within 30 days.", popular: false },
    
    { id: 3, name: "Wealth Mindset Masterclass", category: "financial", price: 47, description: "Bridges psychology and finance to reveal hidden beliefs that drive financial outcomes. Includes video lessons, worksheets, and case studies from self-made millionaires and financial experts who explain the mental models behind wealth creation.", fullDescription: "The Wealth Mindset Masterclass is an intensive deep-dive into the psychology of money and wealth creation. Drawing from behavioral economics, neuroscience, and interviews with 50+ self-made millionaires, this course reveals the hidden mental models that separate wealthy people from those who struggle financially. You'll discover: the psychology of scarcity vs. abundance, how to recognize and seize opportunities others miss, the role of risk tolerance in wealth building, delayed gratification and compounding, money scripts and belief systems, investment psychology, and the habits of the wealthy. Includes 20+ video lessons, downloadable worksheets, case studies, and lifetime access to monthly bonus content.", isNew: true },
    
    { id: 4, name: "The Daily Motivation Handbook", category: "motivational", price: 19, description: "500+ powerful quotes from history's greatest minds to fuel your daily motivation. Categorized by theme: leadership, resilience, success, and happiness. Perfect for daily inspiration and personal growth.", fullDescription: "The Daily Motivation Handbook is a curated collection of 500+ quotes organized by 12 life themes: resilience, leadership, success, happiness, relationships, health, creativity, entrepreneurship, perseverance, self-improvement, purpose, and wisdom. Each quote includes context about the author and how to apply it to your life. This digital book is designed to be read one page per day, giving you daily inspiration and motivation. Beautiful PDF format with motivational artwork, perfect for digital devices or printing. Bonus: includes a 90-day daily challenge tracker and monthly planning template. Join thousands who start their day with these powerful reminders of human potential.", isNew: true },
    
    { id: 5, name: "Entrepreneur's Success Toolkit", category: "business", price: 79, description: "Complete bundle of templates, checklists, and guides for aspiring entrepreneurs. Covers business planning, marketing, sales funnels, and legal basics. Everything you need to launch and scale your business.", fullDescription: "The Entrepreneur's Success Toolkit is a complete business launch and scaling system in digital format. Includes 50+ ready-to-use templates covering: business plan templates, financial forecasting spreadsheets, marketing strategy frameworks, sales funnel diagrams, customer journey maps, email marketing sequences, social media content calendars, hiring and onboarding checklists, legal business structure guides, trademark and copyright basics, customer service protocols, and growth hacking strategies. All templates are editable and customizable for your specific business. The toolkit draws from 20+ years of entrepreneurial experience and has helped 10,000+ businesses launch successfully. Includes video tutorials on how to use each template and lifetime updates.", isBundle: true },

    { id: 6, name: "Productivity Mastery System", category: "personal", price: 34, description: "Learn the time management systems used by top CEOs and entrepreneurs. Includes daily planning templates, habit tracking tools, and procrastination elimination strategies that have been proven to increase productivity by 300%.", fullDescription: "The Productivity Mastery System is based on decades of research into how high-performers manage their time and energy. This digital course covers: the science of deep work, energy management vs. time management, the optimal daily schedule, defeating procrastination scientifically, building unbreakable habits, delegating effectively, and automation strategies. Includes: daily planning templates, weekly review worksheets, habit tracking spreadsheets, Pomodoro timers, energy optimization guides, and video lessons from productivity experts. Users report completing 3x more meaningful work in the same timeframe. Lifetime access with quarterly new content additions.", popular: true },

    { id: 7, name: "Real Estate Investing Basics", category: "financial", price: 59, description: "A beginner's guide to real estate investing. Learn property analysis, financing options, rental income calculations, and how to build wealth through real estate over 10-30 years.", fullDescription: "Real Estate Investing Basics demystifies one of the most powerful wealth-building tools available. This comprehensive guide covers: property types and analysis, finding deals, financing and mortgages, calculating cash flow and ROI, managing rental properties, tax benefits of real estate, building a property portfolio, commercial vs. residential investing, and real estate investment trusts (REITs). Includes: property analysis calculators, financing comparison tools, rental property management templates, investment checklists, and case studies of successful real estate investors. Perfect for anyone looking to build long-term wealth through real estate. Includes lifetime updates as the market changes.", isNew: true }
];

const extraProductsData = [
    { id: 8, name: "Social Media Marketing Masterclass", category: "business", price: 49, description: "Master Instagram, TikTok, LinkedIn, and Facebook marketing. Grow your following, create viral content, and convert followers into customers.", isNew: false },
    { id: 9, name: "Advanced Negotiation Tactics", category: "business", price: 39, description: "Learn the psychological principles behind effective negotiation. Used by Fortune 500 companies and top lawyers to win deals and increase profits.", isBundle: false },
    { id: 10, name: "Health & Wellness Blueprint", category: "personal", price: 29, description: "Complete system for optimal health including nutrition, exercise, sleep, and stress management. Transform your body and mind in 90 days.", isNew: true }
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

// Render top picks products (5 products)
function renderMainProducts() {
    const container = document.getElementById('product-list');
    if (!container) return;
    container.innerHTML = '';
    const topProducts = allProductsData.slice(0, 5);
    topProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 120)}...</p>
            <div class="price">$${p.price}</div>
            <div style="display: flex; gap: 8px; margin-top: 16px;">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
        `;
        container.appendChild(card);
    });
    attachProductEvents();
}

// Render extra products (3 more products)
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
            <div class="category">${getCategoryName(p.category)}</div>
            <h3>${p.name}</h3>
            <p class="description">${p.description.substring(0, 120)}...</p>
            <div class="price">$${p.price}</div>
            <div style="display: flex; gap: 8px; margin-top: 16px;">
                <button class="btn-small details-btn" data-id="${p.id}">Details</button>
                <button class="btn-buy add-to-cart-btn" data-id="${p.id}">Buy Now</button>
            </div>
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
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
    if (product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
    }
}

// Show product detail modal - NYT article style
function showProductDetail(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    let product = allProductsData.find(p => p.id === id) || extraProductsData.find(p => p.id === id);
    if (!product) return;
    
    const modal = document.getElementById('detail-modal');
    const detailLabel = document.getElementById('detail-label');
    const detailTitle = document.getElementById('detail-title');
    const detailSubtitle = document.getElementById('detail-subtitle');
    const detailDescription = document.getElementById('detail-description');
    const detailPrice = document.getElementById('detail-price');
    
    detailLabel.innerText = getCategoryName(product.category);
    detailTitle.innerText = product.name;
    detailSubtitle.innerText = product.description.substring(0, 200) + '...';
    detailDescription.innerText = product.fullDescription || product.description;
    detailPrice.innerHTML = `$${product.price}`;
    
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
