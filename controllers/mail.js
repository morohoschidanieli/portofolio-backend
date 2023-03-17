const mail = require("../utils/mail");

const sendEmail = async (req, res) => {
  const { name, content, email } = req.body;

  try {
    await mail.sendNotificationEmail(name, email, content);
    await mail.sendCustomerEmail(email, name);
    return res.status(200).json({ message: "Email sent" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { sendEmail };
