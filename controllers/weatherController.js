const { default: axios } = require("axios");

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.query;
    let { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
    );
    data = {
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].main,
      wind_speed: data.wind.speed,
    };
    res.status(200).json({ message: "Here is the weather update", data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};
