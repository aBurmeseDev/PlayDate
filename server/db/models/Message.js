const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  body: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Message", MessageSchema);
