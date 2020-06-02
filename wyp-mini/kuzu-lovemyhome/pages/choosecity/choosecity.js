var t = getApp();

Page({
    data: {
        citylocation: "",
        citylist: "",
        from: ""
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("citylocation");
        console.log(t), this.setData({
            citylocation: a,
            from: t.from
        }), this.getcitylist();
    },
    getcitylist: function() {
        var a = this;
        wx.request({
            url: t.globalData.url_host + "/appapi/home/switchweb",
            success: function(t) {
                console.log("城市列表", t);
                var i = t.data.data;
                a.setData({
                    citylist: i
                });
            }
        });
    },
    setLocation: function(t) {
        var a = t.currentTarget.dataset.name, i = t.currentTarget.dataset.id, e = getCurrentPages();
        if (console.log("dadsasadsadsadsasadasdasdasdadadas", e.length), "index" == this.data.from) (n = e[e.length - 2]).setData({
            cityname: a,
            cityid: i,
            loadinghide: !1,
            iscitylistback: !0
        }), n.getdata(), wx.navigateBack(); else if ("newhouse" == this.data.from) {
            console.log("cityidcityidcityidcityidcityid", i);
            var n = e[e.length - 2];
            n.setData({
                cityname: a,
                cityid: i
            }), n.getData();
            var o = e[e.length - 3];
            o.setData({
                cityname: a,
                cityid: i
            }), o.getdata(), wx.navigateBack();
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