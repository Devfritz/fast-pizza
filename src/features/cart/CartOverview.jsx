import { useSelector } from "react-redux";
import { totalCart, totalQuantity } from "./cartSlice";
import Button from "../../ui/Button";
function CartOverview() {
  const totalPriceCart = useSelector(totalCart);
  const totalCartQuantity = useSelector(totalQuantity);

  if (!totalPriceCart) return null;
  return (
    <div className="text-sm md:text-lg flex items-center justify-between px-4 py-2 text-stone-200 bg-stone-800">
      <p className="space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPriceCart}</span>
      </p>
      <Button to="cart">Open cart &rarr;</Button>
    </div>
  );
}

export default CartOverview;
