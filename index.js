/*
 * Filename: /home/muhid/RawNodeApiProject/index.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Thursday, June 30th 2022, 2:37:24 pm
 * Author: Muhid
 *
 * Copyright (c) 2022 Your Company
 */

const http = require("http");

const app = {};

app.config = {
  port: 3001,
};

app.ServerCreate = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`lestening port from ${app.config.port}`);
  });
};

app.handleReqRes = (req, res) => {
  res.end("Hello World ! From Muhid");
};
app.ServerCreate();

