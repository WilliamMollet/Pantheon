const express = require('express');
const router = express.Router();
const controllerRole = require('../controllers/controllerRole');

router.get('/', controllerRole.getAllRoles);
router.get('/:id', controllerRole.getOneRole);
router.get('/roleUser/:id', controllerRole.getRoleUser);
router.get('/roleDieu/:id', controllerRole.getDieuRole);
router.get('/responsabilite/:id', controllerRole.getResponsabilite);

router.post('/', controllerRole.createRole);
router.post('/roleUser', controllerRole.createRoleUser);
router.post('/roleDieu', controllerRole.createRoleDieu);
router.post('/responsabilite', controllerRole.createResponsabilite);

router.delete('/:id', controllerRole.deleteRole);
router.delete('/roleUser/:id', controllerRole.deleteRoleUser);
router.delete('/roleDieu/:id', controllerRole.deleteRoleDieu);
router.delete('/responsabilite/:id', controllerRole.deleteResponsabilite);

router.put('/:id', controllerRole.editRole);
router.put('/roleUser/:id', controllerRole.editRoleUser);
router.put('/roleDieu/:id', controllerRole.editRoleDieu);
router.put('/responsabilite/:id', controllerRole.editResponsabilite);

module.exports = router;
