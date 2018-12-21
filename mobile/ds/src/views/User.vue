<template>
  <div class="user">
    User 进入前先判断login状态。若无登录，跳转/Login
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

</style>

