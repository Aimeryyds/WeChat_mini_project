var a = require("../libs/wxMap/qqmap-wx-jssdk.js"), o = require("../libs/wxParse/wxParse.js"), e = require("wxpay.js"), t = require("../utils/md5.js"), p = {};

p.getWXAppInfo = function(a) {
    wx.showLoading({}), wx.getExtConfig && wx.getExtConfig({
        success: function(o) {
            if ("getExtConfig: ok" == o.errMsg) {
                var e = o.extConfig, t = getApp().globalData;
                t.isModel && (e.wxappAid = t.wxappAid, e.wxappId = t.wxappId, e.isModel = !0), getApp().globalData.extConfigData = e;
                var p = e.isModel, i = e.isOem, n = e.aid, d = e.wxappAid, s = e.wxappId, r = e.wxappAppId, c = e.wxappDomain;
                wx.request({
                    url: c + "?cmd=getWXAppInfo",
                    data: {
                        isModel: p,
                        isOem: i,
                        aid: n,
                        wxappAid: d,
                        wxappId: s,
                        wxappAppId: r
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        if (o.data.success) {
                            var e = o.data.wxappInfo, t = e.globalColor, p = e.modelTabBar, i = e.isVisitLimit, n = getApp().globalData;
                            n.showVisitLimit = function() {
                                wx.showModal({
                                    title: "访问人数已超过版本限制",
                                    content: "请联系该小程序的管理员升级版本",
                                    showCancel: !1,
                                    confirmText: "",
                                    success: function(a) {
                                        n.showVisitLimit();
                                    }
                                });
                            }, i && n.showVisitLimit(), n.isVisitLimit = i, n.wxappInfo = e, n.globalColor = t, 
                            n.tabbar = p, n.isVerFree = e.isVerFree, e.wxappAid && (n.wxappAid = e.wxappAid), 
                            e.wxappId && (n.wxappId = e.wxappId), a && a();
                        } else {
                            var d = o.data.errCode;
                            wx.redirectTo({
                                url: "/pages/err/err?errCode=" + d
                            });
                        }
                        wx.hideLoading();
                    },
                    fail: function(a) {
                        wx.redirectTo({
                            url: "/pages/err/err?errMsg=" + a.errMsg
                        }), wx.hideLoading();
                    }
                });
            }
        }
    });
}, p.getWXAppColModuleInfo = function(a, o) {
    wx.showLoading({}), wx.getExtConfig && wx.getExtConfig({
        success: function(e) {
            if ("getExtConfig: ok" == e.errMsg) {
                var t = e.extConfig, p = t.isModel, i = t.wxappAid, n = t.wxappId, d = t.wxappAppId, s = t.wxappDomain, r = getApp().globalData;
                r.isModel && (p = !0, i = r.wxappAid, n = r.wxappId), wx.request({
                    url: s + "?cmd=getWXAppColModuleInfo",
                    data: {
                        isModel: p,
                        wxappAid: i,
                        wxappId: n,
                        wxappAppId: d,
                        colId: a
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        if (e.data.success) {
                            var t = e.data.colInfo;
                            getApp().globalData["col" + a] = t, o && o(t);
                        }
                        wx.hideLoading();
                    },
                    fail: function(a) {
                        wx.redirectTo({
                            url: "/pages/err/err?errMsg=" + a.errMsg
                        }), wx.hideLoading();
                    }
                });
            }
        }
    });
}, p.getUserInfoByCode = function(a, o) {
    var e = getApp().globalData, t = e.extConfigData, p = e.wxappAid ? e.wxappAid : t.wxappAid, i = e.wxappId ? e.wxappId : t.wxappId, n = t.wxappAppId, d = t.wxappDomain;
    wx.request({
        url: d + "?cmd=getUserInfoByCode",
        data: {
            wxappAid: p,
            wxappId: i,
            wxappAppId: n,
            code: a
        },
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var e = a.data;
            if (e.success) {
                var t = e.userInfo;
                t ? (getApp().globalData.userInfo = t, getApp().globalData.openId = t.openId, o && o(e)) : getApp().globalData.openId = e.openId;
            }
        },
        fail: function() {}
    });
}, p.getUserInfoByAuth = function(a, o) {
    var e = getApp().globalData, t = e.extConfigData;
    a.openId = e.openId, e.userInfo = a;
    var p = e.wxappAid ? e.wxappAid : t.wxappAid, i = e.wxappId ? e.wxappId : t.wxappId, n = t.wxappAppId, d = t.wxappDomain;
    wx.request({
        url: d + "?cmd=addUserInfo",
        data: {
            wxappAid: p,
            wxappId: i,
            wxappAppId: n,
            userInfo: a
        },
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = e.data;
            t.success && o && (t.userInfo = a, o(t));
        },
        fail: function() {}
    });
}, p.getOrAddUserInfo = function(a, o, e) {
    var t = getApp().globalData, p = t.extConfigData, i = t.wxappAid ? t.wxappAid : p.wxappAid, n = t.wxappId ? t.wxappId : p.wxappId, d = p.wxappAppId, s = p.wxappDomain;
    wx.request({
        url: s + "?cmd=getOrAddUserInfo",
        data: {
            wxappAid: i,
            wxappId: n,
            wxappAppId: d,
            code: a,
            userInfo: o
        },
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var o = a.data;
            if (o.success) {
                var t = o.dbUserInfo;
                getApp().globalData.userInfo = t, getApp().globalData.openId = t.openId, e && e();
            } else wx.showModal({
                title: "",
                showCancel: !1,
                content: "自动登录失败",
                success: function(a) {}
            });
        },
        fail: function() {
            wx.showModal({
                title: "",
                showCancel: !1,
                content: "自动登录失败",
                success: function(a) {}
            });
        }
    });
}, p.getBookInfoList = function(a) {
    wx.getExtConfig({
        success: function(o) {
            if ("getExtConfig: ok" == o.errMsg) {
                var e = o.extConfig, t = getApp().globalData, p = t.wxappAid ? t.wxappAid : e.wxappAid, i = t.wxappId ? t.wxappId : e.wxappId, n = e.wxappAppId, d = e.wxappDomain, s = a.data.bookGroupInfoMap[0], r = (s = s || []).length;
                wx.showLoading({}), wx.request({
                    url: d + "?cmd=getWXAppBookInfoList",
                    data: {
                        wxappAid: p,
                        wxappId: i,
                        wxappAppId: n,
                        bookIndex: r
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        var e = o.data;
                        if (e.success) {
                            var p = e.rtbookInfoList;
                            if (t.formItem = e.formItem, t.shareWXMoment = e.shareWXMoment, t.payModes = {
                                openWXPay: e.openWXPay,
                                hideGoPay: e.hideGoPay
                            }, a) {
                                var i = e.bookGroupList;
                                i.length > 0 && i.unshift({
                                    id: 0,
                                    name: "全部"
                                });
                                var n = a.data.bookGroupInfoMap;
                                s = s.concat(p), n[0] = s, a.setData({
                                    bookGroupInfoMap: n,
                                    groupList: i,
                                    showMoreBtn: e.bookGroupList.length > 4,
                                    formItem: e.formItem
                                }), wx.stopPullDownRefresh();
                            }
                            wx.hideLoading();
                        }
                    },
                    fail: function() {
                        console.log("getBookInfoList err");
                    }
                });
            }
        }
    });
}, p.getBookExtInfo = function(a) {
    wx.getExtConfig({
        success: function(o) {
            if ("getExtConfig: ok" == o.errMsg) {
                var e = o.extConfig, t = getApp().globalData, p = t.wxappAid ? t.wxappAid : e.wxappAid, i = t.wxappId ? t.wxappId : e.wxappId, n = e.wxappDomain;
                wx.request({
                    url: n + "?cmd=getBookExtInfo",
                    data: {
                        wxappAid: p,
                        wxappId: i
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        var e = o.data;
                        e.success && (t.formItem = e.formItem, t.shareWXMoment = e.shareWXMoment, t.payModes = {
                            openWXPay: e.openWXPay,
                            hideGoPay: e.hideGoPay
                        }, a && a());
                    },
                    fail: function() {
                        console.log("getBookExtInfo err");
                    }
                });
            }
        }
    });
}, p.getBookListByGroupId = function(a, o) {
    wx.getExtConfig({
        success: function(e) {
            if ("getExtConfig: ok" == e.errMsg) {
                var t = e.extConfig, p = getApp().globalData, i = p.wxappAid ? p.wxappAid : t.wxappAid, n = p.wxappId ? p.wxappId : t.wxappId, d = (t.wxappAppId, 
                t.wxappDomain), s = a.data.bookGroupInfoMap ? a.data.bookGroupInfoMap : {}, r = s[o] ? s[o].length : 0;
                wx.showLoading({}), wx.request({
                    url: d + "?cmd=getBookListByGroupId",
                    data: {
                        wxappAid: i,
                        wxappId: n,
                        groupId: o,
                        bookIndex: r
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = e.data;
                        t.success && (s[o] ? s[o] = s[o].concat(t.rtbookInfoList) : s[o] = t.rtbookInfoList, 
                        a && (a.setData({
                            bookGroupInfoMap: s
                        }), wx.stopPullDownRefresh()), wx.hideLoading());
                    },
                    fail: function() {
                        console.log("getBookInfoList err");
                    }
                });
            }
        }
    });
}, p.getBookInfo = function(a, e) {
    wx.showLoading({}), wx.getExtConfig({
        success: function(t) {
            if ("getExtConfig: ok" == t.errMsg) {
                var p = t.extConfig, i = getApp().globalData, n = i.wxappAid ? i.wxappAid : p.wxappAid, d = i.wxappId ? i.wxappId : p.wxappId, s = p.wxappDomain;
                wx.request({
                    url: s + "?cmd=getWXAppBookInfo",
                    data: {
                        wxappAid: n,
                        wxappId: d,
                        bookId: a
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        var t = a.data;
                        if (t.success) {
                            var p = t.rtBookInfo;
                            if (i.bookInfoDetail = p, e) {
                                var n = p.content, d = !0;
                                n && (wx.showLoading({}), o.wxParse("bookInfoContent", "html", n, e, 5, !0), d = !1, 
                                wx.hideLoading()), e.setData({
                                    bookInfo: p,
                                    bookInfoEmpty: d
                                });
                            }
                        }
                        wx.hideLoading();
                    },
                    fail: function() {
                        wx.hideLoading(), console.log("getBookInfoList err");
                    }
                });
            }
        }
    });
}, p.getOrderList = function(a) {
    var o = getApp().globalData, e = o.extConfigData, t = o.wxappAid ? o.wxappAid : e.wxappAid, p = o.wxappId ? o.wxappId : e.wxappId, i = e.wxappAppId, n = e.wxappDomain, d = o.userInfo.openId;
    wx.request({
        url: n + "?cmd=getOrderList",
        data: {
            wxappAid: t,
            wxappId: p,
            wxappAppId: i,
            openId: d
        },
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(o) {
            var e = o.data;
            if (e.success) {
                var t = e.orderList, p = e.formType;
                getApp().globalData.formType = p, getApp().globalData.orderList = t;
                for (var i = [], n = [], d = [], s = [], r = 0; r < t.length; r++) {
                    var c = t[r], w = c.status, x = c.payType;
                    0 == w || 4 == w || 5 == w ? (c.statusStr = 5 == w ? "退款中（微信支付）" : 4 == w ? "已支付（微信支付）" : "进行中（到店支付）", 
                    i.push(c)) : 1 == w ? (c.statusStr = 0 === x ? "已完成（到店支付）" : "已完成（微信支付）", n.push(c)) : 2 == w ? (c.statusStr = 0 === x ? "已取消（到店支付）" : "已取消（微信支付）", 
                    s.push(c)) : 3 == w && (c.statusStr = "待支付", d.push(c));
                }
                var f = getApp().globalData;
                f.orderListFinish = n, f.orderListProcess = i, f.orderListCancel = s, f.orderListWaitPay = d, 
                a.setData({
                    orderList: t,
                    orderListFinish: n,
                    orderListProcess: i,
                    orderListWaitPay: d,
                    orderListCancel: s,
                    formType: p
                });
                var l = "我的订单";
                1 == p && (l = "我的咨询"), wx.setNavigationBarTitle({
                    title: l
                });
            }
        },
        fail: function() {}
    });
}, p.commitOrder = function(a) {
    var o = getApp().globalData, t = o.extConfigData, p = o.wxappAid ? o.wxappAid : t.wxappAid, i = o.wxappId ? o.wxappId : t.wxappId, n = (t.wxappAppId, 
    t.wxappDomain), d = t.aid, s = o.userInfo.openId, r = a.data, c = r.formData, w = r.bookId, x = r.bookInfo, f = x.promotionPrice > 0 ? x.promotionPrice : x.price, l = r.payModes[r.payIndex].type;
    wx.showLoading({
        title: "加载中",
        mask: !0
    }), wx.request({
        url: n + "?cmd=addOrder",
        data: {
            wxappAid: p,
            wxappId: i,
            serviceType: 0,
            serviceId: w,
            openId: s,
            formData: c,
            price: f,
            payType: l,
            aid: d
        },
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(o) {
            var t = o.data;
            if (t.success) {
                if (0 === l || 0 == f) return void wx.navigateTo({
                    url: "/pages/bookSuc/bookSuc"
                });
                var p = t.wxpayInfo;
                e.callbackObj.fail = function(o) {
                    "requestPayment:fail cancel" != o.errMsg && "requestPayment:cancel" != o.errMsg && a.toastShow("发起支付失败"), 
                    wx.navigateTo({
                        url: "/pages/myOrder/myOrder?currentTab=1"
                    });
                }, e.callbackObj.success = function(a) {
                    "requestPayment:ok" == a.errMsg && wx.navigateTo({
                        url: "/pages/bookSuc/bookSuc"
                    });
                }, e.requestPayment(p);
            } else a.toastShow(t.msg);
            wx.hideLoading();
        },
        fail: function() {
            a.toastShow("提交订单失败,请联系小程序管理员");
        }
    });
}, p.setOrderStatus = function(a, o, e) {
    var t = getApp().globalData, i = t.extConfigData, n = t.wxappAid ? t.wxappAid : i.wxappAid, d = t.wxappId ? t.wxappId : i.wxappId, s = i.wxappDomain, r = i.aid;
    wx.request({
        url: s + "?cmd=setOrderStatus",
        data: {
            wxappAid: n,
            wxappId: d,
            id: o,
            status: a,
            aid: r
        },
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            a.data.success && p.getOrderList(e);
        },
        fail: function() {}
    });
}, p.getLocationFromBaidu = function(o) {
    wx.showLoading({}), new a({
        key: "TJ7BZ-JZKWD-XZ44I-HEYDM-RDJJJ-WHFVL"
    }).geocoder({
        address: o,
        success: function(a) {
            var e = a.result.location, t = e.lng, p = e.lat;
            wx.openLocation({
                latitude: p,
                longitude: t,
                name: o
            }), wx.hideLoading();
        },
        fail: function(a) {
            console.log(a);
        },
        complete: function(a) {}
    });
}, p.getNewsList = function(a, o) {
    wx.getExtConfig({
        success: function(a) {
            if ("getExtConfig: ok" == a.errMsg) {
                var e = a.extConfig, t = getApp().globalData, p = t.wxappAid ? t.wxappAid : e.wxappAid, i = t.wxappId ? t.wxappId : e.wxappId, n = e.wxappDomain;
                wx.request({
                    url: n + "?cmd=getWXAppNews",
                    data: {
                        wxappAid: p,
                        wxappId: i
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        if (a.data.success) {
                            var e = a.data.result;
                            o && o(e);
                        }
                    },
                    fail: function() {}
                });
            }
        }
    });
}, p.getNewsInfo = function(a, o, e) {
    wx.getExtConfig({
        success: function(o) {
            if ("getExtConfig: ok" == o.errMsg) {
                var t = o.extConfig, p = getApp().globalData, i = p.wxappAid ? p.wxappAid : t.wxappAid, n = p.wxappId ? p.wxappId : t.wxappId, d = t.wxappDomain;
                wx.request({
                    url: d + "?cmd=getWXAppNewsInfo",
                    data: {
                        wxappAid: i,
                        wxappId: n,
                        id: a
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        if (a.data.success) {
                            var o = a.data.result;
                            e && e(o);
                        }
                    },
                    fail: function() {}
                });
            }
        }
    });
}, p.logDog = function(a, o) {
    wx.getExtConfig({
        success: function(e) {
            if ("getExtConfig: ok" == e.errMsg) {
                var t = e.extConfig, p = t.aid, i = t.wxappId, n = t.wxappDomain;
                wx.request({
                    url: n + "?cmd=logDog",
                    data: {
                        aid: p,
                        wxappId: i,
                        dogId: a,
                        srcId: o
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {},
                    fail: function() {}
                });
            }
        }
    });
}, p.commitForm = function(a, o, e, t) {
    var p = getApp().globalData, i = p.extConfigData, n = p.wxappAid ? p.wxappAid : i.wxappAid, d = p.wxappId ? p.wxappId : i.wxappId, s = (i.wxappAppId, 
    i.wxappDomain), r = a.childrens.col, c = a.options, w = void 0;
    r.props.isIndexCol ? w = 2 : r.props.isCusCol ? w = c.cusColId : r.props.isTabBarCol && (w = getApp().globalData.wxappInfo.tabBarCusColList[r.props.tabBarColIndex].cusColId);
    var x = getApp().globalData.openId, f = [];
    for (var l in t) {
        var u = t[l];
        u instanceof Array && (u = u.join("\n"));
        var g = {
            id: 1 * l,
            val: u
        };
        f.push(g);
    }
    p.wxappInfo;
    for (var I = p["col" + w].moduleInfoList, m = [], A = 0, C = I.length; A < C; A++) {
        var h = I[A];
        h.id == e && (m = h.content.tmpFileList ? h.content.tmpFileList : []);
    }
    wx.request({
        url: s + "?cmd=addWXAppFormSubmit",
        data: {
            wxappAid: n,
            wxappId: d,
            formId: o,
            colId: w,
            openId: x,
            submitContentList: JSON.stringify(f),
            tmpFileList: JSON.stringify(m),
            aid: i.aid
        },
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(o) {
            var t = o.data;
            if (t.success) {
                wx.hideLoading(), wx.showToast({
                    title: "提交成功"
                });
                for (var p = 0, i = I.length; p < i; p++) {
                    var n = I[p];
                    if (n.id == e) {
                        for (var d = n.content.formData, s = 0; s < d.length; s++) 2 == d[s].type ? d[s].input.forEach(function(a) {
                            a.selected = !1;
                        }) : d[s].val = "";
                        n.content.tmpFileList = [];
                        var r = {};
                        r["moduleInfoList[" + p + "]"] = n, a.setData(r);
                    }
                }
            } else wx.showModal({
                title: "提交失败",
                showCancel: !1,
                content: t.msg,
                success: function(a) {}
            }), wx.hideLoading();
        },
        fail: function() {
            wx.showToast({
                title: "提交失败"
            });
        }
    });
}, p.uploadFile = function(a, o) {
    var e = getApp().globalData, t = e.extConfigData, p = e.wxappAid ? e.wxappAid : t.wxappAid, i = e.wxappId ? e.wxappId : t.wxappId, n = t.wxappDomainUrl, d = a.childrens.col, s = a.options, r = void 0;
    if (d.props.isIndexCol) r = 2; else if (d.props.isCusCol) r = s.cusColId; else if (d.props.isTabBarCol) {
        var c = getApp().globalData.wxappInfo.tabBarCusColList;
        r = c[d.props.tabBarColIndex].cusColId;
    }
    wx.showLoading({
        title: "上传中",
        mask: !0
    });
    var w = "&wxappAid=" + p + "&wxappId=" + i + "&type=0&formId=" + o.formId + "&itemId=" + o.itemId + "&fileSize=" + o.fileSize + "&fileType=" + o.fileType, x = !1;
    wx.uploadFile({
        url: n + "wxAppAdvanceUpload.jsp?cmd=formFileUpload" + w,
        filePath: o.filePath,
        name: "ctrl",
        header: {
            "Content-Type": "multipart/form-data"
        },
        success: function(t) {
            if ("" != t.data) {
                var p = JSON.parse(t.data);
                if (p.success) {
                    var i = p.fileId;
                    wx.hideLoading(), wx.showToast({
                        title: "上传成功"
                    });
                    e.wxappInfo;
                    for (var n = e["col" + r].moduleInfoList, d = 0, s = n.length; d < s; d++) {
                        var c = n[d];
                        if (c.id == o.moduleid) {
                            for (var w = c.content.formData, f = {}, l = 0; l < w.length; l++) w[l].id == o.itemId && (w[l].val = i, 
                            w[l].path = o.filePath, f["moduleInfoList[" + d + "].content.formData[" + l + "]"] = w[l]);
                            c.content.tmpFileList = c.content.tmpFileList ? c.content.tmpFileList : [];
                            var u = c.content.tmpFileList;
                            u.push({
                                tmpFileId: p.id,
                                tmpFileName: p.name,
                                fileId: p.fileId
                            }), f["moduleInfoList[" + d + "].content.tmpFileList"] = u, a.setData(f);
                        }
                    }
                } else wx.showModal({
                    title: "上传失败",
                    showCancel: !1,
                    content: p.msg,
                    success: function(a) {}
                }), wx.hideLoading();
            } else x = !0;
        },
        fail: function(a) {
            console.log(a), wx.hideLoading(), wx.showModal({
                title: "上传失败",
                showCancel: !1,
                content: "系统繁忙，请稍后重试！",
                success: function(a) {}
            });
        },
        complete: function(a) {
            x && (wx.hideLoading(), wx.showModal({
                title: "上传失败",
                showCancel: !1,
                content: "系统繁忙，请稍后重试！",
                success: function(a) {}
            }));
        }
    });
}, p.initAdvertising = function(a, o) {
    wx.getExtConfig({
        success: function(e) {
            if ("getExtConfig: ok" == e.errMsg) {
                var t = e.extConfig, p = (getApp().globalData, t.wxappRegUrl, t.wxappDomainUrl);
                wx.request({
                    url: p + "wxAppReg.jsp?cmd=getValidateSign",
                    data: {},
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        e.data.success && (a.setData({
                            wxappDomainUrl: p,
                            code: e.data.code,
                            sign: e.data.sign
                        }), o && o());
                    },
                    fail: function() {
                        wx.showModal({
                            title: "",
                            showCancel: !1,
                            content: "系统繁忙，请稍后再试",
                            success: function(a) {}
                        });
                    }
                });
            }
        }
    });
}, p.getValidateCode = function(a, o, e, t) {
    var p = e || "", i = t || "";
    wx.getExtConfig({
        success: function(e) {
            if ("getExtConfig: ok" == e.errMsg) {
                var t = e.extConfig, n = (getApp().globalData, t.wxappDomainUrl), d = a.data.phone;
                wx.request({
                    url: n + "wxAppReg.jsp?cmd=sendValidateCode&isNewSms=true",
                    data: {
                        cacct: d,
                        validateCode: p,
                        validateSign: i
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        o && o(a);
                    },
                    fail: function() {}
                });
            }
        }
    });
}, p.regCorpNew = function(a, o, e) {
    var i = wx.getStorageSync("verCodeSign");
    wx.getExtConfig({
        success: function(n) {
            if ("getExtConfig: ok" == n.errMsg) {
                var d = n.extConfig.wxappDomainUrl;
                wx.request({
                    url: d + "wxAppReg.jsp?cmd=regCorpNew",
                    data: {
                        cacct: e.phone,
                        pwd: t.hexMD5(e.password),
                        verCode: e.code,
                        companyGoal1: a.data.registerDataUse,
                        verCodeSign: i,
                        program: 1,
                        _ta: 210
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        a.data.success ? o && o(a) : ("验证码错误，请输入正确的验证码" == a.data.msg && p.logDog(7000055, 11), 
                        wx.showModal({
                            title: "",
                            showCancel: !1,
                            content: a.data.msg,
                            success: function(a) {}
                        }));
                    },
                    fail: function() {}
                });
            }
        }
    });
}, p.getCardConfig = function(a) {
    wx.getExtConfig({
        success: function(o) {
            if ("getExtConfig: ok" == o.errMsg) {
                var e = o.extConfig, t = getApp().globalData, p = t.wxappAid ? t.wxappAid : e.wxappAid, i = t.wxappId ? t.wxappId : e.wxappId, n = e.wxappDomain;
                wx.request({
                    url: n + "?cmd=getCardConfig",
                    data: {
                        wxappAid: p,
                        wxappId: i
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        var e = o.data;
                        e.success && (t.cardConfig = e.cardConfig, a && a());
                    },
                    fail: function() {
                        console.log("getCardConfig err");
                    }
                });
            }
        }
    });
}, p.getCardInfo = function(a, o, e) {
    function t(o) {
        var t = {
            cardId: a,
            wxappAid: o.wxappAid,
            wxappId: o.wxappId,
            wxappAppId: o.wxappAppId
        };
        void 0 !== e && (t.type = e), void 0 === i.openId ? wx.login({
            success: function(a) {
                "login:ok" == a.errMsg && (t.code = a.code, p(t, o.wxappDomain));
            }
        }) : (t.openId = i.openId, p(t, o.wxappDomain));
    }
    function p(a, e) {
        wx.request({
            url: e + "?cmd=getCardInfoV2",
            data: a,
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var e = a.data;
                e.success && o && o(e.data);
            },
            fail: function() {
                console.log("getCardInfo err");
            }
        });
    }
    var i = getApp().globalData;
    void 0 !== i.extConfigData && void 0 !== i.extConfigData.wxappAid ? (i.extConfigData, 
    t(i.extConfigData)) : wx.getExtConfig({
        success: function(a) {
            "getExtConfig: ok" == a.errMsg && t(a.extConfig);
        }
    });
}, p.getCardList = function(a) {
    wx.getExtConfig({
        success: function(o) {
            if ("getExtConfig: ok" == o.errMsg) {
                var e = o.extConfig, t = getApp().globalData, p = t.wxappAid ? t.wxappAid : e.wxappAid, i = t.wxappId ? t.wxappId : e.wxappId, n = e.wxappDomain;
                wx.request({
                    url: n + "?cmd=getCardList",
                    data: {
                        wxappAid: p,
                        wxappId: i
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        var e = o.data;
                        e.success && a && a(e.data);
                    },
                    fail: function() {
                        console.log("getCardInfo err");
                    }
                });
            }
        }
    });
}, p.getVisitedSimpleInfo = function(a) {
    function o(a) {
        var o = {
            wxappAid: a.wxappAid,
            wxappId: a.wxappId,
            wxappAppId: a.wxappAppId
        };
        void 0 !== p.openId ? (o.openId = p.openId, e(o, a.wxappDomain)) : wx.login({
            success: function(t) {
                "login:ok" == t.errMsg && (o.code = t.code, e(o, a.wxappDomain));
            }
        });
    }
    function e(o, e) {
        wx.request({
            url: e + "?cmd=getCardVisitSimpleInfo",
            data: o,
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                var e = o.data;
                e.success && (a && a(e.data), void 0 === p.openId && e.data.openId && (p.openId = e.data.openId));
            },
            fail: function() {
                console.log("getCardInfo err");
            }
        });
    }
    var t, p = getApp().globalData;
    void 0 !== p.extConfigData && void 0 !== p.extConfigData.wxappAid ? o(t = p.extConfigData) : wx.getExtConfig({
        success: function(a) {
            "getExtConfig: ok" == a.errMsg && o(t = a.extConfig);
        }
    });
}, module.exports = p;