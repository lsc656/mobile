<template>
  <div class="Index">
    <table class="nav">
      <tr @click="jumpTo($event)">
        <td>
          <div data-tagid="1">Sale</div>
          <p>特价</p>
        </td>
        <td>
          <div data-tagid="2">Free</div>
          <p>免费</p>
        </td>
        <td>
          <div data-tagid="3"></div>
          <p>畅销</p>
        </td>
        <td>
          <div data-url="/User"></div>
          <p>书架</p>
        </td>
      </tr>
      <tr>
        <td>
          <div></div>
          <p>分类</p>
        </td>
        <td>
          <div></div>
          <p>兑换码</p>
        </td>
        <td>
          <div></div>
          <p>购书券</p>
        </td>
        <td>
          <div></div>
          <p>客户端</p>
        </td>
      </tr>
    </table>
    <div class="index-item">
      <div>
        <div>精品推荐</div>
        <div>全部</div>
      </div>
      <div>
        <div><!-- 2F-top .Index>div.index-item>div:nth-child(2)>div-->
          <div><!-- .Index>div.index-item>div:nth-child(2)>div>div-->
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-2m-1.jpg" alt="">
            </div>
            <p class="title">狼群（全新修订全本珍藏版 上）</p>
            <p class="author">刺血</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-2m-2.jpg" alt="">
            </div>
            <p class="title">朝闻道（刘慈欣作品）</p>
            <p class="author">刘慈欣</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-2m-3.jpg" alt="">
            </div>
            <p class="title">活着活着就老了</p>
            <p class="author">冯唐</p>
          </div>            
        </div>
        <div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-2m-4.jpg" alt="">
            </div>
            <p class="title">银河帝国 3：第二基地（被马斯克用火箭送上太空的神作）</p>
            <p class="author">刺血</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-2m-5.jpg" alt="">
            </div>
            <p class="title">简约至上</p>
            <p class="author">【英】科尔伯恩</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-2m-6.jpg" alt="">
            </div>
            <p class="title">心理罪之画像</p>
            <p class="author">雷米</p>
          </div>            
        </div>
      </div>
      <div>
        <div>
          <img src="http://127.0.0.1:3000/images/Index/index-2b-1.jpg" alt="">
        </div>
        <div>
          <img src="http://127.0.0.1:3000/images/Index/index-2b-2.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="index-item">
      <div>
        <div>新书上架</div>
        <div>全部</div>
      </div>
      <div>
        <div><!-- 2F-top .Index>div.index-item>div:nth-child(2)>div-->
          <div><!-- .Index>div.index-item>div:nth-child(2)>div>div-->
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-3m-1.jpg" alt="">
            </div>
            <p class="title">顺德40年：一个中国改革开放的县域发展样板</p>
            <p class="author">陈春花 等</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-3m-2.jpg" alt="">
            </div>
            <p class="title">新周期</p>
            <p class="author">任泽平&nbsp;&nbsp;甘源</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-3m-3.jpg" alt="">
            </div>
            <p class="title">七堂思维成长课：精英群体的行为习惯</p>
            <p class="author">【英】卡罗琳·韦布</p>
          </div>            
        </div>
        <div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-3m-4.jpg" alt="">
            </div>
            <p class="title">蜘蛛男孩</p>
            <p class="author">【英】尼尔·盖曼</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-3m-5.jpg" alt="">
            </div>
            <p class="title">于丹趣品汉字</p>
            <p class="author">于丹</p>
          </div>
          <div>
            <div class="picture">
              <img src="http://127.0.0.1:3000/images/Index/index-3m-6.jpg" alt="">
            </div>
            <p class="title">走出防空洞</p>
            <p class="author">【英】戴维·洛奇</p>
          </div>            
        </div>
      </div>
      <div>
        <div>
          <img src="http://127.0.0.1:3000/images/Index/index-3b-1.jpg" alt="">
        </div>
        <div>
          <img src="http://127.0.0.1:3000/images/Index/index-3b-2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return {

    }
  },
  methods:{
    jumpTo(e){
      if(e.target.dataset.tagid){
        this.$router.push("/Sale/"+e.target.dataset.tagid)
      }else if(e.target.dataset.url){
        this.$router.push(e.target.dataset.url)
      }
    }
  },
  created(){
    
  }
}
</script>
<style>
  .Index{
    padding-top:20px;
    background: #F7F7F7;
  }
  .Index>table.nav{
    width:100%;
  }
  .Index>table.nav>tr>td{
    text-align:center;
  }
  .Index>table.nav>tr>td>div{
    color:#fff;
    width:56px;
    height:56px;
    border-radius:10px;
    display:inline-block;
    line-height:56px;
  }
  .Index>table.nav>tr:first-child>td:first-child>div{
    background: #ef4848;
  }
  .Index>table.nav>tr:first-child>td:nth-child(2)>div{
    background: #f7942b;
  }
  .Index>table.nav>tr:first-child>td:nth-child(3)>div{
    background: #2ec8e4 url("http://127.0.0.1:3000/images/Index/icon-nav.png") no-repeat;
    background-position:center -71px;
    background-size:40px;
  }
  .Index>table.nav>tr:first-child>td:nth-child(4)>div{
    background: #30c1ff url("http://127.0.0.1:3000/images/Index/icon-nav.png") no-repeat;
    background-position:center -150px;
    background-size:40px;
  }
  .Index>table.nav>tr:nth-child(2)>td:first-child>div{
    background: #02d26e url("http://127.0.0.1:3000/images/Index/icon-nav.png") no-repeat;
    background-position:center 8px;
    background-size:40px;
  }
  .Index>table.nav>tr:nth-child(2)>td:nth-child(2)>div{
    background: #4f8fd6 url("http://127.0.0.1:3000/images/Index/icon-nav-1.png") no-repeat;
    background-position:center -191px;
    background-size:40px;
  }
  .Index>table.nav>tr:nth-child(2)>td:nth-child(3)>div{
    background: #7cc416 url("http://127.0.0.1:3000/images/Index/icon-nav-2.png") no-repeat;
    background-position:center -230px;
    background-size:40px;
  }
  .Index>table.nav>tr:nth-child(2)>td:nth-child(4)>div{
    background: #f7942b url("http://127.0.0.1:3000/images/Index/icon-nav-1.png") no-repeat;
    background-position:center -273px;
    background-size:40px;
  }
  .Index>div.index-item{
    padding:10px;
  }
  .Index>div.index-item:nth-child(2){
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
  .Index>div.index-item>div:first-child{
    display:flex;
    justify-content: space-between;
  }
  .Index>div.index-item>div:first-child>div:first-child{
    font-weight:bold;
    color:#686868;
  }
  .Index>div.index-item>div:first-child>div:nth-child(2){
    font-size:12px;
    color:#666666;
    line-height:100%;
    padding-right:10px;
    background:url("http://127.0.0.1:3000/images/Index/arr_right.png") 26px 0 no-repeat;
    background-size:8px 12px;
  }
  .Index>div.index-item>div:nth-child(2){
    margin:10px 0;
    width:100%;
  }
  .Index>div.index-item>div:nth-child(2)>div{
    display:flex;
    justify-content: space-around;
  }
  .Index>div.index-item>div:nth-child(2)>div>div{
    width:30%;
  }
  .Index>div.index-item>div:nth-child(2)>div>div>div.picture{
    width:100%;
  }
  .Index>div.index-item>div:nth-child(2)>div>div>div.picture>img{
    width:100%;
  }
  .Index>div.index-item>div:nth-child(2)>div>div>p{
    margin:0;
    width:100%;
    overflow:hidden;
  }
  .Index>div.index-item>div:nth-child(2)>div>div>p.title{
    font-weight:bold;
    color:#333333;
    font-size:10px;
    line-height:100%;
    height:24px;
  }
  .Index>div.index-item>div:nth-child(2)>div>div>p.author{
    height:22px;
  }


  .Index>div.index-item>div:nth-child(3){
    display:flex;
    justify-content: space-between;
    width:100%;
  }
  .Index>div.index-item>div:nth-child(3)>div{
    width:49%;
  }
  .Index>div.index-item>div:nth-child(3)>div>img{
    width:100%;
    border-radius: 10px;
  }
</style>