function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }
    return t;
}, o = require("../../../components/utils"), a = t(require("../../../components/msgstore")), n = t(require("../../../config")), s = require("../../../components/bridge"), i = t(require("../../../components/circus/toast/toast")), r = t(require("../../../services/quote/quote")), c = t(require("../../../services/stockgroup/stockgroup")), u = t(require("../../../services/stockgroup/syncstockgroup")), h = require("../../../comm-ui/modal/index"), d = Symbol("notInterval"), l = getApp();

l.View({
    beacon: {
        name: "自选",
        canShare: !0,
        shareOptions: {
            title: "广发证券行情",
            desc: "方便、快捷、及时、准确的证券市场行情和自选股服务",
            path: "/pages/quote/favourite/favourite"
        }
    },
    favourites: {},
    data: {
        stocks: {},
        group: {
            gid: "0",
            name: "全部"
        },
        view: {
            portHeight: 0,
            marginTop: 0,
            scrollTop: 0
        },
        tabs: {
            selectedId: "0",
            selectedName: "全部",
            list: [ {
                gid: "0",
                name: "全部"
            } ]
        },
        sort: {
            byLastPrice: "",
            byIncrease: "",
            styles: "line-height:12rpx;"
        },
        showLoginLink: !1,
        keepWX: !0,
        choseGroup: !1,
        guideBar: {
            show: !1
        }
    },
    events: {
        goSearch: {
            name: "搜索",
            handler: function() {
                (0, s.navigateTo)({
                    url: "/pages/quote/search/search?reserve=1"
                });
            }
        },
        goStock: {
            name: "个股行情",
            handler: function(t) {
                if (!this.data.lock) {
                    var e = t.currentTarget.dataset, o = e.exchange, a = e.code, n = e.name;
                    (0, s.navigateTo)({
                        url: "/pages/quote/timeseries/timeseries?exchange=" + o + "&code=" + a + "&name=" + encodeURIComponent(n)
                    });
                }
            }
        },
        goGroup: {
            name: "分组管理",
            handler: function(t) {
                (0, s.navigateTo)({
                    url: "/pages/portal/group/group"
                });
            }
        },
        actionSheet: {
            handler: function(t) {
                if (!(0, o.getData)(this, "lock")) {
                    var e = this;
                    this.setData({
                        lock: !0
                    }), wx.showActionSheet({
                        itemList: [ "删除", "置顶", "批量编辑" ],
                        success: function(a) {
                            var n = t.currentTarget.dataset, s = (0, o.getData)(e, "group");
                            n && (0 == a.tapIndex && e.deleteStocks(n, s), 1 == a.tapIndex && e.setStockToTop(n, s), 
                            2 == a.tapIndex && e.batchEdit());
                        },
                        complete: function() {
                            e.setData({
                                lock: !1
                            });
                        }
                    });
                }
            }
        },
        handleSortByLastPrice: {
            name: "最新价排序",
            handler: function() {
                (0, o.setData)(this, "sort.byIncrease", "");
                var t = (0, o.getData)(this, "sort.byLastPrice"), e = void 0;
                t ? "up" == t ? e = "down" : "down" == t && (e = "") : e = "up", (0, o.setData)(this, "sort.byLastPrice", e), 
                this.getGroupQuotes(d);
            }
        },
        handleSortByIncrease: {
            name: "涨跌幅排序",
            handler: function() {
                (0, o.setData)(this, "sort.byLastPrice", "");
                var t = (0, o.getData)(this, "sort.byIncrease"), e = void 0;
                t ? "up" == t ? e = "down" : "down" == t && (e = "") : e = "up", (0, o.setData)(this, "sort.byIncrease", e), 
                this.getGroupQuotes(d);
            }
        },
        tabchange: {
            name: "切换分组",
            handler: function(t) {
                var e = t.detail, a = this.favourites[e.gid];
                (0, o.setData)(this, "canShowNoRecord." + e.gid, void 0 !== a), (0, o.setData)(this, "stocks." + e.gid, a || []), 
                (0, o.setData)(this, "group", e), this.getGroupStockIds();
            }
        },
        choseOtherGroup: {
            name: "是否选择其他分组删除",
            handler: function() {
                var t = !this.data.choseGroup;
                (0, o.setData)(this, "choseGroup", t);
            }
        },
        cancelAdd: {
            name: "关闭导航条",
            handler: function() {
                var t = {
                    show: !1,
                    timestamp: Date.now()
                };
                (0, s.setStorageSync)("GUIDE_BAR", t), (0, o.setData)(this, "guideBar.show", !1);
            }
        },
        handleSyncQuote: {
            name: "同步自选",
            handler: function() {}
        }
    },
    exeOnload: !1,
    onLoad: function() {
        this.favourites = {};
        var t = (0, s.getStorageSync)("GUIDE_BAR");
        if (t) {
            var e = (Date.now() - t.timestamp || 0) > 24192e5;
            (!1 !== t.show || e) && (0, o.setData)(this, "guideBar.show", !0), Object.assign(t, {
                timestamp: Date.now()
            }), (0, s.setStorageSync)("GUIDE_BAR", t);
        } else (0, o.setData)(this, "guideBar.show", !0);
        (0, s.setNavigationBarTitle)({
            title: this.beacon.name
        }), this.addPortalLoginListener(), this.quotes = {};
        var a = (0, s.getStorageSync)("SNI_APPLET_FAVOURITES_V2");
        a.length && (0, o.setData)(this, "stocks." + this.data.tabs.list[0].gid, a), this.saveOldLocalStocks();
    },
    onShow: function() {
        var t = this;
        this.shouldShowLoginLink(), this.exeOnload && this.getGroupMeta(), (0, s.getSystemInfo)().done(function(e) {
            var a = e.system, n = e.windowHeight;
            -1 == (a || "").toUpperCase().indexOf("IOS") ? (0, o.setData)(t, "view.system", "IOS") : (0, 
            o.setData)(t, "view.system", "OTHERS"), t.setPortHeight(n);
        });
    },
    onHide: function() {
        this.exeOnload = !0, this.stopIntervalUpdateQuotes();
    },
    onUnload: function() {
        a.default.off("portal:login", this.confirmSyncStockGroup), this.onHide();
    },
    saveOldLocalStocks: function() {
        var t = this, a = ((0, s.getStorageSync)("SNI_APPLET_FAVOURITES") || []).filter(function(t) {
            return t.market && t.code;
        }).map(function(t) {
            return e({}, t, {
                exchange: (0, o.toExchange)(t.market)
            });
        });
        a.length ? l.onOauth(function() {
            c.default.getGroupMeta(t, {
                detail: !1
            }).then(function() {
                return c.default.addStocks([ {
                    gid: "0",
                    name: "全部",
                    stocks: a
                } ], t);
            }).then(function(t) {
                return c.default.getGroupStocks([ {
                    gid: "0",
                    name: "全部"
                } ]);
            }).then(function(e) {
                var o = e && e[0].stocks, n = a.filter(function(t) {
                    return !o.find(function(e) {
                        return t.code == e.id.code && t.exchange == e.id.exchange;
                    });
                });
                (0, s.setStorageSync)("SNI_APPLET_FAVOURITES", n), t.getGroupMeta();
            });
        }) : this.getGroupMeta();
    },
    onImageErr: function(t) {
        var e = this, a = (0, o.getProp)(t, "target.dataset.exchange"), n = (0, o.getProp)(t, "target.dataset.code"), s = (0, 
        o.getData)(this, "group");
        ((0, o.getData)(this, "stocks." + s.gid) || []).forEach(function(t, i) {
            if (t.exchange == a && t.code == n) {
                var r = t.type, c = e.getDefaultLogo(r);
                (0, o.setData)(e, "stocks." + s.gid + "[" + i + "].logo", c);
            }
        });
    },
    getDefaultLogo: function(t) {
        var e = t === o.QUOTETYPE.index, a = t === o.QUOTETYPE.us_secu, n = t === o.QUOTETYPE.hkstock;
        return e ? "./icon_index.png" : a ? "./icon_us.png" : n ? "./icon_hk.png" : "./icon_incn.png";
    },
    setTabScrollPosition: function() {
        var t = (0, o.getData)(this, "group"), e = this.selectComponent("#tab"), a = wx.createSelectorQuery().in(e);
        a.select("#item-" + t.gid).boundingClientRect(), a.select("#scroll-view").boundingClientRect(), 
        a.select("#scroll-view").scrollOffset(), a.exec(function(t) {
            e.setData({
                scrollLeft: t[2].scrollLeft + t[0].left + t[0].width / 2 - t[1].width / 2
            });
        });
    },
    setPortHeight: function(t) {
        var e = this, a = this.getElementHeight(".top-bar"), n = this.getElementHeight(".sort-bar");
        Promise.all([ a, n ]).then(function(a) {
            (0, o.setData)(e, "view.portHeight", t - a[0] - a[1]);
        }).catch(function(t) {
            console.error("setPortHeight error", t);
        });
    },
    getElementHeight: function(t) {
        var e = wx.createSelectorQuery();
        return new Promise(function(o) {
            e.select(t).boundingClientRect(function(t) {
                o(t.height);
            }).exec();
        });
    },
    getIndex: function(t) {
        for (var e = t.exchange, a = t.code, n = (0, o.getData)(this, "group"), s = (0, 
        o.getData)(this, "stocks." + n.gid) || [], i = 0, r = s.length; i < r; i++) {
            var c = s[i];
            if (c.exchange == e && c.code == a) return i;
        }
        return -1;
    },
    getGroupMeta: function() {
        var t = this;
        l.onOauth(function() {
            c.default.getGroupMeta(t, {
                detail: !1
            }).then(function(e) {
                var a = [], n = void 0;
                e.groups.forEach(function(t) {
                    var e = t.gid, o = t.cname;
                    a.push({
                        gid: e,
                        name: o
                    });
                }), a.forEach(function(e) {
                    e.gid == t.data.group.gid && (n = e);
                }), n || (n = a[0], (0, o.setData)(t, "tabs.selectedId", a[0].gid)), (0, o.setData)(t, "group", n), 
                (0, o.setData)(t, "tabs.list", a || []), t.getGroupStockIds(), t.setTabScrollPosition();
            }).catch(function(e) {
                console.error("获取自选分组失败", e), i.default.show(t, "获取自选股分组失败");
            });
        });
    },
    getGroupStockIds: function(t) {
        var e = this, a = (0, o.getData)(this, "group");
        c.default.getGroupStocks([ a ], this, t).then(function(t) {
            var o = [];
            (t || []).forEach(function(t) {
                (t.stocks || []).forEach(function(t) {
                    o.push(t.id);
                });
            }), e.stockIds = o, e.getGroupQuotes(d, a.gid);
        }).catch(function(t) {
            console.error("获取自选股失败:", t), i.default.show(e, "获取自选股失败");
        });
    },
    getGroupQuotes: function(t, e) {
        var a = this;
        this.loadingType = t;
        var n = this.stockIds;
        if (!n.length) return (0, o.setData)(this, "stocks." + e, []), (0, o.setData)(this, "canShowNoRecord." + e, !0), 
        this.favourites[e] = [], "0" === String(e) && (0, s.setStorageSync)("SNI_APPLET_FAVOURITES_V2", []), 
        this.stopIntervalUpdateQuotes(), !1;
        r.default.batch({
            data: {
                stocks: n
            },
            convertMarket: !1
        }).done(function(o) {
            var n = o.data.quotes;
            a.dealStocks(n, e), t === d && a.reStartIntervalUpdateQuotes();
        }).fail(function(t) {
            var o = t.header, n = t.statusCode, s = o["Access-Ret"];
            500 === n && "1000" === s && (a.dealStocks([], e), a.stopIntervalUpdateQuotes());
        });
    },
    dealStocks: function(t, e) {
        var a = this, n = (0, o.getData)(this, "group"), s = this.specialStockIds = JSON.parse(JSON.stringify(this.stockIds));
        e = void 0 === e ? n.gid : e;
        var i = (t || []).map(function(t) {
            var o = t.id, n = void 0 === o ? {} : o, i = n.exchange, r = n.code;
            return s.find(function(t, e) {
                if (t.exchange === i && t.code === r) return s.splice(e, 1), !0;
            }), a.getQuote(t, e);
        });
        s.length ? this.dealSpecialStocks(i, e) : this.setStocks(i, e);
    },
    getQuote: function(t, e) {
        var a = t.id, n = void 0 === a ? {} : a, s = t.data, i = void 0 === s ? {} : s, r = t.info, c = void 0 === r ? {} : r, u = t.price_base, h = void 0 === u ? 2 : u, d = n.exchange, l = n.code, g = (this.favourites[e] || []).find(function(t) {
            return l == t.code && d == t.exchange;
        });
        if (!g) {
            var f = i.type, p = this.getTagList("", d), S = c.name, v = (0, o.logo)({
                type: f,
                exchange: d,
                code: l
            });
            (g = {
                exchange: d,
                code: l,
                type: f,
                logo: v,
                name: S,
                tagList: p
            }).fontSize = this.computeFontSize(S);
        }
        var m = Math.pow(10, h), k = "" + (0, o.getSign)(i.change) + (0, o.getScaledNumber)(i.roc, 100, 2), I = (0, 
        o.getScaledNumber)(i.now, m, h);
        return g.now = {
            text: I,
            color: (0, o.getColor)(i.change),
            fontSize: this.computeFontSize(I)
        }, g.rise = {
            text: 1 == i.trading_status ? "停牌" : k + "%",
            color: (0, o.getColor)(i.change),
            number: 1 == i.trading_status ? 0 : k
        }, g;
    },
    dealSpecialStocks: function(t, e) {
        var o = this, a = [];
        (this.specialStockIds || []).forEach(function(n) {
            var s = n.exchange, i = n.code, r = (o.favourites[e] || []).find(function(t) {
                return i === t.code && s === t.exchange;
            });
            r ? o.insertStock(t, n, r) : a.push(n);
        }), a.length ? r.default.querymeta({
            ids: a
        }).done(function(a) {
            (a.data && a.data.metas || []).forEach(function(a) {
                var n = o.getQuote(a, e);
                o.insertStock(t, a.id, n);
            }), o.setStocks(t, e);
        }).fail(function(t) {
            console.log("querymeta err", t);
        }) : this.setStocks(t, e);
    },
    insertStock: function(t, e, o) {
        var a = e.exchange, n = e.code, s = this.stockIds.findIndex(function(t) {
            return t.exchange === a && t.code === n;
        });
        t.splice(s, 0, o);
    },
    setStocks: function(t, e) {
        var a = (0, o.getData)(this, "sort");
        a.byLastPrice ? t = this.sortStocksByLastPrice(t) : a.byIncrease && (t = this.sortStocksByIncrease(t)), 
        (0, o.setData)(this, "stocks." + e, t || []), this.favourites[e] = t || [], this.loadingType === d && ((0, 
        o.setData)(this, "canShowNoRecord." + e, !0), "0" === String(e) && (0, s.setStorageSync)("SNI_APPLET_FAVOURITES_V2", t));
    },
    sortStocksByLastPrice: function(t) {
        var e = (0, o.getData)(this, "sort");
        return (t || []).sort(function(t, o) {
            return "up" == e.byLastPrice ? Number(t.now.text) - Number(o.now.text) : Number(o.now.text) - Number(t.now.text);
        });
    },
    sortStocksByIncrease: function(t) {
        var e = (0, o.getData)(this, "sort");
        return (t || []).sort(function(t, o) {
            var a = Number(t.rise.number), n = Number(o.rise.number);
            return "up" == e.byIncrease ? a - n : n - a;
        });
    },
    startIntervalUpdateQuotes: function() {
        (this.intervalids = []).push(setInterval(this.getGroupQuotes.bind(this), n.default.REFRESH_INTERVAL));
    },
    stopIntervalUpdateQuotes: function() {
        this.intervalids && this.intervalids.forEach(function(t) {
            clearInterval(t);
        });
    },
    reStartIntervalUpdateQuotes: function() {
        this.stopIntervalUpdateQuotes(), this.startIntervalUpdateQuotes();
    },
    addPortalLoginListener: function() {
        a.default.on("portal:login", this.confirmSyncStockGroup);
    },
    confirmSyncStockGroup: function() {
        var t = this;
        h({
            title: "同步广发通自选",
            header: !0,
            selector: "#modal_sync",
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function() {
                u.default.sync({
                    keepWX: t.data.keepWX
                }, t).then(function() {
                    t.getGroupMeta(), h.close({
                        selector: "#modal_sync"
                    }), i.default.show(t, "同步成功");
                }).catch(function(e) {
                    var o = e.msg;
                    h.close({
                        selector: "#modal_sync"
                    }), i.default.show(t, o || "同步失败，请稍候再试");
                });
            },
            onCancel: function(e) {
                t.setData({
                    keepWX: !0
                }), h.close({
                    selector: "#modal_sync"
                });
            }
        }, this);
    },
    onKeepWXchange: function(t) {
        this.setData({
            keepWX: t.detail.checked
        });
    },
    shouldShowLoginLink: function() {
        var t = this;
        l.onOauth(function(e) {
            e.portal ? t.setData({
                showLoginLink: !1
            }) : t.setData({
                showLoginLink: !0
            });
        });
    },
    deleteStocks: function(t, e) {
        var a = this;
        0 == e.gid ? ((0, o.setData)(this, "chose", !1), h({
            message: "确定从所有分组中删除已选股票？",
            selector: "#modal_delete",
            header: !1,
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(o) {
                c.default.delStocks([ {
                    gid: e.gid,
                    name: e.name,
                    stocks: [ t ]
                } ], a).then(function() {
                    i.default.show(a, "已成功"), a.getGroupStockIds();
                }), h.close({
                    selector: "#modal_delete"
                });
            },
            onCancel: function(t) {
                h.close({
                    selector: "#modal_delete"
                });
            }
        })) : ((0, o.setData)(this, "chose", !0), h({
            message: "确定从该分组中删除已选股票？",
            selector: "#modal_delete",
            header: !1,
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(n) {
                var s = [];
                s = a.data.choseGroup ? a.data.tabs.list.map(function(e) {
                    return {
                        gid: e.gid,
                        name: e.name,
                        stocks: [ t ]
                    };
                }) : [ {
                    gid: e.gid,
                    name: e.name,
                    stocks: [ t ]
                } ], c.default.delStocks(s, a).then(function() {
                    a.getGroupStockIds(), (0, o.setData)(a, "choseGroup", !1), i.default.show(a, "删除成功");
                }), h.close({
                    selector: "#modal_delete"
                });
            },
            onCancel: function(t) {
                (0, o.setData)(a, "choseGroup", !1), h.close({
                    selector: "#modal_delete"
                });
            }
        }));
    },
    setStockToTop: function(t, e) {
        var a = this;
        if (!this.getIndex(t)) return i.default.show(this, "到顶了"), !1;
        (0, o.setData)(this, "sort.byLastPrice", ""), (0, o.setData)(this, "sort.byIncrease", ""), 
        c.default.setTopStock(t, e, this).then(function() {
            i.default.show(a, "已成功"), a.getGroupStockIds();
        }).catch(function() {
            return i.default.show(a, "置顶失败");
        });
    },
    batchEdit: function() {
        (0, o.setData)(this, "sort.byLastPrice", ""), (0, o.setData)(this, "sort.byIncrease", "");
        var t = this.data.group.gid, e = this.data.group.name;
        (0, s.navigateTo)({
            url: "/pages/quote/batchedit/batchedit?gid=" + t + "&name=" + e
        });
    },
    computeFontSize: function(t) {
        var e = /[^\x00-\xff]/g;
        return (t = t.replace(e, "aa")).length > 12 ? 24 : t.length > 8 ? 28 : "";
    },
    getTagList: function(t, e) {
        var a = [];
        if (12 === t) a.push(o.TAG_OPTIONS.kcb); else switch (e) {
          case o.MARKETS.sh:
            a.push(o.TAG_OPTIONS.sh);
            break;

          case o.MARKETS.sz:
            a.push(o.TAG_OPTIONS.sz);
            break;

          case o.MARKETS.neeq:
            a.push(o.TAG_OPTIONS.neeq);
            break;

          case o.MARKETS.hk:
          case o.MARKETS.shgt:
          case o.MARKETS.szgt:
            a.push(o.TAG_OPTIONS.hk);
            break;

          case o.MARKETS.nyse:
          case o.MARKETS.nasdaq:
            a.push(o.TAG_OPTIONS.us);
        }
        return a;
    }
});