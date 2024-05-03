### MongoDB-Mongoose 사용하기
![image](https://github.com/foriinrangelen/ExpreeJS-MongoDB/assets/123726292/f44f333a-0f71-4e29-b544-fdfbb789ff62)

### Mongoose란?
> 몽고DB 사용에 다양한 기능과 편리하게 사용하기 위한모듈, Schema 생성후 모델 생성

#### 로컬에 설치해서 사용 https://www.mongodb.com/try/download/community

#### Cloud Service 사용 https://www.mongodb.com/atlas

1. new project 생성 > Build a Database > Cluster 만들기 > MongoDB유저생성 > connect > drivers > url 가져오기
2. `npm install mongoose` 로 설치
3.  App에 MongoDB연결 확인 `await mongoose.connect(MONGO_URL)`
4.  연결 TEST
5. 스키마 생성
6. 스키마를 이용해서 모델생성
7. 모델을 이용해서 CRUD작업
   ```javascript
   const mongoose= require("mongoose");
   // 1. constructor 함수를 mongoose에서제공, 새로운 스키마 정의가능
   const productSchema= new moongoose.Schema({ 
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
  // 3. 데이터추가
   Product.create({
      name: 'apple watch',
      description: 'cool watch',
      price: 1000
   })
   ```
