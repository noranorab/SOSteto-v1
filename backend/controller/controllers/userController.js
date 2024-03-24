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






exports.register = async (req, res) => {
    try {
        const { nom, prenom, email, mdp, role, estConnecte } = req.body;
        console.log(nom);

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            console.error('Email already exists:', email);
            return res.status(400).json({ error: "Email is already in use. Please choose a different email address" });
        }

        if (mdp) {
            try {
                const user = new User({
                    nom,
                    prenom,
                    email,
                    mdp,
                    role,
                    estConnecte,
                }).save();

                console.log(user);
                return res.status(201).json({ msg: `User registered successfully.` });

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

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: "Invalid credentials" });
        }


        if (user.mdp !== mdp) {
            console.log('Incorrect password for email:', email);
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign({
            email: user.email,
        }, process.env.JWT_SECRET, { expiresIn: "24h" });

        return res.status(200).json({
            token
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.userdatafromtoken = async (req, res) => {
    const { token } = req.body;

    try {
        // Verify the token and extract user data
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userEmail = decoded.email;

        // Find the user in the database based on the email
        const user = await User.findOne({ email: userEmail });

        if (!user) {
            // If user not found, return appropriate response
            return res.status(404).json({ error: 'User not found' });
        }


        // If user found, return user data
        return res.status(200).json({ status: 200, data: user });
    } catch (error) {
        // Handle token verification errors
        console.error('Error during user data retrieval:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

