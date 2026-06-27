# 🚀 Mohsin Portfolio Backend

A secure and scalable backend for the **Mohsin Portfolio** project built with **Node.js**, **Express.js**, and **MongoDB Atlas**. It provides REST APIs for contact form submission, secure admin authentication using JWT, and contact message management.

---

## 🌐 Frontend Repository

https://github.com/mohsinhayat11/Mohsin-Portfolio

## 🌐 Live Portfolio

https://mohsin-portfolio-three.vercel.app/

---

## ✨ Features

- Secure REST API
- Contact Form API
- MongoDB Atlas Integration
- JWT Authentication
- Protected Admin Routes
- Contact Message Management
- Delete Messages
- Brevo Email Notifications
- Environment Variables
- CORS Configuration
- Error Handling

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Brevo Email API
- dotenv
- CORS

---

## 📂 Project Structure

```text
backend
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── utils
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📡 API Endpoints

### Contact

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/contact` | Send Contact Message |
| GET | `/api/contact` | Get All Messages (Protected) |
| DELETE | `/api/contact/:id` | Delete Message (Protected) |

---

### Admin

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/admin/login` | Admin Login |

---

## 🔐 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📩 Email Service

The backend uses **Brevo Email API** to send email notifications whenever a visitor submits the contact form.

---

## 🗄 Database

MongoDB Atlas is used to store:

- Contact Messages
- Admin Account

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=3000

MONGODB_URI=YOUR_MONGODB_CONNECTION

JWT_SECRET=YOUR_SECRET_KEY

BREVO_API_KEY=YOUR_BREVO_KEY

ADMIN_EMAIL=YOUR_EMAIL

ADMIN_PASSWORD=YOUR_PASSWORD
```

---

## ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/mohsinhayat11/Mohsin-Portfolio-Backend.git
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

or

```bash
node app.js
```

## 🚀 Deployment

Backend is deployed on **Render**.

Frontend communicates with the backend through environment variables.

---

## 👨‍💻 Author

**Mohsin Hayat**

GitHub:
https://github.com/mohsinhayat11

Portfolio:
https://mohsin-portfolio-three.vercel.app/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.