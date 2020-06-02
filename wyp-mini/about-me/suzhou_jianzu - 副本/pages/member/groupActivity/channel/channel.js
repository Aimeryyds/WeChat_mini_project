var t = "", e = require("../../../../utils/server"), i = wx.getStorageSync("utoken"), a = new Date();

Page({
    data: {
        loading: !0,
        showImage: !1,
        isPlay: !0,
        isMylist: !1,
        Imagenum: 6,
        imageWidth: "",
        imageWidth2: "",
        personImageWidth1: "",
        personImageWidth2: "",
        isJoinDrtial: !1,
        eidtList: {}
    },
    onLoad: function(e) {
        t = this, i = wx.getStorageSync("utoken"), t.getList(), wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    imageWidth: e.windowWidth / 3,
                    imageWidth2: e.windowWidth / 9 - 10,
                    personImageWidth1: e.windowWidth / .5
                });
            }
        });
    },
    onShow: function() {
        this.getList(!1);
    },
    getList: function(s) {
        var s = void 0 === s;
        e.sendRequest({
            url: "?r=activity.index.my_activity&utoken=" + i,
            method: "GET",
            showToast: s,
            success: function(e) {
                if (e.data.result[0]) {
                    t.setData({
                        concentList: e.data.result,
                        isMylist: !1
                    });
                    for (var i in t.data.concentList) {
                        var s = t.data.concentList[i].date.y + "-" + t.data.concentList[i].date.m + "-" + t.data.concentList[i].date.d;
                        s = s.replace(/-/g, "/");
                        var n = new Date(s);
                        a > n ? (t.data.concentList[i].isTime = !1, t.setData({
                            concentList: t.data.concentList
                        })) : (t.data.concentList[i].isTime = !0, t.setData({
                            concentList: t.data.concentList
                        }));
                    }
                } else t.setData({
                    isMylist: !0
                });
                t.setData({
                    loading: !1
                });
            }
        });
    },
    joinDetail: function() {
        wx.navigateTo({
            url: "channelDetail/channelDetail"
        });
    },
    joinCreatActivity: function() {
        wx.redirectTo({
            url: "/pages/member/groupActivity/groupActivity"
        });
    },
    joinUserInfo: function(t) {
        i = wx.getStorageSync("utoken");
        var a = this, s = t.currentTarget.dataset.id;
        a.setData({
            isJoinDrtial: !0
        }), e.sendRequest({
            url: "?r=activity.index.views",
            data: {
                utoken: i,
                activity_id: s
            },
            method: "POST",
            success: function(t) {
                wx.navigateTo({
                    url: "../establishActivity/establishActivity?activity_id=" + s
                });
            }
        });
    },
    deleteActivity: function(t) {
        i = wx.getStorageSync("utoken");
        var a = this, s = t.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "确定要删除该活动吗？",
            confirmColor: "#D95940",
            success: function(t) {
                t.confirm ? e.sendRequest({
                    url: "?r=activity.delete&utoken=" + i,
                    data: {
                        activity_id: s
                    },
                    method: "GET",
                    success: function(t) {
                        a.getList();
                    }
                }) : t.cancel;
            }
        });
    },
    eidtActivity: function(t) {
        this.setData({
            isEidt: !0,
            eidtactivityId: t.currentTarget.dataset.id,
            isTime: !0,
            eidtIndex: t.currentTarget.dataset.index
        });
    },
    closeEidt: function() {
        this.setData({
            isEidt: !1
        });
    },
    actItem: function(e) {
        t = this, e.detail.value ? t.setData({
            actItem: e.detail.value,
            "eidtList.title": e.detail.value
        }) : t.setData({
            actItem: ""
        });
    },
    phone: function(e) {
        t = this;
        var i = e.detail.value;
        /^1(3|4|5|7|8)\d{9}$/.test(i) ? t.setData({
            myphone: i,
            "eidtList.mobile": i
        }) : (t.setData({
            myphone: ""
        }), wx.showToast({
            title: "手机号错误",
            image: "https://tws.cnweisou.com/images/eidtNo.png",
            duration: 2e3
        }));
    },
    startTime: function(e) {
        t = this, console.log(e);
        var i = e.detail.value;
        i && t.setData({
            startTime: i,
            "eidtList.start_time": i + " 00:00:00"
        });
    },
    endTime: function(e) {
        t = this;
        var i = e.detail.value;
        i && t.setData({
            endTime: i,
            "eidtList.end_time": i
        });
    },
    map: function() {
        var t = this;
        wx.chooseLocation({
            success: function(e) {
                console.log(e), t.setData({
                    mapArea: e.name,
                    "eidtList.locate": e.name
                });
            }
        });
    },
    eidtContArea: function(e) {
        e.detail.value ? t.setData({
            cont: e.detail.value,
            "eidtList.note": e.detail.value
        }) : t.setData({
            cont: e.detail.value
        });
    },
    eidtReset: function(t) {
        this.setData({
            isEidt: !1
        });
    },
    eidtSubmit: function(t) {
        var a = this;
        i = wx.getStorageSync("utoken"), console.log(t), console.log("eidtSubmit--------"), 
        console.log(a.data.eidtList), "{}" == JSON.stringify(a.data.eidtList) ? wx.showToast({
            title: "没有修改信息",
            image: "https://tws.cnweisou.com/images/eidtNo.png",
            duration: 2e3
        }) : (a.data.eidtList.utoken = i, a.data.eidtList.activity_id = a.data.eidtactivityId, 
        a.setData({
            eidtList: a.data.eidtList
        }), console.log(a.data.eidtList), e.sendRequest({
            url: "?r=activity.index.edit",
            data: a.data.eidtList,
            method: "POST",
            success: function(t) {
                (a.data.eidtList.title || a.data.eidtList.note) && a.getList(), wx.showToast({
                    title: "修改成功",
                    image: "https://tws.cnweisou.com/images/eidtSucc.png",
                    duration: 2e3
                }), setTimeout(function() {
                    a.setData({
                        isEidt: !1
                    });
                }, 1500);
            }
        }));
    },
    toAllActivity: function() {
        wx.redirectTo({
            url: "../allChannel/allChannel"
        });
    }
});