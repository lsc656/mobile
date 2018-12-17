const express=require("express");
const pool=express("../pool.js")
var router=express.Router();

router.get("/",(req,res)=>{
	res.send(res)
})

module.exports=router;