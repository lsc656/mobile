<template>
  <div class="Index">
    <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
          <div>首页</div>
          <div>八字</div>
          <div>起名</div>
          <div>测名</div>
          <div>生肖</div>
          <div>抽签</div>
          <div>运程</div>
          <div>配对</div>
          <div>算卦</div>
          <div>号码</div>
          <div>生日</div>
          <div>星座</div>
          <div>黄历</div>
          <div>测字</div>
				</div>
			</div>
		</div>
    <div class="mui-card">
			<div class="mui-card-header">卜易居姓名八字综合算命</div>
			<div class="mui-card-content">
        <div class="mui-card-content-inner">
					请输入公历，只知道农历，请点击<a href="javascript:;">农历在线查公历</a>
				</div>
				<div class="mui-card-content-inner">
					<form action="">
            <span>姓氏：</span><input type="text" class="user-name" v-model="familyName"><span>名字：</span><input type="text" class="user-name" v-model="firstName">
            <br>
            <span>性别：</span>
            <label for=""><input type="radio" name="sex" v-model="sex" value="1">&nbsp;&nbsp;帅哥</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <label for=""><input type="radio" name="sex" v-model="sex" value="0">&nbsp;&nbsp;美女</label>
            <br>
            <span>公历：</span>
            <select name="year" id="" v-model="inputModel.year" class="sel-year">
              <option :value="item" v-for="(item,i) of years" :key=i>{{item}}</option>
            </select><span>年</span>
            <select name="month" id="" v-model="inputModel.month" class="sel-month">
               <option :value="item" v-for="(item,i) of months" :key=i>{{item}}</option>
            </select><span>月</span>
            <select name="date" id="" v-model="inputModel.date" class="sel-month">
               <option :value="item" v-for="(item,i) of dates" :key=i>{{item}}</option>
            </select><span>日</span>
            <br>
            <span>时辰：</span>
            <select name="times" id="" v-model="inputModel.time" class="sel-times">
              <option :value="i" v-for="(item,i) of times" :key=i>{{item}}</option>
            </select>
            <span>点</span>
            <br>
            <mt-button size="large" @click.prevent="">开始算命</mt-button>
          </form>
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
      familyName:"张",
      firstName:"无忌",  
      sex:"0",
      inputModel:{year:1985,month:1,date:1, time:0,},
      years:[],
      months:[],
      dates:[],
      times:["子 00:00-00:59","丑 01:00-01:59","丑 02:00-02:59","寅 03:00-03:59","寅 04:00-04:59","卯 05:00-05:59","卯06:00-06:59","辰 07:00-07:59","辰 08:00-08:59","巳 09:00-09:59","巳 10:00-10:59","午 11:00-11:59","午 12:00-12:59","未 13:00-13:59","未 14:00-14:59","申 15:00-15:59","申 16:00-16:59","酉 17:00-17:59","酉 18:00-18:59","戌 19:00-19:59","戌 20:00-20:59","亥 21:00-21:59","亥 22:00-22:59","子 23:00-23:59"],
    }
  },
  methods:{
    getDay(min,max,myArr){
      for(var i=min;i<max;i++){
        this[myArr].push(i);
      }
    },
    getNow(){
      var date=new Date();
      this.inputModel.month=parseInt(date.getMonth())+1;
      this.inputModel.date=parseInt(date.getDate());
    },
  },
  created(){
    this.getNow();
    this.getDay(1945,2021,"years");
    this.getDay(1,13,"months");
    this.getDay(1,32,"dates");
  }
}
</script>
<style>
  div.Index{
    background-color: #F5EFE2;
  }
  div.Index>div.mui-card:first-child{
    margin:0;
    background: #F5EFE2;
  }
  div.Index>div.mui-card:first-child div.mui-card-content-inner{
    display:flex;
    flex-wrap: wrap;
  }
  div.Index>div.mui-card:first-child div.mui-card-content-inner>div{
    padding:9.5px;
    border:1px solid #EDE2CB;
    font-weight:bold;
  }
  form span,form label,form select{
    font-size:16px;
  }
  form>input{
       margin-bottom:10px;
  }
  
  form>input.user-name{
    width:89px;
    height:32px;
    border-radius:0;
    border-color:#EFD29A;
  }
  form select{
    margin:0;
    padding:0;
    text-align:justify;
    background: #DDDDDD;
    border:1px solid #EFD29A !important;
    border-radius: 0;
    height:34px;
    line-height:34px;
    text-align-last: center;
    margin:10px 10px 10px 0;
  }
  form select.sel-year{
    width:60px;
  }
  form select.sel-month{
    width:44px;
    margin-left:10px;
  }
  form select.sel-times{
    width:121px;
  }
  div.mui-card form button{
    background: #FF8A11;
    color:#fff;
  }
</style>
