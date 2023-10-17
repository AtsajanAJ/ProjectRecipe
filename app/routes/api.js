const express = require('express');
const router = express.Router();

const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');

//define the base routes
router.use('/recipe', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;