import { use, useState } from "react";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/Cart";

const Products = ({
  productsPromise,
  cart,
  hasToCart,
  addToCart,
  removeFromCart,
  updateQuantity,
}) => {
  const { products } = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section>
      <div className="w-full max-w-10/12 mx-auto my-4 py-4 flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl md:text-3xl/snug lg:text-4xl/snug tracking-wide font-bold text-center">
            Premium Digital Tools
          </h1>
          <p className="text-gray-700 text-center lg:px-30">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
          <div className="flex gap-2 bg-gray-200 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("products")}
              className={`font-semibold px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ${activeTab === "products" ? "bg-linear-to-r from-blue-500 to-purple-500 text-gray-50 shadow-sm shadow-blue-500/50 hover:shadow-md" : "bg-transparent text-gray-900"}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`font-semibold px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ${activeTab === "cart" ? "bg-linear-to-r from-blue-500 to-purple-500 text-gray-50 shadow-sm shadow-blue-500/50" : "bg-transparent text-gray-700"}`}
            >
              Cart ({cart.length})
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
                  hasToCart={hasToCart}
                  addToCart={addToCart}
                />
              ))}
            </ul>
          ) : (
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
