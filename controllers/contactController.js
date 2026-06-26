const Contact = require("../models/Contact");
const axios = require("axios");

const createContact = async (req, res) => {
  try {
    // Save in MongoDB
    const contact = await Contact.create(req.body);

    // Send Email using Brevo API
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Mohsin Portfolio",
          email: process.env.RECEIVER_EMAIL,
        },
        to: [
          {
            email: process.env.RECEIVER_EMAIL,
            name: "Mohsin",
          },
        ],
        subject: "New Portfolio Contact Message",
        htmlContent: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${req.body.name}</p>

          <p><strong>Email:</strong> ${req.body.email}</p>

          <p><strong>Message:</strong></p>

          <p>${req.body.message}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.log(
      error.response ? error.response.data : error.message
    );

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