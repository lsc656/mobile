// pages/hlogic/hlogic.js
Page({
  /**
   * 1.根据被点击的uid获取该用户信息
   */
  getUserPublicInfo(){
    wx.request({
      url: 'http://127.0.0.1:3000/pics/getUserPublicInfo?uid='+this.data.uid,
      success:(res)=>{
        res=res.data
        if(res.code==200){
          this.setData({
            myBoard:res.data
          })
          console.log(this.data.myBoard)
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    uid:0,
    myBoard:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      uid:options.uid
    })
    this.getUserPublicInfo();
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