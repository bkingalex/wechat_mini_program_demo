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
    productList: [{
      id:"001",
        img: 'https://blog.sitcat.cn//user/img/rand/1.jpg',
        title: '数据库',
        desc: 'mySQL数据库'
      },
      {
        id: "002",
        img: 'https://blog.sitcat.cn//user/img/rand/2.jpg',
        title: 'Java',
        desc: 'SpringBoot'
      },
      {
        id: "003",
        img: 'https://blog.sitcat.cn//user/img/rand/1.jpg',
        title: '数据库',
        desc: 'mySQL数据库\nmySQL数据库'
      },
      {
        id: "004",
        img: 'https://blog.sitcat.cn//user/img/rand/2.jpg',
        title: 'Java',
        desc: 'SpringBoot'
      }
    ],
  },

  onLoad: function() {

  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    wx.navigateTo({
      //将参数传递到detail页面
      url: '/pages/detail/detail?id='+index,
    })
  }
})