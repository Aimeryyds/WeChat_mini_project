var e = (getApp() || {}).global, t = require("../../external/mta_analysis.js"), i = require("../../common/md.js"), a = require("../../common/request.js"), n = require("../../common/user.js"), o = require("../../common/file.js"), r = require("../../common/download_manager.js"), s = (Math.pow(2, 20), 
20 * Math.pow(2, 20)), d = [ "all", "doc", "img", "video", "audio" ], l = [ {
    img: "../../img/status/icon-noall.png",
    title: "该目录下没有文件",
    subTitle: ""
}, {
    img: "../../img/status/icon-nodoc.png",
    title: "文档列表为空",
    subTitle: "分门别类查看自己的文档"
}, {
    img: "../../img/status/icon-noimg.png",
    title: "图片列表为空",
    subTitle: "分门别类查看自己的图片"
}, {
    img: "../../img/status/icon-novideo.png",
    title: "视频列表为空",
    subTitle: "从电脑上传视频，手机也可以播放"
}, {
    img: "../../img/status/icon-noaudio.png",
    title: "音乐列表为空",
    subTitle: "从电脑上传音乐，手机也可以播放"
}, {
    img: "../../img/status/icon-nodir.png",
    title: "文件夹是空的",
    subTitle: ""
} ], c = "dir", u = !1, g = void 0, f = void 0, p = !1;

