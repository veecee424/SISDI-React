// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const { body, validationResult } = require('express-validator');
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const nodemailer = require("nodemailer");


// Serve the React build (for production). The build output is in /build
// Place build static middleware before public/assets so build/index.html and
// static bundles are not masked by files in `public`.
app.use(express.static(path.join(__dirname, 'build')));

// Serve legacy public assets (CSS, images, JS) after build so they remain available
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

const allowedOrigins = (process.env.CLIENT_ORIGINS || 'http://localhost:3000').split(',').map(o => o.trim()).filter(Boolean);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowAll = allowedOrigins.includes('*');

  if (origin && (allowAll || allowedOrigins.includes(origin))) {
    res.header('Access-Control-Allow-Origin', origin);
  } else if (!origin && allowAll) {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// POST Contact Form (API)
app.post(
  '/api/contact',
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
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
      const useSecure = String(process.env.EMAIL_SECURE || '').toLowerCase() === 'true';
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: useSecure,
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

      return res.json({ success: true });

    } catch (err) {
      console.error('Failed to send contact email', err);
      return res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
    }
  }
);

// For any other GET request, serve React's index.html so React Router can handle routing
// Serve index.html for all non-API GET requests, but ensure it's not cached by browsers
app.get(/.*/, (req, res) => {
  const indexPath = path.join(__dirname, 'build', 'index.html');

  // Prevent browsers (and intermediate caches) from caching index.html so clients
  // always fetch the latest entrypoint. Static assets in /static are fingerprinted
  // and can be cached long-term by browsers.
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');

  res.sendFile(indexPath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});