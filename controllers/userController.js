const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const userObj = {
            users,
        }
        res.json(userObj);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in getting users' });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.userId});
        const userObj = {
            user,
        }
        res.json(userObj);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in getting user' });
    }
};


const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in creating user' });
    }
};

module.exports = {
    getUsers,
    createUser,
    getUser
  };