const pool = require("../db");
const queries = require("./queries");
import { Request, Response } from "express";
import { QueryResult } from "pg";

const getLocations = (req: Request, res: Response) => {
  pool.query(queries.getLocations, (error: any, results: QueryResult) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getLocations
}