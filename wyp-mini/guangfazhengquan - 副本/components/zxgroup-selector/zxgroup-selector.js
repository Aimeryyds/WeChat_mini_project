function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    var e = "#modal__" + o;
    return t.selectComponent(e);
}

var a = t(require("../../services/stockgroup/stockgroup")), n = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e.default = t, e;
}(require("../../services/stockgroup/constant")), i = t(require("../circus/toast/toast")), o = +new Date();

Component({
    modal: null,
    data: {
        modalId: o,
        mode: "select",
        name: "",
        accountType: n.ACCOUNT_WX,
        groupList: [],
        maxHeight: 500,
        bottom: !1
    },
    ready: function() {
        var t = this;
        wx.createSelectorQuery().selectViewport().boundingClientRect(function(e) {
            t.setData({
                maxHeight: e.height / 3
            });
        }).exec();
    },
    methods: {
        focus: function() {
            this.setData({
                bottom: !0
            });
        },
        blur: function() {
            this.setData({
                bottom: !1
            });
        },
        switchMode: function() {
            var t = this.data.mode, a = "设置分组";
            "select" === t ? (t = "edit", a = "请输入自选分组名称") : t = "select", this.setData({
                mode: t
            }), e(this).setData({
                title: a
            });
        },
        toggleSelectStatus: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.checked, n = this.data.groupList;
            void 0 !== e && n.length > e && (n[e].selected = a, this.setData({
                groupList: n
            }));
        },
        handleNameChange: function(t) {
            var e = t.detail.value;
            new RegExp("[A-Za-z0-9一-龥]$").test(e) ? this.setData({
                name: e
            }) : this.setData({
                name: ""
            });
        },
        closeModal: function() {
            e(this).setData({
                show: !1
            });
        },
        addGroup: function(t) {
            var e = this, n = this.data.name.trim(), o = this.data.groupList.find(function(t) {
                return t.name === n;
            });
            if (n.length > 6) return i.default.show(t, "分组名称不能大于6个字"), !1;
            if (n.length < 1) return i.default.show(t, "请输入分组名称"), !1;
            if (!o) {
                var s = this.data.groupList, r = "a_" + +new Date();
                s.push({
                    gid: r,
                    name: n,
                    cname: n,
                    selected: !0
                }), this.setData({
                    name: "",
                    groupList: s
                }), a.default.addGroups([ {
                    name: n
                } ], this, {
                    accountType: this.data.accountType
                }).then(function(t) {
                    var a = t.groups.find(function(t) {
                        return t.name === n;
                    }), i = e.data.groupList;
                    i.forEach(function(t) {
                        t.gid === r && (t.gid = a.gid);
                    }), e.setData({
                        groupList: i
                    });
                });
            }
        }
    }
});