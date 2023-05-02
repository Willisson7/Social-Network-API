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
        const user = await User.findOne({ _id: req.params.userId });
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

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error updating user' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error deleting user' });
    }
};

const addFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.boy.friendId } },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error adding friend' });
    }
}


const deleteFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error deleting friend' });
    }
};


module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
};