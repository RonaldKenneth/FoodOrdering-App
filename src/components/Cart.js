import ChildNestedFood from "./ChildNestedFood.js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const {} = cartItem;
  const handleClrCart = () =>{
      dispatch(clearCart())
  }
  return (
    <div>
      <div className="text-center">
        <div className="m-2 p-2 font-extrabold text-xl	">Cart Items</div>
        <button className="bg-black text-white rounded-md p-1" onClick={handleClrCart}>Clear Cart</button>
      </div>
      <div className="w-6/12 m-auto">
        <ChildNestedFood dt={cartItem} addState={false} />
      </div>
    </div>
  );
};

export default Cart;
