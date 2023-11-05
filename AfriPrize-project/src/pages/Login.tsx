import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";
import LoginRegisterTopBar from "../components/LoginRegisterTopBar";

function Login() {
  return (
    <>
      <div className="webPage">
        <LoginRegisterFirstHalf />
        <div className="secondHalf">
          <LoginRegisterTopBar />
          <div className="secondHalfMain">
            <h3 className="secondHalfMainHeader">Login</h3>
            <p className="secondHalfMainSubHeader">
              Enter your login information and have access to goodness
            </p>
            <div className="secondHalfMainInput">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="secondHalfMainFpLgn">
              <Link to={'/ForgotPassword'}>Forgot Password?</Link> 
              <Link to={'/Home'}> <button>Login</button></Link>
            </div>
            <span className="rmbrMe">
              <input type="checkbox" />
              <p>Remember me</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
