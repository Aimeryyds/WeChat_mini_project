function t(t) {
    this.context = t, this.init();
}

getApp();

var e = require("../../utils/ald-stat");

t.prototype.init = function() {
    var t = this;
    t.context.onGuidanceTipCloseClick = function(e) {
        wx.setStorage({
            key: "guidanceClosedByUser",
            data: !0
        }), t.context.setData({
            "guidance.hidden": !0
        });
    };
}, t.prototype.checkHidden = function() {
    var t = this, i = wx.getStorageSync("guidanceClosedByUser");
    setTimeout(function() {
        i ? (t.context.setData({
            "guidance.hidden": !0
        }), e.guidanceStatus(1)) : (t.context.setData({
            "guidance.hidden": !1
        }), e.guidanceStatus(0));
    }, 1e3);
}, module.exports = t;