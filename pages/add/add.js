// pages/add/add.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: undefined,
    title: "",
    img: "",
    desct: "",
    addUrl: app.globalData.host + "/add",
    updateUrl: app.globalData.host + "/update"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("接收到的id为："+options.id);
    var that = this;
    this.setData({
      id: options.id
    });
    if (options.id == undefined) {
      return;
    }
    wx.request({
      url: app.globalData.host + "/getProductById",
      data: {
        "id": options.id
      },
      method: "GET",
      success: function(res) {
        var product = res.data.product;
        if (product == undefined) {
          var toastText = '获取数据失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            title: product.title,
            desct: product.desct,
            img: product.img
          });
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  formSubmit: function(e) {
    var that = this;
    var formData = e.detail.value;
    console.log("ormSubmit formData",formData);
    var url = that.data.addUrl;
    if (that.data.id != undefined) {
      formData.id = that.data.id;
      url = that.data.updateUrl; 
    }
    wx.request({
      url: url,
      data: JSON.stringify(formData),
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      success: function(res) {
        var result = res.data.success;
        var toastText = "操作成功！";
        if (result != true) {
          toastText = "操作失败！"
        }
        wx.showToast({
          title: toastText,
          icon: "",
          duration: 2000
        }),
        wx.navigateTo({
          url: "/pages/index/index"
        })
      }
    })
  }
})