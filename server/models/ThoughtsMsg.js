import mongoose from 'mongoose';

const thoughtsSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var ThoughtsMsg = mongoose.model('ThoughtsMsg', thoughtsSchema);

export default ThoughtsMsg;