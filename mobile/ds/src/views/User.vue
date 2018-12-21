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
        <li>1：<span>书名</span><span>作者</span></li>
        <li>1：<span>书名</span><span>作者</span></li>
        <li>1：<span>书名</span><span>作者</span></li>
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
        var con=this.$store.state.isLogin;
        var uid=this.$store.state.uid;
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
    overflow:auto;
    position:relative;
  }
  div.user>div.bookImg>ul{
    list-style: none;
    margin:0;
    padding:0;
    overflow:hidden;
    display:flex;
    align-items:flex-end;
    justify-content: center;
    position:absolute;
    bottom:0;
  }
  div.user>div.bookImg>ul>li{
    box-shadow:4px 5px 3px 4px rgba(37, 131, 150,0.3);
  }
  div.user>div.bookImg>ul>li:first-child{
    width:25%;
  }
  div.user>div.bookImg>ul>li:nth-child(2){
    width:20%;
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
    margin-top:30px;
  }
  div.user>div.book-list>div{
    text-align:center;
    font-size:14px;
    color:#999;
    display:none;
  }
  div.user>div.book-list>ul{
    list-style: none;
    margin:0;
    padding:0;
  }
  div.user>div.book-list>ul>li{
    padding:20px 10px;
    border-bottom:1px solid #CACACA;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  div.user>div.book-list>ul>li>span:first-child{
    font-size:18px;
    color:#333;
    font-weight:bold;
    margin-right:10px;
  }
  div.user>div.book-list>ul>li>span:nth-child(2){
    font-size:12px;
    color:#999;
  }
</style>

