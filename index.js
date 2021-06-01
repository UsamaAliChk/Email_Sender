const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const http=require('http');
const https=require('https');

const sendEmail =require('./Routes/Send_Email');

const app=express();

var privateKey  = fs.readFileSync('cert/private.key');
var certificate = fs.readFileSync('cert/certificate.crt');
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(5000,(err)=>{
  if(err) console.log(err)
  else console.log("http server is connected")
});
httpsServer.listen(3000,(err)=>{
  if(err) console.log(err)
  else console.log("https server is connected")
});





app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))



app.use("/sendEmail",sendEmail);

app.get("/", (req, res) => {
  res.send("Hello From Node Mailer APP")
});

