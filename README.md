# Product Dashboard App

**A mini admin panel for managing products**, built with React, Vite, and Tailwind CSS. This dashboard features product listing, search, category filtering, pagination, and a modal form for adding new products, along with a 404 Not Found page for unmatched routes.

---

## 🚀 Live Demo

[View the live app](https://product-dashboard-app-rho.vercel.app/)

---

## 📂 Folder Structure

```
product-dashboard-app/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/             # Images, fonts
│   ├── components/         # Reusable UI components
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Pagination.jsx
│   │   └── CreateProductModal.jsx
│   ├── pages/              # Page views
│   │   ├── ProductDashboard.jsx
│   │   └── NotFound.jsx    # 404 page for unmatched routes
│   ├── store/              # (Optional) Zustand store
│   │   └── useProductStore.js
│   ├── App.jsx             # Application root and routing
│   ├── main.jsx            # React DOM entry point
│   └── index.css           # Tailwind imports & global styles
├── .gitignore
├── LICENSE
├── package.json
├── postcss.config.cjs      # PostCSS + Tailwind setup
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

---

## ⚙️ Tech Stack

* **Core:** React, Vite
* **Styling:** Tailwind CSS v3.4.1
* **Forms & Validation:** React Hook Form + Zod
* **Routing:** React Router v6
* **State Management:** Local React state (or Zustand)
* **API Calls:** Axios
* **Deployment:** Vercel or Netlify

---

## ✨ Features

1. **Responsive Dashboard** — Flexible CSS grid layout with auto-fit columns
2. **Product Listing** — Fetch from `https://fakestoreapi.com/products` via Axios
3. **Search & Filter** — Real-time search bar and category dropdown
4. **Pagination** — Page-wise product navigation
5. **Create Product Modal** — Form with Zod validation to add new products
6. **404 Not Found Page** — Friendly fallback for unknown routes

---

## 🔧 Getting Started

### Prerequisites

* **Node.js** v16+
* **npm** or **Yarn**

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/product-dashboard-app.git
cd product-dashboard-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📖 Usage

* **Search:** Type to filter products by title
* **Filter:** Choose a category from the dropdown
* **Pagination:** Click Next/Prev to navigate pages
* **Add Product:** Click **+ Create Product**, fill the modal form, submit
* **404 Page:** Navigate to an undefined route to see the NotFound view

---

## 🚀 Deployment to Vercel

1. Push to GitHub
2. Import the repo in Vercel
3. Use default settings (Root `/`, Build `npm run build`)
4. Deploy and update the Live Demo link above

---

## 🛠 Customization & Extensibility

* **Tailwind config:** Tweak `tailwind.config.js` for themes or breakpoints
* **Animations:** Add Tailwind `animate-` utilities or integrate Framer Motion
* **State:** Swap local state for Zustand or Redux in `store/` directory

---

## 🔍 Code Snippet & Routing Example

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDashboard from './pages/ProductDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## ✔️ Lint & Format

```bash
npm run lint
```

---

## 📄 License

MIT © \[Olotuah]
