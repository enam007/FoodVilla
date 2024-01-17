import RestaurantCard from "./Restaurant";
import { API_URL } from "../config";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurantData from "../Hooks/useGetRestaurantData";

function filterData(searchText, restaurant) {
  const filteredData = restaurant.filter((elem) => {
    return elem?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [restaurants, filteredRestaurants, setFilteredRestaurants] =
    useGetRestaurantData(API_URL);

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

  return (
    <>
      <div className="flex justify-center p-2 ">
        <input
          className="h-9  border-black border-solid shadow-md rounded-lg p-2 m-2"
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
          className="rounded-lg bg-slate-100 pl-6 pr-6 w-24 h-9 mt-2 ml-2 shadow-md"
          onClick={() => {
            searchData(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {restaurants?.length === 0 ? (
        <div className="flex flex-wrap justify-center">
          <Shimmer />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
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
