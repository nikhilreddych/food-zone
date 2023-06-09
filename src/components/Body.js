import ResaurentCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurants";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [searchCounter, setSearchCounter] = useState(0);
  const [listOfRestaurents, filteredRestaurents, setFilteredRestaurents] = useRestaurants();

  const isInternetConnected = useOnline();

  if(!isInternetConnected) {
    return <h1>Opps...!! Looks like you're offline. Check your internet connection.</h1>
  }
  
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}></input>
        <button
          className="btn"
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
          className="btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter((res) => {
              return res.data.avgRating > 4;
            });
            setFilteredRestaurents(filteredList);
          }}>
          Top Rated
        </button>
        <h3>Search Counter: {searchCounter}</h3>
      </div>
      <div className="res-container">
        {filteredRestaurents.map((resObj) => {
          return (
            <Link key={resObj.data.id} to={"/restaurants/" + resObj.data.id} style={linkStyle}>
              <ResaurentCard resData={resObj} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
