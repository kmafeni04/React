import { Link } from "react-router-dom";

function LoginRegisterTopBar() {
  return (
    <div className="secondHalfTop">
      <table className="secondHalfTopTable">
        <tr className="secondHalfTopTableTop">
          <td className="secondHalfTopTableTopOne" id="activeHeader">
            <Link to={"/"}>Login</Link>
          </td>
          <td className="secondHalfTopTableTopTwo">
            <Link to={"/Register1"}>Register</Link>
          </td>
        </tr>
        <tr className="secondHalfTopTableBottom">
          <td colSpan={2}>
            <div className="TopBar">
              <div className="ActiveBar"></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default LoginRegisterTopBar;
