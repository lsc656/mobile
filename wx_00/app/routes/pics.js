const express=require("express");
const pool=require("../pool.js");
var router=express.Router();

/**
 * pins图片列表页信息
 */
router.get('/',(req,res)=>{
  var output={};
  var progress=0;
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
  if(!pid){
    res.send({code:-2,msg:'查询信息不正确'})
    return 
  }
  var authorId=req.query.authorId;
  if(!authorId){
    res.send({code:-3,msg:'没有作者信息'})
    return
  }
  /**
   * 作者信息
   */
  var sql="SELECT user_img,uname,fans,likes,cj FROM sanse_user WHERE uid=?";
  pool.query(sql,[authorId],(err,result)=>{
    if(err) console.log(err);
    output.authorInfo=result[0];
    progress+=50;
    if(progress==150){
      res.send({code:200,data:output})
    }
  })
   /**
   * 头部标题信息
   */
  var sql='SELECT title FROM sanse_pins WHERE pid=?';
  pool.query(sql,[pid],(err,result)=>{
    if(err) console.log(err);
    output.header=result[0];
    progress+=50;
    if(progress==150){
      res.send({code:200,data:output})
    }
  })
  /**
   * 图片页详细信息
   */
  var sql="SELECT COUNT(cid) c FROM sanse_pins_pics WHERE pid=? AND authorId=?";
  pool.query(sql,[pid,authorId],(err,result)=>{
    if(err) console.log(err)
    output.c=Math.ceil(result[0].c/10);
    var sql="SELECT cid,img_md,img_lg,authorId,account,zan,likes,shares,pid FROM sanse_pins_pics WHERE pid=? AND authorId=? LIMIT ?,6"
      pool.query(sql,[pid,authorId,startI],(err,result)=>{
        if(err) console.log(err)
        output.data=result;
        progress+=50;
        if(progress==150){
          res.send({code:200,data:output});
        }
      })
  })
})

/**
 * 修改喜欢(作者)信息
 */
router.get('/likesAth',(req,res)=>{
  var uid=req.query.uid;
  var sql='UPDATE sanse_user SET likes=likes+1 WHERE uid=?'
  pool.query(sql,[uid],(err,result)=>{
    if(err) console.log(err);
    if(result.affectedRows>0){
      res.send({code:200,msg:"success"})
    }else{
      res.send({code:301,msg:'fail'})
    }  
  })
})

module.exports=router;