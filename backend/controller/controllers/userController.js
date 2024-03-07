require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../../model/schema');


//User
exports.createUser = async (req, res) => {
    try {
        const { nom, prenom, email, mdp, role, estConnecte } = req.body;
        const newUser = await User.create({ nom, prenom, email, mdp, role, estConnecte });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Register and login
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { nom, prenom, email, mdp, role, estConnecte } = req.body;

        // Check for existing email
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            console.error('Email already exists:', email);
            return res.status(400).json({ error: "Email is already in use. Please choose a different email address" });
        }

        if (mdp) {
            try {
                const hashedMdp = await bcrypt.hash(mdp, 10);

                const user = new User({
                    nom,
                    prenom,
                    email,
                    mdp: hashedMdp,
                    role,
                    estConnecte,
                });

                const savedUser = await user.save();

                return res.status(201).json({ msg: `User registered successfully. UserId is ${savedUser._id}` });
            } catch (hashingError) {
                console.error('Error hashing password:', hashingError);
                return res.status(500).json({ error: "Unable to create user. Please try again later." });
            }
        } else {
            console.error('Password is missing');
            return res.status(400).json({ error: "Password is required" });
        }
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ error: "Internal Server Error. Please try again later." });
    }
};





exports.login = async (req, res) => {
    const { email, mdp } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "Invalid credentials" });
        }

        const passwordCheck = await bcrypt.compare(mdp, user.mdp);

        if (!passwordCheck) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({
            userId: user._id,
        }, process.env.JWT_SECRET, { expiresIn: "24h" });

        return res.status(200).json({
            msg: "Login Successful",
            token
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
