var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends), _deepcopy = require("../../../libs/deepcopy"), _deepcopy2 = _interopRequireDefault(_deepcopy);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var app = getApp(), init = _deepcopy2.default.extend(!0, {
    data: {
        list: [],
        cur_idx: ""
    },
    onLoad: function() {
        var e = this, t = wx.getStorageSync("current_col");
        this.setData({
            cur_idx: t
        }, function() {
            e.getlist();
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onShow: function() {},
    getlist: function() {
        var t = this;
        app.util.request({
            url: "entry/wxapp/cols",
            success: function(e) {
                e = e.data.data, t.setData({
                    list: e
                });
            },
            fail: function(e) {
                console.log(e, "err");
            }
        });
    },
    toSureGrade: function(e) {
        var t = this.dataset(e).idx;
        this.setData({
            idx: t
        }), app.util.request({
            url: "entry/wxapp/colset",
            data: {
                col_id: t
            },
            success: function(e) {
                wx.setStorage({
                    key: "current_col",
                    data: t
                }), app.util.redirectTo("more");
            },
            fail: function(e) {
                console.log(e, "err");
            }
        });
    }
});

(0, _extends2.default)(init);