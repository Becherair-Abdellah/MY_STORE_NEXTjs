import express from "express";
const server = express()

var cors = require('cors')
server.use(cors())

//using file .env
require("dotenv").config();


import bodyParser from "body-parser";
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");


server.use("/", userRoutes);
server.use("/", adminRoutes);




server.get('/',(req:any,res:any)=>{
    res.send('hello world')
})





server.listen(5500, () => {
    console.log(`Example app listening at http://localhost:5500`);
  })
