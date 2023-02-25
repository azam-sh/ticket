import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Event, Session } from "../../types";
import SeatPickerPreview from "./seatPickerPreview/SeatPickerPreview";
import TicketPickerPreview from "./ticketPickerPreview/TicketPickerPreview";

const PreviewPage = ({
  events,
  sessions,
}: {
  events: Event[];
  sessions: Session[];
}) => {
  const { eventId, sessionId } = useParams();
  const foundEvent = events.find((event) => eventId && event.id === eventId);
  const foundSession = sessions.find(
    (session) => sessionId && session.id === sessionId
  );

  return (
    <>
      <div className="bg-gradient">
        <div className="flex flex-col container mx-auto px-[30px] sm:px-[80px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px] pt-[10px] sm:pb-[20px] pb-[10px]">
          <Navbar />
        </div>
      </div>
      {sessionId === "museum" && foundEvent ? (
        <TicketPickerPreview event={foundEvent} />
      ) : (
        foundEvent &&
        foundSession && (
          <SeatPickerPreview session={foundSession} event={foundEvent} />
        )
      )}
      <Footer />
    </>
  );
};

export default PreviewPage;
