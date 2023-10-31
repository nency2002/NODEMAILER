const express = require('express')
const app = express();
app.use(express.json());
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kotadiyanency7@gmail.com',
      pass: 'khwa hexq zarq btff'
    }
  });
  
  var mailOptions = {
    from: 'kotadiyanency7@gmail.com',
    // to: 'daksh1or2@gmail.com',
    to: 'rpkotadiya1917@gmail.com',
    subject: 'Node.js',
    text: 'hii'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    res.send("success in data");
  });

app.listen(8090, () => {
    console.log("listening on start server");
})