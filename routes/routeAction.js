const express = require('express');
const router = express.Router();
const controllerAction = require('../controllers/controllerAction');

router.get('/', controllerAction.getAllActions);
router.get('/:id', controllerAction.getOneAction);

router.post('/', controllerAction.createAction);

router.delete('/:id', controllerAction.deleteAction);

router.put('/:id', controllerAction.editAction);

module.exports = router;