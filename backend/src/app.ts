import { createRequire } from "module";
import {NextFunction, Request, Response} from 'express';
const require = createRequire(import.meta.url);

const express = require("express");

import mongoose from 'mongoose'

interface Error {
  status:number
  name: string
  message: string
  stack?: string
}

// @ts-ignore
import {router as restaurantRouter} from './router/restaurant.router.ts'
// @ts-ignore
import {router as newsRestaurantRouter} from './router/news.router.ts'

// const configs = require('./configs')
mongoose.set('strictQuery', true)
console.log('adівіввіss')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req:Request, res:Response) => {
  res.json('WELCOME')
})

app.use('/restaurants', restaurantRouter)
app.use('/restaurantsNews',newsRestaurantRouter)

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
  console.log(err);
  res.status(err.status || 500).json({
    message:err.message || 'Unknown error',
    status:err.status || 500
  })
})

app.listen(5000, () => {
  mongoose.connect('mongodb://127.0.0.1:27017/Pyachok')
  console.log(`5000 listening!!!!!!`);
})