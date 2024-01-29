/* Express */
const express = require("express");

/* Dotenv */
const dotenv = require("dotenv");
dotenv.config();

/* Cors */
const cors = require("cors");

/* Morgan */
const morgan = require("morgan");

/* MongoDB */
const connect = require("./db/connect");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const mailRoutes = require("./routes/mail");
const viewsRoutes = require("./routes/views");

app.use("/", viewsRoutes);
app.use("/mail", mailRoutes);

app.get("/", (req, res) => {
  res.status(200).json("test");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(`Server running on PORT ${PORT}`);
  await connect().catch(console.dir);
});
