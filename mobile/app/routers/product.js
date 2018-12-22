const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
//1.获取图书总表
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
//2.获取标签
router.get("/tags",(req,res)=>{
  var tagId=req.query.tagId;
  var sql="SELECT dname FROM ds_tag WHERE did=?"
  pool.query(sql,[tagId],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result})
  })
})
//3.获取detail页主详情
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
//4.获取detail页下方详情1
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
//5.获取detail页评论
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
//6.detail页点赞功能
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
//7.获取detail页下方详情2
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
//8.图书阅读：获取图书内容
router.get("/readBook",(req,res)=>{
  var sid=req.query.sid;
  if(!sid){
    res.send({code:-1,msg:"没有这本书"})
    return 
  }
  sid=1      //无更多数据。暂写死sid         
  var sql="SELECT catalog_title,catalog_number,content FROM ds_detail WHERE sid=?"
  pool.query(sql,[sid],(err,result)=>{
    if(err) console.log(err);
    res.send({code:1,data:result})
  })
})
//9.获取首页图书显示信息
router.get("/indexInfo",(req,res)=>{
  var output={f:[],s:[]}
  var sql1="SELECT bid FROM ds_product_index_1"
  var progress=0;
  pool.query(sql1,(err,result1)=>{
    if(err) console.log(err)
    var sql="SELECT sid,imgSrc,title,fAuthor FROM ds_list WHERE sid=?"
    for(var item of result1){      
      pool.query(sql,[item.bid],(err,result)=>{
        if(err) console.log(err)
        output.f.push(result[0]);
        if(output.f.length==6){
          progress+=50;
          if(progress==100){
            res.send(output);
          }
        }
      })
    }
  })
  var sql2="SELECT bid FROM ds_product_index_2"
  pool.query(sql2,(err,result2)=>{
    if(err) console.log(err);
    var sql="SELECT sid,imgSrc,title,fAuthor FROM ds_list WHERE sid=?"
    for(var item of result2){
      pool.query(sql,[item.bid],(err,result)=>{
        if(err) console.log(err);
        output.s.push(result[0]);
        if(output.s.length==6){
          progress+=50;
          if(progress==100){
            res.send(output);
          }
        }
      })
    }
  })
})
module.exports=router;