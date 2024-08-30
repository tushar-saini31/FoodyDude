import { useEffect, useState } from "react"
import { RestaurantMenu_api } from "./constants";

const useRestaurantMenu=(resId)=>{
    useEffect(()=>{
        fetchData();
    },[]);
    const[restaurantMenuData,setRestaurantMenuData]=useState(null);

    const fetchData=async()=>{
        const data= await fetch(RestaurantMenu_api+resId);
        const json= await data.json();
        setRestaurantMenuData(json.data)
        //console.log(restaurantMenuData);
    }
    return restaurantMenuData;
}
export default useRestaurantMenu;