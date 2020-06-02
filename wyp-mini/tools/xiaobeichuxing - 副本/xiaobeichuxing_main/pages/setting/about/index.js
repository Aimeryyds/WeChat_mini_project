var n = require("../../../utils/https.js").imgurl;

Page({
    data: {
        logo: n + "logo.png",
        edition: "0011",
        list: [ {
            epl: "官网",
            num: "www.xiaobeibike.com"
        }, {
            epl: "用户论坛",
            num: "www.xiaobeibike.com"
        }, {
            epl: "客服热线",
            num: "4000793111"
        }, {
            epl: "微信公众号",
            num: "小呗出行"
        }, {
            epl: "新浪微博",
            num: "@小呗出行"
        } ]
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: "4000793111"
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});