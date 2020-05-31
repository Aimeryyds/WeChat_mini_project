function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e() {
    var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], s = D, a = "/" === this.path ? 1 : 0;
    return e && (this.data.isLoading = !0), 1 !== this.page && this.setData({
        showTips: !0
    }), (0, l.getShareData)(this.surl, this.path, a, this.page, s, this.pwd, b.listOrder).then(function(e) {
        var s = e.data;
        return i.call(t, s);
    }).catch(function(e) {
        r.call(t);
    });
}

function i(t) {
    var e = this, i = this.data, s = i.list, o = void 0 === s ? [] : s, l = (i.hasMore, 
    i.canSelected), d = void 0 !== l && l, f = [], g = t.errno;
    if (0 !== g && r.call(this, t.errtype), t = t.data, f = (0, c.dataTransform)(t.list), 
    "/" === this.path && 1 === this.page && !1 !== g && a.call(this, t), f.map(function(t, e) {
        var i = f[e];
        return i.isdir *= 1, i.category *= 1, i;
    }), f.length > 0 && !d) {
        var v = this.getFsid(f), p = (b.shareInfo.fsidlist || []).concat(v);
        b.shareInfo.fsidlist = p;
    }
    var w = (0, u.getUk)(), S = w === t.uk, x = n.call(this, S, this.path, t);
    this.setData({
        appParameter: this.data.baseAppParameter + "&uk=" + w + "&path=" + encodeURIComponent(x)
    });
    var T = f.some(function(t) {
        return !!t.isdir;
    }), _ = o = this.page < 2 ? f : o.concat(f), k = Object.assign({}, {
        hasMore: t.has_more,
        list: (0, y.sortFileList)(b.listOrder, o),
        isLoading: !1,
        showTips: !1,
        hasDir: T
    }, b.shareInfo);
    setTimeout(function() {
        e.setData(h({}, k));
    }, 500), this.autoTrans(), b.preShareData.list = _, this.page++, m.selectedFns.setSelectList.call(this, _);
}

function s(t) {
    var e = t.sinfo, i = t.uname;
    if (e) {
        var s = e.cover_info, a = void 0 === s ? {} : s, r = e.title, n = void 0 === r ? "网盘故事" : r, o = e.title_date, h = void 0 === o ? "神秘时间" : o;
        this.setData({
            coverInfo: a,
            storyTitle: n,
            storyTime: h,
            storySharePeople: i || "网盘用户"
        });
    }
}

function a(t) {
    var e = (0, c.expiredTransform)(t.expiredType, t.link_ctime);
    "invalid" === e && r.call(this, 10);
    var i = wx.getStorageSync("uk") === t.uk, s = t.list && t.list[0] ? t.list[0].server_filename : "", a = t.sinfo && t.sinfo.cover_info.url || "";
    t.fileNums > 1 && "" !== s ? s += "等" + t.fileNums + "个文件" : "" !== s && s || (s = "网盘分享"), 
    this.data.isStory && (s = t.sinfo.title ? "来看看我在【" + t.sinfo.title + "】的故事吧" : "来看看我的网盘故事吧");
    var n = i ? "我" : t.uname, o = {
        uname: (0, f.setEllipsis)(n, 18, ".."),
        shareName: (0, f.setEllipsis)(t.uname, 18, ".."),
        shareid: t.shareid,
        expired: e,
        uk: t.uk,
        surl: this.surl,
        pwd: this.pwd,
        btn: {
            text: "",
            resTxt: "",
            saveState: 0,
            saveBtn: !0,
            owner: i
        },
        fileNums: t.fileNums,
        fileTitle: s,
        avatar: t.user.avatar,
        storyImg: a
    };
    b.shareInfo = o, this.queryTransTask();
}

function r(t) {
    var e = g.shareListMsg[t] || "分享的文件不存在";
    0 === t && wx.log.sharepage.delShare.send(), (3 === t || "mis_3" === t) && wx.log.sharepage.rejectShare.send(), 
    10 === t && wx.log.sharepage.expired.send(), this.setData({
        invalid: !0,
        errTxt: e
    });
}

