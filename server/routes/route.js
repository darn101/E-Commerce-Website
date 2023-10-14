
import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProdCategory, getProdDetails, getProducts } from '../controller/product-controller.js';
import { checkoutPayment } from '../controller/checkout-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/getproducts', getProducts);
router.get('/getProdDetails/:id', getProdDetails);
router.get('/getProdCategory/:id', getProdCategory);
router.post('/api/create-checkout-session', checkoutPayment);

export default router;
