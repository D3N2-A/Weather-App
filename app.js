const express = require("express");
const port = 3000;
const https = require("https");
const app = express();
app.get("/", function (req, res) {
  console.log("Server is up and running");
});

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=hamirpur&appid=4720aa48fa8d52f9ce9ba5125f37c5f8&units=metric";

https.get(url, function (response) {
  console.log(response.statusCode);
  response.on("data", function (data) {
    const weatherData = JSON.parse(data);
    // console.log(weatherData);
    const temp = weatherData.main.temp;
    console.log(temp);
    var weatherDescription = weatherData.weather[0].description;
    console.log(weatherDescription);
  });
});

app.listen(port, function () {
  console.log("Server is running at port" + port);
});
