const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = new User(userData);
        const newUser = await user.save()
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering a user'});
    }
};

// User login
exports.loginUser =  async (req, res) => {
    try {
        const {username , password} = req.body;
        const user = await User.findByusernameOrEmail(username);

        if(!user){
            return res.status(401).json({ message: 'User not found'});
        }

        //verify user password here 
        if(user.password !== password){
            return res.status(401).json({ message: 'Incorrect password'});
        }

        //Implement user authication and token generation here
        res.status(200).json({ message: 'Login successfully', user});
    } catch (error) {
        res.status(500).json({ message: 'Error logging in'})
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        await User.updateById(id, updatedData);
        res.status(200).json({ message: 'User profile updated successfully.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating user profile.'})
    }
};