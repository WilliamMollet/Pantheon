const Action = require('../modele/modeleAction');

exports.createAction = (req, res, next) => {
    const action = new Action({
        libelle: req.body.libelle
    });
    action.save().then(() => {
        res.status(201).json({
            message: "Action added successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getAllActions = (req, res, next) => {
    Action.findAll().then((actions) => {
        res.status(200).json(actions);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getOneAction = (req, res, next) => {
    Action.findOne({
        where: {
            id: req.params.id
        }
    }).then((action) => {
        res.status(200).json(action);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.deleteAction = (req, res, next) => {
    Action.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: "Action deleted successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editAction = (req, res, next) => {
    const action = new Action({
        id: req.params.id,
        libelle: req.body.libelle
    });
    Action.updateOne({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(201).json({
            message: "Action updated successfully!"
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

