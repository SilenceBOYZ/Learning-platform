const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    // user: process.env.NODEMAILER_USERNAME, // generated ethereal user
    // pass: process.env.NODEMAILER_USERPASS // generated ethereal password
    user: process.env.NODEMAILER_USEREMAIL,
    pass: process.env.NODEMAILER_USERPASS,
  },
  // debug:true,z
  // logger:true,
})

// transporter.verify().then(res => console.log("Server is ready to use")).catch(err => console.log(err))
// Test nodemailer bug
// sign in google to turn on 2 step authentication
// https://stackoverflow.com/questions/60701936/error-invalid-login-application-specific-password-required to manage 534-5.7.9 error

let sendEmail = async ({ to, subject, html, from = process.env.NODEMAILER_EMAILFROM }) => {
  await transporter.sendMail({ from, to, subject, html });
  console.log("Email sent sucessfully");
}

let sendPasswordResetEmail = async (email, resetToken, origin) => {
  let message;
  if (origin) {
    const resetUrl = `http://${origin}/v1/api/reset-password?token=${resetToken}&email=${email}`; 
    message = `<p>Please click the below link to reset your password, the following link will be valid for only 1 hour:</p>
               <p><a href="${resetUrl}">${resetUrl}</a></p>`;
  } else {
    message = `<p>Please use the below token to reset your password with the <code>/apiRouter/reset-password</code> api route:</p>
               <p><code>${resetToken}</code></p>`;
  }

  await sendEmail({
    from: process.env.NODEMAILER_EMAILFROM,
    to: email,
    subject: 'Reset your password',
    html: `<h4>Reset Password</h4>
    ${message}`
  })
}

module.exports = {
  sendPasswordResetEmail,
}
