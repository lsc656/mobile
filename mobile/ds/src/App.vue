<template>
  <div id="app">
    <header id="header" class="mui-bar mui-bar-nav">
			<router-link to="/Index" class="mui-action-back mui-icon mui-pull-left">多看阅读</router-link>
      <a class="mui-pull-right h-icon-bg"></a>
      <a class="mui-pull-right">|</a>
      <a class="mui-pull-right h-icon-bg"></a>
		</header>
    <router-view/>
    <div id="footer">
      <p><span>多看客户端</span>|<span>电脑版</span></p>
      <p>Copyright&copy;duokan.com</p>
    </div>
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
#app{
  padding-top:44px;
}
#app>#header{
  background: #1DABC5;
}
#app>#header>a{
  color:#fff;
}
#app>#header>a:first-child{
  font-size:18px;
  margin-top:5px;
}
#app>#header>a.h-icon-bg{
  background:url("http://127.0.0.1:3000/images/header/icon.png") no-repeat;
  background-size:22px;
  display:inline-block;
  width:22px;
  height:22px;
}
#app>#header>a.mui-pull-right{
  margin-right:10px;
  margin-top:10px;
  font-size:26px;
  font-weight:lighter;
}
#app>#header>a.h-icon-bg:nth-child(2){  
  background-position:0 -22px;
}
#app>#header>a.h-icon-bg:nth-child(4){
  background-position:0 0;
}
#footer{
  background: #F7F7F7;
  padding:20px 0;
  text-align:center;
}
#footer>p{
  letter-spacing: 1px;
}
#footer>p>span{
  margin:0 5px;
}
</style>
