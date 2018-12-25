const express=require("express");
const pool=require("./pool.js");
var router=express.Router();
router.get("/",(req,res)=>{
  var output={fl1:[],fl2:[]};
  var sql="SELECT img_url,tag,tagData FROM sanse_index_f1";
  pool.query(sql,(err,result)=>{
    if(err) console.log(err)
    fl1=result;
  })
  var sql="SELECT img_url"
})


module.exports=router;