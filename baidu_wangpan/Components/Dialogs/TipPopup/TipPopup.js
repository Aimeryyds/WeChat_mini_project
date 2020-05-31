var t = require("../../../netdisk_utils/common.js"), e = getApp();

Component({
    properties: {},
    data: {
        isShow: !1,
        schema: "",
        isIpx: e.globalData.isIpx
    },
    ready: function() {
        this.makeScheme();
    },
    methods: {
        makeScheme: function() {
            var t = encodeURIComponent("/我的资源/ "), e = "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&uk=" + wx.getStorageSync("uk") + "&path=" + t + "&origin=1";
            this.setData({
                schema: e
            });
        },
        launchErr: function() {
            (0, t.setCode)(this.data.schema, {
                success: function() {
                    wx.showToast({
                        title: "口令已复制，请打开百度网盘App查看",
                        icon: "none"
                    });
                }
            });
        },
        launchSuccess: function() {},
        show: function(e) {
            var o = !0;
            "boolean" == typeof e ? o = e : (wx.log.transferOptimization.tipPopupClose.send(), 
            (0, t.isShowSavedTip)(!0), o = !1), this.setData({
                isShow: o
            });
        }
    }
});