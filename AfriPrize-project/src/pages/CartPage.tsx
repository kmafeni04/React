import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import Slippers from "../assets/Slippers.png";

import Footer from "../components/Footer";

function CartPage() {
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
                <li id="notiCartActive">
                    <Link to={"/CartPage"}>
                        <img className="NavCart" src={Cart} alt="Cart" />
                    </Link>
                </li>
            </MainNavbar>
            <div className="CartPage">
                <div className="FirstHalf">
                    <div className="Box1">
                        <div className="Header">
                            <h2>
                                Cart <span>(2 products)</span>
                            </h2>
                            <p>✕ Clear Cart</p>
                        </div>
                        <table className="CartTable">
                            <thead>
                                <td>Product</td>
                                <td>Amount</td>
                                <td>Price</td>
                            </thead>
                            <tr className="CartItem">
                                <td className="Product">
                                    <img src={Slippers} alt="" />
                                    <div>
                                        <h3>Slippers</h3>
                                        <p>White</p>
                                    </div>
                                </td>
                                <td className="Amount">
                                    <div>
                                        <button>‒</button>
                                        <p>2</p>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td className="Price">
                                    <p>$20</p>
                                </td>
                                <td className="ClearItem">
                                    <p>✕</p>
                                </td>
                            </tr>
                            <tr className="CartItem">
                                <td className="Product">
                                    <img src={Slippers} alt="" />
                                    <div>
                                        <h3>Slippers</h3>
                                        <p>White</p>
                                    </div>
                                </td>
                                <td className="Amount">
                                    <div>
                                        <button>‒</button>
                                        <p>2</p>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td className="Price">
                                    <p>$20</p>
                                </td>
                                <td className="ClearItem">
                                    <p>✕</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="SecondHalf">
                    <div className="Box1">
                        <p className="PromoHeader">Promo Code:</p>
                        <div className="PromoInput">
                            <input placeholder="Type here..." />
                            <button>Apply</button>
                        </div>
                        <hr />
                        <div className="Subtotal">
                            <p>Subtotal</p>
                            <p>$40.00</p>
                        </div>
                        <div className="Discount">
                            <p>Discount</p>
                            <p>-$0.00</p>
                        </div>
                        <div className="Total">
                            <p>Total</p>
                            <p className="FinalTotal">$40.00</p>
                        </div>
                        <Link to={"/Checkout"}>
                            <button className="Checkout">Continue to Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

//Websites referenced: https://www.convertcart.com/blog/cart-page-designs, https://dribbble.com/tags/cart-page

export default CartPage;
