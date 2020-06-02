Page({
    data: {
        albumnew: "",
        vrNum: "",
        tabindex: 0,
        albumid: "album_0"
    },
    onLoad: function(n) {
        this.getStorageData();
    },
    getStorageData: function() {
        var n = JSON.parse(wx.getStorageSync("albumnew"));
        console.log(n);
        var t = [], o = {
            count: 0,
            photo: []
        };
        n.map(function(n) {
            "VR" == n.mainAlbumName ? (o.mainAlbumName = n.mainAlbumName, o.count = o.count + n.count, 
            o.photo.push(n), t[0] = o) : t.push(n);
        }), console.log(t, 0), this.setData({
            albumnew: t,
            vrNum: 0
        });
    },
    tabclick: function(n) {
        var t = n.currentTarget.dataset.index, o = n.currentTarget.dataset.id;
        console.log(t), this.setData({
            tabindex: t,
            albumid: o
        });
    },
    imageClick: function(n) {
        console.log(1);
    },
    vrclick: function(n) {
        var t = n.currentTarget.dataset.targeturl;
        console.log(t), t = encodeURIComponent(t), wx.navigateTo({
            url: "/pages/webview/webview?url=" + t
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