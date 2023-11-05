import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";

function PasswordVerification() {
    return (
        <>
            <div className="webPage">
                <LoginRegisterFirstHalf />
                <div className="secondHalf">
                    <div className="secondHalfMain">
                        <div className="secondHalfMainHeader"></div>
                        <div className="secondHalfMainInput">
                            <label htmlFor="">
                                <h3>Email Verification Code</h3>
                                <input type="text" />
                            </label>
                        </div>
                        <div className="secondHalfMainVerify">
                            <Link to={"/NewPassword"}>
                                <button>Verify account</button>
                            </Link>
                        </div>
                        <div>
                            <span className="secondHalfMainResend">
                                <p>Didn’t receive the code?</p>&nbsp;<a href="#">Resend</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordVerification;
