import RestaurantCard_what_onMind from "./RestuarantCard_what_onMind";
const ListOfRestaurantCards_whats_onMind = ({ resData }) => {
    //console.log(resData);
  
  return (
    <div>
      <div className="font-extrabold text-2xl mt-36 ml-36  ">
        <h1>whats on your mind</h1>
      </div>
      <div className="relative">
        <ul className="flex flex-row  overflow-y-auto scrollbar-hide mr-18 ml-40 pl-8 m-4 mr-36 px-8 border-b-2 border-t-2 cursor-pointer">
          {resData.map((restauts) => (
            <li className="w-[230px]  flex-shrink-0 "  key={restauts?.id}>
              <RestaurantCard_what_onMind
                restuatsData={restauts}
              />
            </li>
            
          ))}
        </ul>
      </div>
    </div>
    
  );
  
};

export default ListOfRestaurantCards_whats_onMind;
