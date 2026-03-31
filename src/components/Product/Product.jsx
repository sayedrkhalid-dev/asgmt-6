import { Check } from "lucide-react";
import { useState } from "react";

const Product = ({ product, addToCart }) => {
  const [isPurchased, setIsperchased] = useState(false);

  return (
    <li className="card bg-base-100 border border-slate-300 shadow-md relative">
      {/* Product body */}
      <div className="card-body mt-8">
        {/* Product icon */}
        <span className="text-xl">{product.icon}</span>

        {/* Product badge */}
        <span
          className={`badge badge-md badge-soft border flex justify-center items-center capitalize font-nornal absolute top-4 right-4 shadow-md ${product.tag === "new" ? "bg-green-100 border-green-300 text-green-500" : product.tag === "popular" ? "bg-purple-100 border-purple-300 text-purple-500" : "bg-amber-100 border-amber-300 text-amber-500"}`}
        >
          {product.tag}
        </span>

        {/* Product name, des, price */}
        <div className="flex flex-col gap-2">
          {/* Product name */}
          <h2 className="text-xl font-semibold">{product.name}</h2>

          {/* Product description */}
          <p className="text-sm text-slate-500 w-60 h-12">
            {product.description}
          </p>

          {/* Product price */}
          <span className="text-xl">
            ${product.price}
            <span className="text-sm text-slate-400 capitalize">
              /{product.period}
            </span>
          </span>
        </div>

        {/* Product features */}
        <ul className="mt-6 flex flex-col gap-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 static">
              <Check size={18} stroke="blue" />
              <span className="text-sm text-slate-600">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Buy now button */}
        <div className="rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 shadow shadow-purple-400 hover:shadow-md hover:translate-y-0.5 transition-all duration-150 mt-6">
          <button
            className="w-full text-center text-base rounded-3xl px-4 py-2 font-semibold transition-all duration-150 cursor-pointer"
            onClick={() => {
              addToCart(product);
              setIsperchased(true);
            }}
          >
            {isPurchased ? "Perchased" : "Buy Now"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
