const express = require('express');
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const app = express();
require('dotenv').config();

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const port = process.env.PORT;
app.use(express.json());
app.use('/users',require('./api/user.api'));
app.use('/messages',require('./api/message.api'));
mongoose.connect("mongodb+srv://ehab:ehab55@cluster0.wfx3dio.mongodb.net/app");
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
