const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={require("/public/images/logo.png")}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;