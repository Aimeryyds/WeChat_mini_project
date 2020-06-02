var t = getApp();

Page({
    data: {
        events: [],
        loading: !0,
        loading_fail: !1,
        loading_ok: !1
    },
    onLoad: function(a) {
        wx.hideShareMenu();
        var e = this, n = "event_getDoingEventList", i = {
            type: "pai"
        }, s = t.getParam(n, i);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[n].error) {
                    for (var a = 0; a < t.data[n].data.length; a++) t.data[n].data[a].show = 0;
                    e.setData({
                        loading: !1,
                        loading_ok: !0,
                        events: t.data[n].data
                    });
                } else e.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                e.setData({
                    loading: !1,
                    loading_fail: !0
                });
            }
        });
    },
    do_cancle: function() {
        wx.setStorageSync("event_id", 0), wx.setStorageSync("event_subject", ""), wx.navigateBack();
    },
    do_show: function(t) {
        var a = this, e = t.currentTarget.dataset.idx, n = a.data.events;
        1 == n[e].show ? n[e].show = 0 : n[e].show = 1, a.setData({
            events: n
        });
    },
    do_event: function(t) {
        var a = this, e = t.currentTarget.dataset.idx, n = a.data.events;
        wx.setStorageSync("event_id", n[e].id), wx.setStorageSync("event_subject", n[e].subject), 
        wx.navigateBack();
    },
    do_event2: function(t) {
        var a = this, e = t.currentTarget.dataset.idx, n = t.currentTarget.dataset.idx2, i = a.data.events;
        wx.setStorageSync("event_id", i[e].childlist[n].id), wx.setStorageSync("event_subject", i[e].subject + " · " + i[e].childlist[n].subject), 
        wx.navigateBack();
    },
    onReady: function() {}
});