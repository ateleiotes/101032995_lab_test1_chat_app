const mongoose = require('mongoose');

const GroupMessageSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_sent: {
        type: Date,
        default: Date.now
    },
})

GroupMessageSchema.pre('save', (next) => {
    if (!this.date_sent) {
        this.date_sent = Date.now()
    }
    next() // Save record
    console.log("saved")
})


module.exports = mongoose.model("GroupMessage", GroupMessageSchema);