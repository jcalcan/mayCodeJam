const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const User = require("./user");

const habitItem = new mongoose.Schema({
  habit: {
    type: String,
    required: true,
    enum: ["run", "workout"]
  },
  owner: {
    type: ObjectId,
    ref: User,
    required: true
  },
  likes: [
    {
      type: ObjectId,
      ref: User
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("HabitItem", habitItem);
