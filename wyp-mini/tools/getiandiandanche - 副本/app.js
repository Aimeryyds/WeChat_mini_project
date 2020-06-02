App({
    onLaunch: function() {},
    globalData: {
        userInfo: null,
        exitlogin: !1,
        myAreaid: "",
        vs: !1,
        timer: null,
        isEnd: !1,
        myShow: !0,
        myVeh: {},
        myLocation: {},
        refundId: " "
    },
    onHide: function() {
        clearInterval(this.globalData.timer), wx.removeStorage({
            key: "myVeh",
            success: function(e) {
                console.log(e);
            }
        }), wx.removeStorage({
            key: "isSao",
            success: function(e) {
                console.log(e);
            }
        });
    }
});