const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authUser} = require('../middleware/auth.middleware');

//define user routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:id', authUser, userController.updateUserProfile)

module.exports = router;