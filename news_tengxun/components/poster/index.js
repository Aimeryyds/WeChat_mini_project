var e, t = require("../../@babel/runtime/helpers/interopRequireDefault"), i = t(require("../../@babel/runtime/helpers/defineProperty")), a = (t(require("../../utils/mlodash")), 
t(require("../../utils/logger"))), r = require("../../services/report"), n = require("../../services/posterService.js"), o = require("../../store/index"), s = require("../../services/authSetting"), u = "init", c = "drawing", d = "success", h = "fail";

Component((e = {
    properties: {
        drawInfo: {
            type: Object,
            observer: function(e, t, i) {
                e && e.title && this._changeDrawInfo(e, this.data.reportInfo);
            }
        },
        previewConfig: {
            type: Object,
            observer: function(e, t, i) {
                this._changePreviewConfig(e);
            }
        },
        reportInfo: {
            type: Object
        },
        fromPage: String
    },
    data: {
        showPreview: !1,
        previewConfig: {
            wrapWidth: "680rpx",
            wrapHeight: "750rpx"
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {}
}, (0, i.default)(e, "created", function() {
    var e = this;
    this.drawEventStatus = u, this.drawEventHandler = function(t, i, r) {
        a.default.info("制作海报事件：", t, e.data.fromPage), e.data.fromPage === t && e._changeDrawInfo(i, r);
    }, o.poster.on(o.poster.event.draw, this.drawEventHandler);
}), (0, i.default)(e, "detached", function() {
    o.poster.off(o.poster.event.draw, this.drawEventHandler);
}), (0, i.default)(e, "methods", {
    showImgPreview: function(e) {
        this.setData({
            showPreview: e.detail.show
        });
    },
    _changePreviewConfig: function(e) {
        e.wrapWidth && this.setData({
            previewConfig: e
        });
    },
    _changeDrawInfo: function(e, t) {
        var i = this;
        if (this.drawEventStatus !== c) {
            this.drawEventStatus = c, t && t.opType && (0, r.report)(t);
            var o = this;
            e.imgUrl = e.imgUrl || "http://mat1.gtimg.com/www/images/news_minipro/weibo_default_poster.png", 
            e.nickName ? e.nickName.length > 6 && (e.nickName = e.nickName.slice(0, 6) + "...") : e.nickName = "腾讯网友", 
            e.avatarUrl = e.avatarUrl || "http://mat1.gtimg.com/www/js/news/default_avatar.png", 
            o.setData({
                drawInfo: e
            }), (0, s.getAuthSetting)().then(function(e) {
                return !1 === e[s.scope.writePhotosAlbum] ? (o.setData({
                    authPopupShow: !0
                }), Promise.reject()) : (0, s.authorize)(s.scope.writePhotosAlbum).then(function() {
                    setTimeout(function() {
                        (0, n.drawCanvas)({
                            wrapperId: "#poster",
                            drawElementsClass: ".draw",
                            canvasId: "canvas-poster",
                            context: o,
                            width: 1360,
                            height: 1500,
                            destHeight: 1500,
                            destWidth: 1360,
                            before: function() {
                                wx.showLoading({
                                    title: "正在生成海报",
                                    mask: !0
                                }), setTimeout(function() {
                                    wx.hideLoading();
                                }, 5e3);
                            },
                            success: function(e) {
                                o.setData({
                                    imgUrl: e.tempFilePath
                                }), o.setData({
                                    showPreview: !0
                                }), (0, n.savePhotosAlbum)({
                                    imgUrl: e.tempFilePath,
                                    success: function() {
                                        o.setData({
                                            tips: "已保存到相册，快去分享吧"
                                        });
                                    },
                                    fail: function() {
                                        o.setData({
                                            tips: "保存相册失败"
                                        });
                                    }
                                }), wx.hideLoading(), i.drawEventStatus = d;
                            },
                            fail: function(e) {
                                wx.showToast({
                                    title: "获取海报失败",
                                    icon: "success",
                                    duration: 2e3
                                }), wx.hideLoading(), a.default.error("获取海报失败", e), i.drawEventStatus = h;
                            },
                            complete: function(e) {
                                wx.hideLoading();
                            }
                        });
                    }, 500);
                });
            }).catch(function(e) {
                i.drawEventStatus = h;
            });
        }
    }
}), e));