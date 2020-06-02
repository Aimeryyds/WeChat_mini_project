var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var app = getApp();

(0, _extends2.default)({
    data: {
        help_img: ""
    },
    onLoad: function(e) {
        var t = wx.getStorageSync("base_content");
        console.log(t, "res"), this.setData({
            help_img: t.help_img
        });
    },
    onReady: function() {},
    onShow: function() {}
});