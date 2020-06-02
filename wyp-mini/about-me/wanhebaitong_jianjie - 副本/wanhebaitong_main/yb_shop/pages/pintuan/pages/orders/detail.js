var o = getApp().requirejs("core");

Page({
    onLoad: function(o) {
        this.oid = o.oid, this.showDataInfo();
    },
    onShow: function() {},
    showDataInfo: function() {
        var t = this;
        o.get("Pintuan/ptOrderDetail", {
            id: this.oid
        }, function(i) {
            0 == i.code ? t.setData({
                orderInfo: i.info
            }) : o.alert(i.msg);
        });
    }
});