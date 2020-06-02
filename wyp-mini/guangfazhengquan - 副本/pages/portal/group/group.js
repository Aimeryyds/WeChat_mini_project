function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../services/stockgroup/stockgroup")), o = e(require("../../../components/circus/toast/toast.js")), n = require("../../../components/bridge"), a = require("../../../comm-ui/modal/index");

Page({
    beacon: {
        name: "分组管理"
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
        perItemHeight: 100,
        moveable: !0,
        dataSource: [],
        columns: [ {
            dataIndex: "cname",
            label: "分组名称",
            width: "374rpx",
            key: "cnames"
        }, {
            dataIndex: "gid",
            key: "editIcon",
            label: "编辑",
            nodeType: "icon",
            iconType: "edit",
            imgIcon: !0,
            hiddenValue: "0",
            width: "125rpx",
            dispaly: !0
        }, {
            dataIndex: "gid",
            key: "delIcon",
            label: "删除",
            nodeType: "icon",
            iconType: "delete",
            imgIcon: !0,
            hiddenValue: "0",
            width: "125rpx",
            dispaly: !0
        }, {
            dataIndex: "gid",
            key: "dropIcon",
            label: "拖动",
            nodeType: "icon",
            iconType: "drop",
            dragmarker: !0,
            imgIcon: !0,
            width: "125rpx",
            dispaly: !1
        } ],
        deleteOnoff: !1,
        content: "",
        inputVal: "",
        isIphoneX: !1
    },
    loadMessage: function() {
        var e = this;
        t.default.getGroupMeta(this, {
            showLoading: this.isFirstTimeIn,
            detail: !1
        }).then(function(t) {
            e.isFirstTimeIn = !1;
            var o = t.groups.map(function(e) {
                return e.key = e.gid, e;
            });
            e.setData({
                dataSource: o
            });
        }).catch(function(e) {
            console.log(e);
        });
    },
    onLoad: function() {
        this.isFirstTimeIn = !0, this.device(), this.loadMessage(), (0, n.setNavigationBarTitle)({
            title: "分组管理"
        });
    },
    reg: function(e, t) {
        var o = RegExp("" + e);
        o.test(t) && this.setData({
            isIphoneX: !0
        });
    },
    device: function() {
        var e = this, t = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone11" ];
        (0, n.getSystemInfo)().done(function(o) {
            var n = o.model;
            t.map(function(t) {
                e.reg(t, n);
            });
        });
    },
    newObj: function(e) {
        var t = {};
        return t.name = e.name, t.gid = e.gid, t;
    },
    addGroup: function(e) {
        var o = this;
        t.default.addGroups([ {
            name: e
        } ], this).then(function(e) {
            o.loadMessage();
        }).catch(function(e) {
            console.log(e);
        });
    },
    renameGroup: function(e, o) {
        var n = this, a = {}, i = e.detail.item;
        a.name = o, a.gid = i.gid, t.default.renameGroup(a, this).then(function(e) {
            n.loadMessage(), console.log(e);
        }).catch(function(e) {
            console.log(e);
        });
    },
    delStocks: function(e) {
        var o = this;
        t.default.delGroups([ e ], this).then(function(e) {
            o.setData({
                deleteOnoff: !0
            });
            var t = 3, n = setInterval(function() {
                --t <= 0 && (o.setData({
                    deleteOnoff: !1
                }), clearInterval(n));
            }, 1e3);
        });
    },
    hanleinp: function(e) {
        var t = this.escapeHTML(e.detail.value).trim();
        this.setData({
            inputVal: t
        });
    },
    escapeHTML: function(e) {
        return e.replace(/[&<>'"]/g, "");
    },
    showDialog: function(e) {
        var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.data.content;
        this.setData({
            content: !0
        }), a({
            title: "请输入自选股分组名称",
            message: "",
            selector: "#modal_1",
            header: !0,
            showCancelButton: !0,
            autoClose: !1,
            bottom: !0,
            onConfirm: function(i) {
                var s = t.data.inputVal;
                s ? s && s.length < 7 ? (n ? t.addGroup(s) : t.renameGroup(e, s), t.setData({
                    inputVal: ""
                })) : o.default.show(t, "输入的名字过长") : o.default.show(t, "输入的名字不能为空"), a.close({
                    selector: "#modal_1"
                });
            },
            onCancel: function(e) {
                a.close({
                    selector: "#modal_1"
                });
            }
        });
    },
    resortGroups: function(e) {
        t.default.resortGroups(e, this).then(function(e) {});
    },
    showConfirm: function(e, t) {
        var o = this;
        this.data.content;
        this.setData({
            content: ""
        }), a({
            message: "确认删除该分组及分组内所有股票？",
            selector: "#modal_1",
            header: !0,
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(e) {
                o.delStocks(t), o.loadMessage(), a.close({
                    selector: "#modal_1"
                });
            },
            onCancel: function(e) {
                a.close({
                    selector: "#modal_1"
                });
            }
        });
    },
    tableMove: function(e) {
        console.log("talbe has been move", e);
        var t = [];
        e.detail.map(function(e) {
            t.push(e.gid);
        }), this.resortGroups(t);
    },
    tableIconClick: function(e) {
        this.setData({
            moveable: !0
        });
        var t = e.detail.item, o = this.newObj(t), n = e.detail.icon;
        "edit" == n ? (this.showDialog(e, !1), this.loadMessage()) : "delete" == n && this.showConfirm(e, o);
    }
});