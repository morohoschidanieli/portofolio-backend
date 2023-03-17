const transporter = require("../transporter/index");
const notificationPageHtml = require("./notificationPageHtml");
const customerPageHtml = require("./customerPageHtml");

const sendCustomerEmail = (to, name) => {
  const sendEmailPromise = new Promise((resolve, reject) => {
    transporter
      .sendMail({
        from: `Daniel-Iosif Morohoschi <danieliosifportofolio@gmail.com>`,
        to: to,
        subject: "Thank you for getting in touch!",
        text: "Thank you for getting in touch!",
        html: customerPageHtml(name),
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
            filename: "logo.svg",
            path:
              __dirname.split("/").slice(0, -1).join("/") + "/assets/logo.svg",
            cid: "logo",
          },
        ],
      })
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
  return sendEmailPromise;
};
const sendNotificationEmail = (name, subject, email, phone, content, type) => {
  const sendEmailPromise = new Promise((resolve, reject) => {
    transporter
      .sendMail({
        from: `${name} <danieliosifportofolio@gmail.com>`,
        to: "morohoschidanieliosif@gmail.com",
        subject: subject,
        text: subject,
        html:
          type === "customer"
            ? customerPageHtml()
            : notificationPageHtml(subject, email, phone, content),
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
            filename: "logo.svg",
            path:
              __dirname.split("/").slice(0, -1).join("/") + "/assets/logo.svg",
            cid: "logo",
          },
        ],
      })
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
  return sendEmailPromise;
};

module.exports = { sendNotificationEmail, sendCustomerEmail };
