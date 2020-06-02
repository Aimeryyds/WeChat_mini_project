function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ t.default, "wx://form-field" ],
    properties: {},
    data: {
        haswarn: !1,
        showClear: !1,
        isImageFile: !0,
        isUploading: !1
    },
    attached: function() {
        var a = this;
        [ "inner", "inptext", "btnwrapper", "btntext" ].forEach(function(t) {
            return a.parseStyle(t);
        }), this.setData({
            inptext: this.data.param.inpval
        });
    },
    methods: {
        chooseImage: function() {
            var a = this;
            wx.chooseImage({
                count: 1,
                success: function(t) {
                    var e = t.tempFiles[0], i = 1 * Math.pow(1024, 2);
                    if (i < e.size) return wx.showToast({
                        title: "文件太大（不超过1M）",
                        icon: "none"
                    }), !1;
                    a.setData({
                        isUploading: !0
                    }), a.setData({
                        inptext: "正在传送..."
                    });
                    var n = (getApp().globalData.config.domain || "") + "/index.php?_m=wp_frontpage&_a=locale_users_uploadify";
                    wx.uploadFile({
                        url: n,
                        filePath: e.path,
                        name: "Filedata",
                        formData: {
                            maxSize: i
                        },
                        success: function(t) {
                            var e = JSON.parse(t.data), i = e.fname, n = i.substr(i.lastIndexOf("/") + 1).replace(/[0-9a-z]{4}_--_cndnspic_/i, "...");
                            a.setData({
                                showClear: !0,
                                value: i,
                                inptext: "已选择图片 " + n + "（" + e.fsize + "）"
                            }), a.setData({
                                isUploading: !1
                            });
                        },
                        fail: function(t) {
                            wx.showToast({
                                title: t.errMsg,
                                icon: "none",
                                duration: 2500,
                                complete: function() {
                                    a.setData({
                                        isUploading: !1
                                    }), a.setData({
                                        inptext: a.data.param.inpval
                                    });
                                }
                            });
                        }
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "请重新尝试",
                        image: "/static/icons/warning.png"
                    });
                }
            });
        },
        clearImage: function() {
            var a = this.data._value_, t = a.substr(a.lastIndexOf("/") + 1);
            getApp().apiRequest("form_submit", "remove", {
                data: {
                    fname: t
                },
                method: "POST"
            }), this.setData({
                showClear: !1,
                value: "",
                inptext: this.data.param.inpval
            });
        },
        parseStyle: function(t) {
            var e = "", i = getApp(), n = this.data.param[t + "_style"];
            for (var s in n) {
                var r = n[s];
                "number" == typeof r && (r = i.px2rpx(r), "height" == s && (e += "line-" + s + ":" + r + ";")), 
                e += s + ":" + r + ";";
            }
            this.setData(a({}, t + "_style", e));
        }
    }
});