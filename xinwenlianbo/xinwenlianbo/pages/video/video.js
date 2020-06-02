function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

getApp();

var e, a = wx.getBackgroundAudioManager(), i = (require("../../wxParse/wxParse.js"), 
require("../../templates/share/share_temp.js")), o = require("../../templates/canleder/canleder_temp.js"), s = require("../../templates/search/search_temp.js"), d = require("../../utils/md5.js"), n = "";

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
        storageZQ: [],
        dataArrZQ: {
            dataZQ: "",
            titleZQ: "",
            vidZQ: "",
            vLengthZQ: "",
            typeZQ: "",
            riliDay: "",
            riliMonth: "",
            riliYear: "",
            riliData: "",
            tag: []
        },
        isSave: !1,
        storageZQnum: "",
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
    onLoad: function(t) {
        wx.getSystemInfo({
            success: function(t) {
                var e = parseInt(t.version.replace(/\./g, ""));
                console.log("(res.version:" + t.version + "&&wxversion" + e), e < 673 && wx.showModal({
                    title: "温馨提示",
                    content: "您的微信版本过低，为避免影响您正常使用听联播功能，请升级到最新微信版本！"
                });
            }
        }), n = this, console.log("***********************" + t.type), n.wxzxSlider = n.selectComponent("#wxzxSlider");
        var e = wx.getStorageSync("storageAudio");
        console.log(" audioManager.duration=" + a.duration), 0 == t.type ? (a.pause(), a.seek(Number(0)), 
        n.setData({
            vId: t.id,
            currentTab: 0,
            isPlaying: !1,
            isFristvideo: !0
        }), "" != e && e.vId != n.data.vId && wx.removeStorage({
            key: "storageAudio",
            success: function(t) {
                console.log("销毁之前的音频播放缓存成功=" + t);
            }
        })) : 1 == t.type && (console.log("获取音频缓存storageaudio对象vId" + e.vId), wx.showLoading({
            title: "加载中",
            duration: 3e3
        }), n.setData({
            vId: t.id,
            currentTab: 1
        }), console.log("strorageAudio=====" + e.vId), e.vId == n.data.vId ? (e.audiostate ? n.setData({
            isPlaying: !0,
            getCurTime: a.currentTime,
            isFirsttime: !1
        }) : n.setData({
            isPlaying: !0,
            getCurTime: 0,
            isFirsttime: !0
        }), console.log("从非底层回音频底层页，audioManager.currentTime=" + a.currentTime)) : (wx.removeStorage({
            key: "storageAudio",
            success: function(t) {
                console.log("销毁之前的音频播放缓存成功=" + t);
            }
        }), "" == n.data.isFirsttime && (console.log("that.data.isFirsttime== ''成立"), n.setData({
            isFirsttime: !0
        })))), n.setHeight(n.data.currentTab), n.showTab(n.data.currentTab), n.getVideolist(t.id), 
        s.searchEvent(n), 1 == t.share && (n.setData({
            share: 1
        }), i.backhome(n));
    },
    onReady: function(t) {
        n.setData({
            videoContext: wx.createVideoContext("videoID")
        }), wx.onBackgroundAudioPause(function() {
            n.setData({
                isAudio: !1,
                isPlaying: !1
            });
        });
    },
    onShow: function() {
        wx.getStorageSync("storageAudio");
        var t = "";
        a.onTimeUpdate(function() {
            if (n.wxzxSlider.properties.isMonitoring) {
                t = a.currentTime.toFixed(0), console.log("onshow里执行  audioManager.currentTime=" + t), 
                console.log("that.data.max=" + n.data.max);
                var e = n.data.getCurTime;
                n.data.max > 0 && t > n.data.max && (t = n.data.max);
                var i = n.secondTransferTime(t);
                n.setData({
                    value: t,
                    getCurTime: t,
                    pass_time: i,
                    total_time: n.secondTransferTime(n.data.max)
                }), a.buffered > 0 ? n.setData({
                    percent: a.buffered / n.data.max * 100
                }) : 0 == a.buffered && n.setData({
                    percent: 100
                }), n.data.isAudioSeek && (console.log("that.data.getCurTime=" + n.data.getCurTime), 
                n.seek(e), n.setData({
                    isAudioSeek: !1
                }));
            }
        }), a.onWaiting(function() {
            console.log("音频loading，此时的getCurtime=" + n.data.getCurTime);
        }), a.onCanplay(function() {
            console.log("音频加载完毕可执行播放" + n.data.getCurTime), setTimeout(function() {
                wx.hideToast();
            }, 100);
        }), a.onEnded(function() {
            n.setData({
                value: 0,
                getCurTime: 0,
                pass_time: "00:00",
                total_time: n.secondTransferTime(n.data.max),
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
            n.setData({
                value: 0,
                getCurTime: 0,
                pass_time: "00:00",
                total_time: n.secondTransferTime(n.data.max),
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
            n.setData({
                isPlaying: !1,
                isAudio: !1,
                disabled: !0
            });
        }), a.onPlay(function() {
            0 == n.data.currentTab ? (a.pause(), console.log("已经切换到视频了不要播音频")) : (console.log("播放中"), 
            console.log("isAudioSeek=" + n.data.isAudioSeek + "我要执行audio的seek啦"), console.log("that.data.getCurTime=" + n.data.getCurTime), 
            n.setData({
                isPlaying: !0,
                isAudio: !0,
                disabled: !1
            }));
        });
    },
    setHeight: function(t) {
        0 == t ? wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    second_height: t.windowHeight - t.windowWidth / 750 * 450 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 110 - t.windowWidth / 750 * 90
                });
            }
        }) : wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    second_height: t.windowHeight - t.windowWidth / 750 * 262 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 100 - t.windowWidth / 750 * 110 - t.windowWidth / 750 * 90
                });
            }
        });
    },
    getVideolist: function(t) {
        void 0 != t ? (console.log(n.data.videoInfoUrl + "&id=" + t), wx.request({
            url: n.data.videoInfoUrl + "&id=" + t,
            success: function(t) {
                n.setData({
                    getData: t.data.pubtime.substring(0, 4) + t.data.pubtime.substring(5, 7) + t.data.pubtime.substring(8, 10),
                    sharetitle: t.data.title
                }), n.setData({
                    rl: o.getRiLi(n.data.getData)
                });
                var e = t.data.guid;
                "" == t.data.logo && (t.data.logo = "http://p1.img.cctvpic.com/nettv/ibugu/xinwen/C10437/ibugu/images/IMG1257326364058754.jpg"), 
                n.setData({
                    vTitle: t.data.title,
                    vImage: t.data.logo,
                    vRiqi: t.data.pubtime,
                    textGuid: e,
                    vide: t.data.id
                }), console.log("res.data.guid=" + t.data.guid), n.getVideoSrc(e), n.readStorage(), 
                n.getlistCon();
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
    getlistCon: function() {
        wx.request({
            url: n.data.vidUrl1 + "&date=" + n.data.getData,
            success: function(t) {
                t.data.videoList.reverse(), n.data.videolistCon = t.data.videoList;
                for (var e = 0; e < t.data.videoList.length; e++) t.data.videoList[e].video_title = t.data.videoList[e].video_title.substring(4, t.data.videoList[e].video_title.length);
                console.log(t.data.videoList[0].video_title), n.setData({
                    dataArrZQ: {
                        titleZQ: t.data.videoList[0].video_title
                    },
                    videolistCon: n.data.videolistCon,
                    showTip: !1
                });
            },
            fail: function(t) {
                console.log("获取列表接口地址失败，" + n.data.vidUrl1 + "&date=" + n.data.getData);
            }
        });
    },
    showTab: function(t) {
        n.setData({
            currentTab: t
        });
    },
    swichNav: function(t) {
        if (n.data.currentTab === t.target.dataset.current) return !1;
        if (n.setHeight(t.target.dataset.current), n.setData({
            currentTab: t.target.dataset.current
        }), 0 == t.target.dataset.current) {
            if (a.pause(), wx.showToast({
                title: "视频加载中",
                icon: "loading",
                mask: !0,
                duration: 1e3
            }), console.log("切换视频播放"), n.setData({
                isPlaying: !1,
                isAudio: !1
            }), 1 != n.data.isFristvideo) {
                n.setData({
                    isFristvideo: !0
                });
                n.data.getCurTime;
                n.data.videoContext.play(), n.setData({
                    isVideoSeek: !0
                });
            } else {
                var e = n.data.getCurTime;
                n.data.videoContext.play(), setTimeout(function() {
                    n.data.videoContext.seek(Number(e));
                }, 500);
            }
            "" == n.data.isFirsttime && n.setData({
                isFirsttime: !1
            });
        } else if (1 == t.target.dataset.current) {
            if (n.data.videoContext.pause(), wx.showLoading({
                title: "音频加载中",
                icon: "loading",
                mask: !0,
                duration: 1e3
            }), console.log("切换音频播放"), console.log(" isFirsttime=" + n.data.isFirsttime), "" === n.data.isFirsttime || n.data.isAudioEnd) {
                console.log("第一次创建背景音乐并传入that.data.getCurTime值:" + n.data.getCurTime), a.title = n.data.vTitle, 
                a.epname = "新闻联播", a.singer = "新闻联播", a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
                a.src = n.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + n.data.vide + ".html";
                n.data.getCurTime;
                n.setData({
                    isAudioSeek: !0
                });
            } else {
                console.log("从视频切换播放音频that.data.getCurTime" + n.data.getCurTime), console.log("222222从视频切换播放音频that.data.getCurTime" + n.data.getCurTime);
                n.data.getCurTime;
                n.setData({
                    isAudioSeek: !0
                }), setTimeout(function() {
                    a.play();
                }, 10);
            }
            n.setData({
                isFirsttime: !1,
                isPlaying: !0,
                isAudio: !0,
                isAudioEnd: !1
            });
        }
    },
    getTimest: function() {
        var t = Date.parse(new Date()).toString();
        return t = t.substr(0, 10);
    },
    getDynamicCode: function() {
        var t = n.getTimest();
        return n.setData({
            tmptime: t
        }), d.hexMD5(t + "2051F3F623D65DCBD55454AF9032871F51B1").toUpperCase();
    },
    getVideoSrc: function(t) {
        var e = n.getDynamicCode();
        console.log("获取vdn接口信息如下：https://vdn.apps.cntv.cn/api/getHttpVideoInfo.do?pid=" + t + "&vn=2051&vc=" + e + "&tsp=" + n.data.tmptime), 
        wx.request({
            url: "https://vdn.apps.cntv.cn/api/getHttpVideoInfo.do?pid=" + t + "&vn=2051&vc=" + e + "&tsp=" + n.data.tmptime,
            success: function(t) {
                n.setData({
                    max: parseInt(t.data.video.totalLength)
                }), "" != t.data.hls_url && n.getAudioMain(t.data.hls_url, t.data.manifest.audio_mp3), 
                n.setData({
                    cdnname11: t.data.hls_cdn_info.cdn_vip,
                    total_time: n.secondTransferTime(n.data.max),
                    totalDuration: n.secondTransferTime(n.data.max)
                });
            }
        });
    },
    getAudioMain: function(t, e) {
        if (void 0 != t) {
            var a = t.replace("http://", "https://");
            console.log("httpvideoUrl=" + a), n.getvideoCode(a, 0);
        }
        if (void 0 != e) {
            var i = e.replace("http://", "https://");
            console.log("httpaudoUrl=" + i), n.getvideoCode(i, 1);
        }
    },
    getvideoCode: function(t, e) {
        console.log("tab==" + e), wx.request({
            url: t,
            success: function(i) {
                if ("101" == i.data.errcode) return wx.showToast({
                    title: "暂无数据",
                    icon: "succes",
                    duration: 2e3,
                    mask: !0
                }), !1;
                var o = i.data.trim().split("\n"), s = [], d = [], r = "", l = "";
                if (o.length > 0) if (0 == e) {
                    o.forEach(function(t, e) {
                        -1 != t.indexOf("#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=") && s.push(t.replace("#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=", "").split(",")[0] / 1024), 
                        -1 != t.indexOf(".m3u8") && d.push(t);
                    }), s.length > 1 ? l = -1 != s.indexOf(850) ? d[s.indexOf(850)] : -1 != s.indexOf(1200) ? d[s.indexOf(1200)] : -1 != s.indexOf(450) ? d[s.indexOf(450)] : d[0] : 1 == d.length && (l = d[0]), 
                    console.log("m3u8Url==" + l);
                    var u = t.lastIndexOf("/"), c = t.substring(0, u + 1);
                    l = l.indexOf("://") > 0 ? l : "0" == l.indexOf("/") ? "https://" + n.data.cdnname11 + l : c + l, 
                    n.setData({
                        videoUrl: l
                    }), console.log("最终播放视频的url地址是：" + n.data.videoUrl);
                } else if (1 == e) {
                    for (var g = 0; g < o.length; g++) -1 != o[g].indexOf(".mp3") && d.push(o[g]);
                    r = d[0], r = t.replace("main.m3u8", r), console.log("mp3Url=" + r), n.setData({
                        audioUrl: r
                    }), console.log("that.data.isFirsttime=" + n.data.isFirsttime), 1 == n.data.currentTab && (n.data.isFirsttime ? (console.log("首次"), 
                    a.title = n.data.vTitle, a.epname = "新闻联播", a.singer = "新闻联播", a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
                    a.src = n.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + n.data.vide + ".html") : n.data.isPlaying ? (console.log("非首次相同vid"), 
                    console.log("同一个音频且播放中"), console.log("isPlaying=true && that.data.getCurTime=" + n.data.getCurTime), 
                    n.seek(n.data.getCurTime)) : (a.title = n.data.vTitle, a.epname = "新闻联播", a.singer = "新闻联播", 
                    a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
                    a.src = n.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + n.data.vide + ".html"), 
                    n.setData({
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
                }), n.setData({
                    isFirsttime: !1,
                    isPlaying: !1,
                    isAudio: !1
                })) : (wx.showToast({
                    title: "音频获取失败",
                    icon: "succes",
                    duration: 1e3,
                    mask: !0
                }), n.setData({
                    isFirsttime: !1,
                    isPlaying: !1,
                    isAudio: !1
                }));
            }
        });
    },
    videwaiting: function() {},
    videoend: function() {
        n.data.videoContext.pause(), a.pause(), n.setData({
            videopause: !1,
            isPlaying: !1,
            getCurTime: 0
        });
    },
    nextpage: function(t) {
        var e = t.currentTarget.dataset.vid, i = 1 * n.data.currentTab + 1, i = n.data.currentTab;
        n.data.videoContext.pause(), a.pause(), n.setData({
            videopause1: !1
        }), wx.redirectTo({
            url: "../svideo/svideo?id=" + e + "&type=" + i
        });
    },
    videocurtime: function(t) {
        "NaN" != t && NaN != t && void 0 != t && "undefined" != t || (t = 0);
        var e = 0, a = 0, i = parseInt(t);
        i > 60 && (a = parseInt(i / 60), i = parseInt(i % 60), a > 60 && (e = parseInt(a / 60), 
        a = parseInt(a % 60)));
        var o = function(t) {
            return t >> 0 < 10 ? "0" + t : t;
        }, s = o(e) > 0 ? o(e) + ":" : "";
        n.setData({
            currentPosition: s + o(a) + ":" + o(i)
        });
    },
    songToggle: function() {
        1 == n.data.isPlaying ? (a.pause(), n.setData({
            isAudio: !1,
            isPlaying: !1
        })) : (n.data.isAudioEnd ? (a.title = n.data.vTitle, a.epname = "新闻联播", a.singer = "新闻联播", 
        a.coverImgUrl = "http://p3.img.cctvpic.com/photoAlbum/page/performance/img/2019/2/25/1551065570194_751.jpg", 
        a.src = n.data.audioUrl, a.webUrl = "http://tv.cctv.com/v/v1/" + n.data.vide + ".html") : (console.log("that.data.getCurTime" + n.data.getCurTime), 
        a.play(), setTimeout(function() {
            n.seek(n.data.getCurTime);
        }, 100)), n.setData({
            isAudio: !0,
            isPlaying: !0,
            isAudioEnd: !1
        }));
    },
    clickVplay: function(t) {
        if (console.log("视频播放中"), 1 == n.data.currentTab) n.data.videoContext.pause(); else if (n.setData({
            videopause: !1
        }), a.pause(), n.data.isVideoSeek) {
            var e = n.data.getCurTime;
            n.data.videoContext.seek(Number(e)), n.setData({
                isVideoSeek: !1
            });
        }
    },
    videoPause: function(t) {
        console.log("视频暂停"), n.setData({
            videopause: !0
        });
    },
    getVidtime: function(t) {
        console.log("res.detail.currentTime=" + t.detail.currentTime), n.setData({
            curTime: t.detail.currentTime,
            getCurTime: t.detail.currentTime
        }), wx.hideLoading();
    },
    sliderTap: function(t) {
        n.seek();
    },
    sliderStart: function(t) {
        console.log("sliderStart");
    },
    sliderChange: function(t) {
        console.log("sliderChange");
    },
    sliderEnd: function(t) {
        console.log("sliderEnd"), n.seek();
    },
    sliderCancel: function(t) {
        console.log("sliderCancel"), n.seek();
    },
    seek: function(t) {
        if (console.log("执行seek"), console.log("time=" + t), void 0 == t) {
            e = n.wxzxSlider.properties.value;
            console.log("来自进度条value===" + e);
        } else {
            var e = parseInt(t);
            console.log("传入value===" + e);
        }
        var i = parseInt(e), o = n.secondTransferTime(i);
        n.setData({
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
    onShareAppMessage: function(t) {
        return console.log("that.data.vTitle+" + n.data.vTitle), {
            title: n.data.vTitle,
            path: "/pages/video/video?share=1&id=" + n.data.vId + "&type=1",
            imageUrl: n.data.vImage,
            success: function(t) {}
        };
    },
    redirectTosearch: function() {
        s.redirectTosearch(n);
    },
    readStorage: function() {
        for (var t = wx.getStorageSync("storageZQKey"), e = 0; e < t.length; e++) {
            if (n.data.vId == t[e].vidZQ) {
                console.log("已保存"), n.setData({
                    isSave: !0,
                    storageZQnum: e
                });
                break;
            }
            console.log("未保存"), n.setData({
                isSave: !1
            });
        }
    },
    saveShoucang: function() {
        if (n.readStorage(), n.data.ifsavaOk) if (n.setData({
            ifsavaOk: !1
        }), console.log("that.data.getData=" + n.data.getData), console.log("that.data.total_time=" + n.data.total_time), 
        "" == n.data.getData || "" == n.data.total_time || "00:00" == n.data.total_time) wx.showModal({
            title: "",
            content: "未获取到数据，请稍后再试！",
            showCancel: !1,
            confirmText: "确定",
            confirmColor: "#ee453c",
            success: function(t) {
                t.confirm;
            }
        }); else {
            console.log("收藏啦type=" + n.data.currentTab), n.data.dataArrZQ.dataZQ = n.data.getData, 
            n.data.dataArrZQ.titleZQ = n.data.dataArrZQ.titleZQ, n.data.dataArrZQ.vidZQ = n.data.vId, 
            n.data.dataArrZQ.vLengthZQ = n.data.totalDuration, n.data.dataArrZQ.typeZQ = n.data.currentTab, 
            n.data.dataArrZQ.riliYear = n.data.getData.substring(0, 4), n.data.dataArrZQ.riliMonth = n.data.getData.substring(4, 6), 
            n.data.dataArrZQ.riliDay = n.data.getData.substring(6, 8);
            var t = [ "日", "一", "二", "三", "四", "五", "六" ], e = new Date(Date.parse(n.data.getData.substring(0, 4) + "/" + n.data.getData.substring(4, 6) + "/" + n.data.getData.substring(6, 8)));
            n.data.dataArrZQ.riliData = "星期" + t[e.getDay()];
            var a = wx.getStorageSync("storageZQKey");
            if (1 == n.data.isSave) a.splice(n.data.storageZQnum, 1), n.setData({
                isSave: !1,
                storageZQ: a
            }); else if ("" == a) n.setData({
                storageZQ: [ n.data.dataArrZQ ],
                isSave: !0
            }); else {
                for (var i = [], o = [], s = 0; s < a.length; s++) {
                    var d = a[s].vidZQ;
                    -1 == i.indexOf(d) && (i.push(d), o.push(a[s]));
                }
                (a = o).length <= 19 ? n.setData({
                    storageZQ: a.concat([ n.data.dataArrZQ ]),
                    isSave: !0
                }) : (n.setData({
                    storageZQ: a
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
                key: "storageZQKey",
                data: n.data.storageZQ,
                success: function() {
                    n.data.isSave, a.length, setTimeout(function() {
                        n.setData({
                            ifsavaOk: !0
                        });
                    }, 500);
                },
                fail: function() {}
            });
        } else setTimeout(function() {
            n.setData({
                ifsavaOk: !0
            });
        }, 500);
    },
    saveAudio: function() {
        console.log(n.data.isPlaying), n.data.dataAudio.audioCurTime = n.data.getCurTime, 
        n.data.dataAudio.audiotitle = n.data.vTitle, n.data.dataAudio.audiostate = n.data.isPlaying, 
        n.data.dataAudio.audioztime = n.data.max, n.data.dataAudio.vId = n.data.vId, wx.setStorage({
            key: "storageAudio",
            data: n.data.dataAudio,
            success: function() {
                var t = wx.getStorageSync("storageAudio");
                console.log("storageaudio缓存成功vid=" + t.vId), console.log("storageaudio缓存成功audioztime=" + t.audioztime);
            },
            fail: function(t) {
                console.log("storageaudio缓存失败" + t.data);
            }
        });
    },
    onUnload: function() {
        1 == n.data.isPlaying ? (console.log("离开页面音频仍在播放，存储音频播放信息"), n.saveAudio()) : (wx.removeStorage({
            key: "storageAudio",
            success: function(t) {
                console.log("离开页面停止音频播放，清除音频播放缓存");
            }
        }), a.stop());
    }
});