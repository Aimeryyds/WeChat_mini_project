var e = require("../../utils/server"), s = wx.getStorageSync("utoken");

Page({
    data: {
        array: [],
        index: 0,
        company: "",
        expressArray: [],
        expressresult: !1,
        resultList: {},
        searchSubmit: !1
    },
    onLoad: function(t) {
        var a = this;
        e.sendRequest({
            url: "?r=wxapp.express.getExpressList",
            data: {
                utoken: s
            },
            method: "GET",
            success: function(e) {
                for (var s = e.data.result, t = [], r = [], n = 0; n < s.length; n++) t.push(s[n].name);
                for (n = 0; n < s.length; n++) r.push(s[n].express);
                a.setData({
                    array: t,
                    company: r[0],
                    expressArray: r,
                    searchSubmit: !1
                });
            }
        });
    },
    getOrderNum: function(e) {
        var s = e.detail.value;
        this.setData({
            ordernum: s
        });
    },
    bindPickerChange: function(e) {
        var s = this;
        this.setData({
            index: e.detail.value,
            company: s.data.expressArray[e.detail.value]
        });
    },
    search: function(s) {
        var t = this, a = t.data.ordernum, r = t.data.company, n = wx.getStorageSync("utoken");
        a ? e.sendRequest({
            url: "?r=wxapp.express",
            data: {
                utoken: n,
                express: r,
                expresssn: a
            },
            method: "POST",
            success: function(e) {
                var s = e.data.result;
                "" != s ? t.setData({
                    resultList: s,
                    expressresult: !0,
                    searchSubmit: !0
                }) : t.setData({
                    expressresult: !1,
                    searchSubmit: !0
                }), console.log(s);
            }
        }) : e.showModal({
            content: "请输入订单号！"
        });
    }
});