var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends), _deepcopy = require("../../../libs/deepcopy"), _deepcopy2 = _interopRequireDefault(_deepcopy);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var app = getApp(), init = _deepcopy2.default.extend(!0, {
    data: {
        web_src: ""
    },
    onLoad: function(e) {
        var t = this;
        wx.getStorage({
            key: "web_src",
            success: function(e) {
                console.log(e, "res aaaa"), t.setData({
                    web_src: e.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {}
});

(0, _extends2.default)(init);