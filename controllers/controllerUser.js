const Utilisateur = require('../modele/modeleUtilisateur');
const RoleUser = require('../modele/modeleRoleUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = (req, res, next) => {
    bcrypt.hash(req.body.mdp, 10).then((hash) => {
        const user = new Utilisateur({
            nom: req.body.nom,
            email: req.body.email,
            mdp: hash
        });
        user.save().then(() => {
            const token = jwt.sign({
                email: user.email
            }, process.env.API_KEY, {
                expiresIn: '24h'
            });
            res.status(201).json({
                message: "User added successfully!",
                token: token
            });
        }).catch((error) => {
            res.status(400).json({
                error: error
            });
        });
    });
};

exports.login = (req, res, next) => {
    Utilisateur.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (!user) {
            return res.status(401).json({
                error: new Error('User not found!')
            });
        }
        bcrypt.compare(req.body.mdp, user.mdp).then((valid) => {
            if (!valid) {
                return res.status(401).json({
                    error: new Error('Incorrect password!')
                });
            }
            const token = jwt.sign({
                email: user.email
            }, process.env.API_KEY, {
                expiresIn: '24h'
            });
            res.status(200).json({
                userId: user.id,
                token: token
            });
        }).catch((error) => {
            res.status(500).json({
                error: error
            });
        });
    }).catch((error) => {
        res.status(500).json({
            error: error
        });
    });
};

exports.getAllUsers = (req, res, next) => {
    Utilisateur.findAll().then((users) => {
        res.status(200).json(users);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getOneUser = (req, res, next) => {
    Utilisateur.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        res.status(200).json(user);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getOneUserByEmail = async (email) => {
    console.log(email);
    await Utilisateur.findOne({
        where: {
            email: email
        }
    }).then( async (user) =>{
       await res.status(200).json(user);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getRoleUser = (req, res, next) => {
    RoleUser.findAll({
        where: {
            utilisateurId: req.params.id
        }
    }).then((roleUser) => {
        res.status(200).json(roleUser);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.getRoleUserByEmail = async (email) => {
    // console.log(email);
    await Utilisateur.findOne({
        where: {
            email: email
        }
    }).then(async (user) => {
        // console.log(user);
        await RoleUser.findAll({
            where: {
                UtilisateurId: user.id
            }
        }).then((roleUser) =>  {
            console.log(roleUser,'Test');
            return roleUser;
        }).catch((error) => {
            return error;
        });
    }).catch((error) => {
        return error;
    });
}

exports.deleteUser = (req, res, next) => {
    Utilisateur.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: 'Deleted!'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.editUser = (req, res, next) => {
    const user = new Utilisateur({
        nom : req.body.nom,
        email: req.body.email,
        mdp: req.body.password
    });
    user.update({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(200).json({
            message: 'Edited!'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

