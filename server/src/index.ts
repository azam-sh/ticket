const express = require("express");
const locationRoutes = require("./location/routes");
const eventRoutes = require("./event/routes");
const museumTicketsRoutes = require("./museumTicket/routes");
const sessionsRoutes = require("./session/routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.use("/locations", locationRoutes.router);
app.use("/events", eventRoutes.router);
app.use("/museum-tickets", museumTicketsRoutes.router);
app.use("/sessions", sessionsRoutes.router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
