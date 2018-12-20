<template>
  <div class="comment">
    <p id="pWidth" style="float:left">★★★★★</p>
    <div>
      <div class="comment-item" v-for="(item,i) of list" :key="i">
        <p>{{item.content}}</p>
        <div>
          <div class="star">
            <div>
              <p class="star-before">★★★★★</p>
              <p class="star-after">★★★★★</p>
            </div>
            <div class="time">
              {{item.time|sTime}}
            </div>          
          </div>
          <div class="score">
            <div><img src="http://127.0.0.1:3000/images/comment/icon-small-1.png" alt="" :data-zan="item.zan" :data-cid="item.cid" @click="zan($event)"></div>
            <span>{{item.zan}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        list:[],
        pWidth:"",
      }
    },
    methods:{
      zan(e){       
        var cid=e.target.dataset.cid;
        var zan=e.target.dataset.zan;
        this.axios.get("http://127.0.0.1:3000/product/setZan?cid="+cid+"&zan="+zan).then((res)=>{
          this.getComment();
        })
      },
      getpWidth(){
        var p=document.getElementById("pWidth");
        this.pWidth=window.getComputedStyle(p).width
        document.getElementsByClassName("comment")[0].removeChild(p);
      },
      getComment(){
        this.axios.get("http://127.0.0.1:3000/product/getComment?sid="+this.sid).then((res)=>{
         res=res.data;
         if(res.code==1){
           this.list=res.data;
         }
        })
      },
      setStarWidth(){
        var con=document.querySelectorAll("div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child");
        var prevStar=document.querySelectorAll("div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child>p.star-before");
        var nextStar=document.querySelectorAll("div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child>p.star-after");
        var time=document.getElementsByClassName("time");
        for(var i=0;i<con.length;i++){
          var a=window.getComputedStyle(prevStar[i]).width;
          con[i].style.width=this.pWidth;
          prevStar[i].style.width=this.pWidth;
          time[i].style.marginLeft=this.pWidth;
          nextStar[i].style.width=(this.list[i].evaluate/5)*parseInt(this.pWidth)+"px";
        }
      },
    },
    created(){
      this.getComment();
    },
    mounted(){
      this.getpWidth();
    },
    updated(){
      this.setStarWidth()
    },
    props:["sid"],
  }  
</script>
<style>
#pWidth{
  letter-spacing: 3px;
}
div.comment>div>div.comment-item{
  padding:10px;
  border-bottom:1px solid #C9C9C9;
}
div.comment>div>div.comment-item>p:first-child{
  color:#666666;
}
div.comment>div>div.comment-item>div:nth-child(2){
  display:flex;
  justify-content: space-between;
  height:22px;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.star{
  display:flex;
  flex-grow:1;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child{
  position:relative;
  letter-spacing: 3px;
}
/*星星*/
div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child>p{
  position: absolute;
  margin:0px;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child>p.star-before{
  color:#B2B2B2;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:first-child>p.star-after{
  color:#FC662A;
  overflow:hidden;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.star>div:nth-child(2){
  font-size:14px;
  color:#666;
  width:70%;
}
div.comment>div>div.comment-item>div:nth-child(2)>div:nth-child(2){
  width:15%;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.score{
  display:flex;
  justify-content:flex-end;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.score>div>img{
  height:100%;
}
div.comment>div>div.comment-item>div:nth-child(2)>div.score>span{
  padding-top:2px;
  margin-left:5px;
  color:#B2B2B2;
}


</style>

