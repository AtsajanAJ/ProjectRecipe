const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt.config');
const User = require('../models/user.model');

// middleware to verify user auth...
exports.authUser = async(req, res, next) =>{
    try {
        // Extract the JWT token from the request headers
        const token = req.headers['x-access-token'];

        if(!token){
            return res.status(401).json({ message: 'No Token Provider'});
        }

        // Veryfy and decoded the token
        jwt.verify(token, secretKey, async (err, decoded) => {
            if(err){
                return res.status(401).json({ message: 'Invalid token'});
            }

            // Check if the user exists (you may need to customize this check)
            const user = await User.findById(decoded.userId);

            if(!user){
                return res.status(401).json({ message: 'User not found'});
            }

            // Attach the user to the request for further use
            req.user = user;

            next(err); ///**************** */
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Authtication failed'});
    }
};