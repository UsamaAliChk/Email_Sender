const express=require('express');

const app=express();

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Hello From Node Mailer APP")
});


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));