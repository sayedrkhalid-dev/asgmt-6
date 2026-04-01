import { ShoppingCart } from "lucide-react";
import Product from "./Product";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const grandTotal = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex justify-center">
      <div className="card card-border bg-base-100 w-10/12">
        {cart.length === 0 ? (
          <div className="card-body">
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-2xl font-semibold">Your Cart is Empty!</h1>
              <ShoppingCart size={64} className="opacity-75" />
              <button className="btn border-0 p-0.5 bg-gradient text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
                Browse Products
              </button>
            </div>
          </div>
        ) : (
          <div className="card-body">
            <h2 className="card-title">Your Cart</h2>
            <ul className="flex flex-col gap-4">
              {cart.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </ul>
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-xl text-right font-semibold">
                <span className="text-base text-gray-700">Total:</span> $
                {grandTotal}
              </span>
              <button className="btn border-0 p-0.5 bg-gradient text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
