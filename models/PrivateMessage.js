const mongoose = require('mongoose');


const PrivateMessageSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: true
    },
    to_user: {
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
});
PrivateMessageSchema.pre('save', (next) => {
    console.log("Adding Timestamp")
    let now = Date.now()

    this.date_sent = now
    next() //Required to save the record
})


//Create models
const PrivateMessage = mongoose.model("PrivateMessage", PrivateMessageSchema);
module.exports = PrivateMessage;