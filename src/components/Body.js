import RestaurantCard from "./Restaurant";
import { restaurantList } from "../config";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurant) {
  const filteredData = restaurant.filter((elem) => {
    return elem?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestarants();
    console.log("useEffect");
  }, []);

  async function getRestarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0734262&lng=72.626571&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();

    async function checkJsonData(json) {
      const cards = json?.data?.cards;
      console.log(cards);
      if (cards) {
        console.log(cards);
        for (const card of cards) {
          const checkData =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
    }
    const resData = await checkJsonData(json);
    console.log(resData);
    setFilteredRestaurants(resData);
    setRestaurant(resData);
  }

  const searchData = (searchText, restaurants) => {
    const data = filterData(searchText, restaurants);
    setFilteredRestaurants(data);
    if (data.length === 0) {
      setErrorMessage(`No data Found for ${searchText}`);
    } else {
      setErrorMessage("");
      setFilteredRestaurants(data);
    }
  };

  console.log("renderrrrrrrrrrrrrrrr");

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(event) => {
            // console.log(event.key);
            event.key === "Enter" ? searchData(searchText, restaurants) : null;
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {restaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="container">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
