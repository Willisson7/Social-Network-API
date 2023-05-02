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
        const thought = await Thought.findOne({_id: req.params.thoughtId});
        const thoughtObj = {
            thought,
        }
        res.json(thoughtObj);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error in getting thought' });
    }
};

// write function to add thoughts

// write function to update thoughts

// function to add reaction

// function to delete reaction

// write function to delete thoughts







module.exports = {
    getThoughts,
    getThoughtbyId,
}
