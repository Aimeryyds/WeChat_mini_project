getApp();

Page({
    data: {
        isVisitLimit: !1
    },
    onLoad: function(i) {
        var t = "出错啦！", e = i.isVisitLimit;
        i.errMsg && (t = i.errMsg), e && (t = "超过访问人数啦"), i.errCode && (t = t + "errCode" + i.errCode), 
        wx.setNavigationBarTitle({
            title: t
        }), this.setData({
            isVisitLimit: e
        });
    }
});