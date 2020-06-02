var t = "", e = getApp(), a = wx.getBackgroundAudioManager(), o = require("../../utils/audioStorage.js");

Page({
    data: {
        netInfo: {},
        currentTab: 0,
        winWidth: 0,
        winHeight: 0,
        ishaveDataZQ: !1,
        ishaveDataDT: !1,
        ishaveDataKP: !1,
        ishaveDataLBJ: !1,
        storageZQlist: [],
        storageDTlist: [],
        storageKPlist: [],
        storageLBJlist: [],
        istTop: !1,
        scrollTopView: 0,
        scrollH: "0",
        scrollviewH: 0,
        showendZQ: !1,
        showendDT: !1,
        showendKP: !1,
        showendLBJ: !1,
        systemInfo: {},
        ifbutton: !0,
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
        (t = this).wxzxSlider = t.selectComponent("#wxzxSlider"), wx.getSystemInfo({
            success: function(e) {
                e.model.indexOf("iPhone X") > -1 ? t.setData({
                    winWidth: e.windowWidth,
                    winHeight: e.windowHeight - 20,
                    scrollHeight: e.windowHeight - 70,
                    scrollviewH: e.windowHeight - 70,
                    marginbottom: 0,
                    paddingbottom: 40,
                    padding: 100
                }) : t.setData({
                    winWidth: e.windowWidth,
                    winHeight: e.windowHeight,
                    scrollHeight: e.windowHeight - 50,
                    scrollviewH: e.windowHeight - 50,
                    marginbottom: 0,
                    padding: 100
                });
            }
        }), t.getDatastorage();
    },
    rushPage: function() {
        e.getNetInfo(t);
        setTimeout(function() {
            t.data.netInfo.status && t.getDatastorage();
        }, 500);
    },
    bindChange: function(e) {
        t.data.ifbutton ? (t.setData({
            currentTab: e.detail.current,
            ifbutton: !1,
            istTop: !1
        }), setTimeout(function() {
            t.setData({
                ifbutton: !0
            });
        }, 100), t.getDatastorage()) : wx.showToast({
            title: "请不要频繁点击",
            duration: 2e3
        });
    },
    swichNav: function(e) {
        if (t.data.currentTab === e.target.dataset.current) return !1;
        t.setData({
            currentTab: e.target.dataset.current,
            istTop: !1
        }), t.getDatastorage();
    },
    onReady: function() {
        e.getNetInfo(t);
    },
    getDatastorage: function() {
        if (0 == t.data.currentTab) {
            var e = wx.getStorageSync("storageZQKey");
            if ("" == e) t.setData({
                ishaveDataZQ: !1
            }); else if (e.length > 0) {
                for (var a = [], o = [], i = [], s = 0; s < e.length; s++) {
                    w = e[s].dataZQ;
                    -1 == a.indexOf(w) && (a.push(w), o.push(e[s]));
                }
                wx.setStorage({
                    key: "storageZQKey",
                    data: o,
                    success: function() {
                        for (var e = wx.getStorageSync("storageZQKey"), a = e.length - 1; a >= 0; a--) i.push(e[a]);
                        t.setData({
                            showendZQ: !0,
                            ishaveDataZQ: !0,
                            storageZQlist: i
                        });
                    }
                });
            } else t.setData({
                showendZQ: !1
            });
        }
        if (1 == t.data.currentTab) {
            var n = wx.getStorageSync("storageDTKey");
            if ("" == n) t.setData({
                ishaveDataDT: !1
            }); else {
                if (n.length > 0) {
                    for (var a = [], r = [], g = [], s = 0; s < n.length; s++) {
                        w = n[s].vidDT;
                        -1 == a.indexOf(w) && (a.push(w), r.push(n[s]));
                    }
                    wx.setStorage({
                        key: "storageDTKey",
                        data: r,
                        success: function() {
                            for (var e = wx.getStorageSync("storageDTKey"), a = e.length - 1; a >= 0; a--) g.push(e[a]);
                            t.setData({
                                showendDT: !0,
                                ishaveDataDT: !0,
                                storageDTlist: g
                            });
                        }
                    });
                } else t.setData({
                    showendDT: !1
                });
                t.setData({
                    ishaveDataDT: !0,
                    storageDTlist: g
                });
            }
        }
        if (2 == t.data.currentTab) {
            var d = wx.getStorageSync("storageKPKey");
            if ("" == d) t.setData({
                ishaveDataKP: !1
            }); else {
                if (d.length > 0) {
                    for (var a = [], l = [], u = [], s = 0; s < d.length; s++) {
                        w = d[s].vidKP;
                        -1 == a.indexOf(w) && (a.push(w), l.push(d[s]));
                    }
                    for (D = l.length - 1; D >= 0; D--) u.push(l[D]);
                    t.setData({
                        showendKP: !0,
                        storageKP: l
                    });
                } else t.setData({
                    showendKP: !1
                });
                t.setData({
                    ishaveDataKP: !0,
                    storageKPlist: u
                });
            }
        }
        if (3 == t.data.currentTab) {
            var c = wx.getStorageSync("storageLBJKey");
            if ("" == c) t.setData({
                ishaveDataLBJ: !1
            }); else {
                if (c.length > 0) {
                    for (var a = [], h = [], f = [], s = 0; s < c.length; s++) {
                        var w = c[s].vidKP;
                        -1 == a.indexOf(w) && (a.push(w), h.push(c[s]));
                    }
                    for (var D = h.length - 1; D >= 0; D--) f.push(h[D]);
                    t.setData({
                        showendLBJ: !0,
                        storageLBJ: h
                    });
                } else t.setData({
                    showendLBJ: !1
                });
                t.setData({
                    ishaveDataLBJ: !0,
                    storageLBJlist: f
                });
            }
        }
    },
    timechange: function(t) {
        return t.substring(0, 4) + "." + t.substring(4, 6) + "." + t.substring(6, 8);
    },
    gotovideopage: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../video/video?id=" + e.vid + "&type=0&date=" + e.data
        });
    },
    gotoSvideopage: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../svideo/svideo?id=" + e.vid + "&type=0"
        });
    },
    gotoKaipingpage: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../article/article?pagetype=1&id=" + e.aid
        });
    },
    gotoLianbojiapage: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../article/article?pagetype=2&id=" + e.aid
        });
    },
    onPullDownRefresh: function() {},
    onScorll: function(e) {
        t.setData({
            scrollH: e.detail.scrollTop + 200
        }), t.data.scrollH > t.data.scrollviewH ? t.setData({
            istTop: !0
        }) : t.setData({
            istTop: !1
        });
    },
    onGoTop: function(e) {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 400
        }), t.setData({
            scrollTop: 0,
            istTop: !1
        });
    },
    toTag: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + e.tag
        });
    },
    sliderTap: function(e) {
        o.seek(t, a);
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(e) {
        console.log("sliderEnd"), o.seek(t, a);
    },
    sliderCancel: function(e) {
        console.log("sliderCancel"), o.seek(t, a);
    },
    songToggle: function() {
        o.songToggle(t, a);
    },
    onShow: function() {
        t.data.netInfo.status && t.getDatastorage(), o.readAudio("storageAudio", t), o.audioEvent(t, a);
    },
    onUnload: function() {
        1 == t.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), o.saveAudio("storageAudio", t.data.dataAudio, t)) : (console.log("暂停音频跳出，清理音频缓存"), 
        o.removeAudio("storageAudio"));
    }
});