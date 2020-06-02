var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../utils/mlodash")), i = t(require("../../utils/logger")), a = require("../../store/index"), o = require("./service"), s = require("../../services/report");

Page({
    data: {
        ready: !1,
        textarea: "",
        images: [],
        btnReady: !1,
        focusHeight: 0,
        focus: !1,
        isIphoneX: a.systemInfo.isIphoneX,
        isIos: "ios" === a.systemInfo.platform,
        fromPage: s.FROM_PAGE.topic_editor_page,
        uploading: !1
    },
    onLoad: function(t) {
        Object.assign(this, {
            notProxyExposureReport: !0,
            imageUrlList: [],
            imageCount: 0
        }), this.setData({
            topicName: this.query.name
        });
    },
    onReady: function() {
        (0, s.report)({
            opType: s.OP_TYPE.page_exposure,
            fromPage: this.data.fromPage,
            topicId: this.query.tpid
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onInput: function(t) {
        var e = !1, i = t.detail.value;
        0 !== i.trim().length && (e = !0), this.setData({
            btnReady: e,
            textarea: i
        });
    },
    onFocus: function(t) {
        var e = t.detail.height;
        this.setData({
            focus: !0,
            focusHeight: e || 0
        });
    },
    onBlur: function(t) {
        this.setData({
            focus: !1,
            focusHeight: 0,
            textarea: t.detail.value
        });
    },
    onUploadError: function(t) {
        var i = e.default.get(t, "detail.index", -1);
        -1 !== i && (i += this.imageCount, this.imageUrlList[i] = {
            error: !0
        }, this.data.images.splice(i, 1), this.setData({
            images: this.data.images
        }));
    },
    onUploading: function(t) {
        var e = t && t.detail || {};
        this.imageUrlList[this.imageCount + e.index] = e.data;
    },
    onStartUpload: function(t) {
        var i = e.default.get(t, "detail", []);
        this.imageCount = this.imageUrlList.length, this.imageUrlList = this.imageUrlList.concat(i), 
        this.data.images = this.data.images.concat(i), this.setData({
            images: this.data.images,
            uploading: !0
        });
    },
    onUploadComplete: function() {
        this.imageUrlList = this.imageUrlList.filter(function(t) {
            return !t.error;
        }), this.setData({
            uploading: !1
        });
    },
    onPreview: function(t) {
        var i = e.default.get(t, "target.dataset.index", 0), a = e.default.map(this.data.images, function(t) {
            return t.url;
        });
        wx.previewImage({
            current: a[i],
            urls: a
        });
    },
    onDelete: function(t) {
        var i = e.default.get(t, "target.dataset.index");
        this.imageUrlList.splice(i, 1), this.data.images.splice(i, 1), this.setData({
            images: this.data.images
        });
    },
    publishWeibo: function() {
        var t = this;
        if (this.data.btnReady) {
            var e = this.data.textarea.trim();
            0 !== e.length ? e.length > 1200 ? wx.showModal({
                title: "提示",
                confirmColor: "#000000",
                content: "字数太多啦，超过了".concat(e.length - 1200, "字"),
                showCancel: !1
            }) : (wx.showToast({
                title: "正在发表",
                icon: "loading"
            }), (0, o.postWeibo)({
                text: e,
                pic: JSON.stringify({
                    img: this.imageUrlList
                }),
                tpid: this.query.tpid,
                id: "id_" + Math.random().toString(36).substr(2, 10)
            }).then(function(e) {
                t.writeBackTopicList(e.id), wx.showToast({
                    title: "发表成功",
                    icon: "success"
                }), (0, s.report)({
                    opType: s.OP_TYPE.publish_succ,
                    fromPage: t.data.fromPage,
                    topicId: t.query.tpid,
                    pubType: 3
                });
            }).catch(function(e) {
                i.default.error("发表微博出错: ", e), (0, s.report)({
                    opType: s.OP_TYPE.publish_fail,
                    fromPage: t.data.fromPage,
                    topicId: t.query.tpid,
                    pubType: 3
                }), wx.showToast({
                    icon: "none",
                    title: "发表失败"
                });
            }), (0, s.report)({
                opType: s.OP_TYPE.topic_post_send,
                fromPage: this.data.fromPage,
                topicId: this.query.tpid
            })) : wx.showToast({
                title: "内容不能为空",
                icon: "none"
            });
        }
    },
    writeBackTopicList: function(t) {
        var s = this;
        (0, o.getWeibo)(t).then(function(t) {
            Object.assign(t, {
                isFake: !0,
                content: s.data.textarea.trim(),
                imageList: e.default.map(s.imageUrlList, function(t, e) {
                    return {
                        url: s.data.images[e].url,
                        height: t.height,
                        width: t.width
                    };
                })
            });
            var i = a.topic.postWeiboCb[s.query._uid];
            e.default.isFunction(i) && i(t), wx.navigateBack({
                delta: 1
            });
        }).catch(function(t) {
            i.default.error("获取微博信息失败: ", t);
        });
    }
});