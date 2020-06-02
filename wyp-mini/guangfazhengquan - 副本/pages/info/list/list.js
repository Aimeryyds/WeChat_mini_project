function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
    return Array.from(t);
}

var a = t(require("../../../components/circus/toast/toast.js")), n = t(require("../../../components/http")), o = require("../../../components/bridge"), i = t(require("../../../config")), r = require("../../../components/utils"), s = getApp();

global.formatDate = r.formatDate, s.View({
    beacon: {
        name: "资讯",
        canShare: !0
    },
    data: {
        list: [],
        sortList: [],
        Alist: [],
        newList: [],
        loading: !1,
        noMore: !1
    },
    events: {
        onReachBottom: {
            name: "加载更多资讯",
            handler: function(t) {
                this.selectComponent("#listview").onLoadMore(1);
            }
        },
        onPullDownRefresh: {
            name: "下拉获取最新资讯",
            handler: function() {
                this.selectComponent("#listview").onLoadMore(-1);
            }
        },
        handleGoDetail: {
            name: "详情",
            handler: function() {}
        }
    },
    loadData: function(t) {
        var e = t.detail;
        1 == e ? this.fetchInfoList(e, -1) : this.data.noMore || this.fetchInfoList(e);
    },
    fetchInfoList: function(t) {
        var e = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (!this.data.loading) return this.setData({
            loading: !0
        }), (0, n.default)({
            url: i.default.SER_URL + "/api/wechat/info/1.0.0/info/timeline",
            data: {
                page: t,
                pageSize: 20,
                needStats: 1
            }
        }, this, !0).done(function(t) {
            var a = e.data.list || [], n = [], i = t.data.data || [];
            if (e.Alist = i, 0 === i.length && 1 === o) return e.setData({
                noMore: !0
            });
            -1 === o ? (n = i, e.setData({
                noMore: !1
            }), wx.stopPullDownRefresh()) : n = a.concat(i), n = n.map(function(t) {
                return t.messageType = "message", t;
            }), e.setData({
                list: n
            });
        }).fail(function() {
            a.default.show(e, "出错啦");
        }).always(function() {
            e.fetchInfoAudio();
        });
    },
    fetchInfoAudio: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, s = this;
        arguments[2], arguments[3];
        return (0, n.default)({
            url: i.default.SER_URL + "/api/wechat/info/1.0.0/info/speak",
            data: {
                page: t,
                pageSize: o
            }
        }, this, !0).done(function(t) {
            var a = ((t.data || []).data || []).map(function(t, e) {
                return t.messageType = "audio", t.timeLength = t.attachments && t.attachments[0].duration ? (0, 
                r.formatTime)((t.attachments[0].duration / 1e3).toFixed(0)) : 0, t;
            }), n = [].concat(e(s.Alist), e(a)), o = s.sort(n);
            o = o.map(function(t) {
                return t.fPublishTime = u(t.publishTime), t.author = t.authors ? t.authors[0] : [], 
                t;
            }), console.log(o), s.setData({
                newList: o
            });
        }).fail(function() {
            a.default.show(s, "出错啦");
        }).always(function() {
            return s.setData({
                loading: !1
            });
        });
    },
    sort: function(t) {
        return function t(e) {
            if (e.length <= 1) return e;
            for (var a = Math.floor(e.length / 2), n = e.splice(a, 1)[0], o = [], i = [], r = 0; r < e.length; r++) e[r].publishTime > n.publishTime ? o.push(e[r]) : i.push(e[r]);
            return t(o).concat([ n ], t(i));
        }(t);
    },
    onLoad: function(t) {
        (0, o.setNavigationBarTitle)({
            title: "资讯"
        }), this.fetchInfoList(1);
    }
});

var u = function(t) {
    t *= 1e3;
    var e = +new Date(), a = (0, r.formatDate)(new Date(), "yyyy-MM-dd"), n = Math.ceil((e - t) / 1e3 / 60), o = !1, i = a.split("-"), s = (0, 
    r.formatDate)(new Date(t), "yyyy-MM-dd").split("-"), u = {
        year: i[0] - 0,
        month: i[1] - 0,
        day: i[2] - 0
    }, f = {
        year: s[0] - 0,
        month: s[1] - 0,
        day: s[2] - 0
    };
    u.year - f.year > 0 || u.month - f.month > 0 ? o = !0 : u.day - f.day > 0 && (o = !0);
    return o ? (0, r.formatDate)(new Date(t), "yyyy-MM-dd") : n < 60 ? n + "分钟前" : n < 120 ? "1小时前" : (0, 
    r.formatDate)(new Date(t), "hh:mm");
};