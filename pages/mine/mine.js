// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  /**
   * 弹出操作框
   */
  showActionSheet: function() {
    wx.showActionSheet({
      itemList: ['个人注册', '企业注册'],
      success: function(res) {
        if (res.tapIndex === 0) {
          wx.navigateTo({
            url: '/pages/personReg/personReg',
            success: function() {},
            fail: function() {},
            complete: function() {}
          })
        } else if (res.tapIndex === 1) {
          wx.navigateTo({
            url: '/pages/businessReg/businessReg',
            success: function() {},
            fail: function() {},
            complete: function() {}
          })
        } else {}
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
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
    const userInfo = wx.getStorageSync("userInfo");
    console.log("--->userInfo", userInfo)
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
    } = userInfo
    this.setData({
      userName: userName,
      age: age,
      education: education,
      email: email,
      evaluate: evaluate,
      gender: gender,
      idCard: idCard,
      height: height,
      isStu: isStu,
      location,
      naLocation,
      phone,
      qq,
      state,
      weChat,
      workLife
    })
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