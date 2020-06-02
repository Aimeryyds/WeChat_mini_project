var e = require("../../utils/hdweapp.js");

Component({
    properties: {
        statusBar: {
            type: Object
        },
        statusBarHeight: {
            type: Number
        },
        hidePannel: {
            type: Boolean
        }
    },
    data: {
        hasReady: !1,
        notTabPage: !1
    },
    methods: {
        goToBack: function() {
            var e = this;
            this.triggerEvent("gotoBack");
            var t = getCurrentPages().length;
            t && t >= 2 ? wx.navigateBack({
                delta: 1,
                fail: function() {},
                success: function() {
                    e.hiidoRoomInfo("0009");
                }
            }) : (wx.reLaunch({
                url: "/pages/index/index"
            }), this.hiidoRoomInfo("0008"));
        },
        goToIndex: function() {
            this.triggerEvent("goToIndex"), wx.switchTab({
                url: "/pages/index/index"
            }), this.hiidoRoomInfo("0008");
        },
        getTabPage: function() {
            var e = getCurrentPages(), t = e[e.length - 1].route;
            return "pages/index/index" !== t && "pages/follow/follow" !== t && "pages/my/my" !== t;
        },
        hiidoRoomInfo: function(t) {
            e.event({
                id: "10101",
                label: t
            });
        }
    },
    ready: function() {
        this.setData({
            hasReady: !0,
            notTabPage: this.getTabPage()
        });
    }
});