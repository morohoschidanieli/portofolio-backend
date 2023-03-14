const transporter = require("../transporter/index");
const page = require("./emailPageHtml");

const sendEmail = (firstName, lastName, subject, email, phone, content) => {
  const sendEmailPromise = new Promise((resolve, reject) => {
    transporter
      .sendMail({
        from: `${firstName} ${lastName} <danieliosifportofolio@gmail.com>`,
        to: "morohoschidanieliosif@gmail.com",
        subject: subject,
        text: subject,
        html: page.emailPageHtml(subject, email, phone, content),
        attachments: [
          {
            filename: "image-1.png",
            path:
              __dirname.split("/").slice(0, -1).join("/") +
              "/assets/image-1.png",
            cid: "image-1",
          },
          {
            filename: "image-2.png",
            path:
              __dirname.split("/").slice(0, -1).join("/") +
              "/assets/image-2.png",
            cid: "image-2",
          },
          {
            filename: "image-3.png",
            path:
              __dirname.split("/").slice(0, -1).join("/") +
              "/assets/image-3.png",
            cid: "image-3",
          },
          {
            filename: "image-4.png",
            path:
              __dirname.split("/").slice(0, -1).join("/") +
              "/assets/image-4.png",
            cid: "image-4",
          },
          {
            filename: "image-5.png",
            path:
              __dirname.split("/").slice(0, -1).join("/") +
              "/assets/image-5.png",
            cid: "image-5",
          },
        ],
      })
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
  return sendEmailPromise;
};

module.exports = { sendEmail };
