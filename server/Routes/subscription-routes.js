import express from 'express'
import {createSubscription, getSubscription, purchaseSubscription, confirmSubscription} from '../Controllers/subscription-controller.js'
import Auth from '../Middlewares/auth.js'

const router = express.Router()

router.post('/create-subscription', createSubscription)
router.get('/get-subscription',getSubscription )
router.post('/purchase-subscription', Auth, purchaseSubscription)
router.post('/confirm-subscription', Auth, confirmSubscription)

export default router;
