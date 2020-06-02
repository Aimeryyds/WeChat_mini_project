var e = getApp(), t = !1;

Page({
    data: {
        imgurls: [ {
            url: "../../images/evaluate_icon/over_",
            id: 1
        }, {
            url: "../../images/evaluate_icon/yes_",
            id: 2
        }, {
            url: "../../images/evaluate_icon/no_",
            id: 3
        } ],
        leve: 0,
        evaluat_label: {},
        evaluat_level: [],
        adviser_info: {},
        name: "",
        picture: "",
        first: "",
        result: [],
        taglist: [],
        textArea: "",
        show: !1
    },
    onLoad: function(e) {
        var t = this, a = wx.getStorageSync("quest");
        if (a && a.length) t.setData(JSON.parse(a)); else {
            var n = setInterval(function() {
                var e = wx.getStorageSync("quest");
                e && e.length && (t.setData(JSON.parse(e)), clearInterval(n));
            }, 300);
            setTimeout(function() {
                clearInterval(n);
            }, 1e4);
        }
    },
    evaluatFun: function(e) {
        for (var t = e.currentTarget.dataset.id, a = this.data.evaluat_level.filter(function(e) {
            return e.id == t;
        })[0], n = [ "", "evaluat_over", "evaluat_yes", "evaluat_no" ], i = this.data.evaluat_label[n[t]] || [], l = 0; l < this.data.evaluat_level.length; l++) this.data.evaluat_level[l].checked = !1;
        a.checked = !0, this.setData({
            first: a.id,
            evaluat_level: this.data.evaluat_level,
            result: [],
            taglist: i
        });
    },
    clickTypeOver: function(e) {
        var t = this, a = e.currentTarget.dataset.id, n = t.data.taglist.filter(function(e) {
            return e.id == a;
        })[0];
        t.data.result;
        n.checked = !n.checked;
        var i = function(e, t, a) {
            var n = e.indexOf(t);
            return a ? n < 0 && e.push(t) : n > -1 && e.splice(n, 1), e;
        }(t.data.result, n.id, n.checked);
        t.setData({
            taglist: t.data.taglist,
            result: i
        });
    },
    submitFun: function(a) {
        var n = this, i = n.data.result, l = n.data.textArea;
        if (0 === i.length) return wx.showToast({
            icon: "none",
            title: "请对顾问作出评价",
            mask: !0
        }), !1;
        if (l.length > 500) return wx.showToast({
            icon: "none",
            title: "最多输入500个字！",
            mask: !0
        }), !1;
        if (t) return !1;
        t = !0;
        var r = e.getCrmSecret("/api/ucenter/insert-evaluate/", {
            verify_token: n.data.verify_token,
            evaluat_level: n.data.first,
            evaluat_label: JSON.stringify(i),
            evaluat_content: l
        });
        wx.request({
            url: e.globalData.crmhaozuBase + "/api/ucenter/insert-evaluate/",
            data: r,
            success: function(e) {
                return t = !1, 0 !== e.data.errorno ? (wx.showToast({
                    icon: "none",
                    title: "评价提交失败",
                    mask: !0
                }), !1) : (wx.showToast({
                    icon: "none",
                    title: "评价提交成功",
                    mask: !0
                }), setTimeout(function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }, 1800), !1);
            },
            error: function() {
                wx.showToast({
                    icon: "none",
                    title: "评价提交失败！",
                    mask: !0
                }), t = !1;
            }
        });
    },
    clickTypeFun: function(e) {
        this.setData({
            show: !1
        });
    },
    toIndex: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    valFun: function(e) {
        this.setData({
            textArea: e.detail.value
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});