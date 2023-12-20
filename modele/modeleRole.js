const sequelize = require('../database/databaseSequelize');
const {DataTypes} = require('sequelize');
const Utilisateur = require('./modeleUtilisateur');
const RoleUser = require('./modeleRoleUser');
const RoleDieu = require('./modeleRoleDieu');
const Dieu = require('./modeleDieu');
const Responsabilite = require('./modeleResponsabilite');
const Action = require('./modeleAction');

const Role = sequelize.define('Role', {
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


Utilisateur.belongsToMany(Role, { through: RoleUser });
Role.belongsToMany(Utilisateur, { through: RoleUser });
Dieu.belongsToMany(Role, { through: RoleDieu });
Role.belongsToMany(Dieu, { through: RoleDieu });
Action.belongsToMany(Role, { through: Responsabilite });
Role.belongsToMany(Action, { through: Responsabilite });

module.exports = Role;