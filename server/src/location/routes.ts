const { Router } = require("express");
const controller = require("./controller");

const router = Router()

router.get('/', controller.getLocations);

export { router }