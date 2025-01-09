const nodemailer =require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const transporter = nodemailer.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:'465',
        auth:{
            user:'gotomail.cc@gmail.com',
            pass:process.env.PASSWORD
        }
    }
)

async function sendMail(to,subject,message){
    try {
        await transporter.sendMail({
            to:to,
            subject:subject,
            html:message,
        })
        console.log('Email Sent:');
       
        
    } catch (error) {
        console.log('Email Sent:error', error.messag);
    }
  
}
module.exports = { sendMail };