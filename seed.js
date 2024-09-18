const{sequelize}= require("./db")
const {Band}=require("./models/Band")
const {Musician}=require("./models/Musician")
const {Song}=require("./models/Song")


async function seed(){
    await sequelize.sync({ force: true }); // Ensure DB is reset before seeding
    await Band.bulkCreate([
        { name: "The Rolling Stones", genre: "Rock", showCount: 120 },
        { name: "Pink Floyd", genre: "Progressive Rock", showCount: 95 },
        { name: "Queen", genre: "Rock", showCount: 150 },
        { name: "Metallica", genre: "Metal", showCount: 200 },
        { name: "The Doors", genre: "Psychedelic Rock", showCount: 60 }
      ]);
      await Musician.bulkCreate([
        { name: "Jimi Hendrix", instrument: "Guitar" },
        { name: "Freddie Mercury", instrument: "Vocals" },
        { name: "John Bonham", instrument: "Drums" },
        { name: "Flea", instrument: "Bass" },
        { name: "Elton John", instrument: "Piano" }
      ]);
      await Song.bulkCreate([
        { title: "Bohemian Rhapsody", year: 1975 },
        { title: "Stairway to Heaven", year: 1971 },
        { title: "Hotel California", year: 1976 },
        { title: "Imagine", year: 1971 },
        { title: "Smells Like Teen Spirit", year: 1991 }
      ]);    
}

seed()
module.exports={
    Band,
    Musician,
    Song
}