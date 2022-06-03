const express = require("express");
const { appendFile } = require("fs");
const port = 3000;
const https = require("https");

app.get("/", function (req, res) {
  console.log("Server is up and running");
});

app.listen(port, function () {
  console.log("Server is running at port" + port);
});
