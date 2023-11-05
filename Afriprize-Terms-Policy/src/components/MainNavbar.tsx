import logoBackground from "../assets/LogoBackground.png";
import logo from "../assets/AfriPrizeLogo.png";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function MainNavbar(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <>
      <div className="MainNavbar">
        <img
          className="NavLogoBackground"
          src={logoBackground}
          alt="LogoBackground"
        />
        <div className="InnerMargin">
          <img className="NavLogo" src={logo} alt="Logo" />
          <div className="NavSpace"></div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
