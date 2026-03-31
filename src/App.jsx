import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import { Suspense } from "react";

// Nab items
const nav_items = [
  {
    id: 1,
    label: "home",
    path: "/",
  },
  {
    id: 2,
    label: "products",
    path: "/products",
  },
  {
    id: 3,
    label: "features",
    path: "/features",
  },
  {
    id: 4,
    label: "pricing",
    path: "/pricing",
  },
  {
    id: 5,
    label: "testimonials",
    path: "/testimonials",
  },
  {
    id: 6,
    label: "FAQ",
    path: "/questions",
  },
];

// fetch products
const fethProducts = async () => {
  const res = await fetch("/data/products.json");
  return res.json();
};

// fecth prices
const fethPrices = async () => {
  const res = await fetch("/data/prices.json");
  return res.json();
};

function App() {
  const productsPromise = fethProducts();
  const pricesPromise = fethPrices();

  return (
    <Router>
      <Navbar items={nav_items} />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <Home
                productsPromise={productsPromise}
                pricesPromise={pricesPromise}
              />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={"loading"}>
              <Products productsPromise={productsPromise} />
            </Suspense>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route
          path="/pricing"
          element={
            <Suspense fallback={"loading"}>
              <Pricing pricesPromise={pricesPromise} />
            </Suspense>
          }
        />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/questions" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
