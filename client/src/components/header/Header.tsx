import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import { BsSearch } from "react-icons/bs";
import { Event } from "../../types";
import { Link } from "react-router-dom";

const Header = ({ events }: { events: Event[] }) => {
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

  const foundEvents = events.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="bg-black hidden md:block">
        <div className="flex flex-col md:bg-[url('../public/img/homepage-bg.jpg')] bg-cover container mx-auto md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] sm:bg-gradient sm:pb-[20px] pt-[10px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
          <Navbar />
          <div className="flex flex-col justify-center items-center pt-[8%]">
            <h1 className="text-white font-bold md:text-[26px] lg:text-[32px] xl:text-[40px]">
              Онлайн покупка билетов
            </h1>
            <p className="text-white md:text-[24] lg:text-[20px] xl:text-[24px] text-center mt-[10px]">
              Находите и покупайте билеты <br /> на ваши любимые мероприятия
              онлайн
            </p>
            <div
              ref={ref}
              className="md:flex mt-[40px] w-[500px] md:h-[40px] lg:h-[50px] relative sm:hidden"
            >
              <input
                type="text"
                className="h-[100%] w-[100%] pr-[60px] rounded-[10px] focus:outline-none px-4 md:py-1 lg:py-2 placeholder:text-black text-bold"
                placeholder="Введите название мероприятия"
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
      <div className="bg-gradient block md:hidden">
        <div className="flex flex-col md:bg-[url('../public/img/homepage-bg.jpg')] bg-cover container mx-auto px-[30px] md:px-[50px] sm:px-[80px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] sm:bg-gradient pb-[40px] sm:pb-[60px] pt-[10px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
          <Navbar />
          <div className="flex flex-col justify-center items-center mt-[5px] sm:mt-0 sm:pt-[20px] md:pt-[8%]">
            <h1 className="text-white font-bold text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]">
              Онлайн покупка билетов
            </h1>
            <p className="text-white  md:inline-block lg:text-[20px] xl:text-[24px] text-[14px] sm:text-[18px] text-center mt-[10px]">
              Находите и покупайте билеты <br /> на ваши любимые мероприятия
              онлайн
            </p>
            <div className="md:flex mt-[40px] w-[500px] h-[50px] relative hidden">
              <input
                type="text"
                className="h-[100%] w-[100%] pr-[60px] rounded-[10px] focus:outline-none px-4 py-2 placeholder:text-black text-bold"
                placeholder="Введите название мероприятия"
              />
              <button className="px-4 py-2 absolute top-[15%] right-[1%] hover:text-[#c35817]">
                <BsSearch fontSize="18px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
