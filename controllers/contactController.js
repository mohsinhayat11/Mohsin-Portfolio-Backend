const Contact = require("../models/Contact");
const brevo = require("@getbrevo/brevo");

const createContact = async (req, res) => {
  try {
    // Save in MongoDB
    const contact = await Contact.create(req.body);

    // Email Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });   

    // Send Email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Portfolio Contact Message",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${req.body.name}</p>

        <p><strong>Email:</strong> ${req.body.email}</p>

        <p><strong>Message:</strong></p>

        <p>${req.body.message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
};