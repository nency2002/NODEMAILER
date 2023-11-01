const express = require('express')
const app = express();
app.use(express.json());
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:'kotadiyanency7@gmail.com',
    pass:'ensh gvim ydkw nfze'
  }
});

app.post("/reset", (req, res) => {
  const mailOptions = {
    from:'kotadiyanency7@gmail.com',
    to:req.body.to,
    subject:req.body.subject,
    text:req.body.text
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
    res.send(info);
  });
  
})

app.listen(8090, () => {
  console.log("listening on start server");
})
