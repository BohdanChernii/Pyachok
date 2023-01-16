// @ts-ignore
import newsController from "../controller/news.controller.ts";

import express from 'express'

const router = express.Router()

router.get('/', newsController.getAllNews)

router.post('/', newsController.createNews)

router.get('/:newsId', newsController.getOneNew)

router.put('/:newsId', newsController.updateOneNews)

router.delete('/:newsId', newsController.deleteNews)

export {router}