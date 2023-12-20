const express = require('express');
const router = express.Router();
const controllerDieu = require('../controllers/controllerDieu');
const middleware = require('../middleware/middleware');

router.get('/', controllerDieu.getAllDieux);
router.get('/:id', middleware.LinkedDieu,controllerDieu.getOneDieu);
router.get('/roleDieu/:id', controllerDieu.getRoleDieu);

router.post('/', controllerDieu.createDieu);

router.delete('/:id', controllerDieu.deleteDieu);

router.put('/:id', controllerDieu.editDieu);

module.exports = router;