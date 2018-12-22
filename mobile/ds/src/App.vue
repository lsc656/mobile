<template>
  <div id="app">
    <header id="header" class="mui-bar mui-bar-nav">
			<router-link to="/Index" class="mui-action-back mui-icon mui-pull-left">多看看书</router-link>
      <a class="mui-pull-right h-icon-bg" @click="jumpTo($event)" data-url="/Search"></a>
      <a class="mui-pull-right" @click="logout($event)">{{this.$store.state.isLogin==true ? "退出":"|"}}</a>
      <a class="mui-pull-right h-icon-bg" @click="jumpTo($event)" data-url="/User"></a>
		</header>
    <router-view/>
    <div id="footer">
      <p><span>多看看书客户端</span>|<span>电脑版</span></p>
      <p>Copyright&copy;duokan.com</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      jumpTo(e){
        var url=e.target.dataset.url
        this.$router.push(url)
      },
      logout(e){
        if(e.target.innerHTML=="退出"){
          this.axios.post("http://127.0.0.1:3000/user/logout").then((res)=>{
            res=res.data
            this.$store.commit("setStoreUsers",["isLogin",false]);
            this.$store.commit("setStoreUsers",["uid",""]);
            this.$store.commit("setStoreUsers",["uname",""]);
            this.alert(res.msg)
          })
        }
      },
    },
    created(){

    }
  }
</script>
<style>
#app{
  padding-top:44px;
  background: #f7f7f7;
  position:absolute;
  width:100%;
  height:100%;
}
[v-cloak]{
  display:none;
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
#app>#header>a:nth-child(3){
  font-size:16px;  
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
.mark {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 3rem;
  line-height: 3rem;
  width: 80%;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  background:rgba(88,195,214,0.7);
  border-radius: 0.1rem;
}
</style>
