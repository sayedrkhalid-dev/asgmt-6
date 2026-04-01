import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";
import Products from "./sections/Products";
import Pricing from "./sections/Pricing";
import GetStart from "./sections/GetStart";
import { ToastContainer } from "react-toastify";

const nav_items = [
  { id: 1, label: "home", path: "/" },
  { id: 2, label: "products", path: "/products" },
  { id: 3, label: "features", path: "/features" },
  { id: 4, label: "pricing", path: "/pricing" },
  { id: 5, label: "testimonials", path: "/testimonials" },
  { id: 6, label: "FAQ", path: "/questions" },
];

const fetchProducts = async () => {
  const res = await fetch("/data/products.json");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const fetchPrices = async () => {
  const res = await fetch("/data/prices.json");
  if (!res.ok) throw new Error("Failed to fetch prices");
  return res.json();
};

const productsPromise = fetchProducts();
const pricesPromise = fetchPrices();

function App() {
  const [cart, setCart] = useState([]);

  const hasToCart = (item) => cart.some((product) => item.id === product.id);

  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev
        : [...prev, { ...product, quantity: 1 }],
    );
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  return (
    <>
      <Navbar items={nav_items} cart={cart} />
      <Banner />
      <Stats />

      <Suspense
        fallback={
          <div className="w-full max-w-10/12 mx-auto my-4 py-4">
            <span className="loading loading-bars loading-md"></span>
          </div>
        }
      >
        <Products
          productsPromise={productsPromise}
          cart={cart}
          hasToCart={hasToCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </Suspense>

      <Suspense
        fallback={
          <div className="w-full max-w-10/12 mx-auto my-4 py-4">
            <span className="loading loading-bars loading-md"></span>
          </div>
        }
      >
        <Pricing pricesPromise={pricesPromise} />
      </Suspense>

      <GetStart />
      <Workflow />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
