const express = require("express");
const Song = require("../models/Song");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

// Search for songs by title or artist
router.get("/", async (req, res) => {
  const { q } = req.query;
  try {
    const filter = q
      ? {
          $or: [
            { title: { $regex: q, $options: "i" } },
            { artist: { $regex: q, $options: "i" } },
          ],
        }
      : {};
    const songs = await Song.find(filter);
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single song by ID
router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: "Song not found" });

    res.json({
      title: song.title,
      artist: song.artist,
      lyrics: song.lyrics,
      chords: song.chords, // Ensures chords are included
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get song chords separately
router.get("/:id/chords", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: "Song not found" });

    res.json(song.chords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
