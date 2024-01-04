import express from 'express';
import * as newFormController from "../controller/newFormController.js";

const router = express.Router();

router.post('/', newFormController.newForm);

export default router;