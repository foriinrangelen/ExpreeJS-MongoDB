const express= require('express');
const path= require('path');
const usersRouter= require('./Routes/users.router')
const postsRouter= require('./Routes/posts.router');
const { default: mongoose } = require('mongoose');
const productsRouter = require('./Routes/products.router');

const PORT= 4000;
// mongoose 가져오기
// const mongoose = require('mongoose')

const app= express();

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.json());
// 연결부분 비동기 promise 
mongoose.connect(`mongodb+srv://kyyyy8629:1234@express-cluster.fzshmg3.mongodb.net/?retryWrites=true&w=majority&appName=express-Cluster`)
.then(()=> console.log('mongodb connected'))
.catch( err => console.log(err))


app.use('/static', express.static(path.join(__dirname, 'public'))); 
app.use((req, res, next)=> {
    const start= Date.now();
    console.log(`${req.method} ${req.url}`);
    next(); 
    
    const diffTime= Date.now()- start;
    
    console.log(`end: ${req.method} ${req.baseUrl} ${req.url} ${diffTime}ms`)
})

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/products', productsRouter);


app.get('/', (req, res)=> {
    // throw new Error('it is an error');
    res.render('index',{
        imageTitle:"It is a forestttt"
    })
})

// 에러를 처리하기 위한 미들웨어, 
// 비동기 요청으로 인한 에러를 이렇게 처리해버리면 에러처리기에서 저 에러메세지를 받지 못하기 때문에 서버가 Crash된다
// 따라서 비동기에 대한 에러처리는 next로 처리해줘야 한다 (product.controller참고)
app.use((error, req, res, next)=>{
    res.json({message: error.message});
})

app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})
