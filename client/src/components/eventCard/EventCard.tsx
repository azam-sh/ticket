import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const EventCard = ({
  id,
  img,
  title,
  price,
  location,
}: {
  id: string;
  img: string;
  title: string;
  price: number;
  location: string;
}) => {
  return (
    <Link
      className="group flex flex-col xl:w-[31%] w-[80%] md:w-[70%] lg:w-[45%]"
      to={`/events/${id}`}
    >
      <div className="aspect-[5/3] overflow-hidden rounded-[20px]">
        <img
          src={img}
          alt={title}
          className="group-hover:scale-[1.05] h-[100%] w-[100%] object-cover transition-all duration-3000 ease-in"
        />
      </div>
      <div className="flex flex-col content-between">
        <span className="text-[14px] sm:text-[20px] mt-[10px] font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </span>
        <div className="flex items-center text-[12px] sm:text-[16px] mb-[5px] sm:mb-[13px] gap-1 text-[#7e7d7d]">
          <MdOutlineLocationOn />
          {location}
        </div>
        <span className="sm:text-[15px] text-[13px] font-semibold mt-auto">
          От {price} сом
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
