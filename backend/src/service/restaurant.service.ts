// @ts-ignore
import Restaurant from '../database/Restaurant.ts'

interface IRestaurantInfo {
  title: string
  description: string
  location:string
  picture?:File
}

const restaurantService ={

  findByParams: async (filter = {}) => {
    return Restaurant.find(filter)
  },

  findByOneParam: async (filter = {}) => {
    return Restaurant.findOne(filter)
  },

  findByIdWithNews: async (restaurantId: string) => {
    const res = await Restaurant.aggregate([
      {
      $match: {
        _id: restaurantId
      }
    }, {
      $lookup: {
        from: 'news',
        localField: '_id',
        foreignField: 'restaurant',
        as: 'news'
      }
    }])
    return res[0]
  },

  create: async (restaurantInfo:IRestaurantInfo) => {

    return Restaurant.create(restaurantInfo)
  },

  updateOneRestaurant: async (_id: string, restaurantInfo: IRestaurantInfo,) => {
    return Restaurant.findOneAndUpdate(_id, restaurantInfo,{new:true})
  },

  delete: async (restaurantId: string) => {
    return Restaurant.deleteOne({_id: restaurantId})
  }

}

export default restaurantService