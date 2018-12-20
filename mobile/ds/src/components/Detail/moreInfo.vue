<template>
  <div class="moreInfo">
    <div>
      <div>
        <div>
          {{info}}
        </div>
      </div>
      <div @click="getMoreInfo()">完整简介<img src="http://127.0.0.1:3000/images/Detail/arr.png" alt=""></div>
    </div>
    <div>
      <div>目录</div>
      <div>
        <div class="cata_item" v-for="item of catalog" :key="item.did">
          <p>{{item.catalog_number}}.&nbsp;-&nbsp;{{item.catalog_title}}</p>
          <p>{{item.catalog_content}}</p>
        </div>
      </div>
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
        this.deg+=1;
        var deg=this.deg%2*180;
        cImg.style.transform="rotate("+deg+"deg)";
        var cDiv=document.querySelector("div.moreInfo>div:first-child>div:first-child");
        var pDiv=document.querySelector("div.moreInfo>div:first-child>div:first-child>div");
        if(this.deg%2==0){
          cDiv.style.height="8rem";
        }else{
          cDiv.style.height=getComputedStyle(pDiv).height;
        }
      },
    },
    created(){
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
  height:8rem;
  overflow:hidden;
  transition-duration: .5s;
}
div.moreInfo>div:first-child>div:first-child>div{
  color:#666;
  font-size:0.9rem;
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
div.moreInfo>div:nth-child(2)>div:first-child,div.moreInfo>div:nth-child(2)>div:nth-child(2)>div{
  border-bottom:1px solid #C9C9C9;
  padding:10px 0;
}
div.moreInfo>div:nth-child(2)>div:first-child{
  color:#999;
  font-size:0.9rem;
  font-weight:bold;
}
div.moreInfo>div:nth-child(2)>div:nth-child(2)>div>p{
  color:#999;
}
div.moreInfo>div:nth-child(2)>div:nth-child(2)>div>p:first-child{
  font-weight:bold;
  color:#666;
}
</style>

