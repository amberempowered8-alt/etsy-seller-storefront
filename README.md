# Etsy / Product Seller Storefront — Setup Guide

## Your Repo Link
https://github.com/amberempowered8-alt/etsy-seller-storefront

Click **"Use this template"** → **Create a new repository** to copy this storefront into your own free GitHub account. Start here before anything else below.

## What You Got
- A ready-to-launch storefront for handmade, print-on-demand, or digital product shops
- Free hosting, no monthly fees, ever
- No coding needed — everything is edited in one simple file

## Step 1: Add Your Info

Open `app.js`. At the top, you'll see a `CONFIG` section — this is the only place you need to edit. Replace the placeholder text with your own. Every field is named, so just search for the name below inside `CONFIG` (line numbers aren't listed here on purpose — they shift as you edit, but the field names never do):

- `shopName` — Your shop name
- `heroHeadline` / `heroSubtext` — Your headline and short intro
- `shopLink` — Your shop link (see Step 2 below — don't click the placeholder link, it's not a real destination)
- `photoUrl` — Your Shop Photo (see Step 3 below)
- `swatches` — Your color/variant swatches
- `credentials` — Your trust badges (e.g. "500+ Items Shipped")
- `categories` — Your product categories
- `products` — Your featured products, including each product's own `imageUrl` (see Step 3 below)
- `aboutHeading` / `aboutBody` / `aboutFacts` — Your "about" section
- `reviews` — Your customer reviews

To edit a file directly on GitHub: click the file, then the pencil icon (top right). When done, scroll down and click **"Commit changes"** — this is what actually saves your edits.

## Step 2: Connect Your Shop Link

Still inside `CONFIG`, find `shopLink` and replace the placeholder with your real Etsy shop URL or checkout link. Do not click the placeholder link as-is — it's not a real working page, just text meant to be replaced. This is what the "Visit the Shop" and "Browse the Shop" buttons point to.

## Step 3: Add Your Photos

There are two separate photo fields — both work the same way, and both are optional:

- **Shop Photo** — find `photoUrl` near the top of `CONFIG`. Paste in a link to a photo of you or your shop (or, if you uploaded a photo file into this repo, just put its file name, e.g. `"shop-photo.jpg"`).
- **Product Photos** — inside the `products` array, each product has its own `imageUrl` field. Paste a photo link (or file name) for each product you want a real photo on.

Leave any of these fields as `""` (empty quotes) to keep that placeholder box showing instead — the site still works fine without photos, they just won't be filled in yet.

**Don't have your photos hosted anywhere?** The simplest way: upload the photo file directly into your GitHub repo (drag it into the file list), then use its exact file name (e.g. `"my-shop.jpg"`) as the value.

## Step 4: Go Live (Free Hosting)

1. Click **"Use this template"** on GitHub to copy this into your own account (see link at the top of this doc).
2. Go to **Settings → Pages**, and turn on GitHub Pages.
3. Your site is now live at no cost, and stays free — no monthly bill.

Give it a minute. After you commit changes or turn on Pages for the first time, GitHub needs a minute or two to rebuild your site. If it doesn't show your changes right away, wait a minute and refresh before assuming something's wrong.

## ⚠️ Connecting a Custom Domain (We Strongly Recommend This)

If you leave your site on its default GitHub address, the link in your browser will show our template account name (e.g. `amberempowered8-alt.github.io`) instead of your own shop — not a great look for customers checking out your storefront.

Already own a domain (Squarespace Domains, Namecheap, GoDaddy, Cloudflare)? You can point it at your new site in a few extra minutes:

1. In your domain registrar's DNS settings, add a `CNAME` record pointing your subdomain (e.g. `www`) to `<your-github-username>.github.io`.
2. For your root domain (no `www`), add four `A` records pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Back in **Settings → Pages** on GitHub, enter your custom domain and save. DNS changes can take a little while to fully kick in — usually minutes, sometimes longer.

We strongly recommend doing this before sharing your link with real customers.

## A Note on "Free"

Hosting is completely free to start. If you ever outgrow the free tier (very high traffic), a low-cost paid step may apply — but you'll never be locked into a recurring platform fee just to keep your site online.

## Questions?

This is a self-guided template.

Join the AE9 Labs Discord: https://discord.gg/b45jmgHK3

Support & Feedback form: https://airtable.com/app2dNCzkf61VdNKa/pagH5JffQIe7npirH/form
