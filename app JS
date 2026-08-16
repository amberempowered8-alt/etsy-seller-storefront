// =========================================================================
// ETSY / PRODUCT SELLER STOREFRONT — CONFIG
// Edit everything in the CONFIG object below. You don't need to touch
// index.html or style.css to customize the content.
// =========================================================================

const CONFIG = {
    shopName: "Shop Name",

    heroHeadline: "Every piece, made to fit you.",
    heroSubtext: "Pick your color, pick your size — every item is made or printed just for you, no mass-produced stock sitting in a warehouse.",

    // CLIENT ACTION REQUIRED: replace with your real Etsy shop or checkout link
    shopLink: "https://your-etsy-shop-link.com",

    // Shown in the hero's swatch strip. Use real hex colors from your actual products.
    swatches: [
        { name: "Terracotta", hex: "#E8735A", note: "most popular" },
        { name: "Gold", hex: "#D4A73D", note: "" },
        { name: "Sage", hex: "#7C8B6F", note: "" },
        { name: "Charcoal", hex: "#3A3530", note: "" },
        { name: "Blush", hex: "#D9A7A0", note: "" },
        { name: "Cream", hex: "#EDE4D3", note: "" }
    ],

    credentials: [
        "500+ Items Shipped",
        "Handmade to Order",
        "5-Star Rated Shop"
    ],

    categories: [
        { icon: "🎨", name: "Digital Downloads", count: "Instant delivery" },
        { icon: "🧵", name: "Handmade Goods", count: "Made to order" },
        { icon: "📦", name: "Custom Orders", count: "Personalized" }
    ],

    products: [
        {
            name: "Product One",
            price: "$28.00",
            swatchHexes: ["#E8735A", "#D4A73D", "#3A3530"]
        },
        {
            name: "Product Two",
            price: "$34.00",
            swatchHexes: ["#7C8B6F", "#D9A7A0"]
        },
        {
            name: "Product Three",
            price: "$19.00",
            swatchHexes: ["#EDE4D3", "#3A3530", "#E8735A"]
        }
    ],

    aboutHeading: "A little about this shop",
    aboutBody: "Replace this with your own story — what you make, why you started, and what makes each piece worth the wait. Buyers connect with the maker, not just the product.",
    aboutFacts: [
        "Every item made or printed to order",
        "Ships within 3-5 business days",
        "Small batch, not mass produced"
    ],

    reviews: [
        { stars: "★★★★★", quote: "Exactly as pictured and shipped fast. Already ordered a second one.", name: "— Verified Buyer" },
        { stars: "★★★★★", quote: "The quality is so much better than I expected for the price.", name: "— Verified Buyer" },
        { stars: "★★★★★", quote: "Loved being able to pick my own color combo. Will be back.", name: "— Verified Buyer" }
    ]
};

// =========================================================================
// Rendering — you shouldn't need to edit anything below this line.
// =========================================================================

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderText() {
    document.getElementById('brand-name').textContent = CONFIG.shopName;
    document.getElementById('footer-name').textContent = CONFIG.shopName;
    document.getElementById('hero-subtext').textContent = CONFIG.heroSubtext;
    document.getElementById('about-heading').textContent = CONFIG.aboutHeading;
    document.getElementById('about-body').textContent = CONFIG.aboutBody;

    const heroH1 = document.querySelector('.hero-copy h1');
    if (heroH1) heroH1.textContent = CONFIG.heroHeadline;

    const shopLink = document.getElementById('shop-link');
    if (shopLink) shopLink.href = CONFIG.shopLink;

    const swatchCount = document.getElementById('swatch-count');
    if (swatchCount) swatchCount.textContent = `${CONFIG.swatches.length} Colors`;
}

function renderSwatches() {
    const strip = document.getElementById('swatch-strip');
    const label = document.getElementById('swatch-active-label');
    if (!strip) return;

    strip.innerHTML = CONFIG.swatches.map((s, i) => `
        <div class="swatch-dot ${i === 0 ? 'is-active' : ''}"
             style="background:${escapeHTML(s.hex)};"
             data-name="${escapeHTML(s.name)}"
             data-note="${escapeHTML(s.note)}"
             role="button"
             tabindex="0"
             aria-label="${escapeHTML(s.name)}"></div>
    `).join('');

    function setActive(dot) {
        strip.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('is-active'));
        dot.classList.add('is-active');
        const name = dot.getAttribute('data-name');
        const note = dot.getAttribute('data-note');
        label.innerHTML = `<strong>${escapeHTML(name)}</strong>${note ? ' — ' + escapeHTML(note) : ''}`;
    }

    strip.querySelectorAll('.swatch-dot').forEach(dot => {
        dot.addEventListener('click', () => setActive(dot));
        dot.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') setActive(dot);
        });
    });
}

function renderTrust() {
    const row = document.getElementById('trust-row');
    if (!row) return;
    row.innerHTML = CONFIG.credentials.map(c => `<span>${escapeHTML(c)}</span>`).join('');
}

function renderCategories() {
    const grid = document.getElementById('category-grid');
    if (!grid) return;
    grid.innerHTML = CONFIG.categories.map(c => `
        <div class="category-card reveal">
            <div class="category-icon">${c.icon}</div>
            <p class="category-name">${escapeHTML(c.name)}</p>
            <p class="category-count">${escapeHTML(c.count)}</p>
        </div>`).join('');
}

function renderAboutFacts() {
    const list = document.getElementById('about-facts');
    if (!list) return;
    list.innerHTML = CONFIG.aboutFacts.map(f => `<li>${escapeHTML(f)}</li>`).join('');
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = CONFIG.products.map(p => `
        <div class="product-card reveal">
            <div class="product-image">Product Photo</div>
            <div class="product-body">
                <p class="product-name">${escapeHTML(p.name)}</p>
                <p class="product-price mono">${escapeHTML(p.price)}</p>
                <div class="product-swatches">
                    ${p.swatchHexes.map(hex => `<span class="mini-dot" style="background:${escapeHTML(hex)};"></span>`).join('')}
                </div>
            </div>
        </div>`).join('');
}

function renderReviews() {
    const grid = document.getElementById('review-grid');
    if (!grid) return;
    grid.innerHTML = CONFIG.reviews.map(r => `
        <div class="review-card reveal">
            <p class="review-stars">${r.stars}</p>
            <p class="review-quote">"${escapeHTML(r.quote)}"</p>
            <p class="review-name">${escapeHTML(r.name)}</p>
        </div>`).join('');
}

function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || items.length === 0) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(el => observer.observe(el));
}

function init() {
    renderText();
    renderSwatches();
    renderTrust();
    renderCategories();
    renderProducts();
    renderAboutFacts();
    renderReviews();
    initScrollReveal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
