import RestaurantMenuList_itemCard from "./RestaurantMenuList_itemCard";

const RestaurantMenuList=({ MenuItemcards})=>{
   console.log( MenuItemcards);
    return(
        <div>
            { MenuItemcards.map((restaurant)=>(
                <RestaurantMenuList_itemCard  ItemCardData={restaurant} 
                key={restaurant?.card?.info?.id}/>
            ))}
        </div>
    )
}
export default RestaurantMenuList;