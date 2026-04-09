# 🛠️ DigiTools

A fully responsive **digital tools marketplace** landing page built with **React 19**, **TailwindCSS v4**, and **DaisyUI v5**, powered by **Vite**. DigiTools lets users browse a catalog of premium career and productivity software products, manage a live shopping cart, and explore subscription pricing plans — all in a clean blue-to-purple gradient UI.

The project also includes Figma (`.fig`) and Penpot (`.penpot`) design files, making it a complete design-to-code workflow example.

---

## 🖥️ Page Sections

The single-page app is composed of the following sections in order:

| Section | Description |
|---|---|
| **Navbar** | Sticky top nav with active link highlighting, cart item count badge, login link, theme toggle (Sun/Moon), mobile hamburger menu, and a "Get Started" CTA |
| **Banner / Hero** | Full-width hero with an animated AI badge, bold headline, "Explore Products" + "Watch Demo" buttons, and a semi-transparent background illustration |
| **Stats** | Blue-to-purple gradient bar showcasing 50K+ Active Users, 200+ Premium Tools, and a 4.9 Rating |
| **Products** | Tab-switched section showing either the 8-product grid or the active cart — data loaded from JSON via React `use()` + `Suspense` |
| **Pricing** | 3-tier pricing cards (Starter, Pro, Enterprise) — data loaded from JSON via React `use()` + `Suspense` |
| **Get Started** | 3-step onboarding guide: Create Account → Choose Products → Start Creating |
| **Workflow CTA** | Full-width gradient banner with a free trial call-to-action and trust signals |
| **Footer** | Dark footer with brand description, Product / Company / Resources link columns, social icons (Instagram, Facebook, Twitter), and legal links |

---

## ✨ Features

### 🛒 Shopping Cart System
Fully functional in-memory cart managed with React `useState` at the `App` level and passed down as props:

- **Add to Cart** — each product card has a "Buy Now" button; clicking it adds the item and shows a toast notification. The button label updates to "Added to Cart" / "Already added" on subsequent clicks
- **Duplicate prevention** — `hasToCart(id)` checks prevent the same item from being added twice
- **Quantity control** — in the cart view, each item has `+` / `−` buttons capped at 1 min and 99 max
- **Remove item** — `Trash2` icon removes any item with a toast confirmation
- **Grand total** — auto-calculated from `price × quantity` across all cart items
- **Checkout** — "Proceed to Checkout" triggers a success toast (UI only, no backend)
- **Empty state** — a friendly empty cart illustration + "Browse Products" button when cart is empty
- **Cart badge** — the navbar `ShoppingCart` icon shows a live count bubble in purple

### 📦 Products Tab / Cart Tab
The Products section uses a **pill tab switcher** to toggle between:
- `Products` — the full 8-item grid
- `Cart (n)` — the user's current cart with quantity controls and a total

### ⚡ Data Fetching with React `use()` + Suspense
Both product and pricing data are fetched from static JSON files in `/public/data/` using the React 19 `use()` hook inside `<Suspense>` boundaries. Promises are initiated at module level (outside the component tree) so data fetching starts immediately on page load — not on first render.

```jsx
// Fetch starts at module load time
const productsPromise = fetchProducts();
const pricesPromise    = fetchPrices();

// Inside Suspense boundary
const { products } = use(productsPromise);
```

A DaisyUI `loading-bars` spinner is shown as the fallback while data loads.

### 🏷️ Product & Pricing Badges
Both product cards and pricing cards use a color-coded badge system:

| Tag | Color |
|---|---|
| `new` / `starter` | 🟢 Green |
| `popular` / `pro` | 🟣 Purple |
| `best seller` / `enterprise` | 🟡 Amber |

### 🔔 Toast Notifications
`react-toastify` is used for user feedback throughout the app:
- ✅ Success — "Successfully Added to Cart"
- ⚠️ Warning — "Already added"
- ❌ Error — "Removed from Cart"
- ✅ Success — "Successfully ordered your products"

