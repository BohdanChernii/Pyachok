import {Request, Response, NextFunction} from 'express';
// @ts-ignore
import newsService from "../service/news.service.ts";

const newsController = {

  getAllNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const news = await newsService.findAllNewsByParams()
      res.json(news)
    } catch (err) {
      next(err)
    }
  },

  getOneNew: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {newsId} = req.params
      const oneNew = await newsService.findNewsByOneParam(newsId)
      res.json(oneNew)
    } catch (err) {
      next(err)
    }
  },

  createNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await newsService.create(req.body)
      res.json('News created')

    } catch (err) {
      next(err)
    }
  },

  updateOneNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {newsId} = req.params
      await newsService.updateOne(newsId, req.body)
    } catch (err) {
      next(err)
    }
  },

  deleteNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {newsId} = req.params
      await newsService.delete(newsId)
    } catch (err) {
      next(err)
    }
  },

}
export default newsController