const mail = require("../utils/mail");

const sendEmail = async (req, res) => {
  const { name, content, email } = req.body;
  
  if (name === undefined || content === undefined || email === undefined)
    return res.status(500).json("error");

  if (name.length === 0 || content.length === 0 || email.length === 0)
    return res.status(500).json("error");

  try {
    await mail.sendNotificationEmail(name, email, content);
    await mail.sendCustomerEmail(email, name);
    return res.status(200).json({ message: "Email sent" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { sendEmail };
