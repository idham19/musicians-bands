const {Sequelize, sequelize} = require('../db');
const{Model,DataTypes}=require("sequelize")
// TODO - define the Musician model
class Musician extends Model{};

Musician.init({
name:DataTypes.STRING,
instrument:DataTypes.STRING
},
{
    sequelize,
    modelName:"Musician"
})

// const musicien = await new Musician({
//     name:"fd",
//     instrument:'dfs'
// })

// sequelize.sync().then(()=>{
//     Musician.create()
// })

    

module.exports = {
    Musician
};