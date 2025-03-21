// server.js (backend)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const songRoutes = require('./routes/songRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Explicit CORS middleware for Vercel (Tested setup)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Additional explicit middleware to ensure headers are set:
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins temporarily
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/songs', songRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => res.send('Welcome to Lyrics Translator API'));

// Start server (for local testing)
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});