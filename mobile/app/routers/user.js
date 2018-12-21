const express=require("express");
const pool=require("../pool.js")
var router=express.Router();

//1.用户登录
router.post("/login",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	var sql="SELECT uid,uname FROM ds_userlist WHERE uname=? AND upwd=md5(?)"
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) console.log(err);	
		if(result.length>0){
			req.session.uid=result[0].uid;
			req.session.isLogin=true;
			res.send({code:1,data:result[0]})
		}else{
			res.send({code:0,msg:"用户名或密码不正确"})
		}
	})
})
//2.用户注册
router.post("/reg",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	var sql="SELECT uid FROM ds_userlist WHERE uname=?"
	pool.query(sql,uname,(err,result)=>{
		if(err) console.log(err);
		if(result.length>0){
			res.send({code:-1,msg:"用户名重复"})
		}else{
			var sql="INSERT INTO ds_userlist (uname,upwd) VALUES (?,md5(?))"
			pool.query(sql,[uname,upwd],(err,result)=>{
				if(err) console.log(err)
				if(result.affectedRows>0){
					res.send({code:1,msg:"注册成功"})
				}else{
					res.send({code:0,msg:"注册失败"})
				}
			})
		}
	})
})
//3.查询登录状态
router.post("/isLogin",(req,res)=>{
	var uid=req.body.uid;
	if(uid==req.session.uid){
		res.send({code:1,msg:"已登录"})
	}else{
		res.send({code:0,msg:"未登录"})
	}
})
//4.添加用户已读图书列表
router.get("/markRead",(req,res)=>{
	var sid=req.query.sid;
	var uid=req.session.uid;
	if(!sid || !uid){
		res.send({code:-2,msg:"缺少登录或书籍信息"})
		return
	}
	//查询用户是否已添加这本书
	var sql="SELECT bid FROM ds_user_markread WHERE uid=? AND bid=?"
	pool.query(sql,[uid,sid],(err,result)=>{
		if(err) console.log(err)
		if(result.length>0){
			res.send({code:0,msg:"已添加"})
		}else{
			var sql="INSERT INTO ds_user_markRead (uid,bid) VALUES (?,?)"
			pool.query(sql,[uid,sid],(err,result)=>{
				if(err) console.log(err)
				if(result.affectedRows>0){
					res.send({code:1,msg:"添加成功"})
				}else{
					res.send({code:-1,msg:"添加失败"})
				}
			})
		}
	})
})
module.exports=router;