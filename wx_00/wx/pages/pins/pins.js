// pages/pins/pins.js
Page({
  /**
   * 加载更多数据
   */
  loadMore(){
    var pno=this.data.pno;
    var pid=this.data.pid;
    var authorId=this.data.authorId;
    if(pno==this.data.pageCount){
      return;
    }else{
      pno++;    
      wx.request({
        url: 'http://127.0.0.1:3000/pics/?pno='+pno+'&pid='+pid+'&authorId='+authorId,
        success:(res)=>{
          res=res.data
          if(res.code==200){
            this.setData({
              myList:res.data.data,
              pageCount:res.data.c
            })
            console.log(this.data.myList)
          }
        }
      })
    }
  },
  /**
   * 更改采集/关注对应的页面
   */
  changeSelected(e){
    this.setData({
      selected: e.target.dataset.sel
    })
  },
  /**
   * 更改喜欢/分享的显示
   */
  showLikes(){
    this.setData({
      showLikes: !this.data.showLikes
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    pid:1,
    selected:0,
    showLikes:false,
    testList:[1,2,3,4,5,6,7,8,9,10],
    myList:[],
    pno:0,
    pageCount:1,
    authorId:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   pid:options.pid,
    //   authorId:options.author
    // })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})