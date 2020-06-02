var t = require("../../utils/https.js"), e = require("../../utils/util.js"), a = t.imgurl;

Page({
    data: {
        title: "index",
        smtitle: "请填写举报信息",
        imgsm: a + "sm.png",
        imgjbp: a + "jbp.png",
        delImg: a + "delImg.png",
        state: [],
        upImgList: [],
        upImgL: [],
        scanval: "",
        lat: "",
        lng: "",
        checkboxArr: [ {
            name: "违规乱停",
            checked: !1
        }, {
            name: "私锁公用",
            checked: !1
        }, {
            name: "二维码破损",
            checked: !1
        }, {
            name: "刹车损坏",
            checked: !1
        }, {
            name: "轮胎破损",
            checked: !1
        }, {
            name: "其他",
            checked: !1
        } ],
        myHight: ""
    },
    myEventListener: function(t) {
        this.setData({
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
        var e = t.detail.value.join("|");
        console.log(e), this.setData({
            checkValue: e
        });
    },
    formSubmit: function(t) {
        wx.showToast({
            title: "提交中...",
            mask: !0,
            duration: 2e4
        });
        var e = this, a = e.data.upImgList, n = t.detail.value.input, i = t.detail.value.textareaCont, s = wx.getStorageSync("uid"), o = wx.getStorageSync("account"), c = t.detail.value.seletList.join("|");
        return "" == n ? (wx.showToast({
            title: "请输入车辆编号",
            icon: "none",
            duration: 2e3
        }), !1) : 0 == a.length ? (wx.showToast({
            title: "请上传车辆损坏部位照片",
            icon: "none",
            duration: 2e3
        }), !1) : 0 == i ? (wx.showToast({
            title: "请输入车辆损坏部位描述",
            icon: "none",
            duration: 2e3
        }), !1) : void e.uploadFileImg(a, n, i, s, o, c);
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
                var n = t.result, i = e.parseURL(n).id;
                a.setData({
                    scanval: i
                });
            }
        });
    },
    updataImg: function(e) {
        var a = this, n = this.data.upImgList, i = wx.getStorageSync("uid");
        wx.getStorageSync("token"), t.rootDocment;
        wx.showActionSheet({
            itemList: [ "拍照上传", "相册选择" ],
            success: function(t) {
                0 == t.tapIndex ? wx.chooseImage({
                    count: 3,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "camera" ],
                    success: function(t) {
                        var e = t.tempFilePaths, i = n.concat(e);
                        i.length >= 4 ? wx.showToast({
                            title: "图片不能超过3张！",
                            icon: "none",
                            duration: 2e3
                        }) : a.setData({
                            upImgList: i
                        });
                    }
                }) : wx.chooseImage({
                    count: 3,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "album" ],
                    success: function(t) {
                        var e = t.tempFilePaths, i = n.concat(e);
                        i.length >= 4 ? wx.showToast({
                            title: "图片不能超过3张！",
                            icon: "none",
                            duration: 2e3
                        }) : a.setData({
                            upImgList: i
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    submitdata: function(e, a, n, i, s) {
        wx.showToast({
            title: "提交中...",
            mask: !0,
            duration: 1e4
        });
        var o = this, c = {
            uid: n,
            account: i,
            faulttype: 4,
            vid: e,
            place: s,
            image_id: o.data.upImgL.join("|"),
            content: a,
            lat: o.data.lat,
            lng: o.data.lng
        };
        t.req("Veh/FaultApply", c, function(t, e) {
            0 == e.data.code ? (wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3,
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
    uploadFileImg: function(e, a, n, i, s, o) {
        var c = this, e = c.data.upImgList, i = wx.getStorageSync("uid"), u = wx.getStorageSync("token"), l = [], r = t.imgurlOne + "/FileResources/UploadImages";
        wx.showToast({
            title: "提交中...",
            duration: 1e4,
            mask: !0
        });
        for (var d = 0; d < e.length; d++) !function(t) {
            wx.uploadFile({
                url: r,
                filePath: e[t],
                name: "uploadfile_ant",
                header: {
                    "Content-Type": "application/json",
                    token: u
                },
                formData: {
                    uid: i
                },
                success: function(u) {
                    wx.hideToast();
                    var r = JSON.parse(u.data).data;
                    l.push(r[0].file_resource_id), c.setData({
                        upImgL: l
                    }), t == e.length - 1 && c.submitdata(a, n, i, s, o);
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
        }(d);
    },
    deleteImg: function(t) {
        var e = this.data.upImgList, a = t.currentTarget.dataset.index;
        e.splice(a, 1), this.setData({
            upImgList: e
        });
    }
});