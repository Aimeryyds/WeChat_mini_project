var t = getApp(), a = require("../../utils/api");

Page({
    data: {
        formData: {},
        hasUserInfo: !1,
        payModes: [],
        payIndex: 0,
        showDrawer: !1
    },
    components: {
        login: {
            title: "订单详情",
            isUserCol: !1,
            isOrderLogin: !0
        }
    },
    onLoad: function(e) {
        var o = t.globalData.formItem, s = "订单详情";
        1 == o.t && (s = "咨询表单详情"), wx.setNavigationBarTitle({
            title: s
        });
        for (var n = t.globalData.globalColor, i = o.fsl, r = 0; r < i.length; r++) {
            var l = i[r], h = "[object String]" === Object.prototype.toString.call(l.input);
            if (1 == l.formType && l.input && h && (l.input = l.input.split("\n")), 2 == l.formType && l.input && h) {
                for (var f = [], p = l.input.split("\n"), u = 0; u < p.length; u++) f.push({
                    name: p[u],
                    selected: !1
                });
                l.input = f;
            }
        }
        this.setData({
            globalColor: n,
            formList: i
        });
        var c = e.bookId, d = t.globalData.bookInfoDetail ? t.globalData.bookInfoDetail : {}, g = d.id;
        this.data.bookId = c, g == c ? this.setData({
            bookInfo: d
        }) : a.getBookInfo(c, this);
        var D = t.globalData.payModes, m = [];
        D.openWXPay && m.push({
            type: 1,
            name: "微信支付"
        }), D.hideGoPay || m.push({
            type: 0,
            name: "到店支付"
        }), this.setData({
            payModes: m
        }), t.globalData.userInfo && this.setData({
            hasUserInfo: !0
        });
    },
    toastShow: function(t) {
        var a = this;
        a.setData({
            toastShow: !0,
            toastTxt: t
        }), setTimeout(function() {
            a.setData({
                toastShow: !1
            });
        }, 2e3);
    },
    formDataInput: function(t) {
        var a = t.target.id, e = t.detail.value, o = /^[0-9]*$/;
        "phone" == a && (o.test(e) || this.toastShow("请输入数字！")), this.data.formData[a] = e;
    },
    commitOrder: function(a) {
        for (var e = a.currentTarget.dataset.formList, o = a.detail.value, s = /^[0-9]*$/, n = 0; n < e.length; n++) {
            var i = e[n];
            if (i.m && i.s) {
                var r = i.k, l = !0;
                if ("[object String]" === Object.prototype.toString.call(o[r])) l = o[r].replace(/(^\s*)|(\s*$)/g, "");
                if (!o[r] || 0 == o[r].length || !l) return void wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: i.fn + "不能为空",
                    success: function(t) {}
                });
                if ("phone" == r && (11 != o[r].length || !s.test(o[r]))) return void wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "手机号错误！",
                    success: function(t) {}
                });
            }
            2 == i.formType && o[r = i.k] && (o[r] = o[r].join("\n"));
        }
        this.data.formData = o, t.globalData.userInfo && t.globalData.wxAppRequest.commitOrder(this);
    },
    checkedOption: function(t) {
        var a = this, e = t.currentTarget.dataset.key, o = t.currentTarget.dataset.index, s = t.currentTarget.dataset.option.selected;
        s = !s;
        for (var n = this.data.formList, i = 0; i < n.length; i++) if (e == n[i].k) {
            n[i].input[o].selected = s, a.setData({
                formList: n
            });
            break;
        }
    },
    switchPayMode: function() {
        1 !== this.data.payModes.length && this.setData({
            showDrawer: !0
        });
    },
    closeDrawer: function() {
        this.setData({
            showDrawer: !1
        });
    },
    payModeChange: function(t) {
        this.setData({
            payIndex: parseInt(t.detail.value)
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    }
});