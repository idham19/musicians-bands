const { Sequelize, sequelize } = require("../db");
const { Model, DataTypes } = require("sequelize");

// TODO - define the Band model
class Band extends Model {
  toString() {
    return `Band: ${this.name} Genre: ${this.genre}`;
  }
}

Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    showCount: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Band",
  }
);
const myBand = new Band({
    name: "The Rolling Stones",
    genre: "Rock",
    showCount: 2000,
  });
  
  const bandString = myBand.toString();
  console.log(bandString); 
const band1=Band.findByPk(2).then(data=>{
    console.log(data.toString())
});
;


module.exports = {
  Band,
};
