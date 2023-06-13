import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-xl bg-gray-100">
      <div className="logo-container">
        <Link to="/">
          <img
            className="h-24 p-2 m-2"
            src={require("/public/images/logo.png")}></img>
        </Link>
      </div>
      <div className="font-bold text-lg text-gray-500 mt-11">
        Welcome back, {user.name}
      </div>
      <div className="px-2 mx-2">
        <ul className="flex py-11">
          <li className="px-3 font-sans text-gray-600 text-xl hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 font-sans text-gray-600 text-xl hover:text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 font-sans text-gray-600 text-xl hover:text-orange-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3 font-sans text-gray-600 text-xl hover:text-orange-400">
            Cart
          </li>
          <li className="px-3 font-sans text-gray-600 text-xl hover:text-orange-400">
            <Link to="/instamart">Insta Mart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
