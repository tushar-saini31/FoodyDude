

 import ListOfRestaurantCards_whats_onMind from "./ListOfRestuarantCards_whats_onMind";



const Search = () => {
    return (
        <div className="mt-32 flex justify-center">
            <div className="h-20 w-3/4 lg:w-1/2 bg-gray-300 rounded-full shadow-lg flex items-center px-4">
                <input 
                    className="w-full h-12 text-lg font-semibold border-none rounded-l-full focus:outline-none p-4 text-gray-700" 
                    placeholder="Search for Restaurants and food" 
                />
                <button className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    <img 
                        className="w-8 h-8" 
                        src="https://t4.ftcdn.net/jpg/07/56/20/35/360_F_756203558_VMcQ7oLUbFsl3BGSlakacXQ3oOxgiyxP.jpg" 
                        alt="Search Icon"
                    />
                </button>
            </div>
            {/* //< ListOfRestaurantCards_whats_onMind/> */}
        </div>
    );
}

export default Search;
