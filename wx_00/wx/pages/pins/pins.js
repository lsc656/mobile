// pages/pins/pins.js
Page({

  /**
   * 点击喜欢按钮
   */
  myLike(){
    var like=this.data.likes;
    like++;
    wx.request({
      url: 'http://127.0.0.1:3000/pics/likesAth?uid=' + this.data.authorId + '&pid=' + this.data.pid,
      success:(res)=>{
        res=res.data
        if(res.code==200){
          this.setData({
            likeClick:true,
            likes:like
          })
        }else{
          wx.showToast({
            title: '网络问题..请重试..',
          })
          setTimeout(()=>{
            wx.hideToast();
          },1500)
        }
      }
    })
  },
  /**
   * 点击图片跳转大图页面
   */
  jumpBigImg(e){
    var pid=e.target.dataset.pid
    wx.navigateTo({
      url: '../../pages/boards/boards?pid='+pid,
    })
  },
  /**
   * 加载更多数据
   */
  loadMore(){
    var pno=this.data.pno;
    var pid=this.data.pid;
    var authorId=this.data.authorId;
    if(pno==this.data.pageCount){
      wx.showToast({
        title: '没有更多了！',
        duration:1500
      })
      wx.hideToast();
      return;
    }else{
      pno++;
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: 'http://127.0.0.1:3000/pics/?pno='+pno+'&pid='+pid+'&authorId='+authorId,
        success:(res)=>{
          res=res.data
          console.log(res.data)
          if(res.code==200){
            wx.hideLoading();
            this.setData({
              myList:res.data.data,
              pageCount:res.data.c,
              authorInfo: res.data.authorInfo,
              header:res.data.header
            })
            var likes=0;
            this.data.myList.map((item,i)=>{
              likes+=item.likes;              
            })
            this.setData({
              likes:likes+res.data.authorInfo.likes
            })
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
    pid:1,              //图片类ID
    selected:0,         //采集/关注页面切换标识
    showLikes:false,    //喜欢/分享显示标识
    myList:[],          //图片列表数据
    pno:0,              //分页显示起始页
    likes:0,            //上方'喜欢'计数。计算方法：作者likes+所有图片likes
    pageCount:1,        //图片总页数
    authorId:1,         //对应作者ID
    authorInfo:{},      //作者信息，头像、uname等
    header:{},          //头部信息
    likeClick:false     //点击喜欢后禁用该按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pid:options.pid,
      authorId:options.author
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