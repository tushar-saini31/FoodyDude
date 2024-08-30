import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRsetaurantMenu";
import Shimmer from "./Shimmer";
import ShimmerMenu from "./ShimmerMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(0);
  console.log(resInfo);
  if (resInfo == null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    id,
    avgRating,
    locality,
    sla,
    totalRatingsString
  } = resInfo?.cards[2]?.card?.card?.info;
 const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  console.log(categories);
  return (
    <div className="mt-32">
      <div className=" ">
        <h1 className="font-extrabold text-4xl ml-96 ">{name}</h1>
      </div>
      <div className="border  border-slate-400 border-b-8 border-l-8 border-r-8  b rounded-3xl  ml-96 mt-6 mr-96 p-4" >
        <ul>
        <ul className="flex flex-row">
            <li>⭐ {avgRating}</li>
            <li>({ totalRatingsString})</li>
        </ul>
        <li className="font-bold">{sla?.slaString}</li>
        </ul>
        <ul className="pt-8   ">
          <li className="text-red-600 ">{cuisines.join(", ")}</li>
          <li className="font-bold">{costForTwoMessage}</li>
          <li className="font-bold">{areaName}</li>
        </ul>
        <h1 className="text-gray-600 border-gray-300 border-t-2 mt-2">Order above 149 for discounted delivery fee</h1>
      </div>
      {categories.map((restaurant,index)=>(
        <RestaurantCategories data={restaurant}
        key={restaurant?.card?.card?.title}
        showItem={index===showIndex?true:false}
        setShowIndex={()=>setShowIndex(index)}/>
      )
      )}
      </div>
  );
};
export default RestaurantMenu;
