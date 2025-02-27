require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();

// ✅ Setup CORS for React Frontend
app.use(cors({ origin: "http://localhost:3000", methods: ["POST"], allowedHeaders: ["Content-Type"] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Ensure the "uploads" directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Debugging: Test if the transporter is working
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter Error:", error);
  } else {
    console.log("Email transporter is ready to send emails!");
  }
});

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const mailOptions = {
    from: email,
    to: "nidhi.v@modiclestudios.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email", details: error.message });
  }
});



// ✅ Apply-Job Route (Handles Resume Upload & Email Sending)
app.post("/apply-job", upload.single("resume"), async (req, res) => {
  console.log("Received application request...");

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    console.log("Form Data:", { firstName, lastName, email, phone, message });

    if (!firstName || !lastName || !email || !message || !req.file) {
      return res.status(400).json({ error: "All fields and resume are required!" });
    }

    const resumePath = req.file.path;

    let mailOptions = {
      from: email,
      to: "nidhi.v@modiclestudios.com",
      subject: "New Career Application",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      attachments: [{ filename: req.file.originalname, path: resumePath }],
    };

    // ✅ Send Email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    // ✅ Delete file after sending email
    fs.unlinkSync(resumePath);

    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting application:", error);

    res.status(500).json({
      error: "Error submitting application",
      details: error.message,
    });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
