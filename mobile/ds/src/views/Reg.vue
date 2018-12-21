<template>
  <div class="login">
    <p>多看看书 账号注册</p>
    <input type="text" placeholder="请输入用户名" v-model="uname" autofocus>
    <input type="password" placeholder="密码" v-model="upwd">
    <input type="password" placeholder="确认密码" v-model="cpwd">
    <button @click="reg">立即注册</button>
    <button @click="pushlogin">登录</button>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        uname:"",
        upwd:"",
        cpwd:"",
      }
    },
    methods:{
      reg(){},
      pushlogin(){
        this.$router.push("/Login")
      },
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
    text-shadow:2px 3px 5px rgb(17, 68, 77);
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
    margin-top:30px;
    font-size:20px;
  }
  div.login>button:first-child{
    background: #1DABC5;
    color:#fff;
  }
  div.login>button:nth-child(6){
    background: #fff;
    color:#333;
  }
</style>
