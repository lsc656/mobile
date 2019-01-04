const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.get('/',(req,res)=>{
  var output={};
  var pno=parseInt(req.query.pno);
  if(!pno){
    pno=1;
  }
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"})
    return
  }
  var startI=(pno-1)*10;
  var sql="SELECT COUNT(pid) c FROM sanse_pins";
  pool.query(sql,(err,result)=>{
    if(err) console.log(err)
    output.c=Math.floor(result[0].c/10);
    var sql="SELECT pid,title,img_url,hit,fans,author FROM sanse_pins LIMIT ?,6"
      pool.query(sql,[startI],(err,result)=>{
        if(err) console.log(err)
        output.data=result;
        res.send({code:200,data:output});
      })
  })
})


module.exports=router;