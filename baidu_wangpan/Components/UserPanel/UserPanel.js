var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
}, i = require("../../netdisk_utils/account.js"), n = require("../../netdisk_utils/string.js");

Component({
    data: {
        isShow: !1
    },
    methods: {
        updateData: function(i) {
            var a = Object.assign({}, i);
            a.name = a.name && (0, n.setEllipsis)(a.name, 12, "..") || "", this.setData(t({}, a));
        },
        show: function(t) {
            this.updateData(t), this.setData({
                isShow: !0
            });
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        isShow: function() {
            return this.data.isShow;
        },
        _touchStart: function(t) {
            this._touchStyle(t, "background: #F9F9FA");
        },
        _touchEnd: function(t) {
            this._touchStyle(t, "");
        },
        _touchStyle: function(t, i) {
            var n = {};
            n[t.currentTarget.dataset.button + "TouchStyle"] = i, this.setData(n);
        },
        _bindAccountClick: function() {
            this.setData({
                isShow: !1
            }), (0, i.bindNormalAccount)();
        },
        _myPanClick: function() {
            this.setData({
                isShow: !1
            }), wx.safeNavigateTo("/pages/netdisk_index/index?from=userpanel");
        }
    }
});