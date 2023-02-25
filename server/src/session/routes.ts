const { Router } = require("express");
const controller = require("./controller");

const router = Router()

router.get('/', controller.getSessions);
router.put('/:sessionId', controller.putSessions)

export { router }