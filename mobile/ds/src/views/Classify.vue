<template>
  <div class="classify">
    <div class="classify-item">
      <div>8093</div>
      <div>
        <div>小说</div>
        <p>
          <span>新闻传播与出版</span>
          <span>新闻传播与出版</span>
          <span>新闻传播与出版</span>
          <span>新闻传播与出版</span>
          <span>新闻传播与出版</span>
          <span>新闻传播与出版</span>
          <span>新闻传播与出版</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[],
        myNumber:[],
      }
    },
    methods:{
      getMyNumber(max,min){
        var rn=function(max,min){
          var n=Math.floor(Math.random()*(max-min)+min);
          return n
        }
      },
      getList(){
        this.axios.get("http://127.0.0.1:3000/product/classify").then((res)=>{
          res=res.data
          console.log(res);
        })
      }
    },
    created(){

    },
  }  
</script>
<style>
  div.classify>div.classify-item{
    padding:10px;
    border-bottom:1px solid #CACACA;
    display:flex;    
  }
  div.classify>div.classify-item>div:first-child{
    width:300px;
    height:70px;
    background: url("http://127.0.0.1:3000/images/Classify/classify001.png") no-repeat;
    background-position:center center;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size:28px;
  }
  div.classify>div.classify-item>div:nth-child(2){
    padding:5px 10px;
  }
  div.classify>div.classify-item>div:nth-child(2)>div{
    padding-bottom:5px;
  }
  div.classify>div.classify-item>div:nth-child(2)>p{
    overflow:hidden;
    margin:0;
    height:46px;
    color:#333;
  }
  div.classify>div.classify-item>div:nth-child(2)>p>span:not(:last-child)::after{
    content:"/";
    display:inline-block;
    margin:0 6px 0 3px;
  }
</style>

