function e(e) {
    var t = wx.getStorageSync("user");
    t && (e.user_id = t.user_id);
    var o = wx.getStorageSync("union_id");
    o && (e.union_id = o);
    var n = wx.getStorageSync("third_session_key");
    n && (e.third_session_key = n);
}

var t = require("../config.js"), o = require("../utils/util.js");

module.exports = {
    request: function(t, o, n, s) {
        console.log(t), e(o), wx.request({
            url: t,
            data: o,
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                version: "157",
                channel: "WeChat",
                client: "817"
            },
            success: function(e) {
                var t = e.data.state, o = e.data.result, a = e.data.message, i = e.data;
                console.log(i), "success" == t ? n(o) : s(a);
            },
            fail: function(e) {
                console.log(JSON.stringify(e)), s(e);
            },
            complete: function() {}
        });
    },
    homeRequest: function(e, o) {
        this.request(t.homeUrl, {}, e, o);
    },
    initSessionParams: function(e, t) {
        wx.setStorageSync("union_id", e), wx.setStorageSync("third_session_key", t);
    },
    uploadImage: function(t, n, s, a) {
        t.type = 4, e(t), wx.uploadFile({
            url: "https://upload.douguo.com/upload/image",
            formData: t,
            filePath: n,
            name: "image",
            header: {
                "Content-Type": "multipart/form-data",
                version: "157",
                channel: "WeChat",
                client: "817"
            },
            success: function(e) {
                var t;
                try {
                    t = JSON.parse(e.data);
                } catch (o) {
                    t = e.data;
                }
                if (o.isObject(t)) {
                    var n = t.state, i = t.result;
                    console.log(t), "success" == n ? s(i) : a(t);
                } else a(t);
            },
            fail: function(e) {
                console.log(JSON.stringify(e)), a(e);
            },
            complete: function() {}
        });
    }
};