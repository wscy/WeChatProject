// pages/personReg/personReg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 选择学历
   */
  chooseEdu: function() {
    var that = this
    wx.showActionSheet({
      itemList: ["小学", "初中", "高中", "专科", "本科", "硕士"],
      success: function(res) {
        const itemList = ["小学", "初中", "高中", "专科", "本科", "硕士"]
        for (let i = 0, len = itemList.length; i < len; i += 1)
          if (res.tapIndex == i) {
            that.setData({
              education: itemList[i]
            })
          }

      }
    })
  },
  /**
   * 选择工作年限
   */
  chooseWorkLife: function() {
    var that = this
    wx.showActionSheet({
      itemList: ["不足1年", "1-3年", "3-5年", "5-8年", "8年以上"],
      success: function(res) {
        const itemList = ["不足1年", "1-3年", "3-5年", "5-8年", "8年以上"]
        for (let i = 0, len = itemList.length; i < len; i += 1)
          if (res.tapIndex == i) {
            that.setData({
              workLife: itemList[i]
            })
          }

      }
    })
  },
  /**
   * 选择求职状态
   */
  chooseState: function() {
    var that = this
    wx.showActionSheet({
      itemList: ["在职", "离职"],
      success: function(res) {
        const itemList = ["在职", "离职"]
        for (let i = 0, len = itemList.length; i < len; i += 1)
          if (res.tapIndex == i) {
            that.setData({
              state: itemList[i]
            })
          }

      }
    })
  },
  /**
   * 表单提交
   */
  postMessage: function(e) {
    console.log("personReg--------->", e.detail.value);
    const {
      userName,
      age,
      education,
      email,
      evaluate,
      gender,
      height,
      idCard,
      isStu,
      location,
      naLocation,
      phone,
      qq,
      state,
      weChat,
      workLife
    } = e.detail.value
    const userInfo = {
      userName,
      age,
      education,
      email,
      evaluate,
      gender,
      height,
      idCard,
      isStu,
      location,
      naLocation,
      phone,
      qq,
      state,
      weChat,
      workLife
    }
    wx.setStorageSync("userInfo", userInfo)
    wx.navigateBack({
      delta:1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})