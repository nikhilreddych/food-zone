const CartItem = ({
  id,
  name,
  quantity,
  price,
  handleAddClick,
  handleRemoveClick,
}) => {
  return (
    <div className="flex justify-between">
      <div className="text-lg text-gray-600 m-3 font-semibold w-1/3 text-left">
        {name}
      </div>
      <div className="flex justify-between w-24 h-8 border border-green-500 text-green-500 text-sm font-bold rounded-sm m-2 bg-white">
        <p
          className="ml-3 my-1 cursor-pointer text-gray-400 dis"
          onClick={() => handleRemoveClick(id)}>
          -
        </p>
        <p className="my-1">{quantity}</p>
        <p
          className="mr-3 cursor-pointer my-1"
          onClick={() => handleAddClick(id)}>
          +
        </p>
      </div>
      <div className="text-lg text-gray-400 m-3 w-1/3 text-right">₹{price}</div>
    </div>
  );
};

export default CartItem;
