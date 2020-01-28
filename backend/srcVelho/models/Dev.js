const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchman = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        teIndex: '2dsphere'
    },
});

module.exports = mongoose.model('Dev', DevSchman);