const mongoose = require("mongoose");
const Song = require("./models/Song");
require("dotenv").config();

const songs = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    lyrics: `The club isn't the best place to find a lover
So the bar is where I go
Me and my friends at the table doing shots
Drinking fast and then we talk slow
Come over and start up a conversation with just me
And trust me I'll give it a chance now
Take my hand, stop, put Van the Man on the jukebox
And then we start to dance, and now I'm singing like
Girl, you know I want your love
Your love was handmade for somebody like me
Come on now, follow my lead
I may be crazy, don't mind me
Say, boy, let's not talk too much
Grab on my waist and put that body on me
Come on now, follow my lead
Come, come on now, follow my lead
I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
Every day discovering something brand new
I'm in love with the shape of you
One week in we let the story begin
We're going out on our first date
You and me are thrifty, so go all you can eat
Fill up your bag and I fill up a plate
We talk for hours and hours about the sweet and the sour
And how your family is doing okay
And leave and get in a taxi, then kiss in the backseat
Tell the driver make the radio play, and I'm singing like
Girl, you know I want your love
Your love was handmade for somebody like me
Come on now, follow my lead
I may be crazy, don't mind me
Say, boy, let's not talk too much
Grab on my waist and put that body on me
Come on now, follow my lead
Come, come on now, follow my lead
I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
Every day discovering something brand new
I'm in love with the shape of you
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Every day discovering something brand new
I'm in love with the shape of you`,
    chords: {
      guitar: `[Verse 1]
Bm                       Em                           G             A
The club isn't the best place to find a lover so the bar is where I go
Bm                       Em                           G                      A
Me and my friends at the table doing shots, drinking fast and then we talk slow
     Bm                         Em                      G                        A
Come over and start up a conversation with just me and trust me I'll give it a chance now
        Bm                      Em                      G                A
Take my hand, stop! Put Van the man on the jukebox and then we start to dance and now I'm singing 
like
 
 
[Pre-Chorus]
Bm               Em
Girl, you know I want your love
G                       A                Bm
Your love was handmade for somebody like me
             Em
Come on now, follow my lead
G               A
I may be crazy, don't mind me, say
Bm             Em
Boy, let's not talk too much
G                    A                Bm
Grab on my waist and put that body on me
             Em
Come on now, follow my lead
  G                      N.C.
Come—come on now, follow my lead
 
 
[Chorus]
Bm       Em                     G
  I'm in love with the shape of you
               A                 Bm
  We push and pull like a magnet do
              Em               G
  Although my heart is falling too
          A
  I'm in love with your body
Bm          Em                   G
  And last night you were in my room
             A                    Bm
  And now my bedsheets smell like you
                    Em                  G
  Every day discovering something brand new
               A
  Well I'm in love with your body
Bm Em G            A
(Oh I)      I'm in love with your body
Bm Em G            A
(Oh I)      I'm in love with your body
Bm Em G            A
(Oh I)      I'm in love with your body
Bm                  Em                   G
  Every day discovering something brand new
          A
  I'm in love with the shape of you
 
 
[Verse 2]
Bm                    Em
One week in we let the story begin
            G                A
We're going out on our first date
            Bm                  Em
But you and me are thrifty so go all you can eat
             G                   A
Fill up your bag and I fill up a plate
            Bm                        Em
We talk for hours and hours about the sweet and the sour
             G                A
And how your family is doin' okay
              Bm                Em
And leave and get in a taxi, we kiss in the backseat
          G                     A
Tell the driver make the radio play, and I'm singing like
 
 
[Pre-Chorus]
Bm               Em
Girl, you know I want your love
G                       A                Bm
Your love was handmade for somebody like me
             Em
Come on now, follow my lead
G               A
I may be crazy, don't mind me, say
Bm             Em
Boy, let's not talk too much
G                    A                Bm
Grab on my waist and put that body on me
             Em
Come on now, follow my lead
  G                      N.C.
Come—come on now, follow my lead
 
 
[Chorus]
Bm       Em                     G
  I'm in love with the shape of you
               A                 Bm
  We push and pull like a magnet do
               Em              G
  Although my heart is falling too
          A                 Bm
  I'm in love with your body
           Em                   G
  And last night you were in my room
             A                    Bm
  And now my bedsheets smell like you
                    Em                  G
  Every day discovering something brand new
               A                 Bm
  Well I'm in love with your body
Bm Em G            A
(Oh I)      I'm in love with your body
Bm Em G            A
(Oh I)      I'm in love with your body
Bm Em G            A
(Oh I)      I'm in love with your body
Bm                  Em                   G
  Every day discovering something brand new
          A
  I'm in love with the shape of you
 
 
[Bridge]
N.C.
  Come on, be my baby, come on
N.C.
  Come on, be my baby, come on
N.C.
  Come on, be my baby, come on
N.C.
  Come on, be my baby, come on
Bm               Em
  Come on, be my baby, come on
G                A
  Come on, be my baby, come on
Bm               Em
  Come on, be my baby, come on
G                A
  Come on, be my baby, come on
 
 
[Chorus]
Bm       Em                     G
  I'm in love with the shape of you
               A                 Bm
  We push and pull like a magnet do
              Em               G
  Although my heart is falling too
          A                 Bm
  I'm in love with your body
           Em                   G
  And last night you were in my room
             A                    Bm
  And now my bedsheets smell like you
                    Em                  G
  Every day discovering something brand new
               A                 Bm
  Well I'm in love with your body
                 Em
  Come on, be my baby, come on
G                A
  Come on, be my baby, come on
Bm               Em
  Come on, be my baby, come on
G                A
  Come on, be my baby, come on
Bm               Em
  Come on, be my baby, come on
G                A
  Come on, be my baby, come on
Bm                  Em                   G
  Every day discovering something brand new
         A    N.C.
  I'm in love with the shape of you`,
      ukulele: `[Intro]
Am Dm F G (x2)
 
[Verse 1]
    Am                 Dm
The club isn't the best place to find a lover
       F              G
So the bar is where I go
Am                      Dm
Me and my friends at the table doing shots
         F               G
Drinking faster and then we talk slow
     Am                       Dm
Come over and start up a conversation with just me
    F                      G
And trust me I'll give it a chance now
        Am                    Dm
Took my hand, stop, put Van the Man on the jukebox
    F                G
And then we start to dance, and now I'm singing like
 
[Pre-Chorus]
 
Am              Dm
Girl, you know I want your love
F                      G                 Am
Your love was handmade for somebody like me
             Dm
Come on now, follow my lead
F               G
I may be crazy, don't mind me, say
Am              Dm
Boy, let's not talk too much
F                    G                Am
Grab on my waist and put that body on me
             Dm
Come on now, follow my lead
F
Come—come on now, follow my lead
 
[Chorus]
 
Am      Dm                    F
  I'm in love with the shape of you
            G                  Am
We push and pull like a magnet do
            Dm              F
Although my heart is falling too
       G
I'm in love with your body
Am        Dm                  F
  And last night you were in my room
           G                    Am
And now my bedsheets smell like you
                 Dm                  F
Every day discovering something brand new
            G
Well I'm in love with your body
           I'm in love with your body
Am Dm F         G
           I'm in love with your body
Am Dm F         G
           I'm in love with your body
Am               Dm                  F
 Every day discovering something brand new
       G
I'm in love with the shape of you
 
[Verse 2]
 
Am                    Dm
One week in we let the story begin
            F                G
We're going out on our first date
            Am                  Dm
But you and me are thrifty so go all you can eat
             F                   G
Fill up your bag and I fill up a plate
            Am                       Dm
We talk for hours and hours about the sweet and the sour
             F                G
And how your family is doin' okay
              Am               Dm
And leave and get in a taxi, we kiss in the backseat
         F                     G
Tell the driver make the radio play, and I'm singing like
 
[Pre-Chorus]
 
Am              Dm
Girl, you know I want your love
F                      G                 Am
Your love was handmade for somebody like me
             Dm
Come on now, follow my lead
F               G
I may be crazy, don't mind me, say
Am              Dm
Boy, let's not talk too much
F                    G                Am
Grab on my waist and put that body on me
             Dm
Come on now, follow my lead
F
Come—come on now, follow my lead
 
[Chorus]
 
Am      Dm                    F
  I'm in love with the shape of you
            G                  Am
We push and pull like a magnet do
            Dm              F
Although my heart is falling too
       G
I'm in love with your body
Am        Dm                  F
  And last night you were in my room
           G                    Am
And now my bedsheets smell like you
                 Dm                  F
Every day discovering something brand new
            G
Well I'm in love with your body
 
           I'm in love with your body
Am Dm F         G
           I'm in love with your body
Am Dm F         G
           I'm in love with your body
Am               Dm                  F
 Every day discovering something brand new
       G
I'm in love with the shape of you
 
 
[Bridge]
 
N.C
Come on, be my baby, come on
N.C
Come on, be my baby, come on
N.C
Come on, be my baby, come on
N.C
Come on, be my baby, come on
Am            Dm
  Come on, be my baby, come on
F                G
  Come on, be my baby, come on
Am            Dm
  Come on, be my baby, come on
F                G
  Come on, be my baby, come on
 
[Chorus]
 
Am      Dm                    F
  I'm in love with the shape of you
            G                  Am
We push and pull like a magnet do
            Dm              F
Although my heart is falling too
       G
I'm in love with your body
Am        Dm                  F
  And last night you were in my room
           G                    Am
And now my bedsheets smell like you
                 Dm                  F
Every day discovering something brand new
            G
Well I'm in love with your body
Am            Dm
  Come on, be my baby, come on
F                G
  Come on, be my baby, come on
Am            Dm
  Come on, be my baby, come on
F                G
  Come on, be my baby, come on
Am            Dm
  Come on, be my baby, come on
F                G
  Come on, be my baby, come on
Am               Dm                  F
 Every day discovering something brand new
       G
I'm in love with the shape of you
 
pattern: D D U U D U or down on each`,
      piano: `B        E     E-E     E      E         E      E    E    E   E-E
The club isn't the best place to find a lover

E       E     E    E    F#   G# G#
So the bar is where I go

B      G#  G#    G#    G#   G#  F#-F#  F#-F# F#
Me and my friends at the table doing shots

F#-F#       F#    F#     G#    F#   E    C#
Drinking fast and then we talk slow

 

C#     C#    C#   F#-G#  G#  G#  G#
And you come over and start up

G#  G#-G#-G#-G#  G#  G#  G#
A conversation with just me

G#        B     G#   G#  F#  F#  E  G#
And trust me I'll give it a chance

F#-E      E     E       E        B
Now take my hand, stop

F#    G#  G#   F#   F#   F#   F#-F#
Put Van the Man on the jukebox

F#      F#    F#     F#    E     C#
And then we start to dance

.G#    .G#  C#  C#-C# C#
And now I'm singing like...

 

C#     C#     C#   .B   C#    G#    F#
Girl, you know I want your love

F#        F#    G#      F#-E
Your love was handmade

C#    E-G#-F#    F#  C#
For somebody like me

B          F#    G#    G#-F#  E   C#
Come on now, follow my lead

F#  F# G#   F#-E   F#     E    C#
I may be crazy, don't mind me...

 

C#     C#   C#    .B     C#   G#   F#
Say, boy, let's not talk too much

F#      F#   G#   F#     E     C#    E  G#-F#  F#  C#
Grab on my waist and put that body on me

B           G#   G#   F#-E    E     C#
Come on now, follow my lead

C#             B      G#   G#   F#-E     E    C#
Come, come on now, follow my lead

.G#-.B-C#
Hmmmm ~

E    F#    G#   F#    E       E     F#   F#
I'm in love with the shape of you

 

E        E       F#   G#    F#  E   E-F#   C#
We push and pull like a magnet do

C# - E      F#     G#    E    E-F#   F#
Although my heart is falling too

E    F#  G#   F#     E      F#-C#
I'm in love with your body

F#       G#     B      G#    F#   E    F#
Last night you were in my room

C#      E     F#     G# - F#      E       F#    C#
And now my bedsheets smell like you

C#-C#  C#   C#-E-F#-G#    C#- E       F#      F#
Every day discovering something brand new

E      F#  G#   F#     E    F#-C#
I'm in love with your body

 

C#  C#   E   E   F# F#   G# G#
Ooh I,   ooh I,  ooh I,  ooh I

E     F#    G#  F#    E     F#-C#
I'm in love with your body

C#  C#   E   E   F# F#   G# G#
Ooh I,   ooh I,  ooh I,  ooh I

E   F#  G#   F#      E    F#-C#
I'm in love with your body

C#  C#   E   E   F# F#   G# G#
Ooh I,   ooh I,  ooh I,  ooh I

E     F#   G#   F#    E     F#-C#
I'm in love with your body

C#-C#  C#  C#-E-F#-G#    C#-E      F#      F#
Every day discovering something brand new

E     F#   G#   F#     E      E      F#   C#
I'm in love with the shape of you`,
    },
  },
  {
    title: "Blue",
    artist: "yung kai",
    lyrics: `Your morning eyes, I could stare like watching stars
I could walk you by, and I'll tell without a thought
You'd be mine, would you mind if I took your hand tonight?
Know you're all that I want this life
I'll imagine we fell in love
I'll nap under moonlight skies with you
I think I'll picture us, you with the waves
The ocean's colors on your face
I'll leave my heart with your air
So let me fly with you
Will you be forever with me?
My love will always stay by you
I'll keep it safe, so don't you worry a thing
I'll tell you I love you more
It's stuck with you forever, so promise you won't let it go
I'll trust the universe will always bring me to you
I'll imagine we fell in love
I'll nap under moonlight skies with you
I think I'll picture us, you with the waves
The ocean's colors on your face
I'll leave my heart with your air
So let me fly with you
Will you be forever with me?`,
    chords: {
      guitar: `[Verse 1]
F              G
  Your morning eyes
        C                   Am
I could stare like watching stars
F                  G           C              Am
  I could walk you by and I'll tell without a thought
         F               G
You'd be mine, would you mind
     C                Am
If I took your hand tonight
            F          G         C     Am
Know you're all that I want this life
 
 
[Chorus]
F                       G
I'll imagine we fell in love
               C                    Am
I'll nap under moonlight skies with you
             F                        G
I think I'll picture us, you with the waves
            C      E7      Am
The ocean's colors on your face
              F               G
I'll leave my heart with your air
   C      E7       Am
So let me fly with you
         F     G         C    Am
Will you be forever with me?
 
 
[Instrumental]
F    G    C    Am    (x4)
 
 
[Verse 2]
   F                G        C
My love will always stay by you
Am           F                 G
I'll keep it safe so don't you worry a thing
     C                   Am
I'll tell you I love you more
     F                 G
It's stuck with you forever
   C                        Am
So promise you won't let it go
               F             G                  C    Am
I'll trust the universe will always bring me to you
 
 
[Chorus]
F                       G
I'll imagine we fell in love
               C                    Am
I'll nap under moonlight skies with you
             F                        G
I think I'll picture us, you with the waves
            C      E7      Am
The ocean's colors on your face
              F               G
I'll leave my heart with your air
   C      E7       Am
So let me fly with you
         F     G         C    Am
Will you be forever with me?
 
 
[Outro]
F    G    C    Am`,
      ukulele: `[Intro]
F G C Am
 
[Verse]
F           G
Your morning eyes
        C                   Am
I could stare like watching stars
F                   G         C               Am
I could walk you by and Iʼll tell without a thought
          F              G
Youʼll be mine would you mind
     C         Em      Am
If I took your hand tonight
            F          G       C      Am
Know youʼre all that I want is life
 
[Chorus]
F                        G
Iʼll imagine we fell in love
               C                    Am
Iʼll nap under moonlight skies with you
               F                      G
I think Iʼll picture us, you with the waves
            C              Am
The oceans colors on your face
                F              G
Iʼll leave my heart with your air
    C     Em       Am
so let me fly with you
         F       G       C     Am
will you be forever with me?
 
[Verse]
    F                G           C     Am
My love will always stay by you
             F                 G
Iʼll keep it safe so donʼt you worry a think
      C                   Am
Iʼll tell you I love you more
      F                 G
itʼs stuck with you forever
      C                     Am
so promise you wonʼt let it go
                 F            G                   C       Am
Iʼll Trust the universe will always bring me to you
 
[Chorus]
F                       G
Iʼll imagine we fell in love
                 C                  Am
Iʼll nap under moonlight skies with you
             F                        G
I think Iʼll picture us, you with the waves
             C            Am
The oceans colors on your face
              F                G
Iʼll leave my heart with your air
    C      Em       Am
so let me fly with you
          F      G        C       Am
will you be forever with me?
`,
      piano: `E4 C#S B4 B4 C#S B4
could stare llke watching stars
G#4 A4 B4 A4 G#4 F#4 E4
I could walk you by
C#5 B4 B4 E4 G#4 F#4
And I'll tell without a thought
E4 E4 B4 A4 G#4 A4 G#4
You'd be mine would you mind
F#4 E4 G#4 B4 G#4 E4 E4 G#4 B4 G#4
it took your hand tonight
G#4 B4 C#S B4 G#4 F#4 E4
Know you're all that i want this life
E4 F#4 G#4 B4 G#4 C#5 B4 F#4 G#4 F#4 G#4 E4
I'll Imagine we fell in love
BS ES C#5 D#5 ES F#5
I'll nep under moonlight akles with you
B4 B4 G#S F#5 G#5 F#5 F#S F#S ES C#5
I think I'll picture ue you with the waves
C#5 D#S ES BS ES ES C#5 D#5 E5 F#5
The ocean's colore on your face
B4 B4 G#S F#5 G#5 F#5 F#5 F#5 ES C#S
I'll leave my heart with your air
B4 G#A B4 CAS B4 44 G#A F#4
So let me fly with you
E4 G#A B4 FRA G#4 E4
Will you be forever with me
C#5 B4 E4 C#5 B4 A4 E4 E4
My love will atways stay by you
ES D#S C#S C#S B4 C#5 F#4 G#4
I'll keep it sate so don't you worry a thing
E4 F84 G#4 C#5 B4 B4 B4 G#4 C#S B4 B4 F#4
I'll tell you I love you more
E4 C#5 F84 G#4 F#4 E4 E4
I'll trust the universe
E4 F#4 E4 CBS B4 B4
Will alwaye bring me to you
G#4 B4 G#4 B4 GHA F#4 EA i'll Imagine we fell in love
BS ES C#S D#5 ES F#5
ill nap under moonlight akles with you
B4 B4 G#S F#5 G#S F#S F#5 F#5 ES C#5
I think Ill picture us you with the waves
C#5 D#S ES BS ES E5 C#5 D#5 ES F#5
The ocean's colors on your tace
B4 B4 G&S F#S G#S FAS FAS FAS ES CAS
'll leave my heart with your air
B4 GA4 B4 C#S B4 44 GH4 FB4
So let me fly with you
E4 G#4 B4 F#4 G#4 E4
Will you be forever with me
C#S B4 E4 C#S B4 A4 E4 E4`,
    },
  },
  {
    title: "Time machine",
    artist: "MJ apanay",
    lyrics: `Staring at stars, watching the moon
Hoping that one day they'll lead me to you
Wait every night 'cause if a star falls
I'll wish to go back to the times that I loved
Why do the stars shine so bright in the sky
If most of the people are sleeping at night?
Why do we only have one chance at life?
I wish I could go back in time
Pictures remind me of things I forgot
But also of all of the things that I've lost
Can't get them back, they won't fall from above
So I try to forget all the times that I loved
Why do we remember beautiful lies?
We end up regretting them most of our lives
Why do we only have one chance to try?
I wish I could go back in time
Each time I fall asleep
I always see you there in my dreams
It's like going back in a time machine
I know when I wake up, your time with me will end
So don't let me fall asleep
I don't wanna meet you there in my dreams
I know that we'll never build a time machine
It's time for me to try and wake up again
I fall asleep
But honestly
I wanna see you in my dreams
I'm trying to wake up again`,
    chords: {
      guitar: `[Verse 1]
Fmaj7
Staring at stars
Em7
Watching the moon
Dm7                         Cmaj7
Hoping that one day they'll lead me to you
Fmaj7
Wait every night
      Em7
Cause if a star falls
     Dm7        G7          Cmaj7
I'll wish to go back to the times that I loved
 
 
[Chorus]
Fmaj7                     Em7
Why do the stars shine so bright in the sky
   Dm7                    Cmaj7
If most of the people are sleeping at night
Fmaj7               Em7
Why do we only have one chance at life
  Dm7          G7         Cmaj7
I wish I could go back in time
    Fmaj7
Ooh ooh ooh ooh
Em7
Ooh ooh ooh ooh, ooh ooh
Dm7     G7           Cmaj7 Cmaj7
Ooh ooh     ooh, ooh ooh
 
 
[Verse 2]
Fmaj7                 Em7
Pictures remind me of things I forgot
    Dm7      G7         Cmaj7
But also, of all of the things that I've lost
Fmaj7                       Em7        C
Can't get them back they won't fall from above
      Dm7       G7          Cmaj7
So, I try to forget all the times that I loved
 
 
[Chorus]
Fmaj7             Em7
Why do we remember beautiful lies
   Dm7      G7            Cmaj7
We end up regretting them most of our lives
Fmaj7               Em7
Why do we only have one chance to try
  Dm7          G7         Cmaj7
I wish I could go back in time
 
 
[Bridge]
            Fmaj7
Each time I fall asleep
Em7                    Dm7   G7
I always see you there in my dreams
     Cmaj7                Fmaj7
It's like going back in a time machine
  Em7                      Dm7       G7      Cmaj7
I know when I wake up your time with me will end
                 Dm7
So, don't let me fall asleep
  Em7                        Dm7   G
I don't wanna meet you there in my dreams
  Cmaj7                         Fmaj7
I know that we'll never build a time machine
     Em7          Dm7     G7
It's time for me to try and wake up again
 
 
[Outro]
Cmaj7   F     Dm7
      I fall asleep
    Em7                  Dm7   G7
But honestly,(honestly), honestly
       Cmaj7
You’re in my dreams
Fmaj7
Ah ah ah ah
Em7      A7
Ah ah ah ah
    Dm7               Fmaj7   C     C
I'm trying to-oo wake up     again
 
F   F   C   C    D   G   C   F
 
F   D  C    Dm7  G   G   C`,
      ukulele: `[Verse 1]
Fmaj7
Staring at stars
Em7
Watching the moon
Dm7                         Cmaj7
Hoping that one day they'll lead me to you
Fmaj7
Wait every night
      Em7
Cause if a star falls
     Dm7        G7          Cmaj7
I'll wish to go back to the times that I loved
 
 
[Chorus]
Fmaj7                     Em7
Why do the stars shine so bright in the sky
   Dm7                    Cmaj7
If most of the people are sleeping at night
Fmaj7               Em7
Why do we only have one chance at life
  Dm7          G7         Cmaj7
I wish I could go back in time
    Fmaj7
Ooh ooh ooh ooh
Em7
Ooh ooh ooh ooh, ooh ooh
Dm7     G7           Cmaj7 Cmaj7
Ooh ooh     ooh, ooh ooh
 
 
[Verse 2]
Fmaj7                 Em7
Pictures remind me of things I forgot
    Dm7      G7         Cmaj7
But also, of all of the things that I've lost
Fmaj7                       Em7        C
Can't get them back they won't fall from above
      Dm7       G7          Cmaj7
So, I try to forget all the times that I loved
 
 
[Chorus]
Fmaj7             Em7
Why do we remember beautiful lies
   Dm7      G7            Cmaj7
We end up regretting them most of our lives
Fmaj7               Em7
Why do we only have one chance to try
  Dm7          G7         Cmaj7
I wish I could go back in time
 
 
[Bridge]
            Fmaj7
Each time I fall asleep
Em7                    Dm7   G7
I always see you there in my dreams
     Cmaj7                Fmaj7
It's like going back in a time machine
  Em7                      Dm7       G7      Cmaj7
I know when I wake up your time with me will end
                 Dm7
So, don't let me fall asleep
  Em7                        Dm7   G
I don't wanna meet you there in my dreams
  Cmaj7                         Fmaj7
I know that we'll never build a time machine
     Em7          Dm7     G7
It's time for me to try and wake up again
 
 
[Outro]
Cmaj7   F     Dm7
      I fall asleep
    Em7                  Dm7   G7
But honestly,(honestly), honestly
       Cmaj7
You’re in my dreams
Fmaj7
Ah ah ah ah
Em7      A7
Ah ah ah ah
    Dm7               Fmaj7   C     C
I'm trying to-oo wake up     again
 
F   F   C   C    D   G   C   F
 
F   D  C    Dm7  G   G   C`,
      piano: `RH:5|--------d---------------f-|
RH:4|g---------------a-g-f-g---|
LH:3|----------------c--c--c-d-|
LH:2|g--g--g-A--A--A-----------|

RH:5|--------------d-----------|
RH:4|------g---------------a-g-|
LH:3|-d--d-----------------c--c|
LH:2|------g--g--g-A--A--A-----|

RH:5|----c---------------d-----|
RH:4|f-g---------g-------------|
LH:3|--c-d--d--d---------------|
LH:2|------------g--g--g-A--A--|

RH:5|--f--e-d--c---------------|
RH:4|--------------a---g-------|
LH:3|--c--c--c-d--d--d-c--c--c-|
LH:2|A-------------------------|

RH:5|d-----------d-------------|
RH:4|--------a-------g-------g-|
LH:2|A--A--A-g--g--g-g--g--g-g-|

RH:5|------d---------------f---|
RH:4|--------------a-g-f-g-----|
LH:3|--------------c--c--c-d--d|
LH:2|-g--g-A--A--A-------------|

RH:5|------------d-------------|
RH:4|----g---------------a-g-f-|
LH:3|--d-----------------c--c--|
LH:2|----g--g--g-A--A--A-------|

RH:5|--c---------------d-------|
RH:4|g---------g---------------|
LH:3|c-d--d--d-----------------|
LH:2|----------g--g--g-A--A--A-|

RH:5|g--f-d--c---------------d-|
RH:4|------------a---g---------|
LH:3|c--c--c-d--d--d-c--c--c---|
LH:2|------------------------A-|

RH:4|------a---A---g-------g---|
LH:3|----------------------gaaa|
LH:3|-----------------------gg-|
LH:2|-A--A-g--g--g-g--g--g-----|

RH:5|----d---------------f-----|
RH:4|------------a-g-f-g-------|
LH:3|--------------------gfdc-c|
LH:2|------------------------A-|

RH:5|----------d---------------|
RH:4|--g---------------a-g-f-g-|
LH:3|dfg----------g----g-g-----|
LH:2|------g-----g-g-gg----g---|

RH:5|c---------------d-------f-|
RH:4|--------g-----------------|
LH:3|--------g-------g---g---g-|
LH:2|AagdcdDf----ggg-------ggg-|

RH:5|-e-d--c---------------d---|
RH:4|----------a---g-----------|
LH:4|------c-------c-------cc--|
LH:3|f-d-c--Agf--gA----A-------|

RH:4|----a---A---g-------------|
LH:3|A--df-d-ff--ga--g-d-------|
LH:2|--A-----------------g-----|

RH:4|------------------gfdc-cdf|
RH:3|----------------------A---|
LH:3|--d---------------f-------|
LH:2|----------a-g-f-g---------|

RH:4|g---f---g---f-f---gf--A-g-|
LH:3|--------d---------------c-|
LH:2|g---------------a-g-f-g---|

RH:4|f-----g---f---g---f-f---A-|
LH:3|--------------d-------f--e|
LH:2|------g-------------------|

RH:4|A-g-f-------g---f---g---f-|
LH:3|-d--c---------------d-----|
LH:2|--------a---g-------------|

RH:5|----------c---d-g---------|
RH:4|g---f-g-A---A-----g---A---|
LH:2|--a---A---g---------------|

RH:5|c---d---g---f---D---d-----|
RH:4|------------------------g-|

RH:5|------c---d---g---f---D---|
RH:4|--A-----------------------|
LH:3|----------------------d-c-|

RH:5|d-----------c---d---g---f-|
RH:4|----g---A-----------------|
LH:3|--d-----------------------|
LH:2|A---ggggg-----------------|

RH:5|--D---d---c---d---D---f---|
LH:2|----------ggggg-----------|

RH:5|g---d-------------------c-|
RH:4|--------A---g---g---A-----|
LH:2|----------------g---g---g-|

RH:5|--d---g---f---D---d-------|
RH:4|----------------------g---|
LH:3|----------------------c---|
LH:2|--g---A---A---A---A-------|

RH:5|----c---d-----------------|
RH:4|A-----------g---f---gg--A-|
LH:3|c---c---c---d---d---d---d-|

RH:5|----dfg---f---g----dg-f---|
RH:4|--gA--------------gA------|
LH:3|--c---c---c---c-----------|
LH:2|------------------A---A---|

RH:5|D---d---g---f---g---f---g-|
LH:2|A---A---g---g---g---g---g-|

RH:5|--d-----------g-d---g-f-d-|
RH:4|------A---g-------g-------|
LH:2|--g---g-------g--g--g-A--A|

RH:5|--------------------g-----|
RH:5|--f-e-c---f-e-c-d--df-d---|
RH:4|g-------g---------gA----g-|
LH:3|----c--c--c-d--d--d-------|
LH:2|--A-----------------g--g--|

RH:5|g-f-d---f-e-c---f-e-c-D-f-|
RH:4|------g-------g-----------|
LH:3|----------c--c--c-d--d--d-|
LH:2|g-A--A--A-----------------|

RH:5|g-d---g-f-d---f-e-c---f-A-|
RH:4|----g-------g-------g-----|
LH:3|----------------c--c--c-d-|
LH:2|g--g--g-A--A--A-----------|

RH:6|c-------------------------|
RH:5|--g---g-d---g-f-d---f-e-c-|
RH:4|----------g-------g-------|
LH:3|-d--d-c--c--c-------------|
LH:2|--------------A--A--A-a--a|

RH:5|e-f-g----dfg--------------|
RH:4|--------gA----------------|
LH:2|--a-g--g------------------|`,
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
