//index.js
var i=0
//获取应用实例
var that = this
var seat=0;
Page({
  // 事件处理函数
  bindViewTap() {
    if (this.data.list.length <= this.data.minFieldLen - 1) {
      wx.showToast({
        title: `最少选择${this.data.minFieldLen}张`,
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(i!=0)
    this.data.orderList=wx.getStorageSync("orderList")||[];
   
    this.data.payList=wx.getStorageSync('payList')||[];
    this.data.myDate=wx.getStorageSync('myDate');
    this.data.mySession=wx.getStorageSync('mySession');
    this.data.dataList=wx.getStorageSync('movie');
    for(var index in this.data.payList){
      if(this.data.payList[index].row!="0排"&&this.data.payList[index].column!="0列"){
      console.log(this.data.mySession.id);

      this.data.orderList.push({"id":i,"hall":this.data.mySession.id+"号厅","time":this.data.myDate.title+" "+this.data.myDate.subTitle+" "+this.data.mySession.name,
      "name":this.data.dataList.goods_title,"status":this.data.payList[index].row+this.data.payList[index].column+" ","money":this.data.dataList.goods_price})
 
      wx.setStorageSync("orderList",this.data.orderList);
      console.log(this.data.orderList[i].id)
      console.log(this.data.orderList[i].hall)
  
    wx.request({
      url: 'http://localhost:8080/XCXTEST/demo',
      data:{
        id:this.data.orderList[i].id,//号
        hall:this.data.orderList[i].hall,
        time:this.data.orderList[i].time,
        name:this.data.orderList[i].name,
        price:this.data.orderList[i].money,
        column:this.data.payList[index].column,
        row:this.data.payList[index].row
     /*   goods_title:this.data.dataList.goods_title,
        goods_score:this.data.dataList.goods_score,
        goods_director:this.data.dataList.goods_director,
        goods_actor:this.data.dataList.goods_actor,*/
      },
      method:'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json;charset=utf-8"
      },
      success:function(res){
        console.log(res.data);
      },
      fail:function(res){
        console.log(".....fail.....");
      }
   
    })
   i++
  }}
   wx.navigateTo({
      url: '../pay/pay',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    orderList:[],
    myDate:'1',//纪录日期
    mySession:'1',//记录场次
    payList:[
      { 
        row:"0排",//排
        column:"0列"//列
      },
      { 
        row:"0排",//排
        column:"0列"//列
      },
      { 
        row:"0排",//排
        column:"0列"//列
      },
      { 
        row:"0排",//排
        column:"0列"//列
      },
      { 
        row:"0排",//排
        column:"0列"//列
      }
    ],
    requestAreaId: 0,
    requestDate: '',
    /**
     * 选中的位置
     */
    list: [],
      //    0 已预定 
    //    1 可预订
    //    2 已售
    //   
    obj: [
      [{
          "status":1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],

      [{
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],


      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
      [{
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
      [{
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
      [{
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
      [{
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 2,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        }
      ]
    ],
    time: [
      
      "1排",
      "2排",
      "3排",
      "4排",
      "5排",
      "6排", 
      "7排",
      "8排",
      "9排"
    ],
    area: [
      "1列",
      "2列",
      "3列",
      "4列",
      "5列",
      "6列",
      "7列",
      "8列",
      "9列"
    ],
    /**
     * 场次
     */
    session: [{
        name: 'A场(9:00)',
        id: 1
      },
      {
        name: 'B场(10:00)',
        id: 2
      },
      {
        name: 'C场(13:00)',
        id: 3
      },
      {
        name: 'D场(15:00)',
        id: 4
      },
      {
        name: 'E场(17:00)',
        id: 5
      },
      {
        name: 'F场(18:00)',
        id: 6
      },
      {
        name: 'G场(20:00)',
        id: 7
      },
      {
        name: 'H场(21:00)',
        id: 8
      },
    ],
    date: [{
        title: '今天',
        subTitle: '03月14日'
      },
      {
        title: '周五',
        subTitle: '03月15日'
      },
      {
        title: '周六',
        subTitle: '03月16日'
      },
      {
        title: '周日',
        subTitle: '03月17日'
      },
      {
        title: '周一',
        subTitle: '03月18日'
      },
    ],
    submitTitle: '提交订单',
    /**
     * 日期选中
     */
    datePosition: 0,
    /**
     * 场次选中
     */
    sessionPosition: 0,
    /**
     * 上拖动效果越界
     */
    offsetTop: 0,
    /**
     * 做拖动效果越界
     */
    offsetLeft: 0,
    /**
     * 调整左边的滚动条位置
     */
    left: 0,
    /**
     * 调整上的滚动条位置
     */
    top: 0,
    /**
     * 选座区域最小高度
     */
    min: 100,
    /**
     * 选座区域最大高度
     */
    max: 600,

    /**
     * 场地价格
     */
    price: 0,
    /**
     * 当前场地id
     */
    id: 0,
    /**
     * 最大可选场地
     */
    maxFieldLen: 4,
    /**
     * 最小可选场地
     */
    minFieldLen: 1,
    /**
     * 默认时间选择滚动条位置
     */
    dateScrollX: 0,
    scrollItemW: 0,
    screenW: 0,
    isFirstScroll: false
  },

  /**
   * 确认订单
   *//*
  confirm: function(e) {
    if (this.data.list.length <= this.data.minFieldLen - 1) {
      wx.showToast({
        title: `最少选择${this.data.minFieldLen}张`,
        icon: 'none',
        duration: 2000
      })
      return
    }


    var session = this.data.session[this.data.sessionPosition].name
    var date = this.data.date[this.data.datePosition].subTitle
    var data = {
      allPrice: this.data.dataList.goods_price,
      applyDate: this.data.date[this.data.datePosition].value,
      session: session,
      date: date,
      refundHours: this.data.refundHours,
      list: this.data.list,

    }
   /* wx.navigateTo({
      url: '../placeSubmit/placeSubmit?data=' + JSON.stringify(data),
    })*/
  /*},*/
    /**
   * 选择日期
   */
  
  chooseDate: function(e) { 
    var index = parseInt(e.currentTarget.id)
   
    if (index != this.data.datePosition) {
   
      this.setData({
        datePosition: index,
     
      })

      this.data.myDate=this.data.date[this.data.datePosition];//设置日期
      console.log( this.data.myDate); console.log(this.data.myDate.title);
      wx.setStorageSync("myDate",this.data.myDate);
     // this.data.payList[0].date=this.data.date[this.data.datePosition];//设置日期
      //console.log(  this.data.payList[0].date); console.log(  this.data.payList[0].date.title);
    }  
  },
  /**
   * 选择场次
   */
  chooseSession: function(e) {
    var index = parseInt(e.currentTarget.id)
    if (index != this.data.sessionPosition) {

      this.setData({
        contentX: 0,
        contentY: 0,
        sessionPosition: index,
        requestAreaId: this.data.id,
        submitTitle: '提交订单',
      })
      this.data.mySession=this.data.session[this.data. sessionPosition];//设置场次
      
      console.log(  this.data.mySession); console.log(  this.data.mySession.name);
      wx.setStorageSync("mySession",this.data.mySession);
     // this.data.payList[0]. session=this.data.session[this.data. sessionPosition];//设置场次
      //console.log(  this.data.payList[0].session); console.log(  this.data.payList[0].session.name);
     
    //  this.getData(this.data.session[index].id, this.data.date[this.data.datePosition].value, this.data.id)
    
    }

  },

  /**
   * 点击事件
   */
  bindChange: function(e) {
    var x = e.detail.x
    var y = e.detail.y
    var offsetTop = 0;
    if (y > 0) {
      offsetTop += y
    }
    var offsetLeft = 0;
    if (x > 0) {
      offsetLeft += x;
    }


    this.setData({
      left: x,
      offsetLeft: offsetLeft,
      offsetTop: offsetTop,
      top: y
    })
  },
  /**
   * 座位选择
   */
  choose: function(e) {
    var p = e.currentTarget.id.split(",")
    var i = parseInt(p[0])
    var j = parseInt(p[1])
    var id = i + ',' + j // 1,2 
    var item = this.data.obj[i][j]

    //    0 已预定 
    //    1 可预订
    //    2 已售
    //         
    var status = item.status

    /**
     * 可预订
    */
    if (status == 1) {
      //判断数组长度最多选6个座位
      if (this.data.list.length == this.data.maxFieldLen) {
        wx.showToast({
          title: '最多选择' + this.data.maxFieldLen + '张',
          icon: 'none',
          duration: 2000
        })
        return
      }
      /**
       * 判断上下是否是靠近的
       * i,j
       * 可以选择
       * 0,0
       * 1,0
       * 不能选择
       * 0,0
       * 1,2
       */

      var arithmeticList = []
      var isAdd = false
      for (var index in this.data.list) {
        var temp = this.data.list[index].id.split(",");
        var x = parseInt(temp[0])
        var y = parseInt(temp[1])
       
     
          arithmeticList.push(x)

          isAdd = true
        
      };
      /**
       * 判断等差数列
       */
      if (null != arithmeticList && isAdd && arithmeticList.length > 0) {

        var tempArithmeticList = arithmeticList
        tempArithmeticList.push(i)

      }
  
      item.status = 0
      /**
       * 生成框里的数据
       */
      this.data.list.push({
     //   price: this.data.obj[i][j].price,
     price:this.data.dataList.goods_price,
        time: this.data.time[i] + this.data.area[j],
        area: this.data.area[j].name,
        // area: this.data.session[this.data.sessionPosition].name + this.data.area[j].name,
        id: id,
        fieldId: this.data.area[j].id

     
      })


      
      console.log(this.data.time[i])
      console.log(this.data.area[j])
      if(seat<this.data.maxFieldLen){
        while(this.data.payList[seat].row!="0排"&&this.data.payList[seat].column!="0列"){
          seat++;
          if(seat>=this.data.maxFieldLen)
          seat=seat%this.data.maxFieldLen
        }
      this.data.payList[seat].row=this.data.time[i]
      this.data.payList[seat].column=this.data.area[j]
      console.log(this.data.payList[seat].row)
      console.log(this.data.payList[seat].column)
      console.log(this.data.payList)
     // console.log(this.data.time[i])
      //console.log(this.data.area[j])
       wx.setStorageSync("payList",this.data.payList);
   //   wx.setStorageSync("column",this.data.payList[seat].column);
      seat++;
      console.log(seat)
      }
      // console.log(wx.getStorageSync("row", this.data.payList[seat].row));
      //console.log( wx.getStorageSync("row", this.data.payList[seat].column));

  
  
  
      let tempO = 'obj[' + i + '][' + j + ']'
      // console.log(tempO)
      /**
       * 计算价格
       */
      var title = this.getTitle(this.data.list)
      this.setData({
        submitTitle: title,
        // obj: this.data.obj,
        [tempO]: item,
        list: this.data.list
      })
    } else if (status == 0) {//已选择

      //i j

      var arithmeticList = []
      var isAdd = false
      for (var index in this.data.list) {
        var temp = this.data.list[index].id.split(",");
        var x = parseInt(temp[0])
        var y = parseInt(temp[1])

          arithmeticList.push(x)
          isAdd = true
          console.log(this.data.time[i])
          console.log(this.data.area[j])
          seat=0;

         for(var index2 in this.data.payList){
        /*  console.log(index2 )
          console.log(this.data.payList[index2 ].row )
          console.log(this.data.payList[index2 ].column )
          console.log(this.data.time[i])
          console.log(this.data.area[j] )
          console.log(this.data.payList[index2 ].row==this.data.time[i])
          console.log(this.data.payList[index2].column==this.data.area[j])*/
          if(this.data.payList[index2 ].row==this.data.time[i]&&this.data.payList[index2].column==this.data.area[j]){
            this.data.payList[index2 ].row="0排";
            this.data.payList[index2 ].column="0列";
          //  console.log(this.data.payList[index2 ].row )
            wx.setStorageSync("payList",this.data.payList);
          }else console.log(123)
    
         
         }
      };
      console.log(this.data.payList)
  

      /**
       * 已选择 取消选择
       */
      item.status = 1

      for (var m = 0; m < this.data.list.length; m++) {

        if (this.data.list[m].id == id) {
          this.data.list.splice(m, 1)
          break;
        }
      }
      let tempO = 'obj[' + i + '][' + j + ']'
      /**
       * 计算价格
       */
      var title = this.getTitle(this.data.list)
      this.setData({
        submitTitle: title,
        // obj: this.data.obj,
        [tempO]: item,
        list: this.data.list
      })
      
    } else if (status == 2) {

      wx.showToast({
        title: '已售',
        icon: 'none',
        duration: 2000
      })
    }/* else if (status == 3) {

      wx.showToast({
        title: '已售',
        icon: 'none',
        duration: 2000
      })
    }*/

  },
  getTitle: function(list) {

    if (list.length <= 0) {
      this.setData({
        price: 0
      })

      return '提交订单'
    }
    console.log(this.data.dataList.goods_price)
    console.log(list.length)
    //this.data.price = 0
 //   for (var index in list) {
      this.data.price = this.data.dataList.goods_price*list.length
   // }console.log(this.data.price)
   
   /* this.setData({
      price:this.data.price
    })*/
    console.log(this.data.price)
    return '￥' + this.data.price + '提交订单'

  },

  /**
   * 判断是否为等差数列
   */
  isArithmeticList: function(list) {
    var tempArithmeticList = this.sortarr(list)

    for (var i = 0; i < tempArithmeticList.length - 1; i++) {
      var res = tempArithmeticList[i + 1] - tempArithmeticList[i]
      if (res < 0) res = res * -1;

      if (res != 1) {
        return false
      }
    }
    return true
  },
  /**
   * 排序
   */
  sortarr: function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.mySession)
    this.data.dataList=wx.getStorageSync('movie')|| [];
  //  console.log(51254);
  this.data.mySession=this.data.session[0]
  wx.setStorageSync("mySession",this.data.mySession)
  this.data.myDate=this.data.date[0]
  wx.setStorageSync("myDate", this.data.myDate)
  console.log( this.data.mySession);
  console.log( this.data.mySession);
 // wx.setStorageSync('mySession', mySession)

    console.log(this.data.dataList.goods_price);
    for(var i in  this.data.obj){
      for (var j in  this.data.obj[i]){
        this.data.obj[i][j].price=this.data.dataList.goods_price
        this.data.obj[i][j].status=1
      }
    }
    
 //   this.data.obj
 //   this.data.price=this.data.dataList[0].goods_price;
   // console.log(this.data.price);
    that = this
    /**
     * 屏幕宽度
     * 16 + 182 scrollW
     */
    let scrollItemW = this.rpx2px(16 + 182)
    let screenW = this.rpx2px(750)

    let blockW = this.rpx2px(96)
    let blockH = this.rpx2px(58)
    // console.log(scrollItemW)

    
    // console.log(options)
    this.setData({ 
      scrollItemW: scrollItemW,
      screenW: screenW,
      blockH: blockH,
      blockW: blockW,
      max: this.rpx2px(that.data.max),
      min: this.rpx2px(that.data.min),
      maxW: this.rpx2px(650),
    }) 
    this.getData(this.data.requestAreaId, this.data.requestDate, this.data.id)
    this.getData(this.data.mySession.id, this.data.date[this.data.datePosition].value, this.data.id)
  },
 
  /**
   * 获取数据
   */
  getData: function (areaId, date, id) {


    var that = this
    var time = this.data.time
    var area = this.data.area
    var h = time.length
    var w = area.length

    // console.log('h',h)
    // console.log('w', w)
    var offsetH = h * that.data.blockH
    var offsetW = w * that.data.blockW
    var currentH = offsetH
    let currentW = offsetW

    /**
     * 设置最高高度
     */
    if (offsetH > this.data.max) {
      currentH = this.data.max
    }

    if (currentW > this.data.maxW) {
      currentW = this.data.maxW
    }

    let datePosition = 0
    // console.log('requestDate', that.data.requestDate)
    if (that.data.requestDate) {
      for (let i = 0; i < data.data.dateList.length; i++) {
        if (that.data.requestDate == data.data.dateList[i].value) {
          datePosition = i
          break
        }
      }
    }

    let disableRow = 0 //判断前几行不能选择 

    

    /**
     * 16 + 182
     */
    
    that.setData({
      contentX: 0,
      contentY: (that.data.blockH + 1) * disableRow * -1,
      offsetTop: 0,
      offsetLeft: 0,
      datePosition: datePosition,
      left: 0,
      top: 0,
      maxFieldLen:5,
      minFieldLen: 1,
      date: that.data.date,
      session: that.data.session, 
      area: that.data.area,
      time: that.data.time,
      obj: that.data.obj,
      offsetH: offsetH,
      offsetW: offsetW,
      currentH: currentH,
      currentW: currentW,
      list: [],
      price: 0,
    })

    if (!that.data.isFirstScroll) {
      let dateScrollX = 0
      if (that.data.screenW < datePosition * that.data.scrollItemW) {
        dateScrollX = datePosition * that.data.scrollItemW - that.data.scrollItemW * 3
      }
      // console.log(dateScrollX)
      that.setData({
        dateScrollX: dateScrollX,
        isFirstScroll: true
      })
    }

  },
  /**
   * rpx 转 px
   */
  rpx2px(rpx) {
    return rpx / 750 * wx.getSystemInfoSync().windowWidth;
  },
  /**
   * px 转 rpx
   */
  px2rpx(px) {
    // px = rpx / 750 * wx.getSystemInfoSync().windowWidth;
    return px * 750 / wx.getSystemInfoSync().windowWidth;
  }

})