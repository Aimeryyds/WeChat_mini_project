var a = getApp(), e = require("../../sdk/dingxiang.js");

require("../../utils/md5.js");

Page(function(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}({
    data: {
        brokerid: null,
        cityId: null,
        uploadImg: null,
        userid: null,
        recommenderuid: null,
        srcImage: "https://res.5i5j.com/cache/weixin/common/scimg-icon.png",
        cityArray: [],
        imgTime: null,
        haibaoImg: null,
        showOneButtonDialog: !0,
        uname: null,
        dataImage: null,
        loadinghide: !1,
        filterMask: !0
    },
    onLoad: function(t) {
        var o = this;
        new e({
            appId: a.globalData.dxAppId
        }, function(a, e) {
            a ? console.log(a) : (console.log("海报页面的值：", t), null != o.data.userid && null != o.data.uname || o.setData({
                loadinghide: !0,
                filterMask: !1
            }), o.setData({
                dxDeviceId: e,
                userid: t.uid,
                uname: t.uname,
                recommenderuid: t.recommenderuid
            }), console.log("options", t), o.cityArrayChange());
        });
    },
    cityArrayChange: function() {
        var e = a.globalData.url_host, t = this;
        wx.request({
            url: e + "/appapi/home/switchweb",
            method: "POST",
            data: {},
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: t.data.dxDeviceId
            },
            success: function(a) {
                200 == a.data.status && (console.log("城市--------------", a), t.setData({
                    cityArray: a.data.data
                }));
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    bindPickerChange: function(a) {
        console.log("城市索引值", a.detail.value), this.setData({
            rangekey: a.detail.value,
            cityId: this.data.cityArray[a.detail.value].id
        }), console.log("城市id", this.data.cityId);
    },
    sqClose: function() {
        this.setData({
            showOneButtonDialog: !0
        });
    },
    uploadImageBtn: function() {
        var e = this, t = a.globalData.url_host;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(a) {
                e.setData({
                    srcImage: a.tempFilePaths
                }), e.showImgLoading("图片上传中..."), wx.getFileSystemManager().readFile({
                    filePath: a.tempFilePaths[0],
                    encoding: "base64",
                    success: function(a) {
                        var o = "data:image/png;base64," + a.data;
                        e.data.brokerInfo, e.data.cityId, e.data.uid;
                        wx.request({
                            url: t + "/wxim/checkimg",
                            method: "post",
                            data: {
                                uid: e.data.uid,
                                img: o
                            },
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                deviceSource: 3,
                                dxdeviceId: e.data.dxDeviceId
                            },
                            success: function(a) {
                                1 == a.data.status ? (e.setData({
                                    dataImage: a.data.url
                                }), e.hideLoading(), wx.showToast({
                                    title: "上传成功",
                                    icon: "none"
                                })) : wx.showToast({
                                    title: "您发送的图片包含敏感信息",
                                    icon: "none"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    getImage: function(e) {
        var t = this, o = a.globalData.url_host, i = {
            cityid: t.data.cityId,
            uid: t.data.userid
        };
        wx.request({
            url: o + "/recruitment/getimage",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: t.data.dxDeviceId
            },
            success: function(a) {
                console.log("res-", a), 200 == a.data.status ? (console.log("生成海报的图片--------------：", a.data.data), 
                t.hideLoading(), t.setData({
                    haibaoImg: a.data.data,
                    showOneButtonDialog: !1
                })) : wx.showToast({
                    title: a.data.msg,
                    icon: "none"
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "返回失败，请稍后再试！",
                    icon: "none"
                }), console.log("error", a);
            }
        });
    },
    formSubmit: function(e) {
        var t = this, o = a.globalData.url_host;
        if ("" == e.detail.value.cityName) return wx.showToast({
            title: "请选择城市",
            icon: "none"
        }), !1;
        if ("https://res.5i5j.com/cache/weixin/common/scimg-icon.png" == t.data.srcImage) return wx.showToast({
            title: "请上传头像",
            icon: "none"
        }), !1;
        var i = {
            cityid: t.data.cityId,
            uid: t.data.userid,
            name: t.data.uname,
            broupload: t.data.dataImage
        };
        wx.request({
            url: o + "/recruitment/posterimage",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: t.data.dxDeviceId
            },
            success: function(a) {
                if (console.log("res-----------", a), 200 == a.data.status) {
                    console.log("res.data.msg,", a.data.msg);
                    var e = 1e3 * a.data.data.time;
                    console.log("生成海报用的秒：", e), wx.showToast({
                        title: a.data.msg,
                        icon: "none"
                    }), t.showLoading("海报生成中..."), setTimeout(function() {
                        t.getImage();
                    }, e);
                } else wx.showToast({
                    title: a.data.msg,
                    icon: "none"
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "生成海报失败，请稍后再试！",
                    icon: "none"
                }), console.log("error", a);
            }
        });
    },
    showLoading: function(a) {
        wx.showLoading ? wx.showLoading({
            title: a,
            mask: !0
        }) : wx.showToast({
            title: a,
            icon: "loading",
            mask: !0,
            duration: 15e3
        });
    },
    showImgLoading: function(a) {
        wx.showLoading ? wx.showLoading({
            title: a,
            mask: !0
        }) : wx.showToast({
            title: a,
            icon: "loading",
            mask: !0,
            duration: 3e3
        });
    },
    hideLoading: function() {
        wx.hideLoading ? wx.hideLoading() : wx.hideToast();
    },
    onShareAppMessage: function(a) {
        return {
            title: "海报",
            imageUrl: this.data.haibaoImg
        };
    },
    hbImg: function(a) {
        var e = this;
        a.target.dataset.src;
        wx.previewImage({
            current: e.data.haibaoImg,
            urls: [ e.data.haibaoImg ]
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        wx.downloadFile({
            url: a.data.haibaoImg,
            success: function(e) {
                console.log("res图片路径", e), a.setData({
                    downloadPosterBg: e.tempFilePath
                });
            },
            fail: function() {
                console.log("fail");
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
}, "onShareAppMessage", function() {}));