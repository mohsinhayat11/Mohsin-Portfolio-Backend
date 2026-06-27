require("dotenv").config();

const mongoose = require("mongoose");
const dns = require("dns");

// Force Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        family: 4,
        serverSelectionTimeoutMS: 10000,
    });

    const existingAdmin = await Admin.findOne({
      email: "mohsinmalak745@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "Pakistan@mohsin12",
      10
    );

    await Admin.create({
      email: "mohsinmalak745@gmail.com",
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully.");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();