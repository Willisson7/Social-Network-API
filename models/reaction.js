const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()

        },
        userName:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        reactionText:{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,   
        },

     toJSON: {
    virtuals: true
     },
     id: false
    }
);

module.exports = reactionSchema