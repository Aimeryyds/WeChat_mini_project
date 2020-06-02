var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = t(require("../../utils/logger")), s = t(require("../../utils/mlodash")), r = require("./service"), i = require("../../store/index"), o = require("../../services/jump");

function n(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e && (s = s.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, s);
    }
    return a;
}

function c(t) {
    for (var a = 1; a < arguments.length; a++) {
        var s = null != arguments[a] ? arguments[a] : {};
        a % 2 ? n(Object(s), !0).forEach(function(a) {
            (0, e.default)(t, a, s[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : n(Object(s)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
        });
    }
    return t;
}

Page({
    data: {
        placeholder: "",
        inputValue: "",
        history: [],
        hotList: [],
        suggestList: [],
        articleList: [],
        showClearIcon: !1,
        showSuggestList: !1,
        showArticle: !1,
        hasMore: !0,
        showSugLoading: !1,
        pageStatus: i.constant.pageStatus,
        status: i.constant.pageStatus.loading,
        bottomLoadingStatus: i.constant.pageStatus.loading
    },
    onLoad: function(t) {
        var a;
        Object.assign(this, (a = {
            searchSet: new Set(),
            queryid: "",
            query: "",
            page: 1,
            keywords: "",
            pullUpPending: !1
        }, (0, e.default)(a, "query", t), (0, e.default)(a, "searchText", ""), a)), this.init();
    },
    onShow: function() {
        this.getHistory();
    },
    onReady: function() {},
    onHide: function() {},
    init: function() {
        var t = this, e = {
            history: this.getHistory()
        }, o = this.query.keywords, n = o ? {} : {
            status: i.constant.pageStatus.ready
        };
        this.onInitText(o), i.search.hotList.length ? this.setData(c({}, e, {}, n, {
            hotList: i.search.hotList
        })) : (0, r.getHotWords)().then(function(a) {
            t.setData(c({}, e, {}, n, {
                hotList: a.hotList
            }));
        }).catch(function(t) {
            a.default.error("热点词加载错误：", t);
        }), this.getSuggestList = s.default.debounce(function(e) {
            var s = !!e, o = {};
            t.data.showSuggestList !== s && (o.showSuggestList = s), t.data.showArticle && (o.showArticle = !1), 
            o.status = s ? i.constant.pageStatus.loading : i.constant.pageStatus.ready, t.setData(o), 
            (0, r.searchSug)(e).then(function(e) {
                t.data.showSuggestList && t.setData({
                    suggestList: e,
                    status: i.constant.pageStatus.ready
                });
            }).catch(function(t) {
                a.default.error("sug词搜索加载错误：", t);
            });
        }, 300, {
            leading: !0
        });
    },
    onInput: function(t) {
        var e = (s.default.get(t, "detail", {}).value || "").trim(), a = {};
        this.data.status !== i.constant.pageStatus.ready && (a.status = i.constant.pageStatus.ready), 
        e ? this.data.showClearIcon || (a.showClearIcon = !0) : (this.data.showArticle && (a.showArticle = !1), 
        this.data.showClearIcon && (a.showClearIcon = !1)), this.setData(a);
    },
    tapClearWords: function() {
        this.setData({
            inputValue: "",
            placeholder: "",
            showSuggestList: !1,
            showArticle: !1,
            showClearIcon: !1,
            status: i.constant.pageStatus.ready
        });
    },
    tapDeleteHistory: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确认删除全部历史搜索？",
            success: function(e) {
                e.confirm && (t.setData({
                    history: []
                }), wx.setStorage({
                    key: "searchHistory",
                    data: []
                }));
            }
        });
    },
    tapCancel: function() {
        var t = this;
        1 === getCurrentPages().length ? wx.switchTab({
            url: o.PAGE_PATH.HOME
        }) : wx.navigateBack({
            delta: 1,
            complete: function() {
                return t.tapClearWords();
            }
        });
    },
    tapRefresh: function() {
        this.searchArticle(this.searchText);
    },
    onTapText: function(t) {
        this.searchText = s.default.get(t, "currentTarget.dataset.text", "");
        var e = {
            inputValue: this.searchText
        };
        this.data.showClearIcon || (e.showClearIcon = !0), this.setData(e), this.searchArticle(this.searchText);
    },
    onInitText: function(t) {
        this.searchText = t;
        var e = {
            inputValue: this.searchText
        };
        this.data.showClearIcon || (e.showClearIcon = !0), this.setData(e), this.searchArticle(this.searchText);
    },
    onConfirm: function(t) {
        var e = s.default.get(t, "detail.value");
        this.searchText = e || this.data.placeholder, this.searchArticle(this.searchText, !e);
    },
    searchArticle: function(t) {
        var e = this, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) {
            this.saveHistory(t), this.query = t;
            var o = {
                status: i.constant.pageStatus.loading,
                showSuggestList: !1
            };
            s && (o.inputValue = t, o.showClearIcon = !0), this.setData(o), wx.pageScrollTo({
                scrollTop: 0
            }), (0, r.getSearch)(t).then(function(t) {
                e.data.status !== i.constant.pageStatus.ready && (e.articleSet = t.articleSet, e.queryid = t.queryid, 
                e.page = 1, e.setData({
                    articleList: [ {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: t.list
                    } ],
                    hasMore: t.hasMore,
                    status: i.constant.pageStatus.ready,
                    showArticle: !0
                }, function() {
                    var t = e.createIntersectionObserver({
                        thresholds: [ .5 ]
                    });
                    t.relativeToViewport().observe(".loading-bar-bottom", function(a) {
                        a.intersectionRatio >= .5 && (t.disconnect(), e.reachBottom());
                    });
                }));
            }).catch(function(t) {
                e.data.status !== i.constant.pageStatus.ready && (a.default.error("搜索加载错误：", t), 
                e.setData({
                    status: i.constant.pageStatus.error
                }));
            });
        }
    },
    reachBottom: function() {
        var t = this;
        !this.pullUpPending && this.data.hasMore && (this.pullUpPending = !0, (0, r.searchMore)({
            page: this.page,
            queryid: this.queryid,
            query: this.query
        }, this.articleSet).then(function(a) {
            var s;
            t.pullUpPending = !1, t.page += 1;
            var r = (s = {}, (0, e.default)(s, "articleList[".concat(t.data.articleList.length, "]"), {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: a.list
            }), (0, e.default)(s, "hasMore", a.hasMore), s);
            t.data.bottomLoadingStatus !== i.constant.pageStatus.loading && (r.bottomLoadingStatus = i.constant.pageStatus.loading), 
            t.setData(r, function() {
                var e = t.createIntersectionObserver({
                    thresholds: [ .5 ]
                });
                e.relativeToViewport().observe(".loading-bar-bottom", function(a) {
                    a.intersectionRatio >= .5 && (e.disconnect(), t.reachBottom());
                });
            });
        }).catch(function(e) {
            t.pullUpPending = !1, t.setData({
                bottomLoadingStatus: i.constant.pageStatus.error
            }), a.default.error("上拉刷新出现错误：", e);
        }));
    },
    getHistory: function() {
        return (wx.getStorageSync("searchHistory") || []).slice(0, 5);
    },
    saveHistory: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = t;
        t.length > 10 && (e = t.substring(0, 8) + "...");
        var a = this.data.history, r = s.default.findIndex(a, function(e) {
            return e.raw === t;
        });
        -1 !== r && a.splice(r, 1), a.unshift({
            raw: t,
            display: e
        }), a = a.slice(0, 5), this.setData({
            history: a
        }), wx.setStorage({
            key: "searchHistory",
            data: a
        });
    }
});