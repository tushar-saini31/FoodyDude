import { IMG_logo } from "../utils/constants";

const RestaurantCard_what_onMind = (props) => {
  const { restuatsData } = props;
  return (
    <div className="">
      <img
      className="w-36 "
        src={IMG_logo + restuatsData?.imageId}
        alt="photo_logo"
      />
    </div>
  );
};

export default RestaurantCard_what_onMind;
