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
//5.用户退出登录
router.post("/logout",(req,res)=>{
	req.session.uid=null;
	req.session.isLogin=null;
	res.send({code:1,msg:"已退出"})
})
//6.添加用户已购图书列表
router.post("/buyNow",(req,res)=>{
	var uid=req.session.uid;
	var bid=req.body.bid;
	if(!bid){
		res.send({code:-2,msg:"没有选中书籍"})
	}
	var sql="SELECT gid FROM ds_user_bought WHERE bid=? AND uid=?";
	pool.query(sql,[bid,uid],(err,result)=>{
		if(err) console.log(err)
		if(result.length>0){
			res.send({code:0,msg:"已购买"})
		}else{
			var sql="INSERT INTO ds_user_bought (bid,uid) VALUES (?,?)";
			pool.query(sql,[bid,uid],(err,result)=>{
				if(err) console.log(err) 
				if(result.affectedRows>0){
					res.send({code:1,msg:"购买成功"})
				}else{
					res.send({code:-1,msg:"购买失败"})
				}
			})
		}
	})
})
//7.查询用户已读图书列表
router.get("/getMarkRead",(req,res)=>{
	var uid=req.query.uid;
	if(uid==req.session.uid){
		var sql="SELECT bid FROM ds_user_markRead WHERE uid=? ORDER BY mid DESC LIMIT 0,2"
		pool.query(sql,[uid],(err,result1)=>{
			if(err) console.log(err)
			var output=[];
			var sql="SELECT imgSrc,sid FROM ds_list WHERE sid=? "
			for(var item of result1){
				pool.query(sql,item.bid,(err,result)=>{
					if(err) console.log(err)
					output.push(result[0])
					if(output.length==result1.length){
						res.send(output);
					}		
				})				
			}
		})
	}else{
		res.send({code:-1,msg:"登录状态不正确"})
	}
})
//8.查询用户已购图书列表
router.get("/getUserBought",(req,res)=>{
	var uid=req.query.uid;
	if(uid==req.session.uid){
		var sql="SELECT bid FROM ds_user_bought WHERE uid=?"
		pool.query(sql,[uid],(err,result1)=>{
			if(err) console.log(err)
			if(result1.length>0){
				var output=[],
				var sql="SELECT sid,title,fAuthor,sAuthor FROM ds_list WHERE sid=?"
				for(var item of result1){
					pool.query(sql,[item.bid],(err,result)=>{
						if(err) console.log(err)
						output.push(result[0])
						if(output.length==result1.length){
							res.send(output)
						}
					})
				}
			}else{
				res.send({code:0,msg:"没有购买过书籍"})
			}
		})
	}else{
		res.send({code:-1,msg:"登录状态不正确"})
	}
})
module.exports=router;