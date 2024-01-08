import express from 'express';
import * as newFormController from "../controller/newFormController.js";

const router = express.Router();

router.post('/', newFormController.newForm);
router.get('/:url',newFormController.checkUrl)

export default router;