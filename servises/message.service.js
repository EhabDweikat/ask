const msgModel=require('./../models/message.models');

module.exports.addMessage=async(req,res)=>{
    const{message,userId}=req.body;
    await msgModel.insertMany({message,userId});
    res.json({message:'Success'});
}

module.exports.getMessage=async(req,res)=>{
   
let messages=  await msgModel.find({userId:req.id},{message:1,_id:0});

res.json({messages:'OK Tis is the message',messages});
}