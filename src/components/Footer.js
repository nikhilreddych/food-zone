import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return (
      <div className="footer">
        <div className="logo-container">
          <img className="logo" src={require("/public/images/logo.png")}></img>
        </div>
        <div className="copy-right">
          <ul>
            <li>
              <MdCopyright className="social-icon" />
            </li>
            <li style={{ marginTop: "7px", fontSize: "18px" }}>2023 Food Zone</li>
          </ul>
        </div>
  
        <div className="social">
          <ul>
            <li>
              <FaFacebook className="social-icon" />
            </li>
            <li>
              <FaInstagramSquare className="social-icon" />
            </li>
            <li>
              <BsTwitter className="social-icon" />
            </li>
            <li>
              <BsYoutube className="social-icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Footer;