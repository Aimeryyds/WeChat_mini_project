function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function e(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var t = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s]);
    }
    return a;
}, s = a(require("../../../network/api.js")), o = a(require("../../../dist/index")), n = a(require("../../../utils/util"));

Page(Object.assign({}, o.default.Toast, o.default.TopTips, {
    data: {
        refundType1: [ {
            id: 0,
            name: "仅退款"
        } ],
        refundType2: [ {
            id: 0,
            name: "仅退款"
        }, {
            id: 1,
            name: "退货退款"
        } ],
        expressStatus: [ {
            id: 0,
            status: 1,
            name: "未收货"
        }, {
            id: 1,
            status: 2,
            name: "已收货"
        } ],
        allReason: {
            refundReason1: [ {
                id: 0,
                name: "不喜欢/不想要"
            }, {
                id: 1,
                name: "空包裹"
            }, {
                id: 2,
                name: "未按约定时间发货"
            }, {
                id: 3,
                name: "快递一直未送达"
            }, {
                id: 4,
                name: "快递无物流跟踪记录"
            }, {
                id: 5,
                name: "其他"
            } ],
            refundReason2: [ {
                id: 0,
                name: "质量问题"
            }, {
                id: 1,
                name: "拍错/ 不喜欢"
            }, {
                id: 2,
                name: "假货"
            }, {
                id: 3,
                name: "商家发错货"
            }, {
                id: 4,
                name: "商品破损/ 少件"
            }, {
                id: 5,
                name: "其他"
            } ],
            refundReason3: [ {
                id: 0,
                name: "拍错/多拍/不想要"
            }, {
                id: 1,
                name: "协商一致退款"
            }, {
                id: 2,
                name: "缺货"
            }, {
                id: 3,
                name: "未按约定时间发货"
            }, {
                id: 4,
                name: "其他"
            } ]
        },
        refunReason: [],
        refundTypeData: {},
        expressStatusData: {},
        refundReasonData: {},
        toggle: !1
    },
    onLoad: function(a) {
        var e = this;
        console.log(a, "iiiiiiiiiiiii"), this.setData({
            id: a.id,
            refundType: a.refundType,
            modifyType: a.modifyType
        }), "modifyForm" == this.data.modifyType ? (a && a.data && this.setData({
            applyformData: n.default.parse(a.data)
        }), this.setData({
            refundType: 3 == this.data.applyformData.refundType ? 3 : 2 == this.data.applyformData.refundType ? 2 : 1,
            refundReasonData: {
                name: this.data.applyformData.reason
            },
            refundTypeData: {
                name: 3 == this.data.applyformData.refundType ? "退货退款" : "仅退款"
            },
            expressStatusData: {
                name: 1 == this.data.applyformData.expressStatus ? "未收货" : "已收货",
                status: 0 == this.data.applyformData.expressStatus ? 0 : 1 == this.data.applyformData.expressStatus ? 1 : 2
            }
        })) : a && a.applyformData && this.setData({
            applyformData: n.default.parse(a.applyformData)
        });
        var t = this.data, s = t.applyformData, o = t.allReason, r = t.type;
        this.setData({
            refunReason: 1 == s.refundType ? o.refundReason3 : 10 == r || 1 == s.expressStatus ? o.refundReason1 : (20 == r || s.expressStatus, 
            o.refundReason2)
        }), this.data.expressStatus.map(function(a, t) {
            a.status == e.data.applyformData.expressStatus && e.setData({
                index: t
            });
        }), this.data.refunReason.map(function(a, t) {
            a.name == e.data.applyformData.reason && e.setData({
                index: t
            });
        }), "其他" == this.data.applyformData.reason ? this.setData({
            toggle: !0
        }) : this.setData({
            toggle: !1
        });
    },
    formSubmit: function(a) {
        var e = a.detail.value;
        e = t({}, e, {
            proofUrl: this.data.applyformData.proofUrl ? this.data.applyformData.proofUrl.join(",") : ""
        });
        var s = void 0;
        2 != this.data.applyformData.refundType || this.data.expressStatusData.name ? this.data.refundReasonData.name || (s = "请选择退款原因") : s = "请选择货物状态", 
        s ? (this.showZanToast(s), console.log(s, "err")) : "modifyForm" == this.data.modifyType ? this.queryApplyModify(e, this.data.id) : this.queryApply(e, this.data.id);
    },
    queryApply: function(a, e) {
        var o = this;
        s.default.queryApply(t({}, a, {
            orderId: e,
            expressStatus: this.data.expressStatusData.status,
            reason: this.data.refundReasonData.name,
            refundType: this.data.refundType
        })).then(function(a) {
            o.setData({
                isShow: !0
            }), o.showZanTopTips("保存成功"), wx.redirectTo({
                url: "/pages/returngoods/applydetail/index?id=" + a.data.id
            });
        }).catch(function(a) {
            console.log(a), "1001001" == a.error ? o.showZanTopTips(a.errorMessage) : o.showZanToast(s.default.errors(a.error) || "网络链接错误");
        });
    },
    queryApplyModify: function(a, e) {
        var o = this;
        wx.showLoading({
            title: "请稍后"
        }), s.default.queryApplyModify(t({}, a, {
            id: this.data.applyformData.id,
            orderId: this.data.applyformData.orderId,
            expressStatus: this.data.expressStatusData.status,
            reason: this.data.refundReasonData.name,
            refundType: this.data.refundType
        })).then(function(a) {
            console.log(a, "++++"), o.showZanTopTips("修改成功"), wx.redirectTo({
                url: "/pages/returngoods/applydetail/index?id=" + a.data.id
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    refundType: function(a) {
        if (console.log("picker发送选择改变，携带值为", a.detail.value), 1 == this.data.applyformData.refundType ? this.setData({
            refundTypeData: this.data.refundType1[a.detail.value]
        }) : this.setData({
            refundTypeData: this.data.refundType2[a.detail.value]
        }), "modifyForm" == this.data.modifyType) {
            1 == this.data.refundType ? 0 == a.detail.value && this.setData({
                refundType: 1
            }) : 0 == a.detail.value ? this.setData({
                refundType: 2
            }) : 1 == a.detail.value && this.setData({
                refundType: 3
            });
        }
    },
    expressStatus: function(a) {
        var t;
        console.log("picker发送选择改变，携带值为", a.detail.value);
        var s = this.data.allReason, o = "", n = [], r = a.detail.value;
        0 == a.detail.value ? (o = 10, n = s.refundReason1) : 1 == a.detail.value && (o = 20, 
        n = s.refundReason2), this.setData((t = {
            index: r,
            type: o,
            expressStatusData: this.data.expressStatus[a.detail.value]
        }, e(t, "refundReasonData.name", ""), e(t, "refunReason", n), t));
    },
    refundReason: function(a) {
        console.log("refundReason", a.detail.value);
        var t = a.detail.value, s = this.data.refunReason;
        this.setData({
            index: t,
            refundReasonData: s[a.detail.value]
        }), console.log(this.data.refundReasonData, "refundReasonData"), "其他" == s[s.length - 1].name && a.detail.value == s.length - 1 ? (console.log("999999999999999"), 
        this.setData({
            toggle: !0
        })) : this.setData(e({
            toggle: !1
        }, "applyformData.detail", "")), console.log(this.data.refundReasonData, "refundReasonData");
    },
    handleRemoveImg: function(a) {
        var e = a.currentTarget.dataset.index, t = this.data.applyformData.proofUrl;
        t.splice(e, 1), this.setData({
            "applyformData.proofUrl": t
        });
    },
    handleChooseImg: function(a) {
        console.log("==============handleChooseImg==========");
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(a) {
                console.log("==============success==========", a);
                var t = a.tempFilePaths;
                console.log(t), s.default.uploadImage(t[0]).then(function(a) {
                    console.log("============= api.uploadImage==========", a);
                    var t = e.data.applyformData.proofUrl, s = void 0 === t ? [] : t;
                    s.push(a.url), e.setData({
                        "applyformData.proofUrl": s
                    });
                }).catch(function(a) {
                    e.showZanTopTips("图片上传超时，请重新上传"), console.log("chooseimage", a);
                });
            },
            fail: function(a) {
                e.showZanTopTips("图片选择异常，请重新选择");
            }
        });
    },
    onTapPic: function(a) {
        console.log("e--\x3e", a), wx.previewImage({
            current: a.currentTarget.dataset.link,
            urls: this.data.applyformData.proofUrl
        });
    }
}));