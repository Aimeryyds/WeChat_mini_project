function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

require("../../../components/bridge"), e(require("../../../services/portal/login"));

var o = require("../../../components/utils"), n = (e(require("../../../components/http")), 
e(require("../../../services/stockgroup/stockgroup"))), a = (e(require("../../../services/stockalert/stockalert")), 
e(require("./stockgroupdemo.js")), e(require("../../../components/msgstore"))), c = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t.default = e, t;
}(require("../../../services/stockgroup/constant")), l = e(require("../../../services/stockgroup/syncstockgroup")), r = require("../../../comm-ui/modal/index"), i = require("../../../components/zxgroup-selector/index"), s = getApp();

Page({
    data: {
        tabconf: {
            scroll: !0,
            list: [ {
                id: "fdsfx123",
                title: "tab1"
            }, {
                id: "adfdas",
                title: "tab2"
            }, {
                id: "aaaaads",
                title: "tab3"
            }, {
                id: "1",
                title: "tab4"
            }, {
                id: "2",
                title: "tab5aaaa"
            }, {
                id: "3",
                title: "tab6sdf"
            } ],
            selectedId: "fdsfx123",
            height: 68,
            fixed: !1,
            "active-tab-class": "on"
        },
        groupList: [ {
            gid: "xxx",
            name: "123",
            selected: !0
        } ],
        x: 0,
        y: 0,
        items: [ {
            color: "blue"
        }, {
            color: "orange"
        }, {
            color: "green"
        } ],
        perItemHeight: 100,
        moveable: !0,
        dataSource: [ {
            key: 1,
            stock: "haha",
            code: "000001",
            price: 12
        }, {
            key: 2,
            stock: "ddd",
            code: "000003",
            price: 2
        }, {
            key: 3,
            stock: "vanke",
            code: "000004",
            price: 4
        } ],
        columns: [ {
            dataIndex: "stock",
            subDataIndex: "code",
            label: "股票",
            sortable: !0,
            asc: !0,
            width: "220rpx",
            tdStyle: "color: red;"
        }, {
            dataIndex: "price",
            label: "价格"
        }, {
            dataIndex: "key",
            label: "操作",
            hiddenValue: 1
        }, {
            label: "选择",
            nodeType: "checkbox"
        }, {
            dataIndex: "stock",
            key: "nameIcon",
            label: "删除",
            nodeType: "icon",
            dragmarker: !1,
            iconType: "delete"
        }, {
            dataIndex: "price",
            key: "priceIcon",
            label: "价格图标",
            nodeType: "icon",
            iconType: "drop",
            dragmarker: !0,
            imgIcon: !0,
            hiddenValue: 4
        } ],
        trStyle: "\n      font-size: 24rpx;\n      color: red;\n      border-bottom: 2px solid;\n    ",
        exchanges: [ {
            label: "深市",
            value: c.EXCHANGE_SZSE
        }, {
            label: "上海",
            value: c.EXCHANGE_SSE
        } ],
        accountTypes: [ {
            label: "写入小程序账户",
            value: c.ACCOUNT_WX,
            name: "wx"
        }, {
            label: "写入广发通账户",
            value: c.ACCOUNT_GFT,
            name: "gft"
        } ],
        groups: []
    },
    handleTabChange: function(e) {
        console.log("选中 tab", e);
    },
    onLoad: function() {
        var e = this;
        console.log((0, o.formatDate)(new Date(), "yyyy-MM-dd")), global.formatDate = o.formatDate, 
        s.onOauth(function() {
            e.addPortalLoginListener(), n.default.getGroupMeta(e).then(function(t) {
                return console.log("gropmeta", t), e.setData({
                    "groups.wx": t.groups
                }), t.groups;
            }).then(function() {}), n.default.getGroupMeta(e, {
                accountType: c.ACCOUNT_GFT
            }).then(function(t) {
                e.setData({
                    "groups.gft": t.groups
                });
            });
        });
    },
    showDialog: function() {
        r({
            title: "一个框",
            selector: "#modal_1",
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(e) {
                console.log("点击onConfirm", e.type, e), r.close({
                    selector: "#modal_1"
                });
            },
            onCancel: function(e) {
                return console.log("点击onCancel", e.type, e);
            }
        });
    },
    showGFTSelector: function() {
        this.showSelector({
            accountType: c.ACCOUNT_GFT
        });
    },
    showSelector: function(e) {
        var t = e.accountType;
        i({
            accountType: t,
            stocks: [ {
                exchange: 105,
                code: "300469"
            } ],
            selector: "#selector",
            onConfirm: function(e) {
                console.log("选择了", e);
            },
            onCancel: function() {
                console.log("取消");
            }
        });
    },
    posChange: function(e) {
        console.log("posChange", e.detail.position.y, Math.ceil(e.detail.position.y / 100));
        var t = this.data.items, o = e.currentTarget.dataset.idx, n = t.splice(o, 1);
        if (n.length > 0) {
            var a = n[0], c = e.detail.position.y, l = Math.ceil(c / 100);
            l = Math.min(l, t.length), l = Math.max(l, 0), console.log(e, o, l), t.splice(l, 0, a), 
            this.setData({
                items: t
            });
        }
    },
    initMove: function(e) {
        var t = e.currentTarget.dataset.idx;
        this.setData({
            moveItemIdex: t
        }), console.log("idx", t);
    },
    tableMove: function(e) {
        console.log("talbe has been move", e);
    },
    tableCheckedChange: function(e) {
        console.log("table checked change", e);
    },
    tableIconClick: function(e) {
        console.log("图标被点击了", e), this.setData({
            moveable: !0
        });
    },
    addPortalLoginListener: function() {
        var e = this;
        a.default.on("portal:login", function(t) {
            e.confirmSyncStockGroup();
        });
    },
    confirmSyncStockGroup: function() {
        var e = this;
        console.log("登录ok"), r({
            title: "保留微信自选",
            selector: "#modal_1",
            showCustomBtns: !0,
            buttons: [ {
                type: "YES",
                text: "保留"
            }, {
                type: "NO",
                text: "不保留"
            } ],
            autoClose: !1
        }, this).then(function(t) {
            "YES" === t.type ? l.default.sync({}, e) : l.default.sync({
                keepWX: !1
            }, e);
        });
    },
    bindPicker: function(e) {
        var o = e.target.dataset.picker;
        this.setData(t({}, o + "Index", e.detail.value));
    },
    addStock: function() {
        var e = this.data, t = e.groups, o = e.groupIndex, a = e.accountTypes, c = e.accountTypeIndex, l = e.exchanges, r = e.exchangeIndex, i = e.code, s = t[a[c].name][o], u = a[c].value, d = l[r].value;
        s.stocks = [ {
            code: i,
            exchange: d
        } ], n.default.addStocks([ s ], this, {
            accountType: u
        }).then(console.log);
    },
    bindinput: function(e) {
        var o = e.target.dataset.key;
        this.setData(t({}, o, e.detail.value));
    }
});