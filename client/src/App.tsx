import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConcertsPage from "./pages/concerts/ConcertsPage";
import EventsPage from "./pages/events/EventsPage";
import LocationPage from "./pages/location/LocationPage";
import MainPage from "./pages/main/MainPage";
import MoviesPage from "./pages/movies/MoviesPage";
import PreviewPage from "./pages/preview/PreviewPage";
import TheatresPage from "./pages/theatres/TheatresPage";
import { Event, Session } from "./types";

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [sessions, setSessions] = useState<Session[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/sessions")
      .then((response) => response.json())
      .then((data) => setSessions(data));
  }, [])
  

  return (
    <div className="mx-auto flex flex-col justify-between min-h-screen">
      <Routes>
        <Route path="/" element={<MainPage events={events} />} />
        <Route path="/movies" element={<MoviesPage events={events} />} />
        <Route path="/concerts" element={<ConcertsPage events={events} />} />
        <Route path="/theatres" element={<TheatresPage events={events} />} />
        <Route
          path="/locations/:id"
          element={<LocationPage events={events} />}
        />
        <Route path="/events/:id" element={<EventsPage events={events} sessions={sessions}/>} />
        <Route
          path="/preview/:eventId/:sessionId"
          element={<PreviewPage events={events} sessions={sessions}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
