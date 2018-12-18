<template>
  <div class="detail">
    <header class="header">
      <div class="mui-icon mui-icon-back" @click="goPrev"></div>
      <div>|</div>
      <div v-cloak>图书详情</div>
    </header>
    <section class="section">
      <div>
        <div><img :src="info.imgSrc" alt=""></div>
        <div>
          <h4>{{info.title}}</h4>
          <div><div></div><p>{{info.evaluate}}</p></div>
          <p>作者：{{info.fAuthor}}&nbsp;{{info.sAuthor}}</p>
          <p>版权：{{info.copyright}}</p>
          <p>
            <del v-if="info.oldPrice">￥{{info.oldPrice.toFixed(2)}}</del>
            <span v-if="info.newPrice">￥{{info.newPrice.toFixed(2)}}</span>
            <span v-if="info.newPrice && info.oldPrice">{{parseInt(10*info.newPrice/info.oldPrice).toFixed(1)}}折</span>
          </p>
        </div>
      </div>
      <div>
        <button>立即购买</button>
        <button>免费试读</button>
      </div>
    </section>
    <footer class="footer">
      <div @click="moveP('17%')">图书简介</div>
      <div @click="moveP('50%')">评论</div>
      <div @click="moveP('81%')">更多信息</div>
      <p class="moveP"></p>
    </footer>
    <moreInfo-box :sid="this.$route.params.sid"></moreInfo-box>
    <comment-box :sid="this.$route.params.sid"></comment-box>
    <others-box :sid="this.$route.params.sid"></others-box>
  </div>  
</template>
<script>
import moreInfo from "../components/Detail/moreInfo.vue";
import comment from "../components/Detail/comment.vue";
import others from "../components/Detail/others.vue";
import {Toast} from "mint-ui"
// star 1,-20,-42,-64,-86
  export default {
    data(){
      return {
        info:[],
      }
    },
    methods:{
      goPrev(){
        history.go(-1)
      },
      getInfo(){
        var sid=this.$route.params.sid;
        this.axios.get("http://127.0.0.1:3000/product/getInfo?sid="+sid).then((res)=>{
          if(res.data.code==1){
            this.info=res.data.data[0];
            this.getPic();
          }else if(res.data.code==0){
            Toast(res.data.msg)
          }else{
            Toast("未知错误");
          }
        })
      },
      moveP(percent){
        // 移动小箭头
        if(!percent){
          percent="17%";
        }
        var p=document.getElementsByClassName("moveP")[0];
        p.style.left=percent;
        this.changeBox(percent);
      },
      changeBox(percent){
        // 更换下方内容区域显示（目录介绍，评论，更多信息）
        if(!percent){
          percent="17%";
        }
        var mib=document.getElementsByClassName("moreInfo")[0];
        var cb=document.getElementsByClassName("comment")[0];
        var ob=document.getElementsByClassName("others")[0];
        if(percent=="17%"){
          mib.style.display="block";
          cb.style.display="none";
          ob.style.display="none";
        }else if(percent=="50%"){
          mib.style.display="none";
          cb.style.display="block";
          ob.style.display="none";
        }else if(percent=="81%"){
          mib.style.display="none";
          cb.style.display="none";
          ob.style.display="block";
        }  
      },
      getPic(){
        // 切换评分图片
        var picDiv=document.querySelector("section.section>div:first-child>div:nth-child(2)>div:nth-child(2)>div:first-child");
        var num=parseInt(this.info.evaluate);
        picDiv.style.backgroundPosition="0 "+(-num*22+1)+"px"
      },
    },
    components:{"comment-box":comment,"moreInfo-box":moreInfo,"others-box":others},
    mounted(){
      this.getInfo();
      this.moveP();
    },
  }
</script>
<style>
  div.detail{
    background: #F7F7F7;
  }
  div.detail>header.header{
    display:flex;
    background: #58C3D6;
    padding:8px 0;
  }
  div.detail>header.header>div{
    margin:0 10px;
    color:#fff;
  }
  div.detail>section.section{
    padding:10px;
  }
  div.detail>section.section>div:first-child{
    display:flex;
    justify-content: space-between;
  }
  div.detail>section.section>div:first-child>div:first-child{
    width:30%;
  }
  div.detail>section.section>div:first-child>div:first-child>img{
    width:100%;
  }
  div.detail>section.section>div:first-child>div:nth-child(2){
    width:65%;    
    display:flex;
    flex-direction: column;
    justify-content:space-between;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>div:nth-child(2){
    display:flex;
    align-items: center;
    overflow:hidden;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>div:nth-child(2)>p{
    margin-bottom:0;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>div:nth-child(2)>div{
    /* 星星评分 */
    background: url("http://127.0.0.1:3000/images/Detail/star.png") no-repeat;
    width:40%;
    background-size:83px;
    background-position:0 1px;
    height:17px;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>div:nth-child(2)>div>img{
    vertical-align: middle;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>p{
    margin-bottom:0;
    color:#666;
    font-size:12px;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>p:nth-child(5)>span:nth-child(2){
    color:#000;
    margin:0 10px;
  }
  div.detail>section.section>div:first-child>div:nth-child(2)>p:nth-child(5)>span:nth-child(3){
    padding:3px 5px;
    background: #FC662A;
    color:#fff;
    border-radius:8px;
  }
  div.detail>section.section>div:nth-child(2){
    display:flex;
    justify-content: space-between;
    margin-top:10px;
    height:2.5rem;
  }
  div.detail>section.section>div:nth-child(2)>button{
    flex-grow: 1;
  }
  div.detail>section.section>div:nth-child(2)>button:first-child{
    margin-right:10px;
    color:#fff;
    background: #FC662A;
  }
  div.detail>section.section>div:nth-child(2)>button:nth-child(2){
    color:#666;
  }
  div.detail>footer.footer{
    display:flex;
    border-top:1px solid #C9C9C9;
    border-bottom:1px solid #C9C9C9;
    padding:5px 0;
    position:relative;
  }
  div.detail>footer.footer>div{
    padding:8px 0;
    flex-grow: 1;
    text-align:center;
    font-size:0.8rem;
    color:#333;
  }
  div.detail>footer.footer>div:not(:nth-child(3)){
    border-right:1px solid #C9C9C9;
  }
  div.detail>footer.footer>p.moveP{
    border-top:1px solid #C9C9C9;
    border-right:1px solid #C9C9C9;
    width:6px;
    height:6px;
    background: #fafafa;
    transform:rotate(-45deg);
    position:absolute;
    top:44px;
    left:17%;
  }
</style>

