import { Link } from "react-router-dom";

import Logo from "../assets/AfriPrizeLogo.png";
import LogoBackground from "../assets/LogoBackground.png";

import MagnifyingGlass from "../assets/MagnifyingGlass.png";

function MainNavbar(props: any) {
  return (
    <>
      <div className="MainNavbar">
        <img
          className="NavLogoBackground"
          src={LogoBackground}
          alt="LogoBackground"
        />
        <div className="InnerMargin">
          
          <Link to={"/Home"}>
            <img className="NavLogo" src={Logo} alt="Logo" />{" "}
          </Link>
          <div className="NavSpace"></div>
          <div className="SearchBar">
            <input type="text" />
            <img
              className="MagnifyingGlass"
              src={MagnifyingGlass}
              alt="MagnifyingGlass"
            />
          </div>
          <div className="NavSpace"></div>
          <div className="NavLinks">
            <ul>{props.children}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
