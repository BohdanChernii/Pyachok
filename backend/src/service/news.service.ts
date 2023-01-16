// @ts-ignore
import News from '../database/News.ts'

interface INewsInfo<File> {
  title: string,
  text: string,
  picture?: File
}

const newsService = {

  findAllNewsByParams: async (filter = {}) => {
    return News.find(filter)
  },

  findNewsByOneParam: async (restaurantId: string) => {
    return News.findById(restaurantId).populate('restaurant')
  },

  create: async (newsInfo: INewsInfo<File>) => {
    return News.create(newsInfo)
  },

  delete: async (newsId: string) => {
    return News.deleteOne({_id: newsId})
  },

  updateOne: async (_id: string, newsInfo: INewsInfo<File>) => {
    return News.updateOne(_id, newsInfo, {new: true})
  }

}
export default newsService
