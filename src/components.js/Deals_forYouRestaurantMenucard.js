    import { useState } from "react";
import CoupanCardDealFor_you from "./CoupanCardDealFor_you";
import PopUpCuponCard from "./PopUpCuponCard";

    const Deals_forYouRestaurantMenucard=({ dealData})=>{
       
        console.log( dealData);
        return (
            <div className="flex justify-center">
                <div className="w-6/12 h-44 border-gray-300 border-2 m-6 rounded-xl border-t-0 mt-10">
                <h1 className="font-extrabold text-2xl m-2">Deals for You</h1>
                <div>
                    <div className="flex flex-row overflow-y-auto scrollbar-hide">
                    {dealData.map((Datalist)=>(
                        <CoupanCardDealFor_you data={Datalist}
                        key={Datalist?.restId}  />
                    )) }
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
            </div>

        )
    }
    export default Deals_forYouRestaurantMenucard