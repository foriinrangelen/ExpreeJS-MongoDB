// 라우터 생성
const express= require('express');
const usersRouter= express.Router();
// controller server.js에서 가져오기
const {getUsers, postUser, getUser}= require('../Controllers/users.controller');

// server.js에서 /user 설정해둬서 다음 주소부터시작
usersRouter.get('/', getUsers)
usersRouter.post('/', postUser)
usersRouter.get('/:userId', getUser);

module.exports= usersRouter;
