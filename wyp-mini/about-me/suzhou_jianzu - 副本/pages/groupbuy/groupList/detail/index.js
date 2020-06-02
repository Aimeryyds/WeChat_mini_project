var t = require("../../../../utils/server"), e = (wx.getStorageSync("utoken"), void 0), a = void 0, r = [], n = require("../../../../wxParse/wxParse.js");

Page({
    data: {
        arr: [ "拼团详情", "商品详情" ],
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        select: 0,
        loading: !0
    },
    select: function(t) {
        this.setData({
            select: t.currentTarget.dataset.index
        });
    },
    onLoad: function(t) {
        var e = this;
        console.log(t), e.setData({
            id: t.id,
            teamid: t.teamid,
            key: t.key
        }), e.loadingData();
    },
    loadingData: function() {
        var d = this, o = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.groups.team.detail",
            showToast: !1,
            data: {
                utoken: o,
                teamid: d.data.teamid
            },
            method: "GET",
            success: function(t) {
                if (console.log(t), console.log(0x18abef7846071c0), d.setData({
                    data: t.data.result,
                    loading: !1
                }), t.data.result && t.data.result.goods && t.data.result.goods.content) {
                    var o = t.data.result.goods.content;
                    n.wxParse("contain", "html", o, d, 5);
                }
                for (var i in t.data.result.orders) {
                    var s = new Date(1e3 * t.data.result.orders[i].paytime), u = s.getFullYear(), l = s.getMonth() + 1, g = s.getDate(), c = s.getHours(), m = s.getMinutes(), p = s.getSeconds(), i = u + "-" + d.add0(l) + "-" + d.add0(g) + " " + d.add0(c) + ":" + d.add0(m) + ":" + d.add0(p);
                    r.push(i);
                }
                d.setData({
                    time_arr: r
                }), a = Date.parse(new Date(t.data.result.tuan_first_order.endtime)) - Date.parse(new Date()) / 1e3, 
                e = setInterval(function() {
                    if (a < "0") d.setData({
                        time: "活动已结束"
                    }), clearInterval(e); else {
                        a -= 1;
                        var t = d.time(a);
                        d.setData({
                            time: t
                        });
                    }
                }, 1e3);
            }
        });
    },
    add0: function(t) {
        return t < 10 ? "0" + t : t;
    },
    time: function(t) {
        var e = parseInt(t / 60 / 60 / 24, 10), a = parseInt(t / 60 / 60 % 24, 10), r = parseInt(t / 60 % 60, 10), n = parseInt(t % 60, 10);
        return e.toString() + "天" + a.toString() + "时" + r.toString() + "分" + n.toString() + "秒";
    },
    onUnload: function(t) {
        clearInterval(e);
    },
    toopen: function() {
        var t = this;
        wx.reLaunch({
            url: "../../confirmOrder/index?teamid=" + t.data.teamid + "&id=" + t.data.data.goods.id + "&type=groups"
        });
    },
    onShareAppMessage: function() {
        var t = this, e = "/pages/groupbuy/groupList/detail/index?teamid=" + t.data.teamid + "&id=" + t.data.id;
        return {
            title: t.data.data.goods.title,
            path: e
        };
    },
    toIndex: function() {
        wx.reLaunch({
            url: "../../../index/index"
        });
    }
});