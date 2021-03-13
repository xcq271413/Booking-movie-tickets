Page({
 
  /**
   * 页面的初始数据
   */

  data: {
    dataList:[
      {
        goods_id:1,
        goods_title:'你好，李焕英',
        goods_img:'../img/movie1.png',
        goods_score:'9.5',
        goods_director:'贾玲',
        goods_actor:'贾玲，张小斐，沈腾...',
        goods_price:100
      },{
        goods_id:2,
        goods_title:'人潮汹涌',
        goods_img:'../img/movie2.png',
        goods_score:'9.1',
        goods_director:'饶晓志',
        goods_actor:'刘德华，肖央，万茜...'    ,
        goods_price:100
      }, {
        goods_id:3,
        goods_title:'唐人街探案3',
        goods_img:'../img/movie3.png',
        goods_score:'8.8',
        goods_director:'陈思诚',
        goods_actor:'王宝强，李昊然，妻夫木聪...'
        ,
        goods_price:100
      }, {
        goods_id:4,
        goods_title:'刺杀小说家',
        goods_img:'../img/movie4.png',
        goods_score:'8.6',
        goods_director:'路阳',
        goods_actor:'雷佳音，杨幂，董子健...',
        goods_price:100
      }, {
        goods_id:5,
        goods_title:'封神榜：哪吒重生',
        goods_img:'../img/movie5.png',
        goods_score:'8.7',
        goods_director:'赵霁',
        goods_actor:'杨天翔，张赫，宣晓鸣...',
        goods_price:100
      }
    ],
  },

  // 事件处理函数
  navigateToPage:function(e) {
    wx.setStorageSync("dataList",this.data.dataList);
  //  var name= e.currentTarget.dataset.name
  console.log(e.currentTarget.id)
  console.log( e.currentTarget.dataset.name);
  for(var index in this.data.dataList){
    if(e.currentTarget.id==this.data.dataList[index]. goods_id){
      wx.setStorageSync('movie', this.data.dataList[index])
      console.log(this.data.dataList[index])
      
    }
  }
   // console.log(this.data.dataList[0]. goods_price);
 /*   console.log(this.data.dataList[0]. goods_id);
    console.log(this.data.dataList[0]. goods_title);
    console.log(this.data.dataList[0]. goods_img);
    console.log(this.data.dataList[0].  goods_score);
    console.log(this.data.dataList[0]. goods_director);
    console.log(this.data.dataList[0].    goods_actor);*/
    wx.redirectTo({
      
      url: '../book/index',
    })
  }
})