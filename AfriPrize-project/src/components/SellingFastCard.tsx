import Ferrari from "../assets/Ferrari.png";

function SellingFastCard() {
  return (
    <>
      <div className="SellingFastCard">
        <div className="SellingFastCardFirstHalf">
          <h1>Win a Ferrari</h1>
          <p>Stand a chance to win 2023 ferrari...</p>
          <div className="ProgressBarContainer">
            <p>800 sold out of 2,000</p>
            <div className="ProgressBar">
              <div className="ProgressBarInner"></div>
            </div>
            <h5>Learn More</h5>
          </div>
        </div>
        <div className="SellingFastCardSecondHalf">
          <img className="Ferrari" src={Ferrari} alt="" />
        </div>
      </div>
    </>
  );
}

export default SellingFastCard;
