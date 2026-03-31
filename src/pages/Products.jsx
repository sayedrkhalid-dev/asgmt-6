import { use, useState } from "react";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/Cart";

const Products = ({ productsPromise }) => {
  const { products } = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return (
    <section className="w-full max-w-10/12 mx-auto py-10 mt-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center-center items-center gap-4">
          {/* Banner title */}
          <h1 className="text-2xl md:text-3xl/snug lg:text-4xl/snug tracking-wide font-bold text-center">
            Premium Digital Tools
          </h1>

          {/* Banner description */}
          <p className="text-slate-600 text-center lg:px-30">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          {/* Banner buttons */}
          <div className="flex gap-2 bg-slate-200 p-1 rounded-full">
            {/* Primary button */}
            <button
              onClick={() => setActiveTab("products")}
              className={`${activeTab === "products" ? "bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 shadow-sm shadow-blue-500/50" : "bg-transparent text-slate-700"} font-semibold px-6 py-2 rounded-full cursor-pointer hover:shadow-md transition duration-300`}
            >
              Products
            </button>

            {/* Primary button outlined */}
            <button
              onClick={() => setActiveTab("cart")}
              className={`${activeTab === "cart" ? "bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 shadow-sm shadow-blue-500/50" : "bg-transparent text-slate-700"} font-semibold px-6 py-2 rounded-full cursor-pointer hover:shadow-md transition duration-300`}
            >
              Cart
            </button>
          </div>
        </div>

        <div>
          {activeTab === "products" ? (
            <ul className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-6">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </ul>
          ) : (
            <Cart cart={cart} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
