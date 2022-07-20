/*
 * Filename: /home/muhid/RawNodeApiProject/index.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Thursday, June 30th 2022, 2:37:24 pm
 * Author: Muhid
 *
 * Copyright (c) 2022 Your Company
 */

const http = require("http");
const handdleReqRes = require('./helpers/handleReqRes')
const url = require('url');
const {StringDecoder} = require('string_decoder'); 
const environment = require('./helpers/handlers/environments');


const app = {};

app.config = {
  port: 3001,
};

app.ServerCreate = () => {
  const server = http.createServer(app.handdleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening port from ${environment.port}`);
  });
};

app.handdleReqRes = handdleReqRes.handdleReqRes;

app.ServerCreate();
