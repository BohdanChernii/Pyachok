import {Schema, model} from 'mongoose'

const restaurantContactsSchema = new Schema({
  instagram: {type: String, trim: true, require: true},
  phone: {type: String, trim: true, require: true},
  email: {type: String, trim: true, lowercase: true, require: true}
})


export default model('RestaurantContacts', restaurantContactsSchema)