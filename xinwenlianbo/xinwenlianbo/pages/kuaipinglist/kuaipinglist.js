var a = require("../../templates/search/search_temp.js"), t = "", o = wx.getBackgroundAudioManager(), e = require("../../utils/audioStorage.js");

Page({
    data: {
        wuwangluo: !1,
        responseok: !1,
        lunBoTu_url: "https://api.cntv.cn/list/getWxArticleList?serviceId=lianboplus&id=PAGES0fQGGS65U3FzbsI5qSj180226&p=1&n=3",
        conList: "https://api.cntv.cn/list/getWxArticleList?serviceId=lianboplus",
        page: 1,
        num: 10,
        total: 0,
        scrollviewH: 0,
        istTop: !1,
        scrollTopView: 0,
        scrollH: "0",
        showLoading: !0,
        showTip: !1,
        pageid: "",
        qtext: "",
        yskp_bd: "",
        lb_show: !1,
        list_show: !1,
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
        a.redirectTosearch(t);
    },
    onLoad: function(o) {
        if (t = this, t.wxzxSlider = t.selectComponent("#wxzxSlider"), "" != o.id && "undefined" != o.id && null != o.id && void 0 != o.id) {
            wx.showLoading({
                title: "加载中",
                mask: !0
            }), a.searchEvent(t), t.getLunBoTu(t.data.lunBoTu_url);
            var e = o.id;
            t.setData({
                wuwangluo: !1
            });
            var i = t.data.conList + "&id=" + e + "&p=" + t.data.page + "&n=" + t.data.num;
            t.setData({
                pageid: o.id
            }), t.getConList(i, t.data.page, t.data.num, "videosList", !1);
        } else t.setData({
            wuwangluo: !0
        }), console.log("文章列表id不存在");
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    scrollviewH: a.windowHeight
                });
            }
        });
    },
    getLunBoTu: function(a) {
        console.log(a), wx.request({
            url: a,
            success: function(a) {
                var o = a.data;
                if (console.log(o), o.errcode) wx.hideLoading(), console.log("加载轮播图失败"), t.setData({
                    wuwangluo: !0
                }); else {
                    t.setData({
                        wuwangluo: !1
                    });
                    for (var e in o.videoList) {
                        var i = o.videoList[e].pub_date;
                        o.videoList[e].date = t.getNowFormatDate(i);
                    }
                    for (var e in o.videoList) o.videoList[e].article_title = o.videoList[e].article_title.replace("【央视快评】", ""), 
                    "" == a.data.videoList[e].article_logo && (a.data.videoList[e].article_logo = "../../img/kuaiping.jpg");
                    t.setData({
                        yskp_bd: a.data.videoList
                    }), setTimeout(function() {
                        t.data.lb_show = !0, t.data.lb_show && t.data.list_show && (wx.hideLoading(), t.data.responseok = !0, 
                        t.setData({
                            responseok: !0
                        }));
                    }, 300);
                }
            },
            fail: function(a) {
                wx.hideLoading(), t.setData({
                    wuwangluo: !0
                });
            }
        });
    },
    getConList: function(a, o, e, i, s) {
        wx.request({
            url: a,
            success: function(a) {
                if (a.data.errcode) 1 == o ? (wx.hideLoading(), console.log("加载失败，请检查域名"), t.setData({
                    wuwangluo: !0
                })) : (console.log("数据为空"), t.data.showLoading = !1, t.setData({
                    showLoading: t.data.showLoading
                })); else {
                    t.setData({
                        wuwangluo: !1
                    }), t.setData({
                        total: a.data.total
                    });
                    var e = {};
                    for (var n in a.data.videoList) {
                        var d = a.data.videoList[n].pub_date;
                        a.data.videoList[n].pub_date = t.getNowFormatDate(d);
                        for (var l = a.data.videoList[n].news_hl_tag.split(","), u = 0; u < l.length; u++) "" == l[u] && l.splice(u, 1);
                        a.data.videoList[n].news_hl_tag = l;
                    }
                    if (1 == o) e[i] = a.data.videoList, t.setData(e), setTimeout(function() {
                        t.data.list_show = !0, t.data.lb_show && t.data.list_show && (wx.hideLoading(), 
                        t.data.responseok = !0, t.setData({
                            responseok: !0
                        }));
                    }, 300); else {
                        var r = a.data.videoList;
                        e[i] = t.data[i].concat(r), s ? setTimeout(function() {
                            t.setData(e), t.data.showLoading = !0, t.data.showTip = !0, t.setData({
                                showLoading: !0,
                                showTip: !0
                            });
                        }, 200) : setTimeout(function() {
                            t.setData(e);
                        }, 200);
                    }
                }
            },
            fail: function(a) {
                wx.hideLoading(), 1 == o ? t.setData({
                    wuwangluo: !0
                }) : console.log("请求失败");
            }
        });
    },
    onScrollLower: function() {
        if (0 == t.data.showTip) {
            t.data.page = t.data.page + 1;
            var a = t.data.conList + "&p=" + t.data.page + "&n=" + t.data.num + "&id=" + t.data.pageid;
            t.data.page * t.data.num >= t.data.total ? t.getConList(a, t.data.page, t.data.num, "videosList", !0) : (t.data.showLoading = !1, 
            t.setData({
                showLoading: !1
            }), t.getConList(a, t.data.page, t.data.num, "videosList", !1));
        }
    },
    onScorll: function(a) {
        a.detail.scrollTop > t.data.scrollviewH ? t.data.istTop || t.setData({
            istTop: !0
        }) : t.data.istTop && t.setData({
            istTop: !1
        });
    },
    onGoTop: function(a) {
        t.setData({
            scrollTopView: 0,
            istTop: !1
        });
    },
    toArticle: function(a) {
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../article/article?pagetype=1&id=" + t.aid
        });
    },
    toTag: function(a) {
        var t = a.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + t.tag
        });
    },
    getNowFormatDate: function(a) {
        var t = a.substring(0, 10);
        return t.split("-")[0] + "." + t.split("-")[1] + "." + t.split("-")[2];
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新");
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    sliderTap: function(a) {
        e.seek(t, o);
    },
    sliderStart: function(a) {
        console.log("sliderStart");
    },
    sliderChange: function(a) {
        console.log("sliderChange");
    },
    sliderEnd: function(a) {
        console.log("sliderEnd"), e.seek(t, o);
    },
    sliderCancel: function(a) {
        console.log("sliderCancel"), e.seek(t, o);
    },
    songToggle: function() {
        e.songToggle(t, o);
    },
    onShow: function() {
        e.readAudio("storageAudio", t), e.audioEvent(t, o);
    },
    onUnload: function() {
        1 == t.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), e.saveAudio("storageAudio", t.data.dataAudio, t)) : (console.log("暂停音频跳出，清理音频缓存"), 
        e.removeAudio("storageAudio"));
    }
});