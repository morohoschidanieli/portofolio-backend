const mail = require("../utils/mail");

const sendEmail = async (req, res) => {
  const { firstName, lastName, subject, content, email, phone } = req.body;

  try {
    await mail.sendNotificationEmail(
      firstName,
      lastName,
      subject,
      email,
      phone,
      content
    );
    await mail.sendCustomerEmail(email, firstName, lastName);
    return res.status(200).json({ message: "Email sent" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { sendEmail };
