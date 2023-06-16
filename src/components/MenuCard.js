import { ITEM_IMG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useContext } from "react";
import CartSliceContext from "../utils/CartSliceContext";

const MenuCard = ({ itemCard }) => {
  const { id, name, defaultPrice, price, description, imageId } =
    itemCard.card.info;

  const cartSliceContext = useContext(CartSliceContext);

  const handleAddClick = () => {
    cartSliceContext.handleAddItemClick(itemCard.card.info);
  };

  const handleRemoveClick = () => {
    cartSliceContext.handleRemoveItemClick(id);
  };

  const cartItems = useSelector((store) => store.cart.items);

  const noOfItemsInCart = cartItems.filter((item) => item.id === id).length;

  return (
    <div className="menu-card">
      <div className="flex justify-between h-36">
        <div className="w-5/6">
          <div className="text-gray-700 font-semibold">{name}</div>
          <div className="text-sm text-gray-700">
            ₹{(price || defaultPrice) / 100}
          </div>
          {"\n"}
          <div className="text-sm text-gray-400 my-3">{description}</div>
        </div>
        <div>
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
          {noOfItemsInCart < 1 ? (
            <div
              className="w-24 h-8 border border-green-500 text-green-500 text-sm font-bold rounded-sm text-center m-2 bg-white cursor-pointer"
              onClick={() => handleAddClick()}>
              <p className="m-1">Add</p>
            </div>
          ) : (
            <div className="flex justify-between w-24 h-8 border border-green-500 text-green-500 text-sm font-bold rounded-sm m-2 bg-white">
              <p
                className="ml-3 my-1 cursor-pointer text-gray-400 dis"
                onClick={() => handleRemoveClick()}>
                -
              </p>
              <p className="my-1">{noOfItemsInCart}</p>
              <p
                className="mr-3 cursor-pointer my-1"
                onClick={() => handleAddClick()}>
                +
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="border-[0.5px] border-solid border-gray-200 my-3"></div>
    </div>
  );
};

export default MenuCard;
