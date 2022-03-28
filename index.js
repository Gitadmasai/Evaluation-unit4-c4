const { send, append } = require("express/lib/response")
const user = require("../models/user")

const router = require("express").Router()


// router will be here ....

router.get("/todo", (req, res) =>{
    res.send("welcome to the home")

})


router.get("/todos/:id", (req, res) =>{
    res.send("welcome to the home")

})


app.post("/register",(req,res) => {
    const register = {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
    }


    user.push(register)
    res.send("Please register")
})



app.post("/login",(req,res) => {
    const login = {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
    }


    user.push(login)
    res.send("Please register")
})


app.post("/todos",(req,res) =>{
    const todoes={
        title:{type:String,required:true},
        modelId:{type:mongoose.Schema.Types.ObjectId,ref:"userSchema",required:true,},
    }
    todo.push(todoes)
})


module.exports=router;