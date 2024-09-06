import { Link } from "react-router-dom";
import { Page_log } from "../utils/constants";
import { useSelector } from "react-redux";
const Header = () => {
  //subricibing the store 
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems);
  return (
    <header className="fixed top-0 left-0 w-full z-10  bg-yellow-300 m-0 p-0  shadow-xl">
      <div className="flex justify-between pr-3 m-0 p-0 ">
       <Link><img
          className="w-24 m-2  rounded-lg"
          src={Page_log}
          alt="app logo"
        /></Link> 
        {/* <h1 className="font-md text-white text-xl">Foody Hub</h1> */}
        <ul className="flex">
          <li className="pt-4 m-3 text-lg ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg m-3 pt-4"><Link to="/search">Search</Link></li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/login">Login</Link>
          </li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/help">Help</Link>
          </li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
