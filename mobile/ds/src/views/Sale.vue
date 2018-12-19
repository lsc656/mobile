<template>
  <div class="sale">
    <header class="header">
      <div class="mui-icon mui-icon-back" @click="goIndex"></div>
      <div>|</div>
      <div v-cloak>{{tag}}</div>
    </header>
    <section class="section">
      <div v-for="item of list" :key="item.sid" @click="goDetail($event)" :data-sid="item.sid">
        <div class="picture"><img :src="item.imgSrc" alt=""></div>
        <div class="info">
          <p class="title" v-cloak>{{item.title}}</p>
          <p class="author" v-cloak>{{item.fAuthor}} {{item.sAuthor}}</p>
          <p class="summary" v-cloak>{{item.summary}}</p>
        </div>
        <div class="price">
          <div class="newPrice" v-cloak>￥{{item.newPrice.toFixed(2)}}</div>
          <div class="oldPrice" v-cloak>￥{{item.oldPrice.toFixed(2)}}</div>
        </div>
      </div>
    </section>
    <div class="controls">
      <button @click="changePno(-1)">上一页</button>
      <span>第{{pno}}/{{pageCount}}页</span>
      <button @click="changePno(+1)">下一页</button>
    </div>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
        pno:1,
        pageCount:0,
        tag:"",
        list:[],
      }
    },
    methods:{
      getList(){
        this.axios.get("http://127.0.0.1:3000/product/list?tagId="+this.$route.params.tagId+"&pno="+this.pno).then((res)=>{
          this.pageCount=res.data.c;
          this.list=res.data.data;
          this.changeButton();
        })
      },
      getTag(){
        this.axios.get("http://127.0.0.1:3000/product/tags?tagId="+this.$route.params.tagId).then((res)=>{
          if(res.data.code==1){
            this.tag=res.data.data[0].dname;
          }
        })
      },
      changeButton(){
        if(this.pno==1 && this.pageCount==1){
          document.getElementsByTagName("button")[0].setAttribute("disabled","disabled");
          document.getElementsByTagName("button")[1].setAttribute("disabled","disabled");
          return 
        }
        if(this.pno==this.pageCount){
          document.getElementsByTagName("button")[1].setAttribute("disabled","disabled");
          document.getElementsByTagName("button")[0].removeAttribute("disabled","disabled");
        }
        if(this.pno<this.pageCount){
          document.getElementsByTagName("button")[0].removeAttribute("disabled","disabled");
          document.getElementsByTagName("button")[1].removeAttribute("disabled","disabled"); 
        }
        if(this.pno==1){
          document.getElementsByTagName("button")[0].setAttribute("disabled","disabled");
          document.getElementsByTagName("button")[1].removeAttribute("disabled","disabled");
        }
      },
      changePno(n){
        this.pno=this.pno+n;
        this.getList();
        this.changeButton();
      },
      goIndex(){
        this.$router.push("/Index")
      },
      goDetail(e){       
       this.$router.push("/Detail/"+ e.currentTarget.getAttribute("data-sid"));
      },
    },
    created(){
      this.getList();
      this.getTag();
    },
  }
</script>
<style>
  div.sale>header.header{
    display:flex;
    background: #58C3D6;
    padding:8px 0;
  }
  div.sale>header.header>div{
    margin:0 10px;
    color:#fff;
  }
  div.sale>section.section{
    background: #F7F7F7;
  }
  div.sale>section.section>div{
    border-bottom:1px solid #BCBCBC;
    display:flex;
    padding:10px;
  }
  div.sale>section.section>div>div.picture{
    width:20%;
    padding:5px;
  }
  div.sale>section.section>div>div.picture>img{
    width:100%;
  }
  div.sale>section.section>div>div.info{
    width:65%;
    padding:10px;
  }
  div.sale>section.section>div>div.info>p{
    margin:0;
  }
  div.sale>section.section>div>div.info>p.title{
    font-weight:bold;
    font-size:16px;
    color:#000;
  }
  div.sale>section.section>div>div.info>p.author{
    font-size:0.5rem;
    height:1rem;
    overflow:hidden;
    margin:5px 0;
  }
  div.sale>section.section>div>div.info>p.summary{
    font-size:0.5rem;
    height:2rem;
    line-height:1rem;
    color:#666666;
    overflow:hidden;
  }
  div.sale>section.section>div>div.price{
    width:15%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  div.sale>section.section>div>div.price>div{
    font-size:0.5rem;
  }
  div.sale>section.section>div>div.price>div.newPrice{
    color:#4CA9E5;
  }
  div.sale>section.section>div>div.price>div.oldPrice{
    text-decoration-line: line-through;
    color:#999999;
  }
  div.sale>div.controls{
    margin:20px 0;
    text-align:center;
    line-height:200%;
    background: #F7F7F7;
  }
  div.sale>div.controls>button{
    margin:0 10px;
  }
  div.sale>div.controls>span{
    vertical-align:baseline;
    color:#666;
  }
</style>