### 📱 Fully Responsive
- Mobile-first layout with TailwindCSS responsive prefixes
- Products grid: 1 col → 2 cols (`sm`) → 3 cols (`lg`)
- Pricing grid: 1 col → 2 cols (`md`) → 3 cols (`lg`)
- Get Started grid: 1 col → 3 cols (`md`)
- Navbar collapses to a hamburger menu below `xl` breakpoint
- Footer grid: 3 cols (`sm`) → 5 cols (`md`) → 6 cols (`lg`)

---

## 🗂️ Project Structure

```
asgmt-6/
├── index.html                        # App shell — DaisyUI theme "cupcake"
├── vite.config.js                    # Vite config with React + Tailwind plugins
├── eslint.config.js                  # ESLint flat config
├── package.json                      # Dependencies and npm scripts
├── public/
│   └── data/
│       ├── products.json             # 8 digital product definitions
│       └── prices.json               # 3 subscription plan definitions
└── src/
    ├── main.jsx                      # React DOM entry point
    ├── index.css                     # Global base styles
    ├── App.jsx                       # Root — cart state, data fetching, layout
    ├── assets/
    │   ├── banner.png                # Hero section illustration
    │   ├── user.png                  # "Create Account" step icon
    │   ├── package.png               # "Choose Products" step icon
    │   ├── rocket.png                # "Start Creating" step icon
    │   ├── instagram.png             # Social icon
    │   ├── facebook.png              # Social icon
    │   ├── twitter.png               # Social icon
    │   ├── Play.png                  # Play icon asset
    │   ├── products/                 # Product category illustrations
    │   │   ├── design-tool.png
    │   │   ├── operation.png
    │   │   ├── portfolio.png
    │   │   ├── shopping-cart.png
    │   │   ├── social-media.png
    │   │   └── writing_*.png
    │   └── ui/
    │       ├── DigiTools.fig         # Figma design file
    │       └── DigiTools.penpot      # Penpot design file
    ├── components/                   # Reusable UI components
    │   ├── Navbar/
    │   │   └── Navbar.jsx            # Sticky navbar with cart badge & theme toggle
    │   ├── Banner/
    │   │   └── Banner.jsx            # Hero section
    │   ├── Stats/
    │   │   └── Stats.jsx             # Gradient stats bar (3 metrics)
    │   ├── Cart/
    │   │   ├── Cart.jsx              # Cart panel with total & checkout button
    │   │   └── Product.jsx           # Individual cart item with qty controls
    │   ├── Product/
    │   │   └── Product.jsx           # Product card with Add to Cart button
    │   ├── Price/
    │   │   └── Price.jsx             # Pricing tier card
    │   ├── Workflow/
    │   │   └── Workflow.jsx          # CTA banner section
    │   ├── Step/
    │   │   └── Step.jsx              # Step component (placeholder)
    │   └── Footer/
    │       └── Footer.jsx            # Dark footer with links & socials
    └── sections/                     # Page-level section containers
        ├── Home.jsx                  # Alternate home layout (not used in App.jsx)
        ├── Products.jsx              # Tab switcher: Products grid ↔ Cart
        ├── Pricing.jsx               # Pricing cards section
        ├── GetStart.jsx              # 3-step onboarding section
        ├── Features.jsx              # Placeholder (not yet implemented)
        ├── FAQ.jsx                   # Placeholder (not yet implemented)
        └── Testimonials.jsx          # Placeholder (not yet implemented)
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.4 | UI framework |
| React DOM | ^19.2.4 | DOM rendering |
| Vite | ^8.0.1 | Build tool and dev server |
| TailwindCSS | ^4.2.2 | Utility-first CSS |
| @tailwindcss/vite | ^4.2.2 | Official Tailwind Vite plugin |
| DaisyUI | ^5.5.19 | UI component library (`cupcake` theme) |
| lucide-react | ^1.3.0 | Icon library (ShoppingCart, Check, Trash2, Menu, etc.) |
| react-toastify | ^11.0.5 | Toast notification system |

---

## 🗃️ Data — `public/data/`

### Products — `products.json`

8 digital career tools with icon emoji, badge tag, features list, price, and billing period:

| # | Product | Price | Period | Tag |
|---|---|---|---|---|
| 1 | 📄 Starter Resume Kit | $9.99 | one-time | 🟢 New |
| 2 | ⭐ Pro Resume Builder | $19.99 | monthly | 🟣 Popular |
| 3 | 🚀 Career Boost Pack | $49.99 | yearly | 🟡 Best Seller |
| 4 | 🎨 Portfolio Builder | $14.99 | one-time | 🟢 New |
| 5 | 💼 Freelancer Toolkit | $12.99 | monthly | 🟣 Popular |
| 6 | 📊 Job Tracker Pro | $7.99 | monthly | 🟡 Best Seller |
| 7 | 🎤 Interview Prep AI | $29.99 | yearly | 🟣 Popular |
| 8 | 👑 Ultimate Career Suite | $99.99 | yearly | 🟡 Best Seller |

### Pricing Plans — `prices.json`

| Plan | Price | Period | Tag | CTA |
|---|---|---|---|---|
| 📦 Starter Plan | $9.99 | monthly | 🟢 Starter | Get Started Free |
| 🚀 Pro Plan | $19.99 | monthly | 🟣 Most Popular | Start Pro Trial |
| 🏢 Enterprise Plan | $49.99 | yearly | 🟡 Enterprise | Contact Sales |

---

## ⚙️ Cart State — `App.jsx`

All cart state lives in `App.jsx` and is passed down as props:

```js
const [cart, setCart] = useState([]);

