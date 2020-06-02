var t = require("../../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        isallActivity: !0,
        showImage: !1,
        cardAgain: !1,
        imgUrls: [],
        showImgUrls: [],
        activityList: [],
        limit: "不限",
        currIndexImg: 1,
        activityTop: ""
    },
    onLoad: function(e) {
        var i = this;
        a = wx.getStorageSync("utoken"), i.setData({
            activity_id: e.activity_id
        }), t.sendRequest({
            url: "?r=activity.index.get_activity&utoken=" + a + "&activity_id=" + i.data.activity_id,
            method: "POST",
            success: function(t) {
                i.setData({
                    activityList: t.data.result,
                    title: t.data.result.title,
                    views: t.data.result.views,
                    membersList: t.data.result.members,
                    members: t.data.result.members.length,
                    type: t.data.result.type,
                    locate: t.data.result.locate,
                    cost_type: t.data.result.cost_type,
                    sy: t.data.result.start_time.y,
                    sm: t.data.result.start_time.m,
                    sd: t.data.result.start_time.d,
                    sh: t.data.result.start_time.h,
                    si: t.data.result.start_time.i,
                    ey: t.data.result.end_time.y,
                    em: t.data.result.end_time.m,
                    ed: t.data.result.end_time.d,
                    eh: t.data.result.end_time.h,
                    ei: t.data.result.end_time.i,
                    imgUrls: t.data.result.banner_imgs,
                    Imagenum: t.data.result.banner_imgs.length,
                    limit_members: t.data.result.limit_members,
                    mynickname: t.data.result.members[0].nickname,
                    mobile: t.data.result.mobile,
                    lat: t.data.result.lat,
                    lng: t.data.result.lng
                });
                for (var a in i.data.membersList) i.data.membersList[a].nickname || delete i.data.membersList[a];
                i.setData({
                    membersList: i.data.membersList
                }), 0 == parseInt(i.data.limit_members) && i.setData({
                    limit_members: i.data.limit
                });
            }
        });
    },
    clickOpen: function() {
        console.log("hhhh"), this.setData({
            isallActivity: !1
        });
    },
    clickStop: function() {
        console.log("hhhh"), this.setData({
            isallActivity: !0
        });
    },
    joinImage: function() {
        console.log("hhhh");
        var t = this;
        t.data.showImage || t.setData({
            showImage: !0
        });
    },
    showImages: function() {
        this.setData({
            showImage: !1
        });
    },
    currChange: function(t) {
        this.setData({
            currIndexImg: parseInt(t.detail.current) + 1
        });
    },
    userNavigation: function() {
        var t = this;
        wx.openLocation({
            latitude: parseFloat(t.data.lat),
            longitude: parseFloat(t.data.lng),
            scale: 28
        });
    },
    joinUserInform: function() {
        var t = this;
        wx.navigateTo({
            url: "../userInformation/userInformation?&activity_id=" + t.data.activity_id + "&allNum=" + t.data.members
        });
    },
    onShareAppMessage: function() {
        var t = this, a = "/pages/member/groupActivity/establishActivity/establishActivity?objectId=" + t.data.goodsId + "&activity_id=" + t.data.activity_id;
        return {
            title: t.data.title + t.data.type,
            path: a
        };
    },
    joinActivity: function() {
        var e = this;
        a = wx.getStorageSync("utoken"), console.log(e.data.activity_id), t.sendRequest({
            url: "?r=activity.index.join&utoken=" + a + "&activity_id=" + e.data.activity_id,
            data: {},
            method: "POST",
            success: function(i) {
                console.log(i), console.log("加入活动"), e.setData({
                    activityTop: i.data.msg
                }), t.sendRequest({
                    url: "?r=activity.index.get_activity&utoken=" + a + "&activity_id=" + e.data.activity_id,
                    data: {},
                    method: "POST",
                    success: function(t) {
                        e.setData({
                            membersList: t.data.result.members,
                            members: t.data.result.members.length,
                            cardAgain: !0
                        });
                        for (var a in e.data.membersList) e.data.membersList[a].nickname || delete e.data.membersList[a];
                        e.setData({
                            membersList: e.data.membersList
                        });
                    }
                });
            }
        });
    },
    returnIndex: function() {
        this.setData({
            cardAgain: !1
        });
    }
});