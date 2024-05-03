const express= require('express');
const productsRouter= express.Router();
// controller server.js에서 가져오기
const productsController= require('../Controllers/products.controller');
// 프로덕트 컨트롤러에서 가져오기
productsRouter.post('/', productsController.createProduct);
productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:productId', productsController.getProductById);
productsRouter.put('/:productId', productsController.updateProduct);
productsRouter.delete('/:productId', productsController.deleteProduct);

module.exports= productsRouter;
