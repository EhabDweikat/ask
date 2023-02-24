const userModel=require('./../models/user.models');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
const{sendEmail}=require('../email/user.email');

module.exports.signUp=async(req,res)=>{
   
    const{name,age,email,password}=req.body;
      const user =await userModel.findOne({email});
      if (user){
        res.json({message:' email is already exist'});
      } else{
        bcrypt.hash(password,4,async(err,hash)=>{
            await userModel.insertMany({name,age,email,password:hash});
            let token=jwt.sign({email},'verfiyEmail')
            sendEmail({email,token,message:'hellow'});
            res.json({message:' Sucsess'});
        });
      }
 
}

module.exports.signIn= async(req,res)=>{
    const{email,password}=req.body;
    let user =await userModel.findOne({email});
    if(user){
        const match =await bcrypt.compare(password,user.password)
        if(match){
        let token =jwt.sign({userId:user._id,name:user.name,emailconfirm:user.emailconfirm},'knolodge@@123NodeSaraha');
        if(user.emailconfirm==true){
            res.json({message:' Wellcome you are login',token});

        

        } else {
            res.json({message:'verfiy your email'});
        }
    
}
    else{
        res.json({message:'Account not exists'});

    }

}
}

module.exports.emailVerify=async(req,res)=>{
    const {token}=req.params;
    jwt.verify(token,'verfiyEmail',async(err,decoded)=>{
        if (err){res.json(err);}
      else{
        let user =await userModel.findOne({email:decoded.email});
        if(user){
            await userModel.findOneAndUpdate({email:decoded.email},{emailconfirm:true});
            res.json({message:'donee'});

        }else{
            res.json({message:'not on confirm email'});
        }
      }
    })
}
