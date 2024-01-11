import * as Controller from "../controller/viewController.js"
import express from 'express'

const router = express.Router()

router.get('/:url', Controller.viewGetAll)

export default router