Page({
    onLoad: function(n) {
        i.log("[main page]: index onLoad"), t.Page.init(), t.Event.stat("fenxianggeibier", {
            diskenter: "true"
        }), this.setData({
            isSaveShare: n.save_share || ""
        }), a.webapp({
            cmd: "DiskUserInfoGet",
            data: {
                show_qqdisk_migrate: !0,
                is_get_qzone_flag: !0,
                is_get_upload_flow_flag: !0,
                is_get_weiyun_flag: !0
            }
        }).then(function(t) {
            i.log("[main page]: update DiskUserInfoGet success"), e.userInfo = t;
        }).catch(function(e) {
            i.log("[main page]: update DiskUserInfoGet fail");
        });
    },
    onShow: function() {
        i.log("[main page]: index onShow");
    },
    onReady: function() {
        i.log("[main page]: index onReady"), this.init();
    },
    onHide: function() {
        this.hideRename(), i.log("[main page]: index onHide"), i.write();
    },
    onUnload: function() {
        this.hideRename(), i.log("[main page]: index onUnload");
    },
    onScroll: function(e) {
        e.detail.scrollHeight - e.detail.scrollTop < 1200 && this.loadMore();
    },
    init: function(t) {
        var n = this;
        return i.log("[main page]: init"), void 0 === t && (t = !!e.navData[this.data.currentTab]), 
        t || wx.showLoading(), new Promise(function(n, o) {
            if (!Object.keys(e.userInfo).length) return a.webapp({
                cmd: "DiskUserInfoGet",
                data: {
                    show_qqdisk_migrate: !0,
                    is_get_qzone_flag: !0,
                    is_get_upload_flow_flag: !0,
                    is_get_weiyun_flag: !0
                }
            }).then(function(t) {
                i.log("[main page]: DiskUserInfoGet success"), e.userInfo = t, n(e.userInfo);
            }).catch(function(e) {
                t || 900 === e.code || wx.showToast({
                    title: "数据加载失败，请退出重试",
                    icon: "none"
                }), o(e);
            });
            n(e.userInfo);
        }).then(function() {
            if (i.log("[main page]: global.userInfo.is_pwd_open: " + e.userInfo.is_pwd_open), 
            e.userInfo.is_pwd_open) {
                var t = wx.getStorageSync("indepInfo"), a = t.access, n = void 0 !== a && a, o = t.expire, r = void 0 === o ? 0 : o;
                return i.log("[main page]: access: " + n + ", expire: " + r), n && +new Date() < r ? Promise.resolve() : Promise.reject("indep");
            }
            return Promise.resolve();
        }).then(function() {
            return t && n.render({}), n.loader({
                silence: t
            }).then(function() {
                n.render({});
            });
        }).then(function() {
            wx.hideLoading();
        }).then(function() {
            n.data.isSaveShare && wx.showToast({
                title: "保存成功"
            });
        }).catch(function(t) {
            wx.hideLoading(), i.log("[main page]: init fail"), i.log("more info: " + JSON.stringify(t)), 
            i.write(), "indep" === t && wx.navigateTo({
                url: "../password/index?uin=" + e.userInfo.uin
            });
        });
    },
    loadMore: function() {
        var e = this, t = 0;
        if (!this.data.finished && !this.data.loading) {
            if (i.log("[main page]: onLoadMore"), (t = this.data.pageAnchor) > 10) return this.data.tips || this.setData({
                tips: "当前列表长度超过限制，请用微云APP查看更多文件"
            }), void i.log("[main page]: onloadmore pageNum limit, pageNum: " + t);
            this.data.tips && this.setData({
                tips: ""
            }), this.setData({
                loading: !0
            }), this.loader({
                key: this.data.currentTab,
                start: 50 * (t + 1),
                pageNum: t + 1,
                silence: !0
            }).then(function() {
                t++, e.setData({
                    loading: !1,
                    pageAnchor: t
                }), e.render({
                    more: !0,
                    pageNum: t
                });
            }, function() {
                e.setData({
                    loading: !1
                }), i.log("[main page]: loadMore loader fail");
            });
        }
    },
    loader: function() {
        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.userInfo.is_pwd_open) {
            var o = wx.getStorageSync("indepInfo"), r = o.access, s = void 0 !== r && r, d = o.expire, l = void 0 === d ? 0 : d;
            if (!s || +new Date() >= l) return wx.navigateTo({
                url: "../password/index?uin=" + e.userInfo.uin
            }), Promise.reject({
                msg: "global.indep invoked, navigate to password page"
            });
        }
        var g = void 0, f = n.key || this.data.currentTab, p = n.start || 0, m = n.count || 50, h = n.pageNum || 0;
        switch (i.log("[main page]: loader request, current page: " + this.data.pageAnchor + " start: " + p + ", count: " + m + ", pageNum: " + h), 
        f) {
          case 0:
            g = {
                cmd: "DiskDirBatchList",
                data: {
                    dir_list: [ {
                        get_type: 0,
                        start: p,
                        count: m,
                        sort_field: 2,
                        reverse_order: !1,
                        get_abstract_url: !0
                    } ]
                }
            }, c = "dir";
            break;

          case 1:
            g = {
                cmd: "LibPageListGet",
                data: {
                    offset: p,
                    count: m,
                    sort_type: 1,
                    group_id: this.data.currentFilter,
                    lib_id: 1
                }
            }, c = "file";
            break;

          case 2:
            g = {
                cmd: "LibPageListGet",
                data: {
                    offset: p,
                    count: m,
                    sort_type: 1,
                    group_id: 0,
                    lib_id: 2,
                    get_abstract_url: !0
                }
            }, c = "file";
            break;

          case 3:
            g = {
                cmd: "LibPageListGet",
                data: {
                    offset: p,
                    count: m,
                    sort_type: 1,
                    group_id: 0,
                    lib_id: 4
                }
            }, c = "file";
            break;

          case 4:
            g = {
                cmd: "LibPageListGet",
                data: {
                    offset: p,
                    count: m,
                    sort_type: 1,
                    group_id: 0,
                    lib_id: 3
                }
            }, c = "file";
            break;

          default:
            g = {
                cmd: "DiskDirBatchList",
                data: {
                    dir_list: [ {
                        get_type: 0,
                        start: p,
                        count: m,
                        sort_field: 1,
                        reverse_order: !0,
                        get_abstract_url: !0,
                        dir_key: f,
                        dir_name: ""
                    } ]
                }
            }, c = "dir";
        }
        return new Promise(function(o, r) {
            !n.silence && wx.showLoading(), u = !0, a.webapp(g).then(function(i) {
                wx.hideLoading();
                var a = t.handleData(i);
                h ? e.navData["new_" + f] = a : e.navData[f] = a, u = !1, o(a);
            }, function(e) {
                wx.hideLoading(), i.log("[main page]: get nav[" + f + "] data fail"), i.write();
                var t = "数据加载失败", a = void 0;
                "string" == typeof e ? t += "【" + e + "】" : a = (e.message || e.retMsg || "").search("getUserInfo:fail") >= 0, 
                !n.silence && !a && wx.showToast({
                    title: t,
                    icon: "none",
                    duration: 3e3
                }), u = !1, r(e);
            });
        });
    },
    handleData: function(t) {
        var i = void 0, a = [], n = [], r = void 0, s = void 0, d = void 0, l = void 0;
        return "dir" == c ? (i = (t.dir_list || [])[0] || {}, l = e.userInfo.root_dir_key, 
        d = e.userInfo.main_dir_key, a = o.format(i.dir_list || [], "dir", d, l), n = o.format(i.file_list || [], "file", d, l), 
        r = a.length, s = n.length, this.setData({
            finished: Boolean(i.finish_flag)
        })) : "file" == c && (a = [], n = o.format(t.FileItem_items || [], "file"), r = 0, 
        s = t.total_number, this.setData({
            finished: Boolean(t.finish_flag)
        })), {
            dirList: a,
            fileList: n,
            dirLength: r,
            fileLength: s
        };
    },
    updateNode: function(t) {
        for (var i = this, a = e.navData[this.data.currentTab], n = !1, o = 0, r = a.fileList.length; o < r; o++) {
            var s = a.fileList[o];
            if (s.file_id === t.file_id) {
                s.download_progress = t.download_progress, n = !0;
                break;
            }
        }
        n && !p && (p = !0, setTimeout(function() {
            p = !1, i.setData(a);
        }, 200));
    },
    render: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.extend || {}, n = void 0 !== a.currentTab ? a.currentTab : this.data.currentTab, o = t.pageNum || 0, r = e.navData[n] || {}, s = {};
        i.log("[main page]: render, current tab: " + n + ", pageNum: " + o + ", more: " + !!t.more), 
        t.more && (s = e.navData["new_" + n] || {}, r = {
            dirList: r.dirList.concat(s.dirList || []),
            fileList: r.fileList.concat(s.fileList || [])
        }, e.navData[n] = r), r.dirList.length + r.fileList.length === 0 && (a.fileBlankData = l[n]), 
        this.setData(Object.assign({
            dialogDisplay: !1,
            filterDisplay: this.hasFilterBar(n),
            height: wx.getSystemInfoSync().windowHeight - (this.data.statusBarHeight || 64) - (this.hasFilterBar(n) ? 102 : 49)
        }, r, a));
    },
    hasFilterBar: function(e) {
        return 1 === (void 0 !== e ? e : this.data.currentTab);
    },
    bindNavTap: function(a) {
        var n = this;
        if (i.log("[main page]: bindNavTap, loadLock: " + u), !u) {
            var o = (a.currentTarget || {}).dataset || {}, s = parseInt(o.index), l = {
                scrollTop: 0
            };
            if (void 0 !== s && this.data.currentTab !== s) {
                r.stopTaskObserver(s);
                var c = !!e.navData[s];
                c ? (l.currentTab = s, l.pageAnchor = 0, l.tips = "", this.render({
                    extend: l
                }), setTimeout(function() {
                    n.loader({
                        silence: c
                    }).then(function() {
                        n.render({
                            extend: l
                        });
                    }, function(e) {
                        i.log("[main page]: bindNavTap loader fail, res: " + JSON.stringify(e));
                    });
                }, 500)) : (this.setData({
                    currentTab: s,
                    pageAnchor: 0,
                    tips: ""
                }), this.loader({
                    silence: c
                }).then(function() {
                    n.render({
                        extend: l
                    });
                }, function(e) {
                    i.log("[main page]: bindNavTap loader fail, res: " + JSON.stringify(e));
                })), t.Event.stat("navtap", {
                    tab: d[this.data.currentTab]
                });
            }
        }
    },
    bindFilterTap: function(t) {
        var a = this;
        if (i.log("[main page]: bindFilterTap, loadLock: " + u), !u) {
            var n = (t.currentTarget || {}).dataset || {}, o = parseInt(n.index);
            if (void 0 !== o && o !== this.data.currentFilter) {
                var r = !!e.navData["filter_" + o];
                r ? (e.navData[this.data.currentTab] = e.navData["filter_" + o], this.render({
                    extend: {
                        currentFilter: o,
                        tips: ""
                    }
                }), setTimeout(function() {
                    a.loader({
                        silence: r
                    }).then(function() {
                        e.navData["filter_" + o] = e.navData[a.data.currentTab], a.render({
                            extend: {
                                scrollTop: 0
                            }
                        });
                    }, function(e) {
                        a.setData({
                            loading: !1
                        }), i.log("[main page]: bindFilterTap loader fail"), i.log("more info: " + JSON.stringify(e)), 
                        i.write();
                    });
                }, 500)) : (this.setData({
                    currentFilter: o,
                    tips: ""
                }), this.loader({
                    silence: r
                }).then(function() {
                    e.navData["filter_" + o] = e.navData[a.data.currentTab], a.render({
                        extend: {
                            scrollTop: 0
                        }
                    });
                }, function(e) {
                    a.setData({
                        loading: !1
                    }), i.log("[main page]: bindFilterTap loader fail"), i.log("more info: " + JSON.stringify(e)), 
                    i.write();
                }));
            }
        }
    },
    catchOpTap: function(e) {
        var a = this, n = ((e.currentTarget || {}).dataset || {}).key, r = o.getStore(n);
        if (i.log("[main page]: catchOpTap, key: " + n + ", has data: " + !!r), r) {
            var s = [ "分享", "下载", "重命名", "删除" ];
            this.data.isQQ && "dir" !== r.type || s.splice(1, 1), new Promise(function(e, t) {
                wx.showActionSheet({
                    itemList: s,
                    success: function(t) {
                        e(t);
                    },
                    fail: function(e) {
                        t(e);
                    }
                });
            }).then(function(e) {
                switch (t.Event.stat("fenxianggeibier", {
                    showactionsheet: "true"
                }), e.tapIndex) {
                  case 0:
                    a.catchShareTap(n, r);
                    break;

                  case 1:
                    4 === s.length ? a.catchDownloadTap(n, r) : a.catchRenameTap(n, r);
                    break;

                  case 2:
                    4 === s.length ? a.catchRenameTap(n, r) : a.catchRemoveTap(n, r);
                    break;

                  case 3:
                    a.catchRemoveTap(n, r);
                }
            }).catch(function() {});
        }
    },
    bindItemTap: function(n) {
        var d = ((n.currentTarget || {}).dataset || {}).key, l = o.getStore(d), c = void 0, u = void 0, p = void 0, m = void 0, h = void 0, _ = void 0, v = void 0, w = void 0, x = void 0;
        if (l && g !== d) if (g = d, c = l.type, u = l.pdir_key, p = l.dir_name || l.filename, 
        m = l.file_size, h = l.is_image, _ = l.is_doc, v = l.is_video, w = l.is_audio, "dir" === c) x = "../directory/index?ppdir_key=" + encodeURIComponent(l.ppdir_key || e.userInfo.root_dir_key) + "&pdir_key=" + encodeURIComponent(l.pdir_key || e.userInfo.main_dir_key) + "&dir_key=" + encodeURIComponent(d) + "&dir_name=" + encodeURIComponent(p), 
        wx.navigateTo({
            url: x,
            fail: function(e) {
                i.log("[main page]: dir navigate: " + e.errMsg), i.write();
            }
        }), g = null, t.Event.stat("preview", {
            dir: "true"
        }); else if (h) e.galleryData = {
            list: o.filter((e.navData[this.data.currentTab] || {}).fileList, "image")
        }, i.log("[main page]: preview image navigate to gallery, file_id: " + l.file_id), 
        wx.navigateTo({
            url: "../gallery/gallery?image=" + l.file_id,
            fail: function(e) {
                i.log("[main page]: image navigate: " + e.errMsg), i.write();
            }
        }), g = null, t.Event.stat("preview", {
            img: "true"
        }); else if (v || w || _) {
            var y = void 0;
            if (v && !o.isPreviewVideo(l.ext) && (y = "小程序暂不支持" + l.ext + "视频文件，请用微云APP播放", 
            t.Event.stat("preview", {
                videoerror: "true"
            })), w && m > s && (y = "防止内存占用，大于20M的音乐请用微云APP播放", t.Event.stat("preview", {
                audiolimit: "true"
            })), _ && "txt" === l.ext && (y = "小程序暂不支持txt文件预览，请用微云APP查看", t.Event.stat("preview", {
                docerror: "true"
            })), w && "mp3" !== l.ext && "m4a" !== l.ext && "aac" !== l.ext && "wav" !== l.ext && (y = "小程序暂不支持" + l.ext + "，请用微云APP播放", 
            t.Event.stat("preview", {
                audioerror: "true"
            })), y) return wx.showToast({
                title: y,
                icon: "none",
                duration: 3e3
            }), void (g = null);
            wx.showLoading(), a.webapp({
                cmd: "DiskFileBatchDownload",
                data: {
                    download_type: 14,
                    file_list: [ {
                        file_id: d,
                        filename: p,
                        pdir_key: u
                    } ]
                }
            }).then(function(e) {
                var a = ((e || {}).file_list || [])[0] || {}, n = void 0;
                if (a.https_download_url) if (n = a.https_download_url.replace(/^http:\/\//, "https://"), 
                n = n.replace(/(fname=[^&]+)&*(.*)/, function(e, t, i) {
                    return ("" === i ? "" : i + "&") + t;
                }), _) {
                    var o = n.split(".").pop();
                    o = o ? o.toLowerCase() : "docx", i.log("[main page]: document download: " + n + ", type=" + o);
                    var s = function(e) {
                        e ? (i.log("document downloaded: " + e), wx.openDocument({
                            filePath: e,
                            fileType: o,
                            success: function(e) {
                                wx.hideLoading(), g = null, i.log("[directory page]: wx.openDocument success: " + e);
                            },
                            fail: function(e) {
                                wx.hideLoading(), wx.showToast({
                                    title: "文档打开失败",
                                    icon: "none",
                                    duration: 3e3
                                }), g = null, i.log("[directory page]: wx.openDocument fail: ", e);
                            }
                        }), t.Event.stat("preview", {
                            doc: "true"
                        })) : wx.showToast({
                            title: "文档预览失败",
                            icon: "none",
                            duration: 3e3
                        });
                    };
                    if (r.mapToLocal(l), void 0 !== l.original) return void s(l.original);
                    f && f.abort(), f = wx.downloadFile({
                        url: n,
                        success: function(e) {
                            var t = e.tempFilePath;
                            s(t), f = null;
                        },
                        fail: function(e) {
                            var t = void 0;
                            wx.hideLoading(), t = e.errMsg.search("exceed max file size") >= 0 ? "超过支持预览的文档大小（10M），请用微云APP查看" : "文档下载失败", 
                            wx.showToast({
                                title: t,
                                icon: "none",
                                duration: 3e3
                            }), g = null, f = null, i.log("[main page]: wx.downloadFile fail: " + (e.errMsg || e));
                        }
                    });
                } else w ? (x = "../audio/index?audio_src=" + encodeURIComponent(n) + "&audio_name=" + encodeURIComponent(p) + "&audio_size=" + m, 
                wx.hideLoading(), wx.navigateTo({
                    url: x
                }), g = null, i.log("[main page]: navigateTo audio page: " + x), t.Event.stat("preview", {
                    audio: "true"
                })) : v && (wx.hideLoading(), x = "../video/index?video_src=" + encodeURIComponent(n) + "&video_name=" + encodeURIComponent(p) + "&video_cover=" + encodeURIComponent((l.ext_info || {}).https_url + "/0") + "&long_time=" + l.long_time, 
                wx.navigateTo({
                    url: x
                }), g = null, i.log("[main page]: navigateTo video page: " + x), t.Event.stat("preview", {
                    video: "true"
                })); else wx.hideLoading(), wx.showToast({
                    title: "预览链接获取失败，请重试",
                    icon: "none",
                    duration: 3e3
                }), g = null, i.log("[main page]: https_download_url empty, key: " + d + ", name: " + p + ", size: " + m + ", pdir: " + u), 
                i.write();
            }, function() {
                wx.hideLoading(), wx.showToast({
                    title: "预览链接获取失败，请重试",
                    icon: "none",
                    duration: 3e3
                }), g = null, i.log("[main page]: https_download_url request fail, key: " + d + ", name: " + p + ", size: " + m + ", pdir: " + u), 
                i.write();
            });
        } else wx.showToast({
            title: "暂不支持在小程序中预览该类型文件",
            icon: "none",
            duration: 3e3
        }), g = null;
    },
    imageError: function(e) {
        i.log("[main page]: image error: " + e.detail.errMsg);
    },
    catchShareTap: function(e, o) {
        t.Event.stat("fenxianggeibier", {
            clickshareaction: "true"
        });
        var r = void 0, s = void 0, d = void 0, l = void 0, c = void 0;
        if (o) {
            var u = function(n) {
                r = o.type, s = o.pdir_key, d = o.dir_name || o.filename, "dir" === r ? (l = [ e ], 
                c = []) : (l = [], c = [ e ]), wx.showToast({
                    title: "创建分享页...",
                    icon: "loading",
                    duration: 1e4,
                    mask: !0
                }), a.webapp({
                    cmd: "WeiyunShareAdd",
                    data: {
                        pdir_key: s,
                        dir_key: l,
                        file_id: c,
                        share_name: d,
                        share_type: 0,
                        share_nickname: n.nickname,
                        share_logo: n.logo
                    }
                }).then(function(e) {
                    if (wx.hideToast(), e && e.share_key && e.share_name) {
                        var a = "../share/index?share_key=" + encodeURIComponent(e.share_key) + "&share_name=" + encodeURIComponent(e.share_name) + "&from=disk";
                        i.log("[main page]: navigate to share page: " + a), wx.navigateTo({
                            url: a,
                            success: function() {
                                t.Event.stat("fenxianggeibier", {
                                    jumptosharepage: "true"
                                });
                            }
                        });
                    } else wx.showToast({
                        title: "创建分享页失败，请稍候重试",
                        icon: "none",
                        duration: 3e3
                    });
                }, function() {
                    wx.hideToast(), wx.showToast({
                        title: "分享请求失败，请稍候重试",
                        icon: "none",
                        duration: 3e3
                    });
                }), t.Event.stat("share", {});
            };
            n.getWxUserInfo().then(function(e) {
                u(e);
            }, function() {
                u({});
            });
        }
    },
    catchMoveTap: function(e, i) {
        i && t.Event.stat("move", {});
    },
    catchRenameTap: function(e, i) {
        if (i) {
            var a = i.dir_name || i.filename;
            this.setData({
                renameKey: e,
                renameDisplay: !0,
                renameFocus: !0,
                renameName: a
            }), t.Event.stat("rename", {
                tap: "true"
            });
        }
    },
    catchDownloadTap: function(i, a) {
        var n = this;
        if (r.canSupportDownload(a)) if (o.isOutOfLimit(a.file_size)) wx.showModal({
            title: "",
            content: "文件过大，请使用微云客户端下载",
            success: function(e) {
                e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
            }
        }); else {
            var s = getCurrentPages(), d = s[s.length - 1];
            a.currentTab = this.data.currentTab;
            e.navData[n.data.currentTab];
            a.download_progress = 1, this.updateNode(a), r.downloadFile(a, d.name, function(e, t) {
                (e.data.progress - t.download_progress >= 2 || 100 === e.data.progress) && (t.download_progress = e.data.progress, 
                n.updateNode(t));
            }, function(e, t) {
                t.download_progress = 100, n.updateNode(t);
            }).then(function(e) {}, function(e) {
                a.download_progress = 0, n.updateNode(a), wx.showToast({
                    title: e.message,
                    icon: "none",
                    duration: 3e3
                });
            }), t.Event.stat("download", {});
        } else wx.showModal({
            title: "",
            content: "小程序内暂不支持下载该类型文件，请使用微云客户端下载。",
            success: function(e) {
                e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
            }
        });
    },
    catchRemoveTap: function(e, n) {
        var o = this, r = {};
        n && (r = "dir" === n.type ? {
            dir_list: [ {
                ppdir_key: n.ppdir_key,
                pdir_key: n.pdir_key,
                dir_key: n.dir_key,
                dir_name: n.dir_name
            } ]
        } : {
            file_list: [ {
                ppdir_key: n.ppdir_key,
                pdir_key: n.pdir_key,
                file_id: n.file_id,
                filename: n.filename
            } ]
        }, new Promise(function(e, t) {
            wx.showModal({
                content: "确定要删除" + ("dir" === n.type ? "文件夹" : "文件") + "吗？",
                success: function(t) {
                    e(t);
                },
                fail: function(e) {
                    t(e);
                }
            });
        }).then(function(e) {
            e.cancel || (wx.showToast({
                title: "正在删除...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), a.webapp({
                cmd: "DiskDirFileBatchDeleteEx",
                data: r
            }).then(function() {
                wx.hideToast(), o.loader().then(function() {
                    o.render();
                }, function(e) {
                    i.log("[main page]: catchRemoveTap reload fail"), i.log("more info: " + JSON.stringify(e)), 
                    i.write();
                });
            }, function() {
                wx.hideToast(), wx.showToast({
                    title: "删除请求失败，请稍候重试",
                    icon: "none",
                    duration: 3e3
                });
            }), t.Event.stat("remove", {
                confirm: "true"
            }));
        }).catch(function() {}), t.Event.stat("remove", {
            tap: "true"
        }));
    },
    bindReNameInput: function(e) {
        this.setData({
            renameName: e.detail.value
        });
    },
    bindReNameConfirm: function(i) {
        var n = this, r = ((i.currentTarget || {}).dataset || {}).key, s = o.getStore(r), d = e.navData[this.data.currentTab], l = void 0, c = void 0, u = {}, g = void 0, f = void 0;
        if (this.setData({
            renameDisplay: !1
        }), s && this.data.renameName && this.data.renameName !== s.dir_name) {
            if ("dir" === s.type) for (c = "DiskDirAttrModify", u = {
                ppdir_key: s.ppdir_key || "",
                pdir_key: s.pdir_key || "",
                dir_key: s.dir_key,
                dst_dir_name: this.data.renameName,
                src_dir_name: s.dir_name
            }, g = 0, f = d.dirList.length; g < f && (l = d.dirList[g]).dir_key !== s.dir_key; g++) ; else for (c = "DiskFileBatchRename", 
            u = {
                ppdir_key: s.ppdir_key || "",
                pdir_key: s.pdir_key || "",
                file_list: [ {
                    file_id: s.file_id,
                    filename: this.data.renameName,
                    src_filename: s.filename
                } ]
            }, g = 0, f = d.fileList.length; g < f && (l = d.fileList[g]).file_id !== s.file_id; g++) ;
            wx.showToast({
                title: "重命名文件...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), a.webapp({
                cmd: c,
                data: u
            }).then(function() {
                wx.hideToast(), "dir" === s.type ? (l.dir_name = n.data.renameName, s.dir_name = n.data.renameName) : (l.filename = n.data.renameName, 
                s.filename = n.data.renameName), o.setStore(s), n.setData({
                    renameName: ""
                }), n.render();
            }, function() {
                wx.hideToast(), wx.showToast({
                    title: "重命名请求失败，请稍候重试",
                    icon: "none",
                    duration: 3e3
                }), n.setData({
                    renameName: ""
                });
            }), t.Event.stat("rename", {
                confirm: "true"
            });
        }
    },
    bindReNameMaskTap: function() {
        this.hideRename();
    },
    hideRename: function() {
        this.setData({
            renameKey: "",
            renameDisplay: !1,
            renameFocus: !1,
            renameName: ""
        });
    },
    onStatusBarInited: function(e) {
        this.setData({
            statusBarHeight: e.detail.height || 64
        });
    },
    data: {
        statusBarHeight: 0,
        finished: !1,
        loading: !1,
        tips: "",
        pageAnchor: 0,
        currentTab: 0,
        currentFilter: 0,
        pwdDisplay: !0,
        navList: [ {
            unique: "nav_0",
            txt: "全部"
        }, {
            unique: "nav_1",
            txt: "文档"
        }, {
            unique: "nav_2",
            txt: "照片"
        }, {
            unique: "nav_3",
            txt: "视频"
        }, {
            unique: "nav_4",
            txt: "音乐"
        } ],
        filterDisplay: !1,
        filterList: [ {
            unique: "filter_0",
            text: "全部"
        }, {
            unique: "filter_1",
            text: "DOC"
        }, {
            unique: "filter_2",
            text: "XLS"
        }, {
            unique: "filter_3",
            text: "PPT"
        }, {
            unique: "filter_4",
            text: "PDF"
        } ],
        dirList: [],
        fileList: [],
        renameKey: "",
        renameDisplay: !1,
        renameFocus: !1,
        renameName: "",
        fileBlankDisplay: !0,
        fileBlankData: {
            img: "../../img/status/icon-noall.png",
            title: "文件加载中...",
            subTitle: ""
        },
        isQQ: getApp().global.isQQ
    }
});