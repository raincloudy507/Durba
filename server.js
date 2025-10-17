// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');


// Front end & Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  // Here you can add code to process the form data, e.g., send an email.
  // res.send('success');
  const transporter = nodemailer.createTransport({service: 'gmail', auth: {user: 'parthopoddar@gmail.com', pass: 'zbey lagt rtub iuhh'}});
  
  const mailOptions = {
    from: req.body.email,
    to: 'parthopoddar@gmail.com',
    subject: 'Durba Website Contact Form: ' + req.body.subject,
    text: 'From: ' + req.body.name + '\nPhone: ' + req.body.phone + '\nEmail: ' + req.body.email + '\n\n Message : ' + req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});