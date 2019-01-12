//1:加载模块 express pool
const express = require("express");
const index = require("./routes/index.js");
const pics=require('./routes/pics');
const login=require('./routes/login');
const user=require('./routes/user');
//1.2加载路由

//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
//2.2:配置允许脚手架跨域访问程序 8080:vue   4200:ng
app.use(cors({
    origin:[
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:4200",
      "http://localhost:4200",
      "http://127.0.0.1:8081"
    ],
    credentials:true
}));
//7.1:node.js app.js
//   加载第三方模块 express-session
const session = require("express-session")
//7.2:对模块配置   
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000 * 60 * 60 * 24 
  }
}));
//3:指定监听端口3000
app.listen(3000);
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))
//引入第三方模块:bodyParser 处理post请求
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended:false
}));

//挂载路由
app.use("/index",index);
app.use('/pics',pics);
app.use('/login',login);
app.use('/user',user)