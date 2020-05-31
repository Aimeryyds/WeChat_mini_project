function t(t) {
    var a = [], i = [];
    return t.map(function(t, e) {
        if (t.size / 1024) if (t.size < 1048576) {
            var r = t.size / 1024;
            a.push("查看原图 (" + r.toFixed(2) + "KB)");
        } else {
            var s = t.size / 1048576;
            a.push("查看原图 (" + s.toFixed(2) + "MB)");
        } else a.push("查看原图 (" + t.size || "0)");
        i.push(!1);
    }), {
        size: a,
        isOrigin: i
    };
}

function a(t) {
    var a = [];
    return t.map(function(t) {
        a.push(t.thumburl);
    }), a;
}

var i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./ImageSize.js"));

Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        imageList: {
            type: Array,
            value: []
        },
        index: {
            type: Number,
            value: 0
        },
        showOrigin: {
            type: Boolean,
            value: !0
        },
        showWatermark: {
            type: Boolean,
            value: !1
        },
        watermarkImage: {
            type: String,
            value: ""
        },
        screenWidthRpx: {
            type: Number,
            value: 750
        },
        screenHeightRpx: {
            type: Number,
            value: 1334
        }
    },
    data: {
        mode: "scaleToFill",
        currentImg: [],
        sizeList: [],
        isOrigin: [],
        swiperImg: [],
        maxSize: 40,
        loadOriginImage: 0,
        progress: [],
        interval: [],
        currentIndex: -1
    },
    ready: function() {
        this.initialData(), wx.showLoading({
            title: "正在加载..."
        });
    },
    methods: {
        initialData: function() {
            this.data.currentIndex = this.data.index, this.data.currentImg = a(this.data.imageList), 
            this.data.progress.length = this.data.currentImg.length;
            var i = t(this.data.imageList);
            if (this.data.showText = i.size, this.data.isOrigin = i.isOrigin, this.data.imageList.length <= this.data.maxSize) this.data.swiperImg = this.data.currentImg; else {
                this.data.swiperImg.length = this.data.imageList.length;
                var e = this.data.currentIndex;
                this.data.swiperImg[e] = this.data.currentImg[e], e > 0 && (this.data.swiperImg[e - 1] = this.data.currentImg[e - 1]), 
                e > 0 && e < this.data.currentImg.length - 1 && (this.data.swiperImg[e + 1] = this.data.currentImg[e + 1]);
            }
            this.setData(this.data);
        },
        previewImage: function(t) {
            this.data.loadOriginImage;
        },
        imageLoad: function(t) {
            var a = t.target.id.replace("img", "") - 0;
            !0 === this.data.isOrigin[a] && (this.data.showText[a] = "complete", this.data.progress[a] = 0, 
            this.setData(this.data), a === this.data.loadOriginImage - 1 && (this.data.loadOriginImage = 0));
            var i = t.detail.width, e = t.detail.height, r = this.getImageSize(i, e);
            this.data.sizeList[a] = {
                width: r.imgWidth,
                height: r.imgHeight
            }, this.setData(this.data), wx.hideLoading();
        },
        imageError: function(t) {
            var a = parseInt(t.currentTarget.id.replace("img", ""));
            this.loadingImageProgress(!1, a), this.triggerEvent("imageError", {
                index: a
            });
        },
        getImageSize: function(t, a) {
            var e = 0, r = 0, s = this.data.screenWidthRpx, n = this.data.screenHeightRpx, h = s / n, d = t / a;
            return t <= s / 4 || this.data.isOrigin && t <= s && a >= n && d < h ? (e = t, r = a) : d < h && t >= s / 4 && t <= s && a >= n / 4 && a <= n ? (e = i.default.imageZoomWidthUtil(t, a, n).imageWidth, 
            r = n) : (e = s, r = i.default.imageZoomHeightUtil(t, a, s).imageHeight), {
                imgWidth: e,
                imgHeight: r
            };
        },
        onSlideChangeEnd: function(t) {
            if ("touch" === t.detail.source) {
                var a = t.detail.current;
                this.data.currentIndex = a, this.data.currentImg.length > this.data.maxSize && (this.data.swiperImg[a] = this.data.currentImg[a], 
                a > 0 && (this.data.swiperImg[a - 1] = this.data.currentImg[a - 1]), a > 0 && a < this.data.currentImg.length - 1 && (this.data.swiperImg[a + 1] = this.data.currentImg[a + 1])), 
                this.setData(this.data), this.triggerEvent("slide", {
                    current: a
                });
            }
        },
        changeToOrigin: function() {
            this.data.interval[this.data.currentIndex] || (this.triggerEvent("changeOrigin", {
                currentIndex: this.data.currentIndex
            }), this.loadingImageProgress(null, this.data.currentIndex));
        },
        setToOrigin: function(t, a) {
            t ? (this.data.currentImg[a] = t, this.data.swiperImg[a] = t, this.data.isOrigin[a] = !0, 
            this.data.loadOriginImage = a + 1, this.setData(this.data), clearInterval(this["interval" + a])) : this.loadingImageProgress(!1, a);
        },
        playVideoHandle: function(t) {
            var a = t.currentTarget.dataset.index;
            this.triggerEvent("playvideo", {
                index: a
            });
        },
        loadingImageProgress: function(t, a) {
            var i = this, e = this.data.progress;
            if (null === t) {
                var r = void 0, s = 0, n = this.data.showText;
                this.data.interval[a] = setInterval(function() {
                    "complete" === n[a] ? (clearInterval(i.interval), i.interval = null) : s >= 100 ? s = 95 : (r = Math.ceil(5 * Math.random()), 
                    s = s + r + 10 >= 100 ? s : s + r + 10), s !== e[a] && (e[a] = s, i.setData({
                        progress: e
                    }));
                }, 500);
            } else clearInterval(this.data.interval[a]), this.data.interval[a] = null, e[a] = 0, 
            this.setData({
                progress: e
            });
        }
    }
});