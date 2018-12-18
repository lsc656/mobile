<template>
  <div class="detail">
    <header class="header">
      <div class="mui-icon mui-icon-back" @click="goPrev"></div>
      <div>|</div>
      <div v-cloak>图书详情</div>
    </header>
    <section class="section">
      <div>
        <div><img src="http://127.0.0.1:3000/images/Sale/product008.jpg" alt=""></div>
        <div>
          <h4>周浩晖推理悬疑经典集（共10册）</h4>
          <div><div></div><p>评分</p></div>
          <p>作者：XXXX</p>
          <p>版权：XXXXXXXX</p>
          <p>
            <del>￥380.00</del>
            <span>￥359.00</span>
            <span>7.0折</span>
          </p>
        </div>
      </div>
      <div>
        <button>立即购买</button>
        <button>免费试读</button>
      </div>
    </section>
    <footer class="footer">
      <div @click="getmoreInfo">图书简介</div>
      <div @click="getComment">评论</div>
      <div @click="getOthers">更多信息</div>
      <p class="moveP"></p>  <!--left 17%,50%,81% -->    
    </footer>
    <moreInfo-box :sid="this.$route.params.sid"></moreInfo-box>
    <comment-box :sid="this.$route.params.sid"></comment-box>
    <others :sid="this.$route.params.sid"></others>
  </div>  
</template>
<script>
import comment from "../components/Detail/comment.vue";
import moreInfo from "../components/Detail/moreInfo.vue";
import others from "../components/Detail/others.vue";
  export default {
    data(){
      return {}
    },
    methods:{
      goPrev(){
        history.go(-1)
      },
      getInfo(){
        var sid=this.$route.params.sid;
        //this.axios.get()
      },
      moveP(percent){
        if(!percent){
          percent="17%";
        }
        var p=document.getElementsByClassName("moveP");
        p.setAttribute("left",percent);
      },
      getmoreInfo(){

        this.moveP();
      },
      getComment(){

        this.moveP("50%");
      },
      getOthers(){
        this.moveP("81%");
      },
    },
    components:{"comment-box":comment,"moreInfo-box":moreInfo,"others":others},
    created(){
      this.getInfo();
      this.moveP();
    }
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
  }
  div.detail>footer.footer>div:not(:nth-child(3)){
    border-right:1px solid #C9C9C9;
  }
  div.detail>footer.footer>p{
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

