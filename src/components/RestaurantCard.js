import { CDN_URL } from "../utils/constants";

const ResaurentCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="logo-container">
          <img
            alt="res-image"
            className="res-logo"
            src={
              CDN_URL +
              cloudinaryImageId
            }></img>
        </div>
  
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>₹{costForTwo / 100} for two</h4>
        <h4>{deliveryTime} Mins</h4>
      </div>
    );
  };

  export default ResaurentCard;