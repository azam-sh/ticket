import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { MdOutlineLocationOn } from "react-icons/md";
import { Event, Session } from "../../types";

const EventsPage = ({ events, sessions }: { events: Event[], sessions: Session[] }) => {
  const { id } = useParams();
  const foundEvent = events.find((event) => id && event.id === id);
  let foundSessions: Session[] = [];
  if (foundEvent) {
    foundSessions = sessions.filter(
      (session) => session.eventId === foundEvent.id
    );
  }
  
  return (
    <>
      <div className="bg-gradient">
        <div className="flex flex-col container mx-auto px-[30px] sm:px-[80px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] pt-[10px] sm:pb-[20px] pb-[10px]">
          <Navbar />
        </div>
      </div>

      {foundEvent && (
        <div className="flex flex-col container mx-auto px-[30px] md:px-[50px] sm:pt-[50px] lg:px-[100px] pt-[30px] pb-[60px]">
          <div className="flex lg:flex-row flex-col">
            <div className="xl:w-[30%] 2xl:w-[25%] lg:w-[40%] sm:w-[55%] md:w-[70%] lg:mr-[30px] mx-auto w-[80%]">
              <h1 className="font-semibold sm:mb-[20px] mb-[10px] text-[22px] sm:text-[24px] md:text-[28px] block text-center lg:hidden xl:text-[30px] lg:text-[26px]">
                {foundEvent.title}
              </h1>
              <div className="aspect-[5/4] overflow-hidden rounded-[20px]">
                <img
                  src={foundEvent.img}
                  alt={foundEvent.title}
                  className="h-[100%] w-[100%] object-cover transition-all duration-3000 ease-in"
                />
              </div>
              <div className="flex items-center gap-[3px] text-[13px] sm:text-[16px] mt-[10px] text-[#7e7d7d] xl:text-[18px] lg:text-[16px]">
                <MdOutlineLocationOn />
                {foundEvent.location}
              </div>
            </div>
            <div className="flex flex-col mx-auto sm:mt-[20px] lg:mt-[0] 2xl:w-[75%] sm:w-[60%] md:w-[70%] xl:w-[70%] lg:w-[60%] md:ml-[30px]">
              <h1 className="font-semibold hidden lg:inline-block md:text-[24px] xl:text-[30px] lg:text-[26px]">
                {foundEvent.title}
              </h1>
              <p className="mt-[10px] mb-[10px] xl:text-[18px] sm:mb-[20px] lg:text-[16px]">
                {foundEvent.description}
              </p>
              <div className="flex sm:mt-[auto] mt-[10px] gap-2 items-center">
                {foundEvent.category === "museum" ? (
                  <Link
                    className="hover:bg-[#ab521a] mt-[auto] ml-[auto] hover:text-[#fff] transition-all border-none bg-[#ff7017] rounded-[10px] text-[#000] py-2 px-4"
                    to={`/preview/${foundEvent.id}/museum`}
                  >
                    Купить билет
                  </Link>
                ) : (
                  <div className="text-[16px] sm:text-[18px] font-semibold">Сеансы:</div>
                )}
                {foundSessions.map((session) => {
                  return (
                    <Link
                      key={session.id}
                      to={`/preview/${foundEvent.id}/${session.id}`}
                      className="bg-[#ff7017] text-[#000] hover:bg-[#ab521a] hover:text-[#fff] hover:cursor-pointer rounded-[10px] py-1 px-4"
                    >
                      {session.time}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EventsPage;
