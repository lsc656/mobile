const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.get('/',(req,res)=>{
  var output={};
  var pno=parseInt(req.query.pno);
  if(!pno){
    pno=1;
  }
  var reg=/^[0-9]{0,3}$/
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"})
    return
  }
  var startI=(pno-1)*10;
  var pid=req.query.pid;
  var authorId=req.query.authorId;
  var sql="SELECT COUNT(cid) c FROM sanse_pins_pics WHERE pid=? AND authorId=?";
  pool.query(sql,[pid,authorId],(err,result)=>{
    if(err) console.log(err)
    output.c=Math.floor(result[0].c/10);
    var sql="SELECT cid,img_md,img_lg,authorId,account,zan,likes,shares,pid FROM sanse_pins_pics WHERE pid=? AND authorId=? LIMIT ?,6"
      pool.query(sql,[pid,authorId,startI],(err,result)=>{
        if(err) console.log(err)
        output.data=result;
        res.send({code:200,data:output});
      })
  })
})


module.exports=router;