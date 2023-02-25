import React, { useEffect, useState } from "react";
import { Ticket } from "../../types";

const TicketPicker = ({
  setTotalQttOfTickets,
  setTotalMoneyOfTickets,
  cart,
  setCart,
  ticketInputsValues,
  setTicketInputsValue,
}: {
  setTotalQttOfTickets: (value: number) => void;
  setTotalMoneyOfTickets: (value: number) => void;
  cart: Ticket[];
  setCart: (arr: Ticket[]) => void;
  ticketInputsValues: {
    entranceForTjk: string;
    excursionForTjk: string;
    entranceForForeign: string;
    excursionForForeign: string;
  };
  setTicketInputsValue: (value: {
    entranceForTjk: string;
    excursionForTjk: string;
    entranceForForeign: string;
    excursionForForeign: string;
  }) => void;
}) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [citizenship, setCitizenship] = useState<"tjk" | "foreign" | null>(
    "tjk"
  );

  const buttonStyle = `hover:cursor-pointer rounded-[10px] py-1 sm:px-4 px-2 text-[14px] sm:text-[16px]
  hover:cursor-pointer rounded-[10px]`;

  const onSelect = (e: any, ticket: Ticket) => {
    const ticketQtt = +e.target.value;
    if (ticketQtt >= 1) {
      const foundItem = cart.find((item) => item.id === ticket.id);
      if (!foundItem) {
        const cartItem = {
          ...ticket,
          qtt: ticketQtt,
        };
        setCart([...cart, cartItem]);
      } else {
        setCart(
          cart.map((item) => {
            if (item.id === foundItem.id) {
              return { ...ticket, qtt: ticketQtt };
            }
            return ticket;
          })
        );
      }
    } else if (ticketQtt < 1) {
      setCart(cart.filter((item) => item.id !== ticket.id));
    }
    setTicketInputsValue({
      ...ticketInputsValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/museum-tickets")
      .then((response) => response.json())
      .then((data) => {
        // @ts-ignore
        const formatedCart = data.map((item) => {
          return { ...item, price: Number(item.price) };
        });
        setTickets(formatedCart);
      });
  }, []);

  return (
    <div className="flex flex-col w-[100%] lg:w-[70%] xl:w-[52%] mx-auto">
      <div className="flex items-center sm:flex-row flex-col justify-center gap-5 mt-[20px] mb-[20px]">
        <button
          className={
            citizenship === "tjk"
              ? `bg-[#ab521a] text-[#fff]` + buttonStyle
              : `bg-[#ff7017] text-[#000] hover:bg-[#ab521a] hover:text-[#fff] ` +
                buttonStyle
          }
          name="tjk"
          onClick={(e: any) => setCitizenship(e.target.name)}
        >
          Для граждан РТ
        </button>
        <button
          className={
            citizenship === "foreign"
              ? `bg-[#ab521a] text-[#fff]` + buttonStyle
              : `bg-[#ff7017] text-[#000] hover:bg-[#ab521a] hover:text-[#fff] ` +
                buttonStyle
          }
          name="foreign"
          onClick={(e: any) => setCitizenship(e.target.name)}
        >
          For foreign citizens
        </button>
      </div>
      {citizenship === "tjk" && (
        <div className="flex flex-col pb-[30px] pt-[20px]">
          {tickets.map((ticket) => {
            if (ticket.category === "entrance" && ticket.ticketFor === "tjk") {
              return (
                <div
                  key={ticket.id}
                  className="flex items-baseline justify-between"
                >
                  <div className="flex flex-col mb-[15px] w-[91%]">
                    <div className="text-[14px] sm:text-[18px]">{ticket.title}</div>
                    <div className="text-[13px] sm:text-[14px]">{ticket.price} сом</div>
                  </div>
                  <select
                    onChange={(e) => onSelect(e, ticket)}
                    className="bg-[transparent] w-[16%] sm:w-[9%] text-[#ff7017]"
                    name="entranceForTjk"
                    value={ticketInputsValues.entranceForTjk}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              );
            }
            return null;
          })}
          {tickets.map((ticket) => {
            if (ticket.ticketFor === "tjk" && ticket.category === "excursion") {
              return (
                <div
                  key={ticket.id}
                  className="flex items-baseline justify-between"
                >
                  <div className="flex flex-col w-[91%]">
                    <div className="text-[14px] sm:text-[18px]">{ticket.title}</div>
                    <div className="text-[13px] sm:text-[14px]">{ticket.price} сом</div>
                  </div>
                  <select
                    onChange={(e) => onSelect(e, ticket)}
                    className="sm:w-[9%] w-[14%] bg-[transparent] text-[#ff7017]"
                    name="excursionForTjk"
                    value={ticketInputsValues.excursionForTjk}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                  </select>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
      {citizenship === "foreign" && (
        <div className="flex flex-col pb-[30px] pt-[20px]">
          {tickets.map((ticket) => {
            if (
              ticket.category === "entrance" &&
              ticket.ticketFor === "foreign"
            ) {
              return (
                <div
                  key={ticket.id}
                  className="flex items-baseline mb-[15px] justify-between"
                >
                  <div className="flex flex-col w-[91%]">
                    <div className="text-[14px] sm:text-[18px]">{ticket.title}</div>
                    <div className="text-[13px] sm:text-[14px]">{ticket.price} сом</div>
                  </div>
                  <select
                    value={ticketInputsValues.entranceForForeign}
                    onChange={(e) => onSelect(e, ticket)}
                    name="entranceForForeign"
                    className="w-[16%] sm:w-[9%] bg-[transparent] text-[#ff7017]"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              );
            }
            return null;
          })}
          {tickets.map((ticket) => {
            if (
              ticket.ticketFor === "foreign" &&
              ticket.category === "excursion"
            ) {
              return (
                <div
                  key={ticket.id}
                  className="flex items-baseline justify-between"
                >
                  <div className="flex flex-col w-[91%]">
                    <div className="text-[14px] sm:text-[18px]">{ticket.title}</div>
                    <div className="text-[13px] sm:text-[14px]">{ticket.price} сом</div>
                  </div>
                  <select
                    value={ticketInputsValues.excursionForForeign}
                    className="bg-[transparent] sm:w-[9%] w-[14%] text-[#ff7017]"
                    name="excursionForForeign"
                    onChange={(e) => onSelect(e, ticket)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                  </select>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default TicketPicker;
