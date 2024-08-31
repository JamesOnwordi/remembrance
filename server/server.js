const express = require('express')
const app = express()

const mongoose = require('mongoose')

// mongoose.connect()



// starts Server
const PORT = 3030

app.listen(PORT,()=>{
    console.log("PORT",PORT , "is live and running 🤷‍♂️")
})