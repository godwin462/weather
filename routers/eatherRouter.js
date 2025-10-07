const {getWeather} = require("../controllers/weatherController");

const weatherRouter = require("express").Router();

weatherRouter.get("/", getWeather);

module.exports = weatherRouter;
