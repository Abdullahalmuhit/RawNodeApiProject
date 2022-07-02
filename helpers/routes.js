/*
 * Filename: /home/muhid/RawNodeApiProject/helpers/routes.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Friday, July 1st 2022, 11:22:54 am
 * Author: Muhid
 * 
 * Copyright (c) 2022 Your Company
 */

const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')
const { testHandler } = require('./handlers/routeHandlers/testHandler');

const routes={
    sample : sampleHandler,
    test : testHandler,
}

module.exports=routes;