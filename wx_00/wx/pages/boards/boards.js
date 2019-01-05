// pages/boards/boards.js
Page({

  /**
   * 获取当前显示图片高度
   */
  getHeight(){
    var winWinth=0;
    //获取窗口宽度
    wx.getSystemInfo({
      success: (res)=>{
        winWinth=parseInt(res.windowWidth);
      }
    })
    //根据横向缩放比例更改图片高度
    wx.getImageInfo({
      //测试图片
      src: 'http://127.0.0.1:3000/img/imgs/img_001_lg.jpg',
      success:(res)=>{
        var lgHeight=winWinth/parseInt(res.width)*parseInt(res.height);
        this.setData({
          imgHeight: lgHeight
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    pid:0,
    authorId:0,
    imgHeight:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //完成后解除注释
    // this.setData({
    //   pid:options.pid,
    //   authorId:options.authorId
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getHeight();
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