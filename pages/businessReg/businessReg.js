// pages/businessReg/businessReg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 检查企业名称是否符合标准
   */
  checkName:function(event){
    if(event.detail.value==""){
      wx.showToast({
        title: '企业名称不能为空',
        icon:'none'
      })
    } if (event.detail.value.length<4) {
      wx.showToast({
        title: '企业名称要大于4个字',
        icon: 'none'
      })
    }
  },
  
  /**
   * 选择营业执照图片
   */
  chooseImage:function(){
    const that=this
    wx.chooseMedia({
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['compressed'],
      success:function(res){
        console.log(res.tempFiles[0].tempFilePath)
        that.setData({
          filePath: res.tempFiles[0].tempFilePath
        })
      }
    })
  },
  /**
   * 表单提交
   */
  postForm: function (e) {
    console.log("--------->", e.detail.value);
    
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

  }
})