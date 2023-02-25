const pool = require("../db");
const queries = require("./queries");
import { Request, Response } from "express";
import { QueryResult } from "pg";

type Seat = {
  id: string;
  isReserved: boolean;
  number: string;
  row: string;
  price: number;
};

const getSessions = (req: Request, res: Response) => {
  pool.query(queries.getSessions, (error: any, results: QueryResult) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const putSessions = (req: Request, res: Response) => {
  let seats: Seat[] = [];
  const { sessionId } = req.params;
  const neededIds = req.body;
  pool.query(
    queries.getOneSession,
    [sessionId],
    (error: any, results: QueryResult) => {
      if (error) throw error;
      seats = results.rows[0].seats;
      const updatedSeats = seats.map((seat) => {
        if (neededIds.includes(seat.id)) {
          return { ...seat, isReserved: true };
        }
        return seat;
      });
      pool.query(
        queries.updateSession,
        [JSON.stringify(updatedSeats), sessionId],
        (error: any, results: QueryResult) => {
          if (error) throw error;
          console.log("done");
        }
      );
    }
  );
  res.json("done");
};

module.exports = {
  getSessions,
  putSessions,
};
