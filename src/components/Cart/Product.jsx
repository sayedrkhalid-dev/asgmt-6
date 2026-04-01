import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const Product = ({ product, removeFromCart, updateQuantity }) => {
  const lineTotal = (product.price * product.quantity).toFixed(2);

  return (
    <li className="card bg-gray-100 flex flex-row justify-between items-center border border-gray-300 p-4">
      <div className="flex items-center gap-4">
        <span className="bg-gray-200 flex items-center justify-center w-10 h-10 text-lg aspect-square p-2 rounded-full border border-gray-300">
          {product.icon}
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm md:text-lg font-semibold">{product.name}</h2>
          <div className="flex items-center gap-4">
            {/* Product quantity */}
            <div className="w-24 md:w-32 text-base font-semibold flex flex-1 justify-between items-center text-center border border-gray-300 rounded-full overflow-hidden select-none">
              <span
                className="flex-1 bg-gray-200 border-r border-gray-300 cursor-pointer hover:bg-gray-300/85"
                onClick={() => {
                  if (product.quantity <= 1) return;
                  updateQuantity(product.id, product.quantity - 1);
                }}
              >
                -
              </span>
              <span className="flex-1 bg-gray-200 border-r border-gray-300">
                {product.quantity}
              </span>
              <span
                className="flex-1 bg-gray-200 cursor-pointer hover:bg-gray-300/85"
                onClick={() => {
                  if (product.quantity >= 99) return;
                  updateQuantity(product.id, product.quantity + 1);
                }}
              >
                +
              </span>
            </div>

            {/* Line total */}
            <span className="text-base font-semibold text-gray-700">
              ${lineTotal}
            </span>
          </div>
        </div>
      </div>
      <Trash2
        onClick={() => {
          removeFromCart(product);
          toast.error("Removed from Cart");
        }}
        size={20}
        stroke="gray"
        className="cursor-pointer hover:stroke-red-500"
      />
    </li>
  );
};

export default Product;
