const express=require("express");
const request=require('request');
const pool=require('../pool');
var router=express.Router();
router.get('/',(req,res)=>{
	var JSCODE=req.query.code;
	var APPID='wxa269dc5bba2f59e7';
	var SECRET='d2d55d252c4110a856032149283ed1a1';
	request('https://api.weixin.qq.com/sns/jscode2session?appid='+APPID+'&secret='+SECRET+'&js_code='+JSCODE+'&grant_type=authorization_code', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var body=JSON.parse(body)
			var wx_openID=body.openid;
			var session_key=body.session_key;
			var sql='SELECT uid FROM sanse_user WHERE wx_openID=?'
			pool.query(sql,[wx_openID],(err,result)=>{
				if(err) console.log(err)
				if(result.length>0){
					res.send({code:200,data:result[0]})
				}else{
					var sql='INSERT INTO sanse_user (wx_openID) VALUES (?)'
					pool.query(sql,[wx_openID],(err,result)=>{
						if(err) console.log(err)
						if(result.affectedRows>0){
							var sql='SELECT uid FROM sanse_user WHERE wx_openID=?'
							pool.query(sql,[wx_openID],(err,result)=>{
								if(err) console.log(err)
								res.send({code:201,data:result[0]})
							})
						}else{
							res.send({code:-1,msg:'fail'})
						}
					})
				}
			})
		}
	})
})


module.exports=router;