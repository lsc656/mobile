<template>
  <div class="moreInfo">info</div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{

    },
    created(){

    },
    mounted(){
      this.axios.get("http://127.0.0.1:3000/product/getMoreInfo?sid="+this.sid).then((res)=>{
        console.log(res.data)
      })
    },
    props:["sid"],
  }  
</script>
<style>

</style>

