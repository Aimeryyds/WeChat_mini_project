function t() {
    for (var t = new r.Graph(), a = 0; a < 9; a++) t.addVertex(a);
    t.addEdge(0, 1), t.addEdge(1, 2), t.addEdge(2, 5), t.addEdge(5, 8), t.addEdge(8, 7), 
    t.addEdge(7, 6), t.addEdge(6, 3), t.addEdge(3, 0), i.setData({
        graph: t
    });
}

function a() {
    i.data.btn_active = 0, i.data.graph.dfs(function(t) {
        if (i.setData({
            cur: t
        }), r.time <= 500) return !1;
        if (r.time > 500) {
            (0, r.resetSpeed)();
            var a = i.data.award, e = i.data.prizes[t];
            if (null == a && null == e) return (0, r.resetTime)(), i.data.btn_active = 1, d.alert("抽奖结果", "很可惜，没有中奖！"), 
            !0;
            if (null != a && null != e && a.prizeId == e.id) return i.data.btn_active = 1, (0, 
            r.resetTime)(), i.setData({
                award_open: 1
            }), !0;
        } else if (r.time > 2500) return (0, r.resetSpeed)(), (0, r.resetTime)(), i.data.btn_active = 1, 
        d.toast("请求超时，请检查网络连接"), !0;
    });
}

function e() {
    clearInterval(s), s = setInterval(function() {
        var t = i.data.top - 1;
        Math.abs(t) >= 30 * i.data.award_list.length && (t = 0), i.setData({
            top: t
        });
    }, 50);
}

var i, r = require("../../utils/graph"), n = getApp(), l = require("../../utils/functions"), d = require("../../utils/util"), s = null;

Page({
    data: {
        prize_attrs: [ "", "优惠券", "现金红包", "实物奖品" ],
        activity: {},
        prizes: [],
        award_list: [],
        leftShareNum: 0,
        leftDrawNum: 0,
        graph: null,
        top: 0,
        award: {},
        award_open: 0,
        share_flag: !1,
        share_pop: !1,
        btn_active: 1
    },
    onLoad: function(t) {
        i = this, d.loading();
    },
    onShow: function() {
        n.getUserInfo(function(t) {
            i.getLotteryActivity();
        });
    },
    onHide: function() {
        clearInterval(s);
    },
    onUnload: function() {
        clearInterval(s);
    },
    getLotteryActivity: function() {
        t(), l.getLotteryActivity(function(t) {
            if (null == t.activities) return wx.hideToast(), void d.alert("提示", t.msg, function() {
                wx.navigateBack();
            });
            wx.setNavigationBarTitle({
                title: t.activities.title
            });
            for (var a = t.activities.prizes ? t.activities.prizes : [], e = a.length, r = 0; r < 8 - e; r++) a.push(null);
            (a = d.shuffleArray(a)).splice(4, 0, 1);
            var n = t.activities;
            n.prizes = null, i.setData({
                activity: n,
                prizes: a,
                leftShareNum: t.leftShareNum,
                leftDrawNum: t.leftDrawNum
            }), i.getAwardList(), wx.hideToast();
        });
    },
    getAwardList: function() {
        l.getLotteryAwards(i.data.activity.id, {}, function(t) {
            i.setData({
                award_list: t.page.list
            }), t.page.list && t.page.list.length > 0 && e();
        });
    },
    draw: function() {
        if (0 != i.data.btn_active) return 0 == i.data.leftDrawNum ? 0 == i.data.leftShareNum ? void i.sharePop() : void d.toast("您的抽奖次数已用完，分享可多抽一次！") : (i.setData({
            award: null,
            leftDrawNum: i.data.leftDrawNum - 1
        }), l.lotteryDraw(i.data.activity.id, function(t) {
            null != t && null != t.lottery ? (t.lottery.createTime = t.lottery.createTime.split(" ")[0], 
            i.setData({
                award: t.lottery
            })) : i.setData({
                award: null
            }), i.getAwardList();
        }), void a());
    },
    sharePop: function() {
        this.setData({
            share_pop: !0
        });
    },
    closeSharePop: function() {
        this.setData({
            share_pop: !1
        });
    },
    closeAward: function() {
        this.setData({
            award_open: 0
        });
    },
    go2Collect: function() {
        wx.navigateTo({
            url: "../collectaward/collectaward?id=" + i.data.award.id,
            complete: function() {
                i.closeAward();
            }
        });
    },
    go2LotteryRule: function() {
        wx.navigateTo({
            url: "../lotteryrules/lotteryrules?drawRules=" + i.data.activity.drawRules
        });
    },
    onShareAppMessage: function() {
        return this.closeSharePop(), i.data.leftShareNum > 0 && (i.data.share_flag = !0), 
        {
            title: "幸运大抽奖",
            path: "/pages/lottery/lottery",
            success: function(t) {
                l.actShare(i.data.activity.id, function(t) {
                    t.isAdd && !i.data.share_flag ? i.setData({
                        share_flag: !0,
                        leftDrawNum: i.data.leftDrawNum + 1
                    }) : d.toast("今日已获得分享抽奖次数，明日再来吧！");
                });
            },
            fail: function(t) {
                d.toast("取消分享");
            }
        };
    }
});