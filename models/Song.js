const {Sequelize, sequelize} = require('../db');
const{Model,DataTypes}=require("sequelize")

// TODO - define the Song model
class Song extends Model{
    toMinutes() {
        const toMinute=(this.length / 60).toFixed(2); // Convert seconds to minutes
        return `Music duration in minute is : ${toMinute} minutes`
    }
};
Song.init({
title:DataTypes.STRING,
year:DataTypes.INTEGER,
length:DataTypes.INTEGER
},{
    sequelize,
    modelName:"Song"
})
const song1= new Song({
    title:"azul",
    year:2024,
    length:190
})
const getSong1= Song.findByPk(1).then(data=>{
    console.log(data.toMinutes());
    
})
module.exports = {
    Song
};