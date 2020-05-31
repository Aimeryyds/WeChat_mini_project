function a(a, t, i) {
    return t in a ? Object.defineProperty(a, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = i, a;
}

var t = require("../../netdiisk_requestapi/getAudioUrls.js"), i = require("../../netdisk_utils/transform.js"), e = require("../../netdisk_utils/common.js"), s = require("../../netdisk_utils/shareFn.js"), r = require("../../netdisk_utils/mediaMixin"), o = require("../../netdisk_utils/logicUtils"), n = getApp(), d = wx.getBackgroundAudioManager(), u = "bdnetdisk://n/action.AUDIO?m_n_v=8.3.0";

Page({
    data: {
        audioName: "",
        audioSize: "",
        currentTime: "00:00",
        endTime: "00:00",
        audioProgress: 0,
        isPlay: !1,
        currentIndex: 0,
        audioList: [],
        durationData: {},
        durationMoving: !1,
        isMarquee: !1,
        from: "",
        fromNa: n.globalData.fromNA,
        appParameter: u,
        height: 0,
        showButton: !0,
        saved: 0,
        fromType: "",
        isAudio: !0,
        ispc: !1,
        firstPlay: !0
    },
    onLoad: function(t) {
        var i = this;
        this.pageType = "previewAudio", this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.data.from = t.from, this.data.currentIndex = Number(t.currentIndex), this.data.audioList = n.globalData.audioList, 
        this.data.pixelRatio = n.globalData.systemInfo.pixelRatio, this.playAudio(this.data.currentIndex), 
        this.data.userUk = (0, e.getUk)(), this.data.currentAudio = this.data.audioList[this.data.currentIndex], 
        this.surl = t.surl || "";
        var s = "share" === t.from ? n.globalData.shareInfo.uk : "", r = wx.getStorageSync("uk"), o = "share" === t.from ? s === r ? 1 : +t.saved : 1, d = this.data.currentAudio.path;
        +t.saved && !d.includes("/我的资源/") && (d = "/我的资源/" + this.data.audioName), this.setData({
            appParameter: u + "&uk=" + this.data.userUk + "&path=" + encodeURIComponent(d) + "&origin=1",
            height: n.globalData.navHeight,
            barheight: n.globalData.statusBarHeight + n.globalData.totalHeight + 32,
            imagetype: t.imagetype || -1,
            isOwner: s === r,
            showButton: "sharedir" === t.from,
            shareid: t.shareid || "",
            shareUk: t.shareuk || "",
            surl: t.surl || "",
            fs_id: this.data.currentAudio.fs_id,
            fromType: t.from,
            fromNa: n.globalData.fromNA,
            saved: o,
            pwd: t.pwd || ""
        }, function(a) {
            console.log("appParameter", i.data.appParameter);
        });
        var h = this.data.audioList[this.data.currentIndex].server_filename, l = this.getWidth(h);
        l > 12 && (this.setData({
            isMarquee: !0
        }), this.setData(a({}, "marquee.width", l))), e.DETAIL_SHARE || wx.hideShareMenu(), 
        this.Navbar = this.selectComponent("#Navbar"), this.Navbar.setTitle("音频播放"), n.globalData.shareDirData.currentDirData.publicMeta.shareinfo && n.globalData.shareDirData.currentDirData.publicMeta.shareinfo.uk + "" != wx.getStorageSync("uk") + "" && this.setData({
            showButton: !1
        }), "share" === this.data.fromType && this.setData({
            showShareView: !0
        }), this.initGlobalData();
    },
    onUnload: function() {
        this.data.ispc && this.data.isPlay && d.pause();
    },
    audioPlay: function() {
        this.data.isPlay ? d.pause() : d.play();
    },
    previousPlay: function() {
        0 == +this.data.currentIndex ? (this.data.currentIndex = this.data.audioList.length - 1, 
        this.playAudio(this.data.currentIndex)) : (this.data.currentIndex = this.data.currentIndex - 1, 
        this.playAudio(this.data.currentIndex));
    },
    nextPlay: function() {
        +this.data.currentIndex == this.data.audioList.length - 1 ? (this.data.currentIndex = 0, 
        this.playAudio(this.data.currentIndex)) : (this.data.currentIndex = this.data.currentIndex + 1, 
        this.playAudio(this.data.currentIndex));
    },
    playAudio: function(a) {
        var e = this, s = this.data.audioList[a], r = this.data.from, o = "";
        "share" === r && (o = n.globalData.shareInfo.uk);
        var u = {
            path: s.path,
            fid: s.fs_id,
            name: s.server_filename,
            size: s.size,
            originSize: s.originSize
        };
        this.setData({
            audioName: u.name,
            audioSize: u.size,
            currentTime: "00:00",
            audioProgress: 0,
            firstPlay: !0
        });
        var h = {
            sharedir: "shareAudioPreview",
            share: "sharePageAudioPreview"
        }[r] || "normalAudioPreview";
        wx.log.file[h].send(), wx.logBp.file[h].send();
        var l = function(a) {
            if (e.data.firstPlay) {
                var t = a;
                try {
                    t = JSON.stringify(t);
                } catch (a) {
                    console.warn(a);
                }
                t = t.replace(/&/g, "@@@"), wx.log.file.audioPreviewFailed.send(), wx.logBp.file.audioPreviewFailed.send({
                    msg: t,
                    audioFile: JSON.stringify(u)
                }), wx.wxMonitor.audio.send(), e.setData({
                    firstPlay: !1
                });
            }
        };
        (0, t.getAudiosUrls)(u.path, o).then(function(a) {
            var t = a.data.dlink;
            d.src = t[0].dlink, d.title = u.name, wx.wetoast({
                content: "加载中",
                loading: !0,
                duration: !0
            }), d.onTimeUpdate(function() {
                e.data.durationMoving || null !== d.duration && 0 !== d.duration && e.setData({
                    currentTime: (0, i.msToMin)(d.currentTime),
                    endTime: (0, i.msToMin)(d.duration),
                    audioProgress: d.currentTime / d.duration * 100
                });
            }), d.onPlay(function() {
                if (e.data.isPlay = !0, e.setData({
                    isPlay: e.data.isPlay
                }, function() {}), wx.toasthide(), e.data.firstPlay) {
                    var a = {
                        sharedir: "shareAudioPreviewSuccess",
                        share: "sharePageAudioPreviewSuccess"
                    }[r] || "normalAudioPreviewSuccess";
                    wx.log.file[a].send(), wx.logBp.file[a].send(), e.setData({
                        firstPlay: !1
                    });
                }
            }), d.onPause(function(a) {
                e.data.isPlay = !1, e.setData({
                    isPlay: e.data.isPlay
                });
            }), d.onStop(function(a) {
                e.data.isPlay = !1, e.setData({
                    isPlay: e.data.isPlay
                });
            }), d.onEnded(function(a) {
                e.data.isPlay = !1, e.setData({
                    isPlay: e.data.isPlay
                }), e.nextPlay();
            }), d.onError(function(a) {
                e.data.isPlay = !1, e.setData({
                    isPlay: e.data.isPlay
                }), wx.toasthide(), l(a);
            });
        }).catch(function(a) {
            l(a);
        });
    },
    getWidth: function(a) {
        return [].reduce.call(a, function(t, i, e, s) {
            return a.charCodeAt(e) > 255 ? t++ : t += .5, t;
        }, 0);
    },
    durationStart: function(a) {
        this.data.durationMoving = !0, this.data.durationData.sPageX = a.changedTouches[0] && a.changedTouches[0].pageX, 
        this.data.durationData.sOffestLeft = a.currentTarget.offsetLeft;
    },
    durationMove: function(a) {
        this.data.durationData.nPageX = a.changedTouches[0] && a.changedTouches[0].pageX;
        var t = this.data.durationData.nPageX - this.data.durationData.sPageX;
        if (t > 0) {
            this.data.durationData.cOffestLeft = this.data.durationData.sOffestLeft + t;
            var e = this.data.durationData.cOffestLeft * this.data.pixelRatio / 498;
            this.data.durationData.cOffestLeft * this.data.pixelRatio > 498 && (e = 1), this.setData({
                currentTime: (0, i.msToMin)(d.duration * e),
                audioProgress: 100 * e
            });
        } else {
            this.data.durationData.cOffestLeft = this.data.durationData.sOffestLeft + t;
            var s = this.data.durationData.cOffestLeft * this.data.pixelRatio / 498;
            this.data.durationData.cOffestLeft * this.data.pixelRatio <= 0 && (s = 0), this.setData({
                currentTime: (0, i.msToMin)(d.duration * s),
                audioProgress: 100 * s
            });
        }
    },
    durationEnd: function(a) {
        this.data.durationMoving = !1, this.data.durationData.ePageX = a.changedTouches[0] && a.changedTouches[0].pageX;
        var t = this.data.durationData.ePageX - this.data.durationData.sPageX;
        if (t > 0) {
            this.data.durationData.cOffestLeft = this.data.durationData.sOffestLeft + t;
            var e = this.data.durationData.cOffestLeft * this.data.pixelRatio / 498;
            this.data.durationData.cOffestLeft * this.data.pixelRatio > 498 && (e = 1), this.setData({
                currentTime: (0, i.msToMin)(d.duration * e),
                audioProgress: 100 * e
            }, function(a) {
                d.seek(d.duration * e);
            });
        } else {
            this.data.durationData.cOffestLeft = this.data.durationData.sOffestLeft + t;
            var s = this.data.durationData.cOffestLeft * this.data.pixelRatio / 498;
            this.data.durationData.cOffestLeft * this.data.pixelRatio <= 0 && (s = 0), this.setData({
                currentTime: (0, i.msToMin)(d.duration * s),
                audioProgress: 100 * s
            }, function(a) {
                d.seek(d.duration * s);
            });
        }
    },
    previousTouchS: function() {
        this.setData({
            snapshootPreviousBtnStyle: "opacity: 0.6;"
        });
    },
    previousTouchE: function() {
        this.setData({
            snapshootPreviousBtnStyle: ""
        });
    },
    snapshootTouchS: function() {
        this.setData({
            snapshootBtnStyle: "opacity: 0.6;"
        });
    },
    snapshootTouchE: function() {
        this.setData({
            snapshootBtnStyle: ""
        });
    },
    nextTouchS: function() {
        this.setData({
            snapshootNextBtnStyle: "opacity: 0.6;"
        });
    },
    nextTouchE: function() {
        this.setData({
            snapshootNextBtnStyle: ""
        });
    },
    launchCal: function(a) {
        console.log(a);
    },
    move: function(a) {},
    share: function() {
        var a = {
            path: this.data.currentAudio.path,
            server_filename: this.data.currentAudio.server_filename,
            isdir: this.data.currentAudio.isdir - 0,
            category: this.data.currentAudio.category,
            fs_id: this.data.currentAudio.fs_id,
            thumbs: this.data.currentAudio.dlink,
            isOneImg: !0
        };
        wx.log.file.AudioPreviewShare.send(), n.globalData.preShareData.list = [ a ];
        var t = {
            from: "audio",
            surl: this.surl || "",
            imagetype: this.data.imagetype
        };
        (0, s.jumpToShareSnap)(a, t);
    },
    saveSucc: function() {
        this.setData({
            saved: 1,
            appParameter: u + "&uk=" + this.data.userUk + "&path=" + encodeURIComponent("/我的资源/" + this.data.audioName) + "&origin=1"
        });
    },
    pCode: function() {
        (0, r.pCode)(this.data);
    },
    initGlobalData: function() {
        (0, o.systemInfoSync)(), this.setData({
            ispc: n.globalData.systemInfo.ispc
        });
    }
});