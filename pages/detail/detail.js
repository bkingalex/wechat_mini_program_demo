// pages/detail/detail.js
Page({

  backBtn: function() {
    wx.navigateBack()
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //通过onLoad的options对象获取传递过来的id
    console.log("id", options.id);
  },
  tell: function() {
    wx.makePhoneCall({
      phoneNumber: '6666',
    })
  },
  copy: function() {
    if (wx.setClipboardData) {
      wx.setClipboardData({
          data: '复制的内容',
          success: function(result) {
            wx.showModal({
              title: '复制成功',
              content: '内容复制成功！',
            })
          }
        })
    }else{
      wx.showModal({
        title: '复制失败',
        content: '请升级你的微信版本！',
      })
    }
    }
})