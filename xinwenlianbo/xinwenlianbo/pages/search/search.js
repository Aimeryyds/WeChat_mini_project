function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = "", s = wx.getBackgroundAudioManager(), o = require("../../utils/audioStorage.js");

Page({
    data: {
        hot_url: "https://m.cctv.com/wxapplianbo/01/sousuodata/index.json",
        search_url: "https://so.cntv.cn/service/lianbo_search.php?",
        xiala_url: "https://so.cntv.cn/service/lianbo_suggest.php?type=lianbo&format=JSON",
        isSencondOnshow: !1,
        totalnum: 0,
        totalPage: 0,
        format: "json",
        page: 1,
        pagesize: 20,
        old_qtext: "",
        qtext: "",
        objtype: "新闻联播",
        sort: "relevance",
        videotime: "-1",
        highlight: "0",
        inputFocus: !0,
        searchHotShow: !0,
        searchHistoryShow: !0,
        searchHistorys: [],
        showSearchList: !1,
        searchCancelShow: !1,
        currentTab: 0,
        searchlists: [],
        objtype_flag: 0,
        scrollviewH: 0,
        shownoresult: !1,
        showresult: !0,
        show_xw_result: "",
        show_time_css: "",
        hotwords: [],
        showend: !1,
        searchTabs: [ {
            lb: "0"
        }, {
            ys: "0"
        }, {
            lbp: "0"
        } ],
        showLoading: !1,
        bindshownavtab: "onNavbarTap",
        show_re_words: "新闻联播",
        get_sugword: [],
        pageCount: "6",
        show_sugword: !0,
        search_list: "list3",
        show_zhezhao: "hide",
        scrollTopView: 0,
        istTop: !1,
        scrollTop: 0,
        isscroll: !0,
        zhezhaoflag: !0,
        audioIsHide: !0,
        value: 0,
        percent: 0,
        max: 0,
        pass_time: "00:00",
        total_time: "00:00",
        isPlaying: !1,
        dataAudio: {
            audiotitle: "",
            audiostate: "",
            audioztime: ""
        }
    },
    onSearchInput: function(t) {
        (a = this).setData({
            qtext: t.detail.value,
            inputFocus: !0
        });
        var e = a.data.qtext;
        a.get_sugword_List(e, a.data.pageCount);
    },
    onSearchFocus: function(t) {
        var e = a.data.qtext;
        e == a.data.old_qtext && a.setData({
            zhezhaoflag: !0,
            inputFocus: !0
        }), 1 == a.data.zhezhaoflag ? (e.trim(), a.setData({
            searchCancelShow: !0,
            show_sugword: !0,
            get_sugword: [],
            show_zhezhao: "hide",
            isscroll: !0,
            inputFocus: !0
        })) : a.setData({
            show_sugword: !1,
            get_sugword: [],
            isscroll: !0,
            inputFocus: !1,
            zhezhaoflag: !0
        }), setTimeout(function() {
            a.setData({
                show_sugword: !1,
                show_zhezhao: "hide",
                isscroll: !0,
                inputFocus: !0
            });
        }, 53);
    },
    onSearchCancel: function() {
        a.setData({
            searchHotShow: !0,
            searchHistoryShow: !0,
            searchCancelShow: !1,
            qtext: "",
            inputFocus: !1,
            showSearchList: !1,
            searchlists: [],
            currentTab: 0,
            objtype: "新闻联播",
            show_xw_result: "search_tag lianbo",
            show_re_words: "新闻联播",
            show_sugword: !1,
            get_sugword: [],
            show_zhezhao: "hide",
            search_list: "list3",
            page: 1
        });
    },
    onSearchConfirm: function(t) {
        a = this;
        var e = t.detail.value;
        e.trim() ? e.length > 0 && (wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            success: function() {
                wx.hideToast();
            }
        }), a.setData({
            searchlists: [],
            qtext: e,
            old_qtext: e,
            searchHotShow: !1,
            searchHistoryShow: !1,
            showSearchList: !0,
            show_xw_result: "search_tag lianbo",
            show_time_css: "search_times",
            currentTab: 0,
            objtype: "新闻联播",
            show_re_words: "新闻联播",
            search_list: "list3",
            show_sugword: !1,
            show_zhezhao: "hide",
            isscroll: !0,
            zhezhaoflag: !1,
            inputFocus: !1
        }), a.getHistorySearch(e), a.get_search_List(e, a.data.page, a.data.pagesize, a.data.objtype, a.data.format)) : a.setData({
            inputFocus: !0,
            searchCancelShow: !1
        });
    },
    get_search_List: function(e, s, o, r, i) {
        e.length > 0 && (a.setData({
            objtype: r,
            old_qtext: e,
            page: s,
            pagesize: o,
            format: i
        }), a.setData({
            bindshownavtab: ""
        }), wx.request({
            url: a.data.search_url,
            method: "get",
            inCharset: "utf-8",
            outCharset: "utf-8",
            data: {
                qtext: e,
                pagesize: o,
                page: s,
                videotime: a.data.videotime,
                sort: a.data.sort,
                objtype: r,
                highlight: a.data.highlight,
                format: i
            },
            success: function(e) {
                a.setData({
                    bindshownavtab: "onNavbarTap"
                }), wx.hideToast();
                var s = [];
                if ("ok" == e.data.flag) if (e.data.list.length > 0) {
                    var o = e.data.CHANNELS;
                    o.length > 0 && (s = a.gettabnum(o));
                    var r = e.data.total, i = JSON.parse(JSON.stringify(e.data.list));
                    if (a.digui(i), a.data.searchlists.length >= r) a.setData({
                        showend: !0,
                        showLoading: !1
                    }); else if (r <= 20) {
                        var h;
                        a.setData((h = {
                            searchlists: [],
                            page: 1,
                            searchTabs: s
                        }, t(h, "searchlists", i), t(h, "shownoresult", !1), t(h, "showresult", !0), t(h, "showend", !0), 
                        t(h, "showLoading", !1), h));
                    } else a.setData({
                        searchTabs: s,
                        searchlists: a.data.searchlists.concat(i),
                        shownoresult: !1,
                        showresult: !0,
                        showend: !1,
                        showLoading: !0
                    });
                } else {
                    if (e.data.CHANNELS.length > 0) {
                        n = e.data.CHANNELS;
                        s = a.gettabnum(n);
                    } else s = [ {
                        lb: "0"
                    }, {
                        ys: "0"
                    }, {
                        lbp: "0"
                    } ];
                    a.setData({
                        searchTabs: s,
                        shownoresult: !0,
                        showresult: !1
                    }), wx.hideToast();
                } else {
                    if (e.data.CHANNELS.length > 0) {
                        var n = e.data.CHANNELS;
                        s = a.gettabnum(n);
                    } else s = [ {
                        lb: "0"
                    }, {
                        ys: "0"
                    }, {
                        lbp: "0"
                    } ];
                    a.setData({
                        searchTabs: s,
                        shownoresult: !0,
                        showresult: !1
                    }), wx.hideToast();
                }
            }
        }));
    },
    onClearInput: function(t) {
        var e = t.currentTarget.dataset.text;
        a.setData({
            old_qtext: e,
            qtext: "",
            inputFocus: !0,
            show_zhezhao: "hide"
        });
    },
    onSearchHistoryDeleteAll: function() {
        wx.removeStorage({
            key: "searchHistorysKey",
            success: function(t) {
                a.setData({
                    searchHistorys: []
                });
            }
        });
    },
    oniconTap: function(t) {
        var e = t.currentTarget.dataset.text;
        e.trim() ? (e.length > 0 && (a.setData({
            qtext: e,
            old_qtext: e,
            searchHotShow: !1,
            searchHistoryShow: !1,
            searchCancelShow: !0,
            showSearchList: !0,
            show_zhezhao: "hide",
            page: 1
        }), a.get_search_List(e, a.data.page, a.data.pagesize, a.data.objtype, a.data.format)), 
        a.getHistorySearch(e)) : a.setData({
            inputFocus: !0,
            searchCancelShow: !1,
            show_zhezhao: "hide",
            page: 1
        });
    },
    onHotkeyTap: function(t) {
        var e = t.currentTarget.dataset.text;
        e.trim() && (e.length > 0 && (a.setData({
            qtext: e,
            old_qtext: e,
            searchHotShow: !1,
            searchHistoryShow: !1,
            searchCancelShow: !0,
            showSearchList: !0,
            searchlists: [],
            show_xw_result: "search_tag lianbo",
            show_time_css: "search_times",
            show_sugword: !1,
            search_list: a.data.search_list,
            show_zhezhao: "hide",
            isscroll: !0,
            page: 1
        }), a.get_search_List(e, a.data.page, a.data.pagesize, a.data.objtype, a.data.format)), 
        a.getHistorySearch(e));
    },
    onNavigateToUrl: function(t) {
        var e = t.currentTarget.dataset.type, a = t.currentTarget.dataset.flag, s = t.currentTarget.dataset.id;
        0 == a ? 1 == e ? wx.redirectTo({
            url: "../svideo/svideo?type=0&id=" + s
        }) : wx.redirectTo({
            url: "../video/video?type=0&id=" + s
        }) : 1 == a ? wx.redirectTo({
            url: "../article/article?id=" + s + "&pagetype=1"
        }) : 2 == a ? wx.redirectTo({
            url: "../article/article?id=" + s + "&pagetype=2"
        }) : 1 == e ? wx.navigateTo({
            url: "../svideo/svideo?type=0&id=" + s
        }) : wx.navigateTo({
            url: "../video/video?type=0&id=" + s
        });
    },
    onLoad: function(t) {
        a = this, e.getNetInfo(a), a.wxzxSlider = a.selectComponent("#wxzxSlider");
        var s = wx.getStorageSync("searchHistorysKey") || [];
        s.length > 0 && a.setData({
            searchHistorys: s.length >= 10 ? s.slice(0, 10) : s
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    scrollviewH: .83 * t.windowHeight,
                    scrollTopView: t.windowHeight
                });
            }
        });
        var o = t.type, r = t.key;
        (o = "undefined") && (o = 0), "undefined" == r && (r = "习近平"), console.log("options.key" + t.key + "options.type" + t.type);
        var i = "";
        r.trim() ? r.length > 0 && (0 == o ? (i = "新闻联播", a.setData({
            show_xw_result: "search_tag lianbo",
            show_time_css: "search_times",
            currentTab: o,
            show_re_words: "新闻联播",
            search_list: "list3"
        })) : 1 == o ? (i = "央视快评", a.setData({
            show_xw_result: "search_tag lianbo",
            show_time_css: "hide",
            currentTab: o,
            show_re_words: "快评",
            search_list: "list2"
        })) : 2 == o ? (i = "联播+", a.setData({
            show_xw_result: "search_tag lianbo",
            show_time_css: "hide",
            currentTab: o,
            show_re_words: "联播+",
            search_list: "list1"
        })) : (i = "新闻联播", a.setData({
            show_xw_result: "search_tag lianbo",
            show_time_css: "search_times",
            currentTab: o,
            show_re_words: "新闻联播",
            search_list: "list3"
        })), a.setData({
            qtext: r,
            old_qtext: r,
            objtype: i,
            searchHotShow: !1,
            searchHistoryShow: !1,
            showSearchList: !0,
            searchCancelShow: !0,
            inputFocus: !1
        }), a.get_search_List(r, a.data.page, a.data.pagesize, i, a.data.format), a.getHistorySearch(r)) : a.setData({
            inputFocus: !0,
            searchCancelShow: !1
        }), wx.request({
            url: a.data.hot_url,
            method: "get",
            inCharset: "utf-8",
            outCharset: "utf-8",
            success: function(t) {
                var e = t.data.data;
                e.length > 0 && a.setData({
                    hotwords: e
                });
            }
        });
    },
    searchScrollLower: function() {
        if (a.data.old_qtext.length > 0) {
            var t = a.data.page + 1, e = a.data.pagesize, s = a.data.old_qtext, o = a.data.objtype, r = (a.data.highlight, 
            a.data.videotime, a.data.searchlists, a.data.sort, a.data.format);
            a.get_search_List(s, t, e, o, r);
        }
    },
    onNavbarTap: function(t) {
        var e = a.data.old_qtext;
        if (e.length > 0) {
            a.data.page = 1;
            var s = a.data.pagesize, o = t.currentTarget.dataset.type, r = t.currentTarget.dataset.total;
            "0" == o ? (a.data.objtype = "新闻联播", a.setData({
                searchlists: [],
                currentTab: o,
                showend: !1,
                showLoading: !1,
                show_xw_result: "search_tag lianbo",
                show_time_css: "search_times",
                show_re_words: "新闻联播",
                search_list: "list3"
            })) : "1" == o ? (a.data.objtype = "央视快评", a.setData({
                searchlists: [],
                currentTab: o,
                showend: !1,
                showLoading: !1,
                show_xw_result: "search_tag kuaiping",
                show_time_css: "hide",
                show_re_words: "快评",
                search_list: "list2"
            })) : "2" == o ? (a.data.objtype = "联播+", a.setData({
                searchlists: [],
                currentTab: o,
                showend: !1,
                showLoading: !1,
                show_xw_result: "search_tag lianboplus",
                show_time_css: "hide",
                show_re_words: "联播+",
                search_list: "list1"
            })) : (a.data.objtype = "新闻联播", a.setData({
                searchlists: [],
                currentTab: o,
                showend: !1,
                showLoading: !1,
                show_xw_result: "search_tag lianbo",
                show_time_css: "search_times",
                show_re_words: "新闻联播",
                search_list: "list3"
            })), wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 1e4
            }), 0 === r ? (a.setData({
                shownoresult: !0,
                showresult: !1
            }), wx.hideToast()) : a.get_search_List(e, a.data.page, s, a.data.objtype, a.data.format);
        }
    },
    searchscroll: function(t) {
        t.detail.scrollTop > a.data.scrollTopView ? a.data.istTop || a.setData({
            istTop: !0
        }) : a.data.istTop && a.setData({
            istTop: !1
        });
    },
    onReady: function() {},
    onHide: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = a.data.old_qtext;
        if (t.trim() && t.length > 0) {
            var e = a.data.page + 1, s = a.data.pagesize, o = a.data.objtype, r = (a.data.highlight, 
            a.data.searchlists, a.data.sort, a.data.format);
            a.get_search_List(t, e, s, o, r);
        }
    },
    onShareAppMessage: function() {},
    gettabnum: function(t) {
        var e = [];
        if (t.length > 0) for (var a = 0; a < t.length; a++) "新闻联播" == t[a].NAME ? t[a].COUNT > 99 ? e[0] = {
            lb: "99+"
        } : e[0] = {
            lb: t[a].COUNT
        } : "央视快评" == t[a].NAME ? t[a].COUNT > 99 ? e[1] = {
            ys: "99+"
        } : e[1] = {
            ys: t[a].COUNT
        } : "联播+" == t[a].NAME && (t[a].COUNT > 99 ? e[2] = {
            lbp: "99+"
        } : e[2] = {
            lbp: t[a].COUNT
        });
        return e;
    },
    getHistorySearch: function(t) {
        var e = a.data.searchHistorys;
        if (t.trim() && t.length > 0) {
            if (e.length > 0) if (e.indexOf(t) < 0) e.unshift(t); else {
                for (var s = 0; s < e.length; s++) if (e[s] == t) {
                    e.splice(s, 1);
                    break;
                }
                e.unshift(t);
            } else e.push(t);
            wx.setStorage({
                key: "searchHistorysKey",
                data: e,
                success: function() {
                    a.setData({
                        searchHistorys: e.length >= 10 ? e.slice(0, 10) : e
                    });
                }
            });
        }
    },
    removeByValue: function(t, e) {
        for (var a = 0; a < t.length; a++) if (t[a] == e) {
            t.splice(a, 1);
            break;
        }
    },
    get_sugword_List: function(t, e) {
        t.trim() && t.length > 0 ? wx.request({
            url: a.data.xiala_url,
            method: "get",
            inCharset: "utf-8",
            outCharset: "utf-8",
            data: {
                keyword: t,
                pageCount: e
            },
            success: function(t) {
                t.data.USER.length > 0 ? a.setData({
                    show_zhezhao: "show",
                    show_sugword: !0,
                    get_sugword: t.data.USER,
                    isscroll: !1
                }) : a.setData({
                    show_zhezhao: "hide",
                    show_sugword: !1,
                    isscroll: !0
                });
            }
        }) : a.setData({
            show_zhezhao: "hide",
            show_sugword: !1,
            isscroll: !0
        });
    },
    digui: function(t, e, s) {
        var o = new RegExp(a.data.old_qtext, "g");
        if (t.constructor == Array) t.forEach(function(r, i) {
            t.constructor == String ? "TITLE" == s && e[s].splice(i, 1, r.replace(o, "<span style='color:red'>" + a.data.old_qtext + "</span>")) : a.digui(r, t);
        }); else if (t.constructor == Object) {
            var r = {};
            for (var s in t) "TITLE" == s && (r[s] = t, a.digui(t[s], t, s));
        } else t.constructor == String && "TITLE" == s && (e[s] = t.replace(o, "<span style='color:red'>" + a.data.old_qtext + "</span>"), 
        e[s].indexOf("<<span style='color:red'>") > 0 && (e[s] = t.replace("<", "&lt;")));
    },
    gotoonegzpage: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + e.val
        });
    },
    backToTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 400
        }), a.setData({
            istTop: !1,
            scrollTop: 0
        });
    },
    hidezhezhao: function() {
        a.setData({
            show_sugword: !1,
            show_zhezhao: "hide",
            isscroll: !0
        });
    },
    sliderTap: function(t) {
        o.seek(a, s);
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(t) {
        console.log("sliderEnd"), o.seek(a, s);
    },
    sliderCancel: function(t) {
        console.log("sliderCancel"), o.seek(a, s);
    },
    songToggle: function() {
        o.songToggle(a, s);
    },
    onShow: function() {
        console.log("搜索页执行onshow"), a.data.isSencondOnshow ? a.setData({
            audioIsHide: !0
        }) : (o.readAudio("storageAudio", a), o.audioEvent(a, s), a.setData({
            isSencondOnshow: !0
        }));
    },
    onUnload: function() {
        1 == a.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), o.saveAudio("storageAudio", a.data.dataAudio, a)) : (console.log("暂停音频跳出，清理音频缓存"), 
        o.removeAudio("storageAudio"));
    }
});