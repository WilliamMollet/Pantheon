const sequelize = require('../database/databaseSequelize');
const {DataTypes} = require('sequelize');


const RoleDieu = sequelize.define('RoleDieu', {
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

module.exports = RoleDieu;