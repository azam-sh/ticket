const pool = require("../db");
const queries = require("./queries");
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getEvents = (req: Request, res: Response) => {
  pool.query(queries.getEvents, (error: any, results: QueryResult) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getEvents
}