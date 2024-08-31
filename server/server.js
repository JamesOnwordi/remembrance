const express = require('express')
const app = express()

const mongoose = require('mongoose')

// mongoose.connect()

// 
const config = require('./config');

// Use the credentials from the config
console.log(config.oAuthClientID);
console.log(config.oAuthclientSecret);
console.log(config.apiEndpoint)


// starts Server
const PORT = 3030

app.listen(PORT,()=>{
    console.log("PORT",PORT , "is live and running 🤷‍♂️")
})