hasToCart(item)           // → true if item is already in cart
addToCart(product)        // → adds item with quantity: 1 (no duplicates)
removeFromCart(product)   // → filters item out of cart
updateQuantity(id, qty)   // → updates quantity for a specific item
```

The grand total is computed locally inside `Cart.jsx`:
```js
const grandTotal = cart
  .reduce((total, p) => total + p.price * p.quantity, 0)
  .toFixed(2);
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sayedrkhalid-dev/asgmt-6.git
cd asgmt-6

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Build for Production

```bash
npm run build
```

Outputs to `dist/` — ready to deploy on Vercel, Netlify, or any static host.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🎨 Design Files

The `/src/assets/ui/` folder contains the original UI design files:

- **`DigiTools.fig`** — Figma source file
- **`DigiTools.penpot`** — Penpot source file (open-source Figma alternative)

These can be opened in their respective tools to inspect spacing, colors, typography, and component layout before modifying the code.

---

## 🔮 Possible Improvements

- [ ] Implement the **Features** section (`src/sections/Features.jsx` is a placeholder)
- [ ] Implement the **FAQ** section (`src/sections/FAQ.jsx` is a placeholder)
- [ ] Implement the **Testimonials** section (`src/sections/Testimonials.jsx` is a placeholder)
- [ ] Wire up the **theme toggle** (Sun/Moon) to actually switch DaisyUI themes via `data-theme`
- [ ] Persist cart state to `localStorage` so it survives page refreshes
- [ ] Add a real **checkout flow** (payment integration)
- [ ] Connect the **"Get Started"** and **"Login"** buttons to an auth system
- [ ] Add product **search and filtering** in the Products grid
- [ ] Fix the typo `"enterprice"` → `"enterprise"` in `prices.json` `tagType` field
- [ ] Move the `steps` data array out of `GetStart.jsx` into `public/data/` to match the project's data-driven pattern
- [ ] Use the product illustration images from `/src/assets/products/` on the product cards (currently only emoji icons are used)
- [ ] Remove the unused `Home.jsx` section wrapper or integrate it into routing

---

## 👤 Author

**Sayed R. Khalid**
GitHub: [@sayedrkhalid-dev](https://github.com/sayedrkhalid-dev)

---

## 📄 License

This project is open source and available for personal and educational use.
