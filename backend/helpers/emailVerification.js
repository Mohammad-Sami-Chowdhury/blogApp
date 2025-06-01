const nodemailer = require("nodemailer");
async function emailVerification(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohammadsami.cit.bd@gmail.com",
      pass: "renf oftv fxef yauw",
    },
  });
  const info = await transporter.sendMail({
    from: '"QuickBlog" <mohammadsami.cit.bd@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Otp Form QuickBlog", // Subject line
    text: `"Hello world? This is your OTP" ${otp}`, // plain text body
  });
}
module.exports = emailVerification;
