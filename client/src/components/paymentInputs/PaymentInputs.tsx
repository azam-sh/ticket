import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { Seat, Ticket } from "../../types";

export default function PaymentInputs({
  cart,
  onBuyTickets,
}: {
  cart: Seat[] | Ticket[];
  onBuyTickets: () => void;
}) {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta,
  } = usePaymentInputs();

  return (
    <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 items-baseline justify-between xl:w-[60%]">
      <div className="flex sm:w-[65%] lg:w-[60%] bg-transparent">
        <PaymentInputsWrapper
          {...wrapperProps}
          styles={{
            fieldWrapper: {
              base: `
            width: 100%;
            background: transparent;
          `,
              errored: `
            border-color: green;
          `,
            },
            inputWrapper: {
              base: `
            border-color: green;
            width: 100%;
          `,
              errored: `
            border-color: red;
          `,
              focused: `
            border-color: unset;
            box-shadow: unset;
            outline: none;
          `,
            },
            input: {
              base: `
            color: green;
          `,
              errored: `
            color: red;
          `,
              cardNumber: `
            width: 60%;
          `,
              expiryDate: `
            width: 20%;
          `,
              cvc: `
            width: 20%;
          `,
            },
            errorText: {
              base: `
            color: red;
          `,
            },
          }}
        >
          {/* @ts-ignore */}
          <svg {...getCardImageProps({ images })} />
          <input {...getCardNumberProps()} />
          <input {...getExpiryDateProps()} />
          <input {...getCVCProps()} />
        </PaymentInputsWrapper>
      </div>
      <button
        disabled={
          cart.length >= 1 && typeof meta.error === "undefined" ? false : true
        }
        className="bg-[#ff7017] disabled:opacity-75 sm:w-[20%] h-[40px] lg:w-[15%] xl:w-[20%] disabled:pointer-events-none text-[#000] hover:bg-[#ab521a] hover:text-[#fff] ml-auto sm:ml-0 hover:cursor-pointer rounded-[10px] py-1 px-4"
        onClick={onBuyTickets}
      >
        Оплатить
      </button>
    </div>
  );
}
