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
      <div>图书简介</div>
      <div>评论</div>
      <div>更多信息</div>
    </footer>
    <comment-box></comment-box>
    <info-box></info-box>
    <others></others>
  </div>  
</template>
<script>
import comment from "../components/Detail/comment.vue";
import info from "../components/Detail/info.vue";
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
      }
    },
    components:{"comment-box":comment,"info-box":info,"others":others},
    created(){
      this.getInfo();
    }
  }
</script>
<style>
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
    justify-content: space-around;
    border-top:1px solid #C9C9C9;
    border-bottom:1px solid #C9C9C9;
    padding:5px 0;
  }
  div.detail>footer.footer>div{
    padding:8px;
  }
</style>

