const sequelize = require('../database/databaseSequelize');
const {DataTypes} = require('sequelize');

const Action = sequelize.define('Action', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    libelle: {
        type : DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true
});

module.exports = Action;