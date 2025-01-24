const nodemailer =require('nodemailer');
// import { render } from '@react-email/render';
// import WelcomeEmail from './email';
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const name="EMAil it"

const transporter = nodemailer.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:'465',
        auth:{
            user:'aurora.istemanipal@gmail.com',
            pass:process.env.PASSWORD
        }
    }
)

async function sendMail(to,subject,message){
    try {
        // const htmlContent = await render(<WelcomeEmail name={name} />);

        await transporter.sendMail({
            from:'gotomail.cc@gmail.com',
            to:to,
            subject:subject,
            html:message,
        })

        console.log('Email Sent Successfully');
       
        
    } catch (error) {
        console.log(`Email Sent:${error}`);
    }
  
}


module.exports = { sendMail };
