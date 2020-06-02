function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = require("../../../components/utils"), a = e(require("../../../components/event")), o = e(require("../../../services/quote/quote")), n = e(require("../../../services/stockalert/stockalert")), i = require("../../../components/bridge"), s = e(require("../../../components/circus/toast/toast")), r = require("../../../comm-ui/modal/index");

require("../../../components/zxgroup-selector/index");

getApp().View(Object.assign({
    beacon: {
        name: "股票提醒设置"
    },
    data: {
        all: [],
        reList: [],
        groupList: [ {
            gid: "xxx",
            name: "123",
            selected: !0
        } ],
        x: 0,
        y: 0,
        list: [],
        dataSource: [],
        perItemHeight: 100,
        moveable: !0,
        columns: [ {
            dataIndex: "name",
            width: "180rpx",
            asc: !0,
            tdStyle: "border-bottom:0;margin-left:30rpx"
        }, {
            dataIndex: "code",
            width: "360rpx",
            tdStyle: "color: #999;border-bottom:0;"
        }, {
            dataIndex: "names",
            key: "nameIcons",
            width: "116rpx",
            nodeType: "icon",
            iconType: "warnedit",
            imgIcon: !0,
            tdStyle: "border-bottom:0;"
        }, {
            dataIndex: "name",
            key: "nameIcon",
            width: "36rpx",
            nodeType: "icon",
            iconType: "warndelete",
            imgIcon: !0,
            tdStyle: "border-bottom:0;"
        } ],
        deleteOnoff: !1,
        content: "",
        inputVal: "",
        arrName: [],
        message: !1
    },
    events: {},
    tableIconClick: function(e) {
        var t = {
            exchange: e.detail.item.exchange,
            code: e.detail.item.code
        };
        "warnedit" == e.detail.icon ? (0, i.navigateTo)({
            url: "/pages/portal/stockwarning/stockwarning?exchange=" + t.exchange + "&code=" + t.code
        }) : "warndelete" == e.detail.icon && this.showDialog(t);
    },
    onLoad: function() {
        this.isFirstTimeIn = !0, this.message(), (0, i.setNavigationBarTitle)({
            title: "股票提醒设置"
        });
    },
    quoteMessage: function(e, a) {
        var n = this;
        this.data.code = e.code, this.data.exchange = e.exchange, this.data.market = (0, 
        t.toMarket)(e.exchange);
        var i = {
            data: {
                market: (0, t.toMarket)(e.exchange),
                code: e.code
            }
        };
        o.default.quote(i).then(function(t) {
            var o = t.data.quote.info;
            e.key = a + 1, e.name = o.name, n.data.dataSource.push(e), n.setData({
                dataSource: n.data.dataSource
            });
        });
    },
    deletemsg: function(e) {
        var t = this;
        n.default.delAlert(e, this).then(function(e) {
            s.default.show(t, "删除成功"), t.data.dataSource = [], t.message();
        });
    },
    message: function() {
        var e = this;
        n.default.getAlert(null, this, {
            showLoading: this.isFirstTimeIn
        }).then(function(t) {
            if (e.isFirstTimeIn = !1, t.length) {
                e.data.message = !1, e.setData({
                    message: e.data.message
                });
                var a = [];
                t.map(function(e) {
                    a.push(e.id);
                }), a.map(function(t, a) {
                    e.quoteMessage(t, a);
                });
            } else e.data.dataSource = [], e.data.message = !0, e.setData({
                message: e.data.message
            }), e.setData({
                dataSource: e.data.dataSource
            });
        });
    },
    showDialog: function(e) {
        var t = this;
        r({
            title: "确认删除？",
            selector: "#modal_1",
            showCancelButton: !0,
            autoClose: !1,
            header: "true",
            onConfirm: function(a) {
                t.deletemsg(e), r.close({
                    selector: "#modal_1"
                });
            },
            onCancel: function(e) {
                r.close({
                    selector: "#modal_1"
                });
            }
        });
    }
}, a.default));