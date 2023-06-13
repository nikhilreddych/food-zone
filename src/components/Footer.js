import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex justify-between border-t-2 border-gray-100 bg-gray-100 mt-2">
      <div className="logo-container">
        <img
          className="h-16 p-1 m-1"
          src={require("/public/images/logo.png")}></img>
      </div>
      <div className="py-6">
        <ul className="flex">
          <li>
            <MdCopyright className="h-6 w-6" />
          </li>
          <li>2023 Food Zone</li>
        </ul>
      </div>

      <div className="py-6 px-2">
        <ul className="flex">
          <li className="px-1">
            <FaFacebook className="h-6 w-6" />
          </li>
          <li className="px-1">
            <FaInstagramSquare className="h-6 w-6" />
          </li>
          <li className="px-1">
            <BsTwitter className="h-6 w-6" />
          </li>
          <li className="px-1">
            <BsYoutube className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
