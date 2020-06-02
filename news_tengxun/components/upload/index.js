var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), r = e(require("../../utils/mlodash")), i = e(require("../../utils/logger")), n = require("../../network/index.js");

require("../../store/index");

function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
    }
    return r;
}

function a(e) {
    return new Promise(function(r, i) {
        wx.chooseImage(function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var i = null != arguments[r] ? arguments[r] : {};
                r % 2 ? o(Object(i), !0).forEach(function(r) {
                    (0, t.default)(e, r, i[r]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
            }
            return e;
        }({}, e, {
            success: r,
            fail: i
        }));
    });
}

Component({
    properties: {
        buttonImgSrc: String,
        uploadText: {
            type: String,
            value: "添加图片"
        },
        count: {
            type: Number,
            value: 1
        },
        sourceType: {
            type: Array,
            value: [ "album", "camera" ]
        },
        sizeType: {
            type: Array,
            value: [ "compressed" ]
        },
        disable: Boolean
    },
    data: {},
    created: function() {
        Object.assign(this, {
            images: [],
            errMsg: "",
            uploading: !1
        });
    },
    attached: function() {},
    ready: function() {},
    methods: {
        tapUpload: function(e) {
            var t = this;
            this.data.disable || this.uploading || (this.images.length = 0, a({
                count: this.data.count,
                sizeType: this.data.sizeType,
                sourceTynpe: this.data.sourceType
            }).then(function(e) {
                r.default.forEach(e.tempFiles, function(e) {
                    e.size < 5242880 && t.images.push({
                        url: e.path,
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10)
                    });
                }), t.images.length < e.tempFiles.length ? wx.showToast({
                    title: "单张图片不能超过5M",
                    icon: "none"
                }) : t.upload();
            }).catch(function(e) {
                i.default.error("读取图片失败:", e), -1 === r.default.get(e, "errMsg", "").indexOf("cancel") && wx.showToast({
                    title: "读取图片失败",
                    icon: "none"
                });
            }));
        },
        upload: function() {
            var e = this;
            this.triggerEvent("start", this.images), wx.showLoading({
                title: "上传中"
            }), this.uploading = !0, this.errMsg = "";
            var t = 0;
            r.default.forEach(this.images, function(o, a) {
                (0, n.uploadFile)({
                    url: n.URL.uploadPic,
                    filePath: o.url,
                    name: "picture",
                    header: {
                        WXAPP: "qq.com"
                    },
                    formData: {
                        name: "picture",
                        uploadtype: "1"
                    }
                }).then(function(i) {
                    if (!i || 0 !== i.ret) return Promise.reject(i);
                    var n = r.default.get(i, "urls[0]", {});
                    if (!n.url) return Promise.reject(i);
                    e.triggerEvent("uploading", {
                        index: a,
                        data: n
                    }), (t += 1) >= e.images.length && e.uploadComplete();
                }).catch(function(r) {
                    i.default.error("上传图片失败:", r), e.triggerEvent("error", {
                        index: a,
                        error: r
                    }), r && r.retmsg && (e.errMsg = r.retmsg), (t += 1) >= e.images.length && e.uploadComplete();
                });
            });
        },
        uploadComplete: function() {
            wx.hideLoading(), this.uploading = !1, this.errMsg && wx.showToast({
                title: this.errMsg,
                icon: "none"
            }), this.triggerEvent("complete");
        }
    }
});