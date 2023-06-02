import ResaurentCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState(resList);
    const [searchTxt, setSearchTxt] = useState('');
    const [searchCounter, setSearchCounter] = useState(0);
    return (
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
                setListOfRestaurents(filteredList);
            } else {
                setListOfRestaurents(resList);
            }
          }}>Search</button>
          <button className="btn" onClick={() => {
            const filteredList = listOfRestaurents.filter(res => {
                return res.data.avgRating > 4
            });
            setListOfRestaurents(filteredList);
          }}>Top Rated</button>
          <h3>Search Counter: {searchCounter}</h3>
        </div>
        <div className="res-container">
          {listOfRestaurents.map((resObj) => {
            return <ResaurentCard key={resObj.data.id} resData={resObj} />;
          })}
        </div>
      </>
    );
  };

  export default Body;