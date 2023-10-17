const db = require('../config/recipe.config');
const mysql = require("mysql2");


class Recipe {
  constructor(recipeData) {
    if (recipeData) {
      this.title = recipeData.title;
      this.ingredients = recipeData.ingredients;
      this.instructions = recipeData.instructions;
      this.category = recipeData.category;
      // Add other fields as needed
    }
  }

  // Method to save a new recipe to the database
  async save() {
    try {
      const [result] = await db.query('INSERT INTO recipes SET ?', this);
      this.id = result.insertId;
      return this;
    } catch (error) {
      throw error; // Handle or log the error as needed
    }
  }

  // Method to update a recipe by ID
  static async updateById(id, updatedData) {
    try {
      await db.query('UPDATE recipes SET ? WHERE id = ?', [updatedData, id]);
    } catch (error) {
      throw error; // Handle or log the error as needed
    }
  }

  // Method to delete a recipe by ID
  static async deleteById(id) {
    try {
      await db.query('DELETE FROM recipes WHERE id = ?', id);
    } catch (error) {
      throw error; // Handle or log the error as needed
    }
  }

  // Method to retrieve all recipes
  static async getAllRecipes() {
    try {
      const [recipes] = await db.query('SELECT * FROM recipes');
      return recipes;
        // const [rows, fields] = await db.execute('SELECT * FROM recipes');

    } catch (error) {
      throw error; // Handle or log the error as needed
    }
  }

  // Add other methods for specific queries or operations as needed
}

module.exports = Recipe;
