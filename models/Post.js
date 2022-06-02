const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
}, {
    timestamp: true
})

module.exports = mongoose.model("Post", PostSchema)