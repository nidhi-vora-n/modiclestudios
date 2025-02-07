require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// CORS setup to allow requests from the frontend running on localhost:3000
app.use(cors({ origin: "http://localhost:3000", methods: ["POST"], allowedHeaders: ["Content-Type"] }));
app.use(express.json()); // Use express.json() instead of bodyParser

// Route to handle sending email
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  let mailOptions = {
    from: email,
    to: "yash@modiclestudios.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Attempt to send the email
  try {
    
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Add detailed error logging
    console.error("Error details:", error.message);
    console.error("Error stack:", error.stack);

    res.status(500).json({ error: "Error sending email", details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
