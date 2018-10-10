//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    curIndex: 0,  //当前显示的view下标
    curClientX: 0, // 当前点击的标题位置
    winWidth: 0,  //设备宽度；
    winHeight: 0,   //设备高度；

    itemWidth: 0, //单个轮播图swiper-item的宽度；
    itemHeight: 0,//单个轮播图swiper-item的高度；

    allWidth: 0,  //轮播展示 swiper的总宽度；
    scale: 0.8,   //  缩放大小倍数；

    titleTranslateX: 0,

    startClinetX: '', //触摸开始位置；
    startTimestamp: '', //触摸开始时间；

    translateDistance: 0,//动画移动的 距离；
    animationToLarge: {}, //从小变大的动画；
    animationToSmall: {},

    t_Animation_L: '',
    t_Animation_R: '',

    courses: [
      {
        "id": "87",
        "name": "Nick老师口语课",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/4da4016d8671255e4da6aeece0633ec5.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=1412&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "1412",
        "category_id": "1",
        "introduction": "尚德集团特聘外籍讲师",
        "teacher_name": "Nick powell",
        "teacher_avatar": "",
        "category_name": "语言学习"
      },
      {
        "id": "85",
        "name": "如何赚到人生的第一个100万",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/a1db123eef1ec2f546dc677d1c979f2d.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=1692&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "1692",
        "category_id": "3",
        "introduction": "12年资深理财师",
        "teacher_name": "谷雨",
        "teacher_avatar": "",
        "category_name": "管理晋升"
      },
      {
        "id": "84",
        "name": "一小时趣味解锁西方艺术史",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/5c9c33820eab74a6c623db459fcb1cf5.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=1334&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "1334",
        "category_id": "4",
        "introduction": "中山大学美术老师/立羽美术教育创始人",
        "teacher_name": "黄立羽",
        "teacher_avatar": "",
        "category_name": "人文认知"
      },
      {
        "id": "81",
        "name": "英语发音养成记：如何一开口就惊艳全场",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/e7a5cb6552b415bf00bbf7f87de19542.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=1745&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "1745",
        "category_id": "1",
        "introduction": "六国语言达人/原新东方教学总监",
        "teacher_name": "徐丽丹",
        "teacher_avatar": "",
        "category_name": "语言学习"
      },
      {
        "id": "79",
        "name": "小白的理财挣钱课：一节课摆脱月光族",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/aca7aae7df5c077e13635d548d2623c8.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=2038&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "2038",
        "category_id": "3",
        "introduction": "国家理财规划师/财经专栏作者",
        "teacher_name": "胡瑞",
        "teacher_avatar": "",
        "category_name": "管理晋升"
      },
      {
        "id": "77",
        "name": "职场人必须掌握的写作技能",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/1801769e3bd621e6920be396fa128879.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=2037&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "2037",
        "category_id": "2",
        "introduction": "尚德集团内刊副主编",
        "teacher_name": "木子",
        "teacher_avatar": "",
        "category_name": "职场技能"
      },
      {
        "id": "75",
        "name": "跟Oscar学PPT：一节课掌握PPT核心技巧",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/146f41dacfdee238e5a724650c55ff42.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=2036&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "2036",
        "category_id": "2",
        "introduction": "公众号筷子学堂创办者",
        "teacher_name": "陈林 Oscar",
        "teacher_avatar": "",
        "category_name": "职场技能"
      },
      {
        "id": "73",
        "name": "三个月词汇量从600逆袭到6000的秘密",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/db7e355f8a27cf6eb2185983ce8f245e.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=2035&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "2035",
        "category_id": "1",
        "introduction": "网红英语达人",
        "teacher_name": "韩宇",
        "teacher_avatar": "",
        "category_name": "语言学习"
      },
      {
        "id": "72",
        "name": "相声奶爸的育儿课：给孩子不一样的成长指南",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/fa6c445551a6f94dc6f87db5ffc0698f.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=2032&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "2032",
        "category_id": "5",
        "introduction": "国家二级心理咨询师",
        "teacher_name": "石虫语",
        "teacher_avatar": "",
        "category_name": "教育心理"
      },
      {
        "id": "71",
        "name": "最简单的时间管理方法：专治各种时间不够用",
        "go_type": "2",
        "cover_img": "https://cronus.ministudy.com/uploads/20180817/6ba08c4c8657c1d6703957bb3f27ac72.png",
        "appid": "wx0a98bbdbca02d069",
        "page_path": "pages/course/detail?syllabusId=317&enterSource=tyzx_0718",
        "link": "",
        "out_course_id": "317",
        "category_id": "2",
        "introduction": "齐鲁壹点专栏作家",
        "teacher_name": "林小白",
        "teacher_avatar": "",
        "category_name": "职场技能"
      }
    ]
  },

  swiperJump: function (e, index) {
    // console.log('x: ', clientX)
    let curIndex = e ? e.currentTarget.dataset.index : index
    
    let distance = (this.data.curIndex - curIndex) * this.data.itemWidth
    distance += this.data.translateDistance    

    this.animationToLarge(curIndex, distance)
    this.animationToSmall(curIndex, distance)

    this.setData({
      curIndex: curIndex,
      translateDistance: distance
    })

    let that = this
    let query = wx.createSelectorQuery()

    query.select('.swiper_title_item').boundingClientRect()    
    query.exec(function (res) {
      if (Array.isArray(res) && res.length > 0) {
        let tx = 0 - curIndex * (res[0].width + 15)
        that.alignTitleCenter(curIndex, tx)
      }
    })
  },

  alignTitleCenter: function (curIndex, tx) {
    this.animation2 = wx.createAnimation({
      duration: 500,
      timingFunction: "ease-out",
      delay: 0
    })

    this.t_Animation_R(curIndex, tx)
    this.t_Animation_L(curIndex, tx)
  },

  //触摸开始的事件
  swiperTouchstart: function (e) {
    // console.log('touchstart',e);
    let startClinetX = e.changedTouches[0].clientX;
    this.setData({
      startClinetX: startClinetX, //触摸开始位置；
      startTimestamp: e.timeStamp, //触摸开始时间；
    })
  },

  //触摸移动中的事件
  swiperTouchmove: function (e) {
    // console.log('touchmove',e);
  },

  //触摸结束事件
  swiperTouchend: function (e) {
    // console.log("触摸结束", e);

    let times = e.timeStamp - this.data.startTimestamp, //时间间隔；
      distance = e.changedTouches[0].clientX - this.data.startClinetX; //距离间隔；
    //判断
    if (times < 500 && Math.abs(distance) > 10) {
      let curIndex = this.data.curIndex;

      let x0 = this.data.itemWidth, x1 = this.data.translateDistance, x = 0;
      if (distance > 0) {

        curIndex = curIndex - 1
        if (curIndex < 0) {
          curIndex = 0;
          x0 = 0;
        }
        x = x1 + x0;
      } else {

        // console.log('+1',x);
        curIndex = curIndex + 1
        if (curIndex >= this.data.courses.length) {
          curIndex = this.data.courses.length - 1;
          x0 = 0;
        }
        x = x1 - x0;
      }
      this.swiperJump(null, curIndex)
      this.animationToLarge(curIndex, x)
      this.animationToSmall(curIndex, x)

      this.setData({
        curIndex: curIndex,
        translateDistance: x
      })

    }
  },
  // 动画
  animationToLarge: function (curIndex, x) {
    this.animation.translateX(x).scale(1).step()
    this.setData({
      animationToLarge: this.animation.export()
    })
  },
  animationToSmall: function (curIndex, x) {
    this.animation.translateX(x).scale(0.8).step()
    this.setData({
      animationToSmall: this.animation.export()
    })
  },

  t_Animation_L: function (curIndex, x) {
    this.animation2.translateX(x).scale(1).step()
    this.setData({
      t_Animation_L: this.animation2.export()
    })
  },
  t_Animation_R: function (curIndex, x) {
    this.animation2.translateX(x).scale(0.8).step()
    this.setData({
      t_Animation_R: this.animation2.export()
    })
  },

  onLoad: function () {
    var that = this

    wx.getSystemInfo({
      success: function (res) {
        let w = res.windowWidth, h = res.windowHeight;
        let allWidth = that.data.courses.length * (w * 0.8);

        that.setData({
          winWidth: w,
          winHeight: h,
          itemWidth: w * 0.8,
          allWidth: allWidth
        })
      },
    })
    this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 500,
      timingFunction: "ease-out",
      delay: 0
    })   

  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
    // 分享
  }
})
