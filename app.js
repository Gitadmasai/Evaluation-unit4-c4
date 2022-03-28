const express = require("express")
const mongoose = require("mongoose")


const app=express()

//connection to mongobd
mongoose.connect("mongodb:/localhost/todo_express",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//middlewares
app.use(express.urlencoded({extended:true}))





//server config
app.listen(3000, () => console.log("server started listening on port: 3000"))