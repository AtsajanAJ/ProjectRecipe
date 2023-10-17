const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { authUser } = require('../middleware/auth.middleware');

//define recipe routes
router.post('/', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);
router.get('/', recipeController.getAllRecipes);
router.post('/:recipeId/', authUser, recipeController.addReview);

module.exports = router;