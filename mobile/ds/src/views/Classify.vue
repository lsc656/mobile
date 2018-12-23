<template>
  <div class="classify">
    <div class="classify-item" v-for="(item,i) of tag" :key="i" @click="jumpTo($event)">
      <div :style='{backgroundImage:"url("+item.imgSrc+")"}'>8093</div>
      <div>
        <div :data-tagId="item.cid">{{item.tagName}}</div>
        <p>
          <span v-for="(item,j) of mItem[i]" :key="j" :data-lid="item.lid">{{item.lname}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tag:[],
        mItem:[],
      }
    },
    methods:{
      jumpTo(e){
        if(e.target.dataset.lid){
          console.log(1)
        }
      },
      getList(){
        this.axios.get("http://127.0.0.1:3000/product/classify").then((res)=>{
          res=res.data
          this.tag=res.tag;
          this.mItem=res.item;
        })
      }
    },
    created(){
      this.getList();
    },
  }  
</script>
<style>
  div.classify{
    background:#F7F7F7;
  }
  div.classify>div.classify-item{
    padding:10px;
    border-bottom:1px solid #CACACA;
    display:flex;
  }
  div.classify>div.classify-item>div:first-child{
    height:70px;
    padding:10px 0;
    background-repeat:no-repeat;
    background-position:center center;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size:28px;
  }
  div.classify>div.classify-item>div:nth-child(2){
    padding:0px 20px 0px 10px;
    position:relative;
    width:100%;
  }
  div.classify>div.classify-item>div:nth-child(2)::after{
    content:"";
    width:8px;
    height:8px;
    border-top:1px solid #CACACA;
    border-right:1px solid #CACACA;
    transform:rotate(45deg);    
    position:absolute;
    top:50%;
    right:0;
  }
  div.classify>div.classify-item>div:nth-child(2)>div{
    padding-bottom:5px;
  }
  div.classify>div.classify-item>div:nth-child(2)>p{
    overflow:hidden;
    margin:0;
    height:46px;
    color:#666;
  }
  div.classify>div.classify-item>div:nth-child(2)>p>span:not(:last-child)::after{
    content:"/";
    display:inline-block;
    margin:0 6px 0 3px;
  }
</style>

