import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-2 py-4">
      <Link to="/menu">&larr; Back to menu</Link>

      <p className="font-semibold mt-8">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
