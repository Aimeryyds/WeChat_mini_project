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
        showDes: !1,
        avatarUrl: "",
        nickName: "",
        current_col_name: ""
    },
    page: 1,
    score: 0,
    col_id: "",
    current_col: "",
    onLoad: function(t) {
        var e = this;
        wx.getStorage({
            key: "score_after",
            success: function(t) {
                e.score = t.data;
            }
        });
        var a = wx.getStorageSync("userInfo").wxInfo;
        this.setData({
            avatarUrl: a.avatarUrl,
            nickName: a.nickName
        }), this.getMyInfo();
    },
    onReady: function() {},
    onShow: function() {},
    onPullDownRefresh: function() {
        this.page = 1, this.setData({
            json: [],
            has_next: !1
        }), this.init();
    },
    onReachBottom: function() {
        this.data.has_next && (this.page++, this.init());
    },
    init: function() {
        var a = this, t = this.getStorageSync("formId").join(",");
        app.util.request({
            url: "entry/wxapp/course",
            data: {
                page: this.page,
                pagesize: 10,
                col_id: this.current_col,
                formId: t
            },
            success: function(t) {
                t = t.data.data;
                var e = a.data.json.concat(t.rows);
                a.setData({
                    json: e,
                    has_next: t.has_next
                });
            }
        });
    },
    getMyInfo: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/myinfo",
            success: function(t) {
                t = t.data.data, e.current_col = t.current_col, e.setData({
                    current_col_name: t.current_col_name
                }), wx.setStorage({
                    key: "current_col",
                    data: t.current_col
                }), e.init();
            },
            fail: function(t) {
                console.log(t, "err");
            }
        });
    },
    checkOne: function(t) {
        this.setStorageSync("formId", t.detail.formId);
        var e = app.util.dataset(t).id;
        console.log(e, "id");
        for (var a = this.data.json, n = 0; n < a.length; n++) if (a[n].id == e) {
            if (this.score > a[n].score) return wx.setStorage({
                key: "items",
                data: a[n]
            }), void app.util.navigateTo("details");
            this.setData({
                showDes: !0
            });
        }
    },
    sure: function() {
        this.setData({
            showDes: !1
        });
    },
    toCheckTypes: function() {
        app.util.redirectTo("types");
    }
});