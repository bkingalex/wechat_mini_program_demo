//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://blog.sitcat.cn//user/img/rand/15.jpg',
      'https://blog.sitcat.cn//user/img/rand/17.jpg',
      'https://blog.sitcat.cn//user/img/rand/13.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 3000,
    productList: null,
  },
  onLoad: function() {
    this.getProductListFromJavaServer();
  },

  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    wx.navigateTo({
      //将参数传递到detail页面
      url: '/pages/detail/detail?id=' + index,
    })
  },

  //向服务端发送请求 获取商品列表
  getProductListFromJavaServer: function() {
    var self = this;
    wx.request({
      url: 'http://localhost:8080',
      method: "get",
      success: function(resultData) {
        console.log(resultData.data);

        //显示返回结果
        wx.showModal({
          title: '请求结果',
          content: "请求JavaServer成功",
        })

        //将服务端返回的结果赋值给productList 遍历显示出来
        self.setData({
          productList: resultData.data,
        })

      }
    })
  }
})