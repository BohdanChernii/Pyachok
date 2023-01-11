const {Schema, model} = require('mongoose')

const restaurantSchema = new Schema({
  title: {type: String, trim: true},
  text: {type: String, trim: true},
  picture: {type: File}
})

module.exports = model()