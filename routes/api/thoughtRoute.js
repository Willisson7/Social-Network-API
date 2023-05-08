const router = require('express').Router();

const {
    getThoughts,
    getThoughtbyId,
    addThought,
    updateThought,
    addReaction,
    deleteReaction,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getThoughts)
    .post(addThought);

router.route('/:thoughtId')
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;

