const sequelize = require('../database/databaseSequelize');
const {DataTypes} = require('sequelize');

const Dieu = sequelize.define('Dieu', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type : DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true
});

module.exports = Dieu;