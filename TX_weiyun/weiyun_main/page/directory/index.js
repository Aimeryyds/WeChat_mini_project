var e = (getApp() || {}).global, i = require("../../external/mta_analysis.js"), t = require("../../common/md.js"), a = require("../../common/request.js"), n = require("../../common/user.js"), o = require("../../common/file.js"), r = require("../../common/download_manager.js"), d = {
    img: "../../img/status/icon-noall.png",
    title: "该目录下没有文件",
    subTitle: ""
}, s = (Math.pow(2, 20), 20 * Math.pow(2, 20)), l = void 0, c = void 0, u = !1;

Page({
    onLoad: function(e) {
        t.log("[directory page]: index onLoad"), i.Page.init();
        var a = {
            ppdir_key: decodeURIComponent((e || {}).ppdir_key || ""),
            pdir_key: decodeURIComponent((e || {}).pdir_key || ""),
            dir_key: decodeURIComponent((e || {}).dir_key || ""),
            dir_name: decodeURIComponent((e || {}).dir_name || "")
        };
        a.dir_key && a.dir_name && this.setData({
            title: a.dir_name,
            currentDirKey: a.dir_key
        });
    },
    onShow: function() {
        t.log("[directory page]: index onShow");
    },
    onReady: function() {
        t.log("[directory page]: index onReady"), this.init();
    },
    onHide: function() {
        this.hideRename(), t.log("[directory page]: index onHide"), t.write();
    },
    onUnload: function() {
        this.hideRename(), t.log("[directory page]: index onUnload");
    },
    onScroll: function(e) {
        e.detail.scrollHeight - e.detail.scrollTop < 1200 && this.loadMore();
    },
    init: function(i) {
        var n = this;
        return t.log("[directory page]: init"), void 0 === i && (i = !!e.navData[this.data.currentDirKey]), 
        i || wx.showLoading(), new Promise(function(n, o) {
            if (!Object.keys(e.userInfo).length) return a.webapp({
                cmd: "DiskUserInfoGet",
                data: {
                    show_qqdisk_migrate: !0,
                    is_get_qzone_flag: !0,
                    is_get_upload_flow_flag: !0,
                    is_get_weiyun_flag: !0
                }
            }).then(function(i) {
                t.log("[directory page]: DiskUserInfoGet success"), e.userInfo = i, n(e.userInfo);
            }).catch(function(e) {
                i || 900 === e.code || wx.showToast({
                    title: "数据加载失败，请退出重试",
                    icon: "none"
                }), o(e);
            });
            n(e.userInfo);
        }).then(function() {
            return i && n.render({}), n.loader({
                silence: i
            }).then(function() {
                n.render({});
            });
        }).then(function() {
            wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), t.log("[directory page]: init fail"), t.log("more info: " + JSON.stringify(e)), 
            t.write();
        });
    },
    loadMore: function() {
        var e = this;
        if (!this.data.finished && !this.data.loading) {
            t.log("[directory page]: onLoadMore");
            var i = this.data.currentPage;
            if (i >= 10) return this.data.tips || this.setData({
                tips: "当前列表长度超过限制，请用微云APP查看更多文件"
            }), void t.log("[main page]: onloadmore pageNum limit, pageNum: " + i);
            this.data.tips && this.setData({
                tips: ""
            }), this.setData({
                loading: !0
            }), this.loader({
                key: this.data.currentDirKey,
                start: 50 * (i + 1),
                pageNum: i + 1,
                silence: !0
            }).then(function() {
                e.setData({
                    loading: !1
                }), i++, e.setData({
                    currentPage: i
                }), e.render({
                    more: !0,
                    pageNum: i
                });
            }, function() {
                e.setData({
                    loading: !1
                }), t.log("[directory page]: loadMore loader fail");
            });
        }
    },
    loader: function() {
        var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.key || this.data.currentDirKey, r = n.start || 0, d = n.count || 50, s = n.pageNum || 0;
        return t.log("[directory page]: loader request, current dirKey: " + this.data.currentDirKey + " start: " + r + ", count: " + d + ", pageNum: " + s), 
        new Promise(function(l, c) {
            !n.silence && wx.showLoading(), a.webapp({
                cmd: "DiskDirBatchList",
                data: {
                    dir_list: [ {
                        get_type: 0,
                        start: r,
                        count: d,
                        sort_field: 1,
                        reverse_order: !0,
                        get_abstract_url: !0,
                        dir_key: o,
                        dir_name: ""
                    } ]
                }
            }).then(function(t) {
                wx.hideLoading();
                var a = i.handleData(t);
                i.setData({
                    finished: a.finished
                }), s ? e.navData["new_" + o] = a : e.navData[o] = a, l(a);
            }, function(e) {
                wx.hideLoading(), t.log("[directory page]: get nav[" + o + "] data fail"), t.log("more info: " + JSON.stringify(e)), 
                t.write(), !n.silence && wx.showToast({
                    title: "数据加载失败",
                    icon: "none",
                    duration: 3e3
                }), c(e);
            });
        });
    },
    handleData: function(i) {
        var t = void 0, a = o.getStore(this.data.currentDirKey), n = [], r = [], d = void 0, s = void 0, l = void 0, c = void 0, u = void 0;
        return t = (i.dir_list || [])[0] || {}, c = a.pdir_key || e.userInfo.root_dir_key, 
        l = a.dir_key || e.userInfo.main_dir_key, n = o.format(t.dir_list || [], "dir", l, c), 
        r = o.format(t.file_list || [], "file", l, c), d = t.total_dir_count, s = t.total_file_count, 
        u = t.finish_flag, {
            dirList: n,
            fileList: r,
            dirLength: d,
            fileLength: s,
            finished: u
        };
    },
    updateNode: function(i) {
        for (var t = this, a = e.navData[this.data.currentDirKey], n = !1, o = 0, r = a.fileList.length; o < r; o++) {
            var d = a.fileList[o];
            if (d.file_id === i.file_id) {
                d.download_progress = i.download_progress, n = !0;
                break;
            }
        }
        n && !u && (u = !0, setTimeout(function() {
            u = !1, t.setData(a);
        }, 200));
    },
    render: function() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = i.extend || {}, n = e.navData[this.data.currentDirKey] || {}, o = {};
        t.log("[directory page]: render, current dirKey: " + this.data.currentDirKey + ", more: " + !!i.more), 
        i.more && (o = e.navData["new_" + this.data.currentDirKey] || {}, n = {
            dirList: n.dirList.concat(o.dirList || []),
            fileList: n.fileList.concat(o.fileList || []),
            dirLength: n.dirLength,
            fileLength: n.fileLength
        }, e.navData[this.data.currentDirKey] = n), n.dirLength + n.fileLength === 0 && (a.fileBlankData = d), 
        this.setData(Object.assign({
            height: wx.getSystemInfoSync().windowHeight - (this.data.statusBarHeight || 64)
        }, n, a));
    },
    onStatusBack: function() {
        var i = this, a = o.getStore(this.data.currentDirKey), n = void 0, r = void 0;
        a && a.pdir_key && a.pdir_key !== e.userInfo.main_dir_key ? (n = o.getStore(a.pdir_key), 
        (r = !!e.navData[a.pdir_key]) ? this.render({
            extend: {
                title: n && n.dir_name,
                currentPage: 0,
                currentDirKey: a.pdir_key,
                scrollTop: 0,
                tips: ""
            }
        }) : this.setData({
            title: n && n.dir_name,
            currentPage: 0,
            currentDirKey: a.pdir_key,
            tips: ""
        }), this.loader({
            silence: r
        }).then(function() {
            i.render({
                extend: {
                    scrollTop: 0
                }
            });
        }, function() {
            t.log("[directory page]: bindBreadcrumbTap loader fail");
        })) : wx.navigateBack({
            delta: 1
        });
    },
    catchOpTap: function(e) {
        var t = this, a = ((e.currentTarget || {}).dataset || {}).key, n = o.getStore(a);
        if (n) {
            var r = [ "分享", "下载", "重命名", "删除" ];
            this.data.isQQ && "dir" !== n.type || r.splice(1, 1), new Promise(function(e, i) {
                wx.showActionSheet({
                    itemList: r,
                    success: function(i) {
                        e(i);
                    },
                    fail: function(e) {
                        i(e);
                    }
                });
            }).then(function(e) {
                switch (i.Event.stat("fenxianggeibier", {
                    showactionsheet: "true"
                }), e.tapIndex) {
                  case 0:
                    t.catchShareTap(a, n);
                    break;

                  case 1:
                    4 === r.length ? t.catchDownloadTap(a, n) : t.catchRenameTap(a, n);
                    break;

                  case 2:
                    4 === r.length ? t.catchRenameTap(a, n) : t.catchRemoveTap(a, n);
                    break;

                  case 3:
                    t.catchRemoveTap(a, n);
                }
            }).catch(function() {});
        }
    },
    bindItemTap: function(n) {
        var d = this, u = ((n.currentTarget || {}).dataset || {}).key, g = o.getStore(u), p = void 0, f = void 0, h = void 0, m = void 0, _ = void 0, v = void 0, y = void 0, w = void 0, x = void 0, k = void 0;
        if (g && l !== u) if (l = u, p = g.type, f = g.pdir_key, h = g.dir_name || g.filename, 
        m = g.file_size, _ = g.is_image, v = g.is_doc, y = g.is_video, w = g.is_audio, "dir" === p) (k = !!e.navData[u]) ? this.render({
            extend: {
                title: h,
                currentPage: 0,
                currentDirKey: u,
                scrollTop: 0,
                tips: ""
            }
        }) : this.setData({
            title: h,
            currentPage: 0,
            currentDirKey: u,
            tips: ""
        }), this.loader({
            silence: k
        }).then(function() {
            d.render({
                extend: {
                    scrollTop: 0
                }
            });
        }, function() {
            t.log("[directory page]: bindBreadcrumbTap loader fail");
        }), l = null, i.Event.stat("preview", {
            dir: "true"
        }); else if (_) e.galleryData = {
            list: o.filter(e.navData[this.data.currentDirKey].fileList, "image")
        }, t.log("[directory page]: preview image navigate to gallery, file_id: " + g.file_id), 
        wx.navigateTo({
            url: "../gallery/gallery?image=" + g.file_id,
            fail: function(e) {
                t.log("[directory page]: image navigate: " + e.errMsg), t.write();
            }
        }), l = null, i.Event.stat("preview", {
            img: "true"
        }); else if (y || w || v) {
            var D = void 0;
            if (y && !o.isPreviewVideo(g.ext) && (D = "小程序暂不支持" + g.ext + "视频文件，请用微云APP播放", 
            i.Event.stat("preview", {
                videoerror: "true"
            })), w && m > s && (D = "防止内存占用，大于20M的音乐请用微云APP播放", i.Event.stat("preview", {
                audiolimit: "true"
            })), v && "txt" === g.ext && (D = "小程序暂不支持txt文件预览，请用微云APP查看", i.Event.stat("preview", {
                docerror: "true"
            })), w && "mp3" !== g.ext && "m4a" !== g.ext && "aac" !== g.ext && "wav" !== g.ext && (D = "小程序暂不支持" + g.ext + "，请用微云APP播放", 
            i.Event.stat("preview", {
                audioerror: "true"
            })), D) return wx.showToast({
                title: D,
                icon: "none",
                duration: 3e3
            }), void (l = null);
            wx.showLoading(), a.webapp({
                cmd: "DiskFileBatchDownload",
                data: {
                    download_type: 14,
                    file_list: [ {
                        file_id: u,
                        filename: h,
                        pdir_key: f
                    } ]
                }
            }).then(function(e) {
                var a = ((e || {}).file_list || [])[0] || {}, n = void 0;
                if (a.https_download_url) if (n = a.https_download_url.replace(/^http:\/\//, "https://"), 
                n = n.replace(/(fname=[^&]+)&*(.*)/, function(e, i, t) {
                    return ("" === t ? "" : t + "&") + i;
                }), v) {
                    var o = n.split(".").pop();
                    o = o ? o.toLowerCase() : "docx", t.log("[directory page]: document download: " + n);
                    var d = function(e) {
                        e ? (wx.openDocument({
                            filePath: e,
                            fileType: o,
                            success: function(e) {
                                wx.hideLoading(), l = null, t.log("[directory page]: wx.openDocument success: " + e);
                            },
                            fail: function(e) {
                                wx.hideLoading(), wx.showToast({
                                    title: "文档打开失败",
                                    icon: "none",
                                    duration: 3e3
                                }), l = null, t.log("[directory page]: wx.openDocument fail: " + e);
                            }
                        }), i.Event.stat("preview", {
                            doc: "true"
                        })) : wx.showToast({
                            title: "文档预览失败",
                            icon: "none",
                            duration: 3e3
                        });
                    };
                    if (r.mapToLocal(g), void 0 !== g.original) return void d(g.original);
                    c && c.abort(), c = wx.downloadFile({
                        url: n,
                        success: function(e) {
                            var i = e.tempFilePath;
                            d(i), c = null;
                        },
                        fail: function(e) {
                            var i = void 0;
                            wx.hideLoading(), i = e.errMsg.search("exceed max file size") >= 0 ? "超过支持预览的文档大小（10M），请用微云APP查看" : "文档下载失败", 
                            wx.showToast({
                                title: i,
                                icon: "none",
                                duration: 3e3
                            }), l = null, c = null, t.log("[directory page]: wx.downloadFile fail: " + (e.errMsg || e));
                        }
                    });
                } else w ? (x = "../audio/index?audio_src=" + encodeURIComponent(n) + "&audio_name=" + encodeURIComponent(h) + "&audio_size=" + m, 
                wx.hideLoading(), wx.navigateTo({
                    url: x
                }), l = null, t.log("[directory page]: navigateTo audio page: " + x), i.Event.stat("preview", {
                    audio: "true"
                })) : y && (wx.hideLoading(), x = "../video/index?video_src=" + encodeURIComponent(n) + "&video_name=" + encodeURIComponent(h) + "&video_cover=" + encodeURIComponent((g.ext_info || {}).https_url + "/0") + "&long_time=" + g.long_time, 
                wx.navigateTo({
                    url: x
                }), l = null, t.log("[directory page]: navigateTo video page: " + x), i.Event.stat("preview", {
                    video: "true"
                })); else wx.hideLoading(), wx.showToast({
                    title: "预览链接获取失败，请重试",
                    icon: "none",
                    duration: 3e3
                }), l = null, t.log("[directory page]: https_download_url empty, key: " + u + ", name: " + h + ", size: " + m + ", pdir: " + f), 
                t.write();
            }, function() {
                wx.hideLoading(), wx.showToast({
                    title: "预览链接获取失败，请重试",
                    icon: "none",
                    duration: 3e3
                }), l = null, t.log("[directory page]: https_download_url request fail, key: " + u + ", name: " + h + ", size: " + m + ", pdir: " + f), 
                t.write();
            });
        } else wx.showToast({
            title: "暂不支持在小程序中预览该类型文件",
            icon: "none",
            duration: 3e3
        }), l = null;
    },
    imageError: function(e) {
        t.log("[directory page]: image error: " + e.detail.errMsg);
    },
    catchShareTap: function(e, o) {
        i.Event.stat("fenxianggeibier", {
            clickshareaction: "true"
        });
        var r = void 0, d = void 0, s = void 0, l = void 0, c = void 0;
        if (o) {
            var u = function(n) {
                r = o.type, d = o.pdir_key, s = o.dir_name || o.filename, "dir" === r ? (l = [ e ], 
                c = []) : (l = [], c = [ e ]), wx.showToast({
                    title: "创建分享页...",
                    icon: "loading",
                    duration: 1e4,
                    mask: !0
                }), a.webapp({
                    cmd: "WeiyunShareAdd",
                    data: {
                        pdir_key: d,
                        dir_key: l,
                        file_id: c,
                        share_name: s,
                        share_type: 0,
                        share_nickname: n.nickName,
                        share_logo: n.avatarUrl
                    }
                }).then(function(e) {
                    if (wx.hideToast(), e && e.share_key && e.share_name) {
                        var a = "../share/index?share_key=" + encodeURIComponent(e.share_key) + "&share_name=" + encodeURIComponent(e.share_name) + "&from=disk";
                        t.log("[directory page]: navigate to share page: " + a), wx.navigateTo({
                            url: a,
                            success: function() {
                                i.Event.stat("fenxianggeibier", {
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
                }), i.Event.stat("share", {});
            };
            n.getWxUserInfo().then(function(e) {
                u(e);
            }, function() {
                u({});
            });
        }
    },
    catchDownloadTap: function(e, t) {
        var a = this;
        if (r.canSupportDownload(t)) if (o.isOutOfLimit(t.file_size)) wx.showModal({
            title: "",
            content: "文件过大，请使用微云客户端下载",
            success: function(e) {
                e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
            }
        }); else {
            var n = getCurrentPages(), d = n[n.length - 1];
            t.download_progress = 1, this.updateNode(t), r.downloadFile(t, d.name, function(e, i) {
                (e.data.progress - i.download_progress >= 2 || 100 === e.data.progress) && (i.download_progress = e.data.progress, 
                a.updateNode(i));
            }, function(e, i) {
                i.download_progress = 100, a.updateNode(i);
            }).then(function(e) {}, function(e) {
                t.download_progress = 0, a.updateNode(t), wx.showToast({
                    title: e.message,
                    icon: "none",
                    duration: 3e3
                });
            }), i.Event.stat("download", {});
        } else wx.showModal({
            title: "",
            content: "小程序内暂不支持下载该类型文件，请使用微云客户端下载。",
            success: function(e) {
                e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
            }
        });
    },
    catchMoveTap: function(e, t) {
        t && i.Event.stat("move", {});
    },
    catchRenameTap: function(e, t) {
        var a = void 0;
        t && (a = t.dir_name || t.filename, this.setData({
            renameKey: e,
            renameDisplay: !0,
            renameFocus: !0,
            renameName: a
        }), i.Event.stat("rename", {
            tap: "true"
        }));
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
        }, new Promise(function(e, i) {
            wx.showModal({
                content: "确定要删除" + ("dir" === n.type ? "文件夹" : "文件") + "吗？",
                success: function(i) {
                    e(i);
                },
                fail: function(e) {
                    i(e);
                }
            });
        }).then(function(e) {
            e.cancel || (wx.showLoading(), a.webapp({
                cmd: "DiskDirFileBatchDeleteEx",
                data: r
            }).then(function() {
                wx.hideLoading(), o.loader().then(function() {
                    o.render();
                }, function() {
                    t.log("[directory page]: catchRemoveTap reload fail");
                });
            }, function() {
                wx.hideLoading(), wx.showToast({
                    title: "删除请求失败，请稍候重试",
                    icon: "none",
                    duration: 3e3
                });
            }), i.Event.stat("remove", {
                confirm: "true"
            }));
        }).catch(function() {}), i.Event.stat("remove", {
            tap: "true"
        }));
    },
    bindReNameInput: function(e) {
        this.setData({
            renameName: e.detail.value
        });
    },
    bindReNameConfirm: function(t) {
        var n = this, r = ((t.currentTarget || {}).dataset || {}).key, d = o.getStore(r), s = e.navData[this.data.currentDirKey], l = void 0, c = void 0, u = {}, g = void 0, p = void 0;
        if (this.setData({
            renameDisplay: !1
        }), d && this.data.renameName && this.data.renameName !== d.dir_name) {
            if ("dir" === d.type) for (c = "DiskDirAttrModify", u = {
                ppdir_key: d.ppdir_key || "",
                pdir_key: d.pdir_key || "",
                dir_key: d.dir_key,
                dst_dir_name: this.data.renameName,
                src_dir_name: d.dir_name
            }, g = 0, p = s.dirList.length; g < p && (l = s.dirList[g]).dir_key !== d.dir_key; g++) ; else for (c = "DiskFileBatchRename", 
            u = {
                ppdir_key: d.ppdir_key || "",
                pdir_key: d.pdir_key || "",
                file_list: [ {
                    file_id: d.file_id,
                    filename: this.data.renameName,
                    src_filename: d.filename
                } ]
            }, g = 0, p = s.fileList.length; g < p && (l = s.fileList[g]).file_id !== d.file_id; g++) ;
            wx.showToast({
                title: "重命名文件...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            }), a.webapp({
                cmd: c,
                data: u
            }).then(function() {
                wx.hideToast(), "dir" === d.type ? (l.dir_name = n.data.renameName, d.dir_name = n.data.renameName) : (l.filename = n.data.renameName, 
                d.filename = n.data.renameName), o.setStore(d), n.setData({
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
            }), i.Event.stat("rename", {
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
        title: "",
        statusBarHeight: 0,
        loading: !1,
        finished: !1,
        tips: "",
        currentPage: 0,
        currentDirKey: "",
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