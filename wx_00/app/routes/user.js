const express=require('express');
const pool=require('../pool');
var router=express.Router();
//获取采集信息
router.get('/getUserCJ',(req,res)=>{
  var authorId=req.query.uid;
  var sql='SELECT cid,img_md,img_lg,authorId,account FROM sanse_pins_pics WHERE authorId=?'
  pool.query(sql,authorId,(err,result)=>{
    if(err) console.log(err)
    res.send({code:200,data:result})
  })
})

//接受图片插入数据库
const fs=require('fs');
const multer=require('multer');
var upload=multer({dest:"public/upload"});
router.post('/uploadPics',upload.single('myPics'),(req,res)=>{
  //检测是否是图片
  var authorId=req.body.userId
  var type=req.file.mimetype;
  var i2=type.indexOf('image');
  if(i2==-1){
    res.send({code:-1,msg:'上传只能是图片'});
    return;
  }
  var src=req.file.originalname;
  var fTime=new Date().getTime();
  var fRand=Math.floor(Math.random()*9999);
  /*var t=src.split(".");
  var suff=t[t.length-1];*/
  var i3=src.lastIndexOf(".");
  var suff=src.substring(i3,src.length);
  var des="public/img/imgs/"+fTime+fRand+suff;
  fs.renameSync(req.file.path,des)
  //插入数据库
  var sql='INSERT INTO sanse_pins_pics (img_md,img_lg,ctime,authorId) VALUES (?,?,?,?)';
  var path='http://127.0.0.1:3000/'+des.substring(7)
  pool.query(sql,[path,path,'now()',authorId],(err,result)=>{
    if(err) console.log(err)
    if(result.affectedRows>0){
      res.send({code:200,msg:'图片上传成功'});
    }else{
      res.send({code:-2,msg:'fail'})
    }
  })
})

//获取关注信息
router.get('/getFocus',(req,res)=>{
  var uid=req.query.uid;
  if(!uid){
    res.send({code:-1,msg:'no-catch-uid'})
  }
  var sql='select focId from sanse_user_focus WHERE uid=?';
  var data=[];
  pool.query(sql,uid,(err,result)=>{
    if(err) console.log(err)
    if(result.length>0){
      var sql='SELECT uid,user_img,uname FROM sanse_user WHERE uid=?;';
      result.map((item,i,arr)=>{
        pool.query(sql,[item.focId],(err,result)=>{
          if(err) console.log(err)
          data.push(result[0]);
          if(data.length==arr.length){
            res.send({code:200,data})
          }
        })
      })
    }else{
      res.send({code:201,data:[]})
    }
  })
})
//删除关注信息
router.get('/delFocus',(req,res)=>{
  var uid=req.query.uid;
  var focId=req.query.focId;
  var sql='DELETE FROM sanse_user_focus WHERE uid=? AND focId=?';
  pool.query(sql,[uid,focId],(err,result)=>{
    if(err) console.log(err);
    if(result.affectedRows>0){
      res.send({code:200,msg:'success'})
    }else{
      res.send({code:-1,msg:'fail'})
    }
  })
})
//获取所有信息
router.get('/getUInfo',(req,res)=>{
  var uid = req.query.uid;
  var sql='SELECT uid,user_img,uname,tel FROM sanse_user WHERE uid=?';
  pool.query(sql,uid,(err,result)=>{
    if(err) console.log(err)
    res.send({code:200,data:result[0]})
  })
})
//修改头像
router.post('/changeHeaderPic',upload.single('myPic'),(req,res)=>{
    //检测是否是图片
    var uid=req.body.uid
    var type=req.file.mimetype;
    var i2=type.indexOf('image');
    if(i2==-1){
      res.send({code:-1,msg:'上传只能是图片'});
      return;
    }
    var src=req.file.originalname;
    var fTime=new Date().getTime();
    var fRand=Math.floor(Math.random()*9999);
    /*var t=src.split(".");
    var suff=t[t.length-1];*/
    var i3=src.lastIndexOf(".");
    var suff=src.substring(i3,src.length);
    var des="public/img/headPortraits/"+fTime+fRand+suff;
    fs.renameSync(req.file.path,des)
    //插入数据库
    var sql='UPDATE sanse_user SET user_img=? WHERE uid=?';
    var path='http://127.0.0.1:3000/'+des.substring(7)
    pool.query(sql,[path,uid],(err,result)=>{
      if(err) console.log(err)
      if(result.affectedRows>0){
        res.send({code:200,msg:'success'});
      }else{
        res.send({code:-2,msg:'fail'})
      }
    })
})
//修改用户名及联系方式
router.get('/changeUInfo',(req,res)=>{
  var uname=req.query.uname;
  var tel=req.query.tel;
  var uid=req.query.uid;
  var sql='UPDATE sanse_user SET uname=?,tel=? WHERE uid=?';
  pool.query(sql,[uname,tel,uid],(err,result)=>{
    if(err) console.log(err)
    if(result.affectedRows>0){
      res.send({code:200,msg:"success"})
    }else{
      res.send({code:-1,msg:'fail'})
    }
  })
})
//修改图片详情
router.get('/changePicInfo',(req,res)=>{
  var cid=req.query.cid;
  var account=req.query.account;
  var authorId=req.query.authorId
  var sql='UPDATE sanse_pins_pics SET account=? WHERE cid=? AND authorId=?';
  pool.query(sql,[account,cid,authorId],(err,result)=>{
    if(err) console.log(err)
    if(result.affectedRows>0){
      res.send({code:200,msg:'success'})
    }else{
      res.send({code:-1,msg:'fail'})
    }
  })
})
//查询图片修改页需要的数据
router.get('/getChPic',(req,res)=>{
  var cid=req.query.cid;
  var authorId=req.query.authorId;
  var sql='SELECT img_md,account FROM sanse_pins_pics WHERE cid=? AND authorId=?';
  pool.query(sql,[cid,authorId],(err,result)=>{
    if(err) console.log(err)
    if(result.length>0){
      res.send({code:200,data:result[0]})
    }else{
      res.send({code:-1,msg:'no-data'})
    }
  })
})
//修改关注信息
router.get('/changeFocus',(req,res)=>{
  var uid=parseInt(req.query.uid);
  var focId=parseInt(req.query.focId);
  var sql='INSERT INTO sanse_user_focus (uid,focId) VALUES (?,?)';
  pool.query(sql,[uid,focId],(err,result)=>{
    if(err) console.log(err)
    if(result.affectedRows>0){
      res.send({code:200,msg:'success'})
    }else{
      res.send({code:-1,msg:'fail'})
    }
  })
})
module.exports=router;