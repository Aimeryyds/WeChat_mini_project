var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends), _deepcopy = require("../../../libs/deepcopy"), _deepcopy2 = _interopRequireDefault(_deepcopy);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var app = getApp(), init = _deepcopy2.default.extend(!0, {
    data: {
        content: "",
        finish: !1,
        ad_id: ""
    },
    timeCount: 0,
    id: null,
    url: "",
    onLoad: function() {
        var e = this;
        wx.getStorage({
            key: "content_en",
            success: function(t) {
                t = t.data, e.setData({
                    content: t.content
                }), e.id = t.id;
            }
        }), this.$recordStart(), wx.getStorage({
            key: "base_content",
            success: function(t) {
                t = t.data, e.setData({
                    ad_id: t.ad_id
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.isUpload = !0, this.timer = setInterval(this.countTime, 1e3);
    },
    onUnload: function() {
        this.timeCount = 0, clearInterval(this.timer), this.isUpload = !1, this.recorderManager.stop();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    countTime: function() {
        this.timeCount++;
    },
    recordings: function() {
        var i = this;
        this.recorderManager.stop(), this.recorderManager.onStop(function(t) {
            if (i.uploading) {
                i.$loading.start({
                    title: "正在上传语音"
                });
                var e = t.tempFilePath;
                i.uploadFile(e, {
                    type: "audio"
                }, function(t) {
                    i.url = t.data.url, i.setData({
                        finish: !0
                    }), clearInterval(i.timer);
                });
            }
        });
    },
    play: function(t) {
        "standard" == app.util.dataset(t).type ? this.getTTS() : this.$play(this.url);
    },
    getTTS: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/tts",
            data: {
                text: this.data.content
            },
            success: function(t) {
                (t = t.data.data).url && e.$play(t.url);
            }
        });
    },
    handleData: function(t) {
        "stress" == app.util.dataset(t).type ? (this.url = "", this.setData({
            finish: !1
        }), this.$recordStart(), this.timeCount = 0, this.timer = setInterval(this.countTime, 1e3)) : this.release();
    },
    release: function() {
        app.util.request({
            url: "entry/wxapp/commentadd",
            data: {
                p_child_id: this.id,
                voice: this.url,
                duration: this.timeCount
            },
            success: function(t) {
                t = t.data, wx.showModal({
                    title: "提示",
                    content: t.message,
                    showCancel: !1,
                    success: function(t) {}
                });
            },
            fail: function(t) {
                t = t.data, wx.showModal({
                    title: "提示",
                    content: t.message,
                    showCancel: !1,
                    success: function(t) {}
                });
            }
        });
    }
});

(0, _extends2.default)(init);