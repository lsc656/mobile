<template>
  
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      getBook(){
        var sid=this.$route.params.sid;
        var uid=sessionStorage.getItem("uid");
        
      }
    },
    created(){
      this.getBook()
    },
  }
</script>
<style>

</style>

