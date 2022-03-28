const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    modelId:{type:mongoose.Schema.Types.ObjectId,ref:"userSchema",required:true,},

});

module.exports=new mongoose.model("Todo", TodoSchema)