var t = "", a = getApp(), e = wx.getBackgroundAudioManager(), o = require("../../utils/audioStorage.js");

Page({
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
        isguanzhu: "+添加关注",
        showLoading: !0,
        istTop: !1,
        showendKP: !1,
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
    onLoad: function(e) {
        (t = this).wxzxSlider = t.selectComponent("#wxzxSlider"), wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), a.getNetInfo(t), t.setData({
            _title: e.tag
        }), wx.setNavigationBarTitle({
            title: "更多内容"
        }), t.getConlist(t.data._title), wx.getStorage({
            key: "followStorage",
            success: function(a) {
                t.setData({
                    _huancun: a.data
                });
                for (var e = 0; e < t.data._huancun.length; e++) if (t.data._huancun[e].follow == t.data._title) {
                    t.setData({
                        isguanzhu: "取消关注"
                    });
                    break;
                }
            }
        });
    },
    onReady: function() {
        t.data.netInfo.status && t.setHeight();
    },
    rushPage: function() {
        a.getNetInfo(t);
        setTimeout(function() {
            t.data.netInfo.status && t.onLoad();
        }, 500);
    },
    setHeight: function(a) {
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    second_height: a.windowHeight - a.windowWidth / 750 * 100
                });
            }
        });
    },
    getConlist: function(a) {
        var e = t.data.listConp, o = a, n = t.data._data;
        wx.request({
            url: "https://api.cntv.cn/list/getWxVListByTagMem?n=20&serviceId=lianboplus",
            data: {
                p: e,
                tag: o
            },
            success: function(a) {
                0 == a.data.total ? t.setData({
                    shownoresult: !0
                }) : t.setData({
                    shownoresult: !1
                });
                for (var o = 0; o < a.data.dataList.length; o++) {
                    a.data.dataList[o].newsTitle = a.data.dataList[o].newsTitle.replace(/\[视频\]/g, ""), 
                    a.data.dataList[o]._newsFocusDate = a.data.dataList[o].newsFocusDate.split("-")[0] + "." + a.data.dataList[o].newsFocusDate.split("-")[1] + "." + a.data.dataList[o].newsFocusDate.split("-")[2].split(" ")[0], 
                    "PAGES0fQGGS65U3FzbsI5qSj180226" == a.data.dataList[o].newsPrimaryPageId ? a.data.dataList[o].contype = "快评" : "PAGEhX8s5pIxvHLUxvGqAlnG180411" == a.data.dataList[o].newsPrimaryPageId ? a.data.dataList[o].contype = "联播+" : a.data.dataList[o].newsLength ? (a.data.dataList[o].contype = "新闻联播", 
                    a.data.dataList[o].newsLength = a.data.dataList[o].newsLength.substring(3, a.data.dataList[o].newsLength.length)) : a.data.dataList[o].contype = "";
                    var s = a.data.dataList[o].newsHLTag.split(" ");
                    a.data.dataList[o].gjc = s, n.push(a.data.dataList[o]);
                }
                t.setData({
                    _data: n,
                    isgetmore: !0,
                    showLoading: !1
                }), wx.hideToast(), 20 * e >= a.data.total && t.setData({
                    isgetmore: !1,
                    showLoading: !0,
                    showendKP: !0
                });
            }
        });
    },
    loadMore: function() {
        t.data.isgetmore && (t.setData({
            listConp: Number(t.data.listConp) + 1,
            isgetmore: !1
        }), t.getConlist(t.data._title));
    },
    isguanzhu: function() {
        if ("+添加关注" != t.data.isguanzhu) {
            for (var a = 0; a < t.data._huancun.length; a++) t.data._huancun[a].follow == t.data._title && t.data._huancun.splice(a, 1);
            return t.setData({
                isguanzhu: "+添加关注"
            }), void wx.setStorage({
                key: "followStorage",
                data: t.data._huancun
            });
        }
        t.data._huancun.length < 7 ? (t.setData({
            isguanzhu: "取消关注"
        }), t.data._huancun.unshift({
            follow: t.data._title
        }), wx.setStorage({
            key: "followStorage",
            data: t.data._huancun
        })) : wx.showToast({
            title: "最多关注7个标签",
            icon: "none",
            duration: 1e3
        });
    },
    changepage: function(t) {
        var a = t.currentTarget.dataset;
        "新闻联播" == a.type ? "0" == a.modetype ? wx.navigateTo({
            url: "../video/video?id=" + a.pageid + "&type=0"
        }) : wx.navigateTo({
            url: "../svideo/svideo?id=" + a.pageid + "&type=0"
        }) : "联播+" == a.type ? wx.navigateTo({
            url: "../article/article?pagetype=2&id=" + a.pageid
        }) : wx.navigateTo({
            url: "../article/article?pagetype=1&id=" + a.pageid
        });
    },
    gotoonegzpage: function(t) {
        var a = t.currentTarget.dataset;
        wx.redirectTo({
            url: "../onegzpage/onegzpage?tag=" + a.val
        });
    },
    getscroll: function(a) {
        a.detail.scrollTop > t.data.second_height ? t.data.istTop || t.setData({
            istTop: !0
        }) : t.data.istTop && t.setData({
            istTop: !1
        });
    },
    onGoTop: function() {
        t.setData({
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
        o.seek(t, e);
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(a) {
        console.log("sliderEnd"), o.seek(t, e);
    },
    sliderCancel: function(a) {
        console.log("sliderCancel"), o.seek(t, e);
    },
    songToggle: function() {
        o.songToggle(t, e);
    },
    onShow: function() {
        o.readAudio("storageAudio", t), o.audioEvent(t, e);
    },
    onUnload: function() {
        1 == t.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), o.saveAudio("storageAudio", t.data.dataAudio, t)) : (console.log("暂停音频跳出，清理音频缓存"), 
        o.removeAudio("storageAudio"));
    }
});