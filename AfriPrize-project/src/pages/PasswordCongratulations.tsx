import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";

function PasswordCongratulations() {
  return (
    <>
      <div className="webPage">
        <LoginRegisterFirstHalf />
        <div className="secondHalf">
          <div className="secondHalfMain">
            <div className="secondHalfMainCongratulations">
              <h1>Congratulations</h1>
              <p>Your password has been reset!</p>
              <Link to={"/Home"}>
                <button>Proceed to Home page</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordCongratulations;
