import { greeStar_log, IMG_logo, vegetarian_logo } from "../utils/constants";

const RestaurantMenuList_itemCard = ({ ItemCardData}) => {
  //console.log( ItemCardData);
    const { name, id, imageId, price, vegClassifier, ratings,
        description
        
    } = ItemCardData?.card?.info;
    //console.log( ItemCardData?.card?.info?.name);
  return (
    <div>
      <div className=" m-auto my-4 bg-gray-50 shadow-lg p-4 border-black">
        <ul className="flex flex-row justify-between">
          <ul className="flex flex-col">
            <li className="w-6 h-6 mb-2">
              <img src={vegetarian_logo} />
            </li>
            <li className="font-bold">{name}</li>
            <li className="font-bold">₹{price/100}</li>
            {ratings?.aggregatedRating?.rating && <ul className="flex flex-row">
              <li className="mt-1 mr-1"><img  className="w-4 " src={greeStar_log}/></li>
             <li className="font-bold text-green-700">{ratings?.aggregatedRating?.rating}</li>
            </ul> }
            <li>{description}</li>
          </ul>
          <ul className="flex flex-col p-4 ">
            <li className="w-40  ">
              <img className="rounded-xl w-40 h-30" src={IMG_logo+imageId}/>
            </li>
            <li className="flex justify-center">
              <button className="w-16 bg-yellow-500 text-white text-center rounded-lg">ADD</button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenuList_itemCard;
