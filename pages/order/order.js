var order="";
var i=0;
// pages/order/order.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    myDate:'',
    mySession:'',
    payList:[],
    dataList:[],
    currtab: 0,
    orderList:[
    ]
  
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
   /* if(i!=0)
    this.data.orderList=wx.getStorageSync("orderList")||[];
    this.data.payList=wx.getStorageSync('payList')||[];
    this.data.myDate=wx.getStorageSync('myDate');
    this.data.mySession=wx.getStorageSync('mySession');
    this.data.dataList=wx.getStorageSync('movie');
     
    for(var index in this.data.payList){
      if(this.data.payList[index].row!="0排"&&this.data.payList[index].column!="0列"){
      console.log(this.data.mySession.id);
      this.data.orderList.push({"id":i++,"hall":this.data.mySession.id+"号厅","time":this.data.myDate.title+" "+this.data.myDate.subTitle+" "+this.data.mySession.name,
      "name":this.data.dataList.goods_title,"status":this.data.payList[index].row+this.data.payList[index].column+" ","money":this.data.dataList.goods_price})
     /*   this.data.orderList[i].hall=this.data.mySession.id+"号厅"
        console.log(this.data.orderList[i].hall)
        this.data.orderList.push[i]({"id":i,})
        this.data.orderList[i].time=this.data.myDate.title+" "+this.data.myDate.subTitle+" "+this.data.mySession.name
        this.data.orderList[i].name=this.data.dataList.goods_title
        this.data.orderList[i].status=this.data.payList[index].row+this.data.payList[index].column+" "
        this.data.orderList[i].money=this.data.dataList.goods_price
       */
      
 //   }}
   // wx.setStorageSync("orderList",this.data.orderList);*/
   /* order=""
    for(var index in this.data.payList){
      if(this.data.payList[index].row!="0排"&&this.data.payList[index].column!="0列"){
        order=order+this.data.payList[index].row+this.data.payList[index].column+" "
        console.log(order)
       // this.orderShow()
      }}
      this.data.orderList[0].hall=this.data.mySession.id+"号厅"
      this.data.orderList[0].time=this.data.myDate.title+" "+this.data.myDate.subTitle+" "+this.data.mySession.name
      this.data.orderList[0].name=this.data.dataList.goods_title
      this.data.orderList[0].status=order
      this.data.orderList[0].money=this.data.dataList.goods_price
      console.log( this.data.orderList[0].hall)
      console.log(this.data.orderList[0].time)
      console.log(this.data.mySession)
      console.log(this.data.dataList)  */
     this.data. orderList=wx.getStorageSync("orderList")||[];
     console.log( this.data. orderList)
      this.setData(
      {
        orderList:this.data.orderList
      })



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    // 页面渲染完成
   // this.getDeviceInfo()

  
  },
  onUnload: function () {
    wx.reLaunch({
      url: '../my/my'
    })
  }
})