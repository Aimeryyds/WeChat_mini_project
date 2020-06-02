var e = require("../../../utils/server"), t = (getApp(), wx.getStorageSync("utoken"));

Page({
    data: {
        height: Math.ceil(wx.getSystemInfoSync().windowHeight)
    },
    onLoad: function(o) {
        var a = this;
        e.sendRequest({
            url: "?r=wxapp.member.jump.getone",
            data: {
                id: o.id,
                utoken: t
            },
            method: "GET",
            success: function(e) {
                console.log(e), console.log(222), a.jumptotother(e.data.result);
            }
        });
    },
    jump: function(o) {
        var a = this, n = o.currentTarget.dataset.id;
        e.sendRequest({
            url: "?r=wxapp.member.jump.getone",
            data: {
                id: n,
                utoken: t
            },
            method: "GET",
            success: function(e) {
                a.jumptotother(e.data.result);
            }
        });
    },
    jumptotother: function(e) {
        e && wx.navigateToMiniProgram({
            appId: e.appid,
            path: e.link,
            extarData: {
                foo: "bar"
            },
            envVersion: "release"
        });
    }
});