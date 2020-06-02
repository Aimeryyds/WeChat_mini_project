var e = require("../../utils/qqmap-wx-jssdk.js"), t = require("../../utils/https.js"), a = new e({
    key: "UYNBZ-5M736-MHKSZ-MGZNR-KR6PQ-X7BA4"
}), n = 60, o = function e(t) {
    if (0 == n) return t.setData({
        is_show: !0
    }), void (n = 60);
    t.setData({
        is_show: !1,
        last_time: n
    }), n--, setTimeout(function() {
        e(t);
    }, 1e3);
};

Page({
    data: {
        inputValue: "",
        registerList: [ {
            icon: "../../images/use.png",
            type: "number",
            name: "username",
            placeholder: "请输入手机号",
            value: ""
        }, {
            icon: "../../images/yzm.png",
            type: "number",
            name: "yzmname",
            placeholder: "请输入验证码",
            value: ""
        }, {
            icon: "../../images/pwd.png",
            type: "password",
            name: "password",
            placeholder: "请输入密码",
            value: ""
        }, {
            icon: "../../images/pwd.png",
            type: "password",
            name: "confirmpwd",
            placeholder: "请确认密码",
            value: ""
        } ],
        disabled: !1,
        is_show: !0,
        last_time: "",
        lat: "",
        lng: "",
        city: "",
        province: "",
        adcode: ""
    },
    onLoad: function(e) {
        this.GetMyLocation();
    },
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    clickVerify: function(e) {
        var a = this, n = a.data.inputValue;
        if (!/^1[3456789]\d{9}$/.test(n)) return wx.showToast({
            title: "请正确填写手机号码",
            icon: "none",
            duration: 2e3
        }), !1;
        a.setData({
            is_show: !a.data.is_show
        }), o(a), t.req("User/GetCode", {
            type: 1,
            account: n
        }, function(e, t) {
            0 == t.data.code ? wx.showToast({
                title: "发送成功",
                icon: "success",
                duration: 2e3
            }) : wx.showModal({
                title: "操作失败",
                content: t.data.retmsg,
                showCancel: !1
            });
        });
    },
    formSubmit: function(e) {
        var a = this;
        if ("" == e.detail.value.username || "" == e.detail.value.yzmname) return wx.showToast({
            title: "请填写内容！",
            icon: "none",
            duration: 2e3
        }), !1;
        if (!/^[a-zA-Z0-9\.\@\!\#\$\%\^\&\*\(\)]{6,12}$/.test(e.detail.value.password)) return wx.showToast({
            title: "请输入长度至少6位的密码！",
            icon: "none",
            duration: 2e3
        }), !1;
        if (e.detail.value.password != e.detail.value.confirmpwd) return wx.showToast({
            title: "两次输入密码不一致",
            icon: "none",
            duration: 2e3
        }), !1;
        a.GetMyLocation();
        var n = {
            account: e.detail.value.username,
            pwd: e.detail.value.password,
            code: e.detail.value.yzmname,
            lat: a.data.lat,
            lng: a.data.lng,
            city: a.data.city,
            province: a.data.province,
            adcode: a.data.adcode
        };
        t.req("User/UserReg", n, function(e, t) {
            var a = t.data.retmsg;
            0 == t.data.code ? (wx.showToast({
                title: "注册成功",
                icon: "success",
                duration: 2e3
            }), wx.navigateTo({
                url: "../login/phoneLogin"
            })) : wx.showModal({
                title: "操作失败",
                content: a,
                showCancel: !1,
                success: function(e) {
                    e.confirm;
                }
            });
        });
    },
    GetMyLocation: function() {
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                var n = t.latitude, o = t.longitude;
                a.reverseGeocoder({
                    location: {
                        latitude: n,
                        longitude: o
                    },
                    success: function(t) {
                        var a = t.result.ad_info.location.lat, n = t.result.ad_info.location.lng, o = t.result.address, i = t.result.address_component.province, s = t.result.ad_info.adcode;
                        e.setData({
                            lat: a,
                            lng: n,
                            city: o,
                            province: i,
                            adcode: s
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    },
                    complete: function(e) {}
                });
            }
        });
    },
    getCode: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});