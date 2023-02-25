import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#252525] text-white">
      <div className="container mx-auto lg:px-[80px] md:px-[50px] px-[30px] flex flex-col sm:justify-center 2xl:px-[120px] xl:px-[100px] pt-[40px] sm:pt-[80px] pb-[60px] md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start sm:w-[100%] md:w-[30%] md:mb-0 mb-[20px]">
          <h2 className="sm:mb-[20px] mb-[10px] xl:text-[24px] lg:text-[20px] text-[22px] sm:text-[24px] md:text-[22px] font-semibold">
            О нас
          </h2>
          <p className="sm:mb-[20px] mb-[5px] md:text-[16px] xl:text-[16px] lg:text-[14px]">
            Ticket - сервис по продвижению событий
          </p>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex mb-[5px]">
              <span className="mr-[5px]">Тел.:</span>
              <a
                href="tel:+992987654321"
                className="hover:text-[#c35817] transition-all"
              >
                +992987654321
              </a>
            </div>
            <div className="flex">
              <span className="mr-[5px]">E-mail:</span>
              <a
                href="mailto:ticket@gmail.com"
                className="hover:text-[#c35817]"
              >
                ticket@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-[100%] md:w-[30%] md:mb-0 mb-[20px]">
          <h2 className="sm:mb-[20px] text-[22px] mb-[10px] xl:text-[24px] lg:text-[20px] sm:text-[24px] md:text-[22px] font-semibold">
            Способы оплаты
          </h2>
          <div className="flex flex-col items-center md:items-start gap-4 w-[60%] sm:w-[50%] lg:w-[70%] md:w-[100%]">
            <img
              src="/img/mastercard-logo.png"
              alt="mastercard"
              className="object-cover w-[36%]"
            />
            <img
              src="/img/visa-logo.png"
              alt="visa"
              className="object-cover w-[40%]"
            />
            <img
              src="/img/paypal-logo.png"
              alt="paypal"
              className="object-cover w-[40%]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-[100%] md:w-[30%] md:mb-0 sm:mb-[20px]">
          <h2 className="mb-[20px] xl:text-[24px] lg:text-[20px] text-[22px] sm:text-[24px] md:text-[22px] font-semibold">
            Мобильное приложение
          </h2>
          <div className="flex flex-col items-center">
            <a
              href="https://www.apple.com/ru/app-store/"
              className="md:w-[80%] w-[70%] lg:w-[100%] mb-[10px]"
            >
              <img
                src="/img/appstore-logo.svg"
                alt="app-store"
                className="object-contain w-[100%]"
              />
            </a>
            <a
              href="https://play.google.com/store/games?hl=ru&gl=US"
              className="md:w-[80%] w-[70%] lg:w-[100%]"
            >
              <img
                src="/img/googleplay-logo.svg"
                alt="play-market"
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
