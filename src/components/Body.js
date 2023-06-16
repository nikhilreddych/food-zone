import ResaurentCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurants";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [searchCounter, setSearchCounter] = useState(0);
  const [listOfRestaurents, filteredRestaurents, setFilteredRestaurents] =
    useRestaurants();
  const [topRatedBtntxt, setTopRatedBtnTxt] = useState("Top Rated");
  const [resListLabel, setResListLabel] = useState("Showing All");

  const isInternetConnected = useOnline();

  if (!isInternetConnected) {
    return (
      <h1>
        Opps...!! Looks like you're offline. Check your internet connection.
      </h1>
    );
  }

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return listOfRestaurents === undefined ||
    listOfRestaurents === null ||
    listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mb-20">
      <div className="p-1 m-1">
        <input
          type="text"
          className="p-2 my-1 w-96 shadow-lg border-slate-400 rounded-md focus:bg-lime-50"
          placeholder="Type here..."
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}></input>
        <button
          className="rounded-md bg-cyan-700 p-2 ml-2 mr-1 text-white hover:bg-green-700 shadow-lg"
          onClick={() => {
            //setSearchCounter((prev) => prev + 1);
            setSearchCounter(searchCounter + 1);
            if (searchTxt !== "") {
              const filteredList = listOfRestaurents.filter((res) =>
                res.data.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestaurents(filteredList);
            } else {
              setFilteredRestaurents(listOfRestaurents);
            }
          }}>
          Search
        </button>
        <button
          className="rounded-md bg-cyan-700 p-2 ml-1 text-white hover:bg-green-700 shadow-lg"
          onClick={() => {
            if (topRatedBtntxt === "Top Rated") {
              setTopRatedBtnTxt("Show All");
              const filteredList = listOfRestaurents.filter((res) => {
                return res.data.avgRating > 4;
              });
              setFilteredRestaurents(filteredList);
              setResListLabel("Showing only top rated");
            } else {
              setTopRatedBtnTxt("Top Rated");
              setFilteredRestaurents(listOfRestaurents);
              setResListLabel("Showing All");
            }
          }}>
          {topRatedBtntxt}
        </button>
        <div className="text-md font-bold py-2">{resListLabel}</div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurents.map((resObj) => {
          return (
            <Link
              key={resObj.data.id}
              to={"/restaurants/" + resObj.data.id}
              style={linkStyle}>
              <ResaurentCard resData={resObj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
