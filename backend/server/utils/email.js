const nodemailer = require('nodemailer');

const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'profinfo.central1@gmail.com', 
      pass: 'profinfo.central@2'  
    }
  });


  const mailOptions = {
    from: 'CentralisedProjectIntegration Team <champ12bro@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
