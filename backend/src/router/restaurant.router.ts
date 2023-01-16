import express from 'express'

const router = express.Router()
// @ts-ignore
import restaurantController from '../controller/restaurant.controller.ts'

router.get('/', restaurantController.getAllRestaurants)

router.get('/:restaurantId', restaurantController.getOneRestaurant)

router.post('/', restaurantController.createRestaurant)

router.delete('/:restaurantId', restaurantController.deleteRestaurant)

router.put('/:restaurantId', restaurantController.updateRestaurant)

export {router}
