const express=require("express");
const pool=express("../pool.js")
var router=express.Router();

router.get("/",(req,res)=>{
	res.send("user")
})

module.exports=router;