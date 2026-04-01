import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const Product = ({ product, removeFromCart, updateQuantity }) => {
  const lineTotal = (product.price * product.quantity).toFixed(2);

  return (
    <li className="card bg-gray-100 flex flex-row items-center justify-between gap-3 border border-gray-300 p-3 sm:p-4">
      {/* Left: Icon + Info */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <span className="bg-gray-200 shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-base sm:text-lg rounded-full border border-gray-300">
          {product.icon}
        </span>

        <div className="flex flex-col gap-1.5 min-w-0 flex-1">
          {/* Product name */}
          <h2 className="text-sm sm:text-base md:text-lg font-semibold truncate">
            {product.name}
          </h2>

          {/* Quantity + price row */}
          <div className="flex items-center gap-3">
            {/* Quantity control */}
            <div className="text-sm font-semibold flex items-center border border-gray-300 rounded-full overflow-hidden select-none w-24 sm:w-28">
              <button
                className="flex-1 py-1 bg-gray-200 border-r border-gray-300 hover:bg-gray-300 transition-colors text-center"
                onClick={() => {
                  if (product.quantity <= 1) return;
                  updateQuantity(product.id, product.quantity - 1);
                }}
              >
                −
              </button>
              <span className="flex-1 py-1 bg-gray-200 border-r border-gray-300 text-center">
                {product.quantity}
              </span>
              <button
                className="flex-1 py-1 bg-gray-200 hover:bg-gray-300 transition-colors text-center"
                onClick={() => {
                  if (product.quantity >= 99) return;
                  updateQuantity(product.id, product.quantity + 1);
                }}
              >
                +
              </button>
            </div>

            {/* Line total */}
            <span className="text-sm sm:text-base font-semibold text-gray-700 whitespace-nowrap">
              ${lineTotal}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Delete */}
      <Trash2
        onClick={() => {
          removeFromCart(product);
          toast.error("Removed from Cart");
        }}
        size={18}
        stroke="gray"
        className="shrink-0 cursor-pointer hover:stroke-red-500 transition-colors"
      />
    </li>
  );
};

export default Product;
