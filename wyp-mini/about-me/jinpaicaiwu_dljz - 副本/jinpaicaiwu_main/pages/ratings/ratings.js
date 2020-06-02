var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../wxParse/util.js")), a = (require("../../wxParse/common.js"), getApp());

Page({
    data: {
        wjxNum2: [ "icon-wujiaoxing2", "icon-wujiaoxing2", "icon-wujiaoxing2", "icon-wujiaoxing2", "icon-wujiaoxing2" ],
        score: "",
        content: "",
        submit: !0,
        product: [],
        upload_picture_list: [],
        choose_pictures_list: [],
        server_pictures_list: [],
        count: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
        isShow: !0,
        rating_type: "",
        isAliApp: !1
    },
    onShow: function() {
        this.setData({
            isAliApp: wx.canIUse("alert")
        });
    },
    onLoad: function(t) {
        var e = t.oid, i = (a.globalData.carts, wx.getStorageSync("openid"), this), s = "";
        t.type && (s = t.type, this.setData({
            rating_type: s
        })), e && "collage" != s ? a.apiRequest("order", "getorder", {
            data: {
                oid: e
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var a = t.data.product;
                    i.setData({
                        product: a
                    });
                } else wx.showToast({
                    title: "参数错误！",
                    duration: 2500
                }), wx.navigateBack({
                    delta: 1
                });
            }
        }) : e && "collage" == s ? a.apiRequest("collage_order", "getorder", {
            data: {
                oid: e
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var a = t.data.order, e = i.data.product;
                    a.feature_img;
                    i.setData({
                        product: e
                    });
                } else wx.showToast({
                    title: "参数错误！",
                    duration: 2500
                }), wx.navigateBack({
                    delta: 1
                });
            }
        }) : "collage" != s && (wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        })), e ? (wx.showLoading({
            title: "请求中",
            mask: !0
        }), a.apiRequest("order", "orderCommentsub", {
            data: {
                oid: e,
                type: "1",
                rating_type: s
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var a = parseInt(t.data.score), e = "";
                    if (t.data.evaluate_pics && (e = JSON.parse(t.data.evaluate_pics)), i.setData({
                        upload_picture_list: e,
                        choose_pictures_list: e,
                        isShow: !1
                    }), a > 0) {
                        var s = i.data.wjxNum2;
                        for (var o in s) s[o] = "icon-wujiaoxing2";
                        for (var r in s) r < a && (s[r] = "icon-wujiaoxing");
                        i.setData({
                            content: t.data.content,
                            score: a,
                            wjxNum2: s,
                            submit: !1
                        });
                    }
                }
                wx.hideLoading();
            }
        }), i.setData({
            oid: e
        })) : (wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        })), t.isShow;
    },
    selectStar2: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.wjxNum2;
        if (0 == this.data.submit) return !1;
        for (var i in e) e[i] = "icon-wujiaoxing2";
        for (var s in e) s <= a && (e[s] = "icon-wujiaoxing");
        this.setData({
            wjxNum2: e,
            score: a
        });
    },
    binkContentConfirm: function(t) {
        this.setData({
            content: t.detail.value
        });
    },
    submit: function(t) {
        var e = this.data.score, i = this.data.content, s = this.data.oid, o = this.data.upload_picture_list, r = this.data.server_pictures_list, n = !0, u = this.data.rating_type;
        return r.length == o.length && "0" != o.length && (n = !1), e.length < 1 ? (wx.showToast({
            title: "请选择评分"
        }), !1) : i.length < 1 ? (wx.showToast({
            title: "请填写评价"
        }), !1) : (n && this.uploadimage(), void a.apiRequest("order", "orderCommentsub", {
            data: {
                oid: s,
                score: e,
                content: i,
                serpic_datas: r.join(","),
                rating_type: u
            },
            success: function(t) {
                if ("OK" == t.data.result) "collage" == u ? wx.redirectTo({
                    url: "../collage_order_list/collage_order_list?activeIndex=all"
                }) : wx.redirectTo({
                    url: "../orders/orders?activeIndex=all"
                }); else {
                    var t = t.data.errmsg || "请求失败";
                    wx.showToast({
                        title: t
                    });
                }
            }
        }));
    },
    deleteImage: function(t) {
        var a = this, e = a.data.upload_picture_list, i = t.currentTarget.dataset.index;
        e.splice(i, 1), a.setData({
            upload_picture_list: e,
            isShow: !0
        });
    },
    uploadimage: function() {
        var t = this, e = t.data.upload_picture_list, i = a.globalData.config.domain || "", s = a.globalData.config.checkcode || "", o = i + "/wxappapi/file_upload/wx_uploadify?APISESSID=" + (a.globalData.APISESSID || "") + "&apitoken=" + s;
        wx.showLoading({
            title: "请求中",
            mask: !0
        });
        for (var r in e) 0 == e[r].upload_percent && t.upload_file_server(t, e, r, o);
    },
    upload_file_server: function(a, e, i, s) {
        var o = new Date(), r = t.default.formatTime(o), n = r.substring(0, 8), u = a.data.server_pictures_list;
        wx.uploadFile({
            url: s,
            filePath: e[i].path,
            name: "file",
            formData: {
                num: i,
                datetime: r,
                date: n
            },
            success: function(t) {
                var s = JSON.parse(t.data);
                if ("OK" == s.result) {
                    o = s.fname;
                    e[i].path_server = o;
                } else {
                    var o = "";
                    e[i].path_server = o;
                }
                u.push(o), a.setData({
                    upload_picture_list: e,
                    server_pictures_list: u
                }), u.length == e.length && (wx.hideLoading(), a.submit());
            }
        }).onProgressUpdate(function(t) {
            e[i].upload_percent = t.progress, a.setData({
                upload_picture_list: e
            });
        });
    },
    chooseImage: function() {
        var t = this, a = t.data.upload_picture_list, e = t.data.choose_pictures_list;
        wx.chooseImage({
            count: 9 - a.length,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(i) {
                var s = i.tempFiles;
                for (var o in s) s[o].upload_percent = 0, s[o].path_server = "", a.push(s[o]), e.push(s[o].path);
                a.length >= 9 ? t.setData({
                    isShow: !t.data.isShow
                }) : t.setData({
                    isShow: t.data.isShow
                }), t.setData({
                    upload_picture_list: a,
                    choose_pictures_list: e
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    previewImage: function(t) {
        var a = t.target.dataset.src, e = t.target.dataset.state, i = this.data.choose_pictures_list;
        "server" == e && (i = this.data.server_pictures_list), wx.previewImage({
            current: a,
            urls: i
        });
    }
});