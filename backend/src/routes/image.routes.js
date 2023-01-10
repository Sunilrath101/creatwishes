const express = require("express");
const routeController = require("../controller/image.controller");

const router = express.Router();

router
  .route("/")
  .get(routeController.getWishes)
  .post(routeController.postWishes);

router.route("/:id").get(routeController.getWish);

module.exports = router;
