<template>
  <div class="login">
    <p>多看看书 账号登录</p>
    <input type="text" placeholder="请输入用户名" v-model="uname" autofocus>
    <input type="password" placeholder="密码" v-model="upwd">
    <button @click="login">登录</button>
    <div>
      <div @click="reg">立即注册</div>
      <div>|</div>
      <div @click="forget">忘记密码</div>
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
      login(){
        if(!this.uname || !this.upwd){
          return this.alert("用户名或密码不能为空")
        }else{
          var reg=/^[\d\w]{6,20}$/;
          if(reg.test(this.uname) && reg.test(this.upwd)){
            this.axios.post("http://127.0.0.1:3000/user/login",`uname=${this.uname}&upwd=${this.upwd}`).then((res)=>{
              res=res.data;
              if(res.code==1){
                var t=2;
                this.alert("登录成功，3秒后跳转首页")
                sessionStorage.setItem("uid",res.data.uid);
                sessionStorage.setItem("uname",res.data.uname);
                sessionStorage.setItem("isLogin",true);
                var s=setInterval(()=>{
                  if(t>0){
                    this.alert("登录成功，"+t+"秒后跳转首页")
                    t--
                  }else{
                    clearInterval(s)
                    this.$router.push("/Index")
                  }
                },1000)
              }else{
                this.alert(res.msg)
              }
            })
          }else{
            return this.alert("用户名或密码格式不正确")
          }
        }
      },
      reg(){
        this.$router.push("/Reg")
      },
      forget(){
        console.log("forget")
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
    background: #1DABC5;
    color:#fff;
    margin-top:10px;
  }
  div.login>div:nth-child(5){
    display:flex;
    justify-content: center;
    margin-top:20px;
  }
  div.login>div:nth-child(5)>div{
    padding:10px 20px;
  }
  div.login>div:nth-child(5)>div:nth-child(2){
    font-size:25px;
    padding-top:7px;
  }
</style>
