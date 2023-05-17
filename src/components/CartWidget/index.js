import { useDispatch } from "react-redux";
import CartIcon from "../../svg/CartIcon";
import { clearCart } from "../../store/slices/cartSlice";


const CartWidget = ({ cart, sum }) => {
    const dispatch = useDispatch();
    return (
      <div className="mx-auto my-5 container flex flex-row-reverse text-right">
        <div>
          <div className="flex justify-end">
            <CartIcon /> X {cart.length}
          </div>
          <div>Сумма: {sum} руб</div>
          <button  onClick={() => (dispatch( clearCart(cart),localStorage.clear(cart) ))} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Очистить
            </button>
        </div>
       
      </div>
    );
  };
  
  export default CartWidget;