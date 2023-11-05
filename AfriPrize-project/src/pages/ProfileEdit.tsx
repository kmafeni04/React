import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import NoProfile from "../assets/NoProfile.jpg";

import Footer from "../components/Footer";

function ProfileEdit() {
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
                    <li id="activeLink">Profile</li>
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
            <div className="ProfileEditPage">
                <h1>Account Information:</h1>
                <div className="ProfilePic">
                    <img src={NoProfile} />
                </div>
                <div className="Form">
                    <h2>Name</h2>
                    <input type="text" placeholder="Full name" />
                    <input type="text" placeholder="Other names" />
                    <h2>Contact</h2>
                    <input type="text" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <select name="" id="">
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Algeria">Algeria</option>
                        <option value="South Africa">South Africa</option>
                    </select>
                    <h2>Password</h2>
                    <input type="password" placeholder="Old Password" />
                    <input type="password" placeholder="New Password" />
                    <input type="Password" placeholder="Confirm Password" />
                    <div className="FormButtons">
                        <Link to={"/Profile"}>
                            <button>Go Back</button>
                        </Link>
                        <Link to={"/Profile"}>
                            <button>Proceed</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfileEdit;
