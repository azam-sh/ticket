import React, { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import PaymentInputs from "../../../components/paymentInputs/PaymentInputs";
import SeatPicker from "../../../components/seatPicker/SeatPicker";
import { Event, Seat, Session } from "../../../types";

const SeatPickerPreview = ({
  session,
  event,
}: {
  session: Session;
  event: Event;
}) => {
  const [cart, setCart] = useState<Seat[]>([]);
  const [totalQttOfTickets, setTotalQttOfTickets] = useState<number>(0);
  const [totalMoneyOfTickets, setTotalMoneyOfTickets] = useState<number>(0);
  const [seats, setSeats] = useState<Seat[]>(session.seats);

  useEffect(() => {
    setTotalQttOfTickets(cart.length);
    setTotalMoneyOfTickets(
      cart.reduce((accum, currentValue) => accum + currentValue.price, 0)
    );
  }, [cart]);

  const onSeatSelect = (selectedSeat: Seat) => {
    const foundSeat = cart.find((seat) => seat.id === selectedSeat.id);
    if (foundSeat) {
      const filteredCart = cart.filter((seat) => seat.id !== foundSeat.id);
      setCart(filteredCart);
    } else {
      setCart([...cart, selectedSeat]);
    }
    setSeats(
      seats.map((seat) => {
        if (seat.id === selectedSeat.id) {
          return { ...seat, isSelected: !seat.isSelected };
        }
        return seat;
      })
    );
  };

  const onBuyTickets = () => {
    const neededIds: number[] = [];
    cart.map((item) => {
      neededIds.push(item.id);
      return item;
    });
    fetch(`http://localhost:5000/sessions/${session.id}`, {
      method: "PUT",
      body: JSON.stringify(neededIds),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setSeats(
      seats.map((seat) => {
        if (neededIds.includes(seat.id)) {
          return { ...seat, isReserved: true };
        }
        return seat;
      })
    );
    setCart([]);
  };

  return (
    <div className="container mx-auto px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] sm:pt-[40px] pt-[25px] pb-[60px]">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-center text-[19px] md:text-[24px] xl:text-[30px] lg:text-[26px] sm:text-[22px]">
          {event.title}
        </h1>
        <div className="flex items-center gap-1 text-[18px] md:text-[22px] xl:text-[26px] lg:text-[24px] sm:text-[22px]">
          <MdOutlineLocationOn />
          {event.location}
        </div>
        <div className="sm:text-[22px] md:text-[22px] text-[18px] xl:text-[26px] lg:text-[24px]">
          Сеанс: {session.time}
        </div>
      </div>
      <div className="bg-[#252525] sm:mt-[30px] mt-[15px] overflow-scroll lg:overflow-auto w-[100%] text-[#fff] pt-[40px] px-[100px] pb-[60px] border-2 rounded-[10px] border-[#ff7017]">
        <SeatPicker
          cart={cart}
          setCart={setCart}
          seats={seats}
          setSeats={setSeats}
          onSeatSelect={onSeatSelect}
        />
      </div>
      <div className="py-[30px] flex flex-col items-start sm:flex-row sm:justify-center gap-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[18px] text-[#626161]">Свободно:</span>
          <div className="w-[30px] flex items-center justify-center min-h-[25px] py-1 px-3 rounded-tl-[10px] rounded-tr-[10px] bg-[#ff7017]"></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[18px] text-[#626161]">Забронировано:</span>
          <div className="w-[30px] flex items-center justify-center min-h-[25px] py-1 px-3 rounded-tl-[10px] rounded-tr-[10px] bg-[#252525]"></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[18px] text-[#626161]">Выбрано:</span>
          <div className="w-[30px] flex items-center justify-center min-h-[25px] py-1 px-3 rounded-tl-[10px] rounded-tr-[10px] bg-[green]"></div>
        </div>
      </div>
      <hr className="h-[1px] w-[100%] mb-[20px] border-none bg-[#ff7017]" />
      {cart.length >= 1 && (
        <div className="flex flex-col">
          <span className="text-[18px] mb-[10px] font-semibold">
            Выбранные места:
          </span>
          {cart.map((seat) => {
            return (
              <div
                className="flex mb-[10px] sm:text-[18px] py-2 items-center justify-between rounded-[10px] px-4 max-w-[73%] sm:max-w-[45%] md:max-w-[40%] lg:max-w-[34%] xl:max-w-[26%] bg-[#dedcdb]"
                key={seat.id}
              >
                <div className="flex gap-2">
                  <span>Место: {seat.number},</span>
                  <span>ряд: {seat.row}</span>
                </div>
                <div>
                  <span>{seat.price} сом</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex flex-col xl:flex-row xl:items-baseline gap-3 justify-between">
        <div className="flex gap-2 xl:w-[40%]">
          <span className="sm:text-[18px] md:text-[20px]">
            Количество билетов: {totalQttOfTickets}
          </span>
          <span className="sm:text-[18px] md:text-[20px]">
            Сумма: {totalMoneyOfTickets} сом
          </span>
        </div>
        <PaymentInputs cart={cart} onBuyTickets={onBuyTickets} />
      </div>
    </div>
  );
};

export default SeatPickerPreview;
