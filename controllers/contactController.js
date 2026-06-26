const Contact = require("../models/Contact");
const axios = require("axios");

const createContact = async (req, res) => {
  try {
    console.log("========== NEW REQUEST ==========");
    console.log("Request Body:", req.body);

    // Save in MongoDB
    const contact = await Contact.create(req.body);

    console.log("✅ Saved Contact:");
    console.log(contact);

    // Send Email using Brevo API
    const emailResponse = await axios.post(
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

    console.log("✅ Email Sent Successfully");
    console.log(emailResponse.data);

    res.status(201).json({
      success: true,
      contact,
    });

  } catch (error) {
    console.log("❌ ERROR OCCURRED");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }

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
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
};