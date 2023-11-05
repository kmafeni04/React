import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Footer from "../components/Footer";
import RecommendedCard from "../components/RecommendedCard";

function ProductList() {
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
          <li> Help </li>
        </Link>
        <Link to={"/Profile"}>
          <li> Profile</li>{" "}
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
      <div className="ProductListMainPage">
        <div className="SectionOne"></div>
        <div className="SectionTwo">
          <h1>Product List</h1>
          <div className="Recommended" id="firstRow">
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </div>
          <div className="Recommended" id="secondRow">
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </div>
          <div className="Recommended" id="thirdRow">
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </div>
          <div className="ProductListSpacing"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
