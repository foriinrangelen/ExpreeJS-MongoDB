const productModel= require('../Models/products.model');

// model 활용하여 Create - create()
async function createProduct(req, res, next){
    try{
        const createdProduct= await productModel.create(req.body);
        res.status(201).json(createdProduct);
    }catch(err){
        next(err);
    }
}
// 전체 데이터 Read - find()
async function getProducts(req, res, next) {
    try{
        const allProducts= await productModel.find({});
        res.status(200).json(allProducts);
    }catch(err){
        next(err);
    }
}

// 특정 데이터 Read - findById()
async function getProductById(req, res, next) {
    try{
        const product= await productModel.findById(req.params.productId);
        if(product) res.status(200).json(product)
        else res.status(404).send();
        
    }catch(err){
        next(err);
    }
}

// 특정 데이터 Update - findByIdAndUpdate()
async function updateProduct(req, res, next) {
    try{
        // req.body는 클라이언트가 서버로 보낸 데이터가 담긴 객체
        // productModel.findByIdAndUpdate 메소드에서 req.body는 업데이트하고자 하는 제품의 새로운 데이터를 담고 있으며, 이 데이터를 사용하여 데이터베이스의 해당 제품 정보를 업데이트
        // {new: true}는 findByIdAndUpdate 메소드의 옵션 객체이며 이 옵션이 설정되면 메소드는 업데이트된 문서를 반환, 이 옵션을 설정하지 않으면, 업데이트 이전의 문서가 반환
        let updatedProduct= await productModel.findByIdAndUpdate(req.params.productId, req.body, {new: true});
        if(updatedProduct) res.status(200).json(updatedProduct)
        else res.status(404).send();
        
    }catch(err){
        next(err);
    }
}

// 특정 데이터 Delete - findByIdAndDelete()
async function deleteProduct(req, res, next) {
    try{
        let deletedProduct= await productModel.findByIdAndDelete(req.params.productId);
        if(deletedProduct) res.status(200).json(deletedProduct);
        else res.status(404).send();
        
    }catch(err){
        next(err);
    }
}



module.exports= {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}