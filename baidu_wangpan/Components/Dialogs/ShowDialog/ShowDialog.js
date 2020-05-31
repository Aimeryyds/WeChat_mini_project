var i = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o]);
    }
    return i;
}, t = function() {};

wx.showDialog = function(i) {
    var t = wx.getCurrentViewPage();
    t.showDialog && t.showDialog.show(i);
};

var a = {
    title: "",
    content: "",
    showCancel: !0,
    cancelText: "取消",
    cancelColor: "fc-dark-gray",
    confirmText: "确定",
    confirmColor: "fc-blue",
    cancel: t,
    confirm: t,
    always: t,
    isConfirmBtnFastHide: !0
};

Component({
    data: i({}, a),
    ready: function() {
        this.dialog = this.selectComponent("#dialog");
    },
    methods: {
        show: function(t) {
            this.setData(i({}, a, t)), this.dialog.show({
                isConfirmBtnFastHide: this.data.isConfirmBtnFastHide
            });
        },
        cancel: function() {
            var i = this.data, a = i.cancel, o = void 0 === a ? t : a, n = i.always, e = void 0 === n ? t : n;
            o(), e({
                cancel: !0
            });
        },
        confirm: function(i) {
            var a = i.detail, o = this.data, n = o.confirm, e = void 0 === n ? t : n, c = o.always, r = void 0 === c ? t : c, s = o.isConfirmBtnFastHide ? t : a.hide;
            e({
                hide: s
            }), r({
                confirm: !0,
                hide: s
            });
        }
    }
});