import React, { useEffect, useState } from "react";
import { Navigation, Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { locations } from "../../mockData/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LocationCard from "../locationCard/LocationCard";
import { Location } from "../../types";

const Slider = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
      autoplay
      loop
      navigation
      spaceBetween={50}
      breakpoints={{
        1280: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 100,
          navigation: false,
          pagination: true,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 100,
          navigation: false,
          pagination: true,
        },
      }}
    >
      {locations.map((location) => {
        return (
          <SwiperSlide key={location.id}>
            <LocationCard
              title={location.name}
              id={location.id}
              img={location.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
