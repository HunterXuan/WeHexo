// pages/article/article.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    articleSlug: '',
    articleInfo: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      articleSlug: wx.getStorageSync('articleSlug')
    }, () => {
      this.setArticleInfo();
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    wx.setStorageSync('isArticleBack', true)
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  setArticleInfo: function () {
    var that = this

    wx.showLoading({
      title: '加载中',
    })

    wx.cloud.callFunction({
      name: 'getArticle',
      data: {
        'siteUrl': app.globalData.siteUrl,
        'articleSlug': that.data.articleSlug
      },
      success: response => {
        let towxmlData = app.towxml.toJson(response.result.content, 'html')
        
        that.setData({
          articleInfo: response.result,
          articleTowXml: towxmlData
        }, () => {
          wx.hideLoading()
        })
      }
    })
  }
})