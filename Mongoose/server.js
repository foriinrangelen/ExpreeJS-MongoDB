const express= require('express');
const path= require('path');
const usersRouter= require('./Routes/users.router')
const postsRouter= require('./Routes/posts.router');
const { default: mongoose } = require('mongoose');
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


app.get('/', (req, res)=> {
    res.render('index',{
        imageTitle:"It is a forestttt"
    })
})

app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})
