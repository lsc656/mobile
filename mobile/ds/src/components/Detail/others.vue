<template>
  <div class="others">
    <div>作者：{{list.fAuthor}}</div>
    <div>字数：{{list.wcount}}万字</div>
    <div>大小：{{list.size.toFixed(2)}}MB</div>
    <div>书号：{{list.bnumber}}</div>
    <div>出版：{{list.publish_time|oTime}}</div>
    <div>更新：{{list.update_time|oTime}}</div>
  </div>
</template>
<script>
  import {Toast} from "mint-ui"
  export default {
    data(){
      return {
        list:{
          size:0,
        },
      }
    },
    methods:{
      getOthers(){
        this.axios.get("http://127.0.0.1:3000/product/getOthers?sid="+this.sid).then((res)=>{
          res=res.data
          if(res.code==1){
            this.list=res.data;
          }else{
            Toast(res.msg)
          }
        })
      },
    },
    created(){
      this.getOthers();
    },
    props:["sid"],
  }  
</script>
<style>
  div.others{
    padding:20px 15px;
    margin-bottom:40px;
  }
  div.others>div{
    color:#666;
    line-height:25px;
  }
</style>

