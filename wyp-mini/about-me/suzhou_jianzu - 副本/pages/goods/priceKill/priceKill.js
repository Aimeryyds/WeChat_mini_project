function t(t) {
    return t < 10 ? "0" + t : t;
}

var a, e = require("../../../utils/server");

require("../../../wxParse/wxParse.js"), wx.getStorageSync("utoken");

Page({
    data: {
        loading: !1
    },
    getstartList: function() {
        var t = this, a = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=seckill&utoken=" + a,
            showToast: !1,
            data: {},
            method: "GET",
            success: function(a) {
                if (a.data.result && a.data.result.title && wx.setNavigationBarTitle({
                    title: a.data.result.title
                }), a.data.result && "number" == typeof a.data.result.length && a.data.result.length > 0 || a.data.result && void 0 === a.data.result.length && a.data.result.goods) {
                    if (a.data.result.times) {
                        for (var e, s = 0; s < a.data.result.times.length; s++) if (0 == a.data.result.times[s].status) {
                            e = s;
                            break;
                        }
                        if (e || 0 == e) {
                            t.setData({
                                currTime: e,
                                times: a.data.result.times,
                                goods: a.data.result.goods,
                                time: a.data.result.time,
                                skillPriceshow: !0,
                                skillPriceList: t.data.skillPriceList,
                                sub: e,
                                buying: a.data.result.times[e].status,
                                nowShop: !0
                            });
                            t.data.times[t.data.currTime].starttime;
                            var i = 1e3 * t.data.time.nowtime, o = 1e3 * t.data.times[t.data.currTime].endtime - i;
                            t.setData({
                                loading: !1,
                                isSkill: !0,
                                total_micro_second: o
                            }), t.count_down(t);
                        }
                    }
                } else t.setData({
                    skillPriceshow: !1,
                    loading: !1
                }), wx.showModal({
                    title: "提示",
                    content: "目前还没有秒杀商品喔",
                    success: function(t) {
                        t.confirm ? wx.navigateBack({
                            delta: 1
                        }) : t.cancel && wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    onShow: function() {
        this.getstartList();
    },
    count_down: function(t) {
        if ((t = this).setData({
            clock: t.date_format(t.data.total_micro_second)
        }), t.data.total_micro_second <= 0) return t.data.clock.clock_hasTime = "", t.data.clock = t.data.clock.clock_hasTime, 
        t.setData({
            clock: t.data.clock,
            isSkill: !1
        }), void t.getstartList();
        a = setTimeout(function() {
            t.data.total_micro_second -= 1e3, t.count_down(t);
        }, 1e3);
    },
    date_format: function(a) {
        var e = Math.floor(a / 1e3), s = t(Math.floor(e / 3600)), i = t(Math.floor((e - 3600 * s) / 60)), o = t(e - 3600 * s - 60 * i);
        return {
            clock_hour: s,
            clock_min: i,
            clock_sec: o,
            micro_sec: t(Math.floor(a % 1e3 / 10)),
            clock_all: s + ":" + i + ":" + o,
            clock_hasTime: !0
        };
    },
    clickTitle: function(t) {
        clearTimeout(a);
        var s = this, i = t.currentTarget.dataset.index;
        i == s.data.currTime ? s.setData({
            nowShop: !0,
            sub: i
        }) : s.setData({
            nowShop: !1,
            sub: i
        });
        var o = s.data.times[i].id, d = s.data.times[i].taskid, r = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=seckill.get_goods&utoken" + r + "&timeid=" + o + "&taskid=" + d,
            data: {},
            method: "GET",
            success: function(t) {
                if (t.data.result && t.data.result.time) {
                    s.setData({
                        goods: t.data.result.goods,
                        time: t.data.result.time
                    });
                    var a = 1e3 * s.data.time.starttime, e = 1e3 * s.data.time.endtime, i = 1e3 * s.data.time.nowtime;
                    if (s.setData({
                        isSkill: !0,
                        buying: s.data.time.status
                    }), 1 == s.data.time.status) {
                        var o = a - i;
                        s.setData({
                            total_micro_second: o,
                            buying: s.data.time.status
                        }), s.count_down(s);
                    } else if (-1 == s.data.time.status) s.setData({
                        buying: s.data.time.status
                    }); else if (0 == s.data.time.status) {
                        var d = e - i;
                        s.setData({
                            total_micro_second: d,
                            buying: s.data.time.status
                        }), s.count_down(s);
                    }
                }
            }
        });
    },
    joinDetail: function(t) {
        var a = this, e = t.currentTarget.dataset.index, s = a.data.goods[e].goodsid;
        wx.navigateTo({
            url: "../../../../../detail/detail?objectId=" + s
        });
    },
    onUnload: function() {
        clearTimeout(a);
    },
    onHide: function() {
        clearTimeout(a);
    }
});