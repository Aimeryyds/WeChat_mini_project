var t = require("../../netdisk_utils/common.js"), s = require("../../netdiisk_requestapi/transAssistant"), a = wx.ENV.staticPath;

Page({
    data: {
        surl: "",
        title: "",
        isValid: !1,
        showNav: !0
    },
    onLoad: function(t) {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.checkNav(), this.validateOption(t), wx.log.transAssistant.share.send();
    },
    validateOption: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = t.surl, a = t.title;
        s && a ? this.setData({
            surl: s,
            title: a,
            isValid: !0
        }) : wx.wetoast({
            content: "参数错误",
            duration: 3e3
        });
    },
    checkNav: function() {
        this.setData({
            showNav: !(0, t.canPageCustomNav)()
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/pages/netdisk_transAssistant/index?" + (0, s.getTransAssistantParam)(this.data),
            imageUrl: a + "/trans-assistant-share-na.png"
        };
    }
});