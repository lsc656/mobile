<template>
  <div id="app">
    <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-pull-left"><img src="http://127.0.0.1:3000/images/header/logo_m.png" alt=""></a>
			<h1 class="mui-title"><span>八字</span><span>运势</span><span>抽签</span> <span>黄历</span></h1>   
      <a class="mui-pull-right"><img src="http://127.0.0.1:3000/images/header/sitemap.png" alt=""></a>
		</header>
    <div class="mui-content" style="display:none"><!-- 向上箭头,默认隐藏，下拉出现 -->      
      <a><span class="mui-icon mui-icon-arrowup"></span></a>
    </div>
    <router-view/>
    <nav class="mui-bar mui-bar-tab ">
			<a class="mui-tab-item" href="javascript:;">卜易居算命大全手机版</a>
		</nav>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        
      }
    }
  }
</script>
<style>
  #app>div:nth-child(3){
    margin-top:44px;
    margin-bottom:50px;
  }
  #header {
  	background-color: #FF7A18;
  }
  .mui-bar .mui-pull-left .mui-icon {
  	padding-right: 5px;
  	font-size: 28px;
  }
  .mui-bar .mui-btn {
  	font-weight: normal;
  	font-size: 17px;
  }
  .mui-bar .mui-btn-link {
  	top: 1px;
  }
  #header{
    border-bottom:1px solid #CA4302;
  }
  #header>a:first-child,#header>a:nth-child(3){
    padding:0;
  }
  #header>a:first-child>img{
    height:31px;
    margin-top:10%;
    margin-left:10%;
  }
  #header>a:nth-child(3)>img{
    height:19px;
    margin-top:50%;
  }
  #header>h1:nth-child(2){
   text-align:right;
  }
  #header>h1:nth-child(2)>span{
    color:#fff;
    margin-right:10px;
  }
  #app>nav{
    background-color:#F5EFE2;
  }
  #app>nav>a.mui-tab-item{
    color:rgb(206, 186, 152);
  }
</style>
