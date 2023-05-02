const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    // updateUser,
    // deleteUser,
    // addFriend,
    // deleteFriend,
} = require('../../controllers/userController');

// app.GET all users/post a new user
router.route('/').get(getUsers).post(createUser);

// app.GET a single user by its _id and populated by thought and friend data/delete user/update a USer
router.route('/:userId').get(getUser);
// add the following code once functions are written
// .delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId');
// add the following code once functions are written
// .post(addFriend).delete(deleteFriend);




module.exports = router;

// // BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list