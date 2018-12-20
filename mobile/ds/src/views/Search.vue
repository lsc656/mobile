<template>
  <div class="search">
    <div>
      <input type="text" autofocus v-model="mySearch" placeholder="输入书名或作者..."><span class="mui-icon mui-icon-search" @click="toSearch"></span>
    </div>
    <div class="first-page">
      <p>大家都在搜…</p>
      <ul @click="goSearch($event)">
        <li v-for="item of list" :key="item.bid" :data-bid="item.bid">{{item.title}}</li>
      </ul>
    </div>
    <div class="second-page" style="display:none">
      <div v-if="searchList.length>0" class="find" @click="goDetail($event)">
        <div class="search-item"  v-for="item of searchList" :key="item.sid" :data-sid="item.sid">
          <img :src="item.imgSrc" alt="">
          <div>
            <p class="b-title">{{item.title}}</p>
            <p class="b-author">{{item.fAuthor}}</p>
            <p class="b-summary">{{item.summary}}</p>
          </div>
        </div>
      </div>
      <div v-else class="not-found">
        没有找到任何东西...
      </div>
    </div>
  </div>
</template>
<script>
  var firstPage=document.getElementsByClassName("first-page")[0];
  var secondPage=document.getElementsByClassName("second-page")[0];
  export default {
    data(){
      return {
        mySearch:"",
        list:[],
        searchList:[],
      }
    },
    methods:{
      search(){
        var reg=/^\s*$/
        var keys=this.mySearch;
        var firstPage=document.getElementsByClassName("first-page")[0];
        var secondPage=document.getElementsByClassName("second-page")[0];
        if(reg.test(keys)){
          firstPage.style.display="block";
          secondPage.style.display="none";
          return
        }
        firstPage.style.display="none";
        secondPage.style.display="block";
        this.axios.get("http://127.0.0.1:3000/search/mySearch?keys="+keys).then((res)=>{
          res=res.data.data;
          this.searchList=[].concat(res.a,res.t)
          console.log(res.a)
          console.log(res.t)
        })
      },
      toSearch(){
        if(!this.mySearch){
          this.alert("搜索内容不能为空！")
        }else{
          this.search();
        }
      },
      goSearch(e){
        var bid=e.target.dataset.bid;
        this.$router.push("/Detail/"+bid);
      },
      goDetail(e){
        var path=e.path
        for(var i=0;i<path.length-5;i++){ //1.window...2.document 3.html 4.body 
          if(path[i].classList[0]=="search-item"){
            var sid=path[i].dataset.sid
          }
        }
        this.$router.push("/Detail/"+sid);
      },
    },    
    created(){
      this.axios.get("http://127.0.0.1:3000/search").then((res)=>{
        res=res.data;
        this.list=res.data;
      })
    },
    mounted(){
    },
    watch:{
      mySearch(){
        this.search();
      }
    }
  }
</script>
<style>
div.search>div:first-child{
  padding:10px 20px;
  background: #1687A4;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div.search>div:first-child>input{
  margin:0;
  border-radius:20px;
  font-size:16px;
}
div.search>div:first-child>span{
  position:absolute;
  right:10%;
}
div.search>div:nth-child(2)>p,div.search>div:nth-child(2)>ul{
  margin:0;
  font-size:16px;
  line-height:40px;
}
div.search>div:nth-child(2)>p,div.search>div:nth-child(2)>ul>li{
  border-bottom:1px solid #CACACA;
  padding-left:20px;
}
div.search>div:nth-child(2)>ul{
  list-style:none;
  padding-left:0;
}
div.search>div.second-page>div>div.search-item{
  display:flex;
  padding:10px 20px;
  border:1px solid #CACACA;
}
div.search>div.second-page>div>div.search-item>img{
  width:48px;
  height:64px;
}
div.search>div.second-page>div>div.search-item>div{
  display:flex;
  flex-direction: column;
  align-content: space-around;
  margin-left:10px;
  width:80%;
}
div.search>div.second-page>div>div.search-item>div>p{
  margin:0;
}
div.search>div.second-page>div>div.search-item>div>p:first-child{
  font-size:16px;
  font-weight:bold;
  color:#333;
}
div.search>div.second-page>div>div.search-item>div>p:not(:first-child){
  font-size:12px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
div.search>div.second-page>div>div.search-item>div>p:nth-child(3){
  color:#666;
}
div.search>div.second-page>div.not-found{
  width:100%;
  height:460px;
  background: #F7F7F7;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color:#1687A4;
  font-size:25px;
}
</style>

