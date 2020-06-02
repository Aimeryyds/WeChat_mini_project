var o = require("../../14E98D478A740DDF728FE5401BCCC841.js"), t = getApp();

Component({
    properties: {
        getPhoneShow: {
            value: !1,
            type: Boolean
        },
        fromstr: {
            type: String
        }
    },
    data: {},
    onLoad: function(o) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    methods: {
        onShowCon: function() {
            this.setData({
                getPhoneShow: !0
            });
        },
        onClose: function() {
            var o = this;
            o.setData({
                getPhoneShow: !1
            }), t.aldstat.sendEvent("所有用户手机号绑定点击否", o.data.fromstr + "手机号绑定点击否");
        },
        getPhoneNumber: function(n) {
            var e = this;
            o.getUserPhone(n, e.data.fromstr), o.uploadMobilePhoneCallBack = function(o) {
                1 === o.data.result && (wx.showToast({
                    title: "手机号绑定成功",
                    icon: "none",
                    duration: 2e3
                }), t.globalData.isBindMobile = !0, e.setData({
                    getPhoneShow: !1
                }));
            };
        }
    }
});