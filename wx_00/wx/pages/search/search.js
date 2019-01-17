const app=getApp();
// pages/search/search.js
Page({
  jumpLgPic(e){
    var url=e.target.dataset.lg;
    wx.setStorage({
      key: 'imgUrl',
      data: url,
      success:()=>{
        wx.navigateTo({
          url: '/pages/showLgPic/showLgPic'
        })
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    authorInfo:[],
    picInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'searchVal',
      success: (res)=>{
        this.setData({
          authorInfo:res.data.authorInfo,
          picInfo:res.data.picInfo
        });
        console.log(res.data.authorInfo)
        wx.removeStorage({key: 'searchVal'});
      },
    })
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