var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        e = wx.getStorageSync("utoken");
        var s = this;
        s.setData({
            activity_id: a.activity_id,
            allNum: a.allNum
        }), t.sendRequest({
            url: "?r=activity.index.get_members&utoken=" + e + "&activity_id=" + s.data.activity_id,
            method: "GET",
            success: function(t) {
                t.data.result[0].mobile = t.data.result.mobile, s.setData({
                    userList: t.data.result
                }), delete s.data.userList.mobile, s.setData({
                    userList: s.data.userList
                });
                for (var e in s.data.userList) s.data.userList[e].nickname || delete s.data.userList[e];
                s.setData({
                    userList: s.data.userList
                });
            }
        });
    },
    onShow: function() {
        e = wx.getStorageSync("utoken");
        var a = this;
        t.sendRequest({
            url: "?r=activity.index.get_members&utoken=" + e + "&activity_id=" + a.data.activity_id,
            method: "GET",
            success: function(t) {
                t.data.result[0].mobile = t.data.result.mobile, a.setData({
                    userList: t.data.result
                }), delete a.data.userList.mobile, a.setData({
                    userList: a.data.userList
                });
                for (var e in a.data.userList) a.data.userList[e].nickname || delete a.data.userList[e];
                a.setData({
                    userList: a.data.userList
                });
            }
        });
    }
});