// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const { body, validationResult } = require('express-validator');
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const nodemailer = require("nodemailer");


// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {res.render('home')});
app.get('/donate', (req, res) => {res.render('donate');});
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/impact', (req, res) => res.render('impact'));
app.get('/get-involved', (req, res) => res.render('getinvolved'));
app.get('/contact', (req, res) => {
  const success = req.query.success ? 'Message sent successfully!' : null;

  res.render('contact', {
    errors: false,
    success,
    formData: {},
  });
});
app.get('/programs', (req, res) => {res.render('programs')});

// POST Contact Form
app.post(
  '/contact',
  [
    body('name')
      .trim()
      .escape()
      .isLength({ min: 2 })
      .withMessage('Name must be at least 2 characters'),

    body('email')
      .normalizeEmail()
      .isEmail()
      .withMessage('Invalid email address'),

    body('subject')
      .trim()
      .escape()
      .isLength({ min: 3 })
      .withMessage('Subject is required'),

    body('message')
      .trim()
      .escape()
      .isLength({ min: 10 })
      .withMessage('Message must be at least 10 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('contact', {
        errors: errors.array(),
        success: null,
        formData: req.body,
      });
    }

    const { name, email, subject, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"SISDI Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New Contact: ${subject}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // SUCCESS
      return res.redirect('/contact?success=1');

    } catch (err) {
      res.render('contact', {
        errors: [{ msg: 'Failed to send message. Please try again later.' }],
        success: null,
      });
    }
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});