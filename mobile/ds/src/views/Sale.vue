<template>
  <div class="sale">
    <header class="header">
      <div class="mui-icon mui-icon-back"></div>
      <div>|</div>
      <div>{{tag}}</div>
    </header>
    <section class="section">
      <div>
        <div class="picture"><img src="http://127.0.0.1:3000/images/Sale/product001.jpg" alt=""></div>
        <div class="info">
          <p class="title">{{title}}</p>
          <p class="author">{{fAuthor}} {{sAuthor}}</p>
          <p class="summary">{{summary}}</p>
        </div>
        <div class="price">
          <div class="newPrice">￥{{newPrice.toFixed(2)}}</div>
          <div class="oldPrice">￥{{oldPrice.toFixed(2)}}</div>
        </div>
      </div>
    </section>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
        sid:1,
        tag:"最新特价",
        title:"算法之美",
        fAuthor:"【美】布莱恩·克里斯汀",
        sAuthor:"【美】汤姆·格里菲思",
        summary:"你以为这本书讲的是算法吗？其实它说的是人生！我去二分无法erect我二二额外热情qwcdedeewfrew无",
        newPrice:9.9,
        oldPrice:40,
      }
    },
    methods:{
      getList(){
        var tagId=this.$route.params.tagId;
        this.axios.get("http://127.0.0.1:3000/product/list?tagId="+tagId).then((res)=>{
          console.log(res)
        })
      }
    },
    created(){
      this.getList();
    }
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
</style>
