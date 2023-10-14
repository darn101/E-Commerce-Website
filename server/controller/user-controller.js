import User from "../models/UserSchema.js";

export const userSignup = async (req, res) => {

    try {
        const isExsist = await User.findOne({ username: req.body.username });
        if (isExsist) {
            return res.status(201).json({ message: 'User already exists' });
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        return res.status(200).json({ message: user });
    }

    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username);
        console.log(password);
        const user = await User.find({ username: username, password: password });
        console.log(user);
        if (user.length > 0) {
            return res.status(200).json({ message: user });
        }

    }
    catch (err) {
        return res.status(500).json({ message: err.message });

    }
}