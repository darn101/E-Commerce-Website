
import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProdDetails, getProducts } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/getproducts', getProducts);
router.get('/getProdDetails/:id', getProdDetails);

export default router;
