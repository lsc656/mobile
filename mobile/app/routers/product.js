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
    var sql="SELECT COUNT(sid) AS c FROM ds_list WHERE tagId=?";
    pool.query(sql,[tagId],(err,result)=>{
      if(err) throw err;
      output.c=Math.ceil(result[0].c/10);
      res.send(output)
    })
  })
})
router.get("/tags",(req,res)=>{
  var tagId=req.query.tagId;
  var sql="SELECT dname FROM ds_tag WHERE did=?"
  pool.query(sql,[tagId],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result})
  })
})
router.get("/getInfo",(req,res)=>{
  var sid=req.query.sid;
  var sql="SELECT sid,imgSrc,title,evaluate,fAuthor,sAuthor,copyright,oldPrice,newPrice FROM ds_list WHERE sid=?"
  pool.query(sql,[sid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,data:result})
    }else{
      res.send({code:0,msg:"没有这本书"})
    }
  })
})
router.get("/getMoreInfo",(req,res)=>{
  var sid=req.query.sid;
  var output={};
  var sql="SELECT did,catalog_title,catalog_content,catalog_number FROM ds_detail WHERE sid=?"
  //数据少，暂写死此处sid
  pool.query(sql,[1],(err,result)=>{
    if(err) throw err;
    output.catalog=result;
    var sql="SELECT intro FROM ds_list WHERE sid=?";
    pool.query(sql,[sid],(err,result)=>{
      if(err) throw err;
      output.info=result[0];
      res.send(output)
    })
  })
})
router.get("/getComment",(req,res)=>{
  var sid=req.query.sid;
  var sql="SELECT cid,sid,content,evaluate,time,zan FROM ds_comment WHERE sid=?";
  pool.query(sql,[sid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,data:result});
    }else{
      res.send({code:0,msg:"暂无评论数据"})
    }
  })
})
router.get("/setZan",(req,res)=>{
  var cid=req.query.cid;
  var zan=parseInt(req.query.zan);
  zan+=1;
  var sql="UPDATE ds_comment SET zan=? WHERE cid=?"
  pool.query(sql,[zan,cid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"更新成功"});
    }else{
      res.send({code:0,msg:"更新失败"})
    }
  })
})
router.get("/getOthers",(req,res)=>{
  var sid=req.query.sid;
  var sql="SELECT fAuthor,sAuthor,wcount,size,bnumber,publish_time,update_time FROM ds_list WHERE sid=?"
  pool.query(sql,[sid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,data:result[0]});
    }else{
      res.send({code:0,msg:"没有信息"})
    }
  })
})
module.exports=router;