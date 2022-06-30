/*
 * Filename: /home/muhid/RawNodeApiProject/index.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Thursday, June 30th 2022, 2:37:24 pm
 * Author: Muhid
 *
 * Copyright (c) 2022 Your Company
 */

const http = require("http");
const url = require('url');

const app = {};

app.config = {
  port: 3001,
};

app.ServerCreate = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening port from ${app.config.port}`);
  });
};

app.handleReqRes = (req, res) => {
  res.end("Hello World ! From Muhid");
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const treamPath = path.replace(/^\/+|\/+$/g,'');
  const method=req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  console.log(queryStringObject);
};
app.ServerCreate();

