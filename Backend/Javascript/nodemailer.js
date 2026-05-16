require('dotenv').config();

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

const allowedOrigins = [
    "http://localhost:5173",
    "https://portfolio-psi-nine-6kpkngm17i.vercel.app",
    "https://portfolio-psi-nine-6kpkngm17i.vercel.app/"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        } else {
            return callback(new Error('Not allowed by CORS'), false);
        }
    },
    methods: ['POST', 'OPTIONS'],
    credentials: true
}));

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
    console.log(name);
    const mailOption = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: subject,
        text: `From: ${name} (${email})\n\nwork : ${subject}\nMessage:${message}`
    };

    transpoter.sendMail(mailOption,function(err, info){
    if(err){
        return res.status(500).json({ error: "Failed to send email." });
    }else{
        return res.status(200).json({ message: "Email sent successfully!" });
    }
});

})

app.listen(8080, (err)=>{
    if(!err){
        return console.log('Connection Successfull');
    }
        console.log('Connection failed');
});

