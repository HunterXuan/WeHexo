//app.js
// 引入towxml库
const Towxml = require('/towxml/main');
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    //this.globalData = {}
  },

  towxml: new Towxml(),

  globalData: {
    siteUrl: 'https://hunterx.xyz'
  }
})
