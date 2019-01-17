// pages/boards/boards.js
Page({
  /**
 * 点击小图片跳转大图页面
 */
  jumpBigImg(e) {

    var cid = e.target.dataset.cid
    var authorId = e.target.dataset.authorid
    var pid = e.target.dataset.pid
    wx.navigateTo({
      url: '../../pages/boards/boards?cid=' + cid + '&authorId=' + authorId + '&pid=' + pid,
    })
  },
  /**
 * 加载更多数据
 */
  loadMore() {
    var pno = this.data.pno;
    if (pno == this.data.pageCount) {
      wx.showToast({
        title: '没有更多了！',
        icon:'none'
      })
      setTimeout(() => { wx.hideToast()},1500)
      return;
    } else {
      var pid = this.data.pid;
      var authorId = this.data.authorId;
      pno++;
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: 'http://127.0.0.1:3000/pics/?pno=' + pno + '&pid=' + pid + '&authorId=' + authorId,
        success: (res) => {
          res = res.data
          if (res.code == 200) {
            wx.hideLoading();
            this.setData({
              myList: res.data.data,
              pageCount: res.data.c,
              authorInfo: res.data.authorInfo,
              header: res.data.header,
              pno
            })
          }
        }
      })
    }
  },
  /**
   * 修改banner显示状态
   */
  changeBanner(){
    this.setData({
      showBanner:!this.data.showBanner
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    pid:0,
    authorId:0,
    cid:0,
    showBanner:false,
    pno:0,
    pageCount:1,
    myList:[],
    authorInfo:{},
    header:{},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pid:options.pid,
      authorId:options.authorId,
      cid:options.cid
    })
    this.loadMore();
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})