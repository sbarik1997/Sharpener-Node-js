const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete','root','Supriyabarik1997@',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;