import React from "react";
import { Link } from "react-router-dom";

const LocationCard = ({
  title,
  img,
  id,
}: {
  title: string;
  img: string;
  id: string;
}) => {
  return (
    <Link className="group flex flex-col items-center" to={`/locations/${id}`}>
      <div className="rounded-[20px] overflow-hidden aspect-[5/3]">
        <img
          src={img}
          alt="premier-zal"
          className="group-hover:scale-[1.05] transition-all duration-3000 ease-in h-[100%] w-[100%] object-cover"
        />
      </div>
      <span className="text-[14px] sm:text-[20px] mt-[10px] font-semibold">{title}</span>
    </Link>
  );
};

export default LocationCard;
