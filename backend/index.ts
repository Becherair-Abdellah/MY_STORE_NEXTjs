import express from "express";
const server = express()

server.get('/',(req:any,res:any)=>{
    res.send('hello world')
})





server.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })
