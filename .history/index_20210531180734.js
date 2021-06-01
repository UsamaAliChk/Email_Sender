const express=require('express');
const bodyParser=require('body-parser');

const sendEmail =require('./Routes/Send_Email');

const app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))


const port = process.env.PORT || 5000;

app.use("/sendEmail",sendEmail);

app.get("/", (req, res) => {
  res.send("Hello From Node Mailer APP")
});


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));