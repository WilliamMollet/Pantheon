const sequelize = require('../database/databaseSequelize');
const {DataTypes} = require('sequelize');


const Responsabilite = sequelize.define('Responsabilite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true
});

module.exports = Responsabilite;