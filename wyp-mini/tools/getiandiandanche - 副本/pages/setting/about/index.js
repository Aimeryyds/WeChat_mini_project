var n = require("../../../utils/https.js").imgurl;

Page({
    data: {
        logo: n + "logo.png",
        edition: "0011",
        list: [ {
            epl: "官网",
            num: "www.getian.com"
        }, {
            epl: "用户论坛",
            num: "www.getian.com"
        }, {
            epl: "客服热线",
            num: "19939197222"
        }, {
            epl: "微信公众号",
            num: "葛天科技有限公司"
        }, {
            epl: "新浪微博",
            num: "@葛天出行"
        } ]
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: "19939197222"
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