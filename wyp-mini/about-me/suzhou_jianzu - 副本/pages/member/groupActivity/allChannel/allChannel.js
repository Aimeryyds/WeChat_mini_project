var t = "", i = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

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
    onLoad: function(i) {
        t = this, e = wx.getStorageSync("utoken"), t.getList(), wx.getSystemInfo({
            success: function(i) {
                t.setData({
                    imageWidth: i.windowWidth / 3,
                    imageWidth2: i.windowWidth / 9 - 10,
                    personImageWidth1: i.windowWidth / .5
                });
            }
        });
    },
    onShow: function() {
        var t = this;
        t.data.isJoinDrtial && t.getList();
    },
    getList: function() {
        i.sendRequest({
            url: "?r=activity.index.activity_list&utoken=" + e,
            method: "GET",
            success: function(i) {
                i.data.result[0] ? t.setData({
                    concentList: i.data.result,
                    isMylist: !1
                }) : t.setData({
                    isMylist: !0
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
        console.log(t), e = wx.getStorageSync("utoken");
        var a = this, n = parseInt(t.currentTarget.dataset.id);
        a.setData({
            isJoinDrtial: !0
        }), i.sendRequest({
            url: "?r=activity.index.views",
            data: {
                utoken: e,
                activity_id: n
            },
            success: function(t) {
                console.log(t), wx.navigateTo({
                    url: "../establishActivity/establishActivity?activity_id=" + n
                });
            }
        });
    }
});