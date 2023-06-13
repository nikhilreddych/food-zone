import { ITEM_IMG_URL } from "../utils/constants";

const MenuCard = ({ itemCard }) => {
  const { name, defaultPrice, price, description, imageId } =
    itemCard.card.info;

  return (
    <div className="menu-card">
      <div className="flex justify-between">
        <div className="w-5/6">
          <div className="text-gray-700 font-semibold">{name}</div>
          <div className="text-sm text-gray-700">
            ₹{(price || defaultPrice) / 100}
          </div>
          {"\n"}
          <div className="text-sm text-gray-400 my-3">{description}</div>
        </div>
        {imageId ? (
          <div className="w-28 h-24 object-cover">
            <img
              alt=""
              className="w-28 h-24 object-cover"
              src={ITEM_IMG_URL + imageId}></img>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="border-[0.5px] border-solid border-gray-200 my-3"></div>
    </div>
  );
};

export default MenuCard;
