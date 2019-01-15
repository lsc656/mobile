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
        url: app.globalData.baseUrl+'login/checkUserState',
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
    ctx.moveTo(e.touches[0].x, e.touches[0].y)
  },
  moveToSw(x,y){
    ctx.moveTo(x,y)
  },
  touchMove(e){
    var x = e.touches[0].x;
    var y = e.touches[0].y;
    if (this.data.strokeLineWidth){
      ctx.lineWidth = this.data.strokeLineWidth
    }
    if (this.data.useEraser){
      ctx.save();
      ctx.lineWidth=15;
    }
    ctx.lineTo(x,y);
    ctx.strokeStyle=this.data.strokeColor;
    ctx.stroke();
    ctx.draw(true);
    this.moveToSw(x,y);
    ctx.restore();
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
    if (this.data.showTools){
      this.setData({
        isShowInput:false
      })
    }
  },
  /**
   * 10.画布工具栏具体功能
   * 
   * 10.1画笔颜色
   */
  changeStrokeColor(){
    var that=this;
    wx.showActionSheet({
      itemList: ['红色', '蓝色', '默认', '自定义'],
      success(res) {
        that.setData({
          useEraser:false
        })
        switch(res.tapIndex){
          case 0: return that.setData({ strokeColor:'#C41A16'})
          case 1: return that.setData({ strokeColor:'#28B0EA'})
          case 2: return that.setData({ strokeColor:'#000'})
          case 3: return that.setData({ isShowInput: true, showTools:false})
          default: return that.setData({ strokeColor: '#000'})
        }
      }
    })
  },
  /**
   * 10.2画笔宽度
   */
  changeStrokeLineWidth(){
    var that=this;
    wx.showActionSheet({
      itemList: ['细','普通','粗'],
      success:(res)=>{
        switch (res.tapIndex){
          case 0: return that.setData({ strokeLineWidth: 1})
          case 1: return that.setData({ strokeLineWidth: 3})
          case 2: return that.setData({ strokeLineWidth: 5})
          default: return that.setData({ strokeLineWidth: 3 })
        }
        wx.showToast({
          title: '设置成功'
        })
        setTimeout(() => {
          wx.hideToast()
        }, 1000)      
      }
    })
    
    
    //this.setData({strokeLineWidth:value})
  },
  /**
   * 10.3橡皮擦
   */
  eraser(){
    this.setData({
      strokeColor: "#fff",
      useEraser:true
    })
    wx.showToast({
      title: '切换为橡皮擦'
    })
    setTimeout(() => {
      wx.hideToast()
    }, 1000)    
  },
  /**
   * 10.4画笔颜色——自定义——获取input框输入的值
   */
  handleInputStrokStyle(data){
    var input = data.detail.value
    this.setData({
      inputStrokeStyle:input
    })
  },
  /**
   * 10.2画笔颜色——自定义——根据输入框的值修改画笔颜色
   */
  changeInputStrokStyle(){
    var inputValue=this.data.inputStrokeStyle
    //测试输入是否合法。合法的：  数字(1-3)，数字(1-3)，数字(1-3)
    var reg=/^\d{1,3}[,|，]\d{1,3}[,|，]\d{1,3}$/;
    if(reg.test(inputValue)){
      //初次测试成功，测试区间值
      //inputValue.replace(/，/g,',')
      var inputArr = inputValue.split(/[,|，]/)
      console.log(inputArr)
      var isCorrect=true
      inputArr.map((item)=>{
        isCorrect = isCorrect && parseInt(item)<=255
      })
      if(isCorrect){
        this.setData({
          strokeColor: 'rgb(' + inputArr.join(',')+')',
          isShowInput:false
        })
      }else{
        wx.showToast({
          title:'颜色超过可设置范围',
          icon:'none'
        })
        setTimeout(()=>{
          wx.hideToast()
        },1000)
      }
    }else{
      wx.showToast({
        title: '输入格式不正确',
        icon:'none'
      })
      setTimeout(()=>{wx.hideToast()},1000)
    }    
  },
  /**
   * 11.加载采集信息
   * @params uid userPicsList
   */
  getCjInfo(){
    var uid=this.data.userId;
    wx.request({
      url: app.globalData.baseUrl+'user/getUserCJ',
      data:{uid},
      success:(res)=>{
        res=res.data;
        if(res.code==200){
        console.log(res.data)
          if(res.data.length==0){
            return
          }else{
            this.setData({
              userPicsList:res.data
            })
          }
        }
      }
    })
  },
  /**
   * 12.采集页————上传图片
   */
  uploadFiles(){
    var that=this;
    wx.chooseImage({
      success:(res)=>{
        wx.showLoading({
          title: '上传中...',
        })
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        var paths = res.tempFilePaths;
        var i = 0;
        var loadFiles = function(){
          wx.uploadFile({
            url: 'http://127.0.0.1:3000/user/uploadPics',
            filePath:paths[i],
            name: 'myPics',
            formData:{userId:that.data.userId},
            header: { "Content-Type": "multipart/form-data" },
            success: (res) => {
              console.log(res)
              res=JSON.parse(res.data);
              i++;
              if(i==paths.length){
                wx.hideLoading();
                wx.showToast({
                  title: res.msg,
                  icon:'none'
                })
                setTimeout(()=>{
                  wx.hideToast();
                  that.onLoad();
                },1000)
              }else{
                loadFiles()
              }
            },
            fail: function () {
              wx.showModal({
                title: '错误提示',
                content: '系统正在升级中，请稍后再试',
                showCancel: false,  //没有取消按钮
                success: function (res) {
                }
              })
            }
          })
        }
        loadFiles();
      }
    })
  },
  /**
   * 13.采集页————修改单张图片信息
   */
  updateMyPic(e){
    var cid=e.target.dataset.cid;
    var userId=this.data.userId;
    wx.navigateTo({
      url: '/pages/updateMyPic/updateMyPic?cid='+cid+"&userId="+userId
    })
  },
  /**
   * 14.加载关注信息
   */
  getFocusInfo(){
    wx.request({
      url: 'http://127.0.0.1:3000/user/getFocus?uid='+this.data.userId,
      success:(res)=>{
        res=res.data
        console.log(res)
        if(res.code==200 || res.code==201){
          this.setData({
            focusList:res.data
          })
        }
      }
    })
  },
  /**
   * 15.删除关注信息
   */
  delFocus(e){
    var uname=e.target.dataset.uname;
    wx.showModal({
      title: '删除确认',
      content: '是否删除'+uname+'?',
      success:(res)=>{
        if(res.confirm){
          var focId = e.target.dataset.uid;
          var uid = this.data.userId;
          wx.request({
            url: 'http://127.0.0.1:3000/user/delFocus',
            data: { focId, uid },
            success: (res) => {
              res = res.data
              console.log(res)
              if (res.code == 200) {
                console.log('即将更新')
                this.getFocusInfo();
              } else {
                wx.showToast({
                  title: '网络错误',
                  icon: 'none'
                })
                setTimeout(() => {
                  wx.hideToast();
                }, 1500)
              }
            }
          })
        }
      }
    })    
  },
  /**
   * 16.修改个人信息
   */
  changeMyInfo(){
    wx.navigateTo({
      url: '/pages/changeUserInfo/changeUserInfo'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    userId:0,
    userInfo:[],
    isNewUser:false,
    ////////////////////////////////////////////页面完成后设置为1！默认显示画板！否则高度不对！
    bannerSel:"0",
    canvasHeight:300,
    canvasWidth:150,
    showTools:false,
    canvasPathList:[],
    goBackButtonState:true,
    /**
     * 画板调试相关
     */
    strokeColor:'#000',
    strokeLineWidth:3,
    eraserWidth:10,
    inputStrokeStyle:'',
    useEraser:false,
    isShowInput:false,
    /**
     * 采集页
     */
    userPicsList:[],
    imgHeight:[],
    /**
     * 关注页
     */
    focusList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.globalData.userId){
      this.checkUserState()
      return
    }
    this.setData({
      userId: app.globalData.userId,
      isNewUser: app.globalData.isNewUser
    })
    this.checkUserState()
    
    //更改画板高度    
    this.changeCanvasHeight();

    //加载采集信息
    this.getCjInfo();

    //加载关注信息
    this.getFocusInfo();
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