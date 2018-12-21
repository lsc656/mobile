<template>
  <div class="user">
    <div class="bookImg">
      <ul>
        <li><img src="http://127.0.0.1:3000/images/Index/index-2m-1.jpg" alt=""></li>
        <li><img src="http://127.0.0.1:3000/images/Index/index-2m-1.jpg" alt=""></li>
      </ul>
    </div>
    <div>X本已购</div>
    <div class="book-list">
      <div>书架为空</div>
      <ul>
        <li>书1</li>
        <li>书2</li>
        <li>书3</li>
      </ul>
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
      getLogin(){
        var con=sessionStorage.getItem("isLogin");
        var uid=sessionStorage.getItem("uid");
        if(con){
          this.axios.post("http://127.0.0.1:3000/user/isLogin","uid="+uid).then((res)=>{
            res=res.data
            if(res.code==1){              
            }else{
              this.alert("未登录，即将跳转登录页面")
              setTimeout(()=>{
                this.$router.push("/Login")
              },2000)
            }
          })
        }else{
          this.alert("未登录，即将跳转登录页面")
          setTimeout(()=>{
            this.$router.push("/Login")
          },2000)
        }
      },
    },
    created(){
      this.getLogin();
    },
  }
</script>
<style>
  div.user{

  }
  div.user>div.bookImg{
    height:170px;
    background:linear-gradient(to top,rgb(37, 131, 150) 0% , #1DABC5 10%);
  }
  div.user>div.bookImg>ul{
    height:100%;
    list-style: none;
    display:flex;
    flex-wrap:nowrap;
    justify-content: space-around;
    align-items:flex-end;
    margin:0;
    padding:0;
    overflow:hidden;
  }
  div.user>div.bookImg>ul>li{
    width:25%;
    box-shadow:4px 5px 3px 4px rgb(37, 131, 150);
  }
  div.user>div.bookImg>ul>li>img{
    width:100%;
    vertical-align: bottom;
  }
  div.user>div:nth-child(2){
    padding:20px;
    border-bottom:1px solid #CACACA;
    font-size:14px;
    color:#4C4C4C;
  }
  div.user>div.book-list{
    
  }
</style>

