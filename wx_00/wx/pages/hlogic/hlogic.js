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
        console.log(res.data)
        if(res.code==200){
          this.setData({
            myBoard:res.data
          })
        }
      }
    })
  },
  /**
   * 2.根据点击的选项卡更改isSel状态
   */
  changeSel(e){
    this.setData({
      isSel:e.target.dataset.issel
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    uid:0,          //options传入数据：所查询用户的uid
    myBoard:[],     //获取的数据：用户公开的采集信息
    isSel:'0'       //选中的选项卡
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