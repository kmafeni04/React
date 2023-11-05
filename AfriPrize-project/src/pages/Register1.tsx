import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";
import LoginRegisterTopBar from "../components/LoginRegisterTopBar";

function Register1() {
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
                  <input type="radio" checked={true} name="" id="" />
                  <h3>Name</h3>
                </label>
                <label htmlFor="" className="secondHalfMainNavRadio">
                  <input type="radio" checked={false} name="" id="" />
                  <h3>Contact</h3>
                </label>
                <label htmlFor="" className="secondHalfMainNavRadio">
                  <input type="radio" checked={false} name="" id="" />
                  <h3>Password</h3>
                </label>
              </div>
            </div>
            <div className="secondHalfMainInput">
              <input type="text" placeholder="Full name" />
              <p>
                Surname must correspond with your bank details to process a
                successful withdrawal.
              </p>
              <input type="text" placeholder="Other names" />
              <p>
                Other names must correspond with your bank details to process a
                successful withdrawal.
              </p>
            </div>
            <div className="secondHalfMainNext" id="onlyNext">
              <Link to={"/Register2"}>
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register1;
