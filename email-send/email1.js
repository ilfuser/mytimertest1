//```javascript
const nodemailer = require('nodemailer');

const reciever = 'zvvv21@mail.ru';
const subject = 'TRUMP.RU Plugin Error';
const emailBody = 'BODY OF EMAIL';
const senderName = 'Service Name';
const emailName = 'automailer@internet.ru'
const emailPass = 'CDnCsqjxFqXbGXMNhRCc';
const emailHost = 'smtp.mail.ru';
const emailPort = 465;
const isSecure = emailPort === 465 ? true : false;

sendEmail(reciever, subject, emailBody);

async function sendEmail(to, subject, html) {
  let transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: isSecure,
    auth: {
      user: emailName,
      pass: emailPass
    }
  });

  //console.log(transporter.options);

  let info = await transporter.sendMail({
    from: `"${senderName}" <${emailName}>`,
    to,
    subject,
    html
  });

  console.log('Message sent: %s', info.messageId);
}
//```