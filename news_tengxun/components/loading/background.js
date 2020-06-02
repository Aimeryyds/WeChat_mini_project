require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../store/index"), t = require("../../services/jump");

Component({
    properties: {
        absolute: {
            type: Boolean,
            value: !0
        },
        top: {
            type: String,
            value: "500rpx;"
        },
        isBlackTheme: Boolean,
        status: {
            type: String,
            value: e.constant.pageStatus.loading,
            observer: function(t) {
                this.data.networkIsConnected !== e.systemInfo.networkIsConnected && this.setData({
                    networkIsConnected: e.systemInfo.networkIsConnected
                });
            }
        },
        tip: {
            type: String,
            value: "似乎出错了"
        }
    },
    created: function() {},
    attached: function() {},
    data: {
        pageStatus: e.constant.pageStatus,
        networkIsConnected: !0
    },
    methods: {
        refresh: function(t) {
            this.setData({
                status: e.constant.pageStatus.loading
            }), this.triggerEvent("refresh");
        },
        goHome: function() {
            wx.switchTab({
                url: t.PAGE_PATH.HOME
            });
        }
    }
});