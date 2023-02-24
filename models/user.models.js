const mongoose=require("mongoose");

const schema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    emailconfirm:{
        type:Boolean,
        default:false,
    }

});

module.exports=mongoose.model('user',schema);