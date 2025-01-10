require('dotenv').config();
console.log(process.env.RESEND_API_KEY); // Should display your key
console.log(process.env.EMAIL); 
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail() {
  try {
    await resend.emails.send({
      from: process.env.EMAIL, 
      to: "gotomail.cc@gmail.com",
      subject: 'Hello from Resend!',
      html: '<h1>This is a test email</h1><p>Using Resend in Node.js</p>',
    });
    console.log('Email sent:');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
