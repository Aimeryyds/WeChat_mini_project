var e = getApp(), o = e.requirejs("core"), a = e.requirejs("barindex");

Page({
    data: {
        code: ""
    },
    onLoad: function(e) {
        e && e.code ? (this.setData({
            code: e.code
        }), a.barcode("barcode", e.code, 680, 200)) : o.jump("", 5);
    }
});