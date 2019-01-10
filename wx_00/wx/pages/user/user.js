// pages/user/user.js
const app=getApp();
const ctx = wx.createCanvasContext("myCanvas", this)

Page({
  /**
   * 1.判断用户状态是否正常
   */
  checkUserState(){
    var userId=this.data.userId;
    if(userId){
      wx.request({
        url: 'http://127.0.0.1:3000/login/checkUserState',
        data:{uid:userId},
        success:(res)=>{
          res=res.data
          if(res.code==200){
            this.setData({
              userInfo:res.data
            })
            console.log(this.data.userInfo)
          }else{
            console.log(res.msg)
          }
        }
      })
    }else{
      app.onLaunch();
      if(app.globalData.userId){
        wx.reLaunch({
          url: '/pages/user/user',
        })
      }else{
        app.onLaunch();
        wx.showToast({
          title: '网络故障请稍候..',
          icon:'none'
        })
        setTimeout(()=>{
          wx.hideToast();
          wx.reLaunch({
            url: '/pages/index/index',
          })
        },1000)
      }
    }
  },
  /**
   * 2.修改bannerSel值
   */
  changeBannerSel(e){
    this.setData({bannerSel:e.target.dataset.bannerSel})
  },
  /**
   * 3.制作画板
   */
  createCanvas(){
    ctx.save();
    ctx.setTextBaseline('top');
    ctx.setFontSize(25);
    ctx.fillText('Hello',40,10);
    ctx.draw();    
    ctx.restore();
  },
  /**
   * 4.手指触摸动作开始
   */
  touchStart(e){
    console.log(1)
    ctx.beginPath()
    ctx.setStrokeStyle('red')
    ctx.moveTo(e.touches[0].x, e.touches[0].y)
  },
  moveToSw(x,y){
    ctx.moveTo(x,y)
  },
  touchMove(e){
    var x = e.touches[0].x;
    var y = e.touches[0].y;
    ctx.lineTo(x,y)
    ctx.stroke();
    ctx.draw(true);
    this.moveToSw(x,y)
  },
  touchEnd(){
    console.log(3)
  },
  /**
   * 页面的初始数据
   */
  data: {
    userId:0,
    userInfo:[],
    isNewUser:false,
    bannerSel:"1"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.globalData){app.onLaunch()}
    this.setData({
      userId: app.globalData.userId,
      isNewUser: app.globalData.isNewUser
    })
    this.checkUserState()
    this.createCanvas()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})