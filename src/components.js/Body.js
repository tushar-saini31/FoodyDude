// Body.js
// Body.js

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import RestaurantCards_onBody from "./ResturantCards_onBody";
import ListOf_citiesButton from "./LIstOf_citiesButton";
import ListOf_cuisines from "./ListOf_cuisines";
import ListOfRestaurantCards_whats_onMind from "./ListOfRestuarantCards_whats_onMind";
import ListOf_topRatedResturant_near_you from "./ListOf_topRatedResturant_near_you";
import ListOf_Explore_Restaurant_near from "./ListOf_Explore_Restaurant_near";
import Footer from "./footer";
import { Search as SearchIcon } from "lucide-react"; // ensure: npm install lucide-react

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [restaurantListWhatOnMind, SetRestaurantListWhatOnMind] = useState([]);
  const [restaurantCards_onBody, setRestaurantCards_onBody] = useState([]);
  const [listOf_citiesButton, setListOf_citiesButton] = useState([]);
  const [listOf_cuisines, SetListOf_cuisines] = useState([]);
  const [exploreRestuarant_NearMe, SetExploreRestaurant_NearMe] = useState([]);
  const [footerData, SetFooterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTopRatedRestaurants, setFilteredTopRatedRestaurants] =
    useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      setListofRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      SetRestaurantListWhatOnMind(
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
      );
      setRestaurantCards_onBody(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setListOf_citiesButton(json?.data?.cards[6]?.card?.card?.brands);
      SetListOf_cuisines(json?.data?.cards[7]?.card?.card?.brands);
      SetExploreRestaurant_NearMe(json?.data?.cards[8]?.card?.card?.brands);
      SetFooterData(json?.data?.cards[9]?.card?.card);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  // ✅ Filter based on cuisine search
  const filteredBySearch = listofRestaurant.filter((restaurant) =>
    restaurant.info.cuisines
      ?.join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  // ✅ Final restaurant list based on top-rated filter
  const finalFilteredList =
    filteredTopRatedRestaurants.length > 0
      ? filteredTopRatedRestaurants
      : filteredBySearch;

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-4">
      {/* 🚀 Premium Search UI */}
      <div className="mt-24 flex justify-center px-4">
        <div className="w-full max-w-xl bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-lg flex items-center px-2 md:px-4 py-1 transition duration-300 ease-in-out">
          <input
            className="flex-grow h-12 md:h-14 bg-transparent text-base md:text-lg font-medium rounded-l-full focus:outline-none px-4 text-gray-800 placeholder-gray-500"
            placeholder="Search cuisines (e.g., Coffee, Biryani, Pizza)..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="bg-gradient-to-br from-white to-gray-100 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow hover:shadow-md hover:scale-105 transition duration-300 ease-in-out">
            <SearchIcon className="w-6 h-6 md:w-7 md:h-7 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 🌟 Filter Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => {
              const topRated = listofRestaurant.filter(
                (restaurant) => parseFloat(restaurant.info.avgRating) > 4.5
              );
              setFilteredTopRatedRestaurants(topRated);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-200"
          >
            Top Rated Restaurants
          </button>
          <button
            onClick={() => {
              // Reset filter - show all restaurants again
              setFilteredTopRatedRestaurants([]);
              setSearchText(""); // optional: also clear search input
            }}
            className="bg-orange-300 text-black px-4 py-2 rounded-full hover:bg-gray-400 transition duration-200"
          >
            All Restaurants
          </button>
        </div>
      </div>

      {/* What's on your mind */}
      <div>
        <ListOfRestaurantCards_whats_onMind
          resData={restaurantListWhatOnMind}
        />
      </div>

      {/* Top-rated / Filtered restaurants */}
      <div>
        {finalFilteredList.length > 0 ? (
          <ListOf_topRatedResturant_near_you resData={finalFilteredList} />
        ) : (
          <div className="text-center text-gray-500 mt-6">
            No restaurants found for: "{searchText}"
          </div>
        )}
      </div>

      {/* Online delivery restaurants */}
      <div>
        <RestaurantCards_onBody restuarantData={restaurantCards_onBody} />
      </div>

      {/* Cities */}
      <div>
        <ListOf_citiesButton citiesData={listOf_citiesButton} />
      </div>

      {/* Cuisines */}
      <div>
        <ListOf_cuisines Data={listOf_cuisines} />
      </div>

      {/* Explore restaurants near */}
      <div>
        <ListOf_Explore_Restaurant_near restaurant={exploreRestuarant_NearMe} />
      </div>

      {/* Footer */}
      <div>
        <Footer data={footerData} />
      </div>
    </div>
  );
};

export default Body;

