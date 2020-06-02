var e = getApp(), a = require("../../sdk/dingxiang.js"), o = require("../../utils/md5.js"), t = require("../../utils/gio-minp/index.js").default, n = require("../../sdk/gioConfig.js").default;

t("setConfig", n), Page({
    data: {
        xiaoQuName: null,
        louNmu: null,
        danNmu: null,
        fangNmu: null,
        shouJia: null,
        mianJi: null,
        lookNeirong: null,
        niCheng: null,
        loginname: null,
        isDisabled: !0,
        loginStatus: 0,
        cityId: 1,
        xiquId: null,
        fixedWorld: !1,
        lookMask: !0,
        lookHouseNav: [ {
            name: "随时看房",
            nameIndex: 1
        }, {
            name: "周末看房",
            nameIndex: 2
        }, {
            name: "下班后看房",
            nameIndex: 3
        }, {
            name: "电话预约",
            nameIndex: 4
        } ],
        lookHouseNum: null,
        iscode: null,
        time: "发送验证码",
        secend: 60,
        isSend: !1,
        tokenVal: ""
    },
    onLoad: function(o) {
        var t = this, n = this;
        new a({
            appId: e.globalData.dxAppId
        }, function(e, a) {
            if (e) console.log(e); else {
                t.setData({
                    dxDeviceId: a
                }), o.searchType && n.setData({
                    xiaoQuName: o.searchName,
                    xiquId: o.searchId
                }), console.log("xiquId-----", o.searchId), console.log("xiaoQuName-----", o.searchName);
                var i = wx.getStorageSync("loginStatus");
                if (1 == i) {
                    var l = wx.getStorageSync("userInfo");
                    n.data.tokenVal = l.token, console.log("userInfo----", l), t.setData({
                        loginStatus: i,
                        uid: l.uid,
                        userInfo: l,
                        loginname: l.loginname,
                        cityId: o.cityId
                    });
                }
            }
        });
    },
    toSearch: function(e) {
        var a = this, o = "";
        "小区名称" != a.data.searchCon && (o = a.data.searchCon), 8 == getCurrentPages().length ? wx.redirectTo({
            url: "../sellHouse/sellHouseSearch?cityId=" + a.data.cityId + "&searchInp=" + o
        }) : wx.navigateTo({
            url: "../sellHouse/sellHouseSearch?cityId=" + a.data.cityId + "&searchInp=" + o
        });
    },
    pointNum: function(e) {
        return e = e.replace(/[^\d.]/g, ""), e = e.replace(/\.{2,}/g, "."), e = e.replace(".", "$#$"), 
        e = e.replace(/\./g, ""), e = e.replace("$#$", "."), e = e.replace(/^(\d+)\.(\d\d).*$/, "$1.$2");
    },
    yzs: function(e) {
        return e = e.replace(/[^\x00-\xff]/gim, ""), e = e.replace(/[\`\~\!\@\#\$\%\^\&\*\+\\\]\}\{\'\;\:\：\，\、\"\/\.\,\>\<\s\|\=\-\_\。\(\、\<\>\)\……\！\——\—\￥\（\）\?]/g, "");
    },
    tel: function(e) {
        var a = e.currentTarget.id;
        wx.makePhoneCall({
            phoneNumber: a,
            success: function() {
                console.log("拨打成功", a);
            },
            fail: function() {
                console.log("拨打失败", a);
            }
        });
    },
    closeMask: function(e) {
        this.setData({
            fixedWorld: !0
        });
    },
    lookHouseTime: function() {
        this.setData({
            lookMask: !1
        });
    },
    lookContent: function(e) {
        var a = e.currentTarget.dataset.text, o = e.currentTarget.dataset.num;
        console.log("看房序号---", o), console.log("看房内容----", a), this.setData({
            lookNeirong: a,
            lookHouseNum: o,
            lookMask: !0
        });
    },
    lookCancel: function() {
        this.setData({
            lookMask: !0
        });
    },
    getXiaoQu: function(e) {
        var a = this, o = e.detail.value;
        console.log("小区名称----", o), a.setData({
            xiaoQuName: o
        });
    },
    getLouNum: function(e) {
        console.log("输入的楼号----", e.detail.value);
        this.setData({
            louNmu: this.yzs(e.detail.value)
        });
    },
    getDanNum: function(e) {
        console.log("输入的单元----", e.detail.value), this.setData({
            danNmu: this.yzs(e.detail.value)
        });
    },
    getFangNum: function(e) {
        console.log("输入的房间----", e.detail.value), this.setData({
            fangNmu: this.yzs(e.detail.value)
        });
    },
    getShouJia: function(e) {
        var a = this, o = e.detail.value;
        console.log("输入的售价----", e.detail.value), console.log("oneText------", o.substring(0, 1)), 
        "." != o.substring(0, 1) ? "00" != o.substring(0, 2) ? "0" != o.substring(0, 1) || "0." == o.substring(0, 2) ? a.setData({
            shouJia: a.pointNum(e.detail.value)
        }) : a.setData({
            shouJia: o.replace(/[1-9]/g, "")
        }) : a.setData({
            shouJia: o.replace(/0{2}/g, "0")
        }) : a.setData({
            shouJia: o.replace(/./, "0.")
        });
    },
    getmianJi: function(e) {
        var a = this, o = e.detail.value;
        console.log("输入的面积----", o), console.log("oneText------", o.substring(0, 1)), "." != o.substring(0, 1) ? "00" != o.substring(0, 2) ? "0" != o.substring(0, 1) || "0." == o.substring(0, 2) ? a.setData({
            mianJi: a.pointNum(e.detail.value)
        }) : a.setData({
            mianJi: o.replace(/[1-9]/g, "")
        }) : a.setData({
            mianJi: o.replace(/0{2}/g, "0")
        }) : a.setData({
            mianJi: o.replace(/./, "0.")
        });
    },
    getNiCheng: function(e) {
        var a = this, o = e.detail.value;
        console.log("输入的昵称----", o);
        var t = /[\`\~\!\@\#\$\%\^\&\*\+\\\]\}\{\'\;\:\：\，\、\"\/\.\,\>\<\s\|\=\-\_\。\(\、\<\>\)\……\！\——\—\￥\（\）\?]/g;
        a.setData({
            niCheng: o.replace(t, "")
        });
    },
    getPhoneNumber: function(e) {
        var a = this, o = e.detail.value;
        a.setData({
            loginname: o
        });
    },
    getRanNum: function() {
        for (var e = "", a = 0; a < 4; a++) Math.random() < 48 && (e += "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678".charAt(48 * Math.random() - 1));
        return e;
    },
    getNow: function() {
        var e = new Date(), a = e.getFullYear(), o = e.getMonth() + 1, t = e.getDate(), n = e.getHours(), i = e.getMinutes(), l = e.getSeconds();
        return o < 10 && (o = "0" + o), t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), 
        i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), a + "-" + o + "-" + t + " " + n + ":" + i + ":" + l;
    },
    getTelCode: function(e) {
        var a = this, o = e.detail.value;
        a.setData({
            scode: o.replace(/\D/g, "")
        });
    },
    getYmdH: function() {
        var e = new Date(), a = e.getFullYear(), o = e.getMonth() + 1, t = e.getDate(), n = e.getHours();
        o < 10 && (o = "0" + o), t < 10 && (t = "0" + t), n < 10 && (n = "0" + n);
        var i = String(a) + String(o) + String(t) + String(n);
        return console.log("time", i), i;
    },
    sendMessage: function() {
        var a = this, t = e.globalData.url_host, n = e.globalData.SMSdk.getDeviceId();
        console.log("deviceId", n);
        var i = a.getYmdH();
        console.log("----------", i);
        var l = a.data.loginname + "Di6HPnxL" + i;
        console.log(a.data.loginname), console.log("uGe64BEd"), console.log(i), console.log("extra_code" + l), 
        l = o.hexMD5(l), console.log("extra_code---md5:" + l);
        var s = {
            mobile: a.data.loginname,
            type: 6,
            flag: 1,
            extra_code: l
        };
        wx.request({
            url: t + "/appapi/user/v1/sendsms",
            method: "POST",
            data: s,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                smdeviceId: n,
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
                    var o = a.data.secend;
                    console.log("-------"), console.log(o), a.setData({
                        isSend: !0,
                        secend: o
                    });
                    var t = setInterval(function() {
                        o--, a.setData({
                            secend: o
                        }), 0 == o && (clearInterval(t), a.setData({
                            secend: 60,
                            time: "重新发送",
                            isSend: !1
                        }));
                    }, 1e3);
                } else wx.showToast({
                    title: e.data.msg,
                    icon: "none"
                });
            }
        });
    },
    formSubmit: function(a) {
        var o = this, t = e.globalData.url_host, n = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (null == o.data.xiaoQuName) return wx.showToast({
            title: "请填写小区名称",
            icon: "none"
        }), !1;
        if (null == o.data.louNmu) return wx.showToast({
            title: "请完善房源信息",
            icon: "none"
        }), !1;
        if (null == o.data.danNmu) return wx.showToast({
            title: "请完善房源信息",
            icon: "none"
        }), !1;
        if (null == o.data.fangNmu) return wx.showToast({
            title: "请完善房源信息",
            icon: "none"
        }), !1;
        if (null == o.data.shouJia) return wx.showToast({
            title: "请输入期望售价",
            icon: "none"
        }), !1;
        if (null == o.data.mianJi) return wx.showToast({
            title: "请输入房屋面积",
            icon: "none"
        }), !1;
        if (null == o.data.lookNeirong) return wx.showToast({
            title: "请选择看房时间",
            icon: "none"
        }), !1;
        if (null == o.data.niCheng) return wx.showToast({
            title: "请输入您的称呼",
            icon: "none"
        }), !1;
        if (null == o.data.loginname) return wx.showToast({
            title: "手机号不能为空",
            icon: "none"
        }), !1;
        if (!n.test(o.data.loginname)) return wx.showToast({
            title: "手机号输入错误",
            icon: "none"
        }), !1;
        if (null == o.data.scode) return wx.showToast({
            title: "请输入验证码",
            icon: "none"
        }), !1;
        var i = o.data.loginname;
        a.detail.value.scode;
        console.log("城市cityid-----", o.data.cityId), console.log("二手房type-----", 1), console.log("小区id---communityid---------", o.data.xiquId), 
        console.log("小区名称---communityname ---------", o.data.xiaoQuName), console.log("面积buildarea  ---------", o.data.mianJi), 
        console.log("楼号building_number -------", o.data.louNmu), console.log("单元号unit_number -------", o.data.danNmu), 
        console.log("房间号room_number -------", o.data.fangNmu), console.log("用户名owner_name -------", o.data.niCheng), 
        console.log("价格price（期望售价）-------", o.data.shouJia), console.log("手机号phone -------", i), 
        console.log("设备类型equipment -------", 4), console.log("出租类型rentmode -------", ""), 
        console.log("验证码phonecode-------", o.data.scode), console.log("看房时间lookhousetime -------", o.data.lookHouseNum);
        var l = {
            cityid: o.data.cityId,
            type: 1,
            communityid: o.data.xiquId,
            communityname: o.data.xiaoQuName,
            buildarea: o.data.mianJi,
            building_number: o.data.louNmu,
            unit_number: o.data.danNmu,
            room_number: o.data.fangNmu,
            owner_name: o.data.niCheng,
            price: o.data.shouJia,
            phone: i,
            equipment: 4,
            rentmode: "",
            phonecode: o.data.scode,
            lookhousetime: o.data.lookHouseNum
        };
        wx.request({
            url: t + "/appapi/entrust/" + o.data.cityId + "/v1/add",
            method: "POST",
            data: l,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: o.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                console.log(e), 200 == e.data.status ? (o.showToast("发布成功"), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1500)) : o.showToast(e.data.msg);
            },
            fail: function(e) {
                wx.showToast({
                    title: "发布失败，请稍后再试！",
                    icon: "none"
                }), console.log("error", e);
            },
            complete: function(e) {}
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
        t("setPage", {
            pagename: "我要卖房页",
            businessline_pvar: "二手房"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});