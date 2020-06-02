var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var app = getApp();

(0, _extends2.default)({
    data: {
        json: [],
        has_next: !1,
        invite_img: ""
    },
    page: 1,
    onLoad: function(t) {
        var e = this;
        this.init(), wx.getStorage({
            key: "base_content",
            success: function(t) {
                t = t.data, e.setData({
                    invite_img: t.invite_img
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onReachBottom: function() {
        this.data.has_next && (this.page++, this.init());
    },
    init: function() {
        var n = this;
        app.util.request({
            url: "entry/wxapp/invite",
            data: {
                page: this.page,
                pagesize: 10
            },
            success: function(t) {
                t = t.data.data, console.log(t, "res xxx");
                var e = n.data.json.concat(t.rows);
                n.setData({
                    json: e,
                    has_next: t.has_next
                });
            }
        });
    }
});