Page({
    data: {
        albumdata: "",
        albumloop: "",
        itemcount: "",
        itemindex: "",
        scrollIndex: 0,
        coverCurrentIndex: 0,
        scrollItemId: ""
    },
    onLoad: function(e) {
        var a = JSON.parse(wx.getStorageSync("albumnew")), t = JSON.parse(wx.getStorageSync("albumloop"));
        console.log(a), console.log(t);
        var o = e.albumindex, n = 0, r = [];
        a.map(function(e) {
            r.push(e.count);
        }), console.log(r), function(e, a) {
            var t = 0, o = 0, r = e.length;
            if (r > 0) for (t; t < r; t++) if ((o += e[t]) >= a) return void (n = t);
        }(r, o), this.setData({
            albumloop: t,
            albumdata: a,
            coverCurrentIndex: o - 1,
            scrollIndex: n
        });
    },
    loopchangecover: function(e) {
        var a = this.data.albumloop[e.detail.current].albumName, t = "";
        this.data.albumdata.map(function(e, o) {
            e.albumName == a && (t = o);
        }), this.setData({
            scrollIndex: t
        });
    },
    coverAlbumClick: function(e) {
        var a = parseInt(e.currentTarget.dataset.index), t = e.currentTarget.dataset.id;
        console.log(a);
        for (var o = 0, n = 0; n < a; n++) o += this.data.albumdata[n].count;
        this.setData({
            coverCurrentIndex: o,
            scrollItemId: t
        });
    },
    routergo: function(e) {
        var a = e.currentTarget.dataset.type, t = "";
        if ("album" == a) t = "/pages/newhouse/albumlist/albumlist"; else if ("albumvr" == a) {
            var o = e.currentTarget.dataset.targeturl;
            t = "/pages/webview/webview?url=" + (o = encodeURIComponent(o));
        }
        wx.navigateTo({
            url: t
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