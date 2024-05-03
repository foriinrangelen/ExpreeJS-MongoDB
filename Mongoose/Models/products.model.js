const mongoose= require("mongoose");
// 1. constructor 함수를 mongoose에서제공, 새로운 스키마 정의가능

const productSchema= new mongoose.Schema({ 
  name: {
    type: String,
    required: true
  },
    description: {
    type: String,
    required: true
  },
  price: {
    type: Number
  }
});
// 2. 모델생성 (CRUD 등의 작업을 위한 DB interface)
const Product= mongoose.model("product", productSchema)

module.exports= Product

// 3. 데이터추가
// Product.create({
//    name: 'apple watch',
//    description: 'cool watch',
//    price: 1000
// })