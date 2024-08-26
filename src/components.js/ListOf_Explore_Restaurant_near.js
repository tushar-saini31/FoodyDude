const ListOf_Explore_Restaurant_near=({restaurant})=>{
    //console.log(restaurant);
    return(
        <div>
            <h1 className="font-extrabold  text-2xl mt-10 ml-44">Explore Every Restaurants Near Me</h1>
            <div className="flex flex-row mt-6 ml-44 ">
            <button className="w-1/3 border border-gray-400 h-12  rounded-xl mr-48">{restaurant[0]?.text}</button>
            <button className="w-1/3  border border-gray-400 h-12 rounded-xl">{restaurant[1]?.text}</button>
        </div>
        </div>
        
    )
}
export default ListOf_Explore_Restaurant_near;