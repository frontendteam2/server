import express from 'express';
import * as imgUploadController from "../controller/imgUploadController.js";

const router = express.Router();

router.post('/', imgUploadController.imgUpload);

export default router;