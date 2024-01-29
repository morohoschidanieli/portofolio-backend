/* Express */
const express = require("express");

/* Router */
const router = express.Router();

/* Controller */
const viewController = require("../controllers/views");

router.get("/views", viewController.getViews);

module.exports = router;
