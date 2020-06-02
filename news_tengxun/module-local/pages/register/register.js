var e = require("../../../@babel/runtime/helpers/interopRequireWildcard"), t = e(require("../../js/util")), a = e(require("../../js/const")), n = new getApp().global, o = {
    MOBILE: "mobile",
    GENDER: "sex",
    ADDRESS: "addr",
    AGE: "age",
    HOMETOWN: "hometown",
    NAME: "name",
    ID_CARD: "id_card",
    HEIGHT: "height",
    EDUCATION: "school"
};

Page({
    data: {
        KEYS: o,
        start: 0,
        articleId: "",
        sex: a.sex,
        today: t.formatTimeExt(+new Date(), "yyyy-MM-dd"),
        signInfo: [],
        info: {},
        shareInfo: {},
        status: 0,
        hideMmobile: "",
        showType: 0,
        addrDisable: !0
    },
    onLoad: function(e) {
        e.id ? (this.setData({
            articleId: e.id,
            status: e.status,
            shareInfo: {
                id: e.id,
                headImgUrl: decodeURIComponent(e.headimgurl),
                title: e.title
            }
        }), this.getUserInfo(), this.getSignInfo(), n.mta.Page.init()) : wx.showToast({
            icon: "none",
            title: "没有传入活动ID"
        });
    },
    onShow: function() {
        this.setData({
            start: parseInt(new Date().getTime() / 1e3)
        }), t.rep({
            opType: "pv",
            fromPage: "local_join_page",
            beginTime: this.data.start,
            id: this.data.articleId
        });
    },
    onHide: function() {
        t.reportPageLeave("local_join_page", this);
    },
    onUnload: function() {
        t.reportPageLeave("local_join_page", this);
    },
    refreshReloadModel: function() {
        this.getUserInfo(), this.getSignInfo();
    },
    setUserInfo: function() {
        if (n.userInfo.nickName) {
            var e = this.data.info;
            e.name = n.userInfo.nickName, e.sex = n.userInfo.gender, n.userInfo.phoneNumber && (e.mobile = n.userInfo.phoneNumber, 
            this.setData({
                hideMmobile: t.formatPhone(e.mobile)
            })), this.setData({
                info: e
            });
        }
    },
    getSignInfo: function() {
        var e = this, n = {
            activity_id: this.data.articleId
        };
        t.fetch(a.api.getSignInfo, n, n, "GET").then(function(t) {
            200 === t.statusCode ? 0 === (t = t.data).code ? (e.setData({
                signInfo: e.formatSignInfo(t.data || []),
                showType: 1
            }), e.setUserInfo()) : (e.setData({
                showType: 3
            }), wx.showToast({
                icon: "none",
                title: t.msg
            })) : e.setData({
                showType: 3
            });
        }, function(t) {
            e.setData({
                showType: 3
            }), wx.showToast({
                icon: "none",
                title: "获取报名信息失败"
            });
        });
    },
    getUserInfo: function() {
        var e = this;
        t.fetch(a.api.getUserInfo, {}, {}, "GET").then(function(a) {
            if (200 === a.statusCode && 0 === a.data.code) {
                var i = a.data.data.mobile;
                i && (e.setInfo(o.MOBILE, i), n.userInfo.phoneNumber = i, e.setData({
                    hideMmobile: t.formatPhone(i)
                }));
            }
        });
    },
    formatSignInfo: function(e) {
        for (var t = [], a = {}, n = 0, o = e.length; n < o; n++) {
            var i = e[n];
            a[i.key] = "", "ext" === i.key.substr(0, 3) ? i.isExt = !0 : i.isExt = !1, t.push(i);
        }
        return this.setData({
            info: a
        }), t;
    },
    handleSexChange: function(e) {
        this.setInfo(o.GENDER, e.detail.value);
    },
    handleGetPhoneNumber: function(e) {
        e.detail.encryptedData ? this.getPhoneNumber({
            iv: e.detail.iv,
            encrypted_data: e.detail.encryptedData
        }) : wx.navigateBack({
            delta: 1
        });
    },
    getPhoneNumber: function(e) {
        var i = this;
        t.postJson(a.api.getPhoneNumber, null, e).then(function(e) {
            if (0 === (e = e.data).code) {
                var a = e.data.phone_number;
                i.setInfo(o.MOBILE, a), i.setData({
                    hideMmobile: t.formatPhone(a)
                }), n.userInfo.phoneNumber = a;
            } else wx.showToast({
                icon: "none",
                title: e.msg
            });
        });
    },
    handleChooseAddress: function(e) {
        var t = this, a = this.selectComponent("#authDialog");
        this.data.addrDisable && a.show("openSetting", "scope.address").then(function() {
            t.getAddress();
        }, function() {
            t.setData({
                addrDisable: !1
            });
        });
    },
    setInfo: function(e, t) {
        var a = this.data.info;
        a[e] = t, this.setData({
            info: a
        });
    },
    getAddress: function() {
        var e = this;
        wx.chooseAddress({
            success: function(t) {
                var a = [ t.provinceName, t.cityName, t.countyName, t.detailInfo ].join("");
                e.setInfo(o.ADDRESS, a);
            }
        });
    },
    handleBirthdayChange: function(e) {
        this.setInfo(o.AGE, e.detail.value);
    },
    handleHometownChange: function(e) {
        this.setInfo(o.HOMETOWN, e.detail.value);
    },
    handleInput: function(e) {
        var t = e.detail.value.trim(), a = e.currentTarget.dataset.key;
        this.setInfo(a, t);
    },
    handleMobileBlur: function(e) {
        11 !== e.detail.value.length ? wx.showToast({
            icon: "none",
            title: "请输入11位的手机号码"
        }) : this.setData({
            isWriteCode: !0
        });
    },
    formSubmit: function(e) {
        var a = e.detail.value, n = !0;
        for (var o in a) if (!a[o]) {
            wx.showModal({
                content: "请检查报名信息是否都已经填写完成",
                showCancle: !1
            }), n = !1;
            break;
        }
        a.sex && (a.sex = parseInt(a.sex, 10)), n && this.submit(a), t.rep({
            opType: "clk_join_submit",
            fromPage: "local_join_page",
            beginTime: this.data.start
        });
    },
    submit: function(e) {
        var o = this, i = {
            city_id: n.comPostInfo.chlid
        };
        e.mobile = n.userInfo.phoneNumber;
        var s = {
            user_info: e,
            activity_id: this.data.articleId
        };
        wx.showLoading({
            title: "提交中..."
        }), t.postJson(a.api.signUp, i, s).then(function(e) {
            if (wx.hideLoading(), 0 === e.data.code) {
                var t = "id=".concat(o.data.articleId, "&status=1&title=").concat(o.data.shareInfo.title, "&headimgurl=").concat(encodeURIComponent(o.data.shareInfo.headImgUrl)), a = "/module-local/pages/signupSucc/signupSucc?".concat(t);
                wx.showToast({
                    title: "提交成功",
                    complete: function() {
                        wx.navigateTo({
                            url: a
                        });
                    }
                });
            } else wx.showToast({
                icon: "none",
                title: e.data.msg
            });
        }, function(e) {
            wx.hideLoading(), wx.showToast({
                icon: "none",
                title: "提交出错"
            });
        });
    }
});