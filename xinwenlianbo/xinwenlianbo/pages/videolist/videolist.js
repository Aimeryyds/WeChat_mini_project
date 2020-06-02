require("../../utils/nongli.js");

var t = require("../../templates/search/search_temp.js"), a = "", e = wx.getBackgroundAudioManager(), o = require("../../utils/audioStorage.js"), i = getApp();

Page({
    data: {
        _data: [],
        _dantiaodata: [],
        weekArr: [ "日", "一", "二", "三", "四", "五", "六" ],
        bottomtab: [ {
            a: "整期联播",
            b: "1"
        }, {
            a: "单条联播",
            b: "0"
        } ],
        show: !0,
        wuwangluo: !1,
        scrollHeight: 0,
        bTabswitch: !1,
        nav_active: !0,
        month_arr: [],
        secondMon: 3,
        isbind: !1,
        scrollTop: 0,
        showCon: !1,
        choseYear: [],
        showTC: !1,
        zuijinLY: !0,
        showLoading: !0,
        istTop: !1,
        netInfo: {},
        mode: 0,
        qtext: "",
        twoyear: !1,
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
    redirectTosearch: function() {
        t.redirectTosearch(a);
    },
    onLoad: function() {
        a = this, i.getNetInfo(a), t.searchEvent(a), a.wxzxSlider = a.selectComponent("#wxzxSlider"), 
        a.result = [], a.mode = 0, wx.getSystemInfo({
            success: function(t) {
                t.model.indexOf("iPhone X") > -1 ? a.setData({
                    scrollHeight: t.windowHeight - t.windowHeight / 750 * 138,
                    scrollHeight_: t.windowHeight - t.windowHeight / 750 * 92,
                    marginbottom: 0
                }) : a.setData({
                    scrollHeight: t.windowHeight - t.windowHeight / 750 * 108,
                    scrollHeight_: t.windowHeight - t.windowHeight / 750 * 92,
                    marginbottom: 0
                });
            }
        });
    },
    onReady: function() {
        a.data.netInfo.status && (wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4
        }), a.Getlastdata());
    },
    Getlastdata: function() {
        wx.request({
            url: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&mode=0&serviceId=lianboplus&p=1&n=1",
            success: function(t) {
                var e = t.data.videoList[0].video_title.substring(7, 11), o = t.data.videoList[0].video_title.substring(11, 13), i = t.data.videoList[0].video_title.substring(13, 15);
                a.ZXyear = e, a.ZXmonth = o, a.ZXday = i, a.setData({
                    _ZXyear: a.ZXyear,
                    _ZXmonth: a.ZXmonth,
                    _ZXday: a.ZXday,
                    ZXyear: a.ZXyear,
                    ZXmonth: a.ZXmonth,
                    ZXday: a.ZXday,
                    mode: a.mode
                }), a.getNavlist(), a.yearTC();
            },
            fail: function() {
                a.setData({
                    netInfo: !1
                });
            },
            complete: function(t) {
                "request:fail" == t.errMsg && a.setData({
                    netInfo: !1
                });
            }
        });
    },
    getNavlist: function() {
        var t = 1 * a.data.ZXmonth, e = [];
        if (0 == a.data.mode) {
            for (var o = t - 1; o > 0; o--) e.push(o);
            a.setData({
                month_arr: e
            }), a.getZQlist();
        } else {
            for (var i = t; i > 0; i--) e.push(i);
            a.setData({
                month_arr: e
            });
        }
    },
    getZQlist: function() {
        if (a.data.secondMon--, console.log("that.data.secondMon=====" + a.data.secondMon), 
        a.data.secondMon > 0) {
            var t = a.data.ZXyear.toString() + a.data.ZXmonth, e = a.data.mode;
            wx.request({
                url: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&serviceId=lianboplus&n=100",
                data: {
                    mode: e,
                    date: t
                },
                success: function(t) {
                    if (0 == a.data._data.length) a.data._data = t.data.videoList; else for (var e = 0; e < t.data.videoList.length; e++) a.data._data.push(t.data.videoList[e]);
                    "01" == a.data.ZXmonth && 2 == a.data.secondMon ? (a.data.ZXmonth = "12", a.data.ZXyear--, 
                    a.data.twoyear = !0) : a.data.ZXmonth--, a.data.ZXmonth < 10 && (a.data.ZXmonth = "0" + a.data.ZXmonth), 
                    a.getZQlist();
                },
                fail: function() {
                    a.setData({
                        netInfo: !1
                    });
                },
                complete: function(t) {
                    "request:fail" == t.errMsg && a.setData({
                        netInfo: !1
                    });
                }
            });
        } else a.topick();
    },
    topick: function() {
        for (var t = a.data._data, e = [], o = [], i = [], d = [], n = [], s = [], r = [], l = [], u = 0; u < t.length; u++) {
            for (var c = u, h = u + 1; h < t.length; h++) if (t[u].video_title.substring(0, 15) === t[h].video_title.substring(0, 15)) {
                t[u].video_title.substring(16, 18) > t[h].video_title.substring(16, 18) || (c = h), 
                h = ++u;
                break;
            }
            e.push(t[c]);
        }
        a.data._data = e;
        for (var g = 0; g < e.length; g++) {
            var v = e[g].video_title.substring(7, 11), f = e[g].video_title.substring(11, 13), w = e[g].video_title.substring(13, 15), _ = e[g].news_hl_tag.split(","), m = "";
            m = "" == e[g].brief ? e[g].video_title.split(" ")[0] : "-1" != e[g].brief.indexOf("1、") ? e[g].brief.split("1、")[1].split("；")[0] : "-1" != e[g].brief.indexOf("1.") ? e[g].brief.split("1.")[1].split("；")[0] : "新闻联播", 
            r.push(e[g].video_length.substring(3, 8)), s.push(m), o.push(v), i.push(f), d.push(w), 
            0 == _.length ? l.push("") : l.push(_);
        }
        for (var Z = 0; Z < o.length; Z++) {
            var X = new Date(o[Z], i[Z] - 1, d[Z]);
            a.data.d = X.getDay(), n.push("星期" + a.data.weekArr[a.data.d]);
        }
        for (var p = 0; p < a.data._data.length; p++) a.data._data[p].xingqi = n[p], a.data._data[p].year = o[p], 
        a.data._data[p].month = i[p], a.data._data[p].day = d[p], a.data._data[p]._titledata = s[p], 
        a.data._data[p].videolength = r[p], a.data._data[p].gjc = l[p];
        if ("2017" == a.data.ZXyear && "09" == a.data.ZXmonth) {
            for (var T = [], b = 0; b < 14; b++) T.push(e[b]);
            e = T;
        }
        a.setData({
            showCon: !0,
            _data: e,
            isbind: !0
        }), a.data.twoyear && (a.data.twoyear = !1, a.data.ZXyear++), wx.hideToast();
    },
    changecon: function(t) {
        if (a.data.isbind) {
            if (a.mode == t.currentTarget.dataset.index) return;
            if (wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 1e4
            }), a.mode = t.currentTarget.dataset.index, 0 == a.mode) {
                a.setData({
                    bottomtab: [ {
                        a: "整期联播",
                        b: "1"
                    }, {
                        a: "单条联播",
                        b: "0"
                    } ],
                    isbind: !1,
                    scrollTop: 0,
                    show: !0,
                    mode: 0,
                    showLoading: !0,
                    id: 13,
                    ZXyear: a.data._ZXyear,
                    ZXmonth: a.data._ZXmonth,
                    ZXday: a.data._ZXday,
                    zuijinLY: !0,
                    nav_active: !0,
                    secondMon: 3,
                    _data: [],
                    showCon: !1
                });
                for (var e = [], o = 1 * a.data.ZXmonth - 1; o > 0; o--) e.push(o);
                a.setData({
                    month_arr: e
                }), a.getZQlist();
            } else a.setData({
                bottomtab: [ {
                    a: "整期联播",
                    b: "0"
                }, {
                    a: "单条联播",
                    b: "1"
                } ],
                isbind: !0,
                scrollTop: 0,
                show: !1,
                mode: 1,
                zuijinLY: !1,
                id: 0,
                ZXyear: a.data._ZXyear,
                ZXmonth: a.data._ZXmonth,
                ZXday: a.data._ZXday,
                showLoading: !1,
                _dantiaodata: [],
                showCon: !1
            }), a.getNavlist(), a.getDTlist();
        }
    },
    getDTlist: function() {
        var t = a.data.ZXyear.toString() + a.data.ZXmonth + a.data.ZXday, e = a.data.mode;
        t <= "20171017" ? a.setData({
            showLoading: !0,
            isbind: !0
        }) : wx.request({
            url: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&serviceId=lianboplus&n=50&sort=asc",
            data: {
                mode: e,
                date: t
            },
            success: function(t) {
                t.data.videoList[0].tit_data = a.data.ZXmonth + " . " + a.data.ZXday;
                for (var e = 0; e < t.data.videoList.length; e++) t.data.videoList[e].video_title = t.data.videoList[e].video_title.replace(/\[视频\]/g, ""), 
                t.data.videoList[e]._data = a.data.ZXyear.toString() + "." + a.data.ZXmonth + "." + a.data.ZXday, 
                t.data.videoList[e].videolength = t.data.videoList[e].video_length.substring(3, 8), 
                t.data.videoList[e].news_hl_tag.length && (t.data.videoList[e].gjc = t.data.videoList[e].news_hl_tag.split(","));
                a.data._dantiaodata.push(t.data.videoList), a.getDTconlist();
            },
            fail: function() {
                a.setData({
                    netInfo: !1
                });
            },
            complete: function(t) {
                "request:fail" == t.errMsg && a.setData({
                    netInfo: !1
                });
            }
        });
    },
    getDTconlist: function() {
        a.setData({
            _dantiaodata: a.data._dantiaodata,
            showLoading: !1,
            showCon: !0,
            isbind: !0
        }), wx.hideToast();
    },
    loadMore: function() {
        if (0 != a.data.mode && a.data.isbind) {
            var t = Number(a.data.ZXday) - 1;
            if (0 == t) return void a.setData({
                showLoading: !0
            });
            t < 10 && (t = "0" + t), a.setData({
                ZXday: t,
                isbind: !1
            }), a.getDTlist();
        }
    },
    toast: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.navigateTo({
            url: "../video/video?id=" + a + "&type=0"
        });
    },
    toast1: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.navigateTo({
            url: "../svideo/svideo?id=" + a + "&type=0"
        });
    },
    nav_event: function(t) {
        if (a.data.isbind && t.currentTarget.dataset.id != a.data.id) {
            wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 1e4
            });
            var e = t.currentTarget.dataset.id, o = t.currentTarget.dataset.vol;
            if (o < 10 && (o = "0" + o), 0 == a.data.mode) a.setData({
                showCon: !1,
                isbind: !1,
                nav_active: !1,
                id: e,
                secondMon: 2,
                ZXmonth: o,
                _data: [],
                showTC: !1
            }), a.getZQlist(); else {
                if (a.setData({
                    showCon: !1,
                    isbind: !1,
                    id: e,
                    ZXmonth: o,
                    _dantiaodata: [],
                    showTC: !1
                }), a.data.ZXmonth == a.data._ZXmonth) a.setData({
                    ZXday: a.data._ZXday
                }); else {
                    var i = new Date(a.data.ZXyear, a.data.ZXmonth, 0);
                    a.data.ZXday = i.getDate();
                }
                a.getDTlist();
            }
        }
    },
    navevent: function() {
        if (a.data.isbind) {
            if (a.data.nav_active) return;
            wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 1e4
            }), a.setData({
                showCon: !1,
                isbind: !1,
                secondMon: 3,
                nav_active: !0,
                id: 13,
                _data: [],
                showTC: !1
            }), a.Getlastdata();
        }
    },
    showTC: function() {
        a.setData({
            showTC: !a.data.showTC
        });
    },
    yearTC: function() {
        var t = Number(a.data.ZXyear);
        a.data.choseYear = [];
        for (var e = t; e >= 2017; e--) a.data.choseYear.push(e);
        a.setData({
            choseYear: a.data.choseYear
        });
    },
    clickYear: function(t) {
        var e = t.currentTarget.dataset.vol;
        if (e != a.data.ZXyear) {
            var o = [];
            if (2017 == e) o = [ 12, 11, 10 ], a.setData({
                zuijinLY: !1
            }); else if (e < a.data._ZXyear) o = [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ], 
            a.setData({
                zuijinLY: !1
            }); else {
                var i = 1 * a.data._ZXmonth;
                if (0 == a.data.mode) {
                    for (var d = i - 1; d > 0; d--) o.push(d);
                    a.setData({
                        zuijinLY: !0
                    });
                } else for (var n = i; n > 0; n--) o.push(n);
            }
            a.setData({
                ZXyear: e,
                month_arr: o,
                id: 13,
                nav_active: !1
            });
        }
    },
    getscroll: function(t) {
        t.detail.scrollTop > a.data.scrollHeight ? a.data.istTop || a.setData({
            istTop: !0
        }) : a.data.istTop && a.setData({
            istTop: !1
        });
    },
    onGoTop: function() {
        a.setData({
            scrollTop: 0,
            istTop: !1
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 400
        });
    },
    gotoonegzpage: function(t) {
        var a = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + a.val
        });
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新"), a.rushPage();
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    rushPage: function() {
        i.getNetInfo(a), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4
        });
        setTimeout(function() {
            a.data.netInfo.status && (0 == a.data.mode ? (a.setData({
                showCon: !1,
                isbind: !1,
                nav_active: !0,
                zuijinLY: !0,
                id: 13,
                secondMon: 3,
                _data: [],
                showTC: !1
            }), a.Getlastdata()) : (a.setData({
                isbind: !0,
                scrollTop: 0,
                show: !1,
                zuijinLY: !1,
                id: 0,
                ZXyear: a.data._ZXyear,
                ZXmonth: a.data._ZXmonth,
                ZXday: a.data._ZXday,
                showLoading: !1,
                _dantiaodata: [],
                showCon: !1
            }), a.getNavlist(), a.getDTlist()));
        }, 500);
    },
    closeTC: function() {
        a.setData({
            showTC: !1
        });
    },
    sliderTap: function(t) {
        o.seek(a, e);
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(t) {
        console.log("sliderEnd"), o.seek(a, e);
    },
    sliderCancel: function(t) {
        console.log("sliderCancel"), o.seek(a, e);
    },
    songToggle: function() {
        o.songToggle(a, e);
    },
    onShow: function() {
        o.readAudio("storageAudio", a), o.audioEvent(a, e);
    },
    onUnload: function() {
        1 == a.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), o.saveAudio("storageAudio", a.data.dataAudio, a)) : (console.log("暂停音频跳出，清理音频缓存"), 
        o.removeAudio("storageAudio"));
    }
});