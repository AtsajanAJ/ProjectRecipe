const db = require('../config/recipe.config');

class User{
    constructor(userData){
        if(userData){
            this.username = userData.username;
            this.email = userData.email;
            this.password = userData.password;
        }
    }
    async save() {
        const[result] = await db.query('INSERT INTO users SET ?', this);
        this.id = result.insertId;
        return this;
    }
    static async findByusernameOrEmail(identifier){
        const[users] = await db.query('SELECT * FROM users WHERE username = ? OR email = ?', [identifier, identifier]);
        return users[0];
    }
}
module.exports = User;