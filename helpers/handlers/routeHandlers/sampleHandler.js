/*
 * Filename: /home/muhid/RawNodeApiProject/helpers/handlers/routeHandlers/sampleHandler.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Friday, July 1st 2022, 11:24:52 am
 * Author: Muhid
 * 
 * Copyright (c) 2022 Your Company
 */
const handler={
    
}

handler.sampleHandler = (requestProperties, callback) =>{
    console.log(requestProperties);
    callback(200, {
        message: 'This is sample handler'
    });

}

module.exports = handler;