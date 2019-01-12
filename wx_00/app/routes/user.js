const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.get('/getUserCJ',(req,res)=>{
  var authorId=req.query.uid;
  console.log(authorId)
  var sql='SELECT img_md,img_lg,authorId,account,pid FROM sanse_pins_pics WHERE authorId=?'
  pool.query(sql,authorId,(err,result)=>{
    if(err) console.log(err)
    res.send({code:200,data:result})
  })
})


module.exports=router;