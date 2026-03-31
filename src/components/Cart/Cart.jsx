import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="border">
      <div className="card card-border bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
