import { useState } from "react";
import RestaurantMenuList from "./RestaurantMenuList";

const  RestaurantCategories=({data, showItem,   setShowIndex})=>{
    //console.log(data)
   // const[showItems,setShowItems]=useState(false)
    const handleclick=()=>{
      setShowIndex();
    }
     return(
        <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4" onClick={handleclick}>
            <div className="flex justify-between cursor-pointer ">
                <span className="  font-bold text-lg">{data?.card?.card?.title}({data?.card?.card?.itemCards?.length})</span>
                <span>⬇️</span>
             </div>
             {showItem && <RestaurantMenuList MenuItemcards={data?.card?.card?.itemCards}/>}
        </div>
        
     )
    
}
export default RestaurantCategories;
