var e = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        id: "",
        userName: "",
        address: "",
        allnumber: "0",
        used: "0",
        unuse: "0",
        department: "",
        deptlist: [],
        modalName: "",
        deptid: ""
    },
    onLoad: function(a) {
        var r = this, n = this;
        n.setData({
            state: !0,
            trigger: !0
        });
        var o = wx.getStorageSync("userToken");
        console.log("userToken=" + o), null != o && "" != o || e.GetUserToken(), e.Requests_json(t.globalData.insuranceUrl + "/ebike/" + o + "/findUserDepartmentList", {}).then(function(e) {
            if ("0" == e.code) {
                var t = e.result;
                n.setData({
                    deptlist: t
                });
                var a = wx.getStorageSync("deptid");
                if (null != a && "" != a) {
                    for (var o = 0; o < t.length; o++) if (a == t[o].id) {
                        r.getUserInfo(t[o].id), r.setData({
                            deptid: a
                        });
                        break;
                    }
                } else t.length > 1 ? n.setData({
                    modalName: "RadioModal"
                }) : 1 == t.length && (n.setData({
                    deptid: t[0].id
                }), r.getUserInfo(t[0].id));
            }
        });
    },
    ChooseRadio: function(e) {
        var t = e.currentTarget.dataset.value.id;
        this.setData({
            deptid: t,
            modalName: null
        }), wx.setStorageSync("deptid", t), this.getUserInfo(t);
    },
    showModal: function(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        });
    },
    hideModal: function(e) {
        this.setData({
            modalName: null
        });
    },
    goHome: function() {
        var t = wx.getStorageSync("userToken");
        null == t || "" == t ? e.GetUserToken() : wx.navigateTo({
            url: "../home/home"
        });
    },
    goDealerinfo: function() {
        var t = wx.getStorageSync("userToken");
        null == t || "" == t ? e.GetUserToken() : wx.navigateTo({
            url: "../dealerinfo/dealerinfo"
        });
    },
    goDealermy: function() {
        var t = wx.getStorageSync("userToken");
        if (null == t || "" == t) e.GetUserToken(); else {
            var a = this.data.deptid;
            wx.navigateTo({
                url: "../dealermy/dealermy?id=" + a
            });
        }
    },
    goEcForm: function() {
        var t = wx.getStorageSync("userToken");
        if (null == t || "" == t) e.GetUserToken(); else {
            var a = this.data.deptid;
            wx.navigateTo({
                url: "../ecform/ecform?id=" + a
            });
        }
    },
    goEcOrder: function() {
        var t = wx.getStorageSync("userToken");
        null == t || "" == t ? e.GetUserToken() : wx.navigateTo({
            url: "../ecorder/ecorder"
        });
    },
    goInsrcardlist: function() {
        var t = wx.getStorageSync("userToken");
        null == t || "" == t ? e.GetUserToken() : wx.navigateTo({
            url: "../insrcarlist/insrcarlist"
        });
    },
    goEclist: function(t) {
        var a = wx.getStorageSync("userToken");
        if (null == a || "" == a) e.GetUserToken(); else {
            var r = t.currentTarget.dataset.index;
            console.log(r), wx.navigateTo({
                url: "../eclist/eclist?currentIndex=" + r
            });
        }
    },
    getUserInfo: function(a) {
        var r = this, n = wx.getStorageSync("userToken");
        e.Requests_json(t.globalData.insuranceUrl + "/ebike/" + n + "/" + a + "/userInfo", {}).then(function(e) {
            if (console.info(e), "0" == e.code) {
                var t = e.result.cardUserMap, a = e.result.department, n = e.result.user;
                r.setData({
                    userName: n.userName,
                    address: a.address,
                    allnumber: t.allnumber,
                    used: t.used,
                    unuse: t.unuse,
                    department: a
                });
            }
        });
    },
    chooseDepartment: function(e) {
        this.data.deptlist.length > 1 && this.setData({
            modalName: "RadioModal"
        });
    }
});