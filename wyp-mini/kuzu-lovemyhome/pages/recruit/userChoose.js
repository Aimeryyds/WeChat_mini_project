var e = getApp(), i = require("../../sdk/dingxiang.js");

require("../../utils/md5.js");

Page({
    data: {
        cityId: null,
        recommender: null,
        recommenderuid: null
    },
    onLoad: function(n) {
        var o = this;
        new i({
            appId: e.globalData.dxAppId
        }, function(e, i) {
            if (e) console.log(e); else {
                var t = decodeURIComponent(n.scene).split("_");
                o.setData({
                    dxDeviceId: i,
                    cityId: t[0],
                    recommenderuid: t[1]
                }), console.log("扫码进入小程序options==_____城市id______", o.data.cityId), console.log("扫码进入小程序options===___推荐人id____", o.data.recommenderuid);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    toCertification: function(e) {
        var i = this;
        wx.navigateTo({
            url: "../recruit/certification?recommenderuid=" + i.data.recommenderuid + "&cityId=" + i.data.cityId
        });
    },
    toResume: function(e) {
        var i = this;
        wx.navigateTo({
            url: "../recruit/resume?recommenderuid=" + i.data.recommenderuid + "&cityId=" + i.data.cityId
        });
    }
});