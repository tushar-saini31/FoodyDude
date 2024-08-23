import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import RestaurantCard_what_onMind from "./RestuarantCard_what_onMind";

const Body = () => {

  const[listofRestaurant, setListofRestaurant]=useState([]);
  const[restaurantListWhatOnMind,SetRestaurantListWhatOnMind]=useState([]);
  const[title_of_rseturantList,SetTitle_of_rseturantList]=useState("");
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async () => {
    try{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||[] 
    );
    SetRestaurantListWhatOnMind(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info||[]
    );
    SetTitle_of_rseturantList(
    json?.data?.cards[1]?.card?.card?.header||{}
    );
   }catch(error){
     console.error("Failed to fetch data",error);
   }
  };
  // rendering the shimmer UI
  if(listofRestaurant.length===0)
  {
   return<Shimmer/>
  }
  console.log(restaurantListWhatOnMind,)
  return (

    //this is the what on your mind
    <div>
      <div className="font-extrabold text-2xl mt-10 ml-36  "><h1 >whats on your mind</h1>
      </div>
      <div className="relative">
        <ul className="flex flex-row  overflow-y-auto scrollbar-hide mr-18 ml-36 pl-8 m-4 mr-36 px-8 border-b-2 border-t-2 cursor-pointer">
        {restaurantListWhatOnMind.map((restauts)=>
        <li className="w-[230px]  flex-shrink-0">
        <RestaurantCard_what_onMind restuatsData={restauts} resturantlistName={title_of_rseturantList}/>
        </li>)}
      </ul>
     
    </div>
    
    <div>
      <div className="font-extrabold text-2xl ml-36  mt-10 ">Top rated resturants near you</div>
     {listofRestaurant.length > 0 ? (
      <div className=" ml-36 mr-36"> 
      <ul className="flex flex-row overflow-y-auto ">
      {/* //here is the different restaurants */}
     {listofRestaurant.map((restaurant)=>
       <li className="flex-shrink-0">
      <RestaurantCard key={restaurant?.info?.id}
       resData={restaurant}/>
       </li>
       )}
       </ul>
    </div>
    ):(
      <p>No resaurants available</p>
    )}
    </div>
    </div>
  );
};
export default Body;

