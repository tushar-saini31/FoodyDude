// import { useState } from "react";
// import { IMG_logo } from "../utils/constants";
// import PopUpCuponCard from "./PopUpCuponCard";

// const CoupanCardDealFor_you = ({ data }) => {
//   console.log(data);
//   const { description, header, logoBottom, expiryTime } = data?.info;
//   const[showModal,setShowModal]=useState(true)
//   const handleclose = ()=> setShowModal(false);
//   return (
//     <div>
//         <button onClick={()=>setShowModal(true)}>
//     <div className=" flex-none w-72 h-20 bg-gray bg-gray-200 m-2 p-2 rounded-lg">
//       <div className="flex items-center">
//         {<img className="w-12 h-12 mr-4" src={IMG_logo + logoBottom} />}
//         <div>
//           <h1 className="font-bold text-lg">{header}</h1>
//           <p className="text-sm text-gray-500">{description}</p>
//         </div>
//       </div>
//       <PopUpCuponCard visible={showModal} onclose={handleclose}/>
//     </div>
//     </button>
//     </div>
//   );
// };
// export default CoupanCardDealFor_you;





import { useState } from "react";
import { IMG_logo } from "../utils/constants";
import PopUpCuponCard from "./PopUpCuponCard";

const CoupanCardDealFor_you = ({ data }) => {
  const { description, header, logoBottom, expiryTime } = data?.info;
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false); // Close pop-up handler

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        <div className="flex-none w-72 h-20 bg-gray-200 m-2 p-2 rounded-lg">
          <div className="flex items-center">
            {<img className="w-12 h-12 mr-4" src={IMG_logo + logoBottom} alt="Coupon Logo" />}
            <div>
              <h1 className="font-bold text-lg">{header}</h1>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </button>
      {/* Pass handleClose to PopUpCuponCard */}
      <PopUpCuponCard visible={showModal} onClose={handleClose} />
    </div>
  );
};

export default CoupanCardDealFor_you;
