function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t(t, r) {
    var c = this;
    c.context = t, c.panelType = r;
    var s = function(t) {
        var n = this, r = t.currentTarget.dataset.panel, s = o(i, r);
        r === c.panelType ? (wx.startPullDownRefresh(), function(e) {
            setTimeout(function() {
                return wx.pageScrollTo({
                    scrollTop: 0
                });
            }, e);
        }(500)) : wx.redirectTo({
            url: s.data.target
        });
        var p = "tabData.tabs[" + s.index + "].showRefresh";
        n.setData(e({}, p, !1)), a.panelTab("新闻");
    };
    !function() {
        var e = new Array();
        i.forEach(function(t, a) {
            e[a] = {}, Object.assign(e[a], i[a]), t.panel === c.panelType && (e[a].active = !0), 
            e[a].showRefresh = !1;
        }), c.context.setData({
            tabData: {
                tabs: e
            }
        }), c.context.onTabClick = s, c.context.setData({
            "tabData.isIphoneX": n.isIphoneX()
        });
    }();
}

getApp();

var a = require("../../utils/ald-stat"), n = require("../../utils/tool"), i = [ {
    name: "新闻",
    active: !1,
    panel: "news",
    pic: "../../images/icon-tab-n.png",
    picActive: "../../images/icon-tab-n-a.png",
    target: "/pages/home/home",
    iconRefresh: "../../images/icon-tab-refresh.png"
}, {
    name: "热榜",
    active: !1,
    panel: "hot",
    pic: "../../images/icon-tab-h.png",
    picActive: "../../images/icon-tab-h-a.png",
    target: "/pages/hot-topic/hot-topic",
    iconRefresh: "../../images/icon-tab-refresh.png"
}, {
    name: "视频",
    active: !1,
    panel: "video",
    pic: "../../images/icon-tab-v.png",
    picActive: "../../images/icon-tab-v-a.png",
    target: "/pages/video-list/video-list",
    iconRefresh: "../../images/icon-tab-refresh.png"
} ], o = function(e, t) {
    var a = {};
    return e.forEach(function(e, n) {
        if (e.panel === t) return a.data = e, a.index = n, !1;
    }), a;
};

t.prototype.onPageScroll = function(t) {
    var a = this, n = o(i, a.panelType), r = a.context.data.tabData.tabs[n.index].showRefresh, c = "tabData.tabs[" + n.index + "].showRefresh";
    t >= 2160 && !r ? a.context.setData(e({}, c, !0)) : t < 2160 && r && a.context.setData(e({}, c, !1));
}, module.exports = t;