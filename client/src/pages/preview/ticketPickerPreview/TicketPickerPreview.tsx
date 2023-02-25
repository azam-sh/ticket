import React, { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import PaymentInputs from "../../../components/paymentInputs/PaymentInputs";
import TicketPicker from "../../../components/ticketPicker/TicketPicker";
import { Event, Ticket } from "../../../types";

const TicketPickerPreview = ({ event }: { event: Event }) => {
  const [cart, setCart] = useState<Ticket[]>([]);
  const [totalQttOfTickets, setTotalQttOfTickets] = useState<number>(0);
  const [totalMoneyOfTickets, setTotalMoneyOfTickets] = useState<number>(0);
  const [ticketInputsValues, setTicketInputsValue] = useState({
    entranceForTjk: "0",
    excursionForTjk: "0",
    entranceForForeign: "0",
    excursionForForeign: "0",
  });

  useEffect(() => {
    let sumMoneyOfTickets = 0;
    let sumQttOfTickets = 0;
    if (cart.length < 1) {
      setTotalMoneyOfTickets(sumMoneyOfTickets);
      setTotalQttOfTickets(sumQttOfTickets);
    } else {
      cart.map((item) => {
        if (item.qtt) {
          sumMoneyOfTickets = sumMoneyOfTickets + item.price * item.qtt;
          sumQttOfTickets = sumQttOfTickets + item.qtt;
        }
        return item;
      });
      setTotalQttOfTickets(sumQttOfTickets);
      setTotalMoneyOfTickets(sumMoneyOfTickets);
    }
  }, [cart]);

  const onBuyTickets = () => {
    setTicketInputsValue({
      entranceForTjk: "0",
      excursionForTjk: "0",
      entranceForForeign: "0",
      excursionForForeign: "0",
    });
    setCart([]);
  };

  return (
    <div className="container mx-auto px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] pt-[25px] sm:pt-[40px] pb-[60px]">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[19px] sm:text-[24px] md:text-[24px] xl:text-[30px] lg:text-[26px]">
          {event.title}
        </h1>
        <div className="flex items-center gap-1 text-[19px] sm:text-[20px] md:text-[22px] xl:text-[26px] lg:text-[24px]">
          <MdOutlineLocationOn />
          {event.location}
        </div>
      </div>
      <div className="bg-[#252525] mt-[30px] w-[100%] text-[#fff] sm:pt-[40px] pt-[15px] px-[30px] sm:px-[100px] md:px-[100px] pb-[40px] sm:pb-[60px] border-2 rounded-[10px] border-[#ff7017]">
        <TicketPicker
          setTotalQttOfTickets={setTotalQttOfTickets}
          setTotalMoneyOfTickets={setTotalMoneyOfTickets}
          ticketInputsValues={ticketInputsValues}
          setTicketInputsValue={setTicketInputsValue}
          cart={cart}
          setCart={setCart}
        />
      </div>
      <hr className="mb-[20px] h-[1px] w-[100%] my-[40px] border-none bg-[#ff7017]" />
      <div className="flex gap-3 xl:items-baseline justify-between xl:flex-row flex-col">
        <div className="flex gap-2 items-center xl:w-[40%]">
          <span className="text-[16px] sm:text-[20px]">
            Количество билетов: {totalQttOfTickets}
          </span>
          <span className="text-[16px] sm:text-[20px]">
            Сумма: {totalMoneyOfTickets} сом
          </span>
        </div>
        <PaymentInputs cart={cart} onBuyTickets={onBuyTickets} />
      </div>
    </div>
  );
};

export default TicketPickerPreview;
