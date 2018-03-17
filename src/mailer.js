
const mailer = require('nodemailer');
const smtpTransport = mailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'teamfilmable@gmail.com', // Your email id
    pass: 'filmable@88', // Your password
  },
});

let mailOptions = {
  from: 'teamfilmable@gmail.com',
  to: 'kranthikiranroy@gmail.com',
  subject: 'New Filmable Subscriber',
  generateTextFromHTML: true,
  html: '<b> Hi req.body.name </b><br> Email: req.body.emailId <br> <br> Thanks for Subscribing us!. <br> <br> <br> Regards, <br> Team FilmAble',
}

smtpTransport.sendMail(mailOptions, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  smtpTransport.close();
});
