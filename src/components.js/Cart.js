import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuList_itemCard from "./RestaurantMenuList_itemCard";
import { clearCart} from "../utils/cartSlice";
import { empty_cart_log } from "../utils/constants";
import { Link } from "react-router-dom";
import Cart_footer from "./Cart_footer";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch=useDispatch();

  const handleClearCart=()=>{
      dispatch(clearCart());
  };
  return (
    <div className="mt-36 flex flex-col items-center">
    
      <div className=" flex-col w-1/2 ">
      {cartItems.length===0 
      &&
      <div className="flex  flex-col items-center">
        <img className="w-1/2" src={empty_cart_log}/>
      <h1 className="font-bold text-xl  text-gray-600 ">Your card is empty </h1>
      <h1 className="text-gray-500">You can go to home page to view more restaurants</h1>
      <Link to="/">
      <button className="w-64 h-12 bg-orange-500 text-white font-medium p-1 rounded-xl m-3">SEE RESTAURANTS NEAR YOU</button>
      </Link>
      </div>
}
        {cartItems.map((restauarant) => (
          <div className=" ">
            <RestaurantMenuList_itemCard
              ItemCardData={restauarant}
              key={restauarant?.card?.info?.id}
            />
            
          </div>
        ))}
    
        <div className="flex justify-center">
            { cartItems.length>0  &&
            <button className="w-56 h-12 text-white bg-orange-600 rounded-lg  text-lg" onClick={handleClearCart}>
         Clear Cart
       </button>

}
        </div>
      </div>
      <Cart_footer/>
    </div>
  );
};
export default Cart;
