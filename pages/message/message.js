// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tabTouch: false, //tab点击会触发swiper的滚动，会导致调用两次相同的服务，使用此tag来阻止swiper调用服务，只是切换page
    window_width: wx.getSystemInfoSync().windowWidth || 375, // 单位是px
    tab_config: {
      tabs: ['进行中', '已成功', '已失败', '已过期'], // tabs
      fixed: false, // tabbar是否固定宽度
      active_tab: 0, //当前激活的tab
      item_width: 70, // 单位是px
      tab_left: 0, // 如果tabbar不是固定宽度，则目前左移的位置
      underline: {
        offset: 0, //下划线的位移
        margins: 20, //下划线的左右间距
      }
    },
    swipe_config: {
      indicator_dots: false, // 不显示小圆点
      autoplay: false, // 自动切换
      interval: 2000, // 自动切换频率
      duration: 500, // 切换时间
      current: 0 // 当前激活的panel
    },
    orderList: [
      {
        data: [{
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 0,
          isHot: "人气"
        }, {
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 0,
          isHot: "人气"
        },
        {
          taskName: "学生宝妈皆可做,手机赚钱",
          price: "200元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 0,
          isHot: "人气"
        },
        {
          taskName: "财务小任务,办公也可做",
          price: "900元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 0,
          isHot: "人气"
        }
        ]
      },
      {
        data: [{
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 1,
          isHot: "人气"
        }, {
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 1,
          isHot: "人气"
        },
        {
          taskName: "学生宝妈皆可做,手机赚钱",
          price: "200元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 1,
          isHot: "人气"
        },
        {
          taskName: "财务小任务,办公也可做",
          price: "900元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 1,
          isHot: "人气"
        }
        ]
      },
      {
        data: [{
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 2,
          isHot: "人气"
        }, {
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 2,
          isHot: "人气"
        },
        {
          taskName: "学生宝妈皆可做,手机赚钱",
          price: "200元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 2,
          isHot: "人气"
        },
        {
          taskName: "财务小任务,办公也可做",
          price: "900元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 2,
          isHot: "人气"
        }
        ]
      },
      {
        data: [{
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 3,
          isHot: "人气"
        }, {
          taskName: "简单小任务,在家躺赚",
          price: "300元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 3,
          isHot: "人气"
        },
        {
          taskName: "学生宝妈皆可做,手机赚钱",
          price: "200元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 3,
          isHot: "人气"
        },
        {
          taskName: "财务小任务,办公也可做",
          price: "900元/天",
          addr: "武侯区",
          howLong: "长期",
          style: "日结",
          state: 3,
          isHot: "人气"
        }
        ]
      }
    ],

    taskList: [{
      taskName: "简单小任务,在家躺赚",
      price: "300元/天",
      addr: "武侯区",
      howLong: "长期",
      style: "日结",
      state: 0,
      isHot: "人气"
    }, {
      taskName: "简单小任务,在家躺赚",
      price: "300元/天",
      addr: "武侯区",
      howLong: "长期",
      style: "日结",
      state: 1,
      isHot: "人气"
    },
    {
      taskName: "学生宝妈皆可做,手机赚钱",
      price: "200元/天",
      addr: "武侯区",
      howLong: "长期",
      style: "日结",
      state: 2,
      isHot: "人气"
    },
    {
      taskName: "财务小任务,办公也可做",
      price: "900元/天",
      addr: "武侯区",
      howLong: "长期",
      style: "日结",
      state: 3,
      isHot: "人气"
    }
    ],

    stateList: [{
      state: ""
    }, {
      state: "已成功"
    }, {
      state: "已失败"
    }, {
      state: "已过期"
    }]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



  /**
   * Table选择事件
   */
  tableSelected: function (e) {
    let pos = e.currentTarget.dataset.pos;
    let list = this.data.orderList;
    let scrollTop = this.data.scrollTop;
    this.setData({
      current: pos,
    })
    if (pos == 5) {
      this.setData({
        id: 6,
        scrollTop: 150,
      })
    } else if (pos <= 4) {
      this.setData({
        id: 0,
        scrollTop: 0,
      })
    }
  },

  /**
   * 底部滑动事件
   */
  bindChange: function (e) {
    let pos = e.detail.current;
    let list = this.data.orderList;
    this.setData({
      current: e.detail.current
    })
    if (pos == 5) {
      this.setData({
        id: 6,
        scrollTop: 150,
      })
    } else if (pos == 4) {
      this.setData({
        id: 0,
        scrollTop: 0,
      })
    }
  },
  /**
   * 更换页面到指定page ，从0开始
   */
  updateSelectedPage: function (page) {
    let that = this;
    //console.log("========== updateSelectedPage" + page);
    let {
      window_width,
      tab_config,
      swipe_config
    } = this.data;
    let underline_offset = tab_config.item_width * page;

    tab_config.active_tab = page;
    swipe_config.current = page;
    tab_config.underline.offset = underline_offset;
    if (!tab_config.fixed) {
      // 如果tab不是固定的 就要 检测tab是否被遮挡
      let show_item_num = Math.round(window_width / tab_config.item_width); // 一个界面完整显示的tab item个数
      let min_left_item = tab_config.item_width * (page - show_item_num + 1); // 最小scroll-left 
      let max_left_item = tab_config.item_width * page; //  最大scroll-left
      if (tab_config.tab_left < min_left_item || tab_config.tab_left > max_left_item) {
        // 如果被遮挡，则要移到当前元素居中位置
        tab_config.tab_left = max_left_item - (window_width - tab_config.item_width) / 2;
      }
    }
    that.setData({
      "tab_config": tab_config,
      "swipe_config": swipe_config
    });
    //调用页面的接口更新页面
    // that.loadOrderList(page);
  },
  /**
   * tab的点击事件
   */
  handlerTabTap: function (e) {
    this.setData({
      tabTouch: false
    })
    this.updateSelectedPage(e.currentTarget.dataset.index);
  },

  /**
   * swiper的滑动事件
   */
  bindChange: function (e) {
    if (!this.data.tabTouch) {
      console.log("===== swiperChange " + e.detail.current);
      this.updateSelectedPage(e.detail.current);
      this.data.tabTouch = false;
    }
  }

})