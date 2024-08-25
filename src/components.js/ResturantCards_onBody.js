import RestaurantCard from "./RestaurantCard";

const RestaurantCards_onBody = ({ restuarantData }) => { 
    
    return(
        <div>
            <div className="font-extrabold text-2xl mt-20 ml-36">
                Restaurants with online food delivery near you
            </div>
            <div className="flex flex-wrap ml-44">
            {restuarantData.map((restauts) => (  // Use the data passed from props
                <div key={restauts?.info?.id}> 
                    <RestaurantCard resData={restauts} />
                </div>
            ))}
            </div>
            
        </div>
    );
}

export default RestaurantCards_onBody;
