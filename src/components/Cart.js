import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import CartItem from "./CartItem";
import _ from "underscore";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const cartItems = cartData.items;
  const restaurantInfo = cartData.restaurant;

  const uniqCartItems = _.uniq(cartItems);

  const getQuantity = (item) => {
    const multipleItems = cartItems.filter(
      (cartItem) => cartItem.id === item.id
    );
    return multipleItems.length;
  };

  const getItemsPrice = (item) => {
    const qty = getQuantity(item);
    const price = item.price / 100;

    return qty * price;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice = totalPrice + item.price / 100;
    });

    return totalPrice;
  };

  const handleAddClick = (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(addItem(item));
  };

  const handleRemoveClick = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="text-center">
      {cartItems.length === 0 ? (
        <div className=" pt-[20%]">
          <div className="text-3xl text-gray-700 font-bold">
            Your cart is empty
          </div>
          <div className="text-sm text-gray-400">
            You can go to home page to view restaurants
          </div>
        </div>
      ) : (
        <div className="w-1/2 ml-[25%] my-[2%] shadow-lg text-center rounded-md">
          <Link to={"/restaurants/" + restaurantInfo.id}>
            <div className="flex mx-6">
              <div className="h-24 w-32 object-fill">
                <img
                  alt="res-image"
                  className="rounded-md"
                  src={CDN_URL + restaurantInfo.cloudinaryImageId}></img>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold text-gray-700">
                  {restaurantInfo.name}
                </div>
                <div className="text-lg text-gray-400 text-left">
                  {restaurantInfo.areaName}
                </div>
                <div className="border border-black mt-4"></div>
              </div>
            </div>
          </Link>
          <div className="mx-8">
            {uniqCartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quantity={getQuantity(item)}
                  price={getItemsPrice(item)}
                  handleAddClick={handleAddClick}
                  handleRemoveClick={handleRemoveClick}></CartItem>
              );
            })}
          </div>
          <div className="border border-black m-4"></div>
          <div className="flex justify-between mx-11 pb-3">
            <div className="text-lg font-bold text-gray-900">To Pay</div>
            <div className="text-lg font-bold text-gray-900">
              {"₹" + getTotalPrice()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
