function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../network/api")), a = t(require("../../../utils/notification.js")), i = t(require("../../../utils/const.js"));

Page({
    data: {
        staffList: [],
        staffId: 0
    },
    onLoad: function(t) {
        var a = this, i = t.staffId, r = t.storeId, s = t.serviceId;
        this.setData({
            staffId: i
        }), wx.showLoading({
            title: "请稍后"
        }), console.log("//////", s, i, r), e.default.querySelectStaffList({
            storeId: r,
            projectId: s
        }).then(function(t) {
            wx.hideLoading(), a.setData({
                staffList: t.data
            });
        }).catch(function(t) {
            wx.hideLoading(), console.log("querySelectStaffList error", t);
        });
    },
    handleSelectStaff: function(t) {
        var e = t.currentTarget.dataset.id, r = t.currentTarget.dataset.name, s = t.currentTarget.dataset.img;
        a.default.post(i.default.action.YUYUE_STAFF, {
            id: e,
            serverName: r,
            headImg: s
        }), wx.navigateBack();
    }
});