var t = getApp(), a = require("../../sdk/dingxiang.js");

Page({
    data: {
        delBtnWidth: 160,
        tabCur: 2,
        list: [],
        typeNum: 2,
        listHidden: !1,
        houseNo: !0,
        loadinghide: !0,
        from_tip: 0
    },
    onLoad: function(e) {
        var i = this;
        new a({
            appId: t.globalData.dxAppId
        }, function(t, a) {
            t ? console.log(t) : (i.setData({
                dxDeviceId: a
            }), void 0 !== e.from_tip && void 0 !== e.bid && 1 == e.from_tip && i.setData({
                from_tip: 1,
                bid: e.bid
            }), i.getData(i.data.typeNum));
        });
    },
    getData: function(a) {
        var e = t.globalData.url_host, i = this, d = wx.getStorageSync("userInfo");
        i.data.uidNum = d.uid, i.data.tokenVal = d.token;
        var o = "", n = {
            uid: i.data.uidNum
        };
        i.setData({
            loadinghide: !1
        }), 2 == i.data.typeNum && (o = e + "/appapi/user/v1/exchangehouselist"), 1 == i.data.typeNum && (o = e + "/appapi/user/v1/renthouselist"), 
        wx.request({
            url: o,
            method: "POST",
            data: n,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: i.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (console.log("data", t.data), 200 == t.data.status) {
                    var a = t.data.data.list;
                    i.setData({
                        loadinghide: !0,
                        houseNo: !0,
                        list: a
                    });
                } else i.setData({
                    houseNo: !1,
                    loadinghide: !0
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    imgError: function(t) {
        var a = {};
        a["list[" + t.target.dataset.index + "].imgurl"] = "https://res.5i5j.com/cache/weixin/common/default_house_list_404.png", 
        this.setData(a);
    },
    imageError: function(t) {
        var a = {};
        a["item.imgurl"] = "https://res.5i5j.com/cache/weixin/common/default_house_list_404.png", 
        this.setData(a);
    },
    tabFn: function(t) {
        var a = this, e = t.currentTarget.dataset;
        a.data.typeNum = e.typenum, a.setData({
            tabCur: a.data.typeNum,
            list: []
        }), this.getData(a.data.typeNum);
    },
    toDetail: function(t) {
        var a = this, e = parseInt(t.currentTarget.dataset.index);
        console.log("index", e);
        var i = a.data.list[e].housesid, d = a.data.list[e].cityid;
        if (1 == a.data.from_tip) {
            if (2 == a.data.typeNum) o = 1; else var o = 2;
            wx.redirectTo({
                url: "../im/im?type=" + o + "&cityId=" + d + "&hid=" + i + "&bid=" + a.data.bid
            });
        } else 2 == a.data.typeNum && wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + i + "&cityId=" + d
        }), 1 == a.data.typeNum && wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + i + "&cityId=" + d
        });
    },
    xiajiaFn: function() {
        wx.showToast({
            title: "此房源已下架,详情请咨询经纪人",
            icon: "none"
        });
    },
    drawStart: function(t) {
        var a = this, e = t.touches[0];
        for (var i in a.data.list) a.data.list[i].right = 0;
        a.setData({
            list: a.data.list,
            startX: e.clientX
        });
    },
    drawMove: function(t) {
        var a = this, e = t.touches[0], i = a.data.list[t.currentTarget.dataset.index], d = a.data.startX - e.clientX;
        d >= 20 ? (d > a.data.delBtnWidth && (d = a.data.delBtnWidth), i.right = d, a.setData({
            list: a.data.list
        })) : (i.right = 0, a.setData({
            list: a.data.list
        }));
    },
    drawEnd: function(t) {
        var a = this, e = a.data.list[t.currentTarget.dataset.index];
        e.right >= a.data.delBtnWidth / 2 ? (e.right = a.data.delBtnWidth, a.setData({
            list: a.data.list
        })) : (e.right = 0, a.setData({
            list: a.data.list
        }));
    },
    delItemFn: function(a) {
        var e = t.globalData.url_host, i = this, d = a.currentTarget.dataset, o = {
            uid: i.data.uidNum,
            type: i.data.typeNum,
            companysid: d.cityid,
            commonid: d.houseid
        };
        i.setData({
            loadinghide: !1,
            list: []
        }), wx.request({
            url: e + "/appapi/user/v1/unfocus",
            method: "POST",
            data: o,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: i.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                200 == t.data.status ? i.getData(i.data.typeNum) : i.setData({
                    loadinghide: !0,
                    houseNo: !0
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
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