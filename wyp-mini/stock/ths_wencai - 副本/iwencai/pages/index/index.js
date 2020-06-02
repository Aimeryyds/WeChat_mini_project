getApp();

Page({
    data: {
        url: "",
        userInfo: {},
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        appid: "wx22d1466a657fcb78",
        secret: "3d0813488feb2c4d67b320b9e0ae33aa"
    },
    onLoad: function(e) {
        var o = this;
        console.log("@@ options  options  ", e);
        var n = "https://eq.10jqka.com.cn/ai/webapp/miniprogramIndex.html?source=ths_weixin_xiaochengxu&footer=1&weixinprogram=1&preview=1&zzwp=1&place=shoujichaogu&miniprogram=1", t = "https://eq.10jqka.com.cn/ai/webapp/miniprogramIndex.html?source=ths_weixin_xiaochengxu&footer=1&weixinprogram=1&preview=1&zzwp=1&place=shoujichaogu&miniprogram=1";
        if (e.scene) {
            var c = require("../../utils/RequestUtil.js"), i = "https://mp.iwencai.com/mp/cache/question?since=" + e.scene;
            console.log("@@ scenceUrl:  ", i), c("https://mp.iwencai.com/mp/cache/question?since=" + e.scene).then(function(e) {
                console.log("@@ promise then: ", e);
                var c = e.data;
                try {
                    t = n + "&query=" + encodeURIComponent(decodeURIComponent(c));
                } catch (e) {
                    t = n + "&query=" + encodeURIComponent(c);
                }
                console.log("@@ scence path  ", t), console.log("@@ 最后加载url:  ", t), o.setData({
                    url: t
                });
            });
        } else t = e.query ? n + "&query=" + encodeURIComponent(decodeURIComponent(e.query)) : n, 
        console.log("@@ 最后加载url:  ", t), this.setData({
            url: t
        });
    },
    onShow: function(e) {},
    onReady: function(e) {},
    onShareAppMessage: function(e) {
        return {
            title: "同花顺问财",
            path: this.url
        };
    }
});