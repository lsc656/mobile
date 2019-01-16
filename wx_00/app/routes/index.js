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
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"})
    return
  }
  var startI=(pno-1)*6;
  var sql="SELECT COUNT(pid) c FROM sanse_pins";
  pool.query(sql,(err,result)=>{
    if(err) console.log(err)
    output.c=Math.ceil(result[0].c/6);
    var sql="SELECT pid,title,img_url,hit,fans,author FROM sanse_pins LIMIT ?,6"
      pool.query(sql,[startI],(err,result)=>{
        if(err) console.log(err)
        output.fl2=result;
        progress+=50;
        if(progress==100){
          res.send({code:1,data:output});
        }
      })
  })
  
})
router.get('/search',(req,res)=>{
  var searchArr=JSON.parse(req.query.searchArr);
  var sql_search=[];
  searchArr.map((item,i,arr)=>{
     arr[i] ="%"+item+"%";
    sql_search[i] = 'account LIKE ?'
    if(i == arr.length-1){
      var sql="SELECT cid,img_md,img_lg,authorId,account FROM sanse_pins_pics WHERE "
      var mySql=sql+sql_search.join(" AND ");
      pool.query(mySql,arr,(err,result)=>{  
        if(err) console.log(err)
        res.send({code:200,data:result})
      })
    }
  })
})

module.exports=router;