require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const weatherRouter = require("./routers/weatherRouter");
const cors = require("cors");

const PORT = process.env.PORT || 2020;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/weather", weatherRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
