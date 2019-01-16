//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 第一页高度调整
   */
  changePage(e){
    var t=setInterval(()=>{
      var h=this.data.heightfirst-1;
      this.setData({
        heightfirst: h
      })
      if(h<10){
        clearInterval(t)
      }
    },1)
  },
  /**
   * 页面加载时和点击获取更多时，获取列表数据
   */
  getIndexInfo(){
    if(this.data.pno==this.data.pageCount){
      wx.showToast({
        title: '没有更多啦',
        icon:'none',
        duration: 1000
      })
      setTimeout(()=>{wx.hideToast()},1000)
      return;
    }
    wx.showToast({
      title: '正在读取数据...',
      icon:'loading',
      duration:500
    })
    setTimeout(()=>{
      wx.hideToast();
    },1000)
    var pno=this.data.pno+1;
    wx.request({
      url: 'http://127.0.0.1:3000/index',
      data:{pno},
      success:(res)=>{
        res=res.data;
        this.setData({
          fl1:res.data.fl1,
          fl2:this.data.fl2.concat(res.data.fl2),
          pageCount:res.data.c,
          pno
        })
      }
    })
  },
  /**
   * 点击2F图片跳转相应位置 
   */
  jumpTo(e){
    var pid=e.currentTarget.dataset.pid;
    var authorId=e.currentTarget.dataset.author
    wx.navigateTo({
      url: '/pages/pins/pins?pid='+pid+'&authorId='+authorId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 搜索
   */
  search(){
    var str = this.data.inputVal;
    str=str.replace(/(^\s*)|(\s*$)/g, "");
    str=str.replace(/\s+/g,' ');
    var searchArr=str.split(' ');
    console.log(str)
    console.log(searchArr)
    wx.request({
      url: 'http://127.0.0.1:3000/index/search',
      data:{searchArr},
      success:(res)=>{
        res=res.data;
        if (res.code == 200 && res.data.length>0){
          wx.setStorage({
            key: 'searchVal',
            data: res.data,
            success:()=>{
              wx.navigateTo({
                url: '/pages/search/search',
              })
            }
          })          
        }else{
          wx.showToast({
            title: '找不到相关信息',
            icon:'none'
          })
          setTimeout(()=>{
            wx.hideToast()
          },1000)
        }
      }
    })
  },
  /**
   * 获取搜索框中的值
   */
  getInputValue(e){
    this.setData({
      inputVal: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    heightfirst:100.5,
    fl1:[],
    fl2:[],
    pageCount:1,
    pno:0,
    inputVal:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexInfo();
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
    this.changePage()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})