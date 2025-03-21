const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const songRoutes = require('./routes/songRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(cors());
// ✅ Corrected CORS configuration (single-use)
// app.use(cors({
//   origin: 'https://melody-connect.netlify.app', // Allow only your frontend domain
//   methods: 'GET,POST,PUT,DELETE',
//   credentials: true
// }));
app.use(cors({
  origin: '*'
}));

app.use(express.json());

// Static files middleware ✅
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/songs', songRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Lyrics Translator API');
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
