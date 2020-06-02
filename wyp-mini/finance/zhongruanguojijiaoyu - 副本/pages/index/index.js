Page({
    data: {
        indicatorDots: !0,
        autoplay: !1,
        interval: 5e3,
        duration: 1e3
    },
    onLoad: function() {
        var t = this;
        wx.request({
            url: "https://miniprogram.zretc.com/api/index.json",
            success: function(e) {
                t.setData({
                    imgUrls: e.data.index.swiper.items,
                    teachers: e.data.index.teachers,
                    students: e.data.index.students,
                    environment: e.data.index.environment
                });
            }
        });
    },
    navigateTo: function(t) {
        wx.setStorage({
            key: "outUrl",
            data: {
                outUrl: t.currentTarget.id
            }
        }), wx.navigateTo({
            url: "../out/out"
        });
    }
});