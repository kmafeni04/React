import logo from "../assets/AfriPrizeLogo.png";
import logoBackground from "../assets/LogoBackground.png";

function LoginRegisterFirstHalf() {
  return (
    <div className="firstHalf">
      <img className="logoBackground" src={logoBackground} alt="Logo" />
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default LoginRegisterFirstHalf;
