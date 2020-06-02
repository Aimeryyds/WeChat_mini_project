function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

getApp();

var e, a = wx.getBackgroundAudioManager(), i = require("../../wxParse/wxParse.js"), o = require("../../templates/share/share_temp.js"), s = require("../../templates/search/search_temp.js"), n = require("../../utils/md5.js"), d = "";

Page({
    data: (e = {
        currentTab: "",
        videoInfoUrl: "https://api.cntv.cn/Article/contentinfo?serviceId=lianboplus",
        vId: "",
        textGuid: "",
        videolistCon: [],
        m3u8Url: "",
        cdnname11: "",
        audioUrl: "",
        vidUrl1: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&mode=1&n=100&serviceId=lianboplus",
        getData: "",
        isloading: !0,
        showTip: !0,
        qtext: "",
        storageDT: [],
        dataArrDT: {
            dataDT: "",
            titleDT: "",
            vidDT: "",
            vLengthDT: "",
            typeDT: "",
            tag: []
        },
        isSave: !1,
        storageDTnum: "",
        vTitle: "",
        vRiqi: "",
        keyWoeldArray: [],
        newsHLTag: "",
        followIsShow: !1,
        followData: null,
        showGoTop: !1,
        scrollviewH: "",
        zhengqidiv: "",
        tmptime: "",
        ifsavaOk: !0,
        value: 0,
        percent: 0,
        max: 0,
        pass_time: "00:00",
        total_time: "00:00",
        pause: "bofang",
        pause_disable: !1,
        disabled: !1
    }, t(e, "tmptime", ""), t(e, "textGuid", ""), t(e, "videoContext", ""), t(e, "getCurTime", "0"), 
    t(e, "videoUrl", ""), t(e, "audioUrl", ""), t(e, "isFirsttime", ""), t(e, "isFristvideo", ""), 
    t(e, "isPlaying", ""), t(e, "isAudioEnd", !1), t(e, "isAudio", !0), t(e, "isVideoSeek", !1), 
    t(e, "isAudioSeek", !1), t(e, "dataAudio", {
        audioCurTime: "",
        audiotitle: "",
        audiostate: "",
        audioztime: ""
    }), t(e, "videopause", !1), e),
    bindViewTap: function() {},
    getKeyWordData: function(t) {
        console.log(" that.data.vId =" + t), wx.request({
            url: "https://api.cntv.cn/list/getWxNewsTag?id=" + t + "&serviceId=lianboplus",
            success: function(t) {
                console.log(t), "" != t.data.data.newsHLTag && d.setData({
                    followIsShow: !0
                });
                for (var e = t.data.data.newsHLTag.split(","), a = [], i = 0; i < e.length; i++) a.push(e[i]);
                d.setData({
                    keyWoeldArray: a,
                    newsHLTag: t.data.data.newsHLTag
                }), "" != d.data.newsHLTag && d.relevantRecommend();
            }
        });
    },
    relevantRecommend: function() {
        wx.request({
            url: "https://api.cntv.cn/list/getWxVListByTagMem?tag=" + d.data.newsHLTag + "&p=1&n=10&serviceId=lianboplus",
            success: function(t) {
                for (var e = [], a = 0; a < t.data.dataList.length; a++) {
                    t.data.dataList[a].newsTitle = t.data.dataList[a].newsTitle.replace(/\[视频\]/g, ""), 
                    t.data.dataList[a]._newsFocusDate = t.data.dataList[a].newsFocusDate.split("-")[0] + "." + t.data.dataList[a].newsFocusDate.split("-")[1] + "." + t.data.dataList[a].newsFocusDate.split("-")[2].split(" ")[0], 
                    "PAGES0fQGGS65U3FzbsI5qSj180226" == t.data.dataList[a].newsPrimaryPageId ? t.data.dataList[a].contype = "快评" : "PAGEhX8s5pIxvHLUxvGqAlnG180411" == t.data.dataList[a].newsPrimaryPageId ? t.data.dataList[a].contype = "联播+" : t.data.dataList[a].newsLength ? (t.data.dataList[a].contype = "新闻联播", 
                    t.data.dataList[a].newsLength = t.data.dataList[a].newsLength.substring(3, t.data.dataList[a].newsLength.length)) : t.data.dataList[a].contype = "";
                    var i = t.data.dataList[a].newsHLTag.split(" ");
                    t.data.dataList[a].gjc = i, e.push(t.data.dataList[a]);
                }
                d.setData({
                    followData: e
                });
            }
        });
    },
    gotozhengqi: function() {
        d.data.videoContext.pause(), a.pause(), wx.redirectTo({
            url: "../video/video?id=" + d.data.zhengqidiv + "&type=0"
        });
    },
    onPageScroll: function(t) {
        t.scrollTop > 2 * d.data.scrollviewH ? d.setData({
            showGoTop: !0
        }) : d.setData({
            showGoTop: !1
        });
    },
    backToTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 400
        }), d.setData({
            showGoTop: !1
        });
    },
    onLoad: function(t) {
        d = this, s.searchEvent(d), wx.getSystemInfo({
            success: function(t) {
                d.setData({
                    scrollviewH: t.windowHeight
                });
                var e = parseInt(t.version.replace(/\./g, ""));
                console.log("(res.version:" + t.version + "&&wxversion" + e), e < 673 && wx.showModal({
                    title: "温馨提示",
                    content: "您的微信版本过低，为避免影响您正常使用听联播功能，请升级到最新微信版本！"
                });
            }
        }), console.log("res" + t.type), console.log("res.vId" + t.vId), d.wxzxSlider = d.selectComponent("#wxzxSlider");
        var e = wx.getStorageSync("storageAudio");
        console.log(" audioManager.duration=" + a.duration), 0 == t.type ? (a.pause(), a.seek(Number(0)), 
        console.log("res.id=" + t.id), d.setData({
            vId: t.id,
            currentTab: 0,
            isPlaying: !1,
            isFristvideo: !0
        }), "" != e && e.vId != d.data.vId && wx.removeStorage({
            key: "storageAudio",
            success: function(t) {
                console.log("销毁之前的音频播放缓存成功=" + t);
            }
        })) : 1 == t.type && (console.log("获取音频缓存storageaudio对象vId" + e.vId), wx.showLoading({
            title: "加载中",
            duration: 3e3
        }), d.setData({
            vId: t.id,
            currentTab: 1
        }), console.log("strorageAudio=====" + e.vId), e.vId == d.data.vId ? (console.log("从非底层回音频底层页，audioManager.currentTime=" + a.currentTime), 
        e.audiostate ? d.setData({
            isPlaying: !0,
            getCurTime: a.currentTime,
            isFirsttime: !1
        }) : d.setData({
            isPlaying: !0,
            getCurTime: 0,
            isFirsttime: !0
        })) : (wx.removeStorage({
            key: "storageAudio",
            success: function(t) {
                console.log("销毁之前的音频播放缓存成功=" + t);
            }
        }), "" == d.data.isFirsttime && (console.log("that.data.isFirsttime== ''成立"), d.setData({
            isFirsttime: !0
        })))), d.setHeight(d.data.currentTab), d.showTab(d.data.currentTab), d.getVideoInfo(t.id), 
        d.getKeyWordData(t.id), 1 == t.share && (d.setData({
            share: 1
        }), o.backhome(d));
    },
    onReady: function(t) {
        d.setData({
            videoContext: wx.createVideoContext("videoID")
        }), wx.onBackgroundAudioPause(function() {
            d.setData({
                isAudio: !1,
                isPlaying: !1
            });
        });
    },
    showTab: function(t) {
        d.setData({
            currentTab: t
        });
    },
    setHeight: function(t) {
        0 == t ? wx.getSystemInfo({
            success: function(t) {
                d.setData({
                    second_height: t.windowHeight - t.windowWidth / 750 * 450 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 110 - t.windowWidth / 750 * 90
                });
            }
        }) : wx.getSystemInfo({
            success: function(t) {
                d.setData({
                    second_height: t.windowHeight - t.windowWidth / 750 * 262 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 110 - t.windowWidth / 750 * 90
                });
            }
        });
    },
    swichNav: function(t) {
        if (d.data.currentTab === t.target.dataset.current) return !1;
        if (d.setHeight(t.target.dataset.current), d.setData({
            currentTab: t.target.dataset.current
        }), 0 == t.target.dataset.current) {
            if (a.pause(), wx.showToast({
                title: "视频加载中",
                icon: "loading",
                mask: !0,
                duration: 1e3
            }), console.log("切换视频播放that.data.isFristvideo=" + d.data.isFristvideo), d.setData({
                isPlaying: !1,
                isAudio: !1
            }), 1 != d.data.isFristvideo) {
                d.setData({
                    isFristvideo: !0
                });
                d.data.getCurTime;
                d.data.videoContext.play(), d.setData({
                    isVideoSeek: !0
                });
            } else {
                var e = d.data.getCurTime;
                d.data.videoContext.play(), setTimeout(function() {
                    d.data.videoContext.seek(Number(e));
                }, 500);
            }
            "" == d.data.isFirsttime && d.setData({
                isFirsttime: !1
            });
        } else if (1 == t.target.dataset.current) {
            if (d.data.videoContext.pause(), wx.showLoading({
                title: "音频加载中",
                icon: "loading",
                mask: !0,
                duration: 1e3
            }), console.log("切换音频播放"), console.log(" isFirsttime=" + d.data.isFirsttime), "" === d.data.isFirsttime || d.data.isAudioEnd) {
                console.log("第一次创建背景音乐并传入that.data.getCurTime值:" + d.data.getCurTime), a.title = d.data.vTitle, 
                a.epname = "新闻联播", a.singer = "新闻联播", a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
                a.src = d.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + d.data.vide + ".html";
                d.data.getCurTime;
                console.log("将isAudioSeek设置为true"), d.setData({
                    isAudioSeek: !0
                });
            } else {
                console.log("从视频切换播放音频that.data.getCurTime" + d.data.getCurTime), console.log("222222从视频切换播放音频that.data.getCurTime" + d.data.getCurTime);
                d.data.getCurTime;
                d.setData({
                    isAudioSeek: !0
                }), setTimeout(function() {
                    a.play();
                }, 10);
            }
            d.setData({
                isFirsttime: !1,
                isPlaying: !0,
                isAudio: !0,
                isAudioEnd: !1
            });
        }
    },
    videolength: function(t) {
        var e = 0, a = 0, i = parseInt(t);
        i > 60 && (a = parseInt(i / 60), i = parseInt(i % 60), a > 60 && (e = parseInt(a / 60), 
        a = parseInt(a % 60)));
        var o = function(t) {
            return t >> 0 < 10 ? "0" + t : t;
        }, s = o(e) > 0 ? o(e) + ":" : "";
        d.setData({
            totalDuration: s + o(a) + ":" + o(i)
        });
    },
    getVideoInfo: function(t) {
        void 0 != t ? (console.log(d.data.videoInfoUrl + "&id=" + t), wx.request({
            url: d.data.videoInfoUrl + "&id=" + t,
            success: function(t) {
                d.setData({
                    getData: t.data.pubtime.substring(0, 4) + t.data.pubtime.substring(5, 7) + t.data.pubtime.substring(8, 10),
                    sharetitle: t.data.title
                });
                var e = t.data.guid;
                i.wxParse("vContent", "html", t.data.content, d, 0), "" == t.data.logo && (t.data.logo = "http://p1.img.cctvpic.com/nettv/ibugu/xinwen/C10437/ibugu/images/IMG1257326364058754.jpg"), 
                d.setData({
                    vTitle: t.data.title.replace("[视频]", ""),
                    vImage: t.data.logo,
                    vRiqi: t.data.pubtime,
                    textGuid: e,
                    tag: t.data.tag,
                    vide: t.data.id
                }), console.log("res.data.guid=" + t.data.guid), d.getVideoSrc(e), d.readStorage();
                var a = t.data.pubtime.split("-")[0] + t.data.pubtime.split("-")[1] + t.data.pubtime.split("-")[2].split(" ")[0];
                d.getzhengqidata(a);
            },
            fail: function(e) {
                wx.showToast({
                    title: "获取数据失败",
                    duration: 2e3,
                    icon: "none"
                }), console.log("getVideolist()获取接口失败，地址https://api.cntv.cn/Article/contentinfo?id=" + t + "&serviceId=lianboplus");
            }
        })) : (console.log("请求缺少参数guid"), wx.showToast({
            title: "缺少视频ID",
            duration: 2e3,
            icon: "none"
        }));
    },
    getzhengqidata: function(t) {
        wx.request({
            url: "https://api.cntv.cn/list/getWxVideoList?lm=xwlb&mode=0&serviceId=lianboplus&p=1&n=1&date=" + t,
            success: function(t) {
                d.setData({
                    zhengqidiv: t.data.videoList[0].video_id
                });
            }
        });
    },
    getTimest: function() {
        var t = Date.parse(new Date()).toString();
        return t = t.substr(0, 10);
    },
    getDynamicCode: function() {
        var t = d.getTimest();
        d.setData({
            tmptime: t
        });
        var e = n.hexMD5(t + "2051F3F623D65DCBD55454AF9032871F51B1");
        return console.log("dynamic=" + e.toUpperCase()), e.toUpperCase();
    },
    getVideoSrc: function(t) {
        var e = d.getDynamicCode();
        console.log("获取vdn接口信息如下：https://vdn.apps.cntv.cn/api/getHttpVideoInfo.do?pid=" + t + "&vn=2051&vc=" + e + "&tsp=" + d.data.tmptime), 
        wx.request({
            url: "https://vdn.apps.cntv.cn/api/getHttpVideoInfo.do?pid=" + t + "&vn=2051&vc=" + e + "&tsp=" + d.data.tmptime,
            success: function(t) {
                d.setData({
                    max: parseInt(t.data.video.totalLength)
                }), "" != t.data.hls_url && d.getAudioMain(t.data.hls_url, t.data.manifest.audio_mp3), 
                d.setData({
                    cdnname11: t.data.hls_cdn_info.cdn_vip,
                    total_time: d.secondTransferTime(d.data.max),
                    totalDuration: d.secondTransferTime(d.data.max)
                });
            }
        });
    },
    getAudioMain: function(t, e) {
        if (void 0 != t) {
            var a = t.replace("http://", "https://");
            console.log("httpvideoUrl=" + a), d.getvideoCode(a, 0);
        }
        if (void 0 != e) {
            var i = e.replace("http://", "https://");
            console.log("httpaudoUrl=" + i), d.getvideoCode(i, 1);
        }
    },
    getvideoCode: function(t, e) {
        wx.request({
            url: t,
            success: function(i) {
                if ("101" == i.data.errcode) return wx.showToast({
                    title: "暂无数据",
                    icon: "succes",
                    duration: 2e3,
                    mask: !0
                }), !1;
                var o = i.data.trim().split("\n"), s = [], n = [], r = "", l = "";
                if (o.length > 0) if (0 == e) {
                    o.forEach(function(t, e) {
                        -1 != t.indexOf("#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=") && s.push(t.replace("#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=", "").split(",")[0] / 1024), 
                        -1 != t.indexOf(".m3u8") && n.push(t);
                    }), s.length > 1 ? l = -1 != s.indexOf(850) ? n[s.indexOf(850)] : -1 != s.indexOf(1200) ? n[s.indexOf(1200)] : -1 != s.indexOf(450) ? n[s.indexOf(450)] : n[0] : 1 == n.length && (l = n[0]), 
                    console.log("m3u8Url==" + l);
                    var c = t.lastIndexOf("/"), u = t.substring(0, c + 1);
                    l = l.indexOf("://") > 0 ? l : "0" == l.indexOf("/") ? "https://" + d.data.cdnname11 + l : u + l, 
                    d.setData({
                        videoUrl: l
                    }), console.log("最终播放视频的url地址是：" + d.data.videoUrl);
                } else if (1 == e) {
                    for (var g = 0; g < o.length; g++) -1 != o[g].indexOf(".mp3") && n.push(o[g]);
                    r = n[0], r = t.replace("main.m3u8", r), console.log("mp3Url=" + r), d.setData({
                        audioUrl: r
                    }), console.log("that.data.isFirsttime=" + d.data.isFirsttime), 1 == d.data.currentTab && (d.data.isFirsttime ? (console.log("首次"), 
                    a.title = d.data.vTitle, a.epname = "新闻联播", a.singer = "新闻联播", a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
                    a.src = d.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + d.data.vide + ".html") : d.data.isPlaying ? (console.log("非首次相同vid"), 
                    console.log("同一个音频且播放中"), console.log("isPlaying=true && that.data.getCurTime=" + d.data.getCurTime), 
                    d.seek(d.data.getCurTime)) : (a.title = d.data.vTitle, a.epname = "新闻联播", a.singer = "新闻联播", 
                    a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
                    a.src = d.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + d.data.vide + ".html"), 
                    d.setData({
                        isPlaying: !0,
                        isAudio: !0
                    }));
                }
            },
            fail: function(t) {
                console.log("失败"), 0 == e ? (wx.showToast({
                    title: "视频获取失败",
                    icon: "succes",
                    duration: 1e3,
                    mask: !0
                }), d.setData({
                    isFirsttime: !1,
                    isPlaying: !1,
                    isAudio: !1
                })) : (wx.showToast({
                    title: "音频获取失败",
                    icon: "succes",
                    duration: 1e3,
                    mask: !0
                }), d.setData({
                    isFirsttime: !1,
                    isPlaying: !1,
                    isAudio: !1
                }));
            }
        });
    },
    clickVplay: function(t) {
        if (console.log("视频播放中"), 1 == d.data.currentTab) d.data.videoContext.pause(); else if (d.setData({
            videopause: !1
        }), a.pause(), d.data.isVideoSeek) {
            var e = d.data.getCurTime;
            d.data.videoContext.seek(Number(e)), d.setData({
                isVideoSeek: !1
            });
        }
    },
    videoPause: function(t) {
        console.log("视频暂停"), d.setData({
            videopause: !0
        });
    },
    videowatting: function() {
        console.log("视频缓冲");
    },
    videocurtime: function(t) {
        "NaN" != t && NaN != t && void 0 != t && "undefined" != t || (t = 0);
        var e = 0, a = 0, i = parseInt(t);
        i > 60 && (a = parseInt(i / 60), i = parseInt(i % 60), a > 60 && (e = parseInt(a / 60), 
        a = parseInt(a % 60)));
        var o = function(t) {
            return t >> 0 < 10 ? "0" + t : t;
        }, s = o(e) > 0 ? o(e) + ":" : "";
        d.setData({
            currentPosition: s + o(a) + ":" + o(i)
        });
    },
    songToggle: function() {
        1 == d.data.isPlaying ? (a.pause(), d.setData({
            isAudio: !1,
            isPlaying: !1
        })) : (d.data.isAudioEnd ? (a.title = d.data.vTitle, a.epname = "新闻联播", a.singer = "新闻联播", 
        a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
        a.src = d.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + d.data.vide + ".html") : (console.log("that.data.getCurTime" + d.data.getCurTime), 
        a.play(), setTimeout(function() {
            d.seek(d.data.getCurTime);
        }, 100)), d.setData({
            isAudio: !0,
            isPlaying: !0,
            isAudioEnd: !1
        }));
    },
    videoend: function(t) {
        d.data.videoContext.pause(), a.pause(), d.setData({
            videopause: !1,
            isPlaying: !1,
            getCurTime: 0
        });
    },
    getVidtime: function(t) {
        console.log("res.detail.currentTime=" + t.detail.currentTime), d.setData({
            curTime: t.detail.currentTime,
            getCurTime: t.detail.currentTime
        }), wx.hideLoading();
    },
    jumpTime: function(t) {
        for (var e = 0, a = 0, i = 0, o = 0; o < d.data.lenList.length; o++) {
            (e += parseInt(d.data.lenList[o])) > t && (a = parseInt(d.data.lenList[o]) - (e - t), 
            i = o), d.setData({
                jumpArr: a,
                audioIndex: i
            });
            break;
        }
    },
    onShareAppMessage: function(t) {
        return {
            title: d.data.vTitle,
            path: "/pages/svideo/svideo?share=1&id=" + d.data.vId + "&type=" + d.data.currentTab,
            imageUrl: d.data.vImage,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    redirectTosearch: function() {
        s.redirectTosearch(d);
    },
    changepage: function(t) {
        d.data.videoContext.pause();
        var e = t.currentTarget.dataset;
        "新闻联播" == e.type ? "0" == e.modetype ? wx.redirectTo({
            url: "../video/video?id=" + e.pageid + "&type=1"
        }) : wx.redirectTo({
            url: "../svideo/svideo?id=" + e.pageid + "&type=1"
        }) : "联播+" == e.type ? wx.navigateTo({
            url: "../article/article?pagetype=2&id=" + e.pageid
        }) : wx.navigateTo({
            url: "../article/article?pagetype=1&id=" + e.pageid
        });
    },
    gotoonegzpage: function(t) {
        d.data.videoContext.pause();
        var e = t.currentTarget.dataset;
        wx.redirectTo({
            url: "../onegzpage/onegzpage?tag=" + e.val
        });
    },
    readStorage: function() {
        for (var t = wx.getStorageSync("storageDTKey"), e = 0; e < t.length; e++) {
            if (d.data.vId == t[e].vidDT) {
                console.log("已保存"), d.setData({
                    isSave: !0,
                    storageDTnum: e,
                    dataArrDT: d.data.dataArrDT
                });
                break;
            }
            console.log("未保存"), d.setData({
                isSave: !1,
                dataArrDT: d.data.dataArrDT
            });
        }
    },
    saveShoucang: function() {
        if (d.readStorage(), d.data.ifsavaOk) if (d.setData({
            ifsavaOk: !1
        }), d.data.vTitle, "" == d.data.vRiqi || "00:00" == d.data.totalDuration || " " == d.data.totalDuration) wx.showModal({
            title: "",
            content: "未获取到数据，请稍后再试！",
            showCancel: !1,
            confirmText: "确定",
            confirmColor: "#ee453c",
            success: function(t) {
                t.confirm;
            }
        }); else {
            var t = wx.getStorageSync("storageDTKey");
            if (d.data.dataArrDT.dataDT = String(d.data.vRiqi).split(" ")[0].replace(/-/g, "."), 
            d.data.dataArrDT.titleDT = d.data.vTitle, d.data.dataArrDT.vidDT = d.data.vId, d.data.dataArrDT.vLengthDT = d.data.totalDuration, 
            d.data.dataArrDT.typeDT = d.data.currentTab, d.data.dataArrDT.tag = d.data.keyWoeldArray, 
            1 == d.data.isSave) t.splice(d.data.storageDTnum, 1), d.setData({
                isSave: !1,
                storageDT: t
            }); else if ("" == t) d.setData({
                storageDT: [ d.data.dataArrDT ],
                isSave: !0
            }); else {
                for (var e = [], a = [], i = 0; i < t.length; i++) {
                    var o = t[i].vidDT;
                    -1 == e.indexOf(o) && (e.push(o), a.push(t[i]));
                }
                (t = a).length <= 19 ? d.setData({
                    storageDT: t.concat([ d.data.dataArrDT ]),
                    isSave: !0
                }) : (d.setData({
                    storageDT: t
                }), wx.showModal({
                    title: "收藏已满",
                    content: "收藏夹已满，请删除后在继续收藏。",
                    showCancel: !1,
                    confirmText: "了解了",
                    confirmColor: "#ee453c",
                    success: function(t) {
                        t.confirm;
                    }
                }));
            }
            wx.setStorage({
                key: "storageDTKey",
                data: d.data.storageDT,
                success: function() {
                    d.data.isSave, t.length, setTimeout(function() {
                        d.setData({
                            ifsavaOk: !0
                        });
                    }, 500);
                },
                fail: function() {}
            });
        } else setTimeout(function() {
            d.setData({
                ifsavaOk: !0
            });
        }, 500);
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新");
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onShow: function() {
        wx.getStorageSync("storageAudio");
        var t = "";
        a.onTimeUpdate(function() {
            if (d.wxzxSlider.properties.isMonitoring) {
                var e = d.data.getCurTime;
                t = a.currentTime.toFixed(0), console.log("onshow里执行  audioManager.currentTime=" + t), 
                console.log("that.data.max=" + d.data.max), d.data.max > 0 && t > d.data.max && (t = d.data.max);
                var i = d.secondTransferTime(t);
                d.setData({
                    value: t,
                    getCurTime: t,
                    pass_time: i,
                    total_time: d.secondTransferTime(d.data.max)
                }), a.buffered > 0 ? d.setData({
                    percent: a.buffered / d.data.max * 100
                }) : 0 == a.buffered && d.setData({
                    percent: 100
                }), d.data.isAudioSeek && (console.log("seekTime=" + e), d.seek(e), d.setData({
                    isAudioSeek: !1
                }));
            }
        }), a.onWaiting(function() {
            console.log("onwaiting中"), console.log("音频loading，此时的getCurtime=" + d.data.getCurTime);
        }), a.onCanplay(function() {
            console.log("音频加载完毕可执行播放" + d.data.getCurTime), setTimeout(function() {
                wx.hideToast();
            }, 100);
        }), a.onEnded(function() {
            d.setData({
                value: 0,
                getCurTime: 0,
                pass_time: "00:00",
                total_time: d.secondTransferTime(d.data.max),
                percent: 0,
                isPlaying: !1,
                isAudio: !1,
                isAudioEnd: !0,
                disabled: !0
            }), wx.removeStorage({
                key: "storageAudio",
                success: function(t) {
                    console.log("音频播放完毕，清除音频播放缓存");
                }
            });
        }), a.onStop(function() {
            d.setData({
                value: 0,
                getCurTime: 0,
                pass_time: "00:00",
                total_time: d.secondTransferTime(d.data.max),
                percent: 0,
                isPlaying: !1,
                isAudio: !1,
                isAudioEnd: !0,
                disabled: !0
            }), wx.removeStorage({
                key: "storageAudio",
                success: function(t) {
                    console.log("音频播放停止，清除音频播放缓存");
                }
            });
        }), a.onPause(function() {
            d.setData({
                isPlaying: !1,
                isAudio: !1,
                disabled: !0
            });
        }), a.onPlay(function() {
            0 == d.data.currentTab ? (a.pause(), console.log("已经切换到视频了不要播音频")) : (console.log("播放中"), 
            console.log("isAudioSeek=" + d.data.isAudioSeek + "我要执行audio的seek啦"), console.log("that.data.getCurTime=" + d.data.getCurTime), 
            d.setData({
                isPlaying: !0,
                isAudio: !0,
                disabled: !1
            }));
        });
    },
    sliderTap: function(t) {
        d.seek();
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(t) {
        console.log("sliderEnd"), d.seek();
    },
    sliderCancel: function(t) {
        console.log("sliderCancel"), d.seek();
    },
    seek: function(t) {
        if (console.log("执行seek"), console.log("time=" + t), void 0 == t) {
            e = d.wxzxSlider.properties.value;
            console.log("来自进度条value===" + e);
        } else {
            var e = parseInt(t);
            console.log("传入value===" + e);
        }
        var i = parseInt(e), o = d.secondTransferTime(i);
        d.setData({
            pass_time: o,
            getCurTime: i,
            isFirsttime: !1,
            isAudio: !0,
            isPlaying: !0
        }), a.seek(Number(i)), wx.hideLoading();
    },
    secondTransferTime: function(t) {
        return t > 3600 ? [ parseInt(t / 60 / 60), parseInt(t / 60 % 60), parseInt(t % 60) ].join(":").replace(/\b(\d)\b/g, "0$1") : [ parseInt(t / 60 % 60), parseInt(t % 60) ].join(":").replace(/\b(\d)\b/g, "0$1");
    },
    saveAudio: function() {
        console.log(d.data.isPlaying), d.data.dataAudio.audioCurTime = d.data.getCurTime, 
        d.data.dataAudio.audiotitle = d.data.vTitle, d.data.dataAudio.audiostate = d.data.isPlaying, 
        d.data.dataAudio.audioztime = d.data.max, d.data.dataAudio.vId = d.data.vId, wx.setStorage({
            key: "storageAudio",
            data: d.data.dataAudio,
            success: function() {
                var t = wx.getStorageSync("storageAudio");
                console.log("storageaudio缓存成功" + t.audioCurTime);
            },
            fail: function(t) {
                console.log("storageaudio缓存失败" + t.data);
            }
        });
    },
    onUnload: function() {
        1 == d.data.isPlaying ? (console.log("离开页面音频仍在播放，存储音频播放信息"), d.saveAudio()) : (wx.removeStorage({
            key: "storageAudio",
            success: function(t) {
                console.log("离开页面停止音频播放，清除音频播放缓存");
            }
        }), a.stop());
    }
});