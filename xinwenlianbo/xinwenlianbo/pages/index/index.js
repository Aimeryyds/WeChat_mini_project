var a = require("../../utils/nongli.js"), t = "", e = getApp(), o = wx.getBackgroundAudioManager(), n = (require("../../utils/util.js"), 
require("../../utils/audioStorage.js"));

Page({
    properties: {},
    data: {
        arr: [],
        arr1: [],
        arr2: [],
        sysW: null,
        lastDay: null,
        firstDay: null,
        weekArr: [ "日", "一", "二", "三", "四", "五", "六" ],
        show_: !0,
        netInfo: {},
        windowinfo: {},
        nongli: "",
        year: "",
        month: "",
        getDate: "",
        getDay: "",
        todayIndex: "",
        dayStatus: "2",
        topbar: "0",
        serverTime: {},
        editorTime: {
            time: "",
            status: "",
            success: ""
        },
        lineHour: "19",
        completedate: null,
        looklianbo: "",
        zkall: !1,
        zktext: "展开全部",
        sanfenzhongsulan: "",
        sulanshow: !0,
        aipUrl: "https://wxapp.cntv.cn/",
        timeSUrl: "https://time.tv.cctv.com/time.php",
        choice_switch: [ {
            img: "../../img/index_wangqi.png",
            text: "往期联播",
            url: "../videolist/videolist"
        }, {
            img: "../../img/index_search.png",
            text: "搜索",
            url: "../search/search?key=&type=0"
        } ],
        yskphd: [ {
            yskptitle: "央视快评"
        } ],
        yskp_bd: "",
        currentVide: "",
        enablePullDownRefresh: !0,
        jumpguanzhu: "/pages/follow/follow",
        followKey: "",
        followIsShow: !1,
        followData: null,
        youbtnCol: !0,
        zuobtnCol: !1,
        youguanzhunoneirong: !1,
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
    getFuqDate: function(e) {
        if (void 0 != e) {
            o = "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&mode=0&serviceId=lianboplus&p=1&n=1&date=" + e;
            console.log("传入了t值,url=" + o);
        } else {
            var o = "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&mode=0&serviceId=lianboplus&p=1&n=1";
            console.log("未传t值,url=" + o);
        }
        wx.request({
            url: o,
            success: function(e) {
                if (e.data.videoList.length > 0) {
                    var o = e.data.videoList[0].video_title.substring(7, 11), n = e.data.videoList[0].video_title.substring(11, 13), d = e.data.videoList[0].video_title.substring(13, 15), s = o + "-" + n + "-" + d;
                    s = new Date(s), console.log("接口最新一期时间newDate=" + s);
                    var i = o + "-" + n + "-" + d, r = new Date(Date.parse(i.replace(/-/g, "/")));
                    t.data.l = [ "日", "一", "二", "三", "四", "五", "六" ], t.data.d = r.getDay(), t.data.getDay = "星期" + t.data.l[t.data.d];
                    var l = a.GetLunarDay(o, n, d);
                    if (t.nongli = l.substring(7, 11), t.setData({
                        year: o,
                        month: n,
                        getDay: t.data.getDay,
                        getDate: d,
                        todayData: d,
                        todayMonth: n,
                        todayYear: o,
                        todayNongli: t.nongli,
                        todaygetDay: t.data.getDay,
                        nongli: t.nongli,
                        completedate: o + n + d,
                        currentVide: e.data.videoList[0].video_id,
                        sulanshow: !0
                    }), t.setLookLianBo(), t.sanfenzhongId(), 0 == t.data.serverTime.getServer) wx.request({
                        url: t.data.timeSUrl,
                        success: function(a) {
                            if ("101" == a.data.errcode) console.log("无效的接口地址,用本地时间"); else {
                                var e = a.data.split("('")[1], o = e.split(" ")[1].split(":")[0];
                                e = e.split(" ")[0];
                                var n = new Date(e), d = {};
                                d.year = n.getFullYear(), d.month = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1, 
                                d.date = n.getDate() < 10 ? "0" + n.getDate() : n.getDate(), d.hour = o, d.getServer = !0, 
                                t.setData({
                                    serverTime: d
                                }), setTimeout(function() {
                                    console.log("第一次获取数据接口成功后获取服务器时间ServerTime=" + t.data.serverTime.year + t.data.serverTime.month + t.data.serverTime.date);
                                }, 100);
                            }
                            var i = t.data.serverTime.year + "-" + t.data.serverTime.month + "-" + t.data.serverTime.date, r = ((i = new Date(i)) - s) / 864e5;
                            if (console.log("最新一期时间与服务时间相差tempDate=" + r), 0 == r ? t.setData({
                                dayStatus: "1"
                            }) : 1 == r ? t.setData({
                                dayStatus: "0"
                            }) : t.setData({
                                dayStatus: "2"
                            }), 0 == t.data.editorTime.success) if (0 == r) t.setData({
                                topbar: 0
                            }); else {
                                console.log("非今日的19点以后统一显示更新中");
                                var l = t.data.serverTime.hour - t.data.lineHour;
                                (l > 0 || 0 == l) && t.setData({
                                    topbar: 1
                                });
                            } else t.chargeTopBar();
                        },
                        fail: function() {
                            var a = t.data.serverTime.year + "-" + t.data.serverTime.month + "-" + t.data.serverTime.date, e = ((a = new Date(a)) - s) / 864e5;
                            console.log("第一次请求服务器时间time.php接口失败，获取本地时间"), console.log("tempDate=" + e), 0 == e ? t.setData({
                                dayStatus: "1"
                            }) : 1 == e ? t.setData({
                                dayStatus: "0"
                            }) : t.setData({
                                dayStatus: "2"
                            }), 0 == t.data.editorTime.success ? 0 == e ? t.setData({
                                topbar: 0
                            }) : (console.log("非今日的19点以后统一显示更新中"), t.data.serverTime.hour >= t.data.lineHour && t.setData({
                                topbar: 1
                            })) : t.chargeTopBar();
                        }
                    }); else {
                        var g = t.data.serverTime.year + "-" + t.data.serverTime.month + "-" + t.data.serverTime.date, u = ((g = new Date(g)) - s) / 864e5;
                        if (console.log("tempDate=" + u), 0 == u ? t.setData({
                            dayStatus: "1"
                        }) : 1 == u ? t.setData({
                            dayStatus: "0"
                        }) : t.setData({
                            dayStatus: "2"
                        }), 0 == t.data.editorTime.success) if (0 == u) t.setData({
                            topbar: 0
                        }); else {
                            console.log("非今日的19点以后统一显示更新中");
                            var c = t.data.serverTime.hour - t.data.lineHour;
                            (c > 0 || 0 == c) && t.setData({
                                topbar: 1
                            });
                        }
                    }
                } else console.log("日期请求超出范围."), t.getFuqDate(), t.setData({
                    editorTime: 0,
                    topbar: 2
                });
            }
        });
    },
    setLookLianBo: function() {
        wx.request({
            url: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&date=" + t.data.year + t.data.month + t.data.getDate + "&mode=1&serviceId=lianboplus&sort=asc&n=100",
            success: function(a) {
                var e = a.data.videoList;
                for (var o in e) e[o].video_title = e[o].video_title.replace(/\[视频\]/g, "");
                t.setData({
                    looklianbo: e
                });
                setTimeout(function() {
                    wx.hideToast();
                }, 500);
            }
        });
    },
    setyskpData: function() {
        wx.request({
            url: "https://api.cntv.cn/list/getWxArticleList?serviceId=lianboplus&id=PAGES0fQGGS65U3FzbsI5qSj180226&p=1&n=3",
            success: function(a) {
                for (e = 0; e < a.data.videoList.length; e++) a.data.videoList[e].date = t.setTime(a.data.videoList[e].pub_date);
                for (var e in a.data.videoList) a.data.videoList[e].article_title = a.data.videoList[e].article_title.replace("【央视快评】", ""), 
                "" == a.data.videoList[e].article_logo && (a.data.videoList[e].article_logo = "../../img/kuaiping.jpg");
                t.setData({
                    yskp_bd: a.data.videoList
                });
            }
        });
    },
    sanfenzhongId: function() {
        t.setData({
            sanfenzhongsulan: t.data.year + "" + t.data.month + t.data.getDate
        }), new Date(t.data.year + "-" + t.data.month + "-" + t.data.getDate) <= new Date("2018-09-03") ? (console.log("2018年9月4日以后的三分钟速览直接隐藏"), 
        t.setData({
            sulanshow: !1
        })) : wx.request({
            url: "https://api.cntv.cn/list/getWxArticleList?id=PAGEb3A73LquTUFIbR5GjLgg180411&serviceId=lianboplus&date=" + t.data.year + t.data.month + t.data.getDate,
            success: function(a) {
                a.data.total >= 1 ? t.setData({
                    sulanshow: !0
                }) : t.setData({
                    sulanshow: !1
                });
            }
        });
    },
    gotovideopage: function(a) {
        var e = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../video/video?&id=" + e.vid + "&type=" + e.type + "&date=" + t.data.completedate
        });
    },
    gotosvideopage: function(a) {
        var e = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../svideo/svideo?id=" + e.vid + "&type=0&date=" + t.data.completedate
        });
    },
    gotosanfenzhongsulan: function(a) {
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../sanfenzhong/sanfenzhong?id=" + t.article_id
        });
    },
    gotoyskpmore: function(a) {
        wx.navigateTo({
            url: "../kuaipinglist/kuaipinglist?id=PAGES0fQGGS65U3FzbsI5qSj180226"
        });
    },
    gotoyskpbd: function(a) {
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../article/article?pagetype=1&id=" + t.article_id
        });
    },
    gotosearchtag: function(a) {
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../search/search?&key=" + t.gjc + "&type=0"
        });
    },
    onLoad: function() {
        (t = this).wxzxSlider = t.selectComponent("#wxzxSlider"), t.setData({
            windowinfo: e.globalData.windowinfo
        }), e.getNetInfo(t), t.isShowFollow();
    },
    onReady: function() {
        var a = new Date(), e = {};
        e.year = a.getFullYear(), e.month = a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1, 
        e.date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate(), e.hour = a.getHours(), 
        e.getServer = !1, t.setData({
            serverTime: e
        }), t.getEidtorTime(), t.todayIndex = new Date();
    },
    footerTap: e.footerTap,
    zhankaiquanbu: function(a) {
        t.data.zkall ? t.setData({
            zkall: !1,
            zktext: "展开全部"
        }) : t.setData({
            zkall: !0,
            zktext: "收起"
        });
    },
    setTime: function(a) {
        var t = a.substring(0, 10);
        return t.split("-")[0] + "." + t.split("-")[1] + "." + t.split("-")[2];
    },
    onShareAppMessage: function(a) {
        return {
            title: "新闻联播",
            path: "/pages/index/index",
            imageUrl: "../../img/shareImage04.png",
            success: function(a) {},
            fail: function(a) {
                console.log("path=失败" + a);
            }
        };
    },
    isShowFollow: function() {
        wx.getStorage({
            key: "followStorage",
            success: function(a) {
                if (0 != a.data.length) {
                    t.setData({
                        followIsShow: !0
                    });
                    for (var e = a.data, o = "", n = 0; n < e.length; n++) n == e.length - 1 ? o += e[n].follow : o += e[n].follow + ",";
                    wx.request({
                        url: "https://api.cntv.cn/list/getWxVListByTagMem?tag=" + o + "&p=1&n=10&serviceId=lianboplus",
                        success: function(a) {
                            var e = [];
                            if (a.data.dataList.length < 1) t.setData({
                                youguanzhunoneirong: !0,
                                followData: []
                            }); else {
                                for (var o = 0; o < a.data.dataList.length; o++) {
                                    a.data.dataList[o].newsTitle = a.data.dataList[o].newsTitle.replace(/\[视频\]/g, ""), 
                                    a.data.dataList[o]._newsFocusDate = a.data.dataList[o].newsFocusDate.split("-")[0] + "." + a.data.dataList[o].newsFocusDate.split("-")[1] + "." + a.data.dataList[o].newsFocusDate.split("-")[2].split(" ")[0], 
                                    "PAGES0fQGGS65U3FzbsI5qSj180226" == a.data.dataList[o].newsPrimaryPageId ? a.data.dataList[o].contype = "快评" : "PAGEhX8s5pIxvHLUxvGqAlnG180411" == a.data.dataList[o].newsPrimaryPageId ? a.data.dataList[o].contype = "联播+" : a.data.dataList[o].newsLength ? (a.data.dataList[o].contype = "新闻联播", 
                                    a.data.dataList[o].newsLength = a.data.dataList[o].newsLength.substring(3, a.data.dataList[o].newsLength.length)) : a.data.dataList[o].contype = "";
                                    var n = a.data.dataList[o].newsHLTag.split(" ");
                                    a.data.dataList[o].gjc = n, e.push(a.data.dataList[o]);
                                }
                                t.setData({
                                    followData: e
                                });
                            }
                        }
                    });
                } else t.setData({
                    followIsShow: !1
                });
            },
            fail: function() {
                t.setData({
                    followIsShow: !1,
                    youguanzhunoneirong: !1
                }), console.log("无缓存关注标签");
            }
        });
    },
    rushPage: function() {
        e.getNetInfo(t);
        var a = new Date(), o = {};
        o.year = a.getFullYear(), o.month = a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1, 
        o.date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate(), o.hour = a.getHours(), 
        o.getServer = !1, t.setData({
            serverTime: o
        }), setTimeout(function() {
            console.log("本地时间that.Data.serverTime=" + t.data.serverTime.year + t.data.serverTime.month + t.data.serverTime.date + "     hour:" + a.getHours());
        }, 100);
        setTimeout(function() {
            t.data.netInfo.status && (t.setData({
                youbtnCol: !0,
                zuobtnCol: !1
            }), t.getEidtorTime(!0));
        }, 200);
    },
    getPageData: function(a) {
        wx.showToast({
            title: "数据加载中",
            icon: "loading",
            mask: !0
        }), t.getFuqDate(a), t.setyskpData();
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新"), t.rushPage();
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 3e3);
    },
    tapname3: function() {
        t.data.show_ && (t.data.newdate1107 = t.data.getDate, t.data.newmonth1107 = t.data.month, 
        t.data.newyear1107 = t.data.year), t.data.arr1 = [], t.data.arr = [], t.data.arr2 = [];
        var a = new Date(t.data.year, t.data.month, 0);
        t.data.lastDay = a.getDate();
        var e = new Date(t.data.year, t.data.month - 1, 1);
        if (t.data.firstDay = e.getDay(), 0 == t.data.firstDay) t.data.arr1 = []; else {
            var o = new Date(t.data.year, t.data.month - 1, 0);
            for (t.data.lastDay1 = o.getDate(), n = t.data.firstDay - 1; n >= 0; n--) t.data.arr1.push(t.data.lastDay1 - n);
        }
        for (var n = 1; n < t.data.lastDay + 1; n++) t.data.arr.push(n);
        if (t.data.lastDay_ = a.getDay(), 6 == t.data.lastDay_) t.data.arr2 = []; else for (n = 1; n < 7 - t.data.lastDay_; n++) t.data.arr2.push(n);
        Number(t.data.month) < 10 && (t.data.month = "0" + Number(t.data.month));
        var d = wx.getSystemInfoSync();
        t.setData({
            sysW: d.windowWidth / 7,
            sysH: d.windowHeight,
            show_: "",
            arr1: t.data.arr1,
            arr: t.data.arr,
            arr2: t.data.arr2,
            year: t.data.year,
            getDate: t.data.getDate,
            month: t.data.month
        });
    },
    tapname4: function(a) {
        var e = a.currentTarget.dataset.id;
        2017 == t.data.year && 10 == t.data.month && e < 18 || t.data.year == t.data.todayYear && t.data.month == t.data.todayMonth && e > t.data.todayData || (t.data.getDate == e ? t.closeRL() : (t.data.getDate = e, 
        t.data.getDate < 10 && (t.data.getDate = "0" + t.data.getDate)), wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), t.setLookLianBo(), t.newgotovideopage(), t.setData({
            getDate: t.data.getDate
        }), t.closeRL());
    },
    zuixinyiqi: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), t.setData({
            show_: !t.data.show_,
            sulanshow: !0,
            year: t.data.todayYear,
            month: t.data.todayMonth,
            getDate: t.data.todayData,
            getDay: t.data.todaygetDay,
            nongli: t.data.todayNongli
        });
        var a = t.data.year + "-" + t.data.month + "-" + t.data.getDate;
        a = new Date(a);
        var e = t.data.serverTime.year + "-" + t.data.serverTime.month + "-" + t.data.serverTime.date, o = ((e = new Date(e)) - a) / 864e5;
        console.log("tempDate=" + o), 0 == o ? t.setData({
            dayStatus: "1"
        }) : 1 == o ? t.setData({
            dayStatus: "0"
        }) : t.setData({
            dayStatus: "2"
        }), t.btncolor(), t.setLookLianBo(), t.newgotovideopage(), t.sanfenzhongId();
    },
    newgotovideopage: function() {
        wx.request({
            url: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&mode=0&serviceId=lianboplus&p=1&n=1&date=" + t.data.year + t.data.month + t.data.getDate,
            success: function(a) {
                t.setData({
                    currentVide: a.data.videoList[0].video_id
                });
            }
        });
    },
    tapname5: function() {
        2017 == t.data.year && 10 == t.data.month || (t.data.month--, 2017 == t.data.year && 10 == t.data.month && t.data.getDate < 18 && (t.data.getDate = 18), 
        0 == t.data.month && (t.data.year--, t.data.month = 12), t.tapname3());
    },
    tapname6: function() {
        t.data.todayYear == t.data.year && t.data.todayMonth == t.data.month || (t.data.month++, 
        t.data.todayYear == t.data.year && t.data.todayMonth == t.data.month && t.data.getDate > t.data.todayData && (t.data.getDate = t.data.todayData), 
        13 == t.data.month && (t.data.year++, t.data.month = 1), t.tapname3());
    },
    closeRL: function() {
        var e = new Date(t.data.year, t.data.month - 1, t.data.getDate);
        t.data.d = e.getDay(), t.data.getDay = "星期" + t.data.weekArr[t.data.d];
        var o = a.GetLunarDay(t.data.year, t.data.month, t.data.getDate);
        t.nongli = o.substring(7, 11), t.setData({
            year: t.data.year,
            getDate: t.data.getDate,
            getDay: t.data.getDay,
            month: t.data.month,
            nongli: t.nongli,
            show_: !0
        }), t.sanfenzhongId(), t.btncolor();
        var n = t.data.year + "-" + t.data.month + "-" + t.data.getDate;
        n = new Date(n);
        var d = t.data.serverTime.year + "-" + t.data.serverTime.month + "-" + t.data.serverTime.date, s = ((d = new Date(d)) - n) / 864e5;
        console.log("tempDate=" + s), 0 == s ? t.setData({
            dayStatus: "1"
        }) : 1 == s ? t.setData({
            dayStatus: "0"
        }) : t.setData({
            dayStatus: "2"
        });
    },
    tapname1: function() {
        if (2017 != t.data.year || 10 != t.data.month || 18 != t.data.getDate) {
            if (t.data.getDate--, 0 == t.data.getDate) {
                t.data.month--, 0 == t.data.month && (t.data.year--, t.data.month = 12);
                var a = new Date(t.data.year, t.data.month, 0);
                t.data.getDate = a.getDate();
            }
            t.getnewData();
        }
    },
    tapname2: function() {
        if (t.data.year != t.data.todayYear || t.data.month != t.data.todayMonth || t.data.getDate != t.data.todayData) {
            t.data.getDate++;
            var a = new Date(t.data.year, t.data.month, 0);
            t.data.getDate > a.getDate() && (t.data.month++, t.data.month > 12 && (t.data.year++, 
            t.data.month = 1), t.data.getDate = 1), t.getnewData();
        }
    },
    getnewData: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        });
        var e = new Date(t.data.year, t.data.month - 1, t.data.getDate);
        t.data.d = e.getDay(), t.data.getDay = "星期" + t.data.weekArr[t.data.d];
        var o = a.GetLunarDay(t.data.year, t.data.month, t.data.getDate);
        t.nongli = o.substring(7, 11), t.data.getDate < 10 && (t.data.getDate = "0" + t.data.getDate), 
        Number(t.data.month) < 10 && (t.data.month = "0" + Number(t.data.month)), t.setData({
            year: t.data.year,
            getDate: t.data.getDate,
            getDay: t.data.getDay,
            month: t.data.month,
            nongli: t.nongli
        }), t.sanfenzhongId();
        var n = t.data.year + "-" + t.data.month + "-" + t.data.getDate;
        n = new Date(n);
        var d = t.data.serverTime.year + "-" + t.data.serverTime.month + "-" + t.data.serverTime.date, s = ((d = new Date(d)) - n) / 864e5;
        console.log("tempDate=" + s), 0 == s ? t.setData({
            dayStatus: "1"
        }) : 1 == s ? t.setData({
            dayStatus: "0"
        }) : t.setData({
            dayStatus: "2"
        }), t.btncolor(), t.setLookLianBo(), t.newgotovideopage();
    },
    jumptabpage: function() {
        wx.navigateTo({
            url: "/pages/tabpage/tabpage"
        });
    },
    changepage: function(a) {
        var t = a.currentTarget.dataset;
        "新闻联播" == t.type ? "0" == t.modetype ? wx.navigateTo({
            url: "../video/video?id=" + t.pageid + "&type=0"
        }) : wx.navigateTo({
            url: "../svideo/svideo?id=" + t.pageid + "&type=0"
        }) : "联播+" == t.type ? wx.navigateTo({
            url: "../article/article?pagetype=2&id=" + t.pageid
        }) : wx.navigateTo({
            url: "../article/article?pagetype=1&id=" + t.pageid
        });
    },
    gotofollowpage: function() {
        wx.navigateTo({
            url: "../follow/follow"
        });
    },
    gototabpage: function() {
        wx.navigateTo({
            url: "../tabpage/tabpage"
        });
    },
    gotoonegzpage: function(a) {
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + t.val
        });
    },
    btncolor: function() {
        t.data.year == t.data.todayYear && t.data.month == t.data.todayMonth && t.data.getDate == t.data.todayData ? t.setData({
            youbtnCol: !0,
            zuobtnCol: !1
        }) : 2017 == t.data.year && 10 == t.data.month && 18 == t.data.getDate ? t.setData({
            youbtnCol: !1,
            zuobtnCol: !0
        }) : t.setData({
            youbtnCol: !1,
            zuobtnCol: !1
        });
    },
    noevent: function() {},
    closeRL1: function() {
        t.data.year = t.data.newyear1107, t.data.month = t.data.newmonth1107, t.data.getDate = t.data.newdate1107, 
        t.closeRL();
    },
    getServerTime: function() {
        wx.request({
            url: t.data.timeSUrl,
            success: function(a) {
                if ("101" == a.data.errcode) console.log("无效的接口地址"); else {
                    var e = a.data.split("('")[1];
                    e = e.split(" ")[0], console.log("temptime=" + e);
                    var o = new Date(e), n = {};
                    n.year = o.getFullYear(), n.month = o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1, 
                    n.date = o.getDate() < 10 ? "0" + o.getDate() : o.getDate(), n.getServer = !0, t.setData({
                        serverTime: n
                    }), setTimeout(function() {
                        console.log("服务器时间that.Data.serverTime=" + t.data.serverTime.year + t.data.serverTime.month + t.data.serverTime.date);
                    }, 100);
                }
            },
            fail: function() {
                console.log("getServerTime()请求服务器时间time.php接口失败，获取本地时间");
            }
        });
    },
    getEidtorTime: function(a) {
        wx.showLoading({
            title: "获取最新数据"
        });
        var e = Math.random(), o = "";
        a ? (console.log("获取随机数抓取最新维护接口random=" + e), o = "https://tv.cctv.com/lm/xwlb/xcx/index.json?" + e) : o = "https://tv.cctv.com/lm/xwlb/xcx/index.json", 
        wx.request({
            url: o,
            success: function(a) {
                var e = {};
                e.time = a.data.editorTime.time, e.status = a.data.editorTime.status, e.success = !0, 
                t.setData({
                    editorTime: e
                }), wx.hideLoading(), console.log("第一步获取编辑维护的最新一期时间状态接口返回成功date=" + e.time), t.getPageData(e.time);
            },
            fail: function() {
                if (console.log("getEidtorTime()从服务器获取编辑维护接口失败，接口地址:tv.cctv.com/lm/xwlb/xcx/index.json,直接获取接口最新一期数据"), 
                wx.hideLoading(), t.data.netInfo.status) {
                    var a = {};
                    a.time = "", a.status = "", a.success = !1, t.setData({
                        editorTime: a
                    }), t.getPageData();
                }
            }
        });
    },
    chargeTopBar: function() {
        var a = t.data.serverTime.year + "" + t.data.serverTime.month + t.data.serverTime.date;
        if (console.log("获取维护最新日期that.data.editorTime.status =" + t.data.editorTime.status), 
        1 == t.data.editorTime.status) if (console.log("that.data.serverTime.hour=" + t.data.serverTime.hour), 
        a == t.data.editorTime.time) t.setData({
            topbar: 0
        }); else {
            console.log(t.data.lineHour);
            var e = t.data.serverTime.hour - t.data.lineHour;
            e > 0 || 0 == e ? t.setData({
                topbar: 1
            }) : t.setData({
                topbar: 0
            });
        } else 0 == t.data.editorTime.status && (console.log("判断当前维护的日期是否是今日，如果是今日则获取昨天的数据"), 
        t.setData({
            topbar: 2
        }));
    },
    sliderTap: function(a) {
        n.seek(t, o);
    },
    sliderStart: function(a) {
        console.log("sliderStart");
    },
    sliderChange: function(a) {
        console.log("sliderChange");
    },
    sliderEnd: function(a) {
        console.log("sliderEnd"), n.seek(t, o);
    },
    sliderCancel: function(a) {
        console.log("sliderCancel"), n.seek(t, o);
    },
    songToggle: function() {
        n.songToggle(t, o);
    },
    onShow: function() {
        n.readAudio("storageAudio", t), n.audioEvent(t, o), t.isShowFollow();
    },
    onUnload: function() {
        1 == t.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), n.saveAudio("storageAudio", t.data.dataAudio, t)) : (console.log("暂停音频跳出，清理音频缓存"), 
        n.removeAudio("storageAudio"));
    }
});