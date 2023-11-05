import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Footer from "../components/Footer";
import RecommendedCard from "../components/RecommendedCard";

import Macbook2 from "../assets/Macbook2.png";
import Slippers2 from "../assets/Slippers2.png";
import Slippers3 from "../assets/Slippers3.png";
import Slippers4 from "../assets/Slippers4.png";
import Slippers5 from "../assets/Slippers5.png";
import Star from "../assets/Star.png";

function Product() {
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
          <li> Profile </li>
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
      <div className="ProductMainPage">
        <div className="SectionOne">
          <div className="FirstHalf">
            <div className="Top">
              <img src={Macbook2} alt="" />
              <div className="Desc">
                <h3>Stand a chance to win a macbook pro 2020</h3>
              </div>
            </div>
            <div className="Bottom">
              <img src={Slippers2} alt="" />
              <img src={Slippers3} alt="" />
              <img src={Slippers4} alt="" />
              <img src={Slippers5} alt="" />
            </div>
          </div>
          <div className="SecondHalf">
            <div className="ProductDesc">
              <div className="Top">
                <img src={Star} alt="" />
                <p>4.9</p>
                <span>
                  (85) <p>Reviews</p>
                </span>
              </div>
              <div className="Header">
                <h1>Flipflop</h1>
                <h2>$7.50</h2>
              </div>
              <div className="Content">
                <h2>Product description:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nec morbi pellentesque lacus, aenean enim diam
                  dolor. Dignissim porttitor magna quis facilisis elit lorem
                  elit arcu. Sit mattis cursus feugiat a a arcu facilisis ipsum
                  tortor. Arcu quisque tincidunt cras vehicula id et vulputate.
                  Ut facilisis viverra nunc tempus. Id{" "}
                </p>
              </div>
              <div className="Counter">
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
              <div className="AddBtn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="SectionTwo">
          <h1>Recommended</h1>
          <div className="Recommended">
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
