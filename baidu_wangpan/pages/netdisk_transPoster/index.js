Page({
    data: {
        isValid: !1,
        surl: ""
    },
    onLoad: function(t) {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.validateOption(t), wx.hideShareMenu(), wx.log.transAssistant.poster.send();
    },
    validateOption: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = t.surl, e = t.title;
        if (!i || !e) return wx.wetoast({
            content: "参数错误",
            duration: 3e3
        }), void wx.navigateBack();
        this.setData({
            surl: i,
            title: e,
            isValid: !0
        });
    },
    hidePoster: function() {
        setTimeout(function() {
            wx.navigateBack();
        }, 1500);
    }
});