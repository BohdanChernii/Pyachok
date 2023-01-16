import {Request, Response, NextFunction} from 'express';

interface IRestaurantsWithNewsRequest extends Request {
  restaurant:{
    _id:string
  }
}

// @ts-ignore
import restaurantService from '../service/restaurant.service.ts'

const restaurantController = {

  getAllRestaurants: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const restaurants = await restaurantService.findByParams()
      res.json(restaurants)

    } catch (err) {
      next(err)
    }
  },

  getOneRestaurant: async (req:  IRestaurantsWithNewsRequest, res: Response, next: NextFunction) => {
    console.log(req);
    try {
      // const {restaurantId} = req.params
      const restaurant = await restaurantService.findByIdWithNews(req.restaurant)
      res.json(restaurant)
    } catch (err) {
      next(err)
    }
  },

  createRestaurant: async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    try {

      const restaurant =  await restaurantService.create(req.body)
      console.log(restaurant);
      res.json('Restaurant created')
    } catch (err) {
      next(err)
    }
  },

  deleteRestaurant: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {restaurantId} = req.params
      await restaurantService.delete(restaurantId)
      res.json('Restaurant deleted')
    } catch (err) {
      next(err)
    }
  },

  updateRestaurant: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {restaurantId} = req.params
      await restaurantService.updateOneRestaurant(restaurantId, req.body)
    } catch (err) {
      next(err)
    }
  }
}

export default restaurantController