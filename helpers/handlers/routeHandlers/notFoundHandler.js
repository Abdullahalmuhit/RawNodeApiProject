/*
 * Filename: /home/muhid/RawNodeApiProject/helpers/handlers/routeHandlers/notFoundHandler.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Friday, July 1st 2022, 11:37:59 am
 * Author: Muhid
 * 
 * Copyright (c) 2022 Your Company
 */
const handler={
    
}

handler.notFoundHandler =  (requestProperties, callback) =>{
    console.log(requestProperties);
    callback(404, {
        message: 'Requested url not found'
    });

}

module.exports = handler;