import { useEffect, useState } from "react"

const useCuisinesRestaurantMenu=({cus_id})=>{
    useEffect(()=>{
       fetchData()
    },[])
    const[cuisinesMenuData, setCuisinesMenuData]=useState(null);
    const fetchData=async()=>{
        const data=await fetch(cuisines_menu_api+cus_Id);
        const json=await data.json();
        setCuisinesMenuData(json.data);
    }
    return cuisinesMenuData;
}
export default useCuisinesRestaurantMenu