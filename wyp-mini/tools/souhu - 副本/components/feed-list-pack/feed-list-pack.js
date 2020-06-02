var t = function(t, a, e, i) {
    function n(t) {
        return t instanceof e ? t : new e(function(a) {
            a(t);
        });
    }
    return new (e || (e = Promise))(function(e, s) {
        function o(t) {
            try {
                d(i.next(t));
            } catch (t) {
                s(t);
            }
        }
        function r(t) {
            try {
                d(i.throw(t));
            } catch (t) {
                s(t);
            }
        }
        function d(t) {
            t.done ? e(t.value) : n(t.value).then(o, r);
        }
        d((i = i.apply(t, a || [])).next());
    });
}, a = function(t, a) {
    function e(t) {
        return function(a) {
            return i([ t, a ]);
        };
    }
    function i(e) {
        if (n) throw new TypeError("Generator is already executing.");
        for (;d; ) try {
            if (n = 1, s && (o = 2 & e[0] ? s.return : e[0] ? s.throw || ((o = s.return) && o.call(s), 
            0) : s.next) && !(o = o.call(s, e[1])).done) return o;
            switch (s = 0, o && (e = [ 2 & e[0], o.value ]), e[0]) {
              case 0:
              case 1:
                o = e;
                break;

              case 4:
                return d.label++, {
                    value: e[1],
                    done: !1
                };

              case 5:
                d.label++, s = e[1], e = [ 0 ];
                continue;

              case 7:
                e = d.ops.pop(), d.trys.pop();
                continue;

              default:
                if (o = d.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    d = 0;
                    continue;
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    d.label = e[1];
                    break;
                }
                if (6 === e[0] && d.label < o[1]) {
                    d.label = o[1], o = e;
                    break;
                }
                if (o && d.label < o[2]) {
                    d.label = o[2], d.ops.push(e);
                    break;
                }
                o[2] && d.ops.pop(), d.trys.pop();
                continue;
            }
            e = a.call(t, d);
        } catch (t) {
            e = [ 6, t ], s = 0;
        } finally {
            n = o = 0;
        }
        if (5 & e[0]) throw e[1];
        return {
            value: e[0] ? e[1] : void 0,
            done: !0
        };
    }
    var n, s, o, r, d = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return r = {
        next: e(0),
        throw: e(1),
        return: e(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this;
    }), r;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../api/fetch"), i = require("../../api/index"), n = require("../../utils/utils"), s = require("../../utils/spm/exposure"), o = require("../../utils/spm/index"), r = require("./../../utils/systemInfo"), d = require("../../config/index"), u = require("../../models/news"), p = require("../../api/ad/ad-core"), c = require("../../config/feed-config"), h = require("../../utils/event");

Component({
    properties: {
        isGetData: {
            type: Boolean,
            value: !0,
            observer: function(t, a) {
                t && t != a && this.getPage();
            }
        },
        index: {
            type: Number,
            value: 0
        },
        regionId: {
            type: Number,
            value: 1,
            observer: function(t, a) {
                var e = this;
                t && +t != +a && ("3" === this.data.type ? (h.emit("goScrollTop"), setTimeout(function() {
                    e.initStatus(), e.data.isGetData && e.getPage();
                }, 500)) : (this.initOptions(), this.data.isGetData && this.getPage()));
            }
        },
        type: {
            type: String,
            value: "1"
        },
        pvId: {
            type: String,
            value: ""
        },
        size: {
            type: Number,
            value: 16
        },
        spmB: {
            type: String,
            value: "0"
        },
        spmC: {
            type: String,
            value: "fd-d"
        },
        atricleInfo: {
            type: Object,
            value: {}
        },
        options: {
            type: Object,
            value: {}
        }
    },
    data: {
        feedData: [],
        isLoading: !1,
        isError: !1,
        isChecking: !1,
        isFinished: !1,
        page: 1,
        showFlowList: !1,
        dataOptions: {
            topNum: 0,
            hasAuthor: !1,
            maxPageNumber: 20,
            picWidth: 228,
            picHeight: 148,
            viewType: c.ViewType.auto
        }
    },
    attached: function() {},
    ready: function() {
        var t = this;
        h.on("feedLoadMore", this, function() {
            t.data.isLoading || "3" != t.data.type || t.setData({
                isLoading: !0
            }, function() {
                t.getPage();
            });
        });
    },
    methods: {
        initStatus: function() {
            this.setData({
                feedData: []
            }), this.data.page = 1, this.data.isFinished = !1, this.data.dataOptions = {
                topNum: 0,
                hasAuthor: !1,
                maxPageNumber: 20,
                picWidth: 228,
                picHeight: 148,
                viewType: c.ViewType.auto
            }, this.initOptions();
        },
        getPage: function() {
            var t = this;
            if (!this.data.isFinished) {
                var a = {
                    size: this.data.size,
                    page: this.data.page,
                    pvId: this.data.pvId,
                    suv: o.default.SUV,
                    requestId: o.default.SUV + new Date().getTime(),
                    picWidth: this.data.dataOptions.picWidth,
                    picHeight: this.data.dataOptions.picHeight
                };
                a.userId = r.systemData.userId, this.properties.atricleInfo && (a.mpId = this.properties.atricleInfo.id, 
                a.channel = this.properties.atricleInfo.channelId, a.secureScore = this.properties.atricleInfo.copyrightScore || 50), 
                e.fetch({
                    url: i.default.getFeed + this.data.regionId,
                    data: a,
                    parseArrayObject: u.NewsModel
                }).then(function(a) {
                    a.data && a.data.data && (t.data.page >= t.data.dataOptions.maxPageNumber && (t.data.isFinished = !0), 
                    t.data.dataOptions.topNum && t.data.dataOptions.topNum > 0 && 1 == t.data.page ? t.getTopNews(t.data.dataOptions.topNum).then(function(e) {
                        var i = e.concat(a.data.data);
                        t.formatList(i);
                    }) : t.formatList(a.data.data)), t.setData({
                        isLoading: !1
                    });
                }).catch(function(a) {
                    t.setData({
                        isLoading: !1
                    });
                });
            }
        },
        getTopNews: function(n) {
            return t(this, void 0, void 0, function() {
                var t;
                return a(this, function(a) {
                    return t = {
                        adapter: "adapter1",
                        size: n,
                        page: 1,
                        pvId: this.data.pvId,
                        client: 2,
                        suv: o.default.SUV,
                        requestId: o.default.SUV + new Date().getTime()
                    }, t.userId = r.systemData.userId, [ 2, e.fetch({
                        url: i.default.getFeed + 10417,
                        data: t,
                        parseArrayObject: u.NewsModel
                    }).then(function(t) {
                        return t.data && t.data.data && t.data.data.forEach(function(t) {
                            t.type = 1, t.isTop = !0, t.hasAuthor = !0;
                        }), t.data.data;
                    }) ];
                });
            });
        },
        scrollBottom: function() {
            var t = this;
            this.data.isLoading || this.setData({
                isLoading: !0
            }, function() {
                t.getPage();
            });
        },
        scrollIndex: n.throttle(function() {}, 300),
        expoCheck: function() {
            var t = this;
            s.exposureCheck(function(a) {
                t.triggerEvent("feedExposure", a);
            });
        },
        formatList: function(t) {
            var a = this, n = t.slice(), s = [];
            n.forEach(function(t) {
                t.id && (s.push(t.id), t.path = d.urlMap[t.type] && d.urlMap[t.type].url + "?articleId=" + t.id + "&authorId=" + t.authorId + "&scm=" + t.scm + "&pvid=" + a.data.pvId, 
                t.hasAuthor || (1 == a.data.dataOptions.hasAuthor ? t.hasAuthor = !0 : t.hasAuthor = !1));
            });
            var o = s.join(",");
            e.fetch({
                url: i.default.getArticlePv,
                data: {
                    articleIds: o
                }
            }).then(function(t) {
                var e = t.data.data;
                if (e) {
                    var i = n.map(function(t) {
                        var i = a.data.dataOptions.viewType == c.ViewType.auto ? c.AutoViewType(t.type) : a.data.dataOptions.viewType, n = Object.assign(t, {
                            viewType: i,
                            articlePv: e[t.id] || 0
                        });
                        return n.images.length && i == c.ViewType.flow && (n.images[0] = n.images[0].replace(/(com\/).*?(\/images)/g, "$1c_zoom,w_220,q_70$2")), 
                        n;
                    });
                    a.data.feedData = p.formatFeedAdData(a.data.feedData.concat(i), a.data.spmB, a.data.spmC), 
                    a.setData({
                        isFinished: a.data.isFinished,
                        isLoading: !1,
                        feedData: a.data.feedData,
                        page: ++a.data.page,
                        showFlowList: a.data.dataOptions.viewType == c.ViewType.flow
                    }, function() {
                        a.data.type;
                    });
                }
                a.setData({
                    isLoading: !1
                });
            }).catch(function(t) {
                a.data.isFinished = !0, a.setData({
                    isFinished: a.data.isFinished,
                    isLoading: !1
                });
            });
        },
        initOptions: function() {
            this.data.dataOptions = Object.assign({}, this.data.dataOptions, this.data.options), 
            this.setData({
                dataOptions: this.data.dataOptions
            });
        },
        handleLoadAd: function(t) {
            this.triggerEvent("adLoad", t.detail);
        },
        handleErrorAd: function(t) {
            this.triggerEvent("adError", t.detail);
        }
    }
});