import { CDN_URL } from "../utils/constants";
import { BsFillStarFill } from "react-icons/bs";

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

  const getRatingBadgeColor = (rating) => {
    if (rating >= 4) {
      return "bg-green-600";
    }

    return "bg-red-500";
  };

  return (
    <div className="w-72 h-80 p-2 m-2 shadow-lg bg-gray-100 rounded-lg hover:border-solid hover:border-2 hover:border-indigo-400">
      <div className="logo-container">
        <img
          alt="res-image"
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}></img>
      </div>

      <div className="font-bold text-lg text-gray-700 py-1">{name}</div>
      <div className="text-sm text-gray-600 line-clamp-2">
        {cuisines.join(", ")}
      </div>
      <div className="flex justify-between pt-3">
        <div className={"flex py-0.5 px-1 " + getRatingBadgeColor(avgRating)}>
          <BsFillStarFill className="fill-white w-3 h-3 mt-0.5" />
          <div className="text-xs text-white pl-1">{avgRating}</div>
        </div>
        <div className="text-xs text-gray-600 pt-0.5">
          ₹{costForTwo / 100} FOR TWO
        </div>
        <div className="text-xs text-gray-600 pt-0.5">{deliveryTime} MINS</div>
      </div>
    </div>
  );
};

export default ResaurentCard;
