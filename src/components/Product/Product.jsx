import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const Product = ({ product, addToCart, hasToCart }) => {
  const [label, setLabel] = useState("Buy Now");

  const badge = {
    new: "bg-green-100 border-green-300 text-green-500",
    popular: "bg-purple-100 border-purple-300 text-purple-600",
    best_seller: "bg-amber-100 border-amber-300 text-amber-500",
  };

  return (
    <li className="relative card bg-base-100 border border-gray-300 shadow-md transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl">
      {/* Product body */}
      <div className="card-body mt-8">
        {/* Product icon */}
        <span className="text-2xl">{product.icon}</span>

        {/* Product badge */}
        <span
          className={`absolute top-4 right-4 px-4 py-1 border font-semibold capitalize rounded-full ${product.tagType === "new" ? badge.new : product.tagType === "popular" ? badge.popular : badge.best_seller}`}
        >
          {product.tag}
        </span>

        {/* Product name, des, price */}
        <div className="flex flex-col gap-2">
          {/* Product name */}
          <h2 className="text-xl font-semibold">{product.name}</h2>

          {/* Product description */}
          <p className="text-sm text-gray-500 w-60 h-12">
            {product.description}
          </p>

          {/* Product price */}
          <span className="text-xl">
            ${product.price}
            <span className="text-sm text-gray-400 capitalize">
              /{product.period}
            </span>
          </span>
        </div>

        {/* Product features */}
        <ul className="mt-6 flex flex-col gap-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 static">
              <Check size={18} stroke="blue" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Buy now button */}
        <button
          className={`btn border-0 p-0.5 bg-green-500 text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer transition-colors duration-300
          ${label === "Buy Now" && "bg-gradient"}`}
          onClick={() => {
            addToCart(product);
            setLabel(hasToCart(product) ? "Already added" : "Added to Cart");
            !hasToCart(product)
              ? toast.success("Successfully Added to Cart")
              : toast.warning("Already added");
          }}
        >
          {label}
        </button>
      </div>
    </li>
  );
};

export default Product;
