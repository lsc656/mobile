// pages/hlogic/hlogic.js
Page({
  /**
   * 1.根据被当前options传入的uid获取该用户信息
   */
  getUserPublicInfo(){
    wx.request({
      url: 'http://127.0.0.1:3000/pics/getUserPublicInfo?uid='+this.data.uid,
      success:(res)=>{
        res=res.data
        this.setData({
          myBoard:res.works,
          authorInfo:res.authorInfo,
          others:res.others
        })        
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
   * 3.更改大图高度信息
   */
  getHeight() {
    var fWidth = 0;
    //获取父元素card的宽度
    var that=this;
    wx.createSelectorQuery().selectAll('.card').boundingClientRect(function (rects) {
      rects.forEach(function (result) {
        fWidth = result.width;
        //根据横向缩放比例更改图片高度
        var imgArr = [];
        that.data.myBoard.map((item, i, arr) => {
          wx.getImageInfo({
            //测试图片
            src: item.img_md,
            success: (res) => {
              var lgHeight = fWidth / parseInt(res.width) * parseInt(res.height);
              imgArr[i] = lgHeight
              that.setData({
                imgHeight: imgArr
              })
            }
          })
        })      
      })
    }).exec()
  },
  /**
   * 4.点击关注项更改uid跳转对方列表
   */
  changeUid(e){
    var uid=e.currentTarget.dataset.uid
    wx.navigateTo({
      url: 'userInfo?uid='+uid
    })
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    uid:0,          //options传入数据：所查询用户的uid
    myBoard:[],     //获取的数据：用户公开的采集信息
    isSel:'0',      //选中的选项卡
    imgHeight:[],   //大图高度
    authorInfo:{},  //作者信息
    others:[]       //作者关注的人信息
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