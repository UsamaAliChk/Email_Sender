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
        subject: 'SUBJECT',
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
                    font-size: 24px;
                }
                .message{
                    margin-left: 24px;
                }
        
            </style>
        </head>
        <body>
         
            <div class="main">
               <h1 class="title">Hi Usama here</h1>
               <p class="message">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eaque qui, repellat quas voluptatem adipisci ut! Consequatur veniam facilis labore, neque impedit harum. Harum eligendi aperiam laudantium, non quidem perferendis.</p>
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
