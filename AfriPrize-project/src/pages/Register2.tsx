import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";
import LoginRegisterTopBar from "../components/LoginRegisterTopBar";

function Register2() {
  return (
    <>
      <div className="webPage">
        <LoginRegisterFirstHalf />
        <div className="secondHalf">
          <LoginRegisterTopBar />
          <div className="secondHalfMain">
            <div className="secondHalfMainHeader">
              <div className="secondHalfMainNav">
                <label htmlFor="" className="secondHalfMainNavRadio">
                  <input type="radio" checked={false} name="" id="" />
                  <h3>Name</h3>
                </label>
                <label htmlFor="" className="secondHalfMainNavRadio">
                  <input type="radio" checked={true} name="" id="" />
                  <h3>Contact</h3>
                </label>
                <label htmlFor="" className="secondHalfMainNavRadio">
                  <input type="radio" checked={false} name="" id="" />
                  <h3>Password</h3>
                </label>
              </div>
            </div>
            <div className="secondHalfMainInput">
              <input type="text" placeholder="Email" />
              <p>
                A valid email is required for pin resetting and withdrawal
                requests
              </p>
              <input type="tel" placeholder="Phone Number" name="" id="" />
              <p>E.g: +2347098775481</p>
              <select name="" id="">
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Algeria">Algeria</option>
                <option value="South Africa">South Africa</option>
              </select>
              <p>
                Other names must correspond with your bank details to process a
                successful withdrawal.
              </p>
              <div className="secondHalfMainNext">
                <Link to={"/Register1"}>
                  <button>Back</button>
                </Link>
                <Link to={"/Register3"}>
                  <button>Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register2;
