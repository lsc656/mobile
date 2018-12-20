<template>
  <div class="search">
    <div>
      <input type="text" autofocus v-model="mySearch" placeholder="输入书名或作者..."><span class="mui-icon mui-icon-search" @click="toSearch"></span>
    </div>
    <div>
      <p>大家都在搜…</p>
      <ul @click="goSearch($event)">
        <li v-for="item of list" :key="item.bid" :data-bid="item.bid">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        mySearch:"",
        list:[],
      }
    },
    methods:{
      toSearch(){
        if(!this.mySearch){
          this.alert("搜索内容不能为空！")
        }else{
          var keys=this.mySearch;
          this.axios.get("http://127.0.0.1:3000/search/mySearch?keys="+keys).then((res)=>{
            console.log(res.data)
          })
        }
      },
      goSearch(e){
        var bid=e.target.dataset.bid;
        this.$router.push("/Detail/"+bid);
      },
    },    
    created(){
      this.axios.get("http://127.0.0.1:3000/search").then((res)=>{
        res=res.data;
        this.list=res.data;
      })
    }
  }
</script>
<style>
div.search>div:first-child{
  padding:10px 20px;
  background: #1687A4;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div.search>div:first-child>input{
  margin:0;
  border-radius:20px;
  font-size:16px;
}
div.search>div:first-child>span{
  position:absolute;
  right:10%;
}
div.search>div:nth-child(2)>p,div.search>div:nth-child(2)>ul{
  margin:0;
  font-size:16px;
  line-height:40px;
}
div.search>div:nth-child(2)>p,div.search>div:nth-child(2)>ul>li{
  border-bottom:1px solid #CACACA;
  padding-left:20px;
}
div.search>div:nth-child(2)>ul{
  list-style:none;
  padding-left:0;
}
</style>

