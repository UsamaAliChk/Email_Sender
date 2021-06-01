let nodemailer = require('nodemailer');



const sendEmail=async(data)=>{ 
    
    console.log(data);
    
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'chakwal.is.city@gmail.com',
    //       pass: 'yourpassword'
    //     }
    //   });
      
    //   let mailOptions = {
    //     from: 'chakwal.is.city@gmail.com',
    //     to: 'ua63510@gmail.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    //   };
      
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
  
} 

module.exports=sendEmail
