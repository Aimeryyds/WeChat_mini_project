var r = getApp(), o = require("../lib/es6-promise").Promise, e = {
    uploadFormIdUrl: r.globalData.baseUrl + "api/applet/upload/formId.go"
};

module.exports.uploadFormId = function(a) {
    return new o(function(o, l) {
        var u = {
            openId: r.globalData.usrKey.openid,
            formId: a
        };
        wx.request({
            url: e.uploadFormIdUrl,
            data: u,
            success: function(r) {
                o(r.data);
            },
            fail: function(r) {
                l(new Error(r.message));
            }
        });
    });
};