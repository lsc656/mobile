//index.js
//获取应用实例
const app = getApp()

Page({
  changePage(e){
    console.log(this)
    var t=setInterval(()=>{
      var h=parseInt(this.data.heightfirst)-0.1;
      this.setData({
        heightfirst: h + "%"
      })
      if(h<1){
        this.setData({
          displayfirst:"none",
          displaysecond:"block"
        })
        clearInterval(t)
      }
    },1)
  },
  /**
   * 页面的初始数据
   */
  data: {
    heightfirst:"101%",
    displayfirst: "", 
    displaysecond:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.changePage()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})