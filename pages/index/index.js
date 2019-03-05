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
    //页面之间通过setStorage 本地缓存的方式传递值
    wx.setStorage({
      key: 'title',
      data: '值传递',
    })
    /** 通过getStorage 从本地换从中获取传递的值
wx.getStorage({
  key: 'title',
  success: function(res) {},
})
 */
    wx.navigateTo({
      //页面传值方式：将参数传递到detail页面
      url: '/pages/detail/detail?id=' + index,
    })
  },

  //向服务端发送请求 获取商品列表
  getProductListFromJavaServer: function() {
    var self = this;
    wx.request({
      //在全局变量中定义host属性，并获取
      url: app.globalData.host,
      method: "get",
      success: function(resultData) {
        var resultList = resultData.data;
        console.log(resultData.data.list);

        //显示返回结果
        wx.showModal({
          title: '请求结果',
          content: "请求JavaServer成功",
        })

        //将服务端返回的结果赋值给productList 遍历显示出来
        self.setData({
          productList: resultData.data.list,
        })

      }
    })
  },
  addProduct: function() {
    console.log("to add function");
    wx.navigateTo({
      url: ' /pages/add/add ',
    })
  },
  deleteProduct: function(e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除[' + e.target.dataset.productname + ']吗？',
      success: function(sm) {
        if (sm.confirm) {
          wx.request({
            url: app.globalData.host + '/delete',
            data: {
              "id": e.target.dataset.productid
            },
            method: "GET",
            success: function(res) {
              var result = res.data;
              console.log(result);
              var toastText="删除成功！";
              if (result != true) {
                toastText = "删除失败！";
              } else {
                that.data.productList.splice(e.target.dataset.index, 1);
                that.setData({
                  productList: that.data.productList
                })
              };
              wx.showToast({
                title: toastText,
                icon: '',
                //显示时长：单位毫秒
                duration: 2000
              });
            }
          })
        }
      }
    })
  }
})