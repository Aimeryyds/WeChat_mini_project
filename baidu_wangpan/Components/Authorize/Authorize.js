var e = require("../../netdisk_utils/account.js"), t = getApp();

Component({
    lifetimes: {
        ready: function() {
            this.setData({
                isIPhoneX: t.globalData.isIpx
            });
        }
    },
    properties: {
        redirectUrl: {
            type: String,
            value: ""
        },
        redirectQuery: {
            type: String,
            value: ""
        },
        isIndexPage: {
            type: Boolean,
            value: !1
        }
    },
    externalClasses: [ "fullScreen" ],
    data: {
        show: !1,
        isIPhoneX: !1
    },
    methods: {
        toggleStatus: function(e) {
            this.setData({
                show: e
            });
        },
        dialogCb: function(a) {
            var r = a.detail.detail, s = r.errMsg, i = r.userInfo;
            if (-1 !== s.indexOf("ok")) {
                wx.log.author.userInfoSetSuccess.send(), t.globalData.userWxInfo = i, t.globalData.hasWxAuthor = !0;
                var o = "", n = this.data, l = n.redirectUrl, u = n.redirectQuery;
                u && (o = {}, u.split("|").forEach(function(e) {
                    var t = e.split(":"), a = t[0], r = t[1];
                    o[a] = r;
                })), (0, e.bdWxLogin)(l, o);
            }
        }
    }
});