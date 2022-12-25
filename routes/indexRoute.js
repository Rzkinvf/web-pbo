import express from 'express'
import { home,about } from '../controllers/indexController.js'

const router = express.Router();

router.get('/',home)
router.get('/about',about)

export default router;
