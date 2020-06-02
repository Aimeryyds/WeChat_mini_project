function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function t(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var e = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
    }
    return a;
}, o = a(require("../../../network/api.js")), n = a(require("../../../dist/index"));

Page(Object.assign({}, n.default.TopTips, n.default.Toast, {
    data: {
        evaluateItems: [ {
            title: "好评",
            index: 1
        }, {
            title: "中评",
            index: 2
        }, {
            title: "差评",
            index: 3
        } ],
        isBtn: !0
    },
    onLoad: function(a) {
        var t = this;
        this.setData({
            orderNo: a.orderNo,
            type: a.type,
            id: a.id
        }), wx.showLoading(), o.default.gotoEvaluate({
            orderNo: this.data.orderNo,
            type: this.data.type,
            id: this.data.id ? this.data.id : 0
        }).then(function(a) {
            wx.hideLoading(), a.data.info.length <= 0 ? (console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk"), 
            t.setData({
                evaluateFormData: e({}, a.data, {
                    info: [ {
                        evaluate: "",
                        firstEvaluateContent: "",
                        secondEvaluateContent: "",
                        firstEvaluateImgs: [],
                        secondEvaluateImgs: [],
                        sType: 2
                    } ]
                })
            })) : t.setData({
                evaluateFormData: a.data
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value);
    },
    formSubmit: function(a) {
        for (var t = this, n = this.data.evaluateFormData.info, s = void 0, i = 0; i < n.length; i++) {
            if (!n[i].evaluate && 1 == this.data.evaluateFormData.evaluateCount && 3 != this.data.type && 5 != this.data.type) {
                s = "请选择评价评级";
                break;
            }
            if (!(n[i].firstEvaluateContent || 3 != this.data.type && 5 != this.data.type)) {
                s = "请输入评价内容";
                break;
            }
            if (!n[i].secondEvaluateContent && 2 == this.data.evaluateFormData.evaluateCount) {
                s = "请输入评价内容";
                break;
            }
            this.data.evaluateFormData.businessScore || 1 != this.data.evaluateFormData.evaluateCount || (s = "请给商家打分");
        }
        if (s) this.showZanToast(s); else {
            var u = e({
                anonymous: 0
            }, this.data.evaluateFormData, {
                evaluates: n.map(function(a) {
                    return e({
                        firstEvaluateContent: "",
                        secondEvaluateContent: ""
                    }, a, {
                        firstEvaluateImgs: a.firstEvaluateImgs ? a.firstEvaluateImgs.join(",") : "",
                        secondEvaluateImgs: a.secondEvaluateImgs ? a.secondEvaluateImgs.join(",") : ""
                    });
                })
            });
            delete u.info, this.data.isBtn && (this.setData({
                isBtn: !1
            }), o.default.queryEvaluatePublish(u).then(function(a) {
                t.setData({
                    isBtn: !0
                }), 0 == a.status && a.data.result ? (t.showZanToast("发布成功"), wx.redirectTo({
                    url: "/pages/pingjia/evaluatesuccess/index?evaluateCount=" + t.data.evaluateFormData.evaluateCount
                })) : t.showZanTopTips("发布失败，请重新发布");
            }).catch(function(a) {
                t.setData({
                    isBtn: !0
                }), console.log(a, "ooooooooooooooooooooooo"), t.showZanToast(a.errorMessage);
            }));
        }
    },
    handleChooseImg: function(a) {
        console.log("==============handleChooseImg==========");
        var e = a.currentTarget.dataset.index, n = this, s = void 0;
        s = 1 == n.data.evaluateFormData.evaluateCount ? n.data.evaluateFormData.info[e].firstEvaluateImgs || [] : n.data.evaluateFormData.info[e].secondEvaluateImgs || [], 
        wx.chooseImage({
            count: 5 - s.length,
            sizeType: [ "compressed" ],
            success: function(a) {
                console.log("==============success==========", a);
                var s = a.tempFilePaths;
                console.log(s, "[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
                for (var i = 0; i < s.length; i++) o.default.uploadImage(s[i]).then(function(a) {
                    if (console.log("============= api.uploadImage==========", a), 1 == n.data.evaluateFormData.evaluateCount) {
                        console.log("ttttttttttttttttttttttttttt");
                        var o = n.data.evaluateFormData.info[e].firstEvaluateImgs, s = void 0 === o ? [] : o;
                        s.push(a.url), n.setData(t({}, "evaluateFormData.info[" + e + "].firstEvaluateImgs", s));
                    } else {
                        var i = n.data.evaluateFormData.info[e].secondEvaluateImgs, u = void 0 === i ? [] : i;
                        u.push(a.url), n.setData(t({}, "evaluateFormData.info[" + e + "].secondEvaluateImgs", u));
                    }
                }).catch(function(a) {
                    console.log("chooseimage", a);
                });
            },
            fail: function(a) {}
        });
    },
    handleRemoveImg: function(a) {
        var e = a.currentTarget.dataset, o = e.index, n = e.imgindex;
        console.log(o, "index");
        var s = this.data.evaluateFormData.info[o], i = s.firstEvaluateImgs, u = s.secondEvaluateImgs;
        1 == this.data.evaluateFormData.evaluateCount ? (i.splice(n, 1), this.setData(t({}, "evaluateFormData.info[" + o + "].firstEvaluateImgs", i))) : (u.splice(n, 1), 
        this.setData(t({}, "evaluateFormData.info[" + o + "].secondEvaluateImgs", u)));
    },
    onTapPic: function(a) {
        var t = a.currentTarget.dataset, e = t.index, o = t.imgindex, n = this.data.evaluateFormData.info[e], s = n.firstEvaluateImgs, i = n.secondEvaluateImgs;
        console.log("e--\x3e", a), wx.previewImage({
            current: s ? s[o] : i[o],
            urls: s || i
        });
    },
    onSwitch: function(a) {
        var t = a.detail.value;
        console.log("onSwitch-----checked--=------\x3e", t), this.setData({
            "evaluateFormData.anonymous": t ? 1 : 0
        });
    },
    onEvaluateType: function(a) {
        console.log("+++++++++");
        var e = a.currentTarget.dataset, o = e.type, n = e.index;
        this.setData(t({}, "evaluateFormData.info[" + n + "].evaluate", o));
    },
    onChangeValue: function(a) {
        var e = a.currentTarget.dataset.index, o = a.detail.value;
        1 == this.data.evaluateFormData.evaluateCount ? this.setData(t({}, "evaluateFormData.info[" + e + "].firstEvaluateContent", o)) : this.setData(t({}, "evaluateFormData.info[" + e + "].secondEvaluateContent", o));
    },
    evaluateScroe: function(a) {
        var t = a.currentTarget.dataset.item;
        this.setData({
            "evaluateFormData.businessScore": t
        });
    }
}));