var t = "", a = require("../../wxParse/wxParse.js"), e = require("../../templates/share/share_temp.js"), i = require("../../templates/search/search_temp.js"), o = wx.getBackgroundAudioManager(), s = require("../../utils/audioStorage.js");

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
        tag_option: [],
        recurl: "https://api.cntv.cn/list/getWxVListByTagMem?p=1&n=10&serviceId=lianboplus",
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
        storage: [],
        dataArrKP: {
            dataKP: "",
            titleKP: "",
            vidKP: "",
            vLengthKP: "",
            typeKP: "",
            tag: []
        },
        isSave: !1,
        storageKPnum: "",
        vTitle: "",
        vRiqi: "",
        audioIsShow: !0,
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
        i.redirectTosearch(t);
    },
    onLoad: function(a) {
        (t = this).wxzxSlider = t.selectComponent("#wxzxSlider"), 1 == a.pagetype ? (t.setData({
            pageid: "快评",
            pagetype: a.pagetype
        }), wx.setNavigationBarTitle({
            title: "央视快评"
        })) : 2 == a.pagetype && (t.setData({
            pageid: "联播+",
            pagetype: a.pagetype
        }), wx.setNavigationBarTitle({
            title: "新闻联播"
        })), "" != a.id && "undefined" != a.id && null != a.id && void 0 != a.id ? (wx.showLoading({
            title: "加载中",
            mask: !0
        }), i.searchEvent(t), 1 == a.share && (t.setData({
            share: 1
        }), e.backhome(t)), t.setData({
            articleId: a.id
        }), t.setData({
            wuwangluo: !1
        }), t.getArticle(t.data.aurl, t.data.articleId), t.getTags(t.data.tagurl, a.id), 
        t.readStorage(t.data.pagetype)) : (t.setData({
            wuwangluo: !0
        }), console.log("articleId 不存在")), wx.getSystemInfo({
            success: function(a) {
                t.setData({});
            }
        });
    },
    getTags: function(a, e) {
        wx.request({
            url: a + "&id=" + e,
            success: function(a) {
                var e = a.data.data;
                if ("" != e.newsHLTag) {
                    var i = e.newsHLTag.split(","), o = i;
                    i.length > 3 && (o = i.splice(0, 3)), t.setData({
                        tag_option: o
                    }), t.getRecMemu(o);
                } else t.setData({
                    tag_option: []
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getRecMemu: function(a) {
        console.log(t.data.recurl + "&tag=" + a), wx.request({
            url: t.data.recurl + "&tag=" + a,
            success: function(a) {
                if (a.data && a.data.dataList) {
                    t.data.recdata = a.data.dataList, t.setData({
                        recdata: a.data.dataList
                    });
                    for (var e = 0; e < a.data.dataList.length; e++) {
                        a.data.dataList[e].newsFocusDate = t.getNowFormatDate(a.data.dataList[e].newsFocusDate), 
                        a.data.dataList[e].newsLength = a.data.dataList[e].newsLength.substr(3);
                        var i = [];
                        i = "" == a.data.dataList[e].newsHLTag ? [] : a.data.dataList[e].newsHLTag.split(" ");
                        for (var o = 0; o < i.length; o++) "" == i[o] && i.splice(o, 1);
                        a.data.dataList[e].newsHLTag = i;
                    }
                    t.setData({
                        recdata: a.data.dataList
                    });
                } else console.log("数据请求失败");
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    toOtherMenu: function(t) {
        var a = t.currentTarget.dataset, e = "", i = a.newsid, o = a.newseditmode;
        0 == a.newstype ? (e = 1 == o ? "../svideo/svideo?id=" + i + "&type=1" : "../video/video?id=" + i + "&type=1", 
        wx.navigateTo({
            url: e
        })) : 10 == a.newstype && ("PAGEhX8s5pIxvHLUxvGqAlnG180411" == a.newsprimarypageid ? e = "../article/article?pagetype=2&id=" + i : "PAGES0fQGGS65U3FzbsI5qSj180226" == a.newsprimarypageid && (e = "../article/article?pagetype=1&id=" + i), 
        wx.redirectTo({
            url: e
        }));
    },
    toTag: function(t) {
        var a = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + a.tag
        });
    },
    getArticle: function(e, i) {
        wx.request({
            url: e + "&id=" + i,
            success: function(e) {
                var i = e.data;
                if (i.errcode) wx.hideLoading(), console.log("加载失败，请检查域名"), t.setData({
                    wuwangluo: !0
                }); else {
                    t.setData({
                        wuwangluo: !1
                    });
                    var o = {};
                    i.pubtime;
                    o.itemtitle = i.title, t.setData({
                        itemtitle: i.title
                    }), o.itemsource = i.source, i.pubtime = t.getNowFormatDate(i.pubtime), t.setData({
                        pub_time: i.pubtime
                    });
                    for (var s = i.tag.split(" "), r = 0; r < s.length; r++) "" == s[r] && s.splice(r, 1);
                    o.itemtag = s, a.wxParse("itemcontent", "html", i.content, t, 0), o.article_logo_photo = i.logo, 
                    o.article_desc = i.desc, "PAGES0fQGGS65U3FzbsI5qSj180226" == i.primary_page_id && (o.pageid = "快评", 
                    o.pagetype = 1), "PAGEhX8s5pIxvHLUxvGqAlnG180411" == i.primary_page_id && (o.pageid = "联播+", 
                    o.pagetype = 2), t.setData(o), setTimeout(function() {
                        wx.hideLoading(), t.data.responseok = !0, t.setData({
                            responseok: !0
                        });
                    }, 200);
                }
            },
            fail: function(a) {
                wx.hideLoading(), t.setData({
                    wuwangluo: !0
                });
            }
        });
    },
    onScorll: function(a) {
        a.detail.scrollTop > t.data.scrollviewH ? t.data.istTop || t.setData({
            istTop: !0
        }) : t.data.istTop && t.setData({
            istTop: !1
        });
    },
    onGoTop: function(a) {
        t.scrollTopView = 0, t.setData({
            scrollTopView: 0,
            istTop: !1
        });
    },
    getNowFormatDate: function(t) {
        var a = t.substring(0, 10), e = a.split("-")[0], i = a.split("-")[1], o = a.split("-")[2];
        t.substring(11, 16);
        return e + "." + i + "." + o;
    },
    getNowFormatTime: function(t) {
        var a = new Date(t), e = a.getMonth() + 1, i = a.getDate(), o = a.getHours(), s = a.getMinutes(), r = a.getMinutes();
        return e >= 1 && e <= 9 && (e = "0" + e), i >= 0 && i <= 9 && (i = "0" + i), o >= 0 && o <= 9 && (o = "0" + o), 
        s >= 0 && s <= 9 && (s = "0" + s), r >= 0 && r <= 9 && (r = "0" + r), a.getFullYear() + "." + e + "." + i;
    },
    onShareAppMessage: function(a) {
        return {
            title: t.data.itemtitle,
            path: "/pages/article/article?share=1&id=" + t.data.articleId + "&type=" + t.data.pagetype,
            imageUrl: t.data.vImage,
            success: function(t) {},
            fail: function(t) {
                console.log("path=失败" + t);
            }
        };
    },
    readStorage: function(a) {
        if ("1" == a) e = wx.getStorageSync("storageKPKey");
        if ("2" == a) var e = wx.getStorageSync("storageLBJKey");
        for (var i = 0; i < e.length; i++) {
            if (t.data.articleId == e[i].vidKP) {
                t.setData({
                    isSave: !0,
                    storageKPnum: i
                });
                break;
            }
            t.setData({
                isSave: !1
            });
        }
    },
    saveShoucang: function() {
        if ("" == t.data.pub_time || "" == t.data.itemtitle) wx.showModal({
            title: "收藏出错啦",
            content: "未获取到数据，请稍后再试！",
            showCancel: !1,
            confirmText: "确定",
            confirmColor: "#ee453c",
            success: function(t) {
                t.confirm;
            }
        }); else {
            var a = "";
            1 == t.data.pagetype && (a = "storageKPKey"), 2 == t.data.pagetype && (a = "storageLBJKey");
            var e = wx.getStorageSync(a);
            t.data.dataArrKP.dataKP = String(t.data.pub_time).split(" ")[0], t.data.dataArrKP.titleKP = t.data.itemtitle, 
            t.data.dataArrKP.vidKP = t.data.articleId, t.data.dataArrKP.vLengthKP = t.data.totalDuration, 
            t.data.dataArrKP.typeKP = t.data.pagetype;
            var i = t.data.tag_option;
            t.data.dataArrKP.tag = i, 1 == t.data.isSave ? (e.splice(t.data.storageKPnum, 1), 
            t.setData({
                isSave: !1,
                storage: e
            })) : "" == e ? t.setData({
                storage: [ t.data.dataArrKP ],
                isSave: !0
            }) : e.length <= 19 ? t.setData({
                storage: e.concat([ t.data.dataArrKP ]),
                isSave: !0
            }) : (t.setData({
                storage: e
            }), wx.showModal({
                title: "收藏已满",
                content: "收藏已满请删除后在继续收藏",
                showCancel: !1,
                confirmText: "了解了",
                confirmColor: "#ee453c",
                success: function(t) {
                    t.confirm;
                }
            })), wx.setStorage({
                key: a,
                data: t.data.storage,
                success: function() {
                    0 == t.data.isSave ? e.length <= 19 && wx.showToast({
                        title: "取消成功",
                        duration: 1e3
                    }) : e.length <= 19 && wx.showToast({
                        title: "收藏成功",
                        duration: 1e3
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "收藏失败",
                        duration: 1e3
                    });
                }
            });
        }
    },
    sliderTap: function(a) {
        s.seek(t, o);
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(a) {
        console.log("sliderEnd"), s.seek(t, o);
    },
    sliderCancel: function(a) {
        console.log("sliderCancel"), s.seek(t, o);
    },
    songToggle: function() {
        s.songToggle(t, o);
    },
    onShow: function() {
        s.readAudio("storageAudio", t), s.audioEvent(t, o);
    },
    onUnload: function() {
        1 == t.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), s.saveAudio("storageAudio", t.data.dataAudio, t)) : (console.log("暂停音频跳出，清理音频缓存"), 
        s.removeAudio("storageAudio"));
    }
});