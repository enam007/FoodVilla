import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>
        <span className="star">{avgRating} stars</span>
      </h4>
    </div>
  );
};

export default RestaurantCard;
