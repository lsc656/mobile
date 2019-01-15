// pages/changeUserInfo/changeUserInfo.js
const app=getApp();
Page({
  /**
   * 1.1选择头像
   */
  chooseHeaderPic(){
    wx.chooseImage({
      count:1,
      success: (res)=>{
        this.uploadHeaderPic(res.tempFilePaths[0])        
      },
      fail:()=>{
        wx.showToast({
          title: '选取失败，请重试',
          icon:'none'
        })
        setTimeout(()=>{
          wx.hideToast();
        },1000)
      }
    })
  },
  /**
   * 1.2.选择头像完成后,上传至服务器
   */
  uploadHeaderPic(filePath){
    wx.uploadFile({
      url: 'http://127.0.0.1:3000/user/changeHeaderPic',
      filePath,
      name: 'myPic',
      formData: { uid: this.data.uid },
      header: { "Content-Type": "multipart/form-data" },
      success:(res)=>{
        res=JSON.parse(res.data);
        console.log(res)
        if(res.code==200){
          this.loadData();
        }else{
          wx.showToast({
            title: '网络故障，请稍后...',
            icon:''
          })
          setTimeout(()=>{
            wx.hideToast()
          },1000)
        }
      },
      fail:(res)=>{
        wx.showToast({
          title: '网络故障',
          icon:'none'
        })
        setTimeout(()=>{
          wx.hideToast();
        },1000)
      }
    })
  },
  /**
   * 2.加载页面数据
   */
  loadData(){
    wx.request({
      url: 'http://127.0.0.1:3000/user/getUInfo',
      data: { uid: this.data.uid },
      success: (res) => {
        res = res.data;
        this.setData({
          user_img: res.data.user_img,
          uname: res.data.uname,
          tel: res.data.tel
        })
      }
    })
  },




  /**
   * 方法
   */
  //1.修改头像
  changeHeaderPic(){
    this.chooseHeaderPic()
  },
  //2.提交数据
  submitInfo(){
    var uname=this.data.uname;
    if(!uname){
      wx.showToast({
        title: '用户名不能为空',
        icon:"none"
      })
      setTimeout(()=>{
        wx.hideToast()
      },1000)
      return
    }
    var tel=this.data.tel;
    var uid=this.data.uid;
    wx.request({
      url: 'http://127.0.0.1:3000/user/changeUInfo',
      data:{uname,tel,uid},
      success:(res)=>{
        res=res.data;
        if(res.code==200){
          this.loadData();
          wx.showToast({
            title: '修改成功',
          })
          setTimeout(()=>{
            wx.hideToast
          },1000)
        }else{
          wx.showToast({
            title: '网络故障',
            icon:'none'
          })
          wx.hideToast();
        }
      }
    })
  },
  //3.修改用户名
  changeUname(e){
    this.setData({uname:e.detail.value})
  },
  //4.修改联系方式
  changeTel(e){
    this.setData({tel:e.detail.value})
  },

  /**
   * 页面的初始数据
   */
  data: {
    uid:0,
    user_img:'',
    uname:'',
    tel:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.globalData.userId){
      wx.navigateBack({
        delta:1
      })
      return
    }
    this.setData({
      uid:app.globalData.userId
    })
    this.loadData()
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