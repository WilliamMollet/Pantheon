const sequelize = require('../database/databaseSequelize');
const {DataTypes} = require('sequelize');


const RoleUser = sequelize.define('RoleUser', {
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

module.exports = RoleUser;