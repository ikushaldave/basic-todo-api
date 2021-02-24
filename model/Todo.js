const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    minLength: 2,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, {timestamps: true})

module.exports = mongoose.model("Todo", todoSchema);