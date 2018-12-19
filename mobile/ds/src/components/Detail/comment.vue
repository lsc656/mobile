<template>
  <div class="comment">
    <div>
      <div class="comment-item" v-for="(item,i) of list" :key="i">
        <p>{{item.content}}</p>
        <div>
          <div class="star">{{item.time|sTime}}</div>
          <div class="score">
            <div><img src="http://127.0.0.1:3000/images/comment/icon-small-1.png" alt=""></div>
            <span>{{item.zan}}</span>
          </div>
        </div>
      </div>
    </div>
    <div>第X页</div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[],
      }
    },
    methods:{
      getComment(){
        this.axios.get("http://127.0.0.1:3000/product/getComment?sid="+this.sid).then((res)=>{
         res=res.data;
         if(res.code==1){
           this.list=res.data;
         }
        })
      }
    },
    created(){
      this.getComment();
    },
    props:["sid"],
  }  
</script>
<style>
div.comment>div>div.comment-item{
  padding:10px;
  border-bottom:1px solid #C9C9C9;
}
div.comment>div>div.comment-item>div:nth-child(2){
  display:flex;
  justify-content: space-between;
}
div.comment>div>div.comment-item>div:nth-child(2)>div:first-child{
  width:75%;
  text-align:right;
}
div.comment>div>div.comment-item>div:nth-child(2)>div:nth-child(2){
  width:25%;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.star{
  background:url("http://127.0.0.1:3000/images/Detail/star.png") no-repeat;
  background-size:100px;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.score{
  display:flex;
}
</style>

