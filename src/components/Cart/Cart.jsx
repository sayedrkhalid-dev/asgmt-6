import { Trash2 } from "lucide-react";

const Cart = ({ cart, removeToCart }) => {
  return (
    <div className="flex justify-center">
      <div className="card card-border bg-base-100 w-10/12">
        <div className="card-body">
          <h2 className="card-title">Your Cart</h2>

          {/* Products */}
          <ul className="flex flex-col gap-4">
            {cart.map((product) => (
              <li
                key={product.id}
                className="card bg-gray-100 flex flex-row justify-between border border-gray-300 p-4"
              >
                <div className="flex items-center gap-4">
                  {/* Product icon */}
                  <span className="bg-gray-200 flex items-center justify-center w-10 h-10 text-lg aspect-square p-2 rounded-full border border-gray-300">
                    {product.icon}
                  </span>

                  <div>
                    {/* Product name */}
                    <h2 className="text-sm md:text-lg font-semibold">
                      {product.name}
                    </h2>

                    {/* Product price */}
                    <span className="font-semibold text-gray-700">
                      ${product.price}
                    </span>
                  </div>
                </div>

                {/* Product remove button */}
                <Trash2
                  onClick={() => removeToCart(product)}
                  size={20}
                  stroke="red"
                  className="cursor-pointer"
                />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-6">
            {/* Total price */}
            <span className="text-right font-semibold">Total : $</span>

            <div className="inline-block p-0.5 rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 text-gray-50 shadow shadow-purple-400 hover:shadow-md hover:trangray-y-0.5 transition-all duration-150">
              <button className="rounded-3xl px-4 py-2 font-semibold transition-all duration-150 cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
