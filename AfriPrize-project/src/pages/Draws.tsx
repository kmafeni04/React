import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Mclaren from "../assets/Mclaren.png";
import Sneakers from "../assets/Sneakers.png";
import RaffleDraw from "../assets/Raffle_draw.png";

import Footer from "../components/Footer";

function Draws() {
    return (
        <>
            <MainNavbar>
                <Link to={"/Home"}>
                    <li>Home</li>
                </Link>
                <Link to={"/Draws"}>
                    <li id="activeLink">Draws</li>
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
            <div className="RaffleDrawPage">
                <div>
                    <img src={RaffleDraw} alt="Raffle Draw" className="RaffleDrawImg" />
                </div>
                <div className="RaffleMclaren">
                    <img className="Mclaren" src={Mclaren} alt="Mclaren" />
                    <div className="LowerElements">
                        <div className="LeftHand">
                            <img className="Sneakers" src={Sneakers} alt="Sneakers" />
                            <p>Buy snickers and stand a chance to win</p>
                            <h2>2023 McLaren</h2>
                        </div>
                        <button>Win Now</button>
                    </div>
                </div>
                <div className="Running">
                    <h1>Running</h1>
                    <div className="List">
                        <h3>1.</h3>
                        <table>
                            <tr>
                                <td>
                                    <h3>Range Rover Sports</h3>
                                </td>
                                <td>
                                    <p>Ticket No:</p> <h3>000085752257</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Start time:</h4>
                                    <h5>28th April 2023</h5>
                                </td>
                                <td>
                                    <h4>End time:</h4>
                                    <h5>29th April 2023</h5>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="List">
                        <h3>2.</h3>
                        <table>
                            <tr>
                                <td>
                                    <h3>Range Rover Sports</h3>
                                </td>
                                <td>
                                    <p>Ticket No:</p> <h3>000085752257</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Start time:</h4>
                                    <h5>28th April 2023</h5>
                                </td>
                                <td>
                                    <h4>End time:</h4>
                                    <h5>29th April 2023</h5>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Draws;
