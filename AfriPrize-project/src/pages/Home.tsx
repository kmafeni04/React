import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Mclaren from "../assets/Mclaren.png";
import Sneakers from "../assets/Sneakers.png";
import SellingFastCard from "../components/SellingFastCard";
import RecommendedCard from "../components/RecommendedCard";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <MainNavbar>
                <Link to={"/Home"}>
                    <li id="activeLink">Home</li>
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
            <div className="HomeMainPage">
                <div className="SectionOne">
                    <div className="SectionOneFirstHalf">
                        <img className="Mclaren" src={Mclaren} alt="" />
                        <div className="LowerElements">
                            <div className="LeftHand">
                                <img className="Sneakers" src={Sneakers} alt="" />
                                <p>Buy snickers and stand a chance to win</p>
                                <h2>2023 McLaren</h2>
                            </div>
                            <button>Win Now</button>
                        </div>
                    </div>
                    <div className="SectionOneSecondHalf">
                        <h1>Selling fast</h1>
                        <div className="SellingFastCardContainer">
                            <SellingFastCard />
                            <SellingFastCard />
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
                    <Link to={"/ProductList"}>
                        <h4>See All</h4>
                    </Link>
                </div>
                <div className="SectionThree">
                    <h1>F.A.Q</h1>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
