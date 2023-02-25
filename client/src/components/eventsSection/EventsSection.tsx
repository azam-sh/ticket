import React from "react";
import { Event } from "../../types";
import EventCard from "../eventCard/EventCard";

const EventsSection = ({
  events,
  title,
}: {
  events: Event[];
  title: string;
}) => {
  return (
    <div className="md:py-[20px] sm:px-[30px] sm:pt-0 sm:pb-[20px]">
      <h2 className="text-bold text-[22px] sm:text-[26px] text-center md:text-center lg:text-left md:text-[36px] sm:mb-[30px] mb-[13px] md:mb-[20px] font-semibold">
        {title}
      </h2>
      <div className="flex flex-wrap lg:justify-start justify-center gap-4 sm:gap-8">
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              img={event.img}
              title={event.title}
              price={event.price}
              location={event.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventsSection;
