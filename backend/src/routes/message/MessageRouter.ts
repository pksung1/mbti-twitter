import express from 'express'
import messageController from './MessageController'


const router = express.Router()

router.get('/', messageController.getList)
router.post('/', messageController.create)
router.delete('/', messageController.delete)

export default router