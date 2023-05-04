const mongoose = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        thoughtText:{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,   
        },
        reactions: [
            reactionSchema
     ], 
    },
    {
     
     toJSON: {
    virtuals: true
     },
     id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought