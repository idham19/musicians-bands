const {Sequelize, sequelize} = require('../db');
const{Model,DataTypes}=require("sequelize")

// TODO - define the Song model
class Song extends Model{};
Song.init({
title:DataTypes.STRING,
year:DataTypes.INTEGER,
length:DataTypes.INTEGER
},{
    sequelize,
    modelName:"Song"
})

module.exports = {
    Song
};