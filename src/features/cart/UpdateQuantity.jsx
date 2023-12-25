import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getQuantityByCurrentId,
  increaseItemQuantity,
} from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";

function UpdateQuantity({ pizzaId }) {
  const quantity = useSelector(getQuantityByCurrentId(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="space-x-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm">{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
