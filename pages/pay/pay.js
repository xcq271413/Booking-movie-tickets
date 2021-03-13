// pages/pay/pay.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    resultType: "",
    resultContent: "",
    url:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var resultType = options.resultType;
    if (resultType == "success") {
      this.setData({
        resultType: "success",
        resultContent: "支付成功",
        url: '../order/order'
      });
    } else {
      this.setData({
        resultType: "warn",
        resultContent: "支付成功",
        url: '../book/index'
      });
    }
  }
})