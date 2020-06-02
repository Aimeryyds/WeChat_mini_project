var t = getApp();

Page({
    data: {
        city: "",
        events: [],
        activityid: "",
        imageList: [],
        title: "",
        message: "",
        img_count: 9,
        loading: !0,
        loading_fail: !1,
        allowadd: !1,
        checkdown: !0,
        tag: ""
    },
    onLoad: function(a) {
        wx.hideShareMenu();
        var e = this;
        a.tag && e.setData({
            tag: "#" + a.tag + "#"
        }), wx.setStorageSync("event_id", 0), wx.setStorageSync("event_subject", "");
        var i = "event_getDoingEventList", n = {
            type: "pai"
        }, o = t.getParam(i, n);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                e.setData({
                    events: t.data[i].data
                });
            }
        });
    },
    onShow: function() {
        var t = this, a = wx.getStorageSync("event_id"), e = wx.getStorageSync("event_subject");
        a > 0 ? t.setData({
            activityid: a,
            event_subject: e
        }) : t.setData({
            activityid: "",
            event_subject: ""
        });
    },
    pai_title: function(t) {
        this.setData({
            title: t.detail.value
        });
    },
    pai_message: function(t) {
        this.setData({
            message: t.detail.value
        }), this.check_allow();
    },
    pai_city: function() {
        var t = this;
        "" == t.data.city && (t.setData({
            city: ""
        }), wx.getLocation({
            type: "gcj02",
            success: function(a) {
                var e = a.latitude, i = a.longitude;
                wx.request({
                    url: "https://api.map.baidu.com/geocoder/v2/?ak=PvmgTD1172OZ9rGrfnwHIGQRSgta11a2&output=json",
                    data: {
                        location: e + "," + i
                    },
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(a) {
                        t.setData({
                            city: a.data.result.addressComponent.city
                        });
                    },
                    fail: function(a) {
                        t.setData({
                            city: ""
                        });
                    }
                });
            },
            fail: function(a) {
                console.log(a), t.setData({
                    city: ""
                }), wx.showModal({
                    title: "定位服务未开启",
                    content: "可在「右上角」-「关于」-「右上角」-「设置」中开启位置信息",
                    confirmColor: "#ff6767",
                    showCancel: !0
                });
            }
        }));
    },
    close_city: function(t) {
        this.setData({
            city: ""
        });
    },
    chooseImage: function() {
        var t = this, a = t.data.img_count;
        wx.chooseImage({
            count: a,
            sizeType: [ "compressed" ],
            success: function(a) {
                t.upload_file(a.tempFilePaths, 0), wx.showLoading({
                    title: "加载中",
                    mask: !0
                });
            },
            fail: function(t) {}
        });
    },
    previewImage: function(t) {
        var a = t.target.dataset.src;
        wx.previewImage({
            current: a,
            urls: this.data.imageList
        });
    },
    del_img: function(t) {
        var a = this, e = a.data.imageList, i = t.currentTarget.dataset.num, n = e[i];
        e.splice(i, 1), a.setData({
            imageList: e,
            img_count: a.data.img_count + 1
        }), a.delAliYunObject(n), a.check_allow();
    },
    delAliYunObject: function(a) {
        var e = {
            img: a
        }, i = t.getParam("common_delAliYunObject", e);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: i
            }
        });
    },
    upload_file: function(a, e) {
        var i = this, n = 0, o = 0, s = "common_upimg", c = {
            type: "pai",
            uid: t.globalData.uid,
            session_key: t.globalData.key
        }, l = t.getParam(s, c);
        wx.uploadFile({
            url: t.globalData.murl5 + "?p=" + JSON.stringify(l),
            filePath: a[e],
            name: "file",
            formData: {},
            header: {
                "content-type": "multipart/form-data"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                0 == a[s].error ? (n++, i.setData({
                    imageList: i.data.imageList.concat(a[s].data),
                    img_count: i.data.img_count - 1
                }), i.check_allow()) : o++;
            },
            fail: function(t) {
                o++;
            },
            complete: function(t) {
                ++e == a.length ? (wx.hideLoading(), o > 0 && wx.showToast({
                    icon: "none",
                    title: "图片上传失败：" + o
                })) : i.upload_file(a, e);
            }
        });
    },
    check_allow: function() {
        var t = this, a = !0;
        "" != t.data.message && 0 != t.data.imageList.length || (a = !1), t.setData({
            allowadd: a
        });
    },
    pai_add_drop: function() {
        var t = this;
        t.data.imageList.length > 0 || "" != t.data.title || "" != t.data.message ? wx.showModal({
            content: "确定退出编辑吗？退出后内容不保存",
            success: function(a) {
                if (a.confirm) {
                    for (var e = 0; e < t.data.imageList.length; e++) t.delAliYunObject(t.data.imageList[e]);
                    t.data.tag ? wx.switchTab({
                        url: "../index/index"
                    }) : wx.navigateBack();
                } else if (a.cancel) return !1;
            }
        }) : t.data.tag ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    pai_add_do: function() {
        var a, e = this, i = [];
        for (a = 0; a < e.data.imageList.length; a++) i.push(e.data.imageList[a].replace("https://i3.meishichina.com/", ""));
        wx.showToast({
            title: "发布中...",
            icon: "loading",
            duration: 1e4
        });
        var n = "pai_uploadPai", o = {
            content: e.data.message,
            title: e.data.title,
            city: e.data.city,
            hd_id: e.data.activityid,
            pics: i,
            session_key: t.globalData.key
        }, s = t.getParam(n, o);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                wx.setStorageSync("showmy", 1), wx.setStorageSync("showmy_info", 2), 0 == t.data[n].error ? (wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.hideToast(), wx.switchTab({
                        url: "../my/my?id=2"
                    });
                }, 1e3)) : -4 == t.data[n].error ? (wx.hideToast(), wx.showToast({
                    icon: "none",
                    title: t.data[n].msg ? t.data[n].msg : "发布失败"
                }), setTimeout(function() {
                    wx.hideToast(), wx.switchTab({
                        url: "../my/my?id=2"
                    });
                }, 1500)) : (wx.hideToast(), wx.showToast({
                    icon: "none",
                    title: t.data[n].msg ? t.data[n].msg : "发布失败"
                }));
            },
            fail: function(t) {
                wx.showToast({
                    icon: "none",
                    title: "发布失败"
                });
            }
        });
    },
    onReady: function() {}
});