import { IMG_logo } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const{      
        name,
        avgRatingString,
        cuisines,
        sla,
        costForTwo,
        cloudinaryImageId,
    } = resData?.info;
    //console.log(resData);
    return (
        <div className="w-[270px] m-2 cursor-pointer">
            {/* <div className="font_bold text-2xl m-4">{header?.title}</div> */}
            <div>
                <img
                    className="w-[250px] h-[180px] rounded-3xl p-2 mt-4 ml-2"
                    src={IMG_logo + cloudinaryImageId}
                    alt="restaurantcard_img"
                />
            </div>
            <div className="flex flex-col items-start p-4">
                <h2 className="font-bold text-lg">{name}</h2>
                <div className="flex items-center text-gray-700">
                    <span>{avgRatingString}</span>
                    <span className="ml-2">⭐</span>
                </div>
                <p className="text-gray-700">{cuisines.join(", ")}</p>
                <p className="text-gray-700">{sla?.slaString}</p>
                <p className="text-gray-700">{costForTwo}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;

