const express = require('express')
require("dotenv").config()
const app = express()
let port = process.env.PORT || 3020

//Middleware
const path = '/home/oem/Desktop/LEAD/public'
app.use(express.static(path))

app.get("/", (req, res)=>{
    res.sendfile("index.html")
})
app.get("/about", (req, res)=>{
    res.sendfile("about.html")
})
app.get("/services", (req, res)=>{
    res.sendfile("services.html")
})
app.get("/contact", (req, res)=>{
    res.sendfile("contact.html")
})
app.get("/subscribe", (req, res)=>{
    res.sendfile("subscribe.html")
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})