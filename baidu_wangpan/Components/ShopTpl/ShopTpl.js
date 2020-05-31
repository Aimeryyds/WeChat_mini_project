var t = require("../../netdiisk_requestapi/getInterim"), a = require("../../netdiisk_requestapi/loginSync.js");

getApp().globalData;

Component({
    data: {
        list: [],
        isVip: !1
    },
    ready: function() {
        var a = this;
        (0, t.pmallItem)().then(function(t) {
            var e = t.data, i = e.errno, n = e.list, s = e.strategy_no;
            i || (wx.log.send({
                value: "模块展示",
                type: "wx_mall_show_" + s
            }), a.setData({
                list: n,
                isVip: s
            }));
        });
    },
    methods: {
        goDetail: function() {
            wx.log.send({
                value: "去看看点击",
                type: "wx_mall_observe_" + this.data.isVip
            });
            var t = this.data.isVip ? "https://pan.baidu.com/mall/wap/home/member" : "https://pan.baidu.com/mall/wap/home/main";
            this.syncLogin(t);
        },
        shops: function(t) {
            var a = t.currentTarget.dataset.url;
            wx.log.send({
                value: "推荐商品点击",
                type: "wx_mall_recommend_" + this.data.isVip
            }), this.syncLogin(a);
        },
        syncLogin: function(t) {
            (0, a.loginSync)().then(function(a) {
                var e = a.data, i = 0 === e.errno && e.data ? e.data.sign : "";
                wx.navigateTo({
                    url: "/pages/netdisk_shopView/shopView?url=" + encodeURIComponent(t) + "&sign=" + i
                });
            });
        }
    }
});