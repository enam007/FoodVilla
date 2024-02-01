import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-52 h-80 p-2 m-2 rounded-lg bg-slate-100 shadow-lg transform transition-transform hover:scale-105">
      <img
        className="w-full rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>
        <span className="flex items-center">
          {avgRating}
          <svg
            class="w-5 h-5 text-green-500 dark:text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
        </span>
      </h4>
    </div>
  );
};

export default RestaurantCard;
