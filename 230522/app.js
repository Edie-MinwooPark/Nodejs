// 로그인 하고 게시판에 글작성 수정, 삭제

// 프로젝트 시작

// package.json
// 사용할 모듈은 express express-session mysql2 ejs dotenv
// view 엔진 경로 설정
// view 엔진 ejs로 설정
// body 객체 사용
// 서버 객체 만들고 대기상태

const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const dot = require('dotenv').config();
const {sequelize} = require('./models');
const SignUpRouters = require('./routers/signUp');
const LoginRouters = require('./routers/login');
const BorderRouters = require('./routers/border');


app.set("views",path.join(__dirname,"page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : process.env.SESSION_KEY, // 세션키 넣을것
    resave : false, // 다시 저장할지 여부
    saveUninitialized : false, // 초기화 할지 여부
}))

app.use("/signUp",SignUpRouters);

app.use("/login",LoginRouters);

app.use('/border',BorderRouters);

// force : 초기화 여부
sequelize.sync({force : false}).then((e)=>{
    console.log("연결 성공");
}).catch((err)=>{
    console.log(err)
})

app.listen(8000,()=>{
    console.log("8000번 서버 열림");
})