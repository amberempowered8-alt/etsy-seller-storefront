// =========================================================================
// ETSY / PRODUCT SELLER STOREFRONT — CONFIG
// Edit everything in the CONFIG object below. You don't need to touch
// index.html or style.css to customize the content.
//
// Your PRODUCTS and REVIEWS are kept up to date automatically from
// Airtable — see SETUP-GUIDE.md for the one-time setup. You never paste
// any secret token into this file.
// =========================================================================

const CONFIG = {
    shopName: "Shop Name",

    heroHeadline: "Every piece, made to fit you.",
    heroSubtext: "Pick your color, pick your size — every item is made or printed just for you, no mass-produced stock sitting in a warehouse.",

    // CLIENT ACTION REQUIRED: replace with your real Etsy shop or checkout link
    shopLink: "https://your-etsy-shop-link.com",

    // Optional: paste a photo URL here (or, if you uploaded a photo file into
    // this repo, just put its file name, e.g. "shop-photo.jpg"). Leave this
    // as "" to keep the placeholder box shown in the About section.
    photoUrl: "",

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

    aboutHeading: "A little about this shop",
    aboutBody: "Replace this with your own story — what you make, why you started, and what makes each piece worth the wait. Buyers connect with the maker, not just the product.",
    aboutFacts: [
        "Every item made or printed to order",
        "Ships within 3-5 business days",
        "Small batch, not mass produced"
    ],

    // Products and Reviews are no longer edited here — they're synced
    // automatically from your Airtable base into data/products.json and
    // data/reviews.json. See SETUP-GUIDE.md.
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

function renderPhoto() {
    const container = document.getElementById('about-photo');
    if (!container) return;

    if (CONFIG.photoUrl && CONFIG.photoUrl.trim() !== '') {
        container.innerHTML = `<img src="${escapeHTML(CONFIG.photoUrl)}" alt="${escapeHTML(CONFIG.shopName)}">`;
        container.classList.add('has-photo');
    }
    // If photoUrl is blank, the placeholder box (in index.html) stays as-is.
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

/**
 * Loads your Products grid from data/products.json — a plain data file that
 * a scheduled GitHub Action keeps in sync with the "Products" table in your
 * Airtable base. This file never contains your Airtable token; it only
 * contains the published records themselves. See SETUP-GUIDE.md.
 */
async function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    try {
        const response = await fetch('data/products.json', { cache: 'no-store' });

        if (!response.ok) {
            grid.innerHTML = `<p class="loading">Your products will appear here once the automatic sync runs for the first time.</p>`;
            return;
        }

        const data = await response.json();

        if (!data.records || data.records.length === 0) {
            grid.innerHTML = `<p class="loading">No published products yet. Set a row's Status to "Published" in your Products table to display it here.</p>`;
            return;
        }

        grid.innerHTML = data.records.map(record => {
            const fields = record.fields || {};
            const name = fields['Product Name'] || 'Untitled Product';
            const price = fields['Price'] || '';
            const imageUrl = fields['Image URL'] || '';
            const swatchHexes = (fields['Swatch Colors'] || '')
                .split(',')
                .map(hex => hex.trim())
                .filter(Boolean);

            const hasImage = imageUrl && imageUrl.trim() !== '';
            const imageMarkup = hasImage
                ? `<img src="${escapeHTML(imageUrl)}" alt="${escapeHTML(name)}">`
                : `Product Photo`;

            return `
                <div class="product-card reveal">
                    <div class="product-image${hasImage ? ' has-photo' : ''}">${imageMarkup}</div>
                    <div class="product-body">
                        <p class="product-name">${escapeHTML(name)}</p>
                        <p class="product-price mono">${escapeHTML(price)}</p>
                        <div class="product-swatches">
                            ${swatchHexes.map(hex => `<span class="mini-dot" style="background:${escapeHTML(hex)};"></span>`).join('')}
                        </div>
                    </div>
                </div>`;
        }).join('');

    } catch (error) {
        console.error('Products load error:', error);
        grid.innerHTML = `<p class="loading">Couldn't load products right now. Check the Actions tab in your GitHub repo for errors.</p>`;
    }
}

/**
 * Loads your Reviews grid from data/reviews.json — synced from the
 * "Reviews" table in your Airtable base the same way Products is.
 */
async function renderReviews() {
    const grid = document.getElementById('review-grid');
    if (!grid) return;

    try {
        const response = await fetch('data/reviews.json', { cache: 'no-store' });

        if (!response.ok) {
            grid.innerHTML = `<p class="loading">Your reviews will appear here once the automatic sync runs for the first time.</p>`;
            return;
        }

        const data = await response.json();

        if (!data.records || data.records.length === 0) {
            grid.innerHTML = `<p class="loading">No published reviews yet. Set a row's Status to "Published" in your Reviews table to display it here.</p>`;
            return;
        }

        grid.innerHTML = data.records.map(record => {
            const fields = record.fields || {};
            const quote = fields['Quote'] || '';
            const name = fields['Customer Name'] || 'Verified Buyer';
            const rating = Number(fields['Rating']) || 5;
            const clamped = Math.max(0, Math.min(5, rating));
            const stars = '★'.repeat(clamped) + '☆'.repeat(5 - clamped);

            return `
                <div class="review-card reveal">
                    <p class="review-stars">${stars}</p>
                    <p class="review-quote">"${escapeHTML(quote)}"</p>
                    <p class="review-name">— ${escapeHTML(name)}</p>
                </div>`;
        }).join('');

    } catch (error) {
        console.error('Reviews load error:', error);
        grid.innerHTML = `<p class="loading">Couldn't load reviews right now. Check the Actions tab in your GitHub repo for errors.</p>`;
    }
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

async function init() {
    renderText();
    renderPhoto();
    renderSwatches();
    renderTrust();
    renderCategories();
    renderAboutFacts();
    // Wait for the Airtable-synced content so the .reveal scroll-in effect
    // (set up right after) also applies to the product and review cards,
    // not just the static sections.
    await Promise.all([renderProducts(), renderReviews()]);
    initScrollReveal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
