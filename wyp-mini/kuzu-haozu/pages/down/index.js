var e = getApp(), t = require("../template/index.js"), a = {
    data: {
        msg_template: "",
        sure_template: "呼叫",
        down_items: [],
        i: "",
        t: ""
    },
    toIndexFn: function() {
        wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    callFn: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.data.msg_template
        });
    },
    onShow: function() {
        this.setData({
            msg_template: e.globalData["tel-phone"]
        });
    },
    onLoad: function(t) {
        for (var a = this, n = e.getSecret(), i = decodeURIComponent(t.scene), s = i.split("&"), o = {}, l = 0; l < s.length; l++) {
            var r = s[l].split("=");
            o[r[0]] = r[1];
        }
        e.globalData["tel-phone"] = o.m;
        var d = e.extend({
            currtime: n.currtime,
            sign: n.sign,
            id: o.i,
            type: o.t
        }, t);
        wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/landing/?" + i,
            data: d,
            success: function(e) {
                var t = e.data.data;
                a.setData({
                    down_items: t
                });
            }
        });
    }
};

e.extend(a, t), Page(a);