import { Link } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import Notifications from "../assets/Notifications.png";
import Cart from "../assets/Cart.png";

import NoProfile from "../assets/NoProfile.jpg";

import Footer from "../components/Footer";

function Profile() {
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
      <div className="ProfilePage">
        <div className="ProfileBanner">
          <div className="ProfilePic">
            <img src={NoProfile} />
          </div>
          <div className="ProfileDetails">
            <p>
              <span>Name:</span> John Doe
            </p>
            <p>
              <span>Email:</span> johndoe@gmail.com
            </p>
            <p>
              <span>Phone Number:</span> +235 815 345 8764
            </p>
            <p>
              <span>Country: </span> 🇳🇬
            </p>
            <Link to={"/ProfileEdit"}>
              <button className="Manage">Manage</button>
            </Link>
          </div>
        </div>
        <div className="ProfileRunning">
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
      </div>
      <Footer />
    </>
  );
}

export default Profile;
