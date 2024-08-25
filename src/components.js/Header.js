import { Link } from "react-router-dom";
import { Page_log } from "../utils/constants";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10  bg-yellow-300 m-0 p-0  shadow-xl">
      <div className="flex justify-between pr-3 m-0 p-0 ">
        <img
          className="w-24 m-2  rounded-lg"
          src={Page_log}
          alt="app logo"
        />
        <ul className="flex">
          <li className="pt-4 m-3 text-lg ">
            <Link to="/">Home</Link>
          </li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pt-4 m-3 text-lg ">
            <Link to="/cart">Cart</Link>
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
