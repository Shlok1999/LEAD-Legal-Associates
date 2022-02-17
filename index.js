const express = require('express')
require("dotenv").config()
const app = express()
let port = process.env.PORT || 3020

//Middleware
const path = '/home/oem/Desktop/LEAD/public'
app.use(express.static(path))

app.get("/", (req, res)=>{
    res.send("Home Page")
})
app.get("/about", (req, res)=>{
    res.send("About")
})
app.get("/services", (req, res)=>{
    res.send("Services")
})
app.get("/contact", (req, res)=>{
    res.send("Contact")
})
app.get("/subscribe", (req, res)=>{
    res.send("Subscribe")
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})