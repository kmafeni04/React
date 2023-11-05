import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";

function NewPassword() {
  return (
    <>
      <div className="webPage">
        <LoginRegisterFirstHalf />
        <div className="secondHalf">
          <div className="secondHalfMain">
            <div className="secondHalfMainHeader"></div>
            <div className="secondHalfMainInput">
              <label htmlFor="">
                <h3>Enter new password</h3>
                <input type="password" placeholder="Password" />
                <p>Password must be between 6-8 characters</p>
              </label>
              <label htmlFor="">
                <h3>Confirm Password</h3>
                <input type="password" placeholder="Confirm password" />
                <p>Password must be between 6-8 characters</p>
              </label>
            </div>
            <div className="secondHalfMainVerify">
              <Link to={"/PasswordCongratulations"}>
                <button>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
