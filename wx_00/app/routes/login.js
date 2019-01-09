const express=require("express");
const request=require('request');
var router=express.Router();
router.get('/',(req,res)=>{
	var JSCODE=req.query.code;
	var APPID='wxa269dc5bba2f59e7';
	var SECRET='d2d55d252c4110a856032149283ed1a1';
	request('https://api.weixin.qq.com/sns/jscode2session?appid='+APPID+'&secret='+SECRET+'&js_code='+JSCODE+'&grant_type=authorization_code', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body) // 
			res.send({code:200,msg:body})
		}
	})	
})



module.exports=router;