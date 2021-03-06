const express=require("express");
const pool=require("../pool.js");
var router=express.Router();

/**
 * 1.pins图片列表页信息
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
   * 1.1作者信息
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
   * 1.2头部标题信息
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
   * 1.3图片页详细信息
   */
  var sql="SELECT COUNT(cid) c FROM sanse_pins_pics WHERE pid=? AND authorId=?";
  pool.query(sql,[pid,authorId],(err,result)=>{
    if(err) console.log(err)
    output.c=Math.ceil(result[0].c/10);
    var sql="SELECT cid,img_md,img_lg,authorId,account,zan,likes,shares,pid,DATE_FORMAT(ctime,'%Y-%m-%d %H:%i:%s') as ctime FROM sanse_pins_pics WHERE pid=? AND authorId=? LIMIT ?,6"
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
 * 2.修改喜欢(作者)信息/count+1
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

/**
 * 3.获取关注信息
 */
router.get('/getFocusInfo',(req,res)=>{
  var focId=req.query.uid;
  var sql='SELECT uid FROM sanse_user_focus WHERE focId=?'
  pool.query(sql,[focId],(err,result)=>{
    if(err) console.log(err)
    if(result.length>0){
      var data=[];
      result.map((item,i,arr)=>{
        var sql='SELECT uid,user_img,uname FROM sanse_user WHERE uid=?'
        pool.query(sql,[item.uid],(err,result)=>{
          if(err) console.log(err)
          data.push(result[0])
          if(data.length==arr.length){
            res.send({code:200,data})
          }
        })
      })
    }else{
      res.send({code:300,msg:"no-data"})
    }
  })
})
/**
 * 4.获取用户信息(公开)
 */
router.get("/getUserPublicInfo",(req,res)=>{
  var uid=req.query.uid;
  var output={authorInfo:{},works:[],others:[]};
  var progress=0;
  //4.1作品
  var sql='SELECT img_md,img_lg,authorId,account,pid FROM sanse_pins_pics WHERE authorId=?';
  pool.query(sql,[uid],(err,result)=>{
    if(err) console.log(err);
    var sql="SELECT title FROM sanse_pins WHERE pid=?";
    result.map((item,i,arr)=>{
      pool.query(sql,[item.pid],(err,result1)=>{
        if(err) console.log(err) ;
        result[i].title=result1[0].title
        output.works=result;
        if(i==arr.length-1){
          progress+=50;
          if(progress==150){
            res.send(output)
          }
        }
      })
    })
  })
  //4.2个人
  var sql='SELECT uid,user_img,uname,fans,likes FROM sanse_user WHERE uid=?'
  pool.query(sql,[uid],(err,result)=>{
    if(err) console.log(err)
    output.authorInfo=result[0];
    progress+=50;
    if(progress==150){
      res.send(output)
    }
  })
  //4.3个人关注信息
  var sql="SELECT uid,focId FROM sanse_user_focus WHERE uid=?"
  pool.query(sql,[uid],(err,result1)=>{
    if(err) console.log(err);
    var data=[]
    var sql='SELECT uid,uname,user_img FROM sanse_user WHERE uid=?';
    result1.map((item,i,arr)=>{
      pool.query(sql,[item.focId],(err,result)=>{
        if(err) console.log(err)
        data[i]=result[0];
        if(data.length==arr.length){
          progress+=50;
          output.others=data;
          if(progress==150){
            res.send(output)
          }
        }
      })
    })
  })
})
module.exports=router;