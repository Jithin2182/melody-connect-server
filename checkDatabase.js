const mongoose = require("mongoose");
const Song = require("./models/Song");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const checkData = async () => {
  try {
    const songs = await Song.find();
    console.log("Fetched Songs from Database:", songs); // Check if chords are stored properly
    mongoose.connection.close();
  } catch (error) {
    console.error("Error fetching songs:", error);
    mongoose.connection.close();
  }
};

checkData();
