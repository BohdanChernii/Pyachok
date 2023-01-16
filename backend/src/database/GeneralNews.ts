import {Schema, model} from 'mongoose'

const generalNewsSchema = new Schema({
  title: {type: String, trim: true, require: true},
  text: {type: String, trim: true, require: true},
  picture: {type: Buffer}
})

export default model('News', generalNewsSchema)