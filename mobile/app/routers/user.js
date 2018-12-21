const express=require("express");
const pool=require("../pool.js")
var router=express.Router();

router.post("/login",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	var sql="SELECT uid,uname FROM ds_userlist WHERE uname=? AND upwd=md5(?)"
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) console.log(err);	
		if(result.length>0){
			req.session.uid=result[0].uid;
			res.send({code:1,data:result[0]})
		}else{
			res.send({code:0,msg:"用户名或密码不正确"})
		}
	})
})
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
router.post("/isLogin",(req,res)=>{
	var uid=req.body.uid;
	if(uid==req.session.uid){
		res.send({code:1,msg:"已登录"})
	}else{
		res.send({code:0,msg:"未登录"})
	}
})
module.exports=router;