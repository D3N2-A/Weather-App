const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const https = require("https");
const { urlencoded } = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var query = req.body.cityName;
  var appid = req.body.apiKey;
  var units = req.body.units;

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appid +
    "&units=" +
    units;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const city = weatherData.name;
      const url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(temp);
      var weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);
      res.write("<p>The weather is " + weatherDescription + " .</p>");
      res.write("<h1>The temperature in " + city + " is " + temp + " .</h1>");
      res.write("<img src = " + url + ">");
      res.send;
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running at port " + 3000);
});
