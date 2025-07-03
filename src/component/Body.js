import RestaurantCard from "./Restaurantcard.js";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7030425&lng=77.430373&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      console.log("Full API JSON:", json);

      const restaurantCards =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      console.log("Extracted restaurant list:", restaurantCards);

      setListOfRestaurants(restaurantCards || []);
      setFilteredRestaurant(restaurantCards || []);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100">
      <div className="filter border border-black m-4 bg-gray-100">
        <div className="search">
          <input
            type="text"
            className="border border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filtered = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search Button
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => parseFloat(res.info?.avgRating) > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="w-64 m-4"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;