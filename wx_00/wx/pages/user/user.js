// pages/user/user.js
const app=getApp();
const ctx = wx.createCanvasContext("myCanvas", this)

Page({
  /**
   * 1.判断用户状态是否正常
   */
  checkUserState(){
    var userId=this.data.userId;
    if(userId){
      wx.request({
        url: 'http://127.0.0.1:3000/login/checkUserState',
        data:{uid:userId},
        success:(res)=>{
          res=res.data
          if(res.code==200){
            this.setData({
              userInfo:res.data
            })
            console.log(this.data.userInfo)
          }else{
            console.log(res.msg)
          }
        }
      })
    }else{
      app.onLaunch();
      if(app.globalData.userId){
        wx.reLaunch({
          url: '/pages/user/user',
        })
      }else{
        app.onLaunch();
        wx.showToast({
          title: '登陆中请稍候..',
          icon:'none'
        })
        setTimeout(()=>{
          wx.hideToast();
          wx.reLaunch({
            url: '/pages/index/index',
          })
        },1500)
      }
    }
  },
  /**
   * 2.修改bannerSel值
   */
  changeBannerSel(e){
    this.setData({bannerSel:e.target.dataset.bannerSel})
  },
  /**
   * 3.制作画板  背景白色！
   */
  createCanvas(){
    ctx.save();
    ctx.setFillStyle('#fff')
    ctx.fillRect(0, 0, this.data.canvasWidth, this.data.canvasHeight)
    ctx.draw()
    ctx.restore();
  },
  /**
   * 4.画布————绘制/直线手指触摸动作开始/移动/结束
   */
  touchStart(e){
    ctx.beginPath()
    ctx.setStrokeStyle('red')
    ctx.moveTo(e.touches[0].x, e.touches[0].y)
  },
  moveToSw(x,y){
    ctx.moveTo(x,y)
  },
  touchMove(e){
    var x = e.touches[0].x;
    var y = e.touches[0].y;
    ctx.lineTo(x,y)
    ctx.stroke();
    ctx.draw(true);
    this.moveToSw(x,y)
  },
  touchEnd(){
    var that=this;
    ctx.draw(true,()=>{
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: this.data.canvasWidth,
        height: this.data.canvasHeight,
        canvasId: 'myCanvas',
        success(res) {
          that.data.canvasPathList.push(res.tempFilePath)
          console.log(that.data.canvasPathList)
          if(that.data.canvasPathList.length>1){
            that.setData({
              goBackButtonState: false
            })
          }
        }
      })
    });
  },
  /**
   * 5.画布功能：上一步
   */
  canvasGoBack(){
    this.data.canvasPathList.pop();    
    ctx.fillStyle = ctx.createPattern(this.data.canvasPathList[this.data.canvasPathList.length-1], 'no-repeat')
    ctx.fillRect(0, 0, this.data.canvasWidth, this.data.canvasHeight)
    ctx.draw()

    if (this.data.canvasPathList.length <= 1) {
      this.setData({
        goBackButtonState: true
      })
    }
  },
  /**
   * 6.清空画布
   */
  clearAllRect(){
    ctx.setFillStyle('#fff')
    ctx.fillRect(0, 0, this.data.canvasWidth, this.data.canvasHeight)
    ctx.draw()
    this.setData({
      canvasPathList:[]
    })
  },
  /**
   * 7.保存画布
   */
  saveMyCanvas(){
    ctx.draw(true, wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: this.canvasWidth,
      height: this.canvasHeight,
      canvasId: 'myCanvas',
      quality:1,
      success:(result)=>{
        wx.saveImageToPhotosAlbum({
          filePath: result.tempFilePath,
          success(res) {
            const savedFilePath = res.savedFilePath
            console.log(res)
            wx.showToast({
              title: '保存成功',
            })
            setTimeout(() => {
              wx.hideToast();
            }, 1500)
          }
        })
      }
    }))
  },
  /**
   * 8.修改画布高度
   */
  changeCanvasHeight(){
    var clientHeight=0;
    var clientWidth=0;
    var ctlHeight=0;
    var canvasTop=0;
    var that=this;
    wx.createSelectorQuery().select('.canvas-control').boundingClientRect((res)=>{
      ctlHeight=res.height;
      wx.getSystemInfo({
        success: function(res) {
          clientHeight=res.windowHeight;
          clientWidth=res.windowWidth;
          wx.createSelectorQuery().select('#myCanvas').boundingClientRect((res)=>{
            canvasTop=res.top;
            that.setData({
              canvasHeight: clientHeight - ctlHeight - canvasTop-11,
              canvasWidth:clientWidth-20
            })
            that.createCanvas()
          }).exec();
        }
      })
    }).exec()
  },
  /**
   * 9.画布工具栏显示状态
   */
  toggleTools(){
    this.setData({
      showTools:!this.data.showTools
    })
  },
  /**
   * 10.画布工具栏具体功能
   */
  /**
   * 10.1画笔颜色
   */
  changeStrokeColor(){
    var that=this;
    wx.showActionSheet({
      itemList: ['红色', '蓝色', '默认', '自定义'],
      success(res) {
        switch(res.tapIndex){
          case 0: return that.setData({ strokeColor:'#C41A16'})
          case 1: return that.setData({ strokeColor:'#28B0EA'})
          case 2: return that.setData({ strokeColor:'#000'})
          case 3: return that.setData({ isShowInput:true})
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 10.2画笔宽度
   */
  changeStrokeLineWidth(){
    
  },
  /**
   * 10.3橡皮擦
   */
  eraser(){
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    userId:0,
    userInfo:[],
    isNewUser:false,
    bannerSel:"1",
    canvasHeight:300,
    canvasWidth:150,
    showTools:false,
    canvasPathList:[],
    goBackButtonState:true,
    /**
     * 画板调试相关
     */
    strokeColor:'#000',
    strokeLineWidth:2,
    eraserWidth:2,


    isShowInput:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.globalData){app.onLaunch()}
    this.setData({
      userId: app.globalData.userId,
      isNewUser: app.globalData.isNewUser
    })
    this.checkUserState()
    this.changeCanvasHeight();

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
    return {
      imageUrl:this.data.canvasCompleteFile
    }
  }
})