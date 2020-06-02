var t = require("../../templates/search/search_temp.js"), a = "", o = getApp(), e = wx.getBackgroundAudioManager(), i = require("../../utils/audioStorage.js");

Page({
    data: {
        netInfo: {},
        lunBoTu_url: "https://api.cntv.cn/list/getWxArticleList?id=PAGEhX8s5pIxvHLUxvGqAlnG180411&serviceId=lianboplus&p=1&n=3",
        conList: "https://api.cntv.cn/list/getWxArticleList?id=PAGEhX8s5pIxvHLUxvGqAlnG180411&serviceId=lianboplus",
        page: 1,
        num: 10,
        total: 0,
        scrollviewH: 0,
        istTop: !1,
        scrollTopView: 0,
        scrollH: "0",
        showLoading: !0,
        showTip: !1,
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
        t.redirectTosearch(a);
    },
    onLoad: function(t) {
        a = this, o.getNetInfo(a), a.wxzxSlider = a.selectComponent("#wxzxSlider");
    },
    onReady: function() {
        a.data.netInfo.status && a.getPageData();
    },
    rushPage: function() {
        console.log("刷新"), o.getNetInfo(a);
        setTimeout(function() {
            a.data.netInfo.status && a.getPageData();
        }, 500);
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新"), a.rushPage();
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    getPageData: function() {
        t.searchEvent(a), wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e4
        }), a.getLunBoTu(a.data.lunBoTu_url);
        var o = a.data.conList + "&p=" + a.data.page + "&n=" + a.data.num;
        a.getConList(o, a.data.page, a.data.num, "videosList", !1), wx.getSystemInfo({
            success: function(t) {
                t.model.indexOf("iPhone X"), a.setData({});
            }
        });
    },
    getLunBoTu: function(t) {
        console.log(t), wx.request({
            url: t,
            success: function(t) {
                var o = t.data;
                if ("1001" == o.errcode || "1002" == o.errcode || "1003" == o.errcode) console.log("数据为空"); else {
                    for (var e in o.videoList) {
                        var i = o.videoList[e].pub_date;
                        o.videoList[e].date = a.getNowFormatDate(i), "" == t.data.videoList[e].article_logo && (t.data.videoList[e].article_logo = "../../img/lianbo+.jpg");
                    }
                    a.setData({
                        yskp_bd: o.videoList
                    }), setTimeout(function() {
                        a.data.lb_show = !0, a.data.lb_show && a.data.list_show && wx.hideToast();
                    }, 300);
                }
            },
            fail: function(t) {
                console.log("请求轮播图失败");
            }
        });
    },
    getConList: function(t, o, e, i, s) {
        console.log("url=" + t), wx.request({
            url: t,
            success: function(t) {
                if ("1001" == t.data.errcode || "1002" == t.data.errcode || "1003" == t.data.errcode) console.log("数据为空"), 
                a.data.showLoading = !1, a.setData({
                    showLoading: a.data.showLoading
                }); else {
                    a.setData({
                        total: t.data.total
                    });
                    var e = {};
                    for (var n in t.data.videoList) {
                        var d = t.data.videoList[n].pub_date;
                        t.data.videoList[n].pub_date = a.getNowFormatDate(d);
                        for (var l = t.data.videoList[n].news_hl_tag.split(","), r = 0; r < l.length; r++) "" == l[r] && l.splice(r, 1);
                        t.data.videoList[n].news_hl_tag = l;
                    }
                    if (1 == o) e[i] = t.data.videoList, a.setData(e), setTimeout(function() {
                        a.data.list_show = !0, a.data.lb_show && a.data.list_show && wx.hideToast();
                    }, 300); else {
                        var u = t.data.videoList;
                        e[i] = a.data[i].concat(u), s ? setTimeout(function() {
                            a.setData(e), a.data.showLoading = !0, a.data.showTip = !0, a.setData({
                                showLoading: !0,
                                showTip: !0
                            });
                        }, 200) : setTimeout(function() {
                            a.setData(e);
                        }, 200);
                    }
                }
            },
            fail: function(t) {
                console.log("请求正文数据失败");
            }
        });
    },
    onScrollLower: function() {
        if (0 == a.data.showTip) {
            a.data.page = a.data.page + 1;
            var t = a.data.conList + "&p=" + a.data.page + "&n=" + a.data.num;
            a.data.page * a.data.num >= a.data.total ? a.getConList(t, a.data.page, a.data.num, "videosList", !0) : (a.data.showLoading = !1, 
            a.setData({
                showLoading: !1
            }), a.getConList(t, a.data.page, a.data.num, "videosList", !1));
        }
    },
    onScorll: function(t) {
        t.detail.scrollTop > a.data.scrollviewH ? a.data.istTop || a.setData({
            istTop: !0
        }) : a.data.istTop && a.setData({
            istTop: !1
        });
    },
    onGoTop: function(t) {
        a.setData({
            scrollTopView: 0,
            istTop: !1
        });
    },
    toArticle: function(t) {
        var a = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../article/article?pagetype=2&id=" + a.aid
        });
    },
    toTag: function(t) {
        var a = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + a.tag
        });
    },
    getNowFormatDate: function(t) {
        var a = t.substring(0, 10);
        return a.split("-")[0] + "." + a.split("-")[1] + "." + a.split("-")[2];
    },
    sliderTap: function(t) {
        i.seek(a, e);
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(t) {
        console.log("sliderEnd"), i.seek(a, e);
    },
    sliderCancel: function(t) {
        console.log("sliderCancel"), i.seek(a, e);
    },
    songToggle: function() {
        i.songToggle(a, e);
    },
    onShow: function() {
        1 == a.data.lb_show && 1 == a.data.list_show || a.rushPage(), i.readAudio("storageAudio", a), 
        i.audioEvent(a, e);
    },
    onUnload: function() {
        1 == a.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), i.saveAudio("storageAudio", a.data.dataAudio, a)) : (console.log("暂停音频跳出，清理音频缓存"), 
        i.removeAudio("storageAudio"));
    }
});