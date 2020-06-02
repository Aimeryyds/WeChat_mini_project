function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/notification.js")), a = t(require("../../../utils/const.js"));

Page({
    data: {},
    onLoad: function(t) {
        console.log(t, ".................."), this.setData({
            inputValue: t.keyword,
            type: t.type
        });
    },
    changevalue: function(t) {
        this.setData({
            inputValue: t.detail.value
        });
    },
    searchvalue: function() {
        if ("indexsearch" == this.data.type) {
            var t = this.data.inputValue;
            e.default.post(a.default.action.HOTEL_SEARCH_DATA, {
                keyword: t
            });
        } else getApp().setFlash("keyword", this.data.inputValue);
        wx.navigateBack({
            delta: 1
        });
    }
});