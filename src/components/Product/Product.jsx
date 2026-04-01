import { Check } from "lucide-react";
import { useState } from "react";

const Product = ({ product, addToCart }) => {
  const [isPurchased, setIsPurchased] = useState(false);

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
          className="btn border-0 p-0.5 bg-gradient text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer"
          onClick={() => {
            addToCart(product);
            setIsPurchased(true);
          }}
        >
          {isPurchased ? "Purchased" : "Buy Now"}
        </button>
      </div>
    </li>
  );
};

export default Product;
