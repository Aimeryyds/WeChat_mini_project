var e = "", t = require("../../wxParse/wxParse.js"), a = require("../../templates/share/share_temp.js"), o = require("../../templates/search/search_temp.js"), i = (getApp(), 
wx.getBackgroundAudioManager()), s = require("../../utils/audioStorage.js");

Page({
    data: {
        wuwangluo: !1,
        responseok: !1,
        itemtitle: "",
        vImage: "",
        itemsource: "",
        pub_time: "",
        itemcontent: "",
        itemtag: "",
        article_logo_photo: "",
        article_desc: "",
        itemtag_read: "",
        aurl: "https://api.cntv.cn/Article/contentinfo?serviceId=lianboplus",
        articleId: "VIDE1441081816085432",
        tagurl: "https://api.cntv.cn/list/getWxNewsTag?serviceId=lianboplus",
        recdata: "",
        refreshFlag: !1,
        hideFlag: !1,
        scrollviewH: 0,
        istTop: !1,
        scrollTopView: 0,
        scrollH: "0",
        lunBoItem: "www",
        pageid: "",
        pagetype: "",
        shareName: "分享",
        qtext: "",
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
        o.redirectTosearch(e);
    },
    onLoad: function(t) {
        (e = this).wxzxSlider = e.selectComponent("#wxzxSlider"), "" != t.id && "undefined" != t.id && null != t.id && void 0 != t.id ? (wx.showLoading({
            title: "加载中",
            mask: !0
        }), o.searchEvent(e), 1 == t.share && (e.setData({
            share: 1
        }), a.backhome(e)), console.log("网络状态:" + e.data.wuwangluo), e.setData({
            wuwangluo: !1
        }), e.getArticleList(t.id)) : (console.log("网络状态:" + e.data.wuwangluo), e.setData({
            wuwangluo: !0
        }), console.log("articleId 不存在")), wx.getSystemInfo({
            success: function(t) {
                e.setData({});
            }
        });
    },
    getArticle: function(a, o) {
        wx.request({
            url: a + "&id=" + o,
            success: function(a) {
                var o = a.data;
                if (o.errcode) wx.hideLoading(), console.log("加载失败，请检查域名"), e.setData({
                    wuwangluo: !0
                }); else {
                    e.setData({
                        wuwangluo: !1
                    });
                    var i = {};
                    o.pubtime;
                    i.itemtitle = o.title, e.setData({
                        itemtitle: o.title
                    }), i.itemsource = o.source, o.pubtime = e.getNowFormatDate(o.pubtime), e.setData({
                        pub_time: o.pubtime
                    }), t.wxParse("itemcontent", "html", o.content, e, 0), i.article_logo_photo = o.logo, 
                    i.article_desc = o.desc, e.setData(i), setTimeout(function() {
                        wx.hideLoading(), e.data.responseok = !0, e.setData({
                            responseok: !0
                        });
                    }, 200);
                }
            },
            fail: function(t) {
                wx.hideLoading(), e.setData({
                    wuwangluo: !0
                });
            }
        });
    },
    onScorll: function(t) {
        t.detail.scrollTop > e.data.scrollviewH ? e.data.istTop || e.setData({
            istTop: !0
        }) : e.data.istTop && e.setData({
            istTop: !1
        });
    },
    onGoTop: function(t) {
        e.setData({
            scrollTopView: 0,
            istTop: !1
        });
    },
    getNowFormatDate: function(e) {
        var t = e.substring(0, 10), a = t.split("-")[0], o = t.split("-")[1], i = t.split("-")[2];
        e.substring(11, 16);
        return a + "." + o + "." + i;
    },
    getNowFormatTime: function(e) {
        var t = new Date(e), a = t.getMonth() + 1, o = t.getDate(), i = t.getHours(), s = t.getMinutes(), n = t.getMinutes();
        return a >= 1 && a <= 9 && (a = "0" + a), o >= 0 && o <= 9 && (o = "0" + o), i >= 0 && i <= 9 && (i = "0" + i), 
        s >= 0 && s <= 9 && (s = "0" + s), n >= 0 && n <= 9 && (n = "0" + n), t.getFullYear() + "." + a + "." + o;
    },
    onShareAppMessage: function(t) {
        return {
            title: e.data.itemtitle,
            path: "/pages/article/article?share=1&id=" + e.data.articleId + "&type=" + e.data.pagetype,
            imageUrl: e.data.vImage,
            success: function(e) {},
            fail: function(e) {
                console.log("path=失败" + e);
            }
        };
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新");
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    getArticleList: function(t) {
        wx.request({
            url: "https://api.cntv.cn/list/getWxArticleList?id=PAGEb3A73LquTUFIbR5GjLgg180411&serviceId=lianboplus&date=" + t,
            success: function(t) {
                t.data.total >= 1 ? (e.setData({
                    articleId: t.data.videoList[0].article_id
                }), e.getArticle(e.data.aurl, e.data.articleId)) : (wx.hideLoading(), wx.showToast({
                    title: "暂无数据",
                    icon: "none",
                    duration: 1e3
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 1100));
            },
            fail: function() {
                console.log("网络状态:" + e.data.wuwangluo), e.setData({
                    wuwangluo: !0
                }), wx.hideLoading();
            }
        });
    },
    sliderTap: function(t) {
        s.seek(e, i);
    },
    sliderStart: function(e) {
        console.log("sliderStart");
    },
    sliderChange: function(e) {
        console.log("sliderChange");
    },
    sliderEnd: function(t) {
        console.log("sliderEnd"), s.seek(e, i);
    },
    sliderCancel: function(t) {
        console.log("sliderCancel"), s.seek(e, i);
    },
    songToggle: function() {
        s.songToggle(e, i);
    },
    onShow: function() {
        s.readAudio("storageAudio", e), s.audioEvent(e, i);
    },
    onUnload: function() {
        1 == e.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), s.saveAudio("storageAudio", e.data.dataAudio, e)) : (console.log("暂停音频跳出，清理音频缓存"), 
        s.removeAudio("storageAudio"));
    }
});