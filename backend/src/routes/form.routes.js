const express = require("express");
const routeController = require("../controller/form.controller");

const router = express.Router();

router
  .route("")
  .get(routeController.getWishes)
  .post(routeController.postWishes);

module.exports = router;
