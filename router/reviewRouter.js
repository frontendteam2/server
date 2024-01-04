import express from 'express';
import * as reviewController from "../controller/reviewController.js";

const router = express.Router();

router.get('/:url/:page', reviewController.getReview);
router.post('/',reviewController.postReview)

export default router;