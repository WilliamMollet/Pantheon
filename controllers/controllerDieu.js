const Dieu = require('../modele/modeleDieu');
const RoleDieu = require('../modele/modeleRoleDieu');

exports.createDieu = (req, res, next) => {
    const dieu = new Dieu({
        nom: req.body.nom,
    });
    dieu.save().then(() => {
        res.status(201).json({
            message: "Dieu added successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getAllDieux = (req, res, next) => {
    Dieu.findAll().then((dieux) => {
        res.status(200).json(dieux);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getOneDieu = (req, res, next) => {
    Dieu.findOne({
        where: {
            id: req.params.id
        }
    }).then((dieu) => {
        res.status(200).json(dieu);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getRoleDieu = (req, res, next) => {
    RoleDieu.findAll({
        where: {
            dieuId: req.params.id
        }
    }).then((roleDieu) => {
        res.status(200).json(roleDieu);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getDieuRoleByIdRole = async (id) => {
    await RoleDieu.findAll({
        where: {
            roleId: id
        }
    }).then((roleDieu) => {
        return roleDieu;
    }).catch((error) => {
        return error;
    });
}

exports.deleteDieu = (req, res, next) => {
    Dieu.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: "Dieu deleted successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editDieu = (req, res, next) => {
    const dieu = new Dieu({
        nom: req.body.nom,
    });
    Dieu.updateOne({
        _id: req.params.id
    }, dieu).then(() => {
        res.status(201).json({
            message: "Dieu updated successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};
