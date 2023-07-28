# 🚀 Backend for Sending Emails - My Portfolio Project 🚀

This repository contains the source code for the Node.js backend used in my portfolio project to send contact emails[https://wwww.danieliosifmorohoschi.com].

## 🌐 Description

The backend is built using Node.js and Express.js and provides an API endpoint for sending contact emails from users. When an HTTP POST request is made to the specific route, the user's contact details are collected, and an email is sent to my email address.

## 🔧 Setup

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository and navigate to the project directory.
3. Install the dependencies using the command: `npm install`.
4. Open the `.env` file and fill in the appropriate settings for the email service (SMTP_USER and SMTP_PASS).
5. Start the backend using the command: `npm run start`.
6. The backend will now be up and running, ready to receive email sending requests.

## 📨 Usage

To send a contact email, make an HTTP POST request to the `/mail/send` route with the following data in JSON format:
{
"name": "Your Name",
"email": "your.email@example.com",
"content": "Your message here"
}
