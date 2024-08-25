import { useState } from "react";
import CitiesButton from "./CitiesButton";
const ListOf_citiesButton = ({ citiesData }) => {

    const[button_Ofcities,setButton_ofcities]=useState(11);
    const handleShowMore=()=>{
     setButton_ofcities(prev=>prev+12);
}
  //console.log(citiesData);
  return (
    <div>
        <div className="font-extrabold ml-44 mt-14  text-2xl">Best Places to Eat Across Cities</div>
    <div className=" flex flex-wrap ml-44 mt-4">
      {citiesData.slice(0,button_Ofcities).map((cities, index) => (
        <div key={index} >
          <CitiesButton data={cities?.text} />
        </div>
      ))}
      
       {button_Ofcities < citiesData.length &&(
      <div className="mt-2 ml-2">
        <button onClick={handleShowMore} className="bg-blue-500 text-white py-2 px-4 rounded-xl w-64 h-14 ">Show More</button>
      </div>
      )}
    </div>
    </div>
  );
};
export default ListOf_citiesButton;
