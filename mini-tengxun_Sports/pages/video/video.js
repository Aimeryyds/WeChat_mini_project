(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/video/video" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=script&lang=js&": function(e, t, i) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function n(e, t, i) {
            return t in e ? (0, c.default)(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        function s(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                return i;
            }
            return (0, d.default)(e);
        }
        var a = o(i("./node_modules/babel-runtime/core-js/set.js")), r = o(i("./node_modules/babel-runtime/core-js/promise.js")), d = o(i("./node_modules/babel-runtime/core-js/array/from.js")), c = o(i("./node_modules/babel-runtime/core-js/object/define-property.js")), l = o(i("./node_modules/babel-runtime/core-js/is-iterable.js")), u = o(i("./node_modules/babel-runtime/core-js/get-iterator.js")), p = o(i("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m = p.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
            }
            return e;
        }, v = function() {
            function e(e, t) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var a, r = (0, u.default)(e); !(o = (a = r.next()).done) && (i.push(a.value), 
                    !t || i.length !== t); o = !0) ;
                } catch (e) {
                    n = !0, s = e;
                } finally {
                    try {
                        !o && r.return && r.return();
                    } finally {
                        if (n) throw s;
                    }
                }
                return i;
            }
            return function(t, i) {
                if (Array.isArray(t)) return t;
                if ((0, l.default)(Object(t))) return e(t, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), h = o(i("./src/scripts/WechatAppPlayer/index.js")), f = i("./src/apis/index.js"), g = i("./src/scripts/utils/index.js"), b = null, x = 0;
        t.default = {
            data: function() {
                return {
                    cid: "",
                    vid: "",
                    title: "",
                    nextOne: {
                        vid: "",
                        top: 0
                    },
                    videoList: [],
                    isAutoPlay: !1,
                    lastVideoIdx: 0,
                    tvpUrl: "",
                    tvpTop: -1e3,
                    tvpHeight: 225,
                    tvpErrStr: "",
                    fullScreen: !1,
                    scrollTop: 0,
                    preScrollTop: 0,
                    hasTouchEnd: !0,
                    contentHeight: 1e3,
                    comment: {
                        total: 0,
                        cTitle: "",
                        isHide: !0,
                        targetId: "",
                        scrollTop: 0,
                        indexscore: 0,
                        commentMap: {},
                        commentIds: [],
                        animateData: {},
                        hasValue: !0
                    },
                    reply: {
                        total: 0,
                        isHide: !0,
                        commentId: "",
                        replyList: [],
                        scrollTop: 0,
                        animateData: {}
                    },
                    hasPageReset: !0,
                    lastItemHeight: 350
                };
            },
            computed: {
                curVidIdx: function() {
                    return this.findVidIndex(this.vid);
                },
                curVidTop: function() {
                    return this.itemHeight * this.curVidIdx;
                },
                popupHeight: function() {
                    return this.contentHeight - this.tvpHeight;
                },
                tvpClassStr: function() {
                    return this.comment.isHide ? "" : "show-popup";
                },
                tvpStyleStr: function() {
                    return this.comment.isHide ? "top: " + this.tvpTop + "px;" : "height: " + this.contentHeight + "px;";
                },
                contentStyleStr: function() {
                    return this.comment.isHide ? "" : "overflow: hidden; height: " + this.contentHeight + "px;";
                },
                hasMoreVideo: function() {
                    return this.fullVideoList || (this.fullVideoList = []), this.lastVideoIdx < this.fullVideoList.length;
                },
                hasMoreComment: function() {
                    return this.comment.hasValue && this.comment.commentIds.length < this.comment.total;
                }
            },
            onLoad: function(e) {
                var t = this, i = e.vid, o = void 0 === i ? "" : i, n = e.cid, s = void 0 === n ? "" : n;
                this.setIsAutoPlay(), this.cid = s, (0, g.getWindowSize)().then(function(e) {
                    var i = e.width, o = e.height;
                    t.tvpHeight = Math.floor(.57 * i), t.contentHeight = o;
                }), this.init({
                    vid: o,
                    cid: s
                });
            },
            methods: {
                noop: function() {},
                onTvpFullScreen: function(e) {
                    var t = (0, g.getValFromEvent)(e).fullScreen;
                    this.fullScreen = t;
                },
                init: function(e) {
                    var t = this, i = e.vid, o = void 0 === i ? "" : i, n = e.cid, a = void 0 === n ? "" : n, r = {
                        key: f.videoApi.detail.key,
                        syncParams: {
                            cid: a,
                            vid: o
                        }
                    };
                    (0, g.fetchDataByStorage)(r).then(function(e) {
                        var i = e.video, n = e.cover, a = (n = void 0 === n ? {} : n).videos, r = void 0 === a ? [] : a, d = n.title, c = void 0 === d ? i.title : d;
                        t.title = c, i ? t.fullVideoList = [ i ].concat(s(r.filter(function(e) {
                            var t = e.vid;
                            return o !== t;
                        }))) : (t.fullVideoList = r, o = r[0].vid), t.getMoreVideo(), t.setNextVid({
                            vid: o,
                            top: 0
                        }), "" === t.cid && t.onTapShowComment({
                            currentTarget: {
                                dataset: {
                                    targetid: i.targetId
                                }
                            }
                        });
                    }).catch(function(e) {
                        var t = e.message;
                        console.error(t), wx.showToast({
                            title: t,
                            icon: "loading"
                        });
                    });
                },
                getMoreComment: function() {
                    if (this.hasMoreComment) {
                        var e = {
                            pageflag: 1,
                            indexscore: this.comment.indexscore
                        };
                        this.getComments(e);
                    }
                },
                getMoreVideo: function() {
                    this.lastVideoIdx += 10;
                    var e = this.fullVideoList.slice(this.lastVideoIdx - 10, this.lastVideoIdx);
                    this.videoList = this.videoList.concat(e);
                },
                onReachBottom: function() {
                    this.hasMoreVideo && this.comment.isHide && this.getMoreVideo();
                },
                findVidIndex: function(e) {
                    return this.videoList.findIndex(function(t) {
                        var i = t.vid;
                        return e === i;
                    });
                },
                onTouchStart: function() {
                    this.hasTouchEnd = !1, this.nextOne.vid = "";
                },
                onTouchEnd: function() {
                    this.hasTouchEnd = !0, this.nextOne.vid && this.setNextVid(this.nextOne);
                },
                setNextVid: function(e) {
                    var t = e.vid, i = e.top;
                    if (console.log("vid", t), console.log("top", i), !this.hasTouchEnd) return this.nextOne.vid = t, 
                    void (this.nextOne.top = i);
                    this.nextOne.vid = "", this.createTvpVideo(t, i);
                },
                onPageScroll: function(e) {
                    var t = this, i = e.scrollTop;
                    if (this.comment.isHide) if (this.hasPageReset) {
                        var o = Date.now(), n = function() {
                            return t.setVideoHeightAndScrollTopList().then(function() {
                                return t.activeVid(i);
                            });
                        };
                        if (o - x < 600) return clearTimeout(b), void (b = setTimeout(n, 300));
                        x = o, n();
                    } else this.hasPageReset = !0;
                },
                activeVid: function(e) {
                    var t = e - this.scrollTop > 0;
                    this.scrollTop = e;
                    var i = 0, o = this.videoList.length - 1;
                    if (t) {
                        var n = this.__videoScrollTopList__.findIndex(function(t) {
                            return t > e;
                        }), s = -1 === n ? o : n, a = this.__videoHeightList__[s], r = this.__videoScrollTopList__[s] - e > .85 * a;
                        i = Math.min(o, r ? s - 1 : s);
                    } else {
                        var d = this.__videoScrollTopList__.findIndex(function(t) {
                            return t > e;
                        });
                        i = d < 0 ? o : d;
                    }
                    console.log("activeVidIdx", i);
                    var c = this.videoList[i].vid, l = this.__videoScrollTopList__[i];
                    c !== this.vid ? this.setNextVid({
                        vid: c,
                        top: l
                    }) : this.nextOne.vid = "";
                },
                getRectAndSrollOffset: function(e) {
                    return new r.default(function(t) {
                        wx.createSelectorQuery().select(e).boundingClientRect().selectViewport().scrollOffset().exec(t);
                    });
                },
                setVideoHeightAndScrollTopList: function() {
                    var e = this;
                    return new r.default(function(t) {
                        wx.createSelectorQuery().selectAll(".js-video").boundingClientRect().exec(function(i) {
                            var o = v(i, 1)[0], n = (void 0 === o ? [] : o).map(function(e) {
                                var t = e.height;
                                return void 0 === t ? "" : t;
                            }).filter(function(e) {
                                return e;
                            });
                            e.__videoHeightList__ = n, e.lastItemHeight = n[n.length - 1], e.__videoScrollTopList__ = [];
                            var s = 0;
                            e.__videoHeightList__.forEach(function(t) {
                                e.__videoScrollTopList__.push(s), s += t;
                            }), t();
                        });
                    });
                },
                onTapCover: function(e) {
                    var t = this, i = e.currentTarget.dataset.vid;
                    this.hasPageReset = !1, this.getRectAndSrollOffset("#tua" + i).then(function(e) {
                        var o = v(e, 2), n = o[0], s = n.top, a = n.height, r = o[1].scrollTop, d = t.findVidIndex(i), c = (t.contentHeight - a) / 2, l = 0 === d ? 0 : r + s - c, u = 0 === d ? 0 : l + c;
                        t.scrollTop = l, wx.pageScrollTo({
                            scrollTop: l
                        }), t.createTvpVideo(i, u);
                    });
                },
                onTapShowAllReply: function(e) {
                    var t = this, i = e.currentTarget.dataset, o = i.targetid, n = i.commentid;
                    this.reply.commentId = n;
                    var s = {
                        key: f.commentApi.getRep.key,
                        syncParams: {
                            targetId: o,
                            commentId: n
                        }
                    };
                    (0, g.fetchDataByStorage)(s).then(function(e) {
                        var i = e.total, o = e.comments;
                        t.reply.total = i, t.reply.replyList = o.map(function(e) {
                            var i = e.id, o = e.up, n = e.time, s = e.content, a = e.userinfo, r = a.head, d = a.nick, c = e.replyuser;
                            return {
                                id: i,
                                up: o,
                                timeStr: t.formatTime(n),
                                content: s,
                                userInfo: {
                                    head: r,
                                    nick: d
                                },
                                replyUser: "回复 " + c + ": "
                            };
                        });
                    }).catch(function(e) {
                        var t = e.message;
                        console.error(t), wx.showToast({
                            title: t,
                            icon: "loading"
                        });
                    }), this.animateReplyPopup();
                },
                getComments: function(e) {
                    var t = this, i = e.pageflag, o = void 0 === i ? 0 : i, n = e.targetId, s = void 0 === n ? this.comment.targetId : n, r = e.indexscore, c = void 0 === r ? 0 : r, l = {
                        key: f.commentApi.comment.key,
                        syncParams: {
                            pageflag: o,
                            targetId: s,
                            indexscore: c
                        }
                    };
                    return (0, g.fetchDataByStorage)(l).then(function(e) {
                        var i = e.title, o = void 0 === i ? "全部评论" : i, n = e.total, r = void 0 === n ? 0 : n, c = e.comment, l = (c = void 0 === c ? {} : c).common, u = void 0 === l ? {} : l, p = c.commentIds, v = void 0 === p ? [] : p;
                        if (t.comment.total = r, t.comment.cTitle = o, v.length) {
                            var h = v[v.length - 1], f = u[h] || {};
                            t.comment.indexscore = f.indexscore || 0;
                        } else t.comment.hasValue = !1;
                        var g = v.filter(function(e) {
                            return "0" == u[e].parent;
                        });
                        t.comment.targetId === s ? (t.comment.commentIds = (0, d.default)(new a.default(t.comment.commentIds.concat(g))), 
                        t.comment.commentMap = m({}, t.comment.commentMap, t.mapCommentIds2DataMap(u, v))) : (t.comment.hasValue = !0, 
                        t.comment.targetId = s, t.comment.commentIds = g, t.comment.commentMap = t.mapCommentIds2DataMap(u, v)), 
                        v.filter(function(e) {
                            return "0" != u[e].parent;
                        }).forEach(function(e) {
                            var i = u[e].parent;
                            t.comment.commentMap[i].children.push(e);
                        });
                    });
                },
                mapCommentIds2DataMap: function(e, t) {
                    var i = this;
                    return t.map(function(t) {
                        var o = e[t], n = o.up, s = o.time, a = o.repnum, r = o.content, d = o.userinfo, c = d.head, l = d.nick, u = o.replyuser, p = void 0 === u ? "" : u;
                        return {
                            id: t,
                            up: n,
                            repnum: a,
                            timeStr: i.formatTime(s),
                            content: r,
                            userInfo: {
                                head: c,
                                nick: l
                            },
                            children: [],
                            replyDesc: p ? l + " 回复 " + p + ": " : l + ": "
                        };
                    }).reduce(function(e, t) {
                        return m({}, e, n({}, t.id, t));
                    }, {});
                },
                onTapShowComment: function(e) {
                    var t = e.currentTarget.dataset.targetid;
                    this.getComments({
                        targetId: t
                    }).then(this.animateCommentPopup);
                },
                formatTime: function(e) {
                    var t = 1e3 * e;
                    return t ? new Date(t).toLocaleString() : "";
                },
                animatePopup: function(e) {
                    var t = this, i = wx.createAnimation({
                        delay: 0,
                        duration: 300,
                        timingFunction: "ease-in-out"
                    }), o = this[e].isHide, n = 2 * this.popupHeight, s = o ? n : 0, a = o ? 0 : n;
                    return i.translateY(s).step(), this[e].animateData = i.export(), new r.default(function(n, s) {
                        setTimeout(function() {
                            i.translateY(a).step(), t[e].isHide = !o, t[e].animateData = i.export(), n();
                        }, 300);
                    });
                },
                animateReplyPopup: function() {
                    var e = this;
                    this.animatePopup("reply").then(function() {
                        e.reply.isHide || (e.reply.scrollTop -= 1);
                    });
                },
                animateCommentPopup: function() {
                    var e = this;
                    this.hasPageReset = !1, this.comment.isHide && (this.preScrollTop = this.scrollTop), 
                    this.animatePopup("comment").then(function() {
                        e.comment.isHide ? (e.scrollTop = e.preScrollTop, wx.pageScrollTo({
                            duration: 0,
                            scrollTop: e.scrollTop
                        })) : e.comment.scrollTop -= 1;
                    });
                },
                createTvpVideo: function(e, t) {
                    var i = this;
                    e !== this.vid && (this.TvpVideo && this.TvpVideo.stop(), this.TvpVideo = (0, h.default)(e, {
                        from: "v4160",
                        getReportParam: function(e) {
                            e(null, {
                                hc_openid: "123",
                                rmd: "hehe"
                            });
                        }
                    }), this.TvpVideo.on("contentchange", function(o) {
                        var n = o.currentContent;
                        n && (i.vid = e, i.tvpUrl = n.url, i.tvpTop = t);
                    }), this.TvpVideo.on("error", function(o) {
                        console.log("直播错误", o), i.vid = e, i.tvpTop = t, i.tvpErrStr = o.message || "您当前的环境无法播放，请在腾讯体育客户端中观看";
                    }));
                },
                setIsAutoPlay: function() {
                    var e = this;
                    wx.getNetworkType({
                        success: function(t) {
                            "wifi" === t.networkType && (e.isAutoPlay = !0);
                        }
                    });
                },
                __onTvpPlay: function() {
                    this.TvpVideo && this.TvpVideo.onContentPlay();
                },
                __onTvpPause: function() {
                    this.TvpVideo && this.TvpVideo.onContentPause();
                },
                __onTvpEnded: function() {
                    if (this.TvpVideo && this.TvpVideo.onContentEnd(), this.comment.isHide && !this.fullScreen) {
                        var e = this.curVidIdx + 1;
                        if (e !== this.videoList.length) {
                            var t = this.videoList[e].vid;
                            this.onTapCover({
                                currentTarget: {
                                    dataset: {
                                        vid: t
                                    }
                                }
                            });
                        }
                    }
                },
                __onTvpTimeupdate: function(e) {
                    this.TvpVideo && this.TvpVideo.onContentTimeupdate(null, e);
                },
                __onTvpError: function(e) {
                    var t = e.currentTarget, i = e.detail;
                    -1 != +t.dataset.contentid && -1 == i.errMsg.indexOf("updateVideoPlayer") && this.TvpVideo && this.TvpVideo.onContentError(null, e);
                },
                onShareAppMessage: function(e) {
                    var t = e.target, i = (t = void 0 === t ? {} : t).dataset, o = (i = void 0 === i ? {} : i).vid, n = void 0 === o ? this.vid : o, s = i.cid, a = void 0 === s ? this.cid : s, r = i.title, d = void 0 === r ? this.title : r, c = i.url;
                    return (0, g.getShareAppMessage)({
                        title: "【视频】" + d,
                        options: {
                            vid: n,
                            cid: a
                        },
                        imageUrl: c
                    });
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=custom&index=0&blockType=config": function(e, t, i) {
        e.exports = i.p + "pages/video/video.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=style&index=0&lang=scss&": function(e, t, i) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=template&id=050bf91a&lang=wxml&": function(e, t, i) {
        i.r(t), i.d(t, "render", function() {
            return o;
        }), i.d(t, "staticRenderFns", function() {
            return n;
        });
        var o = function() {}, n = [];
        o._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/video/Video.vue": function(e, t, i) {
        i.r(t);
        var o = i("./src/pages/video/Video.vue?vue&type=template&id=050bf91a&lang=wxml&"), n = i("./src/pages/video/Video.vue?vue&type=script&lang=js&");
        for (var s in n) "default" !== s && function(e) {
            i.d(t, e, function() {
                return n[e];
            });
        }(s);
        i("./src/pages/video/Video.vue?vue&type=style&index=0&lang=scss&");
        var a = i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = i("./src/pages/video/Video.vue?vue&type=custom&index=0&blockType=config"), d = Object(a.default)(n.default, o.render, o.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/pages/video/Video.vue", t.default = d.exports;
    },
    "./src/pages/video/Video.vue?vue&type=custom&index=0&blockType=config": function(e, t, i) {
        i.r(t);
        var o = i("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=custom&index=0&blockType=config"), n = i.n(o);
        for (var s in o) "default" !== s && function(e) {
            i.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = n.a;
    },
    "./src/pages/video/Video.vue?vue&type=script&lang=js&": function(e, t, i) {
        i.r(t);
        var o = i("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=script&lang=js&"), n = i.n(o);
        for (var s in o) "default" !== s && function(e) {
            i.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = n.a;
    },
    "./src/pages/video/Video.vue?vue&type=style&index=0&lang=scss&": function(e, t, i) {
        i.r(t);
        var o = i("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=style&index=0&lang=scss&"), n = i.n(o);
        for (var s in o) "default" !== s && function(e) {
            i.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = n.a;
    },
    "./src/pages/video/Video.vue?vue&type=template&id=050bf91a&lang=wxml&": function(e, t, i) {
        i.r(t);
        var o = i("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/video/Video.vue?vue&type=template&id=050bf91a&lang=wxml&");
        i.d(t, "render", function() {
            return o.render;
        }), i.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    "./src/pages/video/index.js": function(e, t, i) {
        var o = i("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(i("./src/pages/video/Video.vue"));
        (0, o.TuaPage)(n.default);
    },
    19: function(e, t, i) {
        e.exports = i("./src/pages/video/index.js");
    }
}, [ [ 19, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);