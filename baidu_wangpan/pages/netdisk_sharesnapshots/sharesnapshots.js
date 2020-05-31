var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./sharesnapshotsUtils.js")), e = require("../../netdiisk_requestapi/getFileList.js"), i = require("../../netdisk_utils/transform.js"), s = require("../../netdisk_utils/shareGroupOper.js"), r = require("../../netdisk_utils/common.js"), n = require("../../netdisk_utils/calculate.js"), l = require("../../netdisk_utils/setUserCenterInfo.js"), o = require("../../netdisk_utils/logicUtils.js"), h = (wx.ENV.version, 
getApp()), d = wx.ENV.staticName, u = wx.ENV.staticPath;

Page({
    data: {
        isMedia: !1,
        mediaType: "",
        isMediaMore: !1,
        showThumb: "",
        videoName: "",
        videoSize: "",
        serverFilename: "",
        fileListTabData: {
            list: [],
            staticName: d,
            fileCategory: wx.ENV.CONF.FILE_CATEGORY,
            isLoading: !0,
            length: 0
        },
        currentFileItem: {},
        thumbStyle: "",
        mediaBgStyle: "",
        shareType: "",
        surl: "",
        hasListData: "",
        isOneImg: !1,
        height: 0,
        imagetype: -1,
        ispc: !1,
        showNav: !0,
        memberType: 0,
        staticPath: u
    },
    onReady: function() {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.Navbar = this.selectComponent("#Navbar"), this.Navbar.setTitle(""), this.initGlobalData();
    },
    onLoad: function(s) {
        var r = this;
        if (s.from && (this.data.fromPriview = s.from), this.data.currentFileItem = {
            fid: s.fid,
            path: decodeURIComponent(s.path),
            serverFilename: s.serverFilename,
            share: s.share,
            uk: s.uk
        }, this.setData({
            surl: s.surl || "",
            hasListData: s.hasListData,
            isOneImg: s.isOneImg || !1,
            height: h.globalData.navHeight,
            imagetype: s.imagetype || this.data.imagetype
        }), "true" === s.hasListData) {
            this.data.surl && wx.log.snapshoot.batchShareShow.send();
            var n = h.globalData.preShareData.list;
            if (1 === n.length && 1 === n[0].isdir) {
                var o = n[0].path;
                this.getFileListByPath(o, 0, 10), this.data.currentFileItem.serverFilename = n[0].server_filename;
            } else {
                var d = a.default.filterListMedia(n);
                if (d.imgList.length > 0) this.setData({
                    isMedia: !0
                }), wx.wetoast({
                    content: "处理中",
                    loading: !0,
                    duration: !0
                }), a.default.initSnapShots(d, this, h); else {
                    this.analyticsHanleList(n);
                    var u = this.filterFileList(n.slice(0, 5));
                    this.setData({
                        "fileListTabData.list": u,
                        "fileListTabData.isLoading": !1,
                        "fileListTabData.length": u.length
                    });
                }
            }
        } else {
            this.data.surl && wx.log.snapshoot.singleShareShow.send();
            var g = this.data.currentFileItem.path;
            e.fileListRequestApis.getNormalList(g, 0, 10).then(function(t) {
                var e = t.data.list;
                t.data.list.length;
                r.data.fileListTabData.list = (0, i.dataTransform)(e);
                var s = a.default.filterListMedia(r.data.fileListTabData.list);
                if (r.data.surl && "true" === r.data.isOneImg) {
                    var n = h.globalData.preShareData.list;
                    s = a.default.filterListMedia(n);
                }
                if (s.imgList.length > 0) r.setData({
                    isMedia: !0
                }), wx.wetoast({
                    content: "处理中",
                    loading: !0,
                    duration: !0
                }), a.default.initSnapShots(s, r, h); else {
                    var l = r.data.fileListTabData.list;
                    r.data.surl && "true" === r.data.isOneImg && (l = h.globalData.preShareData.list), 
                    r.analyticsHanleList(l);
                    var o = r.filterFileList(l.slice(0, 5));
                    r.setData({
                        "fileListTabData.list": o,
                        "fileListTabData.isLoading": !1,
                        "fileListTabData.length": o.length
                    });
                }
            }, function(t) {
                console.log("server-list error: ", t);
            });
        }
        this.setData({
            serverFilename: this.data.currentFileItem.serverFilename
        }), (0, l.setUserCenterInfo)().then(function() {
            r.setData(t({}, h.globalData.userCenterInfo));
        });
    },
    filterFileList: function(t) {
        return t.forEach(function(t) {
            var a = 1 == t.category - 0, e = 3 === t.category, i = (0, r.checkType)(t.path);
            2 === t.category && (i = wx.ENV.CONF.FILE_CATEGORY[t.category]);
            var s = wx.ENV.staticName + "mini-program/images/ic_" + i + ".png?v=1.0";
            e && (0, n.getOriginImgUrl)(t.thumbs.url1 || t.thumbs.url2 || t.thumbs.url3), a && (s = wx.ENV.staticName + "mini-program/images/ic_video.png?v=1.0"), 
            t.categoryImage = s;
        }), t;
    },
    getFileListByPath: function(t, s, r) {
        var n = this;
        e.fileListRequestApis.getNormalList(t, s, r).then(function(t) {
            var e = t.data.list;
            t.data.list.length;
            n.data.fileListTabData.list = (0, i.dataTransform)(e);
            var s = a.default.filterListMedia(n.data.fileListTabData.list);
            s.imgList.length > 0 ? (n.setData({
                isMedia: !0
            }), wx.wetoast({
                content: "处理中",
                loading: !0,
                duration: !0
            }), a.default.initSnapShots(s, n, h)) : (n.analyticsHanleList(e), n.setData({
                "fileListTabData.list": n.filterFileList(n.data.fileListTabData.list),
                "fileListTabData.isLoading": !1,
                "fileListTabData.length": n.data.fileListTabData.list.length
            }));
        }, function(t) {
            console.log("server-list error: ", t);
        });
    },
    analyticsHanleList: function(t) {
        t.length <= 0 ? (this.data.shareType = "empty", wx.log.snapshoot.snapshootempty.send()) : 1 === t.length ? (this.data.shareType = "single", 
        wx.log.snapshoot.snapshootsingle.send()) : (this.data.shareType = "more", wx.log.snapshoot.snapshootmore.send());
    },
    onShareAppMessage: function(t) {
        var a = this;
        this.data.fromPriview && "video" === this.data.fromPriview ? wx.log.snapshoot.snapfromvideoclick.send() : this.data.fromPriview && "audio" === this.data.fromPriview ? wx.log.snapshoot.snapfromaudioclick.send() : wx.log.snapshoot.snapshootclick.send(), 
        this.data.surl && ("true" === this.data.hasListData ? wx.log.snapshoot.batchSharBtnClick.send() : wx.log.snapshoot.singleSharBtnClick.send()), 
        "" !== this.data.shareType && wx.log.snapshoot["snapshootSend" + this.data.shareType].send();
        var e = a.data.currentFileItem.uk, i = a.data.currentFileItem.fid, r = a.data.currentFileItem.share;
        h.globalData.preShareData.list.length;
        !this.data.surl && s.shareGroupOper.dirSendWeixinCard({
            isShare: r,
            fid: i
        });
        var n = this.data.surl ? "pages/netdisk_share/share?surl=" + this.data.surl + "&imagetype=" + this.data.imagetype : "pages/netdisk_index/index?to=sharedir&from=sharetoweixingroup&fid=" + i + "&uk=" + e + "&mod=" + this.data.shareType, l = {
            1: "[来自VIP的分享]",
            2: "[来自SVIP的分享]"
        }[this.data.memberType] || "";
        return {
            title: (this.data.surl ? "" + this.data.serverFilename : "点击加入“" + this.data.serverFilename + "”") + l,
            path: n,
            imageUrl: ""
        };
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
    shareToCircle: function(t) {
        this.SharePoster = this.selectComponent("#SharePoster"), this.SharePoster.show({
            title: this.data.serverFilename,
            name: this.caculateName(this.data.name),
            shareImage: this.data.showThumb,
            surl: this.data.surl,
            pwd: ""
        });
    },
    caculateName: function(t) {
        if ("string" == typeof t) {
            if (t.length > 2) {
                var a = t.substring(1, t.length - 1);
                return t.replace(a, "***");
            }
            return t.split("")[0] + "***";
        }
        return t;
    },
    initGlobalData: function() {
        (0, o.systemInfoSync)();
        var t = +h.globalData.systemInfo.version[0];
        this.setData({
            ispc: h.globalData.systemInfo.ispc,
            showNav: t < 7
        });
    }
});