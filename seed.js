const mongoose = require("mongoose");
const Song = require("./models/Song");
require("dotenv").config();

const songs = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    lyrics: `The club isn't the best place to find a lover
So the bar is where I go...
[Add full lyrics here]`,
    chords: {
      guitar: "Am F C G",
      ukulele: "Am F C G",
      piano: "A C E",
    },
  },
  {
    title: "Señorita",
    artist: "Shawn Mendes & Camila Cabello",
    lyrics: `I love it when you call me señorita
I wish I could pretend I didn't need ya
But every touch is ooh-la-la-la
It's true, la-la-la
Ooh, I should be runnin'
Ooh, you keep me coming for ya

[Verse 1: Shawn Mendes]
Land in Miami
The air was hot from summer rain
Sweat drippin' off me
Before I even knew her name, la-la-la
It felt like ooh-la-la-la, yeah, no
Sapphire moonlight
We danced for hours in the sand
Tequila Sunrise
Her body fit right in my hands, la-la-la
It felt like ooh-la-la-la, yeah

[Chorus: Camila Cabello & Shawn Mendes, Camila Cabello]
I love it when you call me señorita
I wish I could pretend I didn't need ya
But every touch is ooh-la-la-la
It's true, la-la-la
Ooh, I should be runnin'
Ooh, you know I love it when you call me señorita
I wish it wasn't so damn hard to leave ya
But every touch is ooh-la-la-la
It's true, la-la-la
Ooh, I should be runnin'
Ooh, you keep me coming for ya

[Verse 2: Camila Cabello, Camila Cabello & Shawn Mendes]
Locked in the hotel
There's just some things that never change
You say we're just friends
But friends don't know the way you taste, la-la-la (La, la, la)
'Cause you know it's been a long time coming
Don't ya let me fall, oh
Ooh, when your lips undress me, hooked on your tongue
Ooh, love, your kiss is deadly, don't stop

[Chorus: Both, Camila Cabello & Shawn Mendes]
I love it when you call me señorita
I wish I could pretend I didn't need ya
But every touch is ooh-la-la-la
It's true, la-la-la
Ooh, I should be runnin'
Ooh, you know I love it when you call me señorita
I wish it wasn't so damn hard to leave ya (So damn hard to leave ya)
But every touch is ooh-la-la-la
It's true, la-la-la (True la-la)
Ooh, I should be runnin'
Ooh, you keep me coming for ya

[Outro: Both, Shawn Mendes & Camila Cabello]
All along, I've been coming for ya (For you)
And I hope it meant something to you (Oh)
Call my name, I'll be coming for ya (Coming for you)
Coming for ya (Coming for you)
For ya
For ya (Oh, she loves it when I call)
For ya
Ooh, I should be runnin'
Ooh, you keep me coming for ya`,
    chords: {
      guitar: "Am C G D",
      ukulele: "Am C G D",
      piano: "A C E",
    },
  },
  {
    title: "Friends",
    artist: "Anne-Marie & Marshmello",
    lyrics: `You say you love me, I say you're crazy...
[Add full lyrics here]`,
    chords: {
      guitar: "C G Am F",
      ukulele: "C G Am F",
      piano: "C E G",
    },
  },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    Song.insertMany(songs)
      .then(() => {
        console.log("Songs added to DB");
        mongoose.connection.close();
      })
      .catch((err) => console.error("Error adding songs", err));
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
