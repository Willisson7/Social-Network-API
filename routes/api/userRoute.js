const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// app.GET all users/post a new user
router.route('/').get(getUsers).post(createUser);

// app.GET a single user by its _id and populated by thought and friend data/delete user/update a USer
router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);
// add the following code once functions are written ( functions will be written in userController)


router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);






module.exports = router;

