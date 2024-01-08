import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-52 h-72 p-2 m-2 rounded-lg bg-slate-100 shadow-lg">
      <img className="w-full rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>
        <span className="star">{avgRating}✳</span>
      </h4>
    </div>
  );
};

export default RestaurantCard;
