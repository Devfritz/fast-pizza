import { formatCurrency } from "../../utils/helpers";

import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li
      className="py-3 sm:flex sm:items-center sm:justify-between"
      key={pizzaId}
    >
      <p className="mb-1 mr-2">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
