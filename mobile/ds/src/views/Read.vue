<template>
  <div class="read">
    <div class="read-item" v-for="(item,i) of list" :key="i">
      <div class="read-title">
        第{{item.catalog_number}}章 {{item.catalog_title}}
      </div>
      <div class="read-content">
        {{item.content}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[]
      }
    },
    methods:{
      getBook(){
        var sid=this.$route.params.sid;
        var uid=this.$store.state.uid;
        if(!uid){
          this.alert("请登录")
          return 
        }
        this.axios.get("http://127.0.0.1:3000/product/readBook?sid="+sid).then((res)=>{
          res=res.data;
          this.list=res.data;
        })        
      }
    },
    created(){
      this.getBook()
    },
  }
</script>
<style>
  div.read{
    background: #DEE7E8;
    color:rgb(37, 34, 34);
  }
  div.read>div.read-item{
    border-bottom:1px solid #FFF;
    padding:10px;
  }
  div.read>div.read-item>div.read-title{
    font-size:16px;
    line-height:60px;
  }
  div.read>div.read-item>div.read-content{
    font-size:15px;
  }
</style>

