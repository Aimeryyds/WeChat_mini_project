function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = require("../../../components/utils"), s = e(require("../../../components/circus/toast/toast")), o = e(require("../../../services/stockgroup/stockgroup")), a = require("../../../components/bridge"), c = e(require("../../../services/quote/quote")), n = e(require("../../../services/stockalert/stockalert")), i = require("../../../components/zxgroup-selector/index"), l = require("../../../comm-ui/modal/index"), h = Symbol();

getApp().View({
    beacon: {
        name: "批量编辑"
    },
    data: {
        groups: "",
        selectedGroup: !1,
        myselectedGrp: {
            gid: "0",
            name: "全部"
        },
        stockIds: "",
        stocks: [],
        selectStock: {
            choseOneId: "",
            choseAll: !1
        },
        selectStocks: "",
        selectStocksLength: "",
        loading: !0,
        columns: [ {
            label: "选择",
            nodeType: "checkbox",
            hiddenValue: 1,
            width: "102rpx",
            tdStyle: "\n        border-bottom: none;\n      "
        }, {
            dataIndex: "name",
            subDataIndex: "codeMarket",
            label: "股票名称",
            width: "260rpx"
        }, {
            dataIndex: "stock",
            key: "stockIcon",
            label: "预警",
            nodeType: "icon",
            iconType: "default-warning",
            hiddenValue: 1,
            imgIcon: !0,
            width: "129rpx"
        }, {
            dataIndex: "code",
            key: "codeIcon",
            label: "置顶",
            nodeType: "icon",
            iconType: "default-totop",
            hiddenValue: 1,
            imgIcon: !0,
            width: "129rpx"
        }, {
            dataIndex: "drop",
            key: "dropIcon",
            label: "拖动",
            nodeType: "icon",
            iconType: "drop",
            hiddenValue: 1,
            dragmarker: !0,
            imgIcon: !0,
            width: "129rpx"
        } ],
        moveable: !0,
        perItemHeight: 100,
        chose: !1,
        choseGroup: !1,
        isIphoneX: !1
    },
    events: {
        showGroups: {
            name: "展示所有分组",
            handler: function() {
                this.data.disableChoseAll || this.data.disableMove || (0, t.setData)(this, "selectedGroup", !this.data.selectedGroup);
            }
        },
        selectGroups: {
            name: "选择分组",
            handler: function(e) {
                var s = e.currentTarget.dataset, o = s.name, a = s.id;
                (0, t.setData)(this, "selectedGroup", !this.data.selectedGroup), (0, t.setData)(this, "myselectedGrp.name", o), 
                (0, t.setData)(this, "myselectedGrp.gid", a), (0, t.setData)(this, "selectStock.choseAll", !1), 
                (0, t.setData)(this, "choseGroup", !1), (0, t.setData)(this, "selectStocksLength", ""), 
                (0, t.setData)(this, "selectStocks", []), this.getGroupStocks();
            }
        },
        selectStocks: {
            name: "选择股票批量操作",
            handler: function(e) {
                var s = e.detail, o = [];
                s.map(function(e) {
                    e.checked && o.push(e);
                }), o.length == s.length ? (0, t.setData)(this, "selectStock.choseAll", !0) : (0, 
                t.setData)(this, "selectStock.choseAll", !1), (0, t.setData)(this, "selectStocks", o), 
                (0, t.setData)(this, "selectStocksLength", o.length), (0, t.setData)(this, "stocks", s);
            }
        },
        selAllStock: {
            name: "全选",
            handler: function() {
                var e = "", s = this.data.stocks;
                this.data.disableChoseAll || this.data.disableMove || (e = this.data.selectStock.choseAll, 
                e = !e, s.map(function(t) {
                    t.checked = e;
                }), (0, t.setData)(this, "selectStock.choseAll", e), (0, t.setData)(this, "stocks", s)), 
                1 == e ? ((0, t.setData)(this, "selectStocksLength", s.length), (0, t.setData)(this, "selectStocks", s)) : this.data.disableChoseAll || this.data.disableMove || ((0, 
                t.setData)(this, "selectStocksLength", ""), (0, t.setData)(this, "selectStocks", ""));
            }
        },
        batchMove: {
            name: "批量移动股票到分组",
            handler: function() {
                this.selMoveGroup();
            }
        },
        delStock: {
            name: "删除股票",
            handler: function() {
                this.delStocks();
            }
        },
        choseOtherGroup: {
            name: "从其他分组中同时删除",
            handler: function() {
                var e = !this.data.choseGroup;
                (0, t.setData)(this, "choseGroup", e);
            }
        }
    },
    onLoad: function(e) {
        this.isFirstTimeIn = !0, this.device(), (0, a.setNavigationBarTitle)({
            title: "编辑自选股"
        }), e && void 0 !== e.gid && (0, t.setData)(this, "myselectedGrp", e);
    },
    onShow: function() {
        this.getGroupStocks(h), this.getGroups();
    },
    getGroups: function() {
        var e = this;
        o.default.getGroupMeta(this, {
            detail: !1,
            showLoading: this.isFirstTimeIn
        }).then(function(t) {
            e.setData({
                groups: t.groups
            });
        });
    },
    getGroupStocks: function(e) {
        var a = this, c = (0, t.getData)(this, "myselectedGrp");
        o.default.getGroupStocks([ c ], this, {
            showLoading: this.isFirstTimeIn
        }).then(function(s) {
            var o = [];
            (s || []).forEach(function(e) {
                (e.stocks || []).forEach(function(e) {
                    o.push(e.id);
                });
            }), (0, t.setData)(a, "stockIds", o), a.getGroupQuotes(e);
        }).catch(function(e) {
            console.error("获取自选股失败:", e), s.default.show(a, "获取自选股失败");
        });
    },
    getGroupQuotes: function(e) {
        var s = this, o = (0, t.getData)(this, "stockIds");
        if (!o.length) return (0, t.setData)(this, "stocks", []), (0, t.setData)(this, "canShowNoRecord", !0), 
        !1;
        c.default.batch({
            data: {
                stocks: o
            },
            convertMarket: !1,
            scene: 1,
            showLoading: this.isFirstTimeIn
        }, this).done(function(t) {
            s.isFirstTimeIn = !1;
            var o = t.data.quotes;
            s.setStocks(o, e), e = h;
        });
    },
    setStocks: function(e, s) {
        var o = this, a = (e || []).map(function(e, s) {
            var o = (0, t.toMarket)(e.id.exchange), a = e.id.code + "." + o.toUpperCase();
            return {
                key: [ e.id.exchange, e.id.code ].join("_"),
                exchange: e.id.exchange,
                market: o,
                code: e.id.code,
                codeMarket: a,
                name: e.info.name,
                checked: !1
            };
        }), c = this.data.selectStocks, n = c.length;
        a.length ? (n && (a.map(function(e) {
            for (var t = 0; t < n; t++) e.code == c[t].code && (e.checked = !0);
        }), (0, t.setData)(this, "stocks", a)), a.map(function(e) {
            e.fullName = e.name, e.name = o.subString(e.name, 8);
        }), (0, t.setData)(this, "stocks", a)) : (0, t.setData)(this, "stocks", []), s == h && (0, 
        t.setData)(this, "canShowNoRecord", !0);
    },
    delStocks: function() {
        var e = this, a = this.data.myselectedGrp.gid, c = this.data.myselectedGrp.name, n = this.data.selectStocks || [], i = n.map(function(e) {
            return {
                code: e.code,
                exchange: e.exchange
            };
        }), h = [ {
            gid: a,
            name: c,
            stocks: i
        } ];
        !n.length || this.data.disableChoseAll || this.data.disableMove || ((0, t.setData)(this, "disableMove", !0), 
        0 == a ? ((0, t.setData)(this, "chose", !1), l({
            message: "确定从所有分组中删除已选股票？",
            selector: "#modal_includeOtherGroup",
            header: !1,
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(a) {
                o.default.delStocks(h, e).then(function() {
                    (0, t.setData)(e, "disableMove", !1), (0, t.setData)(e, "disableChoseAll", !1), 
                    e.getGroupStocks(), (0, t.setData)(e, "selectStock.choseAll", ""), (0, t.setData)(e, "selectStocksLength", ""), 
                    s.default.show(e, "删除成功");
                }), l.close({
                    selector: "#modal_includeOtherGroup"
                });
            },
            onCancel: function(s) {
                (0, t.setData)(e, "disableMove", !1), (0, t.setData)(e, "disableChoseAll", !1), 
                l.close({
                    selector: "#modal_includeOtherGroup"
                });
            }
        })) : ((0, t.setData)(this, "chose", !0), l({
            message: "确定从该分组中删除已选股票？",
            selector: "#modal_includeOtherGroup",
            header: !1,
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(a) {
                var c = [];
                c = e.data.choseGroup ? e.data.groups.map(function(e) {
                    return {
                        gid: e.gid,
                        name: e.name,
                        stocks: i
                    };
                }) : h, o.default.delStocks(c, e).then(function() {
                    (0, t.setData)(e, "disableMove", !1), (0, t.setData)(e, "disableChoseAll", !1), 
                    e.getGroupStocks(), (0, t.setData)(e, "selectStock.choseAll", ""), (0, t.setData)(e, "selectStocksLength", ""), 
                    (0, t.setData)(e, "choseGroup", !1), s.default.show(e, "删除成功");
                }), l.close({
                    selector: "#modal_includeOtherGroup"
                });
            },
            onCancel: function(s) {
                (0, t.setData)(e, "disableMove", !1), (0, t.setData)(e, "choseGroup", !1), l.close({
                    selector: "#modal_includeOtherGroup"
                });
            }
        })));
    },
    selMoveGroup: function() {
        var e = this, s = this.data.selectStocks;
        this.data.disableMove || this.data.disableChoseAll || ((0, t.setData)(this, "disableChoseAll", !0), 
        i({
            selector: "#selector",
            stocks: s,
            onConfirm: function(s) {
                1 != s.length ? (e.selectedGroupMove(s), e.getGroups()) : ((0, t.setData)(e, "disableChoseAll", !1), 
                (0, t.setData)(e, "disableMove", !1));
            },
            onCancel: function() {
                (0, t.setData)(e, "disableChoseAll", !1), (0, t.setData)(e, "disableMove", !1), 
                console.log("取消");
            }
        }));
    },
    selectedGroupMove: function(e) {
        var a = this, c = this.data.myselectedGrp, n = this.data.selectStocks.map(function(e) {
            return {
                code: e.code,
                exchange: e.exchange
            };
        });
        o.default.moveStocks(n, c, e, this).then(function() {
            a.getGroupStocks(), (0, t.setData)(a, "selectStock.choseAll", ""), (0, t.setData)(a, "selectStocksLength", ""), 
            (0, t.setData)(a, "selectStocks", []), s.default.show(a, "添加成功"), (0, t.setData)(a, "disableChoseAll", !1), 
            (0, t.setData)(a, "disableMove", !1);
        }).catch(function(e) {
            console.log(e);
        });
    },
    stocksToTop: function(e) {
        var t = this, s = this.data.myselectedGrp;
        o.default.setTopStock(e, s, this).then(function(e) {
            t.getGroupStocks();
        });
    },
    getAlertStocksStatus: function() {
        n.default.getAlert(null, this).then(function(e) {
            console.log("res>>>>", e);
        });
    },
    setAltertStocks: function(e) {
        (0, a.navigateTo)({
            url: "/pages/portal/stockwarning/stockwarning?code=" + e.code + "&exchange=" + e.exchange
        });
    },
    tableIconClick: function(e) {
        var t = e.detail, s = t.icon, o = {
            code: t.item.code,
            exchange: t.item.exchange
        };
        "default-totop" == s ? this.stocksToTop(o) : "default-warning" == s && this.setAltertStocks(o);
    },
    resortStocks: function(e, t) {
        o.default.resortStocks(e, t, this).then(function() {}).catch(function(e) {
            console.log(e);
        });
    },
    tableMove: function(e) {
        var t = e.detail, s = this.data.myselectedGrp;
        this.resortStocks(t, s);
    },
    subString: function(e, t) {
        var s = /[^\x00-\xff]/g;
        if (e.replace(s, "aa").length <= t) return e;
        for (var o = Math.floor(t / 2), a = e.length; o < a; o++) if (e.substring(0, o).replace(s, "aa").length >= t) return e.substring(0, o) + "...";
        return e;
    },
    reg: function(e, t) {
        var s = RegExp("" + e);
        s.test(t) && this.setData({
            isIphoneX: !0
        });
    },
    device: function() {
        var e = this, t = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone11" ];
        (0, a.getSystemInfo)().done(function(s) {
            var o = s.model;
            t.map(function(t) {
                e.reg(t, o);
            });
        });
    }
});