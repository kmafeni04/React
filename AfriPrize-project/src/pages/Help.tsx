import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Logo from "../assets/AfriPrizeLogo.png";
import LogoBackground from "../assets/LogoBackground.png"
import MagnifyingGlass from "../assets/MagnifyingGlass.png";

import Footer from "../components/Footer";

function Help() {
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
          <li id="activeLink">Help</li>
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
      <div className="HelpPage">
        <div className="HelpBanner">
          <img className="LogoBackground" src={LogoBackground} alt="" />
          <img className="Logo" src={Logo} alt="AfriPrize Logo" />
          <div className="Search">
            <h1>How can we help you?</h1>
            <div className="SearchBar">
              <input type="text" name="" id="" />
              <img
                className="MagnifyingGlass"
                src={MagnifyingGlass}
                alt="MagnifyingGlass"
              />
            </div>
          </div>
        </div>
        <div className="FAQ">
          <h1>F.A.Q.</h1>
          <div className="Questions">
            <div className="Question">
              <h2>How do I manage my running activicties?</h2>
              <h3>&#10095;</h3>
            </div>
            <div className="Question">
              <h2>How do I manage my running activicties?</h2>
              <h3>&#10095;</h3>
            </div>
            <div className="Question">
              <h2>How do I manage my running activicties?</h2>
              <h3>&#10095;</h3>
            </div>
            <div className="Question">
              <h2>How do I manage my running activicties?</h2>
              <h3>&#10095;</h3>
            </div>
            <div className="Question">
              <h2>How do I manage my running activicties?</h2>
              <h3>&#10095;</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Help;

/* 
References for this page
https://www.searchenginejournal.com/best-faq-page-examples/267709/ 
*/
