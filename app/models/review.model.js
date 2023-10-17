const db = require('../config/recipe.config');

class Review {
    constructor(reviewData){
        if(reviewData){
            this.recipeId = reviewData.recipeId;
            this.userId = reviewData.userId;
            this.rating = reviewData.rating;
            this.comment = reviewData.comment;
        }
    }

    async save(){
        try {
            const [result] = await db.query('INSERT INTO reviews SET ?', this);
            this.id = result.insertId;
            return this;
        } catch (error) {
            throw error;
        }
    }
    static async getAllReviewforRecipe(recipeId){
        try {
            const [reviews] = await db.query('SELECT * FROM reviews WHERE recipeId = ?', recipeId);
            return reviews;
        } catch (error) {
            throw error;
        }
    }

    static async updateById(id, updatedData){
        try {
            await db.query('UPDATE reviews SET ? WHERE id = ?', [updatedData, id]);
        } catch (error) {
            throw error;
        }
    }

    static async deleteById(id){
        try {
            await db.query('DELETE FROM reviews WHERE id = ?', id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Review;