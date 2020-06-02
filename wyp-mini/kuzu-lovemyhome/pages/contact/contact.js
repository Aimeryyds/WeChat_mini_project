var e = getApp(), t = require("../../sdk/dingxiang.js"), a = require("../../utils/gio-minp/index.js").default, o = require("../../sdk/gioConfig.js").default;

a("setConfig", o), Page({
    data: {
        brokerId: null,
        dianpu: null
    },
    onLoad: function(a) {
        var o = this;
        new t({
            appId: e.globalData.dxAppId
        }, function(e, t) {
            if (e) console.log(e); else {
                o.setData({
                    dxDeviceId: t
                });
                var n = a.communityid;
                o.setData({
                    height: "128rpx"
                }), a.brokerId ? (o.setData({
                    communityId: n,
                    cityId: a.cityId,
                    brokerId: a.brokerId,
                    dianpu: a.dianpu
                }), o.getBrokerOne()) : (o.setData({
                    communityId: n,
                    cityId: a.cityId
                }), o.getBrokerInfo());
            }
        });
    },
    getBrokerInfo: function() {
        var t = this, a = e.globalData.url_host;
        wx.request({
            url: a + "/community/" + t.data.cityId + "/v1/communitybrokerlist",
            data: {
                communityid: t.data.communityId
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                console.log(e.data.data), t.setData({
                    brokerInfo: e.data.data.list
                });
            }
        });
    },
    getBrokerOne: function() {
        var t = this, a = e.globalData.url_host, o = {
            brokerid: t.data.brokerId
        };
        wx.request({
            url: a + "/appapi/broker/" + t.data.cityId + "/v1/allbrokerinfo",
            data: o,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                var a = [];
                a.push(e.data.data.brokerinfoparams), t.setData({
                    brokerInfo: a
                });
            }
        });
    },
    tel: function(e) {
        var t = e.currentTarget.id, o = e.currentTarget.dataset.job_leave, n = (this.data.cityId, 
        e.currentTarget.dataset.bid), i = e.currentTarget.dataset.index + 1;
        console.log("*************************************************************************************", i), 
        console.log(o), a("track", "telconsult", {
            iconlocation_var: i,
            agentid_var: n,
            telnum_var: t
        }), 1 == o ? wx.makePhoneCall({
            phoneNumber: t,
            success: function() {
                console.log("拨打电话成功!"), console.log("成功", t);
            },
            fail: function() {
                console.log("拨打电话失败！"), console.log("失败", t);
            }
        }) : wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人！",
            icon: "none"
        });
    },
    toBrokerDetail: function(e) {
        var t = e.currentTarget.dataset.brokerid, a = e.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "/pages/broker_detail/brokerDetail?brokerId=" + t + "&cityId=" + this.data.cityId + "&citycode=" + a
        });
    },
    toIm: function(t) {
        var o = wx.getStorageSync("loginStatus"), n = t.currentTarget.dataset.bid, i = e.globalData.url_host, r = (this.data.cityId, 
        t.currentTarget.dataset.index + 1);
        if (console.log("*************************************************************************************", r), 
        a("track", "onlineconsult", {
            iconlocation_var: r,
            agentid_var: n
        }), 1 == o) {
            var d = t.currentTarget.dataset.leave, c = e.tdsdk;
            console.log("sdk", c), c.appEvent.eventId({
                eventLabel: 1
            }), c.appEvent.eventId({
                eventLabel: 3
            }), c.appEvent.eventId({
                eventLabel: 10
            }), wx.request({
                url: i + "/wxim/wxcallback",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    click_id: e.globalData.click_id,
                    action_type: "RESERVATION",
                    value: 40,
                    user_action_set_id: 1110064786
                },
                method: "post",
                success: function(e) {
                    console.log("成功666:", e);
                }
            }), void 0 === d || 1 == d ? (wx.requestSubscribeMessage({
                tmplIds: e.globalData.tmplids,
                success: function(e) {
                    console.log(e);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + n
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + n + "&ret_type=1&maidian=1&jjrMain=1"
            });
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});