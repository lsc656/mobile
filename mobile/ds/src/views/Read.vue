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
        var uid=this.$store.state.uid;
        console.log(uid)
        
      }
    },
    created(){
      this.getBook()
    },
  }
</script>
<style>

</style>

