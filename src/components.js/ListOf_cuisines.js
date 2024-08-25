import CitiesButton from "./CitiesButton";
import { useState } from "react";
const ListOf_cuisines = ({ Data }) => {
  const [visibleItems, SetVisisbleItems] = useState(11);
  const handleShowMore = () => {
    SetVisisbleItems((prev) => prev + 12); // increase the intems by 12
  };
  //console.log(Data);
  return (
    <div>
      <div className="font-extrabold text-2xl mt-14 ml-44">
        Best Cuisines Near Me
      </div>
      <div className="flex flex-wrap ml-44 mt-4">
        {Data.slice(0, visibleItems).map((data, index) => (
          <div key={index}>
            <CitiesButton data={data?.text} />
          </div>
        ))}
        {visibleItems < Data.length && (
          <div className="text-center mt-2 ml-2">
            <button
              onClick={handleShowMore}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-64 h-14 "
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListOf_cuisines;
