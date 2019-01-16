// pages/updateMyPic/updateMyPic.js
Page({
  /**
   * 获取输入框的值
   */
  getAccount(e){
    this.setData({
      account:e.detail.value,
      rem:e.detail.value.length
    })
  },
  /**
   * 页面加载获取数据
   */
  loadData(){
    wx.request({
      url: 'http://127.0.0.1:3000/user/getChPic',
      data:{cid:this.data.cid,authorId:this.data.userId},
      success:(res)=>{
        res=res.data;
        this.setData({
          img_md:res.data.img_md,
          account:res.data.account,
          rem:res.data.account.length
        })
      }
    })
  },
  /**
   * 提交修改
   */
  changePicInfo(){
    wx.request({
      url: 'http://127.0.0.1:3000/user/changePicInfo',
      data:{
        cid:this.data.cid,
        authorId:this.data.userId,
        account:this.data.account
      },
      success:(res)=>{
        res=res.data;
        if(res.code==200){
          wx.showToast({
            title: '修改成功',
          })
          setTimeout(()=>{
            wx.hideToast();
          },1000)
        }else{
          wx.showToast({
            title: '网络故障',
            icon:'none'
          })
          setTimeout(()=>{
            wx.hideToast();
          },1000)
        }
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    cid:0,
    userId:0,
    account:'',
    img_md:'',
    rem:170
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cid:options.cid,
      userId:options.userId
    })
    if(this.data.cid){
      this.loadData()
    }
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
    this.loadData()
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