<template>
  <div class="login">
    <p>多看看书 账号登录</p>
    <input type="text" placeholder="请输入用户名" v-model="uname">
    <input type="password" placeholder="密码" v-model="upwd">
    <button>登录</button>
    <div>
      <div>立即注册</div>
      <div>|</div>
      <div>忘记密码</div>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        uname:"",
        upwd:"",
      }
    },
    methods:{
      
    },
    created(){

    },
  }  
</script>
<style>
  div.login{
    margin:20% 0;
    padding:0 20px;
  }
  div.login>p{
    font-size:25px;
    color:#333;
    text-align:center;
    text-shadow:1px 1px 5px rgb(17, 68, 77);
    margin:40px 0;
  }
  div.login>input{
    border-top:none;
    border-left:none;
    border-right:none;
    background: transparent;
  }
  div.login>button{
    width:100%;
    height:40px;
    border-radius:10px;
    background: #1DABC5;
    color:#fff;
  }
  div.login>div:nth-child(5){
    display:flex;
    justify-content: center;
  }
  div.login>div:nth-child(5)>div{
    padding:10px 20px;
  }
  div.login>div:nth-child(5)>div:nth-child(2){
    font-size:20px;
  }
</style>