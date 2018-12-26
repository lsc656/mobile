const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.get("/",(req,res)=>{
  var output={fl1:[],fl2:[]};
  var progress=0;
  var sql="SELECT img_url,tag,fid FROM sanse_index_fl1 ORDER BY hot DESC LIMIT 0,6";
  pool.query(sql,(err,result)=>{
    if(err) console.log(err)
    output.fl1=result;
    progress+=50;
    if(progress==100){
      res.send({code:1,data:output});
    }
  })
  var reg=/^[0-9]{0,3}$/
  var pno=parseInt(req.query.pno);
  if(!pno){
    pno=1;
  }
  var pS=parseInt(req.query.pageSize);
  if(!pS){
    pS=5;
  }
  if(!reg.test(pno) || !reg.test(pS)){
    res.send({code:-1,msg:"页码格式不正确"})
    return
  }
  var startI=(pno-1)*pS;
  var sql="SELECT title,img_url,hit,fans FROM sanse_pins LIMIT ?,?"
  pool.query(sql,[startI,pS],(err,result)=>{
    if(err) console.log(err)
    output.fl2=result;
    progress+=50;
    if(progress==100){
      res.send({code:1,data:output});
    }
  })
})


module.exports=router;