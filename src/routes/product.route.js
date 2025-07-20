//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
// import userController from '../controllers/product.controller.js'

const router = Router()

router.get('/',productController.getProducts)
router.get('/:id',productController.getProductsId)

router.post('/',productController.createProduct)

router.delete('/:id',productController.deleteProduct)




export default router
