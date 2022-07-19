const mongoose = require('mongoose')
const { Schema } = mongoose

// Create Part Model & Schema
const partSchema = new Schema({
  no: String,
  name: String,
  threshold: Number,
  note: String
})

module.exports = mongoose.model('Part', partSchema)