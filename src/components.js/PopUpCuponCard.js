const PopUpCuponCard = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
      <div className="flex  justify-center w-1/3 h-auto bg-white border-gray-400 border-2 flex-col rounded-2xl p-4 shadow-lg">
        <div className="flex justify-end">
          <button className="text-gray-600 text-xl font-bold" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="flex items-center flex-col">
            <h1 className="border-b-2  border-gray-400 mb-4 font-extrabold text-2xl  text-center  ">
              Great Offer on this Order
            </h1>

            <ul className="flex flex-col ml-6 mt-6 mb-6">
              <li className="font-bold ">Terms and Conditions</li>
              <li>• Offer will be applicable automatically.</li>
              <li>• Offer is applicable only on items with discount tags</li>
              <li>• This offer cannot be combined with other coupons.</li>
              <li>• Offer is only valid on select restaurants</li>
            </ul>
          </div>
        </div>
      </div>
  );
};
export default PopUpCuponCard;
