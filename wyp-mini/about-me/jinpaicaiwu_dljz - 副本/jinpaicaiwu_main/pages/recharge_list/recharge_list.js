function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, i = Array(t.length); a < t.length; a++) i[a] = t[a];
        return i;
    }
    return Array.from(t);
}

var a = getApp();

Page({
    data: {
        lists: [],
        limit: 10,
        page_id: 1,
        total: 0,
        pager_tips: "（上拉）加载更多"
    },
    _showTips: function(t, a) {
        wx.showModal({
            title: "友情提醒",
            content: t || "",
            showCancel: !1,
            complete: a
        });
    },
    _getSource: function() {
        var i = this;
        a.apiRequest("user", "getuserdeal", {
            data: {
                pageid: i.data.page_id,
                limit: i.data.limit
            },
            success: function(a) {
                var e = a.data || {};
                if ("OK" == e.result) {
                    var s = e.data || [];
                    if (!Array.isArray(s) || !s.length) return !1;
                    var r = i.data.lists;
                    r.push.apply(r, t(s)), i.setData({
                        lists: r,
                        total: e.total
                    });
                } else if ("ERROR" == e.result) switch (e.errmsg) {
                  case "unlogin":
                    wx.navigateTo({
                        url: "../login/login"
                    });
                    break;

                  case "invalid":
                    i._showTips("无效的请求");
                    break;

                  default:
                    i._showTips("请求失败，请稍后重试");
                }
            },
            fail: function() {
                i._showTips("请求失败，请稍后重试");
            }
        });
    },
    onShow: function() {
        this._getSource();
    },
    onReachBottom: function() {
        var t = this.data.lists;
        if (this.data.total <= t.length) return !1;
        var a = parseInt(this.data.page_id);
        isNaN(a) && (a = 0), this.setData({
            page_id: a + 1
        }), this._getSource();
    }
});