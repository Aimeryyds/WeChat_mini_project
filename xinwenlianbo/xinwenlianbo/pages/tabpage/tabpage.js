function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = "", o = getApp(), n = wx.getBackgroundAudioManager(), s = require("../../utils/audioStorage.js");

Page((t = {
    data: {
        netInfo: {},
        showGZlist: !1,
        second_height: 0,
        _huancun: [],
        btntext: "全部",
        p: "1",
        isscroll: !0,
        listCon: [],
        listConp: 1,
        topNav: !0,
        id: 19,
        isgetmore: !0,
        _data: [],
        shownoresult: !1,
        val: "",
        showLoading: !0,
        istTop: !1,
        onshowtimes: 2,
        showendKP: !1,
        backshuaxin: !0,
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
    onLoad: function(a) {
        (e = this).wxzxSlider = e.selectComponent("#wxzxSlider"), wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), o.getNetInfo(e);
    },
    onReady: function() {
        e.data.netInfo.status && (e.onLoad(), e.setHeight(), e.gethuancun(e.data.val));
    },
    onShow: function() {
        e.data.backshuaxin && (e.data.onshowtimes--, e.data.onshowtimes <= 0 && (wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), wx.getStorage({
            key: "followStorage",
            success: function(a) {
                if (0 == a.data.length) return e.setData({
                    wushuju: !0,
                    shownoresult: !0,
                    showendKP: !1,
                    showLoading: !0,
                    _huancun: a.data
                }), void wx.hideToast();
                e.setData({
                    showLoading: !0,
                    showendKP: !1,
                    _huancun: a.data,
                    _data: [],
                    id: 19,
                    topNav: !0
                });
                for (var t = "", o = 0; o < e.data._huancun.length; o++) t += e.data._huancun[o].follow, 
                o < e.data._huancun.length - 1 && (t += ",");
                e.setData({
                    val: t
                }), e.getConlist(t);
            }
        })));
    },
    rushPage: function() {
        o.getNetInfo(e);
        setTimeout(function() {
            e.data.netInfo.status && e.onLoad();
        }, 500);
    },
    tgzpage: function() {
        wx.navigateTo({
            url: "/pages/follow/follow"
        });
    },
    setHeight: function(a) {
        wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    second_height: a.windowHeight - a.windowWidth / 750 * 100
                });
            }
        });
    },
    gethuancun: function(a) {
        a ? e.getConlist(a) : wx.getStorage({
            key: "followStorage",
            success: function(a) {
                if (0 == a.data.length) return wx.hideToast(), void e.setData({
                    wushuju: !0,
                    shownoresult: !0,
                    showendKP: !1,
                    showLoading: !0,
                    _huancun: a.data
                });
                e.setData({
                    _huancun: a.data
                });
                for (var t = "", o = 0; o < e.data._huancun.length; o++) t += e.data._huancun[o].follow, 
                o < e.data._huancun.length - 1 && (t += ",");
                e.setData({
                    val: t
                }), e.getConlist(t);
            },
            fail: function() {
                wx.hideToast(), e.setData({
                    shownoresult: !0,
                    showendKP: !1
                });
            }
        });
    },
    getConlist: function(a) {
        var t = e.data.listConp, o = a, n = e.data._data;
        wx.request({
            url: "https://api.cntv.cn/list/getWxVListByTagMem?n=20&serviceId=lianboplus",
            data: {
                p: t,
                tag: o
            },
            success: function(a) {
                0 == a.data.total ? e.setData({
                    shownoresult: !0,
                    showendKP: !1
                }) : e.setData({
                    shownoresult: !1,
                    showendKP: !1
                });
                for (var o = 0; o < a.data.dataList.length; o++) {
                    a.data.dataList[o].newsTitle = a.data.dataList[o].newsTitle.replace(/\[视频\]/g, ""), 
                    a.data.dataList[o]._newsFocusDate = a.data.dataList[o].newsFocusDate.split("-")[0] + "." + a.data.dataList[o].newsFocusDate.split("-")[1] + "." + a.data.dataList[o].newsFocusDate.split("-")[2].split(" ")[0], 
                    "PAGES0fQGGS65U3FzbsI5qSj180226" == a.data.dataList[o].newsPrimaryPageId ? a.data.dataList[o].contype = "快评" : "PAGEhX8s5pIxvHLUxvGqAlnG180411" == a.data.dataList[o].newsPrimaryPageId ? a.data.dataList[o].contype = "联播+" : a.data.dataList[o].newsLength ? (a.data.dataList[o].contype = "新闻联播", 
                    a.data.dataList[o].newsLength = a.data.dataList[o].newsLength.substring(3, a.data.dataList[o].newsLength.length)) : a.data.dataList[o].contype = "";
                    var s = a.data.dataList[o].newsHLTag.split(" ");
                    a.data.dataList[o].gjc = s, n.push(a.data.dataList[o]);
                }
                e.setData({
                    _data: n,
                    isgetmore: !0,
                    showLoading: !1
                }), wx.hideToast(), 20 * t >= a.data.total && e.setData({
                    isgetmore: !1,
                    showLoading: !0,
                    showendKP: !0
                });
            }
        });
    },
    clickNav: function(a) {
        if (e.data.id != a.currentTarget.dataset.id) {
            wx.showToast({
                title: "加载中",
                icon: "loading",
                mask: !0,
                duration: 5e3
            });
            var t = a.currentTarget.dataset, o = t.id, n = t.val;
            e.setData({
                topNav: !1,
                id: o,
                _data: [],
                listConp: 1,
                val: n,
                showLoading: !0,
                showendKP: !1
            }), e.getConlist(n);
        }
    },
    clickALL: function() {
        19 != e.data.id && (wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), e.setData({
            id: 19,
            topNav: !0,
            _data: [],
            val: "",
            showLoading: !0,
            showendKP: !1
        }), e.gethuancun(e.data.val));
    },
    loadMore: function() {
        e.data.showLoading || e.data.isgetmore && (e.setData({
            listConp: Number(e.data.listConp) + 1,
            isgetmore: !1
        }), e.gethuancun(e.data.val));
    },
    clickgetMore: function() {
        e.setData({
            backshuaxin: !0
        }), wx.navigateTo({
            url: "../follow/follow"
        });
    },
    changepage: function(a) {
        e.setData({
            backshuaxin: !1
        });
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
    gotoonegzpage: function(a) {
        e.setData({
            backshuaxin: !1
        });
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + t.val
        });
    },
    getscroll: function(a) {
        a.detail.scrollTop > e.data.second_height ? e.data.istTop || e.setData({
            istTop: !0
        }) : e.data.istTop && e.setData({
            istTop: !1
        });
    },
    onGoTop: function() {
        e.setData({
            scrollTop: 0,
            istTop: !1
        });
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新");
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    sliderTap: function(a) {
        s.seek(e, n);
    },
    sliderStart: function(a) {
        console.log("sliderStart");
    },
    sliderChange: function(a) {
        console.log("sliderChange");
    },
    sliderEnd: function(a) {
        console.log("sliderEnd"), s.seek(e, n);
    },
    sliderCancel: function(a) {
        console.log("sliderCancel"), s.seek(e, n);
    },
    songToggle: function() {
        s.songToggle(e, n);
    }
}, a(t, "onShow", function() {
    s.readAudio("storageAudio", e), s.audioEvent(e, n);
}), a(t, "onUnload", function() {
    1 == e.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), s.saveAudio("storageAudio", e.data.dataAudio, e)) : (console.log("暂停音频跳出，清理音频缓存"), 
    s.removeAudio("storageAudio"));
}), t));