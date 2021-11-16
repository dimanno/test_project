const router = require('express').Router();

const {userController} = require('../controllers');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);

router.get('/:user_id', userController.getUser);
router.put('/:user_id', userController.updateUser);

module.exports = router
