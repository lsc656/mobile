<template>
  <div class="moreInfo">
    <div>
      <div>{{info}}</div>
      <div @click="getMoreInfo()">完整简介<img src="http://127.0.0.1:3000/images/Detail/arr.png" alt=""></div>
    </div>
    <div>
      目录
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        info:"",
        catalog:[],
        deg:0,
      }
    },
    methods:{
      getMoreInfo(e){
        var cImg=document.querySelector("div.moreInfo>div:first-child>div:nth-child(2)>img");
        this.deg+=180;
        cImg.style.transform="rotate("+this.deg+"deg)"
      },
    },
    created(){

    },
    mounted(){
      this.axios.get("http://127.0.0.1:3000/product/getMoreInfo?sid="+this.sid).then((res)=>{
        res=res.data;
        this.info=res.info.intro;
        this.catalog=res.catalog;
      })
    },
    props:["sid"],
  }  
</script>
<style>
div.moreInfo{
  padding:20px 15px;
}
div.moreInfo>div:first-child>div:first-child{
  font-size:0.9rem;
  color:#666;
}
div.moreInfo>div:first-child>div:nth-child(2){
  text-align:right;
  color:#1ba6be;
  font-size:0.7rem;
  padding:10px;
}
div.moreInfo>div:first-child>div:nth-child(2)>img{
  width:20px;
}
</style>

