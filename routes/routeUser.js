const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/controllerUser');

router.get('/', controllerUser.getAllUsers);
router.get('/:id', controllerUser.getOneUser);
router.get('/roleUser/:id', controllerUser.getRoleUser);
router.get('/email', controllerUser.getRoleUserByEmail);

router.post('/', controllerUser.register);
router.post('/login', controllerUser.login);

router.delete('/:id', controllerUser.deleteUser);

router.put('/:id', controllerUser.editUser);

module.exports = router;