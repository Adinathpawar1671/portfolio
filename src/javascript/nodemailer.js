require('dotenv').config();

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
app.use(cors());

const email = process.env.GMAIL;
const pass = process.env.APP_PASSWORD;
app.use(express.json());



const transpoter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user : email,
        pass: pass
    }

});

app.post('/api/contact', (req, res)=>{
    const { name, email, subject, message } = req.body;
    const mailOption = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: subject,
        text: `From: ${name} (${email})\n\nwork : ${subject}\nMessage:${message}`
    };

    transpoter.sendMail(mailOption,function(err, info){
    if(err){
        // console.log(err);

    }else{
        // console.log(info.response);
    }
});

})

app.listen(8080, (err)=>{
    if(!err){
        return console.log('Connection Successfull');
    }
        console.log('Connection failed');
});

