var t = require("../../utils/https.js"), e = require("../../utils/util.js"), a = t.imgurl;

Page({
    data: {
        title: "index",
        smtitle: "上报损坏车辆，得优惠券奖励",
        wxtitle: "请选择损坏部位",
        wxtitle2: "上传照片可更快获得奖励(最多3张)",
        imgsm: a + "sm.png",
        img2: a + "2.png",
        upimg: a + "upimg.png",
        delImg: a + "delImg.png",
        state: [],
        upImgList: [],
        upImgL: [],
        scanval: "",
        lat: "",
        lng: "",
        checkboxArr: [ {
            name: "显示器",
            checked: !1
        }, {
            name: "刹车",
            checked: !1
        }, {
            name: "车轮",
            checked: !1
        }, {
            name: "车座",
            checked: !1
        }, {
            name: "二维码",
            checked: !1
        }, {
            name: "车锁",
            checked: !1
        }, {
            name: "支架",
            checked: !1
        } ],
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                var a = t.latitude, n = t.longitude;
                e.setData({
                    lat: a,
                    lng: n
                });
            }
        });
    },
    checkbox: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.checkboxArr;
        a[e].checked = !a[e].checked, this.setData({
            checkboxArr: a
        });
    },
    checkboxChange: function(t) {
        var e = t.detail.value;
        console.log(e), this.setData({
            checkValue: e
        });
    },
    formSubmit: function(t) {
        wx.showToast({
            title: "提交中...",
            mask: !0,
            duration: 1e4
        }), setTimeout(function() {
            wx.hideToast();
        }, 6e3);
        var e = this, a = e.data.upImgList, n = t.detail.value.input, o = t.detail.value.textareaCont, i = wx.getStorageSync("uid"), s = wx.getStorageSync("account"), c = t.detail.value.seletList, u = t.detail.value.seletList2, l = c.join("|") + "|" + u.join("|");
        t.detail.value.checkAllcont;
        return "" == n ? (wx.showToast({
            title: "请输入车辆编号",
            icon: "none",
            duration: 2e3
        }), !1) : 0 == a.length ? (wx.showToast({
            title: "请上传车辆损坏部位照片",
            icon: "none",
            duration: 2e3
        }), !1) : 0 == o ? (wx.showToast({
            title: "请输入车辆损坏部位描述",
            icon: "none",
            duration: 2e3
        }), !1) : void e.uploadFileImg(a, i, s, n, l, o);
    },
    uploadFileImg: function(e, a, n, o, i, s) {
        var c = this, e = c.data.upImgList, a = wx.getStorageSync("uid"), u = wx.getStorageSync("token"), l = [], d = t.imgurlOne + "/FileResources/UploadImages";
        wx.showToast({
            title: "提交中...",
            duration: 1e4,
            mask: !0
        });
        for (var r = 0; r < e.length; r++) !function(t) {
            wx.uploadFile({
                url: d,
                filePath: e[t],
                name: "file",
                header: {
                    "Content-Type": "application/json",
                    token: u
                },
                formData: {
                    uid: a
                },
                success: function(u) {
                    console.log(u);
                    var d = JSON.parse(u.data).data;
                    console.log(d), l.push(d[0].file_resource_id), c.setData({
                        upImgL: l
                    }), t == e.length - 1 && c.submitdata(a, n, o, i, s);
                },
                fail: function(t) {
                    wx.hideToast();
                    var e = JSON.parse(t.data).retmsg;
                    wx.showModal({
                        title: "上传失败",
                        content: e,
                        showCancel: !1,
                        success: function(t) {
                            t.confirm;
                        }
                    });
                }
            });
        }(r);
    },
    submitdata: function(e, a, n, o, i) {
        wx.showToast({
            title: "提交中...",
            mask: !0,
            duration: 1e4
        });
        var s = this, c = {
            uid: e,
            account: a,
            faulttype: 1,
            vid: n,
            place: o,
            image_id: this.data.upImgL.join("|"),
            content: i,
            lat: s.data.lat,
            lng: s.data.lng
        };
        t.req("Veh/FaultApply", c, function(t, e) {
            0 == e.data.code ? (wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 1e3,
                mask: !0
            }), setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3)) : (wx.hideToast(), wx.showModal({
                title: "提交失败",
                content: e.data.retmsg,
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
            }));
        });
    },
    select: function(t) {
        this.setData({
            state: t.currentTarget.dataset.id
        });
    },
    scan: function(t) {
        var a = this;
        wx.scanCode({
            success: function(t) {
                var n = t.result, o = e.parseURL(n).id;
                a.setData({
                    scanval: o
                });
            }
        });
    },
    updataImg: function(t) {
        var e = this, a = e.data.upImgList;
        wx.showActionSheet({
            itemList: [ "拍照上传", "相册选择" ],
            success: function(t) {
                0 == t.tapIndex ? wx.chooseImage({
                    count: 3,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "camera" ],
                    success: function(t) {
                        var n = t.tempFilePaths, o = a.concat(n);
                        o.length >= 4 ? wx.showToast({
                            title: "图片不能超过3张！",
                            icon: "none",
                            duration: 2e3
                        }) : e.setData({
                            upImgList: o
                        });
                    }
                }) : wx.chooseImage({
                    count: 3,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "album" ],
                    success: function(t) {
                        var n = t.tempFilePaths, o = a.concat(n);
                        o.length >= 4 ? wx.showToast({
                            title: "图片不能超过3张！",
                            icon: "none",
                            duration: 2e3
                        }) : e.setData({
                            upImgList: o
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    deleteImg: function(t) {
        var e = this.data.upImgList, a = t.currentTarget.dataset.index;
        e.splice(a, 1), this.setData({
            upImgList: e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});