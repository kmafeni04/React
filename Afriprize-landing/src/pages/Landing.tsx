import AfriPrizeLogo from "../assets/AfriPrizeLogo.png";
import LogoBackground from "../assets/LogoBackground.png"
import Phone1 from "../assets/Phone1.png";
import Phone2 from "../assets/Phone2.png";

function Landing() {
  return (
    <>
      <div className="WebPage">
        <img className="Background" src={LogoBackground} alt="" />
        <div className="TopBar">
          <img className="Logo" src={AfriPrizeLogo} alt="" />
          <button>Download now</button>
        </div>
        <div className="MainPage">
          <div className="FirstHalf">
            <h1>
              Welcome to the future of online shopping – where every purchase is
              a step towards your dreams!
            </h1>
            <div className="LowerHalf">
              <button>Download Now</button>
              <p>Shop. Win. Repeat.</p>
            </div>
          </div>
          <div className="SecondHalf">
            <img className="PhoneOne" src={Phone1} alt="" />
            <img className="PhoneTwo" src={Phone2} alt="" />
          </div>
        </div>
        <div className="Footer">
          <div className="FooterInner">
            <p>Download the app to your device</p>
            <h1>&#129170;</h1>
            <p>Sign up with your phone or ID card</p>
            <h1>&#129170;</h1>
            <p>The More You Shop, the More You Win!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