function n(t, e, i) {
    var s = "/" === e, a = "/";
    if (t) if (s) {
        var r = i && i.list, n = (r && r[0]).path;
        n && (a = n = n.slice(0, n.lastIndexOf("/")));
    } else a = e; else a = s ? "/我的资源" : e.includes("我的资源") ? e : "/我的资源" + e;
    return a;
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, h = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
}, l = require("../../../netdiisk_requestapi/getShareData.js"), c = require("../../../netdisk_utils/transform.js"), u = require("../../../netdisk_utils/common.js"), d = (require("../../../netdisk_templates/empty_list/emptyList.js"), 
require("../../../netdiisk_requestapi/transferFiles.js")), f = require("../../../netdisk_utils/string.js"), g = require("./msg.js"), v = require("../../../netdisk_utils/setUserCenterInfo.js"), p = require("../../../netdiisk_requestapi/fileOper.js"), m = require("./List.js"), y = require("../../../netdisk_utils/sortFileList.js"), w = require("../../../netdiisk_requestapi/getInterim.js"), S = require("../../../netdisk_utils/activity.js"), x = t(require("miniprogram-computed")), T = require("../../../netdisk_utils/calculate"), _ = t(require("../../../netdisk_utils/guideMemberMixin")), k = t(require("../../../netdisk_utils/shareGuideMemberMixin")), b = getApp().globalData, D = wx.ENV.CONF.SHARE_FILES_LOAD_LIMITED_COUNT, A = !0, F = {
    0: "请稍候...",
    1: "尊贵的会员，正在为你转存…",
    2: "尊贵的超级会员，正在为你转存…"
};

Component({
    behaviors: [ x.default, _.default, k.default ],
    properties: {
        showLoading: {
            type: Boolean,
            value: !1
        },
        isStory: {
            type: Boolean,
            value: !1
        },
        shareUrlInfo: {
            type: Object
        },
        hasLogin: {
            type: Boolean,
            value: !0
        },
        newErr: {
            type: Object
        }
    },
    data: h({
        isLoading: !0,
        hasMore: !0,
        list: [],
        isGuideUser: "",
        systemInfo: {},
        invalid: !1,
        errTxt: "",
        showTips: !1,
        imagetype: -1,
        btn: {},
        coverInfo: {},
        storyTitle: "",
        storyTime: "",
        storySharePeople: ""
    }, m.selectedData, {
        fromNa: 0,
        shareAppParameter: "",
        baseAppParameter: "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&origin=1",
        appParameter: "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&origin=1",
        successActivity: {},
        failActivity: {},
        failBanner: {},
        feedActivities: [],
        listDataReady: !1,
        activityDataReady: !1,
        closeFeedActivities: !1,
        isRoot: !0,
        hasDir: !1,
        remindMap: {
            todo: {
                txt: "提醒TA",
                bgColor: "#E1F4FF",
                txtColor: "#06A7FF"
            },
            done: {
                txt: "已提醒分享者",
                bgColor: "#F8F8F9",
                txtColor: "#A9ACB1"
            }
        },
        remindStatus: "none"
    }),
    created: function() {
        A = !0;
    },
    attached: function() {
        var t = {
            height: b.statusBarHeight + b.totalHeight,
            fromNa: b.fromNA
        };
        Object.assign(t, b.shareInfo), this.setData(t), this.page = 1, this.flag = !0, this.taskFlag = !0, 
        this.getActivityInfo();
    },
    ready: function() {
        this.setData({
            systemInfo: b.systemInfo,
            isGuideUser: b.isGuideUser
        });
    },
    computed: {
        scrollListHeight: function(t) {
            var e = t.systemInfo, i = +e.ratio || 2, s = b.navHeight * i, a = t.canSelected ? 112 : 152, r = t.canSelected ? 112 : 0;
            return e.windowHeightRpx - r - a - s;
        },
        showActivityFeed: function(t) {
            var e = t.list, i = e.length > 0 && e.length <= 3, s = (0, T.formatTime)(new Date()).substring(0, 10) !== wx.getStorageSync("lastActivityFeed"), a = !!t.feedActivities.filter(function(t) {
                return t.isValid;
            }).length, r = t.isRoot && !t.canSelected && !t.closeFeedActivities && i && s && a;
            return r && A && (wx.log.activity.shareFeedShow.send(), A = !1), r;
        }
    },
    methods: h({
        loadMore: function() {
            !this.data.isLoading && this.data.hasMore && e.call(this, !0);
        },
        setShareAppParameter: function(t) {
            var e = "bdnetdisk://n/action.SAVE?m_n_v=8.3.0&shareid=" + t.shareid + "&uk=" + t.uk + "&path=/&username=" + t.uname + "&origin=1";
            this.setData({
                shareAppParameter: e
            });
        },
        loadList: function(t, e, a, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, h = arguments[5];
            this.setShareAppParameter(t.data), this.resetData(), wx.toasthide();
            var l = t.data.sinfo;
            this.surl = e, this.path = a, this.pwd = o, this.transfer = n, this.page = 1, this.data.isStory && l && (this.storyTitle = l.title, 
            this.storyTime = l.title_date, this.storyUname = l.uname, b.storyInfo = {
                storyTitle: this.storyTitle,
                storyTime: this.storyTime,
                storyUname: this.storyUname
            }, s.call(this, t.data)), this.setData({
                imagetype: h - 0,
                vipType: ""
            }), !1 === t.errno && r.call(this);
            var c = "/" === this.path;
            this.setData({
                listDataReady: !0,
                isRoot: c
            }), i.call(this, t), this.checkActivityShowLog();
        },
        formSubmit: function(t) {
            return (0, u.generateFormId)(t);
        },
        saveToMe: function() {
            var t = this;
            if (this.checkLogin()) if (this.queryTime = 0, this.setData({
                btn: h({}, this.data.btn, {
                    saveBtn: !0
                })
            }), wx.log.sharepage.transfer.send(), this.data.isStory && wx.log.sharepage.storySave.send(), 
            this.transfer && wx.log.sharepage.transNormal.send(), this.data.isGuideUser) {
                wx.setStorageSync(this.surl, "auto"), wx.log.sharepage.transGuider.send();
                var e = "to=share&surl=" + this.surl + "&transfer=true";
                b.transfer = !0, wx.safeNavigateTo("/pages/netdisk_bindAccount/bindAccount?" + e);
            } else {
                if (!this.flag) return;
                if (b.shareInfo.fsidlist.length <= 0) return void wx.wetoast({
                    content: "请选择转存文件",
                    duration: 3e3
                });
                this.flag = !1;
                var i = b.userCenterInfo && b.userCenterInfo.memberType;
                wx.wetoast({
                    content: F[i],
                    loading: !i,
                    duration: !0,
                    memberType: i
                });
                var s = this.newFileName(this.storyTitle, this.storyTime, this.storyUname), a = this.data.isStory;
                this.paths = a ? "/我的资源/" + s : "/我的资源", a && !this.data.btn.saveState ? p.fileOper.createDir(this.paths).then(function(e) {
                    var i = e.data;
                    t.transFiles(i.path);
                }).catch(function() {
                    wx.wetoast({
                        content: "保存文件失败",
                        duration: 3e3
                    });
                }) : this.transFiles(this.paths);
            }
        },
        transFiles: function(t) {
            var e = this, i = wx.getStorageSync(this.surl), s = this.data.isStory ? 0 : 1;
            (0, d.transferFiles)(t, s).then(function(t) {
                var s = t.data;
                e.transferSucCallback(s), "auto" === i && wx.removeStorageSync(e.surl);
            }, function(t) {
                e.transferFailCallback(t);
            });
        },
        handleErrno: function(t) {
            var e = t.info, i = null;
            if (e && e.length > 0) for (var s = 0; s < e.length; s++) {
                var a = e[s].errno;
                if (0 !== a) {
                    i = a;
                    break;
                }
            }
            return i;
        },
        queryTransTask: function() {
            var t = this.handleTaskStorage("get"), e = t && t.expired, i = t && t.taskid, s = e && new Date().getTime() > e;
            s && this.handleTaskStorage("remove"), !s && i && this.queryTransferRequest(i);
        },
        queryTransferRequest: function(t) {
            var e = this;
            !1 !== this.taskFlag && (this.taskFlag = !1, (0, d.queryTransfer)(t).then(function(t) {
                var i = t.data;
                e.handleTransTask(i), e.taskFlag = !0;
            }));
        },
        handleTransTask: function(t) {
            if (t) {
                var e = "number" != typeof this.pollNum && 2 === this.data.btn.saveState;
                if (0 === t.errno && 0 === t.task_errno) this.handleMsg(t.status), "running" === t.status && t.progress && e && wx.wetoast({
                    content: "已保存" + t.progress + "%",
                    duration: 1500
                }); else {
                    wx.log.send({
                        value: "外链分享查询转存状态",
                        type: "wx_sharepage_transfer_query_fail_" + t.errno + "_" + t.task_errno
                    });
                    var i = t.errno || t.task_errno;
                    this.handleMsg("fail", "", i);
                }
                "pending" !== t.status && "running" !== t.status && (this.handleTaskStorage("remove"), 
                clearInterval(this.polling));
            } else this.transferToast();
        },
        handleMsg: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments[2], s = "转存失败，请稍后重试", a = "点击重试", r = 0;
            if ("pending" === t || "running" === t) {
                if (new Date().getTime() > this.queryTime) return void this.handleMsg();
                s = "pending" === t ? "正在准备保存, 请稍候..." : "文件转存中，请稍候...", a = "number" == typeof this.pollNum && this.pollNum <= 4 ? "" : "查看转存进度", 
                r = 2;
            } else if ("success" === t) {
                (0, v.setUserCenterInfo)(), wx.toasthide(), s = e || this.data.fileNums + '个文件已保存到"我的资源"', 
                a = "查看", r = 1;
                var n = (0, u.getUk)(), h = this.data.baseAppParameter + "&uk=" + n + "&path=" + this.paths;
                this.setData({
                    appParameter: h
                }), this.transferLog(0);
            } else wx.toasthide(), e && (s = e), this.transferLog(i);
            var l = {
                saveState: r,
                saveBtn: !1,
                text: s,
                resTxt: a
            }, c = Object.assign({}, this.data.btn, l);
            "object" !== o(b.shareInfo.btn) && (b.shareInfo.btn = {}), Object.assign(b.shareInfo.btn, c), 
            this.setData({
                btn: c
            }), getCurrentPages()[getCurrentPages().length - 1].shareList.syncBtn();
        },
        handleTaskStorage: function(t, e) {
            var i = wx.getStorageSync("uk") + (this.data.shareid || b.shareInfo.shareid) + "";
            if ("set" === t && e) {
                var s = {
                    taskid: e,
                    expired: new Date().getTime() + 1728e5
                };
                wx.setStorageSync(i, s);
            }
            if ("get" === t) return wx.getStorageSync(i);
            "remove" === t && wx.removeStorageSync(i);
        },
        checkAutoEnterSelect: function(t) {
            if (!this.data.showGuideMember) {
                var e = g.autoEnterSelectErrnoMap[t], i = {
                    "-10": !0,
                    "-32": !0
                };
                e && (i[t] ? wx.nextTick(function() {
                    wx.wetoast({
                        content: e,
                        duration: 3e3
                    });
                }) : (this.saveLimitDialog = this.selectComponent("#saveLimitDialog"), this.saveLimitDialog.show({
                    content: e
                })));
            }
        },
        saveLimitDialogConfirm: function() {
            this.setData({
                canSelected: !0,
                canSwitchMode: !1
            });
        },
        transferSucCallback: function(t) {
            var e = this;
            t || this.transferFailCallback();
            var i = Number(t.errno);
            12 === i && (i = this.handleErrno(t));
            var s = g.transferMsg[i] || "";
            this.checkGuideMemberErrno({
                errno: i,
                targetSize: t.target_size,
                targetFileNums: t.target_file_nums
            }), this.checkAutoEnterSelect(i);
            var a = 0 === i && t.task_id, r = "fail";
            if (a > 0 && (this.queryTime = new Date().getTime() + 3e4, this.handleTaskStorage("set", a), 
            r = "running", this.pollNum = 0, this.polling = setInterval(function() {
                if (e.pollNum > 4) return e.pollNum = null, clearInterval(e.polling), void e.handleMsg("running");
                e.queryTransferRequest(a), e.pollNum++;
            }, 1e3)), 0 === i && !a || -8 === i || -30 === i) {
                r = "success";
                var n = t.info || t.list || [];
                this.setData({
                    fileNums: n.length
                }), b.savedList = t.extra && t.extra.list || [], b.highlightOff = !1, this.triggerEvent("transSuccess"), 
                this.toResource();
            } else this.data.isStory && p.fileOper.deleteFile(this.paths);
            this.handleMsg(r, s, i), setTimeout(function() {
                e.flag = !0;
            }, 1500);
        },
        transferFailCallback: function(t) {
            var e = this;
            wx.toasthide(), this.transferToast(), this.data.isStory && p.fileOper.deleteFile(this.paths), 
            setTimeout(function() {
                e.flag = !0;
            }, 1500), this.transferLog();
        },
        transferToast: function() {
            wx.wetoast({
                content: "网络出错，请稍后再试",
                duration: 1500
            });
        },
        transferLog: function(t) {
            var e = "失败", i = "fail";
            0 !== t && -8 !== t && -30 !== t || (i = "success", e = 0 === t ? "成功" : "已存在");
            var s = "外链分享,转存文件" + e, a = "wx_sharepage_transfer_" + i + "_" + t;
            wx.log.send({
                value: s,
                from: this.data.fileNums,
                type: a
            }), this.data.isStory && wx.log.send({
                value: s,
                type: "wx_sharepage_story_" + i + "_" + t
            }), this.transfer && wx.log.send({
                value: "游客正常化" + s,
                type: "wx_sharepage_transfer_" + i + "_normal_" + t
            });
        },
        getFsid: function(t) {
            var e = [];
            return t.forEach(function(t) {
                t.fs_id && e.push(t.fs_id);
            }), e;
        },
        toResource: function() {
            wx.log.sharepage.toView.send(), wx.safeNavigateTo("/pages/netdisk_dirdetail/dirdetail?from=share&path=/我的资源&serverFilename=我的资源");
        },
        handleOperation: function() {
            var t = this.data.btn.saveState;
            0 === t && this.saveToMe(), 1 === t && this.toResource(), 2 === t && this.queryTransTask();
        },
        clearBtn: function() {
            this.setData({
                btn: {}
            });
        },
        syncBtn: function() {
            this.setData({
                btn: b.shareInfo.btn
            });
        },
        complaint: function() {
            var t = this.data.shareUrlInfo;
            wx.safeNavigateTo("/pages/netdisk_complaintWap/complaint", t), wx.log.sharepage.report.send();
        },
        autoTrans: function() {
            "auto" !== wx.getStorageSync(this.surl) || b.shareInfo.btn.owner || this.data.isGuideUser || this.saveToMe();
        },
        newFileName: function(t, e, i) {
            return t && e ? t + "-" + e : e || (i ? i + "的故事" : "网盘故事");
        },
        reloadList: function() {
            this.page = 1, e.call(this, !0);
        },
        refreshMode: function() {
            var t = this.selectComponent("#switchButton"), e = wx.getCurrentViewMode();
            this.setData({
                viewMode: e
            }), t && t.refreshIcon();
        },
        refreshOrder: function() {
            var t = b.listOrder || "time";
            wx.setStorageSync("listOrder", t), this.setData({
                order: t,
                list: (0, y.sortFileList)(t, this.data.list)
            });
        },
        reShareInfoFsidlist: function() {
            b.shareInfo.fsidlist = this.getFsid(this.data.list);
        },
        resetData: function() {
            this.refreshMode(), this.refreshOrder();
        },
        share: function() {
            this.checkLogin() && this.triggerEvent("share");
        },
        checkLogin: function() {
            return this.data.hasLogin || this.triggerEvent("authorize"), this.data.hasLogin;
        },
        shareListLoginCoverTap: function() {
            this.triggerEvent("authorize");
        },
        getActivityInfo: function() {
            var t = this;
            (0, w.getWxIcon)().then(function(e) {
                var i = {}, s = {}, a = {}, r = [];
                e.forEach(function(t) {
                    switch (t.pop_type) {
                      case 3:
                        i = t;
                        break;

                      case 4:
                        s = t;
                        break;

                      case 16:
                        a = t;
                    }
                }), r = e.filter(function(t) {
                    return 14 === t.pop_type || 15 === t.pop_type;
                }), t.setData({
                    successActivity: i,
                    failActivity: s,
                    activityDataReady: !0,
                    failBanner: a,
                    feedActivities: r
                }), t.checkActivityShowLog();
            }).catch(function(t) {
                console.warn(t);
            });
        },
        handleFeedClose: function() {
            var t = (0, T.formatTime)(new Date()).substring(0, 10);
            wx.setStorageSync("lastActivityFeed", t), this.setData({
                closeFeedActivities: !0
            }), wx.log.activity.shareFeedClose.send();
        },
        checkActivityShowLog: function() {
            var t = this.data;
            if (t.activityDataReady && t.listDataReady) {
                t.newErr.hasErr || t.invalid ? (t.failActivity.isValid && (0, S.sendActivityLog)(t.failActivity, "_show"), 
                t.failBanner.isValid && (0, S.sendActivityLog)(t.failBanner, "_show")) : t.successActivity.isValid && (0, 
                S.sendActivityLog)(t.successActivity, "_show");
            }
        },
        handleIconCancel: function() {
            var t = this.data;
            t.newErr.hasErr || t.invalid ? (0, S.sendActivityLog)(t.failActivity, "_cancel") : (0, 
            S.sendActivityLog)(t.successActivity, "_cancel");
        },
        launchCal: function() {
            wx.log.common.shareLaunchBtn.send({
                from: this.data.isGuideUser
            });
        },
        updateRemind: function(t) {
            this.setData({
                remindStatus: t,
                errTxt: "done" === t ? "分享者已收到您的消息，感谢您的反馈" : this.data.errTxt
            }), "none" !== t && wx.log.sharepage.remindItShow.send();
        },
        handleRemind: function() {
            "todo" === this.data.remindStatus && (wx.log.sharepage.remindIt.send(), this.triggerEvent("remind"));
        }
    }, m.selectedMethods)
});