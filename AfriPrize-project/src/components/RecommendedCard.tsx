import { Link } from "react-router-dom";

import Macbook from "../assets/Macbook.png";
import Star from "../assets/Star.png";
import Slippers from "../assets/Slippers.png";

function RecommendedCard() {
  return (
    <>
      <div className="RecommendedCard">
        <div className="RecommendedCardFirstHalf">
          <img className="RecommendedCardImg" src={Macbook} alt="" />
          <div className="AboveImage">
            <div className="Top">
              <img className="Star" src={Star} alt="" />
              <p>4.9</p>
            </div>
            <div className="Bottom">
              <img className="Slippers" src={Slippers} alt="" />
            </div>
          </div>
        </div>
        <div className="RecommendedCardSecondHalf">
          <div className="Inner">
            <div className="Header">
              <Link to={"/Product"}><h3>Win Macbook Pro</h3></Link>
              <span>
                Draw date:&nbsp;<p>28th April</p>
              </span>
            </div>
            <div className="ProgressBarContainer" id="recommendedBar">
              <p>800 sold out of 2,000</p>
              <div className="ProgressBar">
                <div className="ProgressBarInner"></div>
              </div>
            </div>
            <div className="Bottom">
              <span>
                Buy Flipflop for:&nbsp;<p>$7.50</p>
              </span>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendedCard;
