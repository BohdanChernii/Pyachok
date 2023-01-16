import {Schema, model, Types} from 'mongoose'

const newsSchema = new Schema({
  title: {type: String, trim: true, require: true},
  text: {type: String, trim: true, require: true},
  picture: {type: Buffer},
  restaurant: {type: Types.ObjectId, rer: 'Restaurant'}
})

export default model('News', newsSchema)