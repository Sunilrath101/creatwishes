const express = require("express");
const routeController = require("../controller/wishes.controller");

const router = express.Router();

router
  .route("")
  .get(routeController.getWishes)
  .post(routeController.postWishes);

module.exports = router;
