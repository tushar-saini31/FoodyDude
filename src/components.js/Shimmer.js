const Shimmer = () => {
    const divArray = Array.from({ length: 20 });
    return (
      <div className="pt-[80px]"> {/* Adjust this to match the height of your header */}
        <div className="bg-gray-600 w-full h-[350px] flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-white text-2xl pt-20">
            Looking for great food near you
          </h1>
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-white m-2"></div>
        </div>
        <div className="bg-slate-100">
          <div className="flex ml-48 flex-wrap mr-48">
            {divArray.map((_, index) => (
              <div
                key={index}
                className="bg-slate-200 w-[250px] h-[180px] rounded-lg p-2 mt-4 ml-4 z-10 "
              >
                <div className="bg-slate-300 w-[220px] h-[20px] mt-4 rounded-lg"></div>
                <div className="bg-slate-300 w-[120px] h-[20px] mt-4 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Shimmer;
  