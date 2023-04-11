const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas','mailon','familia1212',{
    host:'localhost',
    dialect:'mysql'
})
module.exports = connection;
