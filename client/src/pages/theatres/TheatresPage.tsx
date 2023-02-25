import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import EventsSection from "../../components/eventsSection/EventsSection";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Event } from "../../types";

const TheatresPage = ({ events }: { events: Event[] }) => {
  const [query, setQuery] = useState("");
  const [isVisibleSearchModal, setIsVisibleSearchModal] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        isVisibleSearchModal &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setIsVisibleSearchModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isVisibleSearchModal]);

  const theatres = events.filter((event) => event.category === "theatre");
  const foundEvents = theatres.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <div className="bg-gradient">
        <div className="flex flex-col container mx-auto px-[30px] pb-[10px] sm:px-[80px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] pt-[10px] md:pb-[80px] lg:pb-[100px]">
          <Navbar />
          <div className="md:flex hidden flex-col justify-center items-center md:pt-[5%]">
            <h1 className="text-white font-bold md:text-[22px] lg:text-[26px]">
              Поиск по выступлениям
            </h1>
            <div
              ref={ref}
              className="flex md:mt-[20px] lg:mt-[30px] w-[500px] md:h-[40px] lg:h-[50px] relative"
            >
              <input
                type="text"
                className="h-[100%] w-[100%] pr-[60px] rounded-[10px] focus:outline-none px-4 md:py-1 lg:py-2 placeholder:text-black text-bold"
                placeholder="Введите название выступления"
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsVisibleSearchModal(true)}
              />
              <button className="px-4 py-2 absolute md:top-[11%] lg:top-[15%] right-[1%] hover:text-[#c35817]">
                <BsSearch fontSize="18px" />
              </button>
              <div
                className={
                  foundEvents.length > 0 &&
                  query.length > 0 &&
                  isVisibleSearchModal
                    ? `bg-[#fff] flex flex-col gap-4 absolute top-[60px] rounded-[10px] py-4 px-4 right-[0px] w-[100%] z-50 max-h-[280px] overflow-y-scroll scroll-search overflow-x-hidden`
                    : `hidden`
                }
              >
                {foundEvents.map((event) => {
                  return (
                    <Link
                      key={event.id}
                      className="hover:text-[#c35817]"
                      to={`/events/${event.id}`}
                    >
                      <div className="flex items-center gap-2 w-[100%]">
                        <div className="aspect-[16/9] flex items-center justify-center rounded-[10px] overflow-hidden w-[25%]">
                          <img
                            src={event.img}
                            className="w-[100%] object-contain"
                            alt={event.title}
                          />
                        </div>
                        <div className="w-[70%]">{event.title}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] pt-[40px] pb-[60px]">
        <EventsSection events={theatres} title={"Театры"} />
      </div>
      <Footer />
    </>
  );
};

export default TheatresPage;
