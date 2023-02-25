import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isClickedMenu, setStatusClickedMenu] = useState(false);

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isClickedMenu && ref.current && !ref.current.contains(e.target)) {
        setStatusClickedMenu(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isClickedMenu]);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/img/ticket-logo.svg"
            alt="logo"
            className="w-[50px] sm:w-[70px]"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link
          className="text-white md:inline-block hidden font-semibold hover:text-[#ff7017] transition-all"
          to="/concerts"
        >
          Концерты
        </Link>
        <Link
          className="text-white md:inline-block hidden font-semibold hover:text-[#ff7017] transition-all"
          to="/theatres"
        >
          Театры
        </Link>
        <Link to="/movies">
          <span className="text-white md:inline-block hidden font-semibold hover:text-[#ff7017] transition-all">
            Кино
          </span>
        </Link>
      </div>
      <div
        ref={ref}
        onClick={() => setStatusClickedMenu(!isClickedMenu)}
        className="h-[100%] flex flex-col relative justify-between items-center gap-[0.3em] cursor-pointer w-[4em] md:hidden"
      >
        <div className="w-[1.2em] h-[0.1em] sm:w-[2em] bg-[white] sm:h-[0.2em] rounded-[0.5em]"></div>
        <div className="w-[1.2em] h-[0.1em] sm:w-[2em] bg-[white] sm:h-[0.2em] rounded-[0.5em]"></div>
        <div className="w-[1.2em] h-[0.1em] sm:w-[2em] bg-[white] sm:h-[0.2em] rounded-[0.5em]"></div>
        {isClickedMenu && (
          <div className="absolute z-50 py-[15px] px-[25px] sm:py-[30px] sm:px-[40px] rounded-[10px] flex flex-col top-[23px] sm:top-[30px] right-[15px] sm:right-[10px] items-start gap-2 sm:gap-4 bg-[#252525]">
            <Link
              className="text-white text-[14px] sm:text-[18px] inline-block font-semibold hover:text-[#ff7017] transition-all"
              to="/concerts"
            >
              Концерты
            </Link>
            <Link
              className="text-white text-[14px] sm:text-[18px] inline-block font-semibold hover:text-[#ff7017] transition-all"
              to="/theatres"
            >
              Театры
            </Link>
            <Link to="/movies">
              <span className="text-white text-[14px] sm:text-[18px] inline-block  font-semibold hover:text-[#ff7017] transition-all">
                Кино
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
