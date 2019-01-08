const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.get('/',(req,res)=>{
	var code=req.query.code
	res.send({code:200,msg:code})
})



module.exports=router;