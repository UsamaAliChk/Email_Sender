let nodemailer = require('nodemailer');



const sendEmail=async(data)=>{ 
    
    console.log(data);
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chakwal.is.city@gmail.com',
          pass: 'usama@1234'
        }
      });
      
      let mailOptions = {
        from: 'samways@gmail.com',
        to: 'ua63510@gmail.com',
        subject: 'SUBJECT',
        html:'<p style="color:red">Hello World</p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
} 

module.exports=sendEmail
