import React, { useState } from "react";
import { Seat } from "../../types";

const SeatPicker = ({
  seats,
  setSeats,
  cart,
  setCart,
  onSeatSelect,
}: {
  seats: Seat[];
  setSeats: (arr: Seat[]) => void;
  cart: Seat[];
  setCart: (arr: Seat[]) => void;
  onSeatSelect: (value: Seat) => void;
}) => {
  const seatStyle = `w-[42px] flex items-center justify-center min-h-[35px] py-1 px-3 rounded-tl-[10px] rounded-tr-[10px] relative`;

  const rowA = seats.filter((seat) => seat.row === "A");
  const rowB = seats.filter((seat) => seat.row === "B");
  const rowC = seats.filter((seat) => seat.row === "C");
  const rowD = seats.filter((seat) => seat.row === "D");

  const [seatPrice, setSeatPrice] = useState<number | null>(null);
  const [isVisiblePriceModal, setIsVisiblePriceModal] = useState<number | null>(
    null
  );

  const handleSeatHover = (seat: Seat) => {
    setSeatPrice(seat.price);
    setIsVisiblePriceModal(seat.id);
  };

  return (
    <div className="flex flex-col gap-4 screen-container mx-auto w-[600px]">
      <div className="screen mb-[10px]"></div>
      <div className="flex flex-col gap-5 w-[100%]">
        <div className="flex items-center w-[100%] justify-center">
          <span className="inline-block mr-[20px]">{rowA[0].row}</span>
          <div className="flex gap-3">
            {rowA.map((seat) => {
              return (
                <div
                  onClick={() => onSeatSelect(seat)}
                  onMouseEnter={() => handleSeatHover(seat)}
                  onMouseLeave={() => setIsVisiblePriceModal(null)}
                  className={
                    seat.isReserved
                      ? `text-[lightgray] bg-[#252525] border-[1px] border-[lightgrey] pointer-events-none ${seatStyle}`
                      : seat.isSelected
                      ? `text-[black] bg-[green] hover:cursor-pointer ${seatStyle}`
                      : `text-[black] hover:bg-[#ab521a] bg-[#ff7017] hover:text-[#fff] hover:cursor-pointer ${seatStyle}`
                  }
                  key={seat.id}
                >
                  {seat.number}
                  <div
                    className={
                      isVisiblePriceModal === seat.id
                        ? "absolute px-[15px] pointer-events-none rounded-[10px] py-[10px] text-center text-[14px] bg-[#fff] text-[#000] top-[-40px] right-[-30px] z-50"
                        : "hidden"
                    }
                  >
                    {seatPrice} с.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center w-[100%] justify-center">
          <span className="inline-block mr-[20px]">{rowB[0].row}</span>
          <div className="flex gap-3">
            {rowB.map((seat) => {
              return (
                <div
                  onClick={() => onSeatSelect(seat)}
                  onMouseEnter={() => handleSeatHover(seat)}
                  onMouseLeave={() => setIsVisiblePriceModal(null)}
                  className={
                    seat.isReserved
                      ? `text-[lightgray] bg-[#252525] border-[1px] border-[lightgrey] pointer-events-none ${seatStyle}`
                      : seat.isSelected
                      ? `text-[black] bg-[green] hover:cursor-pointer ${seatStyle}`
                      : `text-[black] hover:bg-[#ab521a] bg-[#ff7017] hover:text-[#fff] hover:cursor-pointer ${seatStyle}`
                  }
                  key={seat.id}
                >
                  {seat.number}
                  <div
                    className={
                      isVisiblePriceModal === seat.id
                        ? "absolute px-[15px] pointer-events-none rounded-[10px] py-[10px] text-center text-[14px] bg-[#fff] text-[#000] top-[-40px] right-[-30px] z-50"
                        : "hidden"
                    }
                  >
                    {seatPrice} с.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center w-[100%] justify-center">
          <span className="inline-block mr-[20px]">{rowC[0].row}</span>
          <div className="flex gap-3">
            {rowC.map((seat) => {
              return (
                <div
                  onClick={() => onSeatSelect(seat)}
                  onMouseEnter={() => handleSeatHover(seat)}
                  onMouseLeave={() => setIsVisiblePriceModal(null)}
                  className={
                    seat.isReserved
                      ? `text-[lightgray] bg-[#252525] border-[1px] border-[lightgrey] pointer-events-none ${seatStyle}`
                      : seat.isSelected
                      ? `text-[black] hover:cursor-pointer bg-[green] ${seatStyle}`
                      : `text-[black] hover:bg-[#ab521a] bg-[#ff7017] hover:text-[#fff] hover:cursor-pointer ${seatStyle}`
                  }
                  key={seat.id}
                >
                  {seat.number}
                  <div
                    className={
                      isVisiblePriceModal === seat.id
                        ? "absolute px-[15px] pointer-events-none rounded-[10px] py-[10px] text-center text-[14px] bg-[#fff] text-[#000] top-[-40px] right-[-30px] z-50"
                        : "hidden"
                    }
                  >
                    {seatPrice} с.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center w-[100%] justify-center">
          <span className="inline-block mr-[20px]">{rowD[0].row}</span>
          <div className="flex gap-3">
            {rowD.map((seat) => {
              return (
                <div
                  onClick={() => onSeatSelect(seat)}
                  onMouseEnter={() => handleSeatHover(seat)}
                  onMouseLeave={() => setIsVisiblePriceModal(null)}
                  className={
                    seat.isReserved
                      ? `text-[lightgray] bg-[#252525] border-[1px] border-[lightgrey] pointer-events-none ${seatStyle}`
                      : seat.isSelected
                      ? `hover:cursor-pointer text-[black] bg-[green] ${seatStyle}`
                      : `text-[black] hover:bg-[#ab521a] bg-[#ff7017] hover:text-[#fff] hover:cursor-pointer ${seatStyle}`
                  }
                  key={seat.id}
                >
                  {seat.number}
                  <div
                    className={
                      isVisiblePriceModal === seat.id
                        ? "absolute px-[15px] pointer-events-none rounded-[10px] py-[10px] text-center text-[14px] bg-[#fff] text-[#000] top-[-40px] right-[-30px] z-50"
                        : "hidden"
                    }
                  >
                    {seatPrice} с.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatPicker;
