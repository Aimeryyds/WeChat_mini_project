var i = function(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}(require("../ImagePreview/ImageSize.js")), t = getApp().globalData;

Component({
    properties: {
        originSrc: {
            type: String
        },
        thumbSrc: {
            type: String,
            observer: function(i, t) {
                this.setData({
                    showSrc: i
                });
            }
        },
        imgsize: {
            type: String
        },
        filename: {
            type: String
        },
        checkSizeFn: {
            type: Function
        }
    },
    data: {
        mode: "widthFix",
        width: 0,
        showSrc: "",
        isOrigin: !1,
        showSize: "",
        originImage: "",
        isLoadingOrigin: !1,
        loadingProcess: 1,
        firstError: !0,
        firstLoad: !0
    },
    ready: function() {
        this.setData({
            showSrc: this.data.thumbSrc,
            loadImg: this.data.thumbSrc,
            showSize: this.calculateSize(this.data.imgsize),
            originImage: this.calculateOrigin(this.data.originSrc)
        });
    },
    methods: {
        imageLoad: function(i) {
            var t = this;
            wx.toasthide();
            var a = i.detail.width, e = i.detail.height, r = this.getImageSize(a, e, this.data.isOrigin);
            this.setData({
                width: r.imgWidth
            }), this.data.isLoadingOrigin && (this.setData({
                showSrc: this.data.loadImg,
                loadingProcess: 100
            }), clearInterval(this.data.timer), setTimeout(function() {
                t.data.isLoadingOrigin && t.setData({
                    isLoadingOrigin: !1,
                    isOrigin: !0
                });
            }, 1e3)), this.data.firstLoad && (this.triggerEvent("imgLoad", {
                isOrigin: this.data.isLoadingOrigin
            }), this.data.firstLoad = !1);
        },
        imageError: function(i) {
            var t = this;
            this.errTimer && clearTimeout(this.errTimer);
            var a = "showImg" === i.target.id, e = a ? this.data.showSrc : this.data.loadImg, r = e.indexOf("&wxtime=");
            e = r >= 0 ? e.substr(0, r) + "&wxtime=" + Date.parse(new Date()) : e + "&wxtime=" + Date.parse(new Date()), 
            a ? this.setData({
                showSrc: e
            }) : this.errTimer = setTimeout(function() {
                wx.wetoast({
                    content: "原图加载失败，请稍后重试",
                    loading: !1,
                    duration: 1e3,
                    success: function() {
                        t.setData({
                            loadImg: t.data.thumbSrc,
                            isLoadingOrigin: !1,
                            isOrigin: !1
                        });
                    }
                });
            }, 4e3), this.data.firstError && (this.triggerEvent("imgError", {
                isOrigin: this.data.isLoadingOrigin,
                msg: i.detail.errMsg
            }), this.data.firstError = !1);
        },
        getImageSize: function(a, e, r) {
            var s = 0, n = t.systemInfo.windowWidthRpx, o = t.systemInfo.windowHeightRpx, g = (t.systemInfo.ratio, 
            n / o), d = a / e;
            return s = a < .5 * n ? a : a > .5 * n && a < n ? e > o ? r ? n : a : d < g ? n : i.default.imageZoomWidthUtil(a, e, o).imageWidth : n, 
            {
                imgWidth: s
            };
        },
        calculateSize: function(i) {
            var t = "查看原图(";
            return t += i / 1024 ? i < 1048576 ? (i / 1024).toFixed(2) + "KB)" : (i / 1048576).toFixed(2) + "MB)" : i + ")";
        },
        calculateOrigin: function(i) {
            return this.data.filename.indexOf(".heic") >= 0 ? this.data.thumbSrc + "?v=1" : i.replace("pcsdata.baidu.com", "d.pcs.baidu.com");
        },
        changeToOrigin: function() {
            this.data.isLoadingOrigin || this.data.checkSizeFn() && (this.setData({
                loadImg: this.data.originImage,
                isLoadingOrigin: !0,
                loadingProcess: 2,
                timer: this.computeProcess(),
                firstError: !0,
                firstLoad: !0
            }), this.triggerEvent("changeToOrigin"));
        },
        computeProcess: function() {
            var i = this;
            return setInterval(function() {
                var t = i.data.loadingProcess, a = Math.floor(Math.random() * (100 - t) + 1);
                t + a >= 100 ? clearInterval(i.data.timer) : i.setData({
                    loadingProcess: t + a
                });
            }, 500);
        },
        showActionsheet: function(i) {
            !this.data.isLoadingOrigin && this.triggerEvent("showActionsheet");
        },
        previewImage: function() {
            !this.data.isLoadingOrigin && this.triggerEvent("previewImage");
        }
    }
});