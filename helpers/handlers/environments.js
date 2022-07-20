/*
 * Filename: /home/muhid/RawNodeApiProject/helpers/handlers/environments.js
 * Path: /home/muhid/RawNodeApiProject
 * Created Date: Monday, July 4th 2022, 9:37:37 am
 * Author: Muhid
 * 
 * Copyright (c) 2022 Your Company
 */
const environments = {}

environments.staging = {
    port:3001,
    envName: 'staging'
}
environments.production = {
    port:5000,
    envName: 'production'
}

// check environment

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV
: 'staging';

//enport corresponding environment object

const environmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment]
: environments.staging;

module.exports = environmentToExport; 