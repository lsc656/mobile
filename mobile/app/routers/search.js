const express=require("express");
const pool=require("../pool.js")
var router=express.Router();
router.get("/",(req,res)=>{
  var sql="SELECT bid,title FROM ds_user_search"
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result})
  })
})
router.get("/mySearch",(req,res)=>{
  var keys=req.query.keys.split(" ");
  var arr=[];
  for(var i in keys){
    keys[i]="%"+keys[i]+"%";
    arr.push(keys[i])
  }
  function getSql(keys,col){
    var params=" "+col+" LIKE ?";
    for(var i=1;i<keys.length;i++){
      params+=" AND "+col+" LIKE ?";
    }
    return params;
  }
  var output={};
  output.t;
  output.a;
  console.log(keys)
  //title
  var params=getSql(keys,"title");
  var sql="SELECT sid,title,imgSrc,fAuthor,summary FROM ds_list WHERE"+params;
  console.log(sql)
  pool.query(sql,[arr],(err,result)=>{
    if(err) throw err;
    output.t=result;
    if(output.t && output.a){
      res.send({code:1,data:output})
    }
  })
  //author
  var params=getSql(keys,"fAuthor");
  var sql="SELECT sid,title,imgSrc,fAuthor,summary FROM ds_list WHERE"+params;
  pool.query(sql,[keys],(err,result)=>{
    if(err) throw err;
    output.a=result;
    if(output.t && output.a){
      res.send({code:1,data:output})
    }
  })
})

module.exports=router;