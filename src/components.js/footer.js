import { AppleStore, AppleStore_link, GooglePlayStore, Page_log } from "../utils/constants";
const Footer = ({ data }) => {
  //console.log(data);
  return (
    <div className="mt-32">
      <ul className="flex flex-row h-40  bg-slate-300">
        <li>
          <h1 className=" font-extrabold text-2xl text-gray-800 ml-52 mt-14 w-96 ">
            For Better Experience, download the App now
          </h1>
        </li>
        <li>
            <a href="https://play.google.com/store/apps" >
            <img
            src={GooglePlayStore}
            alt="google playstore"
            className="w-64 h-auto ml-20 mt-12"
          />
            </a>
         
        </li>
        <li className="">
            <a href={AppleStore_link}>
            <img src={AppleStore} className="w-64 h-auto ml-20 h-42 m-4 " />
            </a>
        </li>
      </ul>
      <div className="w-full h-[500px] bg-gray-950 px-0 py-0">
        <ul className="flex flex-row text-white pt-14 pl-60">
          <li className="mr-20">
            <img src={Page_log} alt="page logo" className="w-16 rounded-lg"/>
            <h1 className="font-extrabold text-3xl ">Foody Hub</h1>
            <h1>2024 Bundl Technologies Pvt. Ltd</h1>
          </li>
          <li>
            <ul className="flex flex-col text-white mr-20 p-1">
              <li className="font-bold text-xl mb-3">Company</li>
              <li className="">About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Foody Hub One</li>
              <li>Foody Hub Instanart</li>
              <li>Foody Hub Genie</li>
            </ul>
          </li>
          <li>
            <ul className=" flex flex-col mr-20">
              <li className="font-bold text-xl mb-3">Contact Us</li>
              <li>Help & Support</li>
              <li>Parters with us</li>
              <li>Ride with us</li>
            </ul>
            <ul className=" flex flex-col">
              <li className="font-bold text-xl mt-14 mb-3">Legal</li>
              <li>Terms & Conditions</li>
              <li>Cokies policy</li>
              <li>Privacy policy</li>
              <li>Investor Relations</li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col mr-20">
                <li className="font-bold text-xl mb-3">We delivers to:</li>
              <li>Bangalore</li>
              <li>Gurgram</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Lucknow</li>
              <li>Mumbai</li>
              <li>pune</li>
              <button className="h-8 w-18 border border-white mt-3">Show More</button>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
