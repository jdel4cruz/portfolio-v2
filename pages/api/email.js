const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const OAuth2_client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);

OAuth2_client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export default function handler(req, res) {
  if (req.method === "POST") {
    const accessToken = OAuth2_client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.BURNER_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: process.env.BURNER_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Someone has contacted you through your portfolio site!",
      html: htmlMessage(req.body),
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ response: `Email failed to send` });
      }
      console.log(`Email sent: ${info.messageId}`);
      return res.status(200).send({ response: `Email was successfully sent!` });
    });
  } else {
    res.send("Sorry the only requests this endpoint takes are POST requests!");
  }
}

const htmlMessage = (contactInfo) => {
  return `
    <h3>Name: ${contactInfo.name}</h3>
    <h3>Email: ${contactInfo.email}</h3>
    <h3>Message:</h3>
    <p>${contactInfo.message}</p>
    `;
};
