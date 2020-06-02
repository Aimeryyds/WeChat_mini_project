var t = "", i = require("../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {
        showImage: !1,
        isPlay: !0,
        isMylist: !1,
        Imagenum: 6,
        imageWidth: "",
        imageWidth2: "",
        personImageWidth1: "",
        personImageWidth2: "",
        isJoinDrtial: !1
    },
    onLoad: function(e) {
        t = this;
        var a = wx.getStorageSync("utoken");
        i.sendRequest({
            url: "?r=activity.index.activity_list&utoken=" + a,
            data: {},
            method: "GET",
            success: function(i) {
                i.data.result[0] ? (console.log(i), console.log("获取活动列表"), t.setData({
                    concentList: i.data.result,
                    isMylist: !1
                })) : t.setData({
                    isMylist: !0
                });
            }
        }), wx.getSystemInfo({
            success: function(i) {
                console.log("hhh"), t.setData({
                    imageWidth: i.windowWidth / 3 - 10,
                    imageWidth2: i.windowWidth / 9 - 10,
                    personImageWidth1: i.windowWidth / .5
                });
            }
        });
    },
    onShow: function() {
        t.data.isJoinDrtial && i.sendRequest({
            url: "?r=activity.index.activity_list&utoken=" + e,
            data: {},
            method: "GET",
            success: function(i) {
                console.log(i), console.log("onshowonshow再次获取活动列表"), t.setData({
                    concentList: i.data.result
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
        wx.navigateTo({
            url: "/pages/member/groupActivity/groupActivity"
        });
    },
    joinUserInfo: function(t) {
        var e = wx.getStorageSync("utoken"), a = this;
        console.log(t.currentTarget.dataset.index);
        var n = parseInt(t.currentTarget.dataset.index);
        a.setData({
            isJoinDrtial: !0
        }), i.sendRequest({
            url: "?r=activity.index.activity_list&utoken=" + e,
            data: {},
            method: "GET",
            success: function(t) {
                a.setData({
                    activity_id: t.data.result[n].id
                }), i.sendRequest({
                    url: "?r=activity.index.views&utoken=" + e + "&activity_id=" + a.data.activity_id,
                    data: {},
                    method: "POST",
                    success: function(t) {
                        console.log(t), wx.navigateTo({
                            url: "/pages/member/groupActivity/establishActivity/establishActivity?activity_id=" + a.data.activity_id
                        });
                    }
                });
            }
        });
    }
});