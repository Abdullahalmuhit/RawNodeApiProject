/*
 * Filename: /home/muhid/RawNodeApiProject/helpers/handlers/routeHandlers/testHandler.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Saturday, July 2nd 2022, 2:51:02 pm
 * Author: Muhid
 * 
 * Copyright (c) 2022 Your Company
 */

const handler={
    
}

handler.testHandler = (requestProperties, callback) =>{
    console.log(requestProperties);
    callback(200, {
        message: 'This is testHandler handler'
    });

}

module.exports = handler;