const mongoose = require('mongoose');
const schema = mongoose.Schema;

const numOfLikes = schema({
    likes: { type: Number, default: 0 },
    name: { type: String, required: true },
    spojRanks: { type: String, required: true },
    hackerRank: { type: String, required: true },
    cgpa: { type: String, required: true },
    sem: { type: String, required: true }
});

module.exports = mongoose.model('likes', numOfLikes);