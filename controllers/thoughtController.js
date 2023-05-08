const Thought = require('../models/thought');

const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        const thoughtsObj = {
            thoughts,
        }
        res.json(thoughtsObj);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in getting thoughts' });
    }
};

const getThoughtbyId = async (req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
        const thoughtObj = {
            thought,
        }
        res.json(thoughtObj);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in getting thought' });
    }
};

// function to add thoughts
const addThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        // const savedThought = await newThought.save();
        // const thoughtObj = {
        //     thought: newThought,
        // };
        res.json(newThought);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error adding thought' });
    }
};

// function to update thoughts
const updateThought = async (req, res) => {
    try {
        const updateThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body,
            { new: true }
        );
        const thoughtObj = {
            thought: updateThought,
        };
        res.json(thoughtObj);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in updating thought' });
    }
};

// function to add reaction
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
// function to delete reaction

const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            {
            $pull : {reactions: {reactionId: req.params.reactionId}}
            },
            {
                new : true
            });
     
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'No reaction with that Id' });
    }
};

// function to delete thoughts

const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        const thoughtObj = {
            thought,
        };
        res.json(thoughtObj)
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: 'No thought with that Id' });
    }
};






module.exports = {
    getThoughts,
    getThoughtbyId,
    addThought,
    updateThought,
    addReaction,
    deleteReaction,
    deleteThought
}
