//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code=res.code;
        wx.request({
          url: 'http://127.0.0.1:3000/login',
          data:{code},
          success:(res)=>{
            res=res.data
            if(res.code==200){
              this.globalData.isNewUser=false
              this.globalData.userId = res.data.uid
            }else if(res.code==201){
              this.globalData.isNewUser=true
              this.globalData.userId = res.data.uid
            }else{
              this.globalData.userId=null;
            }
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userId:null,
    isNewUser:true,
    baseUrl:'http://127.0.0.1:3000/'
  }
})