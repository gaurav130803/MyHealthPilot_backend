const User = require("../../models/User.model");

const jwt = require('jsonwebtoken');
require('dotenv').config()

const login = async (req, res, next) => {
    try {
        const loginValue = req.body;
        console.log(loginValue);

        const { email, password } = loginValue;

        const userinfo = {
            email,
            password
        }

        const existingEmail = await User.findOne({ email });

        if (!existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Account not found Please register.",
            });
        }
        const passwordMatch = existingEmail.password === password;
        console.log(passwordMatch);

        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: "Wrong password try again ",

            });
        }

       
        const username=existingEmail.username;
        const userId = existingEmail._id;


        const secret = process.env.SECRET_KEY;

        const jwt_token = jwt.sign(
             { id: userId, email, username },
              secret,
              );

        return res.status(201).json({
            success: true,
            message: "Login successfully 🎉",
            jwt_token,
            username

        });
    } catch (error) {
        next(error);
    }
}

module.exports = login;