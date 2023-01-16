import mongoose, {Schema} from 'mongoose'

interface IRestaurant extends mongoose.Document {
  title: string
  description: string
  location: string
  picture: File
}

const restaurantSchema = new Schema({
  title: {type: String, trim: true, require: true, default: ''},
  description: {type: String, trim: true, require: true, default: ''},
  location: {type: String, trim: true, require: true, default: ''},
  picture: {type: Buffer, require: true}
})

const Restaurant = mongoose.model<IRestaurant>('Restaurant', restaurantSchema)

export default Restaurant