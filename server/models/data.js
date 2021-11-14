const mongoose = require('mongoose');
const schema = mongoose.Schema;

const numOfLikes = schema({
    likes: { type: Number, default: 0 },
    name: { type: String, required: true },
});

module.exports = mongoose.model('likes', numOfLikes);