const Recipe = require('../models/recipe.model');
const Review = require('../models/review.model');

//Create a new recipe
exports.createRecipe = async (req, res) => {
    try{
        const recipeData = req.body;
        const recipe = new Recipe(recipeData);
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (error){
        console.log(error);
        res.status(500).json({ message: 'Error creating recipe'});
    }
};

//Update an existing recipe by ID
exports.updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        await Recipe.updateById(id, updatedData);
        res.status(200).json({ message: 'Recipe updated successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating recipe'});
    }
};

//Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        await Recipe.deleteById(id);
        res.status(200).json({ message: 'Recipe deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting recipe'});
    }
};

//Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.getAllRecipes();
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving recipes'});
    }
};

// Add a new review to a recipe
exports.addReview = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const reviewData = req.body;
        const review = new Review(reviewData);
        // Associate the review with the recipe by setting the recipe_id
        review.recipeId = recipeId   /// not sure *******************************
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding a review'});
    }
};
