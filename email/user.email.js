const nodemailer=require('nodemailer');
module.exports.sendEmail=async(options)=>{


let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"abumhamaddweikat@gmail.com",
        pass:"nymvkarflcjoaylo",
    },
});

  transporter.sendMail({
    from: '"Ehab Dweikat" <abumhamaddweikat@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "node ✔", // Subject line
    text: "Hello world im ehab dweikat?", // plain text body
    html: `
    <div style="background:teal;color:#fff">
    <h1>${options.message}</h1>
       <a href="http://localhost:3000/users/verify/${options.token}">verfiy your email</a>
       </div>
    `, // html body
    //verify
  },(err,info)=>{
    if(err){console.log(err);}
    else{
        console.log(info);
    }
  });
}