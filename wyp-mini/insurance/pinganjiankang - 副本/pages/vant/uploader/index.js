var e = require("../common/component"), t = require("./utils"), i = require("./shared");

(0, e.VantComponent)({
    props: Object.assign(Object.assign({
        disabled: Boolean,
        multiple: Boolean,
        uploadText: String,
        useBeforeRead: Boolean,
        afterRead: null,
        beforeRead: null,
        previewSize: {
            type: null,
            value: 90
        },
        name: {
            type: [ Number, String ],
            value: ""
        },
        accept: {
            type: String,
            value: "image"
        },
        fileList: {
            type: Array,
            value: [],
            observer: "formatFileList"
        },
        maxSize: {
            type: Number,
            value: Number.MAX_VALUE
        },
        maxCount: {
            type: Number,
            value: 100
        },
        deletable: {
            type: Boolean,
            value: !0
        },
        showUpload: {
            type: Boolean,
            value: !0
        },
        previewImage: {
            type: Boolean,
            value: !0
        },
        previewFullImage: {
            type: Boolean,
            value: !0
        },
        imageFit: {
            type: String,
            value: "scaleToFill"
        },
        uploadIcon: {
            type: String,
            value: "photograph"
        }
    }, i.chooseImageProps), i.chooseVideoProps),
    data: {
        lists: [],
        isInCount: !0
    },
    methods: {
        formatFileList: function() {
            var e = this.data, i = e.fileList, a = void 0 === i ? [] : i, n = e.maxCount, s = a.map(function(e) {
                return Object.assign(Object.assign({}, e), {
                    isImage: void 0 === e.isImage ? (0, t.isImageFile)(e) : e.isImage
                });
            });
            this.setData({
                lists: s,
                isInCount: s.length < n
            });
        },
        getDetail: function(e) {
            return {
                name: this.data.name,
                index: null == e ? this.data.fileList.length : e
            };
        },
        startUpload: function() {
            var e = this, i = this.data, a = i.maxCount, n = i.multiple, s = i.accept, r = i.lists;
            i.disabled || (0, t.chooseFile)(Object.assign(Object.assign({}, this.data), {
                maxCount: a - r.length
            })).then(function(i) {
                var a = null;
                a = (0, t.isVideo)(i, s) ? Object.assign({
                    path: i.tempFilePath
                }, i) : n ? i.tempFiles : i.tempFiles[0], e.onBeforeRead(a);
            }).catch(function(t) {
                e.$emit("error", t);
            });
        },
        onBeforeRead: function(e) {
            var i = this, a = this.data, n = a.beforeRead, s = a.useBeforeRead, r = !0;
            "function" == typeof n && (r = n(e, this.getDetail())), s && (r = new Promise(function(t, a) {
                i.$emit("before-read", Object.assign(Object.assign({
                    file: e
                }, i.getDetail()), {
                    callback: function(e) {
                        e ? t() : a();
                    }
                }));
            })), r && ((0, t.isPromise)(r) ? r.then(function(t) {
                return i.onAfterRead(t || e);
            }) : this.onAfterRead(e));
        },
        onAfterRead: function(e) {
            var t = this.data.maxSize;
            (Array.isArray(e) ? e.some(function(e) {
                return e.size > t;
            }) : e.size > t) ? this.$emit("oversize", Object.assign({
                file: e
            }, this.getDetail())) : ("function" == typeof this.data.afterRead && this.data.afterRead(e, this.getDetail()), 
            this.$emit("after-read", Object.assign({
                file: e
            }, this.getDetail())));
        },
        deleteItem: function(e) {
            var t = e.currentTarget.dataset.index;
            this.$emit("delete", Object.assign(Object.assign({}, this.getDetail(t)), {
                file: this.data.fileList[t]
            }));
        },
        onPreviewImage: function(e) {
            if (this.data.previewFullImage) {
                var t = e.currentTarget.dataset.index, i = this.data.lists, a = i[t];
                wx.previewImage({
                    urls: i.filter(function(e) {
                        return e.isImage;
                    }).map(function(e) {
                        return e.url || e.path;
                    }),
                    current: a.url || a.path,
                    fail: function() {
                        wx.showToast({
                            title: "预览图片失败",
                            icon: "none"
                        });
                    }
                });
            }
        },
        onClickPreview: function(e) {
            var t = e.currentTarget.dataset.index, i = this.data.lists[t];
            this.$emit("click-preview", Object.assign(Object.assign({}, i), this.getDetail(t)));
        }
    }
});