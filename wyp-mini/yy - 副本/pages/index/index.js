var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = getApp(), e = require("../../utils/hdweapp.js"), i = require("../../utils/paramConfig.js").ParamConfig, o = require("../../utils/request.js").RequestGet, s = null, n = null, r = null, l = null, d = {
    mode: 4,
    position: 0,
    width: 300,
    height: 280
}, u = null, c = i.WECHAT_YY_HOST, g = {
    lastPage: 0,
    page: 2,
    biz: "index",
    moduleId: ""
};

Page({
    data: {
        hasPullReq: !1,
        gotoUrl: !1,
        udbInfo: null,
        roomList: {
            list: []
        },
        systemInfo: null,
        recommendList: {},
        liveData: [],
        navsData: null,
        scrollLeft: 0,
        currentIdx: 0,
        showPush: !1,
        pushData: null,
        isLoading: !0,
        networkTips: null,
        statusBar: {
            title: "YY直播",
            height: a.globalData.systemInfo.statusBarHeight
        },
        modulesName: "",
        isAdError1: !1,
        isAdError2: !1,
        showAdDefault: !1,
        showBaseLine: !1,
        isIndexPage: !0,
        hideMiniAppToast: !1,
        isShowInitLoading: !0
    },
    gotoOtherPrograme: function() {
        wx.setStorageSync("clicked", !0), wx.navigateToMiniProgram({
            appId: "wxd0c69d4a2e2fb8ee"
        });
    },
    adError1: function(t) {
        this.setData({
            isAdError1: !0
        });
    },
    adLoad1: function(t) {
        this.setData({
            isAdError1: !1
        });
    },
    adError2: function(t) {
        this.setData({
            isAdError2: !0
        });
    },
    adLoad2: function(t) {
        this.setData({
            isAdError2: !1
        });
    },
    onRefreshData: function() {
        this.reqLiveData(g.biz);
    },
    onPageScroll: function(t) {
        a.globalData.pullScrollTop = t.scrollTop, this.data.hideMiniAppToast || this.setData({
            hideMiniAppToast: !0
        }), this.lazyLoadImg();
    },
    lazyLoadImg: function() {
        var t = this, e = this.data.roomList.list, i = 2 * a.globalData.systemInfo.windowHeight, o = !1;
        this.data.isLoading || wx.createSelectorQuery().selectAll(".live-list_button").boundingClientRect(function(a) {
            a.forEach(function(t, a) {
                t.top <= i && !e[a].show && (o = !0, e[a].show = !0);
            }), o && t.setData({
                roomList: {
                    list: e
                }
            });
        }).exec();
    },
    hideMiniAppToast: function() {
        this.data.hideMiniAppToast || this.setData({
            hideMiniAppToast: !0
        });
    },
    reqNavsData: function() {
        var t = this, a = i.WECHAT_YY_HOST + "/navs";
        o(a).then(function(a) {
            0 == a.code && a.data.length && (t.setData({
                navsData: a.data,
                isShowInitLoading: !1
            }), t.reqLiveData(t.data.navsData[0].biz));
        });
    },
    reqLiveData: function(i) {
        var n = this;
        clearTimeout(s);
        var r = wx.getStorageSync("udbInfo"), l = "";
        "index" === i ? (l = r && r.yyuid ? c + "/nav/" + i + "/idx?username=" + r.username + "&yyuid=" + r.yyuid + "&udb_oar=" + r.udb_oar : c + "/nav/" + i + "/idx", 
        this.setData({
            isIndexPage: !0
        })) : (l = c + "/nav/" + i + "/idx", this.setData({
            isIndexPage: !1
        })), o(l, d).then(function(o) {
            if (0 == o.code) if (o.data.length) {
                var s = function() {
                    var t = o.data, s = [];
                    if (t.map(function(t) {
                        1005 == t.type && (s = s.concat(t.data), n.setData({
                            modulesName: t.name
                        }), g = {
                            lastPage: t.lastPage,
                            page: 2,
                            biz: i,
                            moduleId: t.id
                        }, t.lastPage && n.setData({
                            showBaseLine: !0
                        }));
                    }), !s.length) return n.noDataTips("没数据"), {
                        v: void 0
                    };
                    for (var r = 0, l = (s = n.arrFormate(s)).length >= 10 ? 10 : s.length - 1; r < l; r++) {
                        var d = Math.floor(Math.random() * l) + 1, c = s[r];
                        s[d].following || c.following || (s[r] = s[d], s[d] = c);
                    }
                    var h = "";
                    s[1] && s[1].following && (h = s[1].uid + "_" + s[1].ssid + "_1_recommend"), s.forEach(function(t, a) {
                        if (t.aiTagId && !t.following) {
                            var e = 1 == t.aiTagId ? "dance" : "sing";
                            h = h + "#" + t.ssid + "_" + a + "_" + e;
                        }
                    });
                    var f = wx.getStorageSync("visited") || [], p = 0;
                    if (f.length) for (var m = 0, w = s.length; m < w && "break" !== function(t, a) {
                        if (f.some(function(a) {
                            return a.sid === s[t].sid;
                        }) && (p++, s[t]._isvisited = !0, 1 == t && s[t].following || (h = h + "#" + s[t].uid + "_" + s[t].ssid + "_" + t + "_visited")), 
                        2 == p) return "break";
                    }(m); m++) ;
                    "index" === i && e.event({
                        id: "10007",
                        label: "0001",
                        params: {
                            key1: "recommend",
                            key2: h
                        }
                    }), n.setData({
                        roomList: {
                            list: s
                        },
                        recommendList: {
                            list: s.slice(0, 10)
                        },
                        liveData: t,
                        isLoading: !1,
                        networkTips: null
                    }), n.lazyLoadImg(), a.globalData.changeList = s, u && clearTimeout(u), u = setTimeout(function() {
                        n.setData({
                            showAdDefault: !0
                        });
                    }, 2e3);
                }();
                if ("object" === (void 0 === s ? "undefined" : t(s))) return s.v;
            } else n.noDataTips("没数据"); else n.noDataTips("没数据");
            n.setData({
                hasPullReq: !1
            }), wx.hideLoading();
        }).catch(function() {
            n.noDataTips("网络异常，请稍后重试");
        }), s = setTimeout(function() {
            n.data.roomList && n.data.roomList.list.length ? clearTimeout(s) : n.noDataTips("网络异常，请稍后重试");
        }, 8e3);
    },
    noDataTips: function(t) {
        wx.hideLoading(), this.setData({
            networkTips: t,
            isLoading: !1
        });
    },
    reqModuleData: function() {
        var t = this, e = c + "/nav/" + g.biz + "/idx/" + g.moduleId + "?page=" + g.page;
        o(e, d).then(function(e) {
            var i = e.data && e.data.data || [];
            if (0 == e.code && i.length) {
                var o = t.data.roomList.list.concat(i);
                o = t.arrFormate(o), t.setData({
                    roomList: {
                        list: o
                    }
                }), g.page = g.page + 1, g.lastPage = e.data.lastPage, a.globalData.changeList = i, 
                e.data.lastPage && t.setData({
                    showBaseLine: !0
                });
            }
        });
    },
    getMoreModule: function() {
        !g.lastPage && g.page <= 3 ? this.reqModuleData() : this.data.showBaseLine || this.setData({
            showBaseLine: !0
        });
    },
    arrFormate: function(t) {
        t.length % 2 != 0 && (t = t.slice(0, t.length - 1));
        var a = [];
        return t.map(function(t, e) {
            var i = {};
            i = {
                sid: t.sid,
                ssid: t.ssid,
                uid: t.uid,
                img: t.img,
                snapshot: t.snapshot,
                users: t.users,
                desc: t.desc,
                name: t.name,
                _isvisited: t._isvisited || !1,
                following: t.following || !1,
                aiTagId: t.aiTagId || !1,
                linkMic: t.linkMic,
                show: !1
            }, a[e] = i;
        }), a;
    },
    selectNavs: function(t) {
        var i = this;
        this.setData({
            networkTips: null,
            isLoading: !0,
            liveData: [],
            showBaseLine: !1,
            showAdDefaultTpl: !1,
            "roomList.list": []
        }), clearTimeout(s), wx.showLoading();
        var o = t.currentTarget.dataset.biz, n = t.currentTarget.offsetLeft;
        e.event({
            id: "10001",
            label: "0005",
            params: {
                key1: o
            }
        }), n > a.globalData.systemInfo.windowWidth / 2 ? this.setData({
            scrollLeft: n - a.globalData.systemInfo.windowWidth / 2 + 36
        }) : this.setData({
            scrollLeft: 0
        }), this.setData({
            currentIdx: t.currentTarget.dataset.index
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 10
        }), r && clearTimeout(r), r = setTimeout(function() {
            i.reqLiveData(o);
        }, 500);
    },
    getuserinfo: function(t) {
        var i = this, o = t.target.dataset.url, s = t.target.dataset.type, r = t.target.dataset.sid, l = t.target.dataset.ssid, d = t.target.dataset.following, u = t.target.dataset.modules, c = t.target.dataset.isvisited, h = t.target.dataset.aiTagId, f = t.target.dataset.index, p = t.target.dataset.uid, m = void 0, w = void 0;
        this.setData({
            hideMiniAppToast: !0
        }), 0 === u && (w = "recommend"), "banner" == s ? e.event({
            id: "10001",
            label: "0012"
        }) : "push" == s ? e.event({
            id: "10002",
            label: "0001"
        }) : e.event({
            id: "10004",
            label: "0001",
            params: {
                key1: r,
                key2: l,
                key3: g.biz
            }
        }), d && 0 === u ? m = "following" : !d && c && 0 === u ? m = "isvisited" : d && c && h && 0 === u && (m = 1 == h ? "dance" : "sing"), 
        m && e.event({
            id: "10007",
            label: "0002",
            params: {
                key1: w,
                key2: p,
                key3: r,
                key4: l,
                key5: f,
                key6: m
            }
        }), n && clearTimeout(n), n = setTimeout(function() {
            i.setData({
                gotoUrl: !1
            });
        }, 3e3), this.data.gotoUrl ? wx.getLogManager(1).warn("阻止多次跳转") : (this.setData({
            gotoUrl: !0
        }), a.globalData.changeIndex = t.target.dataset.index, this.setData({
            showPush: !1
        }), this.redirectToRoom(o));
    },
    redirectToRoom: function(t) {
        if (!t) return !1;
        wx.navigateTo({
            url: t
        });
    },
    submitForm: function(t) {
        l = t.detail.formId;
    },
    closePush: function() {
        this.setData({
            showPush: !1
        }), e.event({
            id: "10002",
            label: "0002"
        });
    },
    showPushDialog: function() {
        var t = this, a = wx.getStorageSync("udbInfo"), e = a && a.yyuid || 0, s = i.WECHAT_YY_HOST + "/ad?uid=" + e;
        o(s).then(function(a) {
            if (a && 0 == a.code && a.data) {
                if (500 == +a.data.urlType && "yy://123" == a.data.url) {
                    var e = a.data;
                    wx.setStorageSync("showpush", !0);
                    var i = wx.getStorageSync("pushed"), o = wx.getStorageSync("clicked");
                    if (i || o) return;
                    return wx.setStorageSync("pushed", !0), void t.setData({
                        showPush: !0,
                        pushData: e
                    });
                }
                var s = a.data, n = wx.getStorageSync("pushRecord") || "";
                n.id != s.id ? (t.setData({
                    showPush: !0
                }), s.counts = 1, t.setPushStorage(s)) : n.counts < s.times ? (t.setData({
                    showPush: !0
                }), t.updatePushcounts()) : t.setData({
                    showPush: !1
                });
            }
        });
    },
    updatePushcounts: function() {
        var t = wx.getStorageSync("pushRecord");
        t.counts++, this.setPushStorage(t);
    },
    setPushStorage: function(t) {
        wx.removeStorageSync({
            key: "pushRecord"
        }), wx.setStorageSync("pushRecord", t), 100 == t.urlType ? t.url = "/pages/room/room?" + t.url : t.url = "/pages/webView/webView?" + t.url, 
        this.setData({
            pushData: t
        });
    },
    onHiidoEvent: function(t) {
        var a = t.detail;
        e.event(a);
    },
    onLoad: function(t) {
        t && t.url && wx.navigateTo({
            url: decodeURIComponent(t.url)
        }), this.showPushDialog(), this.reqNavsData(), e.Page.init(), a.reportChnInfo(t);
    },
    onShow: function() {
        console.log(__wxConfig.envVersion, 333333333), console.log("展示缓存信息", wx.getStorageSync("clicked"), wx.getStorageSync("pushed")), 
        wx.getStorageSync("clicked") && this.setData({
            showPush: !1
        }), a.getOpenId(), this.setData({
            udbInfo: wx.getStorageSync("udbInfo") || null,
            gotoUrl: !1,
            hideMiniAppToast: !1
        }), clearInterval(n);
    },
    onHide: function() {
        this.setData({
            hideMiniAppToast: !1
        }), this.clearAllTimeout();
    },
    onUnload: function() {
        this.clearAllTimeout();
    },
    clearAllTimeout: function() {
        n && clearTimeout(n), s && clearTimeout(s), r && clearTimeout(r);
    },
    onShareAppMessage: function() {
        return {
            title: "YY直播",
            path: "/pages/index/index?father_openId=" + (wx.getStorageSync("HDSDK_openid") || "") + "&origin_channel=" + (wx.getStorageSync("origin_channel") || "wx_miniapp")
        };
    },
    onTabItemTap: function() {
        e.event({
            id: "10003",
            label: "0001"
        });
    },
    onReachBottom: function() {
        this.getMoreModule();
    }
});