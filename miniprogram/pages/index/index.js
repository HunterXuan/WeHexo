//index.js
const app = getApp()

Page({
  data: {
    siteInfo: {},
    categoryList: {},
    categoryPostList: {},
    selectedCategoryIndex: 0
  },

  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })

    this.setSiteInfo()
    this.setCategoryList(this.setCategoryPostList)
  },

  onShow: function () {
    if (wx.getStorageSync('isArticleBack')) {
      wx.removeStorageSync('isArticleBack')
      return
    }
  },

  categoryChanged: function (e) {
    var that = this
    this.setData({
      selectedCategoryIndex: e.detail.index
    }, () => {
      that.setCategoryPostList()
    })
  },

  jumpToArticle: function (e) {
    wx.setStorage({
      key: 'articleSlug',
      data: e.currentTarget.dataset.slug,
      success: () => {
        wx.navigateTo({
          url: '../article/article',
        })
      }
    })
  },

  setSiteInfo: function () {
    var that = this
    wx.cloud.callFunction({
      name: 'getSiteInfo',
      data: {
        'siteUrl': app.globalData.siteUrl 
      },
      success: response => {
        that.setData({
          siteInfo: response.result
        })
      }
    })
  },

  setCategoryList: function (callback) {
    var that = this
    wx.cloud.callFunction({
      name: 'getCategoryList',
      data: {
        'siteUrl': app.globalData.siteUrl
      },
      success: response => {
        that.setData({
          categoryList: response.result
        }, callback)
      }
    })
  },

  setCategoryPostList: function () {
    var that = this

    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getCategoryPostList',
      data: {
        'siteUrl': app.globalData.siteUrl,
        'categoryName': that.data.categoryList[that.data.selectedCategoryIndex].name
      },
      success: response => {
        that.setData({
          categoryPostList: response.result
        }, () => {
          wx.hideLoading()
        })
      }
    })
  }
})
