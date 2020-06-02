var t = getApp(), e = t.requirejs("core"), i = t.requirejs("api/kjb");

Page({
    data: {
        show: !1,
        list: []
    },
    onLoad: function(t) {
        e.setting(), this.setData(t), this.getList();
    },
    getList: function() {
        var t = this, e = t.data.id;
        i.BargainRecord(e, function(e) {
            t.setData(e);
        });
    },
    onPullDownRefresh: function() {
        this.getList(), wx.stopPullDownRefresh();
    }
});