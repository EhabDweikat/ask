const Joi=require('joi');
const methods=['body'];
const schema={
    body:Joi.object({
        name:Joi.string().min(4).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().required(),
        repassword:Joi.ref('password'),
        age:Joi.number().min(3).max(20).required(),
    }),
    

}

module.exports.userValidation=(req,res,next)=>{ 
    let msgERR=[];
    methods.map((key)=>{
        const {error}=schema[key].validate(req[key],{abortEarly:false});
        if(error){
            error.details.map((ele)=>{
                msgERR.push(ele.message);
            });
        }
    })

    if (msgERR.length>0){
        res.json(msgERR);
    }else{
        next();
    }
}