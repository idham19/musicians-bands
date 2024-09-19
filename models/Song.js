const { Sequelize, sequelize } = require("../db");
const { Model, DataTypes } = require("sequelize");

// TODO - define the Song model
class Song extends Model {
  toMinutes() {
    const toMinute = (this.length / 60).toFixed(2); // Convert seconds to minutes
    return `Music duration in minute is : ${toMinute} minutes`;
  }

  // static async getLongestSong() {
  //   return await Song.findOne({
  //     order: [["length", "DESC"]], // Find the song with the l
  //   });
  // }

}


Song.init(
  {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Song",
  }
);
const song1 = new Song({
  title: "azul",
  year: 2024,
  length: 190,
});

// Song.getLongestSong().then((song) => {
//     console.log(song);
//   });
// sequelize.sync().then(()=>{
//   Song.create()
// })

module.exports = {
  Song,
};
