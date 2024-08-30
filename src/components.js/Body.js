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
import useRestaurantMenu from "../utils/useRsetaurantMenu";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [restaurantListWhatOnMind, SetRestaurantListWhatOnMind] = useState([]);
  const [restaurantCards_onBody, setRestaurantCards_onBody] = useState([]);
  const [listOf_citiesButton, setListOf_citiesButton] = useState([]);
  const [listOf_cuisines, SetListOf_cuisines] = useState([]);
  const[exploreRestuarant_NearMe, SetExploreRestaurant_NearMe]=useState([]);
  const[footerData,SetFooterData]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  //console.log(restaurantListWhatOnMind);
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
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      {/* here is what on your Mind */}
      <div>
        <ListOfRestaurantCards_whats_onMind
          resData={restaurantListWhatOnMind}
        />
      </div>
      {/* here is the top rated resturants near you */}
      <div>
        <ListOf_topRatedResturant_near_you resData={listofRestaurant} />
      </div>
      {/* here is the resturant with online food delivery near you  */}
      <div>
        <RestaurantCards_onBody restuarantData={restaurantCards_onBody} />
      </div>
      {/* here is the list of cities button */}
      <div>
        <ListOf_citiesButton citiesData={listOf_citiesButton} />
      </div>
      {/* here is the list of cuisines */}
      <div>
        <ListOf_cuisines Data={listOf_cuisines} />
      </div>
      <div><ListOf_Explore_Restaurant_near restaurant={exploreRestuarant_NearMe}/></div>
      <div className=""><Footer data={footerData}/></div>
      {/* <div>
        <useRestaurantMenu/>
      </div> */}
    </div>
  );
};
export default Body;
