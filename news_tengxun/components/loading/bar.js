require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../store/index");

Component({
    properties: {
        hasMore: {
            type: Boolean,
            value: !0
        },
        status: {
            type: String,
            value: t.constant.pageStatus.loading,
            observer: function(e) {
                this.data.networkIsConnected !== t.systemInfo.networkIsConnected && this.setData({
                    networkIsConnected: t.systemInfo.networkIsConnected
                });
            }
        },
        loadingText: {
            type: String,
            value: "正在加载更多"
        },
        noMoreText: {
            type: String,
            value: "已显示全部内容"
        },
        errorText: {
            type: String,
            value: "貌似出错了，点击重试"
        },
        noNetworkText: {
            type: String,
            value: "网络无法连接，点击重试"
        }
    },
    data: {
        networkIsConnected: !0,
        pageStatus: t.constant.pageStatus
    },
    created: function() {},
    attached: function() {},
    methods: {
        onTap: function() {
            this.data.status !== t.constant.pageStatus.noNetwork && this.data.status !== t.constant.pageStatus.error || this.triggerEvent("retry");
        }
    }
});