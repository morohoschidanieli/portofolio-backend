/* Express */
const express = require("express");

/* Dotenv */
const dotenv = require("dotenv");
dotenv.config();

/* Cors */
const cors = require("cors");

/* Morgan */
const morgan = require("morgan");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const mailRoutes = require("./routes/mail");

app.use("/mail", mailRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
