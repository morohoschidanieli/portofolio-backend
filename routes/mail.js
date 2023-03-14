/* Express */
const express = require("express");

/* Router */
const router = express.Router();

/* Controller */
const emailController = require("../controllers/mail");

/* Routers */
router.post("/send", emailController.sendEmail);

module.exports = router;
