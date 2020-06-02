var t = getApp(), i = require("../../utils/hdweapp.js"), e = require("../../utils/paramConfig.js").ParamConfig, s = require("../../utils/request.js").RequestPost, a = null;

Page({
    data: {
        statusBar: {
            title: "最近访问",
            height: t.globalData.systemInfo.statusBarHeight
        },
        list: [],
        gotoUrl: !1
    },
    onLoad: function() {
        i.Page.init();
    },
    onShow: function() {
        t.getOpenId(), this.fetchVisitedList(), this.setData({
            gotoUrl: !1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    getuserinfo: function(i) {
        var e = i.target.dataset.url;
        this.data.gotoUrl || (this.setData({
            gotoUrl: !0
        }), t.collector(e, a));
    },
    submitForm: function(t) {
        a = t.detail.formId;
    },
    fetchVisitedList: function() {
        var t = wx.getStorageSync("visited") || [];
        this.setData({
            list: t
        });
        for (var i = [], e = 0, s = t.length; e < s; e++) i[e] = t[e].sid + "_" + t[e].sid;
        this.fetchLiveStatus(i);
    },
    fetchLiveStatus: function(t) {
        var i = this;
        if (t.length) {
            t = t.join(",");
            var a = e.WECHAT_YY_HOST + "/live/simple?sidSsid=" + t;
            s(a).then(function(t) {
                if (t && 0 == t.code) {
                    var e = t.data, s = i.data.list;
                    e.map(function(t, i) {
                        t.liveOn && (s[i].liveOn = 1, s[i].users = t.users, s[i].thumb = t.snapshot || t.img);
                    }), i.setData({
                        list: s
                    });
                }
            });
        }
    }
});