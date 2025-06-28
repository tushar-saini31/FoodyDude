const Cart_footer = () => {
  return (
    <div className="bg-slate-200 w-screen h-screen mt-60 relative">
      <div className="flex justify-end">
        <div className=" mt-20 mr-48 text-gray-500 flex-col relative z-20">
          <h1 className="font-bold text-4xl">Cart Empty</h1>
          <img
            className="w-96 h-96 rounded-lg mt-2"
            src="https://t4.ftcdn.net/jpg/01/67/44/09/360_F_167440913_ai5ZyrlREVCvAwYvT04cJ8R2Ctwe6EUW.jpg"
          />
        </div>
      </div>
      <div className=" absolute w-1/2 h-56 top-72 bg-white z-10 ml-20 ">
        <h1 className="font-bold text-xl text-gray-700 mt-6 ml-10">Account</h1>
        <h1 className="font-lg text-gray font-lg text-gray-700 ml-10 mt-4 mb-4 ">
          To place your order now, log in to your existing account or sign up.
        </h1>
        <div className="flex flex-row mt-8">
          <button className="bg-white text-lime-600 w-44 h-14 text-sm ml-10  border-lime-600 border-2 ">
            <div>
              <h1>Have an account</h1>
              <h1 className="font-bold text-lg">Login</h1>
            </div>
          </button>
          <button className="bg-lime-600 w-44 h-14 ml-8 "><div><h1 className=" text-white text-sm">New to Foody Hub</h1><h1 className="font-bold text-white">SIGN UP</h1></div></button>
        </div>
      </div>
      <div className=" absolute w-1/2 h-44 top-24   bg-white z-10 ml-20 ">
        <h1 className="font-bold text-xl text-gray-700 m-8">
          Oops Something went wrong please try again
        </h1>
        <button className="bg-orange-500 text-white w-20 h-10 text-lg  ml-10">
          RETRY
        </button>
      </div>
      <div className="w-1/2 h-24 bg-white text-gray-500 font-bold text-xl l ml-20 mt-4"><h1 className="text-left ml-10 p-8">Delivery address</h1></div>
      <div className="w-1/2 h-24 bg-white text-gray-500 font-bold text-xl l ml-20 mt-4"><h1 className="text-left ml-10 p-8">Payment</h1 ></div>

    </div>
  );
};
export default Cart_footer;





