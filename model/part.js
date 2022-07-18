const mongoose = require('mongoose')
const { Schema } = mongoose

// Create Part Model & Schema
const partSchema = new Schema({
  name: String,
  threshold: Number
})

module.exports = mongoose.model('Part', partSchema)