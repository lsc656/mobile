const express=require("express");
const pool=require("../pool.js")
var router=express.Router();

router.post("/login",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	var sql="SELECT uid FROM ds_userlist WHERE uname=? AND upwd=md5(?)"
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

module.exports=router;