import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";
import Home from "./sections/Home";
import Products from "./sections/Products";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import { Suspense } from "react";
import GetStart from "./sections/GetStart";

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
    <>
      <Navbar items={nav_items} />
      <Banner />
      <Stats />

      <Suspense fallback="Loading...">
        <Products productsPromise={productsPromise} />
      </Suspense>

      <Suspense fallback="Loading...">
        <Pricing pricesPromise={pricesPromise} />
      </Suspense>

      <GetStart />

      <Workflow />

      <Footer />
    </>
  );
}

export default App;
