var t, e, o = getApp(), n = 0, a = (require("../../utils/sha1.js"), require("../../utils/base64.js"), 
""), i = "base", c = 0, s = 0, r = !1, l = !1;

Page({
    data: {
        animation: ""
    },
    onLoad: function(t) {
        var e = this;
        if (l = !1, t.meetingId) o.globalData.meetingId = t.meetingId; else if (t.q) {
            var n = decodeURIComponent(t.q);
            console.log("q=" + t.q);
            var a = n.indexOf("?");
            if (console.log("index=" + a), a > 0 && a + 1 < n.length) {
                var i = n.substring(a + 1, n.length);
                o.globalData.meetingId = e.getUrlParms(i, "meetingId");
            }
        }
    },
    onReady: function() {
        var t = this;
        if (l) return l = !1, void wx.redirectTo({
            url: "/pages/face/detect"
        });
        s = 0, t.toSetAnimation();
    },
    onShow: function() {
        var t = this;
        r = !1, c = 0, setTimeout(function() {
            if (-1 == s) return s = 0, void wx.redirectTo({
                url: "/pages/face/detect"
            });
            t.toCheckAuthorize();
        }, 80);
    },
    onHide: function() {
        r = !0;
    },
    toTakePhoto: function(t) {
        n = 1;
        var e = this;
        c >= 3 ? wx.showModal({
            title: "提示",
            content: "请正脸面向屏幕，并请确认您已经完善好了资料，点击确定重新识别",
            showCancel: !1,
            success: function(t) {
                t.confirm && (c = 0, console.log("用户点击确定"), e.toTakePhoto());
            }
        }) : (c++, setTimeout(function() {
            wx.createCameraContext().takePhoto({
                quality: "low",
                success: function(t) {
                    console.log(t.tempImagePath), e.toSaveImage(t.tempImagePath);
                },
                complete: function(t) {
                    console.log(t);
                },
                fail: function(t) {
                    console.log(t);
                }
            });
        }, 400));
    },
    toSaveImage: function(t) {
        if (!r) {
            var e = this;
            console.log("开始"), wx.uploadFile({
                url: "https://recognition.image.myqcloud.com/face/identify",
                filePath: t,
                name: "image",
                formData: {
                    group_id: i,
                    image: "identify.jpg",
                    appid: "1258172012"
                },
                header: {
                    "content-type": "multipart/form-data",
                    Host: "recognition.image.myqcloud.com",
                    Authorization: a
                },
                success: function(n) {
                    if (console.log("成功"), console.log(n), n.data) {
                        var a = JSON.parse(n.data);
                        if (0 != a.code) e.toTakePhoto(); else {
                            var i = a.data.candidates, s = !1;
                            if (i && null != i && i.length > 0) for (var l = 0; l < i.length; l++) if (i[l].confidence > 86) {
                                if (s = !0, c = 0, o.globalData.facePersons = i[l], o.globalData.faceImg = t, r) return;
                                return void wx.navigateTo({
                                    url: "/pages/face/person"
                                });
                            }
                            s || e.toTakePhoto();
                        }
                    }
                },
                fail: function(t) {
                    console.log(t), e.toTakePhoto();
                }
            });
        }
    },
    faceReady: function() {
        var t = this;
        wx.request({
            url: o.globalData.domainPath + o.globalData.projectName + "/queryFacePerson.do",
            data: {
                requestType: "sign"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), "0000" == e.data.errcode && (i = e.data.group_id, a = e.data.sign, 
                t.toTakePhoto());
            }
        });
    },
    translate: function(e) {
        var o = this;
        (t = wx.createAnimation()).translateY(e).step({
            duration: 1e3,
            timingFunction: "linear",
            delay: 0,
            transformOrigin: "50% 50% 0"
        }), o.setData({
            animation: t.export()
        });
    },
    translateO: function() {
        var e = this;
        (t = wx.createAnimation()).translateY(-120).step({
            duration: 0,
            timingFunction: "step-start",
            delay: 0,
            transformOrigin: "50% 50% 0"
        }), e.setData({
            animation: t.export()
        });
    },
    startTranslate: function(t) {
        var e = this;
        e.translate(t), setTimeout(function() {
            e.translateO();
        }, 1120);
    },
    toTranslate: function() {
        var t = this, o = 0;
        (e = wx.createSelectorQuery()).select(".camera-view").boundingClientRect(), e.exec(function(e) {
            o = e[0].height - 24, console.log(e[0].width), t.startTranslate(o), setInterval(function() {
                t.startTranslate(o);
            }, 1220);
        });
    },
    setAnimationW: function() {
        var t = this;
        (e = wx.createSelectorQuery()).select(".camera-view").boundingClientRect(), e.exec(function(e) {
            var o = e[0].width - 24;
            o += "px;", console.log(o), t.setData({
                width: o
            });
        });
    },
    toSetAnimation: function() {
        var t = this;
        t.setAnimationW(), t.toTranslate();
    },
    getUrlParms: function(t, e) {
        var o = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = t.match(o);
        return null != n ? n[2] : null;
    },
    toclearTimeout: function(t) {
        try {
            console.log("清理timeoutID=" + t), wx.clearTimeout(t);
        } catch (t) {}
    },
    toCheckAuthorize: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                console.log("到这里了"), console.log(e), e.authSetting["scope.camera"] ? t.faceReady() : e.authSetting["scope.camera"] || (0 == e.authSetting["scope.camera"] ? t.toOpenSetting() : l = !0);
            }
        });
    },
    toAuthorize: function() {
        var t = this;
        wx.authorize({
            scope: "scope.camera",
            success: function(e) {
                console.log(e), t.faceReady();
            },
            fail: function(e) {
                console.log(e), t.toOpenSetting();
            }
        });
    },
    toOpenSetting: function() {
        wx.showModal({
            title: "提示",
            content: "请先授权照相权限",
            showCancel: !1,
            success: function(t) {
                t.confirm && (c = 0, console.log("用户点击确定"), wx.openSetting({
                    success: function(t) {
                        console.log("授权成功"), console.log(t), t.authSetting["scope.camera"] && (s = -1);
                    },
                    fail: function(t) {
                        console.log("授权失败");
                    }
                }));
            }
        });
    }
});