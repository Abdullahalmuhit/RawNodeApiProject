/*
 * Filename: /home/muhid/RawNodeApiProject/helpers/handleReqRes.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Thursday, June 30th 2022, 9:26:19 pm
 * Author: Muhid
 * 
 * Copyright (c) 2022 Your Company
 */
const url = require('url');
const {StringDecoder} = require('string_decoder'); 
 const handler = {}
 handler.handdleReqRes = (req, res) => {
    // res.end("Hello World ! From Muhid");
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const treamPath = path.replace(/^\/+|\/+$/g,'');
    const method=req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8');
    let realData='';
  
    req.on('data', (buffer)=>{
      realData += decoder.write(buffer);
  
    });
    req.on('end', ()=>{
      realData += decoder.end();
      console.log(realData);
      res.end(realData);
    });
  
  
  };

 module.exports = handler;