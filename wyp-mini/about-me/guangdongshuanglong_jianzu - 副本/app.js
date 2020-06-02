require("./utils/ald-stat/ald-stat.js");

var t = require("/utils/address.js");

App({
    onLaunch: function() {
        var t = wx.getExtConfigSync();
        void 0 != t && (this.globalData.appid = t.appid);
        try {
            var a = wx.getSystemInfoSync();
            console.log(a.model), console.log(a.pixelRatio), console.log(a.windowWidth), console.log(a.windowHeight), 
            this.globalData.windowWidth = a.windowWidth, this.globalData.windowHeight = a.windowHeight, 
            this.globalData.pixelRatio = a.pixelRatio;
        } catch (t) {}
    },
    globalData: {
        userInfo: null,
        title: "",
        address: "https://cityapi.vzan.com/apiMiapp/GetModelData",
        dynamicDetail: "https://cityapi.vzan.com/apiMiapp/GetModelInfoById",
        appid: "wxc5d5d4fa13b0d27f"
    },
    IsShowBottomLogo: function(a) {
        var o = this;
        wx.request({
            url: t.Address.GET_BOTTOM_LOGO,
            data: {
                appid: o.globalData.appid
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                1 == t.data.isok && (0 == t.data.AgentConfig.isdefaul ? t.data.AgentConfig.LogoText = t.data.AgentConfig.LogoText.split(" ") : t.data.AgentConfig.LogoText = t.data.AgentConfig.LogoText, 
                a.setData({
                    AgentConfig: t.data.AgentConfig
                }));
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    }
});