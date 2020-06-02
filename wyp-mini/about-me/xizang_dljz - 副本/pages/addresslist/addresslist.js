var t, e = require("../../utils/functions"), d = require("../../utils/util");

getApp();

Page({
    data: {
        choose: 0,
        chooseId: null,
        list: [],
        last: 0
    },
    onLoad: function(e) {
        t = this, e.chooseId && this.setData({
            choose: 1,
            chooseId: parseInt(e.chooseId)
        });
    },
    onShow: function() {
        t.getAddrList();
    },
    getAddrList: function() {
        e.getAddrList(function(e) {
            e.list && t.setData({
                list: e.list
            });
        });
    },
    setAddrDefault: function(a) {
        d.confirm("提示", "确认将该地址设为默认收货地址？", function() {
            var d = a.currentTarget.id;
            e.setAddrDefault(d, function(e) {
                t.getAddrList();
            });
        });
    },
    editAddr: function(t) {
        var e = this.data.list[t.currentTarget.id];
        wx.navigateTo({
            url: "../addaddress/addaddress?deliveryAddr=" + JSON.stringify(e)
        });
    },
    deleteAddr: function(a) {
        d.confirm("删除提示", "确认删除改地址？", function() {
            var r = a.currentTarget.id, i = a.currentTarget.dataset.idx;
            if (this.data.choose) {
                var s = getCurrentPages(), n = s[s.length - 2];
                null != n.data.deliveryAddr && n.data.deliveryAddr.id == r && n.setData({
                    deliveryAddr: null
                }), t.setData({
                    chooseId: null
                });
            }
            e.deleteAddr(r, function() {
                t.data.list.splice(i, 1), t.setData({
                    list: t.data.list
                }), d.toast("删除成功");
            });
        });
    },
    chooseAddr: function(e) {
        var d = getCurrentPages();
        d[d.length - 2].setData({
            deliveryAddr: t.data.list[e.currentTarget.id]
        }), wx.navigateBack();
    }
});