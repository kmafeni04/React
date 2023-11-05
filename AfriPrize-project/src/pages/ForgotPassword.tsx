import { Link } from "react-router-dom";
import LoginRegisterFirstHalf from "../components/LoginRegisterFirstHalf";

function ForgotPassword() {
    return (
        <>
            <div className="webPage">
                <LoginRegisterFirstHalf />
                <div className="secondHalf">
                    <div className="secondHalfMain">
                        <div className="secondHalfMainInput">
                            <label className="FgPwd">
                                <h1>Forgot Password?</h1>
                                <p>
                                    Don’t worry, it happens enter email or phone number associated
                                    with your account.
                                </p>
                                <input type="text" />
                            </label>
                        </div>
                        <div className="secondHalfMainVerify">
                            <Link to={"/PasswordVerification"}>
                                <button>Submitt</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
