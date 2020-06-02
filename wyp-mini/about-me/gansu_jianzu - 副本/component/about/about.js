Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../network/api"));

exports.default = {
    data: {},
    onLoad: function(e) {
        wx.showLoading({
            title: "请稍后"
        }), this.queryAbout();
    },
    makephone: function(e) {
        var t = e.currentTarget.dataset.phone, n = t.telephone, a = t.cellphone, o = [];
        n && o.push(n), a && o.push(a), o.length > 1 ? wx.showActionSheet({
            itemList: o,
            success: function(e) {
                void 0 != e.tapIndex && wx.makePhoneCall({
                    phoneNumber: o[e.tapIndex].replace("-", "")
                });
            }
        }) : wx.makePhoneCall({
            phoneNumber: o[0]
        });
    },
    makemap: function() {
        wx.navigateTo({
            url: "/modules/map/index"
        });
    },
    onTapImg: function(e) {
        wx.previewImage({
            current: e.currentTarget.dataset.link,
            urls: this.data.about.images
        });
    },
    queryAbout: function() {
        var t = this, n = {
            sign: "about"
        };
        e.default.getIndexMenu(n).then(function(e) {
            wx.hideLoading(), t.setData({
                about: e.data.options
            });
        }).catch(function(e) {
            return console.log(e);
        });
    }
};