import "./Header.scss";
import logo from "../../img/logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="main__header">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>

            <ul className="header__navigation_list">
              <li>
                <a className="header__navigation_item" href="#">
                  Product
                </a>
              </li>
              <li>
                <a className="header__navigation_item" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a className="header__navigation_item" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="header__navigation_item" href="#">
                  Resources
                </a>
              </li>
              <li>
                <a className="header__navigation_item_sign_in" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="header__navigation_item_sign_up" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
