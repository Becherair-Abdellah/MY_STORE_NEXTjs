import express from "express";
const server = express()

//using file .env
require("dotenv").config();


import bodyParser from "body-parser";
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

const userRoutes = require("./routes/users");

server.use("/", userRoutes);



server.get('/',(req:any,res:any)=>{
    res.send('hello world')
})





server.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })
