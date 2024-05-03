### MongoDB-Mongoose 사용하기
#### 로컬에 설치해서 사용 https://www.mongodb.com/try/download/community

#### Cloud Service 사용 https://www.mongodb.com/atlas

1. new project 생성 > Build a Database > Cluster 만들기 > MongoDB유저생성
2. `npm install mongoose` 로 설치
3.  App에 MongoDB연결 확인 `await mongoose.connect(MONGO_URL)`
4.  연결 TEST
