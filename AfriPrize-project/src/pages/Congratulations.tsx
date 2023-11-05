import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";

function Congratulations() {
  return (
    <>
      <div className="webPage">
        <LoginRegisterFirstHalf />
        <div className="secondHalf">
          <div className="secondHalfMain">
            <div className="secondHalfMainCongratulations">
              <h1>Congratulations</h1>
              <p>Your account is ready!</p>
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

export default Congratulations;
