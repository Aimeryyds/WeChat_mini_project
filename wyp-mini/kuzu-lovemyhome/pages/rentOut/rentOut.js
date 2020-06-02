var e = getApp(), t = require("../../sdk/dingxiang.js"), a = require("../../utils/md5.js"), n = require("../../utils/gio-minp/index.js").default, o = require("../../sdk/gioConfig.js").default;

n("setConfig", o), Page({
    data: {
        city_id: 1,
        rentmodeHide: !0,
        kantimeHide: !0,
        noteHide: !1,
        rentmodeTxt: "",
        isSend: !1,
        secend: 60,
        time: "发送验证码",
        equipment: 4,
        communitynameVal: "",
        communityIdVal: "",
        ownertelVal: ""
    },
    onLoad: function(a) {
        var n = this, o = this;
        this.setData({
            city_id: a.cityId
        }), new t({
            appId: e.globalData.dxAppId
        }, function(e, t) {
            if (e) console.log(e); else {
                if (n.setData({
                    dxDeviceId: t
                }), 1 == wx.getStorageSync("loginStatus")) {
                    var i = wx.getStorageSync("userInfo");
                    console.log("userInfo--", i), o.setData({
                        ownertelVal: i.loginname
                    }), o.data.tokenVal = i.token;
                }
                console.log("options", a), (a.communityName || a.communityId) && o.setData({
                    communitynameVal: a.communityName,
                    communityIdVal: a.communityId,
                    noteHide: a.noteLayerHide
                });
            }
        });
    },
    verifyLouhao: function(e) {
        var t = this;
        t.setData({
            louhaoVal: t.verifyRes1(e)
        });
    },
    verifyDanyuanhao: function(e) {
        var t = this;
        t.setData({
            danyuanhaoVal: t.verifyRes1(e)
        });
    },
    verifyFanghao: function(e) {
        var t = this;
        t.setData({
            fanghaoVal: t.verifyRes1(e)
        });
    },
    verifyRes1: function(e) {
        var t = e.detail.value;
        return t = t.replace(/[^\x00-\xff]/gim, ""), t = t.replace(/[\`\~\!\@\#\$\%\^\&\*\+\\\]\}\{\'\;\:\：\，\、\"\/\.\,\>\<\s\|\=\-\_\。\(\、\<\>\)\……\…\！\——\—\￥\（\）\?]/g, "");
    },
    verifyPrice: function(e) {
        var t = this, a = e.detail.value;
        "00" == a.substring(0, 2) && (a = a.replace(/0{2}/g, "0")), t.setData({
            priceVal: a.replace(/\D/g, "")
        });
    },
    verifyBuildarea: function(e) {
        var t = this, a = e.detail.value;
        "." == (a = /^(\d?)+(\.\d{0,2})?$/.test(a) ? a : a.substring(0, a.length - 1)).substring(0, 1) && (a = a.replace(/./, "0.")), 
        "00" == a.substring(0, 2) && (a = a.replace(/0{2}/g, "0")), "0" == a[0] && (a = a.replace(a[1], ".")), 
        t.setData({
            buildareaVal: a.replace(/[\`\~\!\@\#\$\%\^\&\*\+\\\]\}\{\'\;\:\：\，\、\"\/\,\>\<\s\|\=\-\_\。\(\、\<\>\)\……\…\！\——\—\￥\（\）\?]/g, "")
        });
    },
    verifyOwnername: function(e) {
        var t = this, a = e.detail.value, n = /[\`\~\!\@\#\$\%\^\&\*\+\\\]\}\{\'\;\:\：\，\、\"\/\.\,\>\<\s\|\=\-\_\。\(\、\<\>\)\……\…\！\——\—\￥\（\）\?]/g;
        t.setData({
            ownernameVal: a.replace(n, "")
        });
    },
    verifyCode: function(e) {
        var t = this, a = e.detail.value;
        t.setData({
            codeVal: a.replace(/\D/g, "")
        });
    },
    communityTap: function() {
        console.log(this.data.city_id), 8 == getCurrentPages().length ? wx.redirectTo({
            url: "rentOutXiaoqu?&cityId=" + this.data.city_id
        }) : wx.navigateTo({
            url: "rentOutXiaoqu?&cityId=" + this.data.city_id
        });
    },
    rentmodeTap: function() {
        this.setData({
            rentmodeHide: !1
        });
    },
    rentmodeLayer: function() {
        this.setData({
            rentmodeHide: !0
        });
    },
    rentwapTap: function(e) {
        var t = this, a = e.currentTarget.dataset;
        t.setData({
            rentmodeVal: a.val,
            rentmodeTxt: a.name
        });
    },
    kantimeTap: function() {
        this.setData({
            kantimeHide: !1
        });
    },
    kantimeLayer: function() {
        this.setData({
            kantimeHide: !0
        });
    },
    kanfangTap: function(e) {
        var t = this, a = e.currentTarget.dataset;
        t.setData({
            lookTimeVal: a.val,
            lookTimeTxt: a.name
        });
    },
    getPhoneNumber: function(e) {
        var t = this, a = e.detail.value;
        t.setData({
            ownertelVal: a.replace(/\D/g, "")
        });
    },
    getYmdH: function() {
        var e = new Date(), t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), o = e.getHours();
        a < 10 && (a = "0" + a), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o);
        var i = String(t) + String(a) + String(n) + String(o);
        return console.log("time", i), i;
    },
    sendMessage: function() {
        var t = this, n = e.globalData.url_host, o = e.globalData.SMSdk.getDeviceId(), i = t.data.ownertelVal, s = i + "Di6HPnxL" + t.getYmdH(), r = {
            mobile: i,
            type: 5,
            flag: 1,
            extra_code: s = a.hexMD5(s)
        };
        console.log("sendsms_date", r), wx.request({
            url: n + "/appapi/user/v1/sendsms",
            method: "POST",
            data: r,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                smdeviceId: o,
                apiversion: 20190813,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                if (console.log(e), 200 == e.data.status) {
                    wx.showToast({
                        title: "发送成功",
                        icon: "success"
                    });
                    var a = t.data.secend;
                    console.log("-------"), console.log(a), t.setData({
                        isSend: !0,
                        secend: a
                    });
                    var n = setInterval(function() {
                        a--, t.setData({
                            secend: a
                        }), 0 == a && (clearInterval(n), t.setData({
                            secend: 60,
                            time: "重新发送",
                            isSend: !1
                        }));
                    }, 1e3);
                } else t.showToast(e.data.msg);
            }
        });
    },
    noteLayerTap: function() {
        this.setData({
            noteHide: !0
        });
    },
    submitForm: function(t) {
        var a = this, n = e.globalData.url_host, o = t.detail.value;
        if ("" == o.communityname) return a.showToast("请填写小区名称"), !1;
        if ("" == o.building_number || "" == o.unit_number || "" == o.room_number) return a.showToast("请完善房源信息"), 
        !1;
        if ("" == o.price) return a.showToast("请输入期望售价"), !1;
        if ("" == o.buildarea) return a.showToast("请输入房屋面积"), !1;
        if ("" == o.rentmode) return a.showToast("请选择出租方式"), !1;
        if ("" == o.lookhousetime) return a.showToast("请选择看房时间"), !1;
        if ("" == o.owner_name) return a.showToast("请输入您的称呼"), !1;
        if ("" == o.phone) return a.showToast("请输入您的手机号"), !1;
        if ("" == o.phonecode) return a.showToast("请输入验证码"), !1;
        var i = {
            type: 2,
            communityid: a.data.communityIdVal,
            cityid: a.data.city_id,
            equipment: a.data.equipment
        }, s = Object.assign(o, i);
        console.log(s), wx.request({
            url: n + "/appapi/entrust/" + a.data.city_id + "/v1/add",
            method: "POST",
            data: s,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: a.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                console.log(e), 200 == e.data.status ? (a.showToast("发布成功"), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1500)) : a.showToast(e.data.msg);
            },
            fail: function(e) {
                a.showToast("发布失败");
            }
        });
    },
    telTap: function(e) {
        var t = e.currentTarget.id;
        wx.makePhoneCall({
            phoneNumber: t,
            success: function() {
                console.log("拨打成功", t);
            },
            fail: function() {
                console.log("拨打失败", t);
            }
        });
    },
    showToast: function(e) {
        wx.showToast({
            title: e,
            icon: "none",
            duration: 1500
        });
    },
    onReady: function() {
        n("setPage", {
            pagename: "我要出租页",
            businessline_pvar: "租房"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});