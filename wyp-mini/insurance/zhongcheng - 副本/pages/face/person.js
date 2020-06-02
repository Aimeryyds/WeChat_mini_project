var e, a = getApp(), t = 5, o = !0, n = "0";

Page({
    data: {
        facePerson: null
    },
    onLoad: function(e) {
        var t = this;
        console.log(e);
        var o = e.personId;
        if (o && null != o) t.queryFacePersonById(o); else {
            var n = a.globalData.facePersons;
            n && (t.queryFacePersonById(n.person_id), t.setData({
                faceImg: a.globalData.faceImg
            }));
        }
    },
    onReady: function() {
        t = 5, this.doTime();
    },
    onShow: function() {},
    queryFacePersonById: function(e) {
        var t = this;
        wx.request({
            url: a.globalData.domainPath + a.globalData.projectName + "/queryFacePerson.do",
            data: {
                requestType: "queryUser",
                personId: e,
                meetingId: a.globalData.meetingId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log(e), "0000" == e.data.errcode) {
                    var a = e.data.person;
                    t.setData({
                        facePerson: a
                    }), n = e.data.isRegister, "1" == e.data.isRegister && wx.showToast({
                        title: "你已经签到过了",
                        icon: "none",
                        duration: 1500
                    });
                } else wx.showToast({
                    title: e.data.errmsg,
                    icon: "none",
                    duration: 1e3
                });
            }
        });
    },
    doTime: function() {
        var a = this;
        if (t < 0) t = 5, a.saveRegisterInfo("1"); else {
            var o = "(" + t + ")";
            a.setData({
                qrbtn: o
            }), t--, e = setTimeout(function() {
                a.doTime();
            }, 1e3);
        }
    },
    toFace: function() {
        wx.navigateBack({
            delta: 1
        }), clearTimeout(e);
    },
    saveRegisterInfo: function(e) {
        var t = this, n = t.data.facePerson;
        n && n.userId ? o && wx.request({
            url: a.globalData.domainPath + a.globalData.projectName + "/saveRegisterInfo.do",
            data: {
                meetingId: a.globalData.meetingId,
                userId: n.userId,
                userName: n.userName
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), "0000" == a.data.errcode ? "1" == e ? (wx.showToast({
                    title: "已自动确认识别",
                    icon: "none",
                    duration: 1e3
                }), setTimeout(function() {
                    t.toFace();
                }, 300)) : t.toFace() : wx.showToast({
                    title: "记录签到信息失败",
                    icon: "none",
                    duration: 1e3
                }), o = !0;
            },
            fail: function(e) {
                console.log(e), o = !0, wx.showToast({
                    title: "记录签到信息失败",
                    icon: "none",
                    duration: 1e3
                });
            }
        }) : wx.showToast({
            title: "无法查询到用户信息",
            icon: "none",
            duration: 1e3
        });
    },
    setDefault: function(e) {
        console.log("kongz");
        var a = this, t = a.data.facePerson;
        t && null != t ? t.netPath = "../../images/face/touxiang.png" : t = {
            netPath: "../../images/face/touxiang.png"
        }, a.setData({
            facePerson: t
        });
    }
});