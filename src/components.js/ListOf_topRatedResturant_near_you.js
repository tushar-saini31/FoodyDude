import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const ListOf_topRatedResturant_near_you=({resData})=>{
    //console.log(resData);
    return(
        <div>
        <div className="font-extrabold text-2xl ml-36  mt-16 ">
          Top rated resturants near you
        </div>
        {resData.length > 0 ? (
          <div className=" ml-36 mr-36">
            <ul className="flex flex-row overflow-y-auto scrollbar-hide border-b-4 ">
              {resData.map((restaurant) => (
                <li className="flex-shrink-0" key={restaurant?.info?.id}>
                  <Link to={"/restaurantMenu/"+ restaurant?.info?.id} ><RestaurantCard
                    resData={restaurant}
                  /></Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No resaurants available</p>
        )}
      </div>
    )
}
export default ListOf_topRatedResturant_near_you;