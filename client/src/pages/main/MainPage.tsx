import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Locations from "../../components/locations/Locations";
import EventsSection from "../../components/eventsSection/EventsSection";
import { Event } from "../../types";

const MainPage = ({ events }: { events: Event[] }) => {
  return (
    <>
      <Header events={events} />
      <div className="container mx-auto px-[30px] md:px-[50px] lg:px-[80px] 2xl:px-[120px] xl:px-[100px] pt-[10px] md:pt-[40px] pb-[35px] md:pb-[60px]">
        <Locations />
        <EventsSection events={events} title={"Предстоящие"} />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
