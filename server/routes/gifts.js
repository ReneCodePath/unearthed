import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

// Routes
router.get('/', GiftsController.getGifts)
router.get('/:giftId', GiftsController.getGiftById) 

export default router