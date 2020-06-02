var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), i = (t(require("../../utils/logger")), 
t(require("../../utils/mlodash"))), a = require("../../store/index"), s = require("../../utils/common"), n = require("../../services/share"), r = require("../../services/report"), o = require("./service"), c = require("../../services/jump");

function u(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, a);
    }
    return i;
}

Page({
    data: {
        ready: !1,
        selectList: [],
        latestList: [],
        hasNextSelect: !0,
        hasNextLatest: !0,
        activeTab: "select",
        tpid: "",
        voteid: "",
        hasVote: !1,
        fromPage: r.FROM_PAGE.weibo_list_page,
        showPushGuide: !0,
        firstArticle: null
    },
    onLoad: function(t) {
        Object.assign(this, {
            selectCount: 0,
            latestCount: 0,
            notProxyExposureReport: !0,
            _uid: "uid_" + Math.random().toString(36).substr(2, 10)
        }), this.writeFakeWeibo = this.writeFakeWeibo.bind(this), a.topic.postWeiboCb[this._uid] = this.writeFakeWeibo, 
        this.updateJoinCount = this.updateJoinCount.bind(this), this.updateJoinCount(a.topic.joinCountMap[t.tpid]), 
        a.topic.watch("joinCountMap.".concat(t.tpid), this.updateJoinCount), this.init(), 
        (0, r.report)({
            opType: r.OP_TYPE.page_exposure,
            fromPage: this.data.fromPage,
            topicId: t.tpid
        });
    },
    onReady: function() {},
    onShow: function(t) {},
    onHide: function() {},
    onUnload: function() {
        a.topic.unWatch("joinCountMap.".concat(this.query.tpid), this.updateJoinCount), 
        delete a.topic.postWeiboCb[this._uid];
    },
    onReachBottom: function() {
        var t = this, i = this.data, a = i.activeTab, s = i.hasNextLatest, n = i.hasNextSelect;
        if ("select" === a) {
            if (n) {
                var r = this.selectIdList.splice(0, 20);
                (0, o.getSelectList)(this.query.tpid, r.join(",")).then(function(i) {
                    var a, s = t.selectCount;
                    t.setData((a = {}, (0, e.default)(a, "selectList[".concat(s, "]"), {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: i.selectList
                    }), (0, e.default)(a, "hasNextSelect", t.selectIdList.length > 0), a)), t.selectCount = s + 1;
                });
            }
        } else "latest" === a && s && (0, o.getLatestList)(this.query.tpid, this.timestamp).then(function(i) {
            var a, s = t.latestCount;
            t.setData((a = {}, (0, e.default)(a, "latestList[".concat(s, "]"), {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: i.latestList
            }), (0, e.default)(a, "hasNextLatest", 1 === i.next), a)), t.timestamp = i.latestList[i.latestList.length - 1].timestamp, 
            t.latestCount = s + 1;
        });
    },
    onShareAppMessage: function(t) {
        var e = {
            fromPage: this.data.fromPage
        };
        if ("menu" === t.from) return e.pageArea = r.PAGE_AREA.menu, (0, n.genShareMsg)({
            targetPage: 8,
            title: "大家正在讨论#".concat(this.data.topicName, "#"),
            atype: null,
            tpid: this.query.tpid
        }, e);
        var a = i.default.get(t, "target.dataset", {}), s = a.chlname, o = a.content, c = a.articleId, u = a.atype, l = a.imageList, d = a.pageArea;
        return e.pageArea = d || r.PAGE_AREA.cell, (0, n.genArticleShareMsg)({
            title: s + (o ? "的动态:" + o : "发布了一条新动态"),
            id: c,
            atype: u,
            imageUrl: l.length ? null : "http://mat1.gtimg.com/www/images/newsapp/wxapp/news/bg_huati.png"
        }, e);
    },
    init: function() {
        var t = this;
        (0, o.getTopicItem)(this.query.tpid).then(function(i) {
            t.setData(function(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var a = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? u(Object(a), !0).forEach(function(i) {
                        (0, e.default)(t, i, a[i]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return t;
            }({}, i, {
                ready: !0
            }));
        }), (0, o.getSelectList)(this.query.tpid).then(function(i) {
            var a;
            t.setGuideStatus();
            var s = t.selectCount;
            t.selectIdList = i.selectIdList.splice(i.selectList.length);
            var n = (a = {}, (0, e.default)(a, "selectList[".concat(s, "]"), {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: i.selectList
            }), (0, e.default)(a, "hasNextSelect", t.selectIdList.length > 0), (0, e.default)(a, "hasVote", i.hasVote), 
            (0, e.default)(a, "voteid", i.voteid), a);
            i.selectIdList.length && (n.firstArticle = i.selectIdList[0]), t.setData(n), t.selectCount = s + 1;
        }), (0, o.getLatestList)(this.query.tpid).then(function(i) {
            var a, s = t.latestCount;
            t.timestamp = i.latestList[i.latestList.length - 1].timestamp, t.setData((a = {}, 
            (0, e.default)(a, "latestList[".concat(s, "]"), {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: i.latestList
            }), (0, e.default)(a, "hasNextLatest", 1 === i.next), a)), t.latestCount = s + 1;
        });
    },
    navTap: function(t) {
        var e = t.currentTarget.id;
        this.setData({
            activeTab: e
        });
    },
    updateJoinCount: function(t) {
        this.setData({
            joinCountStr: (0, s.formatCount)(t)
        });
    },
    setGuideStatus: function() {
        wx.getStorageSync("weiboPushGuide") ? this.setData({
            showPushGuide: !1
        }) : wx.setStorageSync("weiboPushGuide", 1);
    },
    tapPostWeibo: function() {
        var t = this;
        (0, o.login)().then(function() {
            (0, c.navigateTo)(c.PAGE_PATH.TOPIC_EDITOR, {
                tpid: t.query.tpid,
                name: "#".concat(t.data.topicName, "#"),
                _uid: t._uid
            });
        }), (0, r.report)({
            opType: r.OP_TYPE.topic_post_click,
            fromPage: this.data.fromPage,
            topicId: this.query.tpid
        });
    },
    onDeleteItem: function(t) {
        var a = t && t.currentTarget && t.currentTarget.dataset || {}, s = t && t.detail || {};
        if (s.success) {
            var n = a.tab, r = a.page, o = a.index, c = i.default.get(this.data, "".concat(n, "[").concat(r, "].list[").concat(o, "].articleId"));
            if (s.articleId === c && (this.data[n][r].list.splice(o, 1), this.setData((0, e.default)({}, "".concat(n, "[").concat(r, "].list"), this.data[n][r].list))), 
            s.isFake) {
                var u = "selectList" === n ? "latestList" : "selectList", l = -1;
                i.default.forEach(this.data[u][0].list, function(t, e) {
                    if (t.articleId === s.articleId) return l = e, !1;
                }), -1 !== l && (this.data[u][0].list.splice(l, 1), this.setData((0, e.default)({}, "".concat(u, "[", 0, "].list"), this.data[u][0].list)));
            }
        }
    },
    writeFakeWeibo: function(t) {
        if (!i.default.isEmpty(t)) {
            var e = i.default.get(this.data.selectList, "[0].list", []), a = i.default.get(this.data.latestList, "[0].list", []);
            e.splice(1, 0, t), a.splice(0, 0, t), this.setData({
                "selectList[0].list": e,
                "latestList[0].list": a
            });
        }
    }
});