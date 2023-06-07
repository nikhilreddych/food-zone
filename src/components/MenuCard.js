import { ITEM_IMG_URL } from "../utils/constants";

const MenuCard = ({ itemCard }) => {
  const { name, defaultPrice, price, description, imageId } =
    itemCard.card.info;

  return (
    <div className="menu-card">
      <div className="menu-info">
        <div>
          <h4>{name}</h4>
          <p>₹{(price || defaultPrice) / 100}</p>
          {"\n"}
          <p>{description}</p>
        </div>
        {imageId ? (
          <div className="item-image">
            <img
              alt=""
              className="item-logo"
              src={ITEM_IMG_URL + imageId}></img>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default MenuCard;
