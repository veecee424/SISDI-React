// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

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
app.get('/contact', (req, res) => res.render('contact'));
app.get('/programs', (req, res) => {res.render('programs')});

// Contact form POST
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Option 1: Save to database (optional)
  // Option 2: Send email (using Nodemailer)
  // For now, we can just redirect to thank you page or back
  console.log('Contact Form Submission:', req.body);
  res.send('Thank you for contacting us! We will get back to you shortly.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});