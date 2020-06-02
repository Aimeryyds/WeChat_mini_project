function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, t = a(require("../../calendar/index")), o = require("../../timepicker/index"), i = a(o), n = require("../../../libs/wxParse/wxParse.js"), l = require("../../../utils/util"), r = getApp();

module.exports = {
    name: "col",
    data: {},
    props: {
        isIndexCol: !1,
        isCusCol: !1,
        isTabBarCol: !1,
        tabBarColIndex: 0
    },
    onLoad: function(a) {
        var e = this, t = r.globalData.wxAppRequest, o = decodeURIComponent(a.scene).split("_");
        o.length > 1 && (r.globalData = {
            extConfigData: {},
            wxappInfo: {},
            wxAppRequest: t
        }, r.globalData.isModel = !0, r.globalData.wxappAid = o[0], r.globalData.wxappId = o[1]);
        var i = void 0;
        e.props.isIndexCol ? i = 2 : e.props.isCusCol ? i = a.cusColId : e.props.isTabBarCol && (i = r.globalData.wxappInfo.tabBarCusColList[e.props.tabBarColIndex].cusColId), 
        e.parent.setData({
            options: a,
            colId: i
        });
        var n = r.globalData.wxappInfo, l = r.globalData["col" + i];
        0 != Object.keys(n).length ? e.methods.initWXAppInfo(e) : t.getWXAppInfo(function() {
            e.methods.initWXAppInfo(e);
        }), l ? e.methods.initWXAppColModuleInfo(e, l) : t.getWXAppColModuleInfo(i, function(a) {
            e.methods.initWXAppColModuleInfo(e, a);
        });
    },
    onShow: function() {
        r.globalData.isVisitLimit && r.globalData.showVisitLimit();
    },
    onUnload: function() {
        this.setData({
            is_unloaded: !0
        });
    },
    methods: {
        initWXAppInfo: function(a) {
            var e = !1, t = r.globalData.tabbar, o = getCurrentPages(), i = o[o.length - 1].__route__;
            0 != i.indexOf("/") && (i = "/" + i);
            for (var n in t.list) if (t.list[n].pagePath == i) {
                e = !0;
                break;
            }
            var l = r.globalData.wxappInfo, s = l.header, d = l.cusService, u = l.flag, p = l.isOem, f = l.agentAcct, c = r.globalData.globalColor, g = !1;
            r.globalData.isModel && u.tabBarOpen && (g = !0, r.editTabBar()), u.footerOpen = !u.cancelSupport, 
            d.supportOpen = !u.cancelServiceSupport, d.isTabbarPath = e, a.parent.setData({
                header: s,
                cusService: d,
                flag: u,
                globalColor: c,
                showTabBar: g,
                isOem: p,
                agentAcct: f
            }), l.isVisitLimit && r.globalData.showVisitLimit();
        },
        initWXAppColModuleInfo: function(a, t) {
            r.globalData.wxappInfo.formList;
            var o = t.moduleInfoList;
            if (o.length > 0) for (var i = 0; i < o.length; i++) {
                var l = o[i];
                if (5 == l.style) {
                    var s = l.content.moduleList;
                    if (s.length > 0) for (var d = 0; d < s.length; d++) {
                        var u = s[d];
                        if (4 == u.subModuleInfo.style) {
                            var p = u.subModuleInfo.content.text;
                            "object" != (void 0 === p ? "undefined" : e(p)) && (n.wxParse("text", "html", p, a.parent, 5), 
                            u.subModuleInfo.content.text = a.parent.data.text);
                        }
                    }
                }
                if (6 == l.style) for (var f = l.content.imgList, c = 0; c < f.length; c++) {
                    var g = f[c], m = g.des;
                    "" != m && "object" != (void 0 === m ? "undefined" : e(m)) && (n.wxParse("des", "html", m, a.parent, 5), 
                    g.des = a.parent.data.des);
                }
                if (7 == l.style) {
                    var b = l.content.desc;
                    b && "" != b && "object" != (void 0 === b ? "undefined" : e(b)) && (n.wxParse("videoDesc", "html", b, a.parent, 5), 
                    l.content.desc = a.parent.data.videoDesc);
                }
            }
            a.parent.setData({
                name: t.name,
                moduleInfoList: o
            }), wx.setNavigationBarTitle({
                title: t.name
            });
        }
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
        var a = r.globalData.wxAppRequest, e = this.childrens.col, t = this.data.colId;
        a.getWXAppInfo(function() {
            e.methods.initWXAppInfo(e);
        }), a.getWXAppColModuleInfo(t, function(a) {
            e.methods.initWXAppColModuleInfo(e, a);
        });
    },
    jumpCtrl: function(a) {
        var e = a.currentTarget.dataset.jinfo;
        if (e) {
            var t = e.t;
            if (1 == t) {
                var o = e.colId, i = e.url, n = r.globalData.wxappInfo.tabBarCusColList;
                for (var l in n) if (n[l].cusColId == o) {
                    var s = parseInt(l) + 1;
                    i = "/pages/cusCol" + s + "/cusCol" + s;
                }
                wx.navigateTo({
                    url: i
                }), wx.switchTab({
                    url: i
                });
            } else if (2 == t) {
                var d = e.pho;
                wx.makePhoneCall({
                    phoneNumber: d
                });
            } else if (3 == t) {
                var u = e.addr;
                r.globalData.wxAppRequest.getLocationFromBaidu(u);
            } else if (4 == t) {
                var p = e.bookDetailUrl;
                wx.navigateTo({
                    url: p
                });
            } else if (6 == t) {
                var f = e.newsDetailUrl;
                wx.navigateTo({
                    url: f
                });
            } else if (11 == t) {
                var c = e.cardUrl;
                wx.navigateTo({
                    url: c
                });
            } else if (12 == t) {
                var g = e.pageUrl;
                wx.navigateTo({
                    url: g
                });
            } else 8 != t && 9 != t && 10 != t || wx.navigateToMiniProgram({
                appId: e.appid,
                path: e.page,
                envVersion: "release",
                success: function(a) {},
                fail: function(a) {
                    console.log(a);
                }
            });
        }
    },
    previewModuleImage: function(a) {
        if (a.currentTarget.dataset.sbp) {
            var e = a.currentTarget.dataset.img;
            wx.previewImage({
                current: e,
                urls: [ e ]
            });
        }
    },
    previewModuleMultiImage: function(a) {
        var e = a.currentTarget.dataset.img, t = a.currentTarget.dataset.imglist, o = [];
        for (var i in t) o.push(t[i].imgPath);
        wx.previewImage({
            current: e,
            urls: o
        });
    },
    videoFullScreenChange: function(a) {
        var e = a.detail.fullScreen;
        this.data.flag.cusServiceOpen = !e, this.setData({
            flag: this.data.flag
        });
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.cusService.phone
        });
    },
    backToHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    onShareAppMessage: function() {
        var a = this.data.name, e = "";
        if (r.globalData.wxappInfo && r.globalData.wxappInfo.wxShare) {
            var t = r.globalData.wxappInfo.wxShare.tle, o = r.globalData.wxappInfo.wxShare.p, i = r.globalData.wxappInfo.wxShare.it, n = r.globalData.wxappInfo.wxShare.tt;
            t && n && (a = t), o && i && (e = o);
        }
        return {
            title: a,
            imageUrl: e
        };
    },
    showAdvertising: function(a) {
        r.globalData.wxAppRequest.logDog(7000032, 0), r.globalData.isVerFree ? r.globalData.wxAppRequest.logDog(7000047, 1) : r.globalData.wxAppRequest.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=0"
        });
    },
    showServiceAdvertising: function(a) {
        r.globalData.wxAppRequest.logDog(7000032, 3), r.globalData.isVerFree ? r.globalData.wxAppRequest.logDog(7000047, 1) : r.globalData.wxAppRequest.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=1"
        });
    },
    formUserInfoHandler: function(a) {
        if (!r.globalData.userInfo) {
            var e = this, t = a.detail.errMsg;
            if ("getUserInfo:fail auth deny" == t) wx.showModal({
                title: "警告",
                content: "您点击了拒绝授权，将无法提交表单。",
                showCancel: !1,
                confirmText: "确定",
                success: function(a) {}
            }); else if ("getUserInfo:ok" == t) {
                var o = a.detail.rawData;
                r.globalData.userInfo || wx.login({
                    success: function(a) {
                        if ("login:ok" == a.errMsg) {
                            var t = a.code;
                            r.globalData.wxAppRequest.getOrAddUserInfo(t, JSON.parse(o), function() {
                                var a = e.submitForm;
                                if (a) {
                                    wx.showLoading({
                                        title: "提交中",
                                        mask: !0
                                    });
                                    var t = a.formid || 0, o = a.submitData || {}, i = a.moduleid || 0;
                                    r.globalData.wxAppRequest.commitForm(e, t, i, o);
                                }
                            });
                        }
                    },
                    fail: function(a) {
                        wx.showModal({
                            title: "",
                            showCancel: !1,
                            content: "登录失败",
                            success: function(a) {}
                        });
                    }
                });
            }
        }
    },
    submitFormHandler: function(a) {
        for (var e = a.currentTarget.dataset.formid, t = a.currentTarget.dataset.formdata, o = a.currentTarget.dataset.moduleid, i = a.detail.value, n = 0; n < t.length; n++) if (t[n].must) {
            var l = t[n].id;
            if (!i[l] || 0 == i[l].length) return void wx.showModal({
                title: "",
                showCancel: !1,
                content: t[n].name + "不能为空",
                success: function(a) {}
            });
        }
        var s = this;
        r.globalData.userInfo ? (wx.showLoading({
            title: "提交中",
            mask: !0
        }), r.globalData.wxAppRequest.commitForm(s, e, o, i)) : (s.submitForm = {}, s.submitForm.formid = e, 
        s.submitForm.submitData = i, s.submitForm.moduleid = o);
    },
    checkedOption: function(a) {
        var e = this, t = a.currentTarget.dataset, o = t.moduleid, i = t.itemid, n = t.index, l = t.option.selected;
        l = !l;
        for (var r = this.data.moduleInfoList, s = 0; s < r.length; s++) if (o == r[s].id) for (var d = r[s].content.formData, u = 0; u < d.length; u++) if (i == d[u].id) {
            d[u].input[n].selected = l;
            var p = {};
            p["moduleInfoList[" + s + "].content.formData[" + u + "]"] = d[u], e.setData(p);
            break;
        }
    },
    uploadHandler: function(a) {
        var e = a.currentTarget.dataset.module, t = e.content.formId, o = a.currentTarget.dataset.itemid, i = this;
        wx.chooseImage({
            count: 1,
            success: function(a) {
                var n = a.tempFilePaths, l = n[0].lastIndexOf("."), s = n[0].substring(l + 1), d = a.tempFiles[0].size, u = e.content.formData;
                for (var p in u) if (u[p].id == o) {
                    if (d > 1024 * u[p].fileSetting.fs * 1024) return void wx.showModal({
                        title: "上传失败",
                        showCancel: !1,
                        content: "上传失败：图片大小超过" + u[p].fileSetting.fs + "M",
                        success: function(a) {}
                    });
                    break;
                }
                var f = {
                    moduleid: e.id,
                    formId: t,
                    itemId: o,
                    filePath: n[0],
                    fileSize: d,
                    fileType: s
                };
                r.globalData.wxAppRequest.uploadFile(i, f);
            }
        });
    },
    toNewsDetail: function(a) {
        var e = a.currentTarget.dataset.newsid;
        wx.navigateTo({
            url: "/pages/newsDetail/newsDetail?id=" + e
        });
    },
    toNewsPage: function(a) {
        wx.navigateTo({
            url: "/pages/news/news"
        }), wx.switchTab({
            url: "/pages/news/news"
        });
    },
    toBookDetailPage: function(a) {
        var e = a.currentTarget.dataset.sid;
        wx.navigateTo({
            url: "/pages/bookDetail/bookDetail?bookId=" + e
        });
    },
    toBookPage: function() {
        wx.navigateTo({
            url: "/pages/book/book"
        }), wx.switchTab({
            url: "/pages/book/book"
        });
    },
    showCalendar: function(a) {
        var e = a.currentTarget.dataset.module.id, t = a.currentTarget.dataset.item, i = t.id, n = t.dateSetting, l = a.currentTarget.dataset.date || "", r = n.a, s = n.ot.ut;
        0 == n.ot.t && (s = [ 0, 1, 2, 3, 4, 5, 6, 23 ]);
        var d = this, u = [], p = [], f = n.od.t, c = n.od.ud, g = n.od.od, m = n.ba, b = n.bh, v = n.bpd;
        if (0 == f) b = v = !0, m = !1; else {
            for (var D = 0; D < c.length; D++) {
                var h = d.timestampToTime(c[D]);
                u.push(h);
            }
            for (var w = 0; w < g.length; w++) {
                var x = d.timestampToTime(g[w]);
                p.push(x);
            }
        }
        if (this.setHiddenTextarea(e, !0), r) {
            var I = {
                disableAll: m,
                disablePastDay: v,
                disableWeekend: b,
                defaultDay: l,
                disableDays: u,
                enableDays: p,
                callback: function(a) {
                    var t = a.year + "-" + a.month + "-" + a.day;
                    d.setFormDate(e, i, t), d.setHiddenTextarea(e, !1);
                }
            };
            this.initCalendarFn(I);
        } else {
            var C = this.getTimepickerCof({
                defaultDay: l,
                disableAll: m,
                disableWeekend: b,
                disablePastDay: v,
                disableDays: u,
                disableTime: s,
                enableDays: p,
                moduleId: e,
                itemId: i
            });
            this.initTimepickerFn(C), (0, o.disableTimepickerDays)(u);
        }
    },
    initCalendarFn: function(a) {
        var e = {
            disableAll: !1,
            disablePastDay: !1,
            disableWeekend: !1,
            defaultDay: "",
            disableDays: [],
            enableDays: [],
            comfirmDay: function(e, t) {
                a.callback && a.callback(e);
            }
        };
        l.extend(!0, e, a), (0, t.default)(e);
    },
    getCalendarConf: function(a) {
        var e = this;
        return {
            disableAll: a.disableAll,
            disablePastDay: a.disablePastDay,
            disableWeekend: a.disableWeekend,
            defaultDay: a.jumpDate,
            disableDays: a.disableDays,
            enableDays: a.enableDays,
            callback: function(t) {
                var o = t.year + "-" + t.month + "-" + t.day;
                a.defaultDay = o;
                var i = e.getTimepickerCof(a);
                e.initTimepickerFn(i);
            }
        };
    },
    getTimepickerCof: function(a) {
        var e = this;
        return {
            defaultDay: a.defaultDay,
            disableAll: a.disableAll,
            disableWeekend: a.disableWeekend,
            disableDays: a.disableDays,
            enableDays: a.enableDays,
            disableTime: a.disableTime,
            comfirmCallback: function(t) {
                var o = t.year + "-" + t.month + "-" + t.day + " " + t.time;
                e.setFormDate(a.moduleId, a.itemId, o), e.setHiddenTextarea(a.moduleId, !1);
            },
            initCalendarDayCallback: function(t) {
                var o = t.year + "-" + t.month + "-" + t.day;
                a.jumpDate = o;
                var i = e.getCalendarConf(a);
                e.initCalendarFn(i);
            }
        };
    },
    initTimepickerFn: function(a) {
        var e = {
            disableWeekend: !1,
            disableAll: !1,
            defaultDay: "",
            comfirmTime: function(e, t) {
                a.comfirmCallback && a.comfirmCallback(e);
            },
            initCalendarDay: function(e, t) {
                a.initCalendarDayCallback && a.initCalendarDayCallback(e);
            }
        };
        l.extend(!0, e, a), (0, i.default)(e);
    },
    setFormDate: function(a, e, t) {
        var o = getApp().globalData, i = this, n = i.childrens.col, l = i.options, r = void 0;
        n.props.isIndexCol ? r = 2 : n.props.isCusCol ? r = l.cusColId : n.props.isTabBarCol && (r = getApp().globalData.wxappInfo.tabBarCusColList[n.props.tabBarColIndex].cusColId);
        o.wxappInfo;
        for (var s = o["col" + r].moduleInfoList, d = 0, u = s.length; d < u; d++) {
            var p = s[d];
            if (p.id == a) {
                for (var f = p.content.formData, c = {}, g = 0; g < f.length; g++) 5 == f[g].type && f[g].id == e && (f[g].val = t, 
                c["moduleInfoList[" + d + "].content.formData[" + g + "]"] = f[g]);
                i.setData(c);
            }
        }
    },
    bindTextAreaBlur: function(a) {
        var e = a.currentTarget.dataset.module.id, t = a.currentTarget.dataset.item.id, o = a.detail.value;
        this.setFormTextarea(e, t, o);
    },
    setFormTextarea: function(a, e, t) {
        var o = getApp().globalData, i = this, n = i.childrens.col, l = i.options, r = void 0;
        n.props.isIndexCol ? r = 2 : n.props.isCusCol ? r = l.cusColId : n.props.isTabBarCol && (r = getApp().globalData.wxappInfo.tabBarCusColList[n.props.tabBarColIndex].cusColId);
        o.wxappInfo;
        for (var s = o["col" + r].moduleInfoList, d = 0, u = s.length; d < u; d++) {
            var p = s[d];
            if (p.id == a) {
                for (var f = p.content.formData, c = {}, g = 0; g < f.length; g++) 3 == f[g].type && e == f[g].id && (f[g].val = t, 
                c["moduleInfoList[" + d + "].content.formData[" + g + "]"] = f[g]);
                i.setData(c);
            }
        }
    },
    setHiddenTextarea: function(a, e) {
        var t = getApp().globalData, o = this, i = o.childrens.col, n = o.options, l = void 0;
        i.props.isIndexCol ? l = 2 : i.props.isCusCol ? l = n.cusColId : i.props.isTabBarCol && (l = getApp().globalData.wxappInfo.tabBarCusColList[i.props.tabBarColIndex].cusColId);
        t.wxappInfo;
        for (var r = t["col" + l].moduleInfoList, s = 0, d = r.length; s < d; s++) {
            var u = r[s];
            if (u.id == a) {
                for (var p = u.content.formData, f = {}, c = 0; c < p.length; c++) 3 == p[c].type && (p[c].hidden = e, 
                p[c].val = p[c].val, f["moduleInfoList[" + s + "].content.formData[" + c + "]"] = p[c]);
                o.setData(f);
            }
        }
    },
    timestampToTime: function(a) {
        a = a.toString().length > 10 ? a : 1e3 * a;
        var e = new Date(a);
        e.getFullYear(), e.getMonth(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), 
        e.getSeconds();
        return {
            year: e.getFullYear(),
            month: e.getMonth() + 1,
            day: e.getDate()
        };
    }
};