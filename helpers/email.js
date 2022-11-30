const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const sendEmail = async (options) => {
  // 1. Create a transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.TO_EMAIL,
      pass: process.env.TO_PASS,
    },

    // Active in gmail "less secure app" option
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./views'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
  };

  transporter.use('compile', hbs(handlebarOptions));

  // 2. Define the email option
  let mailOptions = {
    from: options.email,
    to: process.env.TO_EMAIL,
    subject: `${options.name} sent you a message`,
    template: 'email',
    context: {
      message: options.message || options.lastMessage,
    },
  };

  // 3.Actually send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error, 'error');
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
