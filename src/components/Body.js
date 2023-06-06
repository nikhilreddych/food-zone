import ResaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer  from "./Shimmer";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    const [searchCounter, setSearchCounter] = useState(0);

    useEffect(() => {
      fetchData()
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      const restaurantsList = json?.data?.cards[2]?.data?.data?.cards;

      setListOfRestaurents(restaurantsList);
      setFilteredRestaurents(restaurantsList);
    }

    return listOfRestaurents.length === 0 ? <Shimmer /> : (
      <>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="search" onChange={(e) => {
            setSearchTxt(e.target.value);
          }}></input>
          <button className="btn" onClick={() => {
            //setSearchCounter((prev) => prev + 1);
            setSearchCounter(searchCounter + 1);
            if(searchTxt !== '') {
                const filteredList = listOfRestaurents.filter(res => res.data.name.toLowerCase().includes(searchTxt.toLowerCase()));
                setFilteredRestaurents(filteredList);
            } else {
                setFilteredRestaurents(listOfRestaurents);
            }
          }}>Search</button>
          <button className="btn" onClick={() => {
            const filteredList = listOfRestaurents.filter(res => {
                return res.data.avgRating > 4
            });
            setFilteredRestaurents(filteredList);
          }}>Top Rated</button>
          <h3>Search Counter: {searchCounter}</h3>
        </div>
        <div className="res-container">
          {filteredRestaurents.map((resObj) => {
            return <ResaurentCard key={resObj.data.id} resData={resObj} />;
          })}
        </div>
      </>
    );
  };

  export default Body;