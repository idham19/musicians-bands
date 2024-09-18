const {Sequelize, sequelize} = require('../db');
const{Model,DataTypes} =require("sequelize")

// TODO - define the Band model
class Band extends Model{
    toString() {
        return `Band: ${this.name} Genre: ${this.genre}`;
      }
};

Band.init({
name:DataTypes.STRING,
genre:DataTypes.STRING,
showCount:DataTypes.INTEGER
},{
    sequelize,
    modelName:"Band"
})

module.exports = {
    Band
};