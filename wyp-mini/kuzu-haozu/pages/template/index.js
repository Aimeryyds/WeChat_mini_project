module.exports = {
    hidden_template: !0,
    showFn: function() {
        this.setData({
            hidden_template: !0
        });
    },
    sureFn_template: function() {
        wx.makePhoneCall({
            phoneNumber: "400-022-9286"
        });
    },
    backFn_template: function() {
        this.setData({
            hidden_template: !1
        });
    }
};