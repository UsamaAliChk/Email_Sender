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
        from: `${data.Email}`,
        to: 'ua63510@gmail.com',
        subject: `${data.Subject}`,
        html:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            
            <style>
                .main{
                    display: block;
                    width: 500px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .title{
                  font-size: 18px;
              }
              .message{
                  font-size: 14px;
              }
      
                
        
            </style>
        </head>
        <body>
         
            <div class="main">
               <h1 class="title">Hi ${data.Name} here</h1>
               <p class="message">${data.message}</p>
               <h1 class="title">Thank You</h1>
            </div>
          
        </body>
        </html>`
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
