const {addMessage,getMessage}=require('../servises/message.service');
const{auth}= require('../middleware/auth');
const app=require('express').Router();
app.post('/',addMessage);
app.post('/',auth,getMessage);

module.exports=app;