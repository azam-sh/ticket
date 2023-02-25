const getSessions = `SELECT * from sessions`
const getOneSession = `SELECT "seats" from "sessions" WHERE id=$1`
const updateSession = `UPDATE "sessions" SET "seats"=$1 WHERE "id"=$2`

module.exports = {
  getSessions,
  getOneSession,
  updateSession
}