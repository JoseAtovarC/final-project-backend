import express from 'express';
import { validateJWTAuth } from '../middlewares.js';
import { createBookingController,messageHelperBooking,updateBookingController } from './BookingController.js';




const router = express.Router();
router.use(validateJWTAuth);
router.route('/')
    .post(createBookingController)
    router.route('/message')
    .get(messageHelperBooking)
    router.route('/client')
    .patch(updateBookingController)

export default router;