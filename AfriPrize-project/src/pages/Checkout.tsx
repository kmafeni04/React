import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Logo from "../assets/AfriPrizeLogo.png";
import LogoBackground from "../assets/LogoBackground.png";

import Footer from "../components/Footer";

function Checkout() {
  return (
    <>
      <MainNavbar>
        <Link to={"/Home"}>
          <li>Home</li>
        </Link>
        <Link to={"/Draws"}>
          <li>Draws</li>
        </Link>
        <Link to={"/Help"}>
          <li>Help</li>
        </Link>
        <Link to={"/Profile"}>
          <li>Profile</li>
        </Link>
        <li id="notiCart">
          <img
            className="NavNotifications"
            src={Notifications}
            alt="Notifications"
          />
        </li>
        <li id="notiCart">
          <Link to={"/CartPage"}>
            <img className="NavCart" src={Cart} alt="Cart" />
          </Link>
        </li>
      </MainNavbar>
      <div className="CheckoutPage">
        <div className="CheckoutCard">
          <div className="FirstHalf">
            <img className="LogoBackground" src={LogoBackground} alt="" />
            <img className="Logo" src={Logo} alt="" />
          </div>
          <div className="SecondHalf">
            <div className="Inner">
              <h1>Card Payment</h1>
              <hr />
              <div className="CardForm">
                <input placeholder="Cardholder Name" type="text" />
                <div className="CardDetails">
                  <input
                    className="CardNumber"
                    placeholder="Card Number"
                    type="text"
                  />
                  <input placeholder="MM/YY" type="month" />
                  <input placeholder="CVV" type="text" />
                </div>
                <input placeholder="Postal Code" type="text" />
                <div className="Total">
                  <p>Total</p>
                  <p>$40.00</p>
                </div>
                <button>Confirm Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;

// Website referenced https://dribbble.com/shots/21302239-Payment-page-for-clat-cosmetics //
