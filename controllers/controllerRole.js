const Role = require('../modele/modeleRole');
const RoleUser = require('../modele/modeleRoleUser');
const RoleDieu = require('../modele/modeleRoleDieu');
const Responsabilite = require('../modele/modeleResponsabilite');

exports.createRole = (req, res, next) => {
    const role = new Role({
        nom: req.body.nom
    });
    role.save().then(() => {
        res.status(201).json({
            message: "Role added successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getAllRoles = (req, res, next) => {
    Role.findAll().then((roles) => {
        res.status(200).json(roles);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getOneRole = (req, res, next) => {
    Role.findOne({
        where: {
            id: req.params.id
        }
    }).then((role) => {
        res.status(200).json(role);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getRoleUser = (req, res, next) => {
    RoleUser.findAll({
        where: {
            roleId: req.params.id
        }
    }).then((roleUser) => {
        res.status(200).json(roleUser);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getDieuRole = (req, res, next) => {
    RoleDieu.findAll({
        where: {
            roleId: req.params.id
        }
    }).then((roleDieu) => {
        res.status(200).json(roleDieu);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getDieuRoleById = async (id) => {
    await RoleDieu.findAll({
        where: {
            roleId: id
        }
    }).then( async (roleDieu) => {
        return await roleDieu;
    }).catch((error) => {
        return error;
    });
};

exports.getResponsabilite = (req, res, next) => {
    Responsabilite.findAll({
        where: {
            roleId: req.params.id
        }
    }).then((responsabilite) => {
        res.status(200).json(responsabilite);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.deleteRole = (req, res, next) => {
    Role.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: "Role deleted successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.createRoleUser = (req, res, next) => {
    const roleUser = new RoleUser({
        utilisateurId: req.body.utilisateurId,
        roleId: req.body.roleId
    });
    roleUser.save().then(() => {
        res.status(201).json({
            message: "RoleUser added successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.createRoleDieu = (req, res, next) => {
    const roleDieu = new RoleDieu({
        dieuId: req.body.dieuId,
        roleId: req.body.roleId
    });
    roleDieu.save().then(() => {
        res.status(201).json({
            message: "RoleDieu added successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.createResponsabilite = (req, res, next) => {
    const responsabilite = new Responsabilite({
        actionId: req.body.actionId,
        roleId: req.body.roleId
    });
    responsabilite.save().then(() => {
        res.status(201).json({
            message: "Responsabilite added successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.deleteRoleUser = (req, res, next) => {
    RoleUser.destroy({
        where: {
            utilisateurId: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: "RoleUser deleted successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.deleteRoleDieu = (req, res, next) => {
    RoleDieu.destroy({
        where: {
            dieuId: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: "RoleDieu deleted successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.deleteResponsabilite = (req, res, next) => {
    Responsabilite.destroy({
        where: {
            actionId: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: "Responsabilite deleted successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editRole = (req, res, next) => {
    const role = new Role({
        nom: req.body.nom
    });
    Role.update({
        nom: req.body.nom
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(201).json({
            message: "Role updated successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editRoleUser = (req, res, next) => {
    RoleUser.update({
        utilisateurId: req.body.utilisateurId,
        roleId: req.body.roleId
    }, {
        where: {
            utilisateurId: req.params.id
        }
    }).then(() => {
        res.status(201).json({
            message: "RoleUser updated successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editRoleDieu = (req, res, next) => {
    RoleDieu.update({
        dieuId: req.body.dieuId,
        roleId: req.body.roleId
    }, {
        where: {
            dieuId: req.params.id
        }
    }).then(() => {
        res.status(201).json({
            message: "RoleDieu updated successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editResponsabilite = (req, res, next) => {
    Responsabilite.update({
        actionId: req.body.actionId,
        roleId: req.body.roleId
    }, {
        where: {
            actionId: req.params.id
        }
    }).then(() => {
        res.status(201).json({
            message: "Responsabilite updated successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};
