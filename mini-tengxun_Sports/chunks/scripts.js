var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "chunks/scripts" ], {
    "./src/apis/WxMiniProgram.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            prefix: "WxMiniProgram",
            host: n.BASE_SERVER,
            afterFn: o.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "checkcode",
                params: {
                    code: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/cntv.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            host: o.BASE_SERVER,
            prefix: "cntv",
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "getChannelIdByMid",
                params: {
                    mid: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/comment.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            host: o.APP_SERVER,
            prefix: "comment",
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "",
                name: "comment",
                params: {
                    targetId: {
                        isRequired: !0
                    },
                    pageflag: 0,
                    indexscore: 0
                }
            }, {
                path: "getRep",
                params: {
                    targetId: {
                        isRequired: !0
                    },
                    commentId: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/community.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            host: n.BASE_SERVER,
            prefix: "community",
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "recmdDiscussList"
            }, {
                path: "createTopic",
                params: {
                    platform: "miniprogram",
                    mid: {
                        isRequired: !0
                    },
                    content: {
                        isRequired: !0
                    }
                },
                method: "post",
                beforeFn: o.getformHeader
            }, {
                path: "supportTopic",
                params: {
                    support: 1,
                    tid: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "supportReply",
                params: {
                    support: 1,
                    tid: {
                        isRequired: !0
                    },
                    rid: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "contentPool"
            }, {
                path: "contentPool",
                name: "contentPoolHeader",
                beforeFn: o.getHeader
            }, {
                path: "topicDetail",
                params: {
                    tid: {
                        isRequired: !0
                    }
                }
            }, {
                path: "topicDetail",
                name: "topicDetailHeader",
                params: {
                    tid: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "replyListByFloor",
                params: {
                    tid: {
                        isRequired: !0
                    }
                }
            }, {
                path: "replyListByFloor",
                name: "replyListByFloorHeader",
                params: {
                    tid: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "replySubList",
                params: {
                    tid: {
                        isRequired: !0
                    },
                    rid: {
                        isRequired: !0
                    }
                }
            }, {
                path: "replySubList",
                name: "replySubListHeader",
                params: {
                    tid: {
                        isRequired: !0
                    },
                    rid: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "discussTopicList",
                params: {
                    discussId: {
                        isRequired: !0
                    }
                }
            }, {
                path: "discussTopicList",
                name: "discussTopicListHeader",
                params: {
                    discussId: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "cityTopicRank",
                params: {
                    cityId: {
                        isRequired: !0
                    }
                }
            }, {
                path: "cityTopicRank",
                name: "cityTopicRankHeader",
                params: {
                    cityId: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "cityPool",
                params: {
                    city: {
                        isRequired: !0
                    }
                }
            }, {
                path: "cityPool",
                name: "cityPoolHeader",
                params: {
                    city: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "createReply",
                params: {
                    platform: "miniprogram",
                    tid: {
                        isRequired: !0
                    },
                    content: {
                        isRequired: !0
                    }
                },
                method: "post",
                beforeFn: o.getformHeader
            }, {
                path: "userTopics",
                params: {},
                beforeFn: o.getHeader
            }, {
                host: n.SERVER_FIBA_API,
                prefix: "server",
                path: "cityList"
            }, {
                host: n.SERVER_FIBA_API,
                prefix: "server/statistic",
                path: "city"
            }, {
                host: n.SERVER_FIBA_API,
                prefix: "server/banner",
                path: "list"
            }, {
                host: n.SERVER_FIBA_API,
                prefix: "server/upload",
                path: "record",
                name: "recordHeader",
                method: "post",
                beforeFn: o.getformHeader
            }, {
                host: n.SERVER_FIBA_API,
                prefix: "server/upload",
                path: "record",
                method: "post",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            } ]
        };
    },
    "./src/apis/feed.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            host: o.APP_SERVER,
            prefix: "feed",
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "index",
                params: {
                    columnId: 4,
                    appvid: "5.9.2"
                }
            }, {
                path: "list",
                params: {
                    columnId: 4,
                    ids: {
                        isRequired: !0
                    },
                    appvid: "5.9.2"
                },
                isShowLoading: !1
            } ]
        };
    },
    "./src/apis/index.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new a.default(function(e, r) {
                    function n(o, i) {
                        try {
                            var s = t[o](i), c = s.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!s.done) return a.default.resolve(c).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        e(c);
                    }
                    return n("next");
                });
            };
        }
        var i = n(r("./node_modules/babel-runtime/regenerator/index.js")), a = n(r("./node_modules/babel-runtime/core-js/promise.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.redeemApi = t.communityApi = t.wxMiniProgramApi = t.playerUnionApi = t.matchUnionApi = t.textLiveApi = t.commentApi = t.playerApi = t.videoApi = t.matchApi = t.teamApi = t.userApi = t.newsApi = t.feedApi = t.cntvApi = t.vipApi = t.kbsApi = void 0;
        var s = new (n(r("./node_modules/tua-api/dist/TuaApi.esm.js")).default)();
        s.use(function() {
            var e = o(i.default.mark(function e(t, r) {
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r();

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, void 0);
            }));
            return function(t, r) {
                return e.apply(this, arguments);
            };
        }());
        t.kbsApi = s.getApi(r("./src/apis/kbs.js").default), t.vipApi = s.getApi(r("./src/apis/vip.js").default), 
        t.cntvApi = s.getApi(r("./src/apis/cntv.js").default), t.feedApi = s.getApi(r("./src/apis/feed.js").default), 
        t.newsApi = s.getApi(r("./src/apis/news.js").default), t.userApi = s.getApi(r("./src/apis/user.js").default), 
        t.teamApi = s.getApi(r("./src/apis/team.js").default), t.matchApi = s.getApi(r("./src/apis/match.js").default), 
        t.videoApi = s.getApi(r("./src/apis/video.js").default), t.playerApi = s.getApi(r("./src/apis/player.js").default), 
        t.commentApi = s.getApi(r("./src/apis/comment.js").default), t.textLiveApi = s.getApi(r("./src/apis/textLive.js").default), 
        t.matchUnionApi = s.getApi(r("./src/apis/matchUnion.js").default), t.playerUnionApi = s.getApi(r("./src/apis/playerUnion.js").default), 
        t.wxMiniProgramApi = s.getApi(r("./src/apis/WxMiniProgram.js").default), t.communityApi = s.getApi(r("./src/apis/community.js").default), 
        t.redeemApi = s.getApi(r("./src/apis/redeem.js").default);
    },
    "./src/apis/kbs.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            host: n.BASE_SERVER,
            prefix: "kbs",
            afterFn: o.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "matchDetail",
                params: {
                    mid: {
                        isRequired: !0
                    }
                }
            }, {
                path: "attend",
                params: {
                    mid: {
                        isRequired: !0
                    },
                    type: {
                        isRequired: !0
                    },
                    formid: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            }, {
                path: "attendList",
                params: {},
                beforeFn: o.getHeader
            }, {
                path: "attendMids",
                params: {},
                beforeFn: o.getHeader
            } ]
        };
    },
    "./src/apis/match.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            host: o.APP_SERVER,
            prefix: "match",
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "calendar",
                params: {
                    month: {
                        isRequired: !0
                    },
                    columnId: 0
                }
            }, {
                path: "allList",
                params: {
                    date: {
                        isRequired: !0
                    }
                }
            }, {
                path: "hotMatchList",
                params: {
                    date: {
                        isRequired: !0
                    }
                }
            }, {
                path: "columnTabs",
                params: {
                    columnId: {
                        isRequired: !0
                    }
                }
            }, {
                path: "list",
                params: {
                    date: "",
                    flag: 0,
                    columnId: {
                        isRequired: !0
                    }
                }
            }, {
                path: "vslist",
                params: {
                    teamIdsParam: ""
                }
            } ]
        };
    },
    "./src/apis/matchUnion.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            prefix: "matchUnion",
            host: o.BASE_SERVER,
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "cateColumns",
                params: {}
            } ]
        };
    },
    "./src/apis/news.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            host: o.APP_SERVER,
            prefix: "news",
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "detail",
                params: {
                    id: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/player.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            prefix: "player",
            host: o.BASE_SERVER,
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "rank",
                params: {
                    num: 25,
                    selects: {
                        isRequired: !0
                    },
                    competitionId: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/playerUnion.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            host: o.BASE_SERVER,
            prefix: "playerUnion",
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "baseInfo",
                params: {
                    playerId: {
                        isRequired: !0
                    },
                    competitionId: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/redeem.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            host: n.BASE_SERVER,
            prefix: "html",
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "wxVipCardInfo",
                params: {
                    encrypt_code: {
                        isRequired: !0
                    },
                    card_id: {
                        isRequired: !0
                    }
                }
            }, {
                path: "wxVipCardUse",
                params: {
                    encrypt_code: {
                        isRequired: !0
                    },
                    card_id: {
                        isRequired: !0
                    }
                },
                beforeFn: o.getHeader
            } ]
        };
    },
    "./src/apis/team.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            prefix: "team",
            host: o.BASE_SERVER,
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "baseInfo",
                params: {
                    from: "h5",
                    teamId: {
                        isRequired: !0
                    },
                    competitionId: 4
                }
            }, {
                path: "matchList",
                params: {}
            }, {
                path: "rank",
                params: {
                    competitionId: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/textLive.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            host: n.BASE_SERVER,
            prefix: "textLive",
            afterFn: o.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "index",
                params: {
                    competitionId: {
                        isRequired: !0
                    },
                    matchId: {
                        isRequired: !0
                    }
                },
                isShowLoading: !1
            }, {
                path: "detail",
                params: {
                    competitionId: {
                        isRequired: !0
                    },
                    matchId: {
                        isRequired: !0
                    },
                    ids: {
                        isRequired: !0
                    }
                },
                isShowLoading: !1
            } ]
        };
    },
    "./src/apis/user.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            prefix: "user",
            host: n.BASE_SERVER,
            afterFn: o.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "getQQBasicInfo",
                params: {},
                beforeFn: o.getHeader
            } ]
        };
    },
    "./src/apis/video.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/utils/index.js"), o = r("./src/scripts/constants/index.js");
        t.default = {
            prefix: "video",
            host: o.APP_SERVER,
            afterFn: n.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "detail",
                params: {
                    cid: {
                        isRequired: !0
                    },
                    vid: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/apis/vip.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("./src/scripts/constants/index.js"), o = r("./src/scripts/utils/index.js");
        t.default = {
            host: n.BASE_SERVER,
            prefix: "vip",
            afterFn: o.showError,
            commonParams: {
                from: "miniprogram"
            },
            showLoadingFn: wx.showNavigationBarLoading,
            hideLoadingFn: wx.hideNavigationBarLoading,
            pathList: [ {
                path: "webPlayer",
                params: {
                    mid: {
                        isRequired: !0
                    }
                }
            } ]
        };
    },
    "./src/scripts/WechatAppPlayer/index.js": function(e, t, r) {
        var n = r("./src/scripts/WechatAppPlayer/src/video.js");
        e.exports = n;
    },
    "./src/scripts/WechatAppPlayer/lib-inject.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = n(r("./src/scripts/WechatAppPlayer/src/lib/es6-promise.js")), i = n(r("./src/scripts/WechatAppPlayer/src/lib/request.js"));
        e.exports = {
            Promise: o.default,
            request: i.default.get
        };
    },
    "./src/scripts/WechatAppPlayer/src/classes/Content.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var a = o(n("./node_modules/babel-runtime/core-js/object/define-properties.js")), s = o(n("./node_modules/babel-runtime/core-js/object/define-property.js")), c = o(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), u = o(n("./node_modules/babel-runtime/core-js/symbol.js")), l = "function" == typeof u.default && "symbol" === e(c.default) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, d = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    (0, s.default)(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), p = n("./src/scripts/WechatAppPlayer/src/lib/message.js"), f = 1;
        t.exports = function() {
            function e(t) {
                var r = this;
                i(this, e), this.mockUpdate = 0, this._urlIndex = 0, (0, a.default)(this, {
                    _url: {
                        value: t.url instanceof Array ? t.url : [ t.url ]
                    },
                    _id: {
                        value: f++
                    },
                    _duration: {
                        value: t.duration
                    },
                    _filesize: {
                        value: t.filesize
                    },
                    _charged: {
                        value: t.charged
                    },
                    _preview: {
                        value: t.preview
                    },
                    isad: {
                        value: t.isad
                    }
                }), new p().assign(this);
                var n = null, o = null;
                this.on("play", function() {
                    n = setTimeout(function() {
                        r.emit("timeout", 1e4);
                    }, 1e4), o = setTimeout(function() {
                        r.emit("timeout", 2e4);
                    }, 2e4);
                }, !0), this.on("start", function() {
                    clearTimeout(n), clearTimeout(o);
                }, !0);
            }
            return d(e, [ {
                key: "url",
                get: function() {
                    return this._url[this._urlIndex];
                }
            }, {
                key: "id",
                get: function() {
                    return this._id;
                }
            }, {
                key: "duration",
                get: function() {
                    return this._duration;
                }
            }, {
                key: "filesize",
                get: function() {
                    return this._filesize;
                }
            }, {
                key: "preview",
                get: function() {
                    return this._preview;
                }
            }, {
                key: "charged",
                get: function() {
                    return this._charged;
                }
            } ]), d(e, [ {
                key: "onContentEnd",
                value: function() {
                    this.emit("end");
                }
            }, {
                key: "onContentPlay",
                value: function() {
                    this.emittedPlay = !0, this.emit("play");
                }
            }, {
                key: "onContentPause",
                value: function() {}
            }, {
                key: "onContentTimeupdate",
                value: function(e) {
                    this.emittedPlay && (e && e.target && (e = e.detail.currentTime), !this.emittedStart && ((void 0 === e ? "undefined" : l(e)) == l(void 0) ? this.mockUpdate++ > 5 : e > 0) && (this.emit("start"), 
                    this.emittedStart = !0), this.emit.apply(this, [ "timeupdate", e ]));
                }
            }, {
                key: "onContentError",
                value: function() {
                    if (this._url.length > this._urlIndex + 1) return this._urlIndex++, void this.emit("change", this.url);
                    this.emit.apply(this, [ "error" ].concat([].slice.call(arguments, 0)));
                }
            }, {
                key: "onContentSkip",
                value: function() {
                    this.isad && this.emit("skip");
                }
            } ]), e;
        }();
    },
    "./src/scripts/WechatAppPlayer/src/classes/Controller.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e) {
            var t = {};
            return (e instanceof Array ? e : [].slice.call(arguments, 0)).forEach(function(e) {
                var r = e.initialize;
                (0, s.default)(t, e.name, {
                    get: function() {
                        return r;
                    },
                    set: function(t) {
                        var n = r;
                        r = t, e.onChange && e.onChange(t, n);
                    }
                });
            }), t;
        }
        var a = n(r("./node_modules/babel-runtime/core-js/object/define-properties.js")), s = n(r("./node_modules/babel-runtime/core-js/object/define-property.js")), c = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    (0, s.default)(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), u = r("./src/scripts/WechatAppPlayer/src/lib/message.js"), l = r("./src/scripts/WechatAppPlayer/lib-inject.js").Promise;
        e.exports = function() {
            function e() {
                for (var t = this, r = arguments.length, n = Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                o(this, e), this.started = l.defer(), new u().assign(this);
                var c = this.model = new i([ {
                    name: "state",
                    onChange: function(e, r) {
                        t.emit("statechange", e, r);
                    },
                    initialize: "loading"
                }, {
                    name: "currentContent",
                    initialize: null
                } ]);
                (0, a.default)(this, {
                    currentContent: {
                        get: function() {
                            return c.currentContent;
                        }
                    },
                    state: {
                        get: function() {
                            return c.state;
                        }
                    }
                }), this.flow = this.createFlow.apply(this, n), this.flow.catch(function(e) {
                    t.emit("error", e);
                }), [ "End", "Play", "Pause", "Timeupdate", "Error", "Skip" ].forEach(function(e) {
                    t["onContent" + e] = function() {
                        for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        t.emit.apply(t, [ "content" + e.toLowerCase() ].concat(n));
                    }, t["on" + e] = function() {
                        console.warn("不建议再使用video.on" + e + "，请使用onContent" + e), this["onContent" + e].apply(this, arguments);
                    };
                });
            }
            return c(e, [ {
                key: "createFlow",
                value: function() {}
            }, {
                key: "start",
                value: function() {
                    return this.started.resolve(), this;
                }
            }, {
                key: "stop",
                value: function() {
                    return this.started.reject(), this.off(), this;
                }
            } ]), e;
        }();
    },
    "./src/scripts/WechatAppPlayer/src/controller-live/flow-getinfo/index.js": function(e, t, r) {
        var n = r("./src/scripts/WechatAppPlayer/src/util/platform-config.js").APP_PLATFORM, o = r("./src/scripts/WechatAppPlayer/lib-inject.js").request, i = r("./src/scripts/WechatAppPlayer/src/module/cache.js"), a = r("./src/scripts/WechatAppPlayer/src/lib/algorithm/qvsec.js"), s = r("./src/scripts/WechatAppPlayer/src/lib/algorithm/fillTimeStamp.js"), c = i.get("tvp_guid");
        c || (c = Math.random().toString(16).substring(2), i.set("tvp_guid", c)), e.exports = function(e, t, r, i) {
            var u = s(), l = a["v4138" == r ? "$xxzb" : "$xxzbf"](n[r], e, 1, 1, u), d = "";
            return l && (d = "encver=" + ("v4138" == r ? "201" : "301") + "&_qv_rmtv2=" + l), 
            o("https://info.zb.video.qq.com/?host=qq.com&cmd=2&qq=0&guid=" + c + "&appVer=7&stream=2&ip=&system=1&sdtfrom=" + n[r] + "&livepid=" + t + "&cnlid=" + e + "&_rnd=" + u + "&" + d, {
                needlogin: !0
            });
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-live/index.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(t, r) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !r || "object" !== (void 0 === r ? "undefined" : e(r)) && "function" != typeof r ? t : r;
        }
        function s(t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === r ? "undefined" : e(r)));
            t.prototype = (0, u.default)(r && r.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (c.default ? (0, c.default)(t, r) : t.__proto__ = r);
        }
        var c = o(n("./node_modules/babel-runtime/core-js/object/set-prototype-of.js")), u = o(n("./node_modules/babel-runtime/core-js/object/create.js")), l = o(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")), d = o(n("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js")), p = o(n("./node_modules/babel-runtime/core-js/object/define-property.js")), f = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    (0, p.default)(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), h = function e(t, r, n) {
            null === t && (t = Function.prototype);
            var o = (0, d.default)(t, r);
            if (void 0 === o) {
                var i = (0, l.default)(t);
                return null === i ? void 0 : e(i, r, n);
            }
            if ("value" in o) return o.value;
            var a = o.get;
            if (void 0 !== a) return a.call(n);
        }, m = n("./src/scripts/WechatAppPlayer/src/controller-live/flow-getinfo/index.js"), g = n("./src/scripts/WechatAppPlayer/src/classes/Controller.js"), v = n("./src/scripts/WechatAppPlayer/src/classes/Content.js"), y = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments));
            }
            return s(t, g), f(t, [ {
                key: "createFlow",
                value: function(e, t) {
                    var r = this, n = e.sid, o = e.from, i = e.pid;
                    e.defn, e.noad;
                    "v4138" != o && "";
                    var a = null, s = m(n, i, o).then(function(e) {
                        a = new v({
                            url: e.data.playurl
                        }), r.emit("contentchange", {
                            currentContent: a
                        });
                    });
                    return [ "End", "Play", "Pause", "Timeupdate", "Error", "Skip" ].forEach(function(e) {
                        r.on("content" + e.toLowerCase(), function(t) {
                            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                            a && a["onContent" + e].apply(a, n);
                        });
                    }), s;
                }
            }, {
                key: "stop",
                value: function() {
                    h(t.prototype.__proto__ || (0, l.default)(t.prototype), "stop", this).call(this), 
                    this.playflow && this.playflow.stop();
                }
            } ]), t;
        }();
        t.exports = function(e, t) {
            return new y(e, t);
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/ad.js": function(e, t, r) {
        function n(e) {
            h(e, {
                header: {
                    Cookie: "appuser=" + p + "; Lturn=" + d
                }
            }).then(function(e) {
                console.log("上报成功"), console.log(e);
            }, function(t) {
                console.log("上报失败"), console.log(t), e = e + "&appuesr=" + p, T.emit("report", {
                    reportUrl: e
                }), console.log("用message抛出上报事件");
            });
        }
        function o() {
            d = g.get("Lturn"), console.log("Lturn:" + d), d ? (d += 1, console.log("Lturn+1:" + d)) : (d = Math.floor(1e3 * Math.random()), 
            console.log("create Lturn:" + d)), d > 999 && (d = 0), g.set("Lturn", d, 72e5);
        }
        function i(e) {
            var t = [];
            return e.item.forEach(function(e, r) {
                t.push(e);
            }), t;
        }
        function a(e) {
            console.log("开始检查trueview贴片状态");
            for (var t = e.length, r = [], n = 0, o = 0; o < t; o++) e[o].trueviewTurn = !1, 
            1 == e[o].order_id || "FT" == e[o].type ? r[o] = 0 : (s(e[o]) && (e[o].trueviewTurn = !0), 
            r[o] = 1, n += 1);
            u = 1 == n, console.log("trueviewCheckArr内容是：" + r + ",trueviewCount值是：" + n);
        }
        function s(e) {
            if (console.log("开始检查trueview开关"), e.params && void 0 != e.params && "" != e.params) {
                var t = e.params;
                if (-1 != t.indexOf("richdata=")) {
                    var r = t.substr(t.indexOf("richdata=") + 9);
                    -1 != r.indexOf("&") && (r = r.substr(0, r.indexOf("&"))), r = decodeURIComponent(r.replace(/\+/g, " ")), 
                    console.log("转换出来的richdata参数是：" + r);
                    try {
                        var n = JSON.parse(r);
                        if (console.log("转换成json后的对象是：" + n), n.plugins && void 0 != n.plugins && n.plugins.trueview && void 0 != n.plugins.trueview && "Y" == n.plugins.trueview) return console.log("trueview开关是打开的Y！"), 
                        !0;
                    } catch (e) {
                        console.log("richdata解析出错！");
                    }
                }
            }
            return !1;
        }
        function c(e) {
            E = 0;
            for (var t = 0; t < e.length; t++) 1 != e[t].order_id && (E += e[t].duration / 1e3);
            console.log("广告总时长为：" + E);
        }
        var u, l, d, p, f, h = r("./src/scripts/WechatAppPlayer/lib-inject.js").request, m = r("./src/scripts/WechatAppPlayer/src/lib/message.js"), g = r("./src/scripts/WechatAppPlayer/src/module/cache.js"), v = r("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/adReport.js"), y = r("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/md5.js"), _ = "", b = 0, j = "", w = 0, A = -1, x = 1, P = -1, E = 0, S = "", R = "", T = new m();
        (e.exports = function(e) {
            console.log("ad video onLoad"), console.log(e), console.log("当前rfid:" + S), e.vid && (_ = e.vid), 
            e.live && (b = e.live), e.chid && (w = e.chid), e.coverid && (j = e.coverid), e.pu && (A = e.pu), 
            e.openid && (R = e.openid), console.log("openid:" + R), p = String(y(R).substr(0, 16)).toUpperCase(), 
            console.log("appuesr:" + p), o();
            var t = {};
            return l = new Date().getTime(), h("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live=" + b + "&pu=" + A + "&rfid=" + S + "&openid=" + R + "&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid=" + w + "&st=0&resp_type=json&_t=1478361546359&rfid=&vid=" + _ + "&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid=" + j, {
                needlogin: !0,
                header: {
                    Cookie: "appuser=" + p + "; Lturn=" + d
                }
            }).then(function(e) {
                f = e, e.data.adLoc && e.data.adLoc.tpid && (x = e.data.adLoc.tpid), t = {
                    t: "0",
                    url: "",
                    vid: _,
                    coverid: j,
                    pf: "H5",
                    vptag: "",
                    pid: "",
                    chid: w,
                    tpid: x
                };
                var r = new Date().getTime() - l;
                console.log("livew请求完成，进行dp3上报,时间为:" + r), v.reportDp3(2, "WL", r, 1, 100, 0, R, t), 
                l = new Date().getTime();
                var n = i(e.data.adList);
                return console.log("最终adList:" + n), a(n), c(n), n;
            }, function(e) {
                console.log("livew error，再试一次");
                var r = new Date().getTime() - l;
                return console.log("livew请求失败，进行dp3上报,时间为:" + r), v.reportDp3(2, "WL", r, 1, 202, 0, R, t), 
                l = new Date().getTime(), h("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live=" + b + "&pu=" + A + "&rfid=" + S + "&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid=" + w + "&openid=" + R + "&st=0&resp_type=json&_t=1478361546359&rfid=&vid=" + _ + "&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid=" + j, {
                    needlogin: !0,
                    header: {
                        Cookie: "appuser=" + p + "; Lturn=" + d
                    }
                }).then(function(e) {
                    f = e, e.data.adLoc && e.data.adLoc.tpid && (x = e.data.adLoc.tpid), t = {
                        t: "0",
                        url: "",
                        vid: _,
                        coverid: j,
                        pf: "H5",
                        vptag: "",
                        pid: "",
                        chid: w,
                        tpid: x
                    };
                    var r = new Date().getTime() - l;
                    console.log("livew重试请求完成，进行dp3上报,时间为:" + r), v.reportDp3(2, "WL", r, 1, 100, 0, R, t), 
                    l = new Date().getTime();
                    var n = i(e.data.adList);
                    return console.log("最终adList:" + n), a(n), c(n), n;
                }, function(e) {
                    var r = new Date().getTime() - l;
                    return console.log("livew error，订单获取失败，返回空数组，进行dp3上报,时间为:" + r), v.reportDp3(2, "WL", r, 1, 202, 0, R, t), 
                    l = new Date().getTime(), [];
                });
            }).then(function(e) {
                return e = e.map(function(e, r) {
                    return function() {
                        var r = [];
                        if (e.reportUrlOther.reportitem) for (i = 0; i < e.reportUrlOther.reportitem.length; i++) r[i] = {
                            url: e.reportUrlOther.reportitem[i].url,
                            time: e.reportUrlOther.reportitem[i].reporttime,
                            isReported: !1
                        };
                        var o = [];
                        if (e.reportUrlSDK.reportitem) for (var i = 0; i < e.reportUrlSDK.reportitem.length; i++) o[i] = {
                            url: e.reportUrlSDK.reportitem[i].url,
                            time: e.reportUrlSDK.reportitem[i].reporttime,
                            isReported: !1
                        };
                        return console.log("当前广告的trueview开关是否打开：" + e.trueviewTurn), console.log("当前广告是否符合trueview条件：" + u), 
                        u ? (console.log("allAdDuration:" + E), P = E <= 5 ? 0 : 5) : P = -1, console.log("skipable:" + P), 
                        {
                            oid: e.order_id,
                            url: e.image[0].url,
                            reportUrl: {
                                url: e.reportUrl,
                                time: e.ReportTime,
                                isReported: !1
                            },
                            reportUrlOther: r,
                            reportUrlSDK: o,
                            skipable: P,
                            duration: e.duration / 1e3,
                            allDuration: E,
                            onSkip: function() {
                                console.log("当前广告被跳过了，上报智慧点10237"), v.reportWisdomPoint(10237, e.order_id, e.order_id, "");
                                var r = new Date().getTime() - l;
                                console.log("当前广告被跳过，进行dp3上报,时间为:" + r), v.reportDp3(4, "WL", r, 1, "", 0, R, t), 
                                l = new Date().getTime();
                            },
                            onTimeupdate: function(e) {},
                            onEnd: function() {
                                var e = new Date().getTime() - l;
                                console.log("当前广告播放结束，进行dp3上报,时间为:" + e), v.reportDp3(5, "WL", e, 1, "", 0, R, t), 
                                l = new Date().getTime(), f.data.adLoc && f.data.adLoc.rfid && (S = f.data.adLoc.rfid, 
                                console.log("rfid赋值成功：" + S));
                            },
                            onStart: function() {
                                console.log("当前广告开始播放" + e), console.log("当前广告的oid是：" + this.oid);
                                var r = new Date().getTime() - l;
                                if (console.log("素材加载完成，开始播放，进行dp3上报,时间为:" + r), v.reportDp3(3, "WL", r, 1, "", 0, R, t), 
                                l = new Date().getTime(), this.reportUrl.url = v.updateUrlParam(this.reportUrl.url, t), 
                                this.reportUrl.time >= 0 && !this.reportUrl.isReported) {
                                    this.reportUrl.isReported = !0;
                                    try {
                                        n(this.reportUrl.url);
                                    } catch (e) {}
                                }
                                for (o = 0; o < this.reportUrlOther.length; o++) if (this.reportUrlOther[o].url = v.updateUrlParam(this.reportUrlOther[o].url, t), 
                                this.reportUrlOther[o].time >= 0 && !this.reportUrlOther[o].isReported) {
                                    this.reportUrlOther[o].isReported = !0;
                                    try {
                                        v.pingUrl(this.reportUrlOther[o].url);
                                    } catch (e) {}
                                }
                                for (var o = 0; o < this.reportUrlSDK.length; o++) if (this.reportUrlSDK[o].url = v.updateUrlParam(this.reportUrlSDK[o].url, t), 
                                this.reportUrlSDK[o].time >= 0 && !this.reportUrlSDK[o].isReported) {
                                    this.reportUrlSDK[o].isReported = !0;
                                    try {
                                        v.pingUrl(this.reportUrlSDK[o].url);
                                    } catch (e) {}
                                }
                            },
                            onError: function() {
                                var e = new Date().getTime() - l;
                                console.log("当前广告播放出错，进行dp3上报,时间为:" + e), v.reportDp3(4, "WL", e, 1, "", 0, R, t), 
                                l = new Date().getTime();
                            },
                            onReportEmpty: function() {
                                console.log("我是空单上报，当前广告的上报地址是：" + this.reportUrl.url), this.reportUrl.url = v.updateUrlParam(this.reportUrl.url, t);
                                try {
                                    n(this.reportUrl.url);
                                } catch (e) {}
                                for (e = 0; e < this.reportUrlOther.length; e++) if (this.reportUrlOther[e].url = v.updateUrlParam(this.reportUrlOther[e].url, t), 
                                this.reportUrlOther[e].time >= 0 && !this.reportUrlOther[e].isReported) {
                                    this.reportUrlOther[e].isReported = !0;
                                    try {
                                        v.pingUrl(this.reportUrlOther[e].url);
                                    } catch (e) {}
                                }
                                for (var e = 0; e < this.reportUrlSDK.length; e++) if (this.reportUrlSDK[e].url = v.updateUrlParam(this.reportUrlSDK[e].url, t), 
                                this.reportUrlSDK[e].time >= 0 && !this.reportUrlSDK[e].isReported) {
                                    this.reportUrlSDK[e].isReported = !0;
                                    try {
                                        v.pingUrl(this.reportUrlSDK[e].url);
                                    } catch (e) {}
                                }
                            }
                        };
                    };
                }), {
                    adList: e
                };
            }).catch(function(e) {
                return {};
            });
        }).reporter = v.reporter;
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/adReport.js": function(e, t, r) {
        function n(e) {
            var t = e.indexOf("?"), r = new Object(), n = e;
            if (t >= 0) for (var o, i = (n = n.substr(t + 1)).split("&"), a = 0; a < i.length; a++) (o = i[a].split("=")).length > 1 ? r[o[0]] = o[1] : r[o[0]] = "null";
            return r;
        }
        var o = r("./src/scripts/WechatAppPlayer/src/lib/message.js"), i = (r("./src/scripts/WechatAppPlayer/src/module/cache.js"), 
        new o());
        (e.exports = {
            updateUrlParam: function(e, t) {
                try {
                    var r = n(e), o = e, i = !0;
                    if (-1 != e.indexOf("?")) {
                        o = e.substring(0, e.indexOf("?"));
                        var a;
                        for (a in t) r[a] = t[a];
                        for (a in r) i ? (i = !1, o += "?" + a + "=" + r[a]) : o += "&" + a + "=" + r[a];
                    }
                } catch (e) {
                    o = "";
                }
                return o;
            },
            reportDp3: function(e, t, r, n, o, i, a, s) {
                console.log("开始dp3上报");
                var c = "https://dp3.qq.com/stdlog/?bid=weixin&step=" + e + "&merged=" + n + "&errorcode=" + o + "&trycount=" + i + "&openid=" + a;
                c = this.updateUrlParam(c, s);
                try {
                    this.pingUrl(c);
                } catch (e) {
                    console.log("dp3上报失败");
                }
            },
            reportWisdomPoint: function(e, t, r, n) {
                console.log("开始智慧点上报");
                var o = "https://t.l.qq.com?t=s&actid=" + e;
                o += "&oid=" + t + "&mid=" + r + "&locid=" + n;
                try {
                    this.pingUrl(o);
                } catch (e) {}
            },
            pingUrl: function(e, t, r, n) {
                console.log("ping上报地址：" + e);
                var o = new Date().getTime();
                e = this.updateUrlParam(e, {
                    reportTime: o
                }), i.emit("report", {
                    reportUrl: e
                }), console.log("用message抛出上报事件");
            }
        }).reporter = i;
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/getinfo-status.js": function(e, t, r) {
        var n = {};
        n[10001] = n[50] = n[68] = n[71] = n[73] = n[74] = n[76] = n[77] = n[445] = n[444] = "啊哦，没能找到你要的节目信息~", 
        n[51] = n[52] = n[64] = n[61] = n[62] = n[63] = n[65] = n[66] = n[69] = n[81] = n[82] = n[84] = n[86] = n[94] = "啊哦，本来在这儿的视频不见了~", 
        n[80] = n[83] = "啊哦，版权原因，该视频暂时无法播放~", e.exports = n;
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/getinfo.js": function(e, t, r) {
        function n(e, t, r) {
            o = t, r = r || "auto";
            var n = c(), l = s["v4138" == t ? "$xx" : "$xxf"](p[t], e, o, 1, n), f = "";
            l && (f = "encver=" + ("v4138" == t ? 2 : 300) + "&_qv_rmtv2=" + l), console.log("getinfo waiting");
            var h = "";
            return console.log("player.js fetch start", Date.now()), new u(function(e, t) {
                wx.getNetworkType({
                    success: function(t) {
                        h = {
                            "4g": 4,
                            "3g": 3,
                            "2g": 2,
                            wifi: 1
                        }[t && t.networkType] || 0, e();
                    }
                });
            }).then(function() {
                return a("https://h5vv.video.qq.com/getinfo?" + f + "&defn=" + r + "&platform=" + p[t] + "&otype=json&sdtfrom=" + t + "&_rnd=" + n + "&appVer=7&" + (d ? "dtype=3&" : "") + "vid=" + e + "&newnettype=" + h, {
                    needlogin: !0
                });
            }).catch(function() {
                return a("https://bkvv.video.qq.com/getinfo?" + f + "&defn=" + r + "&platform=" + p[t] + "&otype=json&sdtfrom=" + t + "&_rnd=" + n + "&appVer=7&" + (d ? "dtype=3&" : "") + "vid=" + e + "&newnettype=" + h, {
                    needlogin: !0
                });
            }).catch(function() {
                var e = new Error(i[444]);
                throw e.em = 444, e.code = "G.444", e;
            }).then(function(e) {
                return e = e.data, console.log("getinfo result:", e), e;
            });
        }
        var o, i = r("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/getinfo-status.js"), a = r("./src/scripts/WechatAppPlayer/lib-inject.js").request, s = r("./src/scripts/WechatAppPlayer/src/lib/algorithm/qvsec.js"), c = r("./src/scripts/WechatAppPlayer/src/lib/algorithm/fillTimeStamp.js"), u = r("./src/scripts/WechatAppPlayer/lib-inject.js").Promise, l = wx.getSystemInfoSync().system.match(/android/i), d = "devtools" != wx.getSystemInfoSync().platform && !l, p = r("./src/scripts/WechatAppPlayer/src/util/platform-config.js").APP_PLATFORM;
        e.exports = function() {
            return n.apply(this, arguments).then(function(e) {
                if (e.em) {
                    var t = new Error(i[e.em]);
                    throw t.em = e.em, t.code = "G." + e.em, t;
                }
                return e;
            }).then(function(e) {
                var t = e.vl.vi[0], r = {
                    duration: +t.td,
                    dltype: e.dltype,
                    fmid: e.fl.fi.filter(function(e) {
                        return +e.sl;
                    })[0].id,
                    filesize: e.fl.fi.filter(function(e) {
                        return +e.sl;
                    })[0].fs,
                    preview: e.preview,
                    charge: t.ch,
                    raw: e
                };
                return t.ch < 1 && (r.preview = e.preview, r.charged = t.ch), 3 == e.dltype ? (r.url = t.ul.ui.map(function(e) {
                    return e.hls.pt ? e.url + e.hls.pt + "?platform=" + p[o] + "&sdtfrom=" + o : "";
                }), r.url = r.url.filter(function(e) {
                    return e;
                })) : r.url = t.ul.ui.map(function(e) {
                    return e.url + t.fn + "?vkey=" + t.fvkey + "&br=" + t.br + "&fmt=auto&level=" + t.level + "&platform=" + p[o] + "&sdtfrom=" + o;
                }), r;
            });
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/md5.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var i, a = o(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), s = o(n("./node_modules/babel-runtime/core-js/symbol.js"));
        "function" == typeof s.default && e(a.default);
        !function(e) {
            function o(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
            }
            function a(e, t) {
                return e << t | e >>> 32 - t;
            }
            function s(e, t, r, n, i, s) {
                return o(a(o(o(t, e), o(n, s)), i), r);
            }
            function c(e, t, r, n, o, i, a) {
                return s(t & r | ~t & n, e, t, o, i, a);
            }
            function u(e, t, r, n, o, i, a) {
                return s(t & n | r & ~n, e, t, o, i, a);
            }
            function l(e, t, r, n, o, i, a) {
                return s(t ^ r ^ n, e, t, o, i, a);
            }
            function d(e, t, r, n, o, i, a) {
                return s(r ^ (t | ~n), e, t, o, i, a);
            }
            function p(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var r, n, i, a, s, p = 1732584193, f = -271733879, h = -1732584194, m = 271733878;
                for (r = 0; r < e.length; r += 16) n = p, i = f, a = h, s = m, f = d(f = d(f = d(f = d(f = l(f = l(f = l(f = l(f = u(f = u(f = u(f = u(f = c(f = c(f = c(f = c(f, h = c(h, m = c(m, p = c(p, f, h, m, e[r], 7, -680876936), f, h, e[r + 1], 12, -389564586), p, f, e[r + 2], 17, 606105819), m, p, e[r + 3], 22, -1044525330), h = c(h, m = c(m, p = c(p, f, h, m, e[r + 4], 7, -176418897), f, h, e[r + 5], 12, 1200080426), p, f, e[r + 6], 17, -1473231341), m, p, e[r + 7], 22, -45705983), h = c(h, m = c(m, p = c(p, f, h, m, e[r + 8], 7, 1770035416), f, h, e[r + 9], 12, -1958414417), p, f, e[r + 10], 17, -42063), m, p, e[r + 11], 22, -1990404162), h = c(h, m = c(m, p = c(p, f, h, m, e[r + 12], 7, 1804603682), f, h, e[r + 13], 12, -40341101), p, f, e[r + 14], 17, -1502002290), m, p, e[r + 15], 22, 1236535329), h = u(h, m = u(m, p = u(p, f, h, m, e[r + 1], 5, -165796510), f, h, e[r + 6], 9, -1069501632), p, f, e[r + 11], 14, 643717713), m, p, e[r], 20, -373897302), h = u(h, m = u(m, p = u(p, f, h, m, e[r + 5], 5, -701558691), f, h, e[r + 10], 9, 38016083), p, f, e[r + 15], 14, -660478335), m, p, e[r + 4], 20, -405537848), h = u(h, m = u(m, p = u(p, f, h, m, e[r + 9], 5, 568446438), f, h, e[r + 14], 9, -1019803690), p, f, e[r + 3], 14, -187363961), m, p, e[r + 8], 20, 1163531501), h = u(h, m = u(m, p = u(p, f, h, m, e[r + 13], 5, -1444681467), f, h, e[r + 2], 9, -51403784), p, f, e[r + 7], 14, 1735328473), m, p, e[r + 12], 20, -1926607734), h = l(h, m = l(m, p = l(p, f, h, m, e[r + 5], 4, -378558), f, h, e[r + 8], 11, -2022574463), p, f, e[r + 11], 16, 1839030562), m, p, e[r + 14], 23, -35309556), h = l(h, m = l(m, p = l(p, f, h, m, e[r + 1], 4, -1530992060), f, h, e[r + 4], 11, 1272893353), p, f, e[r + 7], 16, -155497632), m, p, e[r + 10], 23, -1094730640), h = l(h, m = l(m, p = l(p, f, h, m, e[r + 13], 4, 681279174), f, h, e[r], 11, -358537222), p, f, e[r + 3], 16, -722521979), m, p, e[r + 6], 23, 76029189), h = l(h, m = l(m, p = l(p, f, h, m, e[r + 9], 4, -640364487), f, h, e[r + 12], 11, -421815835), p, f, e[r + 15], 16, 530742520), m, p, e[r + 2], 23, -995338651), h = d(h, m = d(m, p = d(p, f, h, m, e[r], 6, -198630844), f, h, e[r + 7], 10, 1126891415), p, f, e[r + 14], 15, -1416354905), m, p, e[r + 5], 21, -57434055), h = d(h, m = d(m, p = d(p, f, h, m, e[r + 12], 6, 1700485571), f, h, e[r + 3], 10, -1894986606), p, f, e[r + 10], 15, -1051523), m, p, e[r + 1], 21, -2054922799), h = d(h, m = d(m, p = d(p, f, h, m, e[r + 8], 6, 1873313359), f, h, e[r + 15], 10, -30611744), p, f, e[r + 6], 15, -1560198380), m, p, e[r + 13], 21, 1309151649), h = d(h, m = d(m, p = d(p, f, h, m, e[r + 4], 6, -145523070), f, h, e[r + 11], 10, -1120210379), p, f, e[r + 2], 15, 718787259), m, p, e[r + 9], 21, -343485551), 
                p = o(p, n), f = o(f, i), h = o(h, a), m = o(m, s);
                return [ p, f, h, m ];
            }
            function f(e) {
                var t, r = "", n = 32 * e.length;
                for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return r;
            }
            function h(e) {
                var t, r = [];
                for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
                var n = 8 * e.length;
                for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return r;
            }
            function m(e) {
                return f(p(h(e), 8 * e.length));
            }
            function g(e, t) {
                var r, n, o = h(e), i = [], a = [];
                for (i[15] = a[15] = void 0, o.length > 16 && (o = p(o, 8 * e.length)), r = 0; r < 16; r += 1) i[r] = 909522486 ^ o[r], 
                a[r] = 1549556828 ^ o[r];
                return n = p(i.concat(h(t)), 512 + 8 * t.length), f(p(a.concat(n), 640));
            }
            function v(e) {
                var t, r, n = "";
                for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                return n;
            }
            function y(e) {
                return unescape(encodeURIComponent(e));
            }
            function _(e) {
                return m(y(e));
            }
            function b(e) {
                return v(_(e));
            }
            function j(e, t) {
                return g(y(e), y(t));
            }
            function w(e, t) {
                return v(j(e, t));
            }
            function A(e, t, r) {
                return t ? r ? j(t, e) : w(t, e) : r ? _(e) : b(e);
            }
            void 0 !== (i = function() {
                return A;
            }.call(r, n, r, t)) && (t.exports = i);
        }();
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/index.js": function(e, t, r) {
        var n = r("./src/scripts/WechatAppPlayer/lib-inject.js").Promise, o = r("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/ad.js"), i = r("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/getinfo.js");
        e.exports = function(e) {
            var t = (e = e || {}).vid, r = e.cid, a = e.from, s = e.openid, c = e.defn, u = e.noad;
            return n.all([ -1 == [ "v4138" ].indexOf(a) || u ? n.resolve({}) : o({
                coverid: r,
                vid: t,
                live: 0,
                chid: 41,
                pu: 1,
                openid: s || ""
            }), i(t, a, c) ]).then(function(e) {
                return {
                    ad: e[0],
                    videoinfo: e[1]
                };
            });
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/flow-play/index.js": function(e, t, r) {
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("./node_modules/babel-runtime/core-js/object/keys.js")), o = r("./src/scripts/WechatAppPlayer/lib-inject.js").Promise, i = r("./src/scripts/WechatAppPlayer/src/lib/message.js"), a = r("./src/scripts/WechatAppPlayer/src/classes/Content.js");
        e.exports = function(e, t, r) {
            var s = {
                time: 0,
                duration: 0,
                skipable: !1
            }, c = {}, u = {}, l = [], d = o.defer(), p = d.promise, f = new i(), h = null, m = function(e) {
                console.log("contentchange:", e, u);
                var t = {
                    currentContent: e = e || h,
                    preloadContents: l.filter(function(t) {
                        return !u[t.id] && t != e;
                    }),
                    getinforaw: v.raw
                };
                e && e.isad && (t.progress = s), h = e, r(t);
            }, g = e.ad, v = e.videoinfo, y = !1;
            (g.adList || []).forEach(function(e) {
                var t = e(), r = new a({
                    url: t.url,
                    duration: t.duration,
                    isad: !0
                }), n = new o(function(e) {
                    y || (r.on("end", function() {
                        e(), t.onEnd();
                    }, !0), r.on("error", function() {
                        e(), t.onError();
                    }, !0), r.on("timeout", function() {
                        e(), t.onError();
                    }, !0), r.on("skip", function() {
                        y = !0, e(), t.onSkip();
                    }, !0), r.on("start", function() {
                        f.emit("adplaying", r), t.onStart();
                    }, !0), r.on("timeupdate", function(e) {
                        t.onTimeupdate(e);
                    }, !0), f.on("_terminate", function() {
                        e();
                    }));
                }).then(function(e) {
                    return u[r.id] = !0, e;
                });
                c[r.id] = r, l.push(r), s.duration += t.duration, s.skipable = t.skipable, p = p.then(function() {
                    return console.info("playflow: ad." + t.url), "1" == t.oid ? (console.log("这是一个空单，往下走"), 
                    void t.onReportEmpty()) : (m(r), n.then(function(e) {
                        s.time += r.duration;
                    }));
                });
            });
            var _ = new a({
                url: v.url,
                duration: v.duration,
                filesize: v.filesize,
                isad: !1,
                preview: v.preview,
                charged: v.charged
            });
            c[_.id] = _, l.unshift(_);
            var b = new o(function(e, t) {
                function r(r) {
                    !n && r.on("start", function() {
                        f.emit("videoplaying", r), n = !0;
                    }, !0), r.on("start", function() {
                        f.emit("videostart", r);
                    }), r.on("play", function() {
                        f.emit("videoplay", r);
                    }), r.on("pause", function() {
                        f.emit("videopause", r);
                    }), r.on("timeupdate", function(e) {
                        f.emit("videotimeupdate", e, v.duration);
                    }), r.on("error", function(e) {
                        var r = new Error(e ? e.detail && e.detail.errMsg || e.message : "播放出错");
                        r.code = "P.0", t(r);
                    }, !0), r.on("end", e, !0), r.on("timeout", function(e) {
                        f.emit("videotimeout", e);
                    });
                }
                var n = !1;
                r(_), f.on("_terminate", function() {
                    e();
                }), f.on("_changevideocontent", function(e) {
                    _.off(), u[_.id] = !0, l.every(function(t, r) {
                        return t != _ || (l.splice(r, 1, e), !1);
                    }), r(e), m(h == _ ? e : null), c[e.id] = e, _ = e;
                });
            }).then(function(e) {
                return u[_.id] = !0, e;
            });
            p = p.then(function() {
                return _.off("change"), _.on("change", function() {
                    m(_);
                }), f.on("_changevideocontent", function(e) {
                    _.off("change"), e.on("change", function() {
                        m(e);
                    });
                }), m(_), b;
            }).then(function() {
                f.emit("end");
            }).catch(function(e) {
                throw f.emit("error", e), e;
            }), m(null);
            var j = {
                progress: p,
                stop: function() {
                    return f.emit("_terminate"), f.emit("terminate"), (0, n.default)(c).forEach(function(e) {
                        c[e].off();
                    }), f.off(), this;
                },
                start: function() {
                    return d.resolve(), p;
                },
                on: function() {
                    return f.on.apply(f, arguments);
                },
                switchVideo: function(e) {
                    var t = e.videoinfo;
                    v = t;
                    var r = new a({
                        url: t.url,
                        duration: t.duration,
                        filesize: t.filesize,
                        isad: !1,
                        preview: t.preview,
                        charged: t.charged
                    });
                    f.emit("_changevideocontent", r);
                }
            };
            return [ "End", "Play", "Pause", "Timeupdate", "Error", "Skip" ].forEach(function(e) {
                t.on("content" + e.toLowerCase(), function(t) {
                    for (var r = t && c[t] ? c[t] : h, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                    r && r["onContent" + e].apply(r, o);
                });
            }), j;
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/index.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(t, r) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !r || "object" !== (void 0 === r ? "undefined" : e(r)) && "function" != typeof r ? t : r;
        }
        function s(t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === r ? "undefined" : e(r)));
            t.prototype = (0, u.default)(r && r.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (c.default ? (0, c.default)(t, r) : t.__proto__ = r);
        }
        var c = o(n("./node_modules/babel-runtime/core-js/object/set-prototype-of.js")), u = o(n("./node_modules/babel-runtime/core-js/object/create.js")), l = o(n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")), d = o(n("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js")), p = o(n("./node_modules/babel-runtime/core-js/object/define-property.js")), f = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    (0, p.default)(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), h = function e(t, r, n) {
            null === t && (t = Function.prototype);
            var o = (0, d.default)(t, r);
            if (void 0 === o) {
                var i = (0, l.default)(t);
                return null === i ? void 0 : e(i, r, n);
            }
            if ("value" in o) return o.value;
            var a = o.get;
            if (void 0 !== a) return a.call(n);
        }, m = n("./src/scripts/WechatAppPlayer/lib-inject.js").Promise, g = n("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/index.js"), v = n("./src/scripts/WechatAppPlayer/src/controller-video/flow-play/index.js"), y = n("./src/scripts/WechatAppPlayer/src/controller-video/reporter.js"), _ = n("./src/scripts/WechatAppPlayer/src/module/reporter/index.js"), b = n("./src/scripts/WechatAppPlayer/src/classes/Controller.js");
        n("./src/scripts/WechatAppPlayer/src/controller-video/flow-getinfo/data/ad.js").reporter.on("report", function(e) {
            _.any(e);
        });
        var j = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments));
            }
            return s(t, b), f(t, [ {
                key: "createFlow",
                value: function(e, t) {
                    var r = this;
                    e = e || {}, t = t || {};
                    var n = e, o = n.vid, i = n.from, a = n.cid, s = n.defn, c = n.noad;
                    "v4138" != i && (s = "", c = !1);
                    var u = t.getReportParam, l = new m(function(e) {
                        u ? u(function(t, r) {
                            e(r && r.hc_openid || "");
                        }) : e("");
                    }), d = y({
                        cid: a,
                        vid: o
                    }, {
                        getReportParam: u
                    }), p = this.model;
                    console.log("getOpenid start", Date.now());
                    var f = l.then(function(e) {
                        return g({
                            vid: o,
                            from: i,
                            cid: a,
                            openid: e,
                            defn: s,
                            noad: c
                        });
                    }).then(function(e) {
                        p.state = "ready";
                        var t = r.playflow = v(e, r, function(e) {
                            p.currentContent = e.currentContent, r.emit("contentchange", e);
                        });
                        return d.setPlayFlow(t), d.setVideoInfo(e.videoinfo), t.on("videotimeupdate", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.emit.apply(r, [ "videotimeupdate" ].concat(t));
                        }), t.on("videostart", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.emit.apply(r, [ "videostart" ].concat(t));
                        }), r.started.promise;
                    }).then(function() {
                        return p.state = "playing", r.playflow.start();
                    }).then(function(e) {
                        p.state = "ended";
                    }).catch(function(e) {
                        throw p.state = "error", r.playflow && r.playflow.stop(), d.error(e), e;
                    });
                    return this.switchDefn = function(e) {
                        return l.then(function(t) {
                            return g({
                                vid: o,
                                from: i,
                                cid: a,
                                openid: t,
                                defn: e,
                                noad: !0
                            });
                        }).then(function(e) {
                            r.playflow.switchVideo(e);
                        });
                    }, f;
                }
            }, {
                key: "stop",
                value: function() {
                    this.model.state = "ended", h(t.prototype.__proto__ || (0, l.default)(t.prototype), "stop", this).call(this), 
                    this.playflow && this.playflow.stop();
                }
            } ]), t;
        }();
        t.exports = function(e, t) {
            return new j(e, t);
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/report-play.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var i = o(n("./node_modules/babel-runtime/core-js/object/keys.js")), a = o(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), s = o(n("./node_modules/babel-runtime/core-js/symbol.js")), c = "function" == typeof s.default && "symbol" === e(a.default) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, u = n("./src/scripts/WechatAppPlayer/src/module/reporter/report-queue.js"), l = wx.getSystemInfoSync();
        t.exports = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments[2], n = arguments[3];
            r(function(r, o) {
                r && (o = {}), delete o.val1, delete o.val2, delete o.val3, "object" == c(o[e]) && ([ "val1", "val2", "val3" ].forEach(function(t) {
                    o[t] = o[e][t];
                }), delete o[e]);
                var a = getCurrentPages().slice(0), s = a.pop(), d = a.pop();
                wx.getNetworkType({
                    success: function(r) {
                        var a = {
                            BossId: 4327,
                            Pwd: 944465292,
                            app_version: "",
                            platform: l.platform,
                            client_model: l.model,
                            wx_version: l.version,
                            network: r && r.networkType ? r.networkType : "",
                            step: e,
                            page_url: s && s.$name || "",
                            page_query: s && s.$query || "",
                            page_ref: d && d.$name || ""
                        };
                        [ "hc_openid", "hc_appid", "ptag", "iformat", "duration", "defn", "tpay", "adid", "playtime", "page_url", "page_query", "page_ref", "cid", "vid", "isvip", "val1", "val2", "val3", "appname", "nick", "rmd", "scene", "additional" ].forEach(function(e) {
                            e in t && (a[e] = t[e]), e in o && (a[e] = o[e]), void 0 == a[e] && (a[e] = "");
                        }), n && "function" == typeof n ? n(null, {
                            reportUrl: "https://btrace.qq.com/kvcollect?" + (0, i.default)(a).map(function(e) {
                                return e in a ? e + "=" + encodeURIComponent(a[e]) : "";
                            }).filter(function(e) {
                                return e;
                            }).join("&")
                        }) : u.push({
                            reportUrl: "https://btrace.qq.com/kvcollect?" + (0, i.default)(a).map(function(e) {
                                return e in a ? e + "=" + encodeURIComponent(a[e]) : "";
                            }).filter(function(e) {
                                return e;
                            }).join("&")
                        });
                    }
                });
            });
        };
    },
    "./src/scripts/WechatAppPlayer/src/controller-video/reporter.js": function(e, t, r) {
        function n(e) {
            return {
                1: 1,
                2: 1,
                10001: 4,
                10002: 3,
                10003: 2,
                10201: 4,
                10202: 3,
                10203: 2,
                100001: 2,
                320089: 2,
                320091: 3,
                320092: 4,
                320093: 5
            }[e];
        }
        function o(e) {
            var t = !1, r = function() {
                t || (t = !0, e.done = t, e.apply(this, arguments));
            };
            return r.done = t, r;
        }
        var i = r("./src/scripts/WechatAppPlayer/src/controller-video/report-play.js"), a = r("./src/scripts/WechatAppPlayer/src/module/reporter/index.js"), s = [ 5, 30 ];
        e.exports = function(e, t) {
            function r() {
                return {
                    iformat: p ? p.dltype : 0,
                    duration: p ? Math.floor(p.duration) : "",
                    defn: p ? n(p.fmid) : "",
                    playtime: h + (c ? Date.now() - c : 0),
                    vid: u || "",
                    cid: l || ""
                };
            }
            var c, u = e.vid, l = e.cid, d = t.getReportParam || function(e) {
                return e({});
            }, p = null, f = 0, h = 0, m = !1, g = !1, v = o(function(e) {
                var t = r();
                t.val1 = 0, t.val2 = 0, t.val3 = e, i(7, t, d);
            }), y = o(function(e) {
                var t = r();
                t.val1 = f ? Date.now() - f : 0, t.val2 = m ? 0 : 1, t.val3 = e, i(6, t, d);
            }), _ = o(function(e, t) {
                var n = r();
                n.val1 = f ? Date.now() - f : 0, n.val2 = {
                    error: 3,
                    complete: 1,
                    incomplete: g ? 2 : 0
                }[e], void 0 == n.val2 && (n.val2 = 2), n.val3 = t, i(5, n, d);
            }), b = null, j = o(function(e, t) {
                a.reportCache.del("step30");
                var n = r();
                n.val1 = e, n.val2 = t, i(30, n, d);
            }), w = function(e, t) {
                if (1e4 == e) {
                    b = setTimeout(function() {
                        j(e);
                    }, 11e3);
                    var n = r();
                    n.val1 = e, n.val2 = t, i(30, n, d, function(e, t) {
                        a.reportCache.set("step30", t);
                    });
                } else clearTimeout(b), j(e);
            };
            return i(3, r(), d), a.on("_save", function() {
                var e = r();
                e.val1 = f ? Date.now() - f : 0, e.val2 = g ? 2 : 0, i(5, e, d, function(e, t) {
                    a.reportCache.set("step5", t);
                });
            }), a.on("_restore", function() {
                s.forEach(function(e) {
                    a.reportCache.del("step" + e);
                });
            }), {
                setPlayFlow: o(function(e) {
                    e.on("adplaying", function(e) {
                        m = !0, v(e.url);
                    }), e.on("videoplay", function(e) {
                        !f && (f = Date.now()), c = Date.now();
                    }), e.on("videoplaying", function(e) {
                        g = !0, y(e.url), w(f ? Date.now() - f : 0, 0);
                    }), e.on("videopause", function() {
                        h += Date.now() - c, c = 0;
                    }), e.on("videotimeout", function(e) {
                        w(e, 1);
                    }), e.on("terminate", function() {
                        _("incomplete");
                    }), e.on("end", function() {
                        _("complete");
                    }), e.on("error", function(e) {
                        _("error", "1 " + (e.code || "") + " " + e.message);
                    });
                }),
                setVideoInfo: o(function(e) {
                    p = e;
                }),
                error: function(e) {
                    _("error", "2 " + (e.code || "") + " " + e.message);
                }
            };
        };
    },
    "./src/scripts/WechatAppPlayer/src/lib/algorithm/fillTimeStamp.js": function(e, t, r) {
        e.exports = function(e) {
            e = e || 10;
            var t = parseInt(+new Date()) + "";
            if (t.length === e) return t;
            if (t.length > e) return t.substring(0, e);
            for (var r = e - t.length; r > 0; ) t = "0" + t, r--;
            return t;
        };
    },
    "./src/scripts/WechatAppPlayer/src/lib/algorithm/qvsec.js": function(e, t, r) {
        var n = {};
        n.ha = function(e) {
            function t(e, t) {
                return ((e >> 1) + (t >> 1) << 1) + (1 & e) + (1 & t);
            }
            for (var r = [], n = 0; n < 64; ) r[n] = 0 | 4294967296 * Math.abs(Math.sin(++n));
            return function(e) {
                for (var n, o, i, a, s = [], c = decodeURIComponent(encodeURI(e)), u = c.length, l = [ n = 1732584193, o = -271733879, ~n, ~o ], d = 0; d <= u; ) s[d >> 2] |= (c.charCodeAt(d) || 128) << d++ % 4 * 8;
                for (s[e = 16 * (u + 8 >> 6) + 14] = 8 * u, d = 0; d < e; d += 16) {
                    for (u = l, a = 0; a < 64; ) u = [ i = u[3], t(n = u[1], (i = t(t(u[0], [ n & (o = u[2]) | ~n & i, i & n | ~i & o, n ^ o ^ i, o ^ (n | ~i) ][u = a >> 4]), t(r[a], s[[ a, 5 * a + 1, 3 * a + 5, 7 * a ][u] % 16 + d]))) << (u = [ 7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21 ][4 * u + a++ % 4]) | i >>> 32 - u), n, o ];
                    for (a = 4; a; ) l[--a] = t(l[a], u[a]);
                }
                for (e = ""; a < 32; ) e += (l[a >> 3] >> 4 * (1 ^ 7 & a++) & 15).toString(16);
                return e;
            };
        }(), n.stringToHex = function(e) {
            for (var t = "", r = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), n = 0; n < e.length; n++) t += r[e.charCodeAt(n) >> 4] + r[15 & e.charCodeAt(n)];
            return t;
        }, n.hexToString = function(e) {
            for (var t = "", r = "0x" == e.substr(0, 2) ? 2 : 0; r < e.length; r += 2) t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
            return t;
        }, n._Seed = "#$#@#*ad", n.tempcalc = function(e, t) {
            for (var r = "", n = 0; n < e.length; n++) r += String.fromCharCode(e.charCodeAt(n) ^ t.charCodeAt(n % 4));
            return r;
        }, n.u1 = function(e, t) {
            for (var r = "", n = t; n < e.length; n += 2) r += e.charAt(n);
            return r;
        }, n._urlStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
        n.urlenc = function(e, t, r) {
            for (var o, i, a, s, c, u, l, d = "", p = 0; p < e.length; ) o = e.charCodeAt(p++), 
            i = e.charCodeAt(p++), a = e.charCodeAt(p++), 15 == p && (d += "A", d += t, d += r), 
            s = o >> 2, c = (3 & o) << 4 | i >> 4, u = (15 & i) << 2 | a >> 6, l = 63 & a, isNaN(i) ? u = l = 64 : isNaN(a) && (l = 64), 
            d = d + n._urlStr.charAt(s) + n._urlStr.charAt(c) + n._urlStr.charAt(u) + n._urlStr.charAt(l);
            return d;
        }, n.$xx = function(e, t, r, o, i) {
            var i = i || parseInt(+new Date() / 1e3);
            return n.ha(e + t + i + n._Seed + r + "heherand");
        }, n.$xxzb = function(e, t, r, o, i) {
            var i = i || parseInt(+new Date() / 1e3);
            return n.ha(t + "tmp123" + e + "#$$&c2*KA" + i);
        }, n.$xxf = function(e, t, r, o, i) {
            var i = i || parseInt(+new Date() / 1e3);
            return n.ha(e + "ques" + i + "*&%$(SD!L}" + t + r);
        }, n.$xxzbf = function(e, t, r, o, i) {
            var i = i || parseInt(+new Date() / 1e3);
            return n.ha(t + i + "*#016" + e + "zput");
        }, e.exports = n;
    },
    "./src/scripts/WechatAppPlayer/src/lib/es6-promise.js": function(t, r, n) {
        (function(o, i) {
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var s, c, u = a(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), l = a(n("./node_modules/babel-runtime/core-js/symbol.js")), d = "function" == typeof l.default && "symbol" === e(u.default) ? function(t) {
                return void 0 === t ? "undefined" : e(t);
            } : function(t) {
                return t && "function" == typeof l.default && t.constructor === l.default && t !== l.default.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
            };
            !function(e, o) {
                "object" === d(r) && void 0 !== t ? t.exports = o() : (s = o, void 0 !== (c = "function" == typeof s ? s.call(r, n, r, t) : s) && (t.exports = c));
            }(0, function() {
                function e(e) {
                    return "function" == typeof e || "object" === (void 0 === e ? "undefined" : d(e)) && null !== e;
                }
                function t(e) {
                    return "function" == typeof e;
                }
                function r() {
                    var e = setTimeout;
                    return function() {
                        return e(n, 1);
                    };
                }
                function n() {
                    for (var e = 0; e < O; e += 2) (0, V[e])(V[e + 1]), V[e] = void 0, V[e + 1] = void 0;
                    O = 0;
                }
                function a(e, t) {
                    var r = arguments, n = this, o = new this.constructor(c);
                    void 0 === o[Y] && R(o);
                    var i = n._state;
                    return i ? function() {
                        var e = r[i - 1];
                        W(function() {
                            return P(i, o, e, n._result);
                        });
                    }() : j(n, o, e, t), o;
                }
                function s(e) {
                    var t = this;
                    if (e && "object" === (void 0 === e ? "undefined" : d(e)) && e.constructor === t) return e;
                    var r = new t(c);
                    return v(r, e), r;
                }
                function c() {}
                function u() {
                    return new TypeError("You cannot resolve a promise with itself");
                }
                function l() {
                    return new TypeError("A promises callback cannot return that same promise.");
                }
                function p(e) {
                    try {
                        return e.then;
                    } catch (e) {
                        return X.error = e, X;
                    }
                }
                function f(e, t, r, n) {
                    try {
                        e.call(t, r, n);
                    } catch (e) {
                        return e;
                    }
                }
                function h(e, t, r) {
                    W(function(e) {
                        var n = !1, o = f(r, t, function(r) {
                            n || (n = !0, t !== r ? v(e, r) : _(e, r));
                        }, function(t) {
                            n || (n = !0, b(e, t));
                        }, "Settle: " + (e._label || " unknown promise"));
                        !n && o && (n = !0, b(e, o));
                    }, e);
                }
                function m(e, t) {
                    t._state === G ? _(e, t._result) : t._state === $ ? b(e, t._result) : j(t, void 0, function(t) {
                        return v(e, t);
                    }, function(t) {
                        return b(e, t);
                    });
                }
                function g(e, r, n) {
                    r.constructor === e.constructor && n === a && r.constructor.resolve === s ? m(e, r) : n === X ? b(e, X.error) : void 0 === n ? _(e, r) : t(n) ? h(e, r, n) : _(e, r);
                }
                function v(t, r) {
                    t === r ? b(t, u()) : e(r) ? g(t, r, p(r)) : _(t, r);
                }
                function y(e) {
                    e._onerror && e._onerror(e._result), w(e);
                }
                function _(e, t) {
                    e._state === z && (e._result = t, e._state = G, 0 !== e._subscribers.length && W(w, e));
                }
                function b(e, t) {
                    e._state === z && (e._state = $, e._result = t, W(y, e));
                }
                function j(e, t, r, n) {
                    var o = e._subscribers, i = o.length;
                    e._onerror = null, o[i] = t, o[i + G] = r, o[i + $] = n, 0 === i && e._state && W(w, e);
                }
                function w(e) {
                    var t = e._subscribers, r = e._state;
                    if (0 !== t.length) {
                        for (var n = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) n = t[a], 
                        o = t[a + r], n ? P(r, n, o, i) : o(i);
                        e._subscribers.length = 0;
                    }
                }
                function A() {
                    this.error = null;
                }
                function x(e, t) {
                    try {
                        return e(t);
                    } catch (e) {
                        return J.error = e, J;
                    }
                }
                function P(e, r, n, o) {
                    var i = t(n), a = void 0, s = void 0, c = void 0, u = void 0;
                    if (i) {
                        if ((a = x(n, o)) === J ? (u = !0, s = a.error, a = null) : c = !0, r === a) return void b(r, l());
                    } else a = o, c = !0;
                    r._state !== z || (i && c ? v(r, a) : u ? b(r, s) : e === G ? _(r, a) : e === $ && b(r, a));
                }
                function E(e, t) {
                    try {
                        t(function(t) {
                            v(e, t);
                        }, function(t) {
                            b(e, t);
                        });
                    } catch (t) {
                        b(e, t);
                    }
                }
                function S() {
                    return Q++;
                }
                function R(e) {
                    e[Y] = Q++, e._state = void 0, e._result = void 0, e._subscribers = [];
                }
                function T(e, t) {
                    this._instanceConstructor = e, this.promise = new e(c), this.promise[Y] || R(this.promise), 
                    I(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 
                    0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, 
                    this._enumerate(), 0 === this._remaining && _(this.promise, this._result))) : b(this.promise, L());
                }
                function L() {
                    return new Error("Array Methods must be provided an Array");
                }
                function M() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function D() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                function F(e) {
                    this[Y] = S(), this._result = this._state = void 0, this._subscribers = [], c !== e && ("function" != typeof e && M(), 
                    this instanceof F ? E(this, e) : D());
                }
                var q = void 0, I = q = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, O = 0, k = void 0, W = function(e, t) {
                    V[O] = e, V[O + 1] = t, 2 === (O += 2) && (k ? k(n) : K());
                }, U = "undefined" != typeof window ? window : void 0, C = U || {}, B = C.MutationObserver || C.WebKitMutationObserver, N = "undefined" == typeof self && void 0 !== o && "[object process]" === {}.toString.call(o), H = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, V = new Array(1e3), K = void 0;
                K = N ? function() {
                    return o.nextTick(n);
                } : B ? function() {
                    var e = 0, t = new B(n), r = document.createTextNode("");
                    return t.observe(r, {
                        characterData: !0
                    }), function() {
                        r.data = e = ++e % 2;
                    };
                }() : H ? function() {
                    var e = new MessageChannel();
                    return e.port1.onmessage = n, function() {
                        return e.port2.postMessage(0);
                    };
                }() : r();
                var Y = Math.random().toString(36).substring(16), z = void 0, G = 1, $ = 2, X = new A(), J = new A(), Q = 0;
                return T.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, r = 0; this._state === z && r < e; r++) this._eachEntry(t[r], r);
                }, T.prototype._eachEntry = function(e, t) {
                    var r = this._instanceConstructor, n = r.resolve;
                    if (n === s) {
                        var o = p(e);
                        if (o === a && e._state !== z) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, 
                        this._result[t] = e; else if (r === F) {
                            var i = new r(c);
                            g(i, e, o), this._willSettleAt(i, t);
                        } else this._willSettleAt(new r(function(t) {
                            return t(e);
                        }), t);
                    } else this._willSettleAt(n(e), t);
                }, T.prototype._settledAt = function(e, t, r) {
                    var n = this.promise;
                    n._state === z && (this._remaining--, e === $ ? b(n, r) : this._result[t] = r), 
                    0 === this._remaining && _(n, this._result);
                }, T.prototype._willSettleAt = function(e, t) {
                    var r = this;
                    j(e, void 0, function(e) {
                        return r._settledAt(G, t, e);
                    }, function(e) {
                        return r._settledAt($, t, e);
                    });
                }, F.all = function(e) {
                    return new T(this, e).promise;
                }, F.race = function(e) {
                    var t = this;
                    return new t(I(e) ? function(r, n) {
                        for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(r, n);
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."));
                    });
                }, F.resolve = s, F.reject = function(e) {
                    var t = new this(c);
                    return b(t, e), t;
                }, F._setScheduler = function(e) {
                    k = e;
                }, F._setAsap = function(e) {
                    W = e;
                }, F._asap = W, F.prototype = {
                    constructor: F,
                    then: a,
                    catch: function(e) {
                        return this.then(null, e);
                    }
                }, F.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== i) e = i; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")();
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve());
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast) return;
                    }
                    e.Promise = F;
                }, F.Promise = F, F.defer = function() {
                    var e = {};
                    return e.promise = new F(function(t, r) {
                        e.resolve = t, e.reject = r;
                    }), e;
                }, F;
            });
        }).call(this, n("./node_modules/process/browser.js"), n("./node_modules/webpack/buildin/global.js"));
    },
    "./src/scripts/WechatAppPlayer/src/lib/message.js": function(e, t, r) {
        function n() {
            this._evtObjs = {}, this._outdatedMsgs = {};
        }
        function o() {}
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("./node_modules/babel-runtime/core-js/object/keys.js"));
        n.prototype.on = function(e, t, r) {
            this._evtObjs[e] || (this._evtObjs[e] = []), this._evtObjs[e].push({
                handler: t,
                once: r
            });
            var n = this;
            return function() {
                n.off(e, t);
            };
        }, n.prototype.wait = function(e, t) {
            return this._outdatedMsgs[e] ? (t.apply(null, this._outdatedMsgs[e]), o) : this.on(e, t, !0);
        }, n.prototype.off = function(e, t) {
            var r = this;
            return (e ? [ e ] : (0, i.default)(this._evtObjs)).forEach(function(e) {
                if (t) {
                    var n = [];
                    (r._evtObjs[e] || []).forEach(function(e) {
                        e.handler !== t && n.push(e);
                    }), r._evtObjs[e] = n;
                } else r._evtObjs[e] = [];
            }), this;
        }, n.prototype.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            this._outdatedMsgs[e] = t, (this._evtObjs[e] || []).forEach(function(e) {
                if (!e.once || !e.called) {
                    e.called = !0;
                    try {
                        e.handler && e.handler.apply(null, t);
                    } catch (e) {
                        console.error(e.stack || e.message || e);
                    }
                }
            });
        }, n.prototype.emitAsync = function() {
            var e = arguments, t = this;
            setTimeout(function() {
                t.emit.apply(t, e);
            }, 0);
        }, n.prototype.assign = function(e) {
            var t = this;
            [ "on", "off", "wait", "emit", "emitAsync" ].forEach(function(r) {
                var n = t[r];
                e[r] = function() {
                    return n.apply(t, arguments);
                };
            });
        }, new n().assign(n), e.exports = n;
    },
    "./src/scripts/WechatAppPlayer/src/lib/parse-body.js": function(e, t, r) {
        e.exports = function(e) {
            if ("string" != typeof e) return e;
            e && (e = e.trim()), e && /^(data|QZOutputJson)=/.test(e) && (e = e.replace(/^(data|QZOutputJson)=/, "").replace(/;?$/, ""));
            try {
                return JSON.parse(e);
            } catch (e) {
                throw new Error("parse jsonp body failed");
            }
        };
    },
    "./src/scripts/WechatAppPlayer/src/lib/request.js": function(e, t, r) {
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("./node_modules/babel-runtime/core-js/promise.js")), o = r("./src/scripts/WechatAppPlayer/src/lib/parse-body.js"), i = e.exports = {
            request: function(e) {
                return e.success = function(e) {
                    return e = e || function() {}, function(t) {
                        if (t && 200 == t.statusCode) try {
                            t.data = o(t.data);
                        } catch (e) {}
                        e(t);
                    };
                }(e.success), wx.request(e);
            },
            get: function(e, t) {
                return t = {}, new n.default(function(r, n) {
                    i.request({
                        url: e,
                        data: t.data || {},
                        header: t.header || {},
                        method: "GET",
                        success: function(e) {
                            r(e);
                        },
                        fail: function(e) {
                            n(e);
                        },
                        needlogin: t.needlogin
                    });
                });
            }
        };
    },
    "./src/scripts/WechatAppPlayer/src/module/cache.js": function(e, t, r) {
        e.exports = {
            set: function(e, t, r) {
                wx.setStorageSync("_cache_" + e, {
                    expr: r || 0,
                    date: +new Date(),
                    data: t
                });
            },
            get: function(e) {
                e = "_cache_" + e;
                var t = wx.getStorageSync(e);
                return t ? t.expr && t.expr ? new Date() - (t.date + t.expr) < 0 ? t.data : (wx.removeStorageSync(e), 
                null) : t.data : null;
            },
            del: function(e) {
                e = "_cache_" + e, wx.removeStorageSync(e);
            }
        };
    },
    "./src/scripts/WechatAppPlayer/src/module/reporter/index.js": function(e, t, r) {
        var n = new (r("./src/scripts/WechatAppPlayer/src/lib/message.js"))(), o = r("./src/scripts/WechatAppPlayer/src/module/reporter/report-queue.js");
        o.onReport = function(e) {
            a.emit("report", e);
        };
        var i = r("./src/scripts/WechatAppPlayer/src/module/reporter/report-cache.js"), a = {};
        a.any = function(e) {
            o.push(e);
        }, a.saveState = function() {
            console.log("reporter.js", "saveState"), a.emit("_save");
        }, a.restoreState = function() {
            console.log("reporter.js", "restoreState"), a.emit("_restore");
        }, a.checkState = function() {
            console.log("reporter.js", "checkState"), i.getAll().forEach(o.push), i.del();
        }, a.reportCache = i, n.assign(a), e.exports = a;
    },
    "./src/scripts/WechatAppPlayer/src/module/reporter/report-cache.js": function(e, t, r) {
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("./node_modules/babel-runtime/core-js/object/keys.js")), o = r("./src/scripts/WechatAppPlayer/src/module/cache.js"), i = o.get("tvp_report") || {};
        t.get = function(e) {
            return i[e];
        }, t.set = function(e, t) {
            i[e] = t, o.set("tvp_report", i);
        }, t.del = function(e) {
            e ? delete i[e] : i = {}, o.set("tvp_report", i);
        }, t.getAll = function() {
            return (0, n.default)(i).map(function(e) {
                return i[e];
            });
        };
    },
    "./src/scripts/WechatAppPlayer/src/module/reporter/report-queue.js": function(e, t, r) {
        var n = r("./src/scripts/WechatAppPlayer/lib-inject.js").request;
        e.exports = function(e) {
            function t(e) {
                ~e.reportUrl.indexOf("btrace.qq.com") ? n(e.reportUrl).then(function() {
                    r.release();
                }).catch(function() {
                    r.onReport && r.onReport(e);
                }) : r.onReport && r.onReport(e), s = setTimeout(function() {
                    r.release();
                }, o);
            }
            var r, o = 3e3, i = !1, a = [], s = null;
            return r = {
                release: function(e) {
                    i && e && e != i || (i = !1, clearTimeout(s), a.length && t(a.shift()));
                },
                push: function(e) {
                    i ? a.push(e) : (i = e, t(e));
                }
            };
        }();
    },
    "./src/scripts/WechatAppPlayer/src/util/platform-config.js": function(e, t, r) {
        e.exports = {
            APP_NAME: {
                v4160: "sport.qq.com",
                v4159: "oddjohn",
                v4158: "sherrygu",
                v4157: "sophiachang",
                v4153: "yidiandian",
                v4152: "pvp.wx.com",
                v4151: "pipixia",
                v4150: "wechat_class",
                v4149: "x5.qq.com",
                v4148: "auto.qq.com",
                v4146: "wuxia.qq.com",
                v4145: "dnf.qq.com",
                v4144: "pvp.qq.com",
                v4143: "ke.qq.com",
                v4142: "qnreading",
                v4141: "om",
                v4140: "wx_reader",
                v4139: "news",
                v4138: "video"
            },
            APP_PLATFORM: {
                v4160: "40801",
                v4159: "3810801",
                v4158: "3710801",
                v4157: "3690801",
                v4153: "3500801",
                v4152: "3470801",
                v4151: "3450801",
                v4150: "3310801",
                v4149: "3280801",
                v4148: "3170801",
                v4146: "3140801",
                v4145: "3110801",
                v4144: "3100801",
                v4143: "260801",
                v4142: "570801",
                v4141: "3040801",
                v4140: "60801",
                v4139: "20801",
                v4138: "10801"
            }
        };
    },
    "./src/scripts/WechatAppPlayer/src/video.js": function(e, t, r) {
        var n = r("./src/scripts/WechatAppPlayer/src/module/reporter/index.js"), o = r("./src/scripts/WechatAppPlayer/src/controller-video/index.js"), i = r("./src/scripts/WechatAppPlayer/src/controller-live/index.js"), a = r("./src/scripts/WechatAppPlayer/src/util/platform-config.js").APP_NAME, s = e.exports = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t.from, n = void 0 === t.autoplay || t.autoplay, s = t.defn || "", c = void 0 !== t.noad && !!t.noad, u = "function" == typeof t.getReportParam ? t.getReportParam : "function" == typeof t.getLoginData ? function(e) {
                t.getLoginData(function(t, r) {
                    r.hc_openid = r.openid, delete r.openid, e(t, r);
                });
            } : function(e) {
                return e();
            }, l = e.vid;
            "string" == typeof e && (l = e);
            var d, p = e.cid || "", f = e.sid, h = e.pid;
            return d = l ? o({
                vid: l,
                cid: p,
                from: r,
                defn: s,
                noad: c
            }, {
                getReportParam: function(e) {
                    u(function(t, n) {
                        n && (n.appname = a[r]), e(t, n);
                    });
                }
            }) : i({
                sid: f,
                pid: h,
                from: r,
                defn: s,
                noad: c
            }, {
                getReportParam: function(e) {
                    u(function(t, n) {
                        n && (n.appname = a[r]), e(t, n);
                    });
                }
            }), n && d.start(), d;
        };
        s.on = function(e) {
            "report" == e && (n.off("report"), n.on.apply(n, arguments));
        }, s.release = n.release, s.saveState = n.saveState, s.restoreState = n.restoreState, 
        s.checkState = n.checkState;
    },
    "./src/scripts/constants/apis.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.APP_SERVER = "https://app.sports.qq.com/", t.BASE_SERVER = "https://matchweb.sports.qq.com/", 
        t.TEST_SERVER = "https://prematchweb.sports.qq.com/", t.TEST_APP_SERVER = "http://presportsapp.qq.com/", 
        t.RESOURCE_SERVER = "https://resource.sports.qq.com/", t.RESOURCE_VIDEO_SERVER = "https://app.sports.qq.com/", 
        t.SERVER_FIBA_API = "https://fiba2019.sports.qq.com/", t.MIN_LOADING_TIME = 500, 
        t.WX_PROMISE_ERROR = "Cannot read property 'nodeId' of undefined";
    },
    "./src/scripts/constants/assets.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.DEFAULT_TEAM = "https://mat1.gtimg.com/sports/sports/sport_team_default.png", 
        t.DEFAULT_AVATAR = "https://mat1.gtimg.com/sports/sports/sport_head_default.png", 
        t.basketballColor = {
            1: "#ca1134",
            2: "#00753d",
            3: "#37474f",
            4: "#d1083d",
            5: "#860038",
            6: "#1061ac",
            7: "#0067b3",
            8: "#04529c",
            9: "#1a64b7",
            10: "#cc083c",
            11: "#00245c",
            12: "#1a64b7",
            13: "#fdb827",
            14: "#cc102c",
            15: "#05461d",
            16: "#005183",
            17: "#1a2f54",
            18: "#f2862c",
            19: "#0077bf",
            20: "#0061ae",
            21: "#e76120",
            22: "#ca1134",
            23: "#4a3f99",
            24: "#37474f",
            25: "#0a7ec2",
            26: "#00275e",
            27: "#04398f",
            28: "#d1083d",
            29: "#1a2f54",
            30: "#008da8"
        };
    },
    "./src/scripts/constants/fiba.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.FIBACITY = [ {
            name: "北京",
            id: 1,
            default: !0,
            icon: "/assets/FIBA/city_bj_b@3x.png",
            greyIcon: "/assets/FIBA/city_bj_g@3x.png",
            percent: "0%",
            kemp: !1
        }, {
            name: "上海",
            id: 4,
            default: !1,
            icon: "/assets/FIBA/city_sh_b@3x.png",
            greyIcon: "/assets/FIBA/city_sh_g@3x.png",
            percent: "0%",
            kemp: !0
        }, {
            name: "广州",
            id: 7,
            default: !1,
            icon: "/assets/FIBA/city_gz_b@3x.png",
            greyIcon: "/assets/FIBA/city_gz_g@3x.png",
            percent: "0%",
            kemp: !1
        }, {
            name: "南京",
            id: 5,
            default: !1,
            icon: "/assets/FIBA/city_nj_b@3x.png",
            greyIcon: "/assets/FIBA/city_nj_g@3x.png",
            percent: "0%",
            kemp: !1
        }, {
            name: "武汉",
            id: 8,
            default: !1,
            icon: "/assets/FIBA/city_wh_b@3x.png",
            greyIcon: "/assets/FIBA/city_wh_g@3x.png",
            percent: "0%",
            kemp: !1
        }, {
            name: "深圳",
            id: 2,
            default: !1,
            icon: "/assets/FIBA/city_sz_b@3x.png",
            greyIcon: "/assets/FIBA/city_sz_g@3x.png",
            percent: "0%",
            kemp: !1
        }, {
            name: "佛山",
            id: 6,
            default: !1,
            icon: "/assets/FIBA/city_fs_b@3x.png",
            greyIcon: "/assets/FIBA/city_fs_g@3x.png",
            percent: "0%",
            kemp: !1
        }, {
            name: "东莞",
            id: 3,
            default: !1,
            icon: "/assets/FIBA/city_dg_b@3x.png",
            greyIcon: "/assets/FIBA/city_dg_g@3x.png",
            percent: "0%",
            kemp: !1
        } ], t.MAX_UPLOAD_IMAG = 9, t.MAX_IMAG_SIZE = 10485760, t.MAX_VIDEO_SIZE = 67108864;
    },
    "./src/scripts/constants/game.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.period = {
            0: "未开始",
            1: "进行中",
            2: "已结束",
            3: "延期",
            4: "延期",
            5: "取消"
        }, t.livePeriod = {
            PRE: "0",
            IN: "1",
            END: "2"
        }, t.state = {
            0: "pre-game",
            1: "in-game",
            2: "post-game",
            3: "pre-game-delay",
            4: "in-game-delay",
            5: "cancel-game"
        }, t.liveType = {
            NONE: "0",
            PLAY_BY_PLAY: "1",
            AUDIO: "2",
            VIDEO: "3",
            ALBUM: "4"
        }, t.liveTypeText = {
            0: "",
            1: "图文直播",
            2: "语音直播",
            3: "视频直播",
            4: "视频集锦"
        }, t.gameType = {
            FOOTBALL: "1",
            BASKETBALL: "2",
            OTHER: "3",
            EVENT: "4"
        }, t.leagueType = {
            nba: "100000",
            csl: "208",
            afc: "605",
            ucl: "5",
            pl: "8",
            laliga: "23",
            seriea: "21",
            bundesliga: "22",
            l1: "24",
            cba: "100008",
            others: "100002",
            nfl: "100005",
            ec: "3",
            ac: "128",
            fifawc: "4"
        };
    },
    "./src/scripts/constants/index.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = n(r("./node_modules/babel-runtime/core-js/object/define-property.js")), i = n(r("./node_modules/babel-runtime/core-js/object/keys.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r("./src/scripts/constants/apis.js");
        (0, i.default)(a).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e];
                }
            });
        });
        var s = r("./src/scripts/constants/fiba.js");
        (0, i.default)(s).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e];
                }
            });
        });
        var c = r("./src/scripts/constants/game.js");
        (0, i.default)(c).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e];
                }
            });
        });
        var u = r("./src/scripts/constants/login.js");
        (0, i.default)(u).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return u[e];
                }
            });
        });
        var l = r("./src/scripts/constants/assets.js");
        (0, i.default)(l).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e];
                }
            });
        });
        var d = r("./src/scripts/constants/widget.js");
        (0, i.default)(d).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e];
                }
            });
        });
        var p = r("./src/scripts/constants/storage.js");
        (0, i.default)(p).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return p[e];
                }
            });
        });
    },
    "./src/scripts/constants/login.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.MAIN_LOGIN_MAP = {
            wx: {
                str: "wxminiprogram"
            },
            qq: {
                str: "openqqminiprogram"
            },
            null: {
                str: ""
            }
        };
    },
    "./src/scripts/constants/storage.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_EXPIRE_TIME = t.STORAGE_KEY_PREFIX = t.STORAGE_WHITELIST = void 0;
        var n = r("./package.json");
        t.STORAGE_WHITELIST = [ "newsReadedList", "currentMainLoginType", "onlyShowAttendModalOnce" ], 
        t.STORAGE_KEY_PREFIX = "serverDataStorage-v" + n.version + ": ", t.DEFAULT_EXPIRE_TIME = 30;
    },
    "./src/scripts/constants/widget.js": function(e, t, r) {
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, i = {
            1: {
                tab: "schedule"
            },
            2: {
                tab: "teamSchedule"
            },
            3: {
                tab: "versus"
            },
            4: {
                tab: "rank"
            }
        }, a = o({}, i, {
            "4_2": {
                tab: "goal"
            },
            "4_3": {
                tab: "assist"
            }
        }), s = o({}, i, {
            "4_1_1": {
                tab: "rank"
            },
            "4_1_2": {
                tab: "rank"
            },
            "4_2": {
                tab: "player",
                subTab: "point"
            },
            "4_3": {
                tab: "player",
                subTab: "rebound"
            },
            "4_4": {
                tab: "player",
                subTab: "assist"
            },
            "4_5": {
                tab: "player",
                subTab: "steal"
            },
            "4_6": {
                tab: "player",
                subTab: "blocked"
            }
        }), c = [ {
            path: "point",
            desc: "得分榜"
        }, {
            path: "assist",
            desc: "助攻榜"
        }, {
            path: "rebound",
            desc: "篮板榜"
        }, {
            path: "steal",
            desc: "抢断榜"
        }, {
            path: "blocked",
            desc: "盖帽榜"
        } ];
        t.RANK_TABS_TYPE_MAP = {
            20: {
                path: "player",
                subTabs: c,
                isUseFlex: !0
            },
            61: {
                path: "goal"
            },
            62: {
                path: "assist"
            }
        }, t.WIDGET_DT_MAP = {
            4: a,
            5: a,
            8: a,
            21: a,
            22: a,
            23: a,
            24: a,
            208: a,
            605: a,
            100000: s,
            100008: s
        }, t.COLUMN_ID_TO_SERVICE_TYPE_MAP = {
            100000: 26,
            1: 27,
            23: 28,
            21: 29,
            24: 30,
            22: 31,
            208: 32,
            100008: 33,
            5: 40,
            605: 41
        }, t.TEAM_RANK_MAP = {
            1: {
                fn: "genNBATeamRank",
                tmpl: "srNBATeamRank"
            },
            10: {
                fn: "genSoccerTeamRank",
                tmpl: "srSoccerTeamRank"
            },
            11: {
                fn: "genSoccerCLTeamRank",
                tmpl: "srSoccerCLTeamRank"
            },
            undefined: {
                fn: "genNFLTeamRank",
                tmpl: "srNFLTeamRank"
            }
        };
    },
    "./src/scripts/kDate.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i() {}
        var a = o(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), s = o(n("./node_modules/babel-runtime/core-js/symbol.js"));
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var c = "function" == typeof s.default && "symbol" === e(a.default) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        };
        i.prototype = {
            create: function(e, t, r) {
                return new Date(this.date.getFullYear() + e, this.date.getMonth() + t, this.date.getDate() + r);
            },
            getDate: function(e, t, r) {
                return this.date = this.create(e, t, r), this;
            },
            getNextDay: function() {
                return this.getDate(0, 0, 1);
            },
            getPreDay: function() {
                return this.getDate(0, 0, -1);
            },
            jumpTo: function(e, t, r) {
                return this.date = this.create(e, t, r), this.date;
            },
            jump: function(e, t, r) {
                return f(this.create(e, t, r));
            },
            nextDay: function() {
                return this.jump(0, 0, 1);
            },
            preDay: function() {
                return this.jump(0, 0, -1);
            },
            firstDay: function() {
                return f(this.create(0, 0, 1 - this.date.getDate()));
            },
            lastDay: function() {
                return f(this.create(0, 1, -this.date.getDate()));
            },
            inSameMonthWith: function(e) {
                return this.date.getMonth() === e.date.getMonth();
            },
            earlyThan: function(e) {
                return this.date < e.date;
            },
            isBetween: function(e, t) {
                return e.date <= this.date && this.date <= t.date;
            },
            getWeekFirstDate: function(e) {
                return this.create(0, 0, -this.date.getDay() + {
                    ch: 1,
                    en: 0
                }[e || "en"]);
            },
            getWeekLastDate: function(e) {
                return this.create(0, 0, -this.date.getDay() + {
                    ch: 1,
                    en: 0
                }[e || "en"] + 6);
            },
            equals: function(e) {
                return this.toString("yyyy-MM-dd") === e.toString("yyyy-MM-dd");
            },
            internationalization: function(e, t, r) {
                var n = l;
                return "string" != typeof t && (n = t), n[e][t][r];
            },
            format: function(e, t) {
                var r = this.date, n = r.getFullYear(), o = r.getFullYear(), i = this.internationalization("months", t || "num", r.getMonth()), a = r.getDate(), s = r.getHours(), c = r.getMinutes(), u = r.getSeconds(), l = this.internationalization("weeks", t || "num", r.getDay());
                return e = e.replace(/yyyy/g, n), e = e.replace(/yyy/g, o), e = e.replace(/yy/g, n % 100), 
                void 0 !== t && "num" !== t || (e = (e = (e = (e = (e = e.replace(/MM/g, p(i))).replace(/dd/g, p(a))).replace(/hh/g, p(s))).replace(/mm/g, p(c))).replace(/ss/g, p(u))), 
                e = e.replace(/MM|M/g, i), e = e.replace(/dd|d/g, a), e = e.replace(/hh|h/g, s), 
                e = e.replace(/mm|m/g, c), e = e.replace(/ss|s/g, u), e = e.replace(/w/g, l);
            },
            toString: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "yyyy-MM";
                return this.format(e);
            }
        };
        var u = function(e) {
            return "[object String]" === Object.prototype.toString.call(e);
        }, l = {
            months: {
                num: {
                    0: "1",
                    1: "2",
                    2: "3",
                    3: "4",
                    4: "5",
                    5: "6",
                    6: "7",
                    7: "8",
                    8: "9",
                    9: "10",
                    10: "11",
                    11: "12"
                },
                en: {
                    0: "January",
                    1: "February",
                    2: "March",
                    3: "April",
                    4: "May",
                    5: "June",
                    6: "July",
                    7: "August",
                    8: "September",
                    9: "October",
                    10: "November",
                    11: "December"
                },
                ch: {
                    0: "一月",
                    1: "二月",
                    2: "三月",
                    3: "四月",
                    4: "五月",
                    5: "六月",
                    6: "七月",
                    7: "八月",
                    8: "九月",
                    9: "十月",
                    10: "十一月",
                    11: "十二月"
                }
            },
            weeks: {
                num: {
                    0: "7",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6"
                },
                en: {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday"
                },
                ch: {
                    0: "周日",
                    1: "周一",
                    2: "周二",
                    3: "周三",
                    4: "周四",
                    5: "周五",
                    6: "周六"
                }
            }
        }, d = function() {
            var e = null;
            if (arguments.length > 1 || 0 === arguments.length) ; else if (1 === arguments.length && u(arguments[0])) if (Date.parse) {
                var t = arguments[0].replace(/\d+(\s+)\d+/, function(e, t) {
                    return e.replace(t, "T");
                });
                e = new Date(t), -1 !== t.indexOf("T") && e.setHours(e.getHours() + e.getTimezoneOffset() / 60);
            } else e = new Date(arguments[0].replace(/\-|\-0/g, "/")); else if ("number" == typeof arguments[0]) e = new Date(arguments[0]); else {
                if (!("object" === c(arguments[0]) && arguments[0] instanceof Date)) throw Error("参数错误，不能创建 KDate 对象\n  参数是: " + [].slice.call(arguments).join(","));
                e = arguments[0];
            }
            return e;
        }, p = function(e) {
            return parseInt(e, 10) < 10 ? "0" + e : e + "";
        }, f = function() {
            var e = new i();
            return e.date = d.apply(void 0, arguments), e;
        };
        r.createKDateInstance = f;
    },
    "./src/scripts/utils/account.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = n(r("./node_modules/babel-runtime/core-js/promise.js")), i = n(r("./node_modules/babel-runtime/core-js/is-iterable.js")), a = n(r("./node_modules/babel-runtime/core-js/get-iterator.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.gotoLogin = t.syncGetUserCookieFn = t.syncWXCookieFn = t.getUserInfo = t.openSetting = t.getHasAuth = void 0;
        var s = function() {
            function e(e, t) {
                var r = [], n = !0, o = !1, i = void 0;
                try {
                    for (var s, c = (0, a.default)(e); !(n = (s = c.next()).done) && (r.push(s.value), 
                    !t || r.length !== t); n = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        !n && c.return && c.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return r;
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if ((0, i.default)(Object(t))) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), c = r("./src/scripts/constants/index.js"), u = r("./src/apis/index.js"), l = r("./src/scripts/utils/index.js"), d = function(e) {
            return (0, l.promisifyWxApi)(wx.getSetting)().then(function(t) {
                return t.authSetting[e];
            });
        }, p = function() {
            return d("scope.userInfo");
        }, f = (t.getHasAuth = function() {
            return p().then(function(e) {
                return void 0 !== e;
            });
        }, t.openSetting = function() {
            return (0, l.promisifyWxApi)(wx.openSetting)().then(function(e) {
                return e.authSetting["scope.userInfo"];
            });
        }), h = (t.getUserInfo = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).isAutoAuth, t = void 0 === e || e, r = getApp().globalConf;
            return "wx" === r.currentMainLoginType ? (0, l.promisifyWxApi)(wx.getUserInfo)().then(function(e) {
                return e.userInfo;
            }).catch(function() {
                return t ? f().then(p).catch(function() {
                    return o.default.reject(!1);
                }).then(function(e) {
                    return o.default.reject(e);
                }) : o.default.reject(!1);
            }) : r.storage.load({
                key: u.userApi.getQQBasicInfo.key
            }).then(function(e) {
                var t = e.code, r = e.data;
                if (0 !== t) return o.default.reject(t);
                console.log(r);
                var n = r.nick, i = r.avatar, a = i.spec, s = void 0 === a ? [ 40 ] : a;
                return {
                    nickName: n,
                    avatarUrl: "" + i.headUrl + (s[0] || 40)
                };
            }).catch(function() {
                return (0, l.promisifyWxApi)(wx.showModal)({
                    content: "获取信息失败，是否重新登录？",
                    cancelText: "取消",
                    confirmText: "好的"
                }).then(function(e) {
                    return e.confirm ? h({
                        showToast: !1
                    }) : o.default.reject(!1);
                });
            });
        }, t.syncWXCookieFn = function() {
            return o.default.all([ (0, l.promisifyWxApi)(wx.getUserInfo)(), (0, l.promisifyWxApi)(wx.login)().then(u.wxMiniProgramApi.checkcode) ]).then(function(e) {
                var t = s(e, 2), r = t[0].userInfo, n = t[1].data, i = n.msg, a = void 0 === i ? "" : i, u = n.sig, d = void 0 === u ? "" : u;
                return a + d === "" ? o.default.reject() : {
                    data: (0, l.getCookieStr)({
                        msg: a,
                        sig: d,
                        appid: "wxc3435ec8eb22c84f",
                        userinfo: r,
                        main_login: c.MAIN_LOGIN_MAP.wx.str
                    })
                };
            });
        }, t.syncGetUserCookieFn = function() {
            return o.default.all([ (0, l.promisifyWxApi)(wx.getUserInfo)(), (0, l.promisifyWxApi)(wx.login)().then(u.wxMiniProgramApi.checkcode) ]).then(function(e) {
                var t = s(e, 2), r = t[0].userInfo, n = t[1].data, i = n.msg, a = void 0 === i ? "" : i, u = n.sig, l = void 0 === u ? "" : u;
                return a + l === "" ? o.default.reject() : {
                    msg: a,
                    sig: l,
                    appid: "wxc3435ec8eb22c84f",
                    userinfo: r,
                    main_login: c.MAIN_LOGIN_MAP.wx.str
                };
            });
        }, t.gotoLogin = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).showToast, t = "/pages/login/login";
            if (void 0 === e || e) return wx.showToast({
                title: "请先登录",
                icon: "loading"
            }), setTimeout(function() {
                wx.navigateTo({
                    url: t
                });
            }, 1e3);
            wx.navigateTo({
                url: t
            });
        });
    },
    "./src/scripts/utils/apis.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r;
        }
        var i = n(r("./node_modules/babel-runtime/core-js/promise.js")), a = n(r("./node_modules/babel-runtime/core-js/is-iterable.js")), s = n(r("./node_modules/babel-runtime/core-js/get-iterator.js")), c = n(r("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = c.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, l = function() {
            function e(e, t) {
                var r = [], n = !0, o = !1, i = void 0;
                try {
                    for (var a, c = (0, s.default)(e); !(n = (a = c.next()).done) && (r.push(a.value), 
                    !t || r.length !== t); n = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        !n && c.return && c.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return r;
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if ((0, a.default)(Object(t))) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), d = function() {
            var e = getApp().globalConf, t = e.currentMainLoginType;
            return e.storage.load({
                key: "cookie",
                syncParams: {
                    loginType: t
                },
                expires: 7200
            }).then(function(e) {
                return e.data;
            });
        };
        t.getHeader = function() {
            return d().then(function(e) {
                return {
                    header: {
                        cookie: e
                    }
                };
            });
        }, t.getformHeader = function() {
            return d().then(function(e) {
                return {
                    header: {
                        cookie: e,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                };
            });
        }, t.showError = function(e) {
            var t = l(e, 1)[0], r = t.code, n = t.data, o = t.msg, i = {
                icon: "loading",
                duration: 2e3
            };
            return 999 === r ? wx.showToast(u({}, i, {
                title: "网络异常"
            })) : 2 === r ? wx.showToast(u({}, i, {
                title: "正在重新登录"
            })) : (0 !== r && 4 !== r || !n) && (wx.showToast(u({}, i, {
                icon: "none",
                title: "接口数据异常(" + r + ")"
            })), console.log("code: " + r), console.log(n), console.log("msg", o)), {
                code: r,
                data: n
            };
        };
        t.fetchDataByStorage = function(e) {
            var t = e.key, r = e.syncParams, n = o(e, [ "key", "syncParams" ]);
            return getApp().globalConf.storage.load(u({
                key: t,
                syncParams: r
            }, n)).catch(function(e) {
                return wx.hideLoading(), wx.showToast({
                    icon: "loading",
                    title: "网络异常",
                    duration: 2e3
                }), i.default.reject(e);
            }).then(function(e) {
                var t = e.code, r = void 0 === t ? 0 : t, n = e.data, o = e.msg, a = void 0 === o ? "" : o;
                return 0 === r && n ? n : i.default.reject({
                    message: a
                });
            });
        };
    },
    "./src/scripts/utils/basic.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t, r) {
            return t in e ? (0, l.default)(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r;
            }
            return (0, u.default)(e);
        }
        var s = o(n("./node_modules/babel-runtime/core-js/object/entries.js")), c = o(n("./node_modules/babel-runtime/core-js/promise.js")), u = o(n("./node_modules/babel-runtime/core-js/array/from.js")), l = o(n("./node_modules/babel-runtime/core-js/object/define-property.js")), d = o(n("./node_modules/babel-runtime/core-js/object/assign.js")), p = o(n("./node_modules/babel-runtime/core-js/is-iterable.js")), f = o(n("./node_modules/babel-runtime/core-js/get-iterator.js")), h = o(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), m = o(n("./node_modules/babel-runtime/core-js/symbol.js"));
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.formatDate = r.getObjWithoutUndefined = r.setObjByPath = r.getCookieStr = r.getParamStrFromObj = r.getStrFromObjBySeparator = r.getUrlParams = r.decodeUntilEqual = r.promisifyWxApi = r.tryCatch = void 0;
        var g = "function" == typeof m.default && "symbol" === e(h.default) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof m.default && t.constructor === m.default && t !== m.default.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, v = function() {
            function e(e, t) {
                var r = [], n = !0, o = !1, i = void 0;
                try {
                    for (var a, s = (0, f.default)(e); !(n = (a = s.next()).done) && (r.push(a.value), 
                    !t || r.length !== t); n = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        !n && s.return && s.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return r;
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if ((0, p.default)(Object(t))) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), y = d.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, _ = n("./src/scripts/constants/index.js"), b = (r.tryCatch = function(e) {
            try {
                e();
            } catch (e) {
                if (e.message === _.WX_PROMISE_ERROR) return;
                throw e;
            }
        }, r.promisifyWxApi = function(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new c.default(function(r, n) {
                    e(y({
                        fail: n,
                        success: r
                    }, t));
                });
            };
        }, r.decodeUntilEqual = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = "";
            do {
                t = e, e = decodeURIComponent(t);
            } while (e !== t);
            return e;
        }), j = (r.getUrlParams = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = {};
            return e ? (e.split("&").map(function(e) {
                var r = e.split("="), n = v(r, 2), o = n[0], i = n[1];
                t[o] = b(i);
            }), t) : t;
        }, r.getStrFromObjBySeparator = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "&";
            return function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, s.default)(r).map(function(r) {
                    var n = v(r, 2), o = n[0], i = n[1];
                    return "object" === (void 0 === i ? "undefined" : g(i)) ? e(t)(i) : o + "=" + encodeURIComponent(b(i));
                }).join(t);
            };
        }), w = (r.getParamStrFromObj = j("&"), r.getCookieStr = j("; "), function(e) {
            return e.split(".").map(function(e) {
                return e.split(/\[(.*?)\]/).filter(function(e) {
                    return e;
                });
            }).reduce(function(e, t) {
                return Array.isArray(t) ? [].concat(a(e), a(t)) : [].concat(a(e), [ t ]);
            }, []);
        });
        r.setObjByPath = function(e, t, r) {
            return w(r).reduce(function(r, n, o, i) {
                var a = i.length;
                return void 0 === r[n] && (r[n] = /\d/.test(n) ? [] : {}), o < a - 1 ? r[n] : (r[n] = t, 
                e);
            }, e);
        }, r.getObjWithoutUndefined = function e(t) {
            return (0, s.default)(t).filter(function(e) {
                var t = v(e, 2);
                t[0];
                return null != t[1];
            }).reduce(function(t, r) {
                var n = v(r, 2), o = n[0], a = n[1];
                return y({}, t, i({}, o, "object" === (void 0 === a ? "undefined" : g(a)) ? e(a) : a));
            }, {});
        }, r.formatDate = function(e) {
            var t = e.split(" "), r = v(t, 2), n = r[0], o = r[1], i = n.split("-"), a = v(i, 3);
            a[0];
            return a[1] + "月" + a[2] + "日 " + o.split(":").slice(0, 2).join(":");
        };
    },
    "./src/scripts/utils/business.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r;
        }
        var i = n(r("./node_modules/babel-runtime/core-js/promise.js")), a = n(r("./node_modules/babel-runtime/core-js/object/keys.js")), s = n(r("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getWindowWidth = t.getWindowHeight = t.getWindowSize = t.genScheduleOneMatchData = t.getTargetTimeStr = t.getShareAppMessage = t.getValFromEvent = t.navigateToRealPath = void 0;
        var c = s.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, u = r("./src/app/app.json"), l = r("./src/scripts/constants/index.js"), d = r("./src/scripts/utils/index.js"), p = u.tabBar && u.tabBar.list ? u.tabBar.list.map(function(e) {
            return e.pagePath;
        }) : [], f = p[0] || "pages/index/index";
        t.navigateToRealPath = function(e, t) {
            if (e) {
                var r = (0, a.default)(t).map(function(e) {
                    return e + "=" + t[e];
                }).join("&"), n = "/" + (0, d.decodeUntilEqual)(e) + "?" + r;
                wx.navigateTo({
                    url: n
                });
            }
        }, t.getValFromEvent = function(e) {
            var t = e.detail, r = e.currentTarget;
            return c({}, t, r.dataset);
        };
        t.getShareAppMessage = function(e) {
            var t = e.path, r = void 0 === t ? "" : t, n = e.title, i = void 0 === n ? "" : n, a = e.failFn, s = void 0 === a ? null : a, u = e.options, l = void 0 === u ? null : u, h = e.successFn, m = void 0 === h ? null : h, g = o(e, [ "path", "title", "failFn", "options", "successFn" ]), v = getCurrentPages(), y = v[v.length - 1], _ = y.__route__, b = y.options, j = r || _, w = l || b, A = -1 !== p.indexOf(j), x = A ? (0, 
            d.getParamStrFromObj)(c({}, w, {
                __realPath: ""
            })) : (0, d.getParamStrFromObj)(c({}, w, {
                __realPath: j
            })), P = A ? "/" + j + "?" + x : "/" + f + "?" + x, E = i || "腾讯体育+";
            return console.log("share path: " + P), c({
                path: P,
                title: E,
                fail: function(e) {
                    var t = e.errMsg;
                    console.log("fail: " + t), s && s();
                },
                success: function(e) {
                    var t = e.errMsg;
                    console.log("success: " + t), m && m();
                }
            }, g);
        };
        t.getTargetTimeStr = function(e) {
            var t = (e = new Date(e.replace(/\-/g, "/"))).getTime(), r = new Date();
            r.setHours(12), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0);
            var n = t - r, o = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ][e.getDay()], i = e.getMonth() + 1 + "月" + e.getDate() + "日 " + o;
            return n >= 1296e5 || n < -1296e5 ? r.getFullYear() != e.getFullYear() ? e.getFullYear() + "年 " + i : "" + i : n >= 432e5 ? "明天 " + i : n < -432e5 ? "昨天 " + i : "今天 " + i;
        };
        var h = function(e) {
            var t = e.quarter, r = e.liveType, n = e.liveSource, o = e.livePeriod, i = e.matchPeriod, a = e.quarterTime, s = e.ifHasPlayback, c = e.ifHasHighlights, u = "", l = "", d = "";
            return 2 == +o ? 1 == +s && 1 == +c ? (u = "集锦,回放", l = "pb-hl") : 1 == +c ? (u = "集锦", 
            l = "hl") : 1 == +s ? (u = "回放", l = "pb") : (u = "已结束", l = "done") : 0 == +o ? 1 == +r ? (u = "图文直播", 
            l = "pic") : 3 == +r ? (u = "视频直播", l = "video") : (u = "未开始", l = "not-start") : 1 == +o && (1 != +i && 2 != +i || (d = t + " " + a, 
            1 == +r ? (u = "图文直播", l = "pic") : 3 == +r ? (u = "视频直播", l = "video") : (u = "", 
            l = "none"))), n && (u = n, l = "video"), {
                sourceText: u,
                sourceType: l,
                quarterTimeDesc: d
            };
        }, m = (t.genScheduleOneMatchData = function(e) {
            var t = e.isPay, r = e.liveSource, n = e.matchInfo, o = (n = void 0 === n ? e : n).mid, i = n.quarter, a = n.liveType, s = n.leftGoal, c = n.leftName, u = n.leftBadge, d = n.rightGoal, p = n.rightName, f = n.rightBadge, m = n.matchDesc, g = n.matchType, v = n.startTime, y = n.livePeriod, _ = n.matchPeriod, b = n.quarterTime, j = e.startTimeDesc, w = e.ifHasPlayback, A = e.ifHasHighlights, x = h({
                quarter: i,
                liveType: a,
                liveSource: r,
                livePeriod: y,
                matchPeriod: _,
                quarterTime: b,
                ifHasPlayback: w,
                ifHasHighlights: A
            }), P = x.sourceText, E = x.sourceType, S = x.quarterTimeDesc;
            return {
                mid: o,
                isPay: t,
                isInPlay: 1 == +y,
                leftGoal: s,
                leftName: c,
                leftBadge: u,
                matchDesc: m,
                matchType: g,
                rightGoal: d,
                rightName: p,
                rightBadge: f,
                livePeriod: y,
                sourceText: P,
                sourceType: E,
                startTimeDesc: j || -1 !== [ 3, 4, 5 ].indexOf(+_) ? l.period[_] : v.split(" ")[1].split(":").slice(0, -1).join(":"),
                quarterTimeDesc: S
            };
        }, t.getWindowSize = function() {
            return new i.default(function(e, t) {
                setTimeout(function() {
                    wx.getSystemInfo({
                        success: function(t) {
                            var r = t.windowWidth, n = t.windowHeight;
                            console.log("windowWidth: " + r), console.log("windowHeight: " + n), e({
                                width: r,
                                height: n
                            });
                        },
                        fail: t
                    });
                }, 200);
            });
        });
        t.getWindowHeight = function() {
            return m().then(function(e) {
                return e.height;
            });
        }, t.getWindowWidth = function() {
            return m().then(function(e) {
                return e.width;
            });
        };
    },
    "./src/scripts/utils/fiba.js": function(t, r, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i() {
            return Object.prototype.toString.call(arguments[0]).slice(8, -1).toLowerCase();
        }
        function a(e) {
            return "array" === i(e);
        }
        function s(e) {
            return "object" === i(e);
        }
        var c = o(n("./node_modules/babel-runtime/core-js/json/stringify.js")), u = o(n("./node_modules/babel-runtime/core-js/get-iterator.js")), l = o(n("./node_modules/babel-runtime/core-js/promise.js")), d = o(n("./node_modules/babel-runtime/core-js/symbol/iterator.js")), p = o(n("./node_modules/babel-runtime/core-js/symbol.js"));
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getBannerData = r.fibaReport = r.truncated = r.emojiStrLength = r.getEightCityData = r.merge = r.extractTopic = r.getFibaSig = r.numberFormat = r.timeFormat = void 0;
        var f = "function" == typeof p.default && "symbol" === e(d.default) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof p.default && t.constructor === p.default && t !== p.default.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, h = o(n("./node_modules/js-md5/src/md5.js")), m = n("./src/apis/index.js");
        Date.prototype.Format = function(e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var r in t) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[r] : ("00" + t[r]).substr(("" + t[r]).length)));
            return e;
        };
        r.timeFormat = function(e) {
            if (!e) return "";
            var t = parseInt(new Date().getTime() / 1e3), r = t - e;
            return r < 60 ? "刚刚" : r >= 60 && r < 3600 ? parseInt(r / 60) + "分钟前" : r >= 3600 && r < 86400 ? new Date(1e3 * t).getDate() === new Date(1e3 * e).getDate() ? parseInt(r / 3600) + "小时前" : "昨天 " + new Date(1e3 * e).Format("hh:mm") : r >= 86400 && r < 172800 ? new Date(1e3 * t).getDate() - new Date(1e3 * e).getDate() == 2 ? new Date(1e3 * e).Format("MM月dd日 hh:mm") : "昨天 " + new Date(1e3 * e).Format("hh:mm") : new Date(1e3 * t).getFullYear() - new Date(1e3 * e).getFullYear() >= 1 ? new Date(1e3 * e).Format("yy年MM月dd日 hh:mm") : new Date(1e3 * e).Format("MM月dd日 hh:mm");
        }, r.numberFormat = function(e) {
            return (e = parseInt(e) || 0) >= 1e4 && e / 1e4 ? (e / 1e4).toFixed(1) + "万" : e;
        }, r.getFibaSig = function(e) {
            return (0, h.default)("KfagHX2aTqIsDAcendQLk4DoSiLRyfTM" + e);
        }, r.extractTopic = function(e) {
            if (!(e = e && e.trim() || "")) return e;
            if (0 === e.indexOf("#")) for (var t = 0, r = e.split("##").length; t < r; t++) ;
        }, r.merge = function e(t, r) {
            for (var n in r) i(t[n]) !== i(r[n]) && delete t[n], a(r[n]) ? (t[n] = t[n] ? t[n] : [], 
            e(t[n], r[n])) : s(r[n]) ? (t[n] = t[n] ? t[n] : {}, e(t[n], r[n])) : t[n] = r[n];
        }, r.getEightCityData = function(e) {
            return new l.default(function(t, r) {
                wx.getStorageSync("fibacity") && !e ? t(wx.getStorageSync("fibacity").rawData) : m.communityApi.cityList().then(function(e) {
                    0 == e.code ? (e.data && e.data.forEach(function(e) {
                        e.showGifUrl += "?time=" + new Date().getTime();
                    }), t(e.data)) : r();
                }).catch(function() {
                    r();
                });
            });
        }, r.emojiStrLength = function(e) {
            var t = "", r = !0, n = !1, o = void 0;
            try {
                for (var i, a = (0, u.default)(e); !(r = (i = a.next()).done); r = !0) {
                    i.value;
                    ++t;
                }
            } catch (e) {
                n = !0, o = e;
            } finally {
                try {
                    !r && a.return && a.return();
                } finally {
                    if (n) throw o;
                }
            }
            return t;
        }, r.truncated = function(e, t) {
            var r = "", n = !0, o = !1, i = void 0;
            try {
                for (var a, s = (0, u.default)(e); !(n = (a = s.next()).done) && (r += a.value, 
                !(--t <= 0)); n = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !n && s.return && s.return();
                } finally {
                    if (o) throw i;
                }
            }
            return r;
        }, r.fibaReport = function(e, t, r, n, o, i) {
            return e = "object" === (void 0 === e ? "undefined" : f(e)) ? (0, c.default)(e) : e, 
            i && "object" === (void 0 === i ? "undefined" : f(i)) && (e = "req:" + (0, c.default)(i) + "; " + e), 
            r && (e = "url:" + r + "; " + e), n && n.currentMainLoginType && (e = "currentMainLoginType:" + n.currentMainLoginType + "; " + e), 
            o && (e = "type:" + o + "; " + e), new l.default(function(r, n) {
                var o = "record";
                t && (o = "recordHeader"), m.communityApi[o]({
                    param: e
                }).then(function(e) {
                    0 == e.code ? r(e.data) : n();
                }).catch(function() {
                    n();
                });
            });
        };
        var g = null;
        r.getBannerData = function() {
            return new l.default(function(e, t) {
                g ? e({
                    code: 0,
                    data: g
                }) : m.communityApi.list().then(function(t) {
                    if (0 === t.code) {
                        for (var r in t.data) t.data[r].picUrl += "?time=" + new Date().getTime();
                        g = t.data;
                    }
                    e(t);
                }).catch(function(e) {
                    t();
                });
            });
        };
    },
    "./src/scripts/utils/fp.js": function(e, t, r) {
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r;
            }
            return (0, o.default)(e);
        }
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("./node_modules/babel-runtime/core-js/array/from.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.compose = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return 0 === t.length ? function(e) {
                return e;
            } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments));
                };
            });
        }, t.curry = function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return function() {
                for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                return function(r) {
                    return r.length === t.length ? t.apply(void 0, n(r)) : e(t, r);
                }([].concat(n(r), i));
            };
        }, t.negate = function(e) {
            return function() {
                return !e.apply(void 0, arguments);
            };
        };
    },
    "./src/scripts/utils/index.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = n(r("./node_modules/babel-runtime/core-js/object/define-property.js")), i = n(r("./node_modules/babel-runtime/core-js/object/keys.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r("./src/scripts/utils/fp.js");
        (0, i.default)(a).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e];
                }
            });
        });
        var s = r("./src/scripts/utils/apis.js");
        (0, i.default)(s).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e];
                }
            });
        });
        var c = r("./src/scripts/utils/basic.js");
        (0, i.default)(c).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e];
                }
            });
        });
        var u = r("./src/scripts/utils/kDate.js");
        (0, i.default)(u).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return u[e];
                }
            });
        });
        var l = r("./src/scripts/utils/account.js");
        (0, i.default)(l).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e];
                }
            });
        });
        var d = r("./src/scripts/utils/business.js");
        (0, i.default)(d).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e];
                }
            });
        });
        var p = r("./src/scripts/utils/map.js");
        (0, i.default)(p).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return p[e];
                }
            });
        });
        var f = r("./src/scripts/utils/fiba.js");
        (0, i.default)(f).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (0, o.default)(t, e, {
                enumerable: !0,
                get: function() {
                    return f[e];
                }
            });
        });
    },
    "./src/scripts/utils/kDate.js": function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getYyyyMMdd = t.getYyyyM = t.getMd = t.getFormatTime = void 0;
        var n = r("./src/scripts/kDate.js"), o = t.getFormatTime = function(e) {
            return function(t) {
                return (0, n.createKDateInstance)(t).toString(e);
            };
        };
        t.getMd = o("M月d日"), t.getYyyyM = o("yyyy年M月"), t.getYyyyMMdd = o("yyyy-MM-dd");
    },
    "./src/scripts/utils/map.js": function(e, t, r) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = n(r("./node_modules/babel-runtime/core-js/promise.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getCityIdByName = t.getUserLocation = t.reverseGeocoder = t.checkLocationAuth = void 0;
        var i = n(r("./node_modules/qqmap-wx-jssdk/qqmap-wx-jssdk.min.js")), a = r("./src/scripts/constants/index.js"), s = t.checkLocationAuth = function() {
            return new o.default(function(e, t) {
                wx.getSetting({
                    success: function(r) {
                        r.authSetting["scope.userLocation"] ? e() : wx.authorize({
                            scope: "scope.userLocation",
                            success: function(t) {
                                e();
                            },
                            fail: function(e) {
                                t();
                            }
                        });
                    },
                    fail: function() {
                        t();
                    }
                });
            });
        };
        t.reverseGeocoder = function(e) {
            return new o.default(function(t, r) {
                new i.default({
                    key: "ZE6BZ-V2AA3-CM33Y-YBGHX-S6YW6-SDB6O"
                }).reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(e) {
                        wx.hideLoading(), "query ok" === e.message && e.result ? t({
                            formatted_addresses: e.result.formatted_addresses,
                            address: e.result.address,
                            province: e.result.address_component && e.result.address_component.province,
                            city: e.result.address_component && e.result.address_component.city
                        }) : (r(), wx.showToast({
                            title: "位置获取失败",
                            icon: "none"
                        }));
                    },
                    fail: function(e) {
                        wx.hideLoading(), wx.showToast({
                            title: "位置获取失败",
                            icon: "none"
                        }), r(e);
                    }
                });
            });
        }, t.getUserLocation = function() {
            return new o.default(function(e, t) {
                s().then(function() {
                    wx.showLoading({
                        title: "地理位置获取中",
                        mask: !0
                    }), wx.getLocation({
                        type: "gcj02",
                        success: e,
                        fail: function(e) {
                            wx.hideLoading(), wx.showToast({
                                title: "位置获取失败",
                                icon: "none"
                            }), t(!1);
                        }
                    });
                }).catch(function(e) {
                    t(!1);
                });
            });
        }, t.getCityIdByName = function(e) {
            var t = 0;
            return e = e.replace("市", ""), a.FIBACITY.forEach(function(r) {
                r.name === e && (t = r.id);
            }), t;
        };
    }
} ]);