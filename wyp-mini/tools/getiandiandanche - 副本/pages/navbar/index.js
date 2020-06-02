var t = getApp();

Component({
    properties: {
        innerText: {
            type: String,
            value: "default value"
        },
        customBackReturn: {
            type: Boolean,
            value: !1
        },
        goHome: {
            type: String,
            value: ""
        }
    },
    options: {
        multipleSlots: !0
    },
    data: {
        navBack: "/Content/images/top_back.png",
        someData: {}
    },
    attached: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.system.indexOf("iOS") > -1;
                t.setData({
                    statusHeight: e.statusBarHeight,
                    navHeight: a ? 44 : 48
                });
            }
        }), t.onTap(this.data.statusHeight / 1.5);
    },
    methods: {
        onTap: function(t) {
            this.triggerEvent("myevent", t);
        },
        backClick: function() {},
        customMethod: function() {},
        navBack: function() {
            wx.removeStorage({
                key: "myVeh",
                success: function(t) {
                    console.log(t);
                }
            }), wx.removeStorage({
                key: "isSao",
                success: function(t) {}
            }), t.globalData.vs = !0, "行程结束" != this.data.innerText ? (console.log(this.data), 
            this.data.goHome ? (wx.navigateTo({
                url: "../index/index"
            }), wx.clearStorage(), t.globalData.exitlogin = !0) : wx.navigateBack({
                delta: 1
            })) : wx.reLaunch({
                url: "../index"
            });
        }
    }
});