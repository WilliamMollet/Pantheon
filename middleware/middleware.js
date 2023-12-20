const jwt = require('jsonwebtoken');
const utilisateurController = require('../controllers/controllerUser');
const roleController = require('../controllers/controllerRole');
const dieuController = require('../controllers/controllerDieu');
require('dotenv').config();

exports.authenticator = (req, res, next) => {
    const token = req.query.token ? req.query.token : req.headers.authorization;

    if (token && process.env.API_KEY) {
        jwt.verify(token, process.env.API_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({error: "Access denied!"});
            }else{
                next();
            }
        });
    } else {
        return res.status(401).json({error: "Access denied!"});
    }
}

exports.LinkedDieu = async (req, res , next) => {
    const token = req.query.token ? req.query.token : req.headers.authorization;
    if (token && process.env.API_KEY) {
        await jwt.verify(token, process.env.API_KEY, async (err, decoded) => {
            const role = await utilisateurController.getRoleUserByEmail(decoded.email);
            console.log(role,await utilisateurController.getRoleUserByEmail(decoded.email), 'role');
            const dieu =  await roleController.getDieuRoleById(role.RoleUser[0].dataValues.RoleId);
            console.log(dieu, 'dieu');
            if (err) {
                return res.status(401).json({error: "Access denied1!"});
            }else{
                if (dieu.dieuId === req.params.id) {
                    next();
                } else {
                    return res.status(401).json({error: "Access denied2!"});
                }
            }
        });
    } else {
        return res.status(401).json({error: "Access denied3!"});
    }
}

exports.isAdmin = async (req, res, next) => {
    const token = req.query.token ? req.query.token : req.headers.authorization;
    if (token && process.env.API_KEY) {
        await jwt.verify(token, process.env.API_KEY, (err, decoded) => {
            const role = utilisateurController.getUserRole(decoded.email);
            console.log(role);
            if (err) {
                return res.status(401).json({error: "Access denied!"});
            }else{
                if (role.isAdmin) {
                    next();
                } else {
                    return res.status(401).json({error: "Access denied!"});
                }
            }
        });
    } else {
        return res.status(401).json({error: "Access denied!"});
    }
}