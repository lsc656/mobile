const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

router.get("/list",(req,res)=>{
  var tagId=req.query.tagId;
  var pno=parseInt(req.query.pno);
  if(!pno){
    pno=1;
  }
  if(!tagId){
    return 
  }
  var start=(pno-1)*10;
  var output={};
  var sql=`SELECT sid,imgSrc,title,fAuthor,sAuthor,summary,newPrice,oldPrice FROM ds_list WHERE tagId=? LIMIT ?,10`
  pool.query(sql,[tagId,start],(err,result)=>{
    if(err) throw err;
    output.data=result;
    var sql="SELECT COUNT(sid) AS c FROM ds_list";
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      output.c=result[0];
      res.send(output)
    })
  })
})

module.exports